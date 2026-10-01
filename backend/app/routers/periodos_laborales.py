"""Certificación Laboral: Gestión de Períodos Laborales.

Endpoints:
- POST /contratos/{id}/periodos
- GET /contratos/{id}/periodos
- GET /periodos/{id}
- PATCH /periodos/{id}
- DELETE /periodos/{id}
"""
from __future__ import annotations

import logging
import uuid
from datetime import date, datetime

from fastapi import APIRouter, Depends, Query
from pydantic import BaseModel
from sqlalchemy import select, func
from sqlalchemy.orm import Session

from ..database import get_db
from ..deps import Page, aplicar_orden, err, get_company_id, get_current_user, paginacion
from ..models import (
    Contrato, PeriodoLaboral, PeriodoDocumentoRequerido, PeriodoDocumento, 
    AuditoriaDocumento, RequisitoTemplate, Sujeto, User
)

logger = logging.getLogger("acredittia.periodos_laborales")

router = APIRouter(tags=["certificacion_laboral"])

ORDEN_PERIODOS = {"nombre", "fecha_inicio", "fecha_fin", "estado", "porcentaje_cumplimiento"}

class PeriodoLaboralIn(BaseModel):
    nombre: str
    tipo: str = "mensual"
    fecha_inicio: date
    fecha_fin: date

class PeriodoLaboralPatch(BaseModel):
    nombre: str | None = None
    tipo: str | None = None
    fecha_inicio: date | None = None
    fecha_fin: date | None = None
    estado: str | None = None

class DocumentoRequeridoIn(BaseModel):
    requisito_template_id: uuid.UUID
    ambito: str
    obligatorio: bool = True

class DocumentosRequeridosBulkIn(BaseModel):
    documentos: list[DocumentoRequeridoIn]

class PeriodoDocumentoIn(BaseModel):
    sujeto_id: uuid.UUID
    requisito_template_id: uuid.UUID
    archivo_url: str | None = None

class AuditarDocumentoIn(BaseModel):
    accion: str
    observacion: str | None = None


def _get_contrato(db: Session, cid: uuid.UUID, contrato_id: uuid.UUID) -> Contrato:
    c = db.get(Contrato, contrato_id)
    if not c or c.company_id != cid:
        raise err(404, "NO_ENCONTRADO", "Contrato no existe")
    return c

def _get_periodo(db: Session, cid: uuid.UUID, periodo_id: uuid.UUID) -> PeriodoLaboral:
    p = db.get(PeriodoLaboral, periodo_id)
    if not p:
        raise err(404, "NO_ENCONTRADO", "Período Laboral no existe")
    # Verify contract belongs to company
    c = db.get(Contrato, p.contrato_id)
    if not c or c.company_id != cid:
        raise err(404, "NO_ENCONTRADO", "Período Laboral no existe")
    return p


@router.post("/contratos/{contrato_id}/periodos")
def crear_periodo(
    contrato_id: uuid.UUID,
    carga: PeriodoLaboralIn,
    cid: uuid.UUID = Depends(get_company_id),
    db: Session = Depends(get_db)
):
    """Crea un nuevo período laboral para el contrato."""
    _get_contrato(db, cid, contrato_id)
    
    p = PeriodoLaboral(
        contrato_id=contrato_id,
        nombre=carga.nombre,
        tipo=carga.tipo,
        fecha_inicio=carga.fecha_inicio,
        fecha_fin=carga.fecha_fin,
        estado="abierto",
        porcentaje_cumplimiento=0.0
    )
    db.add(p)
    db.commit()
    db.refresh(p)
    return p


@router.get("/contratos/{contrato_id}/periodos")
def listar_periodos_contrato(
    contrato_id: uuid.UUID,
    estado: str | None = None,
    cid: uuid.UUID = Depends(get_company_id),
    db: Session = Depends(get_db),
    pag: Page = Depends(paginacion),
    orden: str = Query("-fecha_inicio")
):
    """Lista los períodos laborales de un contrato."""
    _get_contrato(db, cid, contrato_id)
    
    q = select(PeriodoLaboral).where(PeriodoLaboral.contrato_id == contrato_id)
    if estado:
        q = q.where(PeriodoLaboral.estado == estado)
        
    q = aplicar_orden(q, PeriodoLaboral, orden, ORDEN_PERIODOS)
    
    total = db.scalar(select(select(PeriodoLaboral).where(PeriodoLaboral.contrato_id == contrato_id).subquery().count()))
    if estado:
         total = db.scalar(select(select(PeriodoLaboral).where(PeriodoLaboral.contrato_id == contrato_id, PeriodoLaboral.estado == estado).subquery().count()))
         
    items = db.execute(q.offset(pag.offset).limit(pag.limit)).scalars().all()
    
    return {
        "items": items,
        "total": total or 0,
        "page": pag.page,
        "size": pag.limit,
    }


