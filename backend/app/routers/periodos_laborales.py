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
from sqlalchemy import select
from sqlalchemy.orm import Session

from ..database import get_db
from ..deps import Page, aplicar_orden, err, get_company_id, paginacion
from ..models import Contrato, PeriodoLaboral

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
    
    # Check if there are documents associated with this period
    # Normally we would either cascade or block, for now just delete the period
    # In a full impl, we might want to block deletion if it has documents
    db.delete(p)
    db.commit()