@router.get("/periodos/{periodo_id}")
def obtener_periodo(
    periodo_id: uuid.UUID,
    cid: uuid.UUID = Depends(get_company_id),
    db: Session = Depends(get_db)
):
    """Obtiene el detalle de un período laboral."""
    return _get_periodo(db, cid, periodo_id)


@router.patch("/periodos/{periodo_id}")
def actualizar_periodo(
    periodo_id: uuid.UUID,
    carga: PeriodoLaboralPatch,
    cid: uuid.UUID = Depends(get_company_id),
    db: Session = Depends(get_db)
):
    """Actualiza un período laboral."""
    p = _get_periodo(db, cid, periodo_id)
    
    if carga.nombre is not None:
        p.nombre = carga.nombre
    if carga.tipo is not None:
        p.tipo = carga.tipo
    if carga.fecha_inicio is not None:
        p.fecha_inicio = carga.fecha_inicio
    if carga.fecha_fin is not None:
        p.fecha_fin = carga.fecha_fin
    if carga.estado is not None:
        p.estado = carga.estado
        
    p.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(p)
    return p


@router.delete("/periodos/{periodo_id}", status_code=204)
def eliminar_periodo(
    periodo_id: uuid.UUID,
    cid: uuid.UUID = Depends(get_company_id),
    db: Session = Depends(get_db)
):
    """Elimina un período laboral."""
    p = _get_periodo(db, cid, periodo_id)
    
    # In a full impl, we might want to block deletion if it has documents
    db.delete(p)
    db.commit()

# --- 3. Documentos Requeridos por Período ---

@router.post("/periodos/{periodo_id}/documentos-requeridos")
def asociar_documentos_requeridos(
    periodo_id: uuid.UUID,
    carga: DocumentosRequeridosBulkIn,
    cid: uuid.UUID = Depends(get_company_id),
    db: Session = Depends(get_db)
):
    """Asocia en bulk documentos requeridos a un período."""
    _get_periodo(db, cid, periodo_id)
    
    # Optional: clean existing if replacing, for now just append
    creados = []
    for doc in carga.documentos:
        req = PeriodoDocumentoRequerido(
            periodo_id=periodo_id,
            requisito_template_id=doc.requisito_template_id,
            ambito=doc.ambito,
            obligatorio=doc.obligatorio
        )
        db.add(req)
        creados.append(req)
    
    db.commit()
    for c in creados:
        db.refresh(c)
    return creados

@router.get("/periodos/{periodo_id}/documentos-requeridos")
def listar_documentos_requeridos(
    periodo_id: uuid.UUID,
    cid: uuid.UUID = Depends(get_company_id),
    db: Session = Depends(get_db)
):
    """Lista los documentos requeridos de un período."""
    _get_periodo(db, cid, periodo_id)
    q = select(PeriodoDocumentoRequerido).where(PeriodoDocumentoRequerido.periodo_id == periodo_id)
    items = db.execute(q).scalars().all()
    return items


# --- 4. Carga Documental por Período ---

@router.post("/periodos/{periodo_id}/documentos")
def cargar_documento_periodo(
    periodo_id: uuid.UUID,
    carga: PeriodoDocumentoIn,
    cid: uuid.UUID = Depends(get_company_id),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Sube un documento asociado a un sujeto y período."""
    _get_periodo(db, cid, periodo_id)
    
    doc = PeriodoDocumento(
        periodo_id=periodo_id,
        sujeto_id=carga.sujeto_id,
        requisito_template_id=carga.requisito_template_id,
        archivo_url=carga.archivo_url,
        estado="cargado" if carga.archivo_url else "pendiente",
        fecha_carga=datetime.utcnow() if carga.archivo_url else None,
        cargado_por=user.id if carga.archivo_url else None
    )
    db.add(doc)
    db.commit()
    db.refresh(doc)
    return doc

@router.get("/periodos/{periodo_id}/documentos")
def listar_documentos_periodo(
    periodo_id: uuid.UUID,
    sujeto_id: uuid.UUID | None = None,
    estado: str | None = None,
    requisito_template_id: uuid.UUID | None = None,
    cid: uuid.UUID = Depends(get_company_id),
    db: Session = Depends(get_db),
    pag: Page = Depends(paginacion)
):
    """Lista documentos de un período (con filtros)."""
    _get_periodo(db, cid, periodo_id)
    
    q = select(PeriodoDocumento).where(PeriodoDocumento.periodo_id == periodo_id)
    
    if sujeto_id:
        q = q.where(PeriodoDocumento.sujeto_id == sujeto_id)
    if estado:
        q = q.where(PeriodoDocumento.estado == estado)
    if requisito_template_id:
        q = q.where(PeriodoDocumento.requisito_template_id == requisito_template_id)
        
    total = db.scalar(select(func.count()).select_from(q.subquery()))
    items = db.execute(q.offset(pag.offset).limit(pag.limit)).scalars().all()
    
    return {
        "items": items,
        "total": total or 0,
        "page": pag.page,
        "size": pag.limit,
    }


# --- 5. Auditoría de Documentos ---

@router.post("/periodos/documentos/{documento_id}/auditar")
def auditar_documento(
    documento_id: uuid.UUID,
    carga: AuditarDocumentoIn,
    cid: uuid.UUID = Depends(get_company_id),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Aprueba, observa o rechaza un documento de período."""
    doc = db.get(PeriodoDocumento, documento_id)
    if not doc:
        raise err(404, "NO_ENCONTRADO", "Documento de período no existe")
        
    _get_periodo(db, cid, doc.periodo_id)
    
    if carga.accion not in ["aprobar", "observar", "rechazar"]:
        raise err(400, "ACCION_INVALIDA", "Acción debe ser aprobar, observar o rechazar")
    if carga.accion in ["observar", "rechazar"] and not carga.observacion:
        raise err(400, "OBSERVACION_REQUERIDA", "Se requiere observación para rechazar o observar")
        
    auditoria = AuditoriaDocumento(
        periodo_documento_id=doc.id,
        auditor_id=user.id,
        accion=carga.accion,
        observacion=carga.observacion,
        version=1 # simplified
    )
    db.add(auditoria)
    
    if carga.accion == "aprobar":
        doc.estado = "aprobado"
    elif carga.accion == "observar":
        doc.estado = "observado"
    elif carga.accion == "rechazar":
        doc.estado = "rechazado"
        
    doc.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(doc)
    return doc

@router.get("/periodos/documentos/{documento_id}/historial")
def historial_auditoria(
    documento_id: uuid.UUID,
    cid: uuid.UUID = Depends(get_company_id),
    db: Session = Depends(get_db)
):
    """Timeline de revisiones para un documento de período."""
    doc = db.get(PeriodoDocumento, documento_id)
    if not doc:
        raise err(404, "NO_ENCONTRADO", "Documento de período no existe")
    _get_periodo(db, cid, doc.periodo_id)
    
    q = select(AuditoriaDocumento).where(AuditoriaDocumento.periodo_documento_id == doc.id).order_by(AuditoriaDocumento.fecha.desc())
    return db.execute(q).scalars().all()


# --- 6. Dashboards ---

@router.get("/periodos/{periodo_id}/dashboard")
def dashboard_periodo(
    periodo_id: uuid.UUID,
    cid: uuid.UUID = Depends(get_company_id),
    db: Session = Depends(get_db)
):
    """Métricas de cumplimiento para un período laboral."""
    p = _get_periodo(db, cid, periodo_id)
    
    # Docs total and by status
    q = select(PeriodoDocumento.estado, func.count(PeriodoDocumento.id)).where(PeriodoDocumento.periodo_id == periodo_id).group_by(PeriodoDocumento.estado)
    results = db.execute(q).all()
    
    stats = {
        "pendientes": 0,
        "cargados": 0,
        "observados": 0,
        "aprobados": 0,
        "rechazados": 0,
        "en_revision": 0
    }
    total = 0
    for estado, count in results:
        estado_plural = f"{estado}s"
        if estado == "en_revision":
            estado_plural = "en_revision"
        elif estado == "pendiente":
            estado_plural = "pendientes"
        
        if estado_plural in stats:
            stats[estado_plural] = count
        total += count
        
    cumplimiento = 0
    if total > 0:
        cumplimiento = round((stats["aprobados"] / total) * 100, 2)
        
    return {
        "total_docs_requeridos": total,
        "pendientes": stats["pendientes"],
        "cargados": stats["cargados"],
        "en_revision": stats["en_revision"],
        "observados": stats["observados"],
        "aprobados": stats["aprobados"],
        "rechazados": stats["rechazados"],
        "porcentaje_cumplimiento": cumplimiento
    }

@router.get("/contratos/{contrato_id}/periodos/resumen")
def resumen_periodos_contrato(
    contrato_id: uuid.UUID,
    cid: uuid.UUID = Depends(get_company_id),
    db: Session = Depends(get_db)
):
    """Resumen de todos los períodos de un contrato."""
    _get_contrato(db, cid, contrato_id)
    
    q = select(PeriodoLaboral).where(PeriodoLaboral.contrato_id == contrato_id).order_by(PeriodoLaboral.fecha_inicio.desc())
    periodos = db.execute(q).scalars().all()
    
    return [
        {
            "id": p.id,
            "nombre": p.nombre,
            "fecha_inicio": p.fecha_inicio,
            "fecha_fin": p.fecha_fin,
            "estado": p.estado,
            "porcentaje_cumplimiento": p.porcentaje_cumplimiento
        }
        for p in periodos
    ]
