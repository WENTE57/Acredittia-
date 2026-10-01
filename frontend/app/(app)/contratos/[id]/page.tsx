"use client";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as Api from "@/lib/cliente";
import type {
  ActividadFila, Alerta, Contrato, Documento, Matriz, Pagina, Revision, Sujeto, PlataformaContrato
} from "@/lib/tipos";
import { Barra, Chip, Kpi, Modal, Paginador, SEVERIDAD_LABEL, Spinner } from "@/components/ui";
import { AgregarPlataformaModal, GestionarUsuariosModal } from "@/components/PlataformaModals";
import { TabRequisitosContrato } from "@/components/TabRequisitosContrato";
import { TabPersonalContrato } from "@/components/TabPersonalContrato";
import { TabEquiposContrato } from "@/components/TabEquiposContrato";
import { TabDocumentosContrato } from "@/components/TabDocumentosContrato";
import { TabEmpresaContrato } from "@/components/TabEmpresaContrato";

const TABS = ["Resumen", "Documentos", "Empresa", "Personal", "Vehículos / Equipos", "Licencia Interna", "Alertas IA", "Requisitos", "Historial"] as const;
type Tab = (typeof TABS)[number];

const PLATFORM_LOGOS = [
  { m: 'SIGA',           f: '/plat_siga.png' },
  { m: 'DIRECTIC',       f: '/plat_directic.png' },
  { m: 'SGES',           f: '/plat_sges.png' },
  { m: 'ACADEMIA',       f: '/plat_academia.png' },
  { m: 'EMSIPOR',        f: '/plat_emsipor.png' },
  { m: 'WEBCONTROL',     f: '/plat_webcontrol.png' },
  { m: 'METACONTRATAS',  f: '/plat_metacontratas.png' },
  { m: 'META CONTRATAS', f: '/plat_metacontratas.png' },
  { m: 'SUCAL',          f: '/plat_sucal.png' },
];

function logoForPlatform(nom: string) {
  const up = (nom || '').toUpperCase();
  const hit = PLATFORM_LOGOS.find(x => up.includes(x.m));
  return hit ? hit.f : null;
}

export default function ContratoDetalle() {
  const { id } = useParams<{ id: string }>();
  const [c, setC] = useState<Contrato | null>(null);
  const [tab, setTab] = useState<Tab>("Resumen");
  const [page, setPage] = useState(1);
  const [docs, setDocs] = useState<Pagina<Documento> | null>(null);
  const [plataformas, setPlataformas] = useState<PlataformaContrato[]>([]);
  const [personal, setPersonal] = useState<Pagina<Sujeto> | null>(null);
  const [equipos, setEquipos] = useState<Pagina<Sujeto> | null>(null);
  const [alertas, setAlertas] = useState<Pagina<Alerta> | null>(null);
  const [hist, setHist] = useState<Pagina<ActividadFila> | null>(null);
  const [matriz, setMatriz] = useState<Matriz | null>(null);
  const [tipoMatriz, setTipoMatriz] = useState<"personal" | "equipo">("personal");
  const [review, setReview] = useState<Revision | null>(null);
  const [subiendo, setSubiendo] = useState<{ docId: string; pct: number; texto: string } | null>(null);
  const [analizandoId, setAnalizandoId] = useState<string | null>(null);

  const [showAddPlataforma, setShowAddPlataforma] = useState(false);
  const [plataformaToManage, setPlataformaToManage] = useState<PlataformaContrato | null>(null);
  const [error, setError] = useState("");
  const [aviso, setAviso] = useState("");

  const cargar = useCallback(() => {
    Api.contratos.detalle(id).then(setC).catch((e) => setError(Api.mensajeError(e)));
  }, [id]);
  useEffect(cargar, [cargar]);

  const cargarDocs = useCallback(() => {
    Api.contratos.documentos(id, { page, page_size: 50 })
      .then(setDocs).catch((e) => setError(Api.mensajeError(e)));
  }, [id, page]);

  // Cada pestaña consume su propio endpoint del contrato (§4): ya no hace falta
  // pedir /alertas o /dashboard/actividad y filtrar en el navegador.
  useEffect(() => {
    setError("");
    const fallo = (e: unknown) => setError(Api.mensajeError(e));
    Api.plataformas.listar(id).then(res => setPlataformas(res.items || [])).catch(fallo);
    if (tab === "Documentos") cargarDocs();
    if (tab === "Alertas") Api.contratos.alertas(id, { page, page_size: 50 }).then(setAlertas).catch(fallo);
  }, [tab, id, page, tipoMatriz, cargarDocs]);

  const cambiarTab = (t: Tab) => { setTab(t); setPage(1); };

  /** Subida por SAS + espera del veredicto de la IA (el doc queda `falta`). */
  const subir = async (docId: string, file: File) => {
    setError(""); setAviso("");
    setSubiendo({ docId, pct: 0, texto: "Preparando la subida…" });
    let jobId = "";
    try {
      const res = await Api.subirDocumento(docId, file, (pct, etapa) => {
        const texto = etapa === "subiendo" ? "Subiendo el archivo…"
          : etapa === "confirmando" ? "Registrando el archivo…"
          : etapa === "firmando" ? "Preparando la subida…" : "Listo";
        setSubiendo({ docId, pct, texto });
      });
      jobId = res.job_id;
      cargarDocs();
    } catch (e) {
      setError(Api.mensajeError(e));
      return;
    } finally { setSubiendo(null); }

    setAnalizandoId(docId);
    try {
      setReview(await Api.esperarRevision(jobId));
      cargarDocs();
      cargar();
    } catch (e) {
      if (Api.esApiError(e) && e.code === "REVISION_TIMEOUT") setAviso(e.message);
      else setError(Api.mensajeError(e));
    } finally { setAnalizandoId(null); }
  };

  const descargar = async (docId: string, archivoId: string) => {
    setError("");
    try { await Api.descargarArchivo(docId, archivoId); }
    catch (e) { setError(Api.mensajeError(e)); }
  };

  const handleDeletePlataforma = async (pid: string) => {
    if (!confirm('¿Estás seguro de que deseas desvincular esta plataforma de este contrato?')) return;
    try {
      await Api.plataformas.eliminar(id as string, pid);
      setPlataformas(prev => prev.filter(p => p.id !== pid));
    } catch (e: any) {
      alert('Error al eliminar plataforma: ' + e.message);
    }
  };

  if (!c) return error ? <p className="p-6 text-red-600">{error}</p> : <Spinner />;

  const pct = c.stats?.cumplimiento_pct || 0;
  const vigente = pct >= 70;

  return (
    <div className="max-w-[1200px] mx-auto pb-20 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-[0.8rem] text-slate-500 mb-4">
        <Link href="/contratos" className="hover:underline hover:text-slate-700 cursor-pointer text-[0.8rem]">Contratos</Link>
        <span>›</span>
        <span className="cursor-pointer text-[0.8rem] hover:underline hover:text-slate-700">Detalle del contrato</span>
      </div>

      {/* AMBIENTE DEL MANDANTE */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 to-white border border-slate-200 border-t-4 border-t-blue-600 rounded-[18px] px-6 py-5 mb-5 shadow-sm">
        <div className="absolute -top-[70px] -right-[50px] w-[230px] h-[230px] rounded-full bg-blue-600 opacity-[0.06] pointer-events-none" />
        <div className="absolute -bottom-[90px] right-[110px] w-[170px] h-[170px] rounded-full bg-blue-600 opacity-[0.04] pointer-events-none" />
        
        {/* Header row */}
        <div className="relative flex items-center justify-between flex-wrap gap-3 mb-3.5">
          <div className="flex items-center gap-3.5">
            <h2 className="text-[#0F172A] text-[1.45rem] font-bold m-0">{c.nombre}</h2>
            <span className={`px-2 py-0.5 text-[0.78rem] font-bold rounded ${vigente ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
              {vigente ? 'Vigente' : 'En evaluación'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="h-[34px] px-3.5 border border-slate-300 rounded-[8px] bg-white text-slate-700 font-semibold text-[0.85rem] hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm cursor-pointer" onClick={() => alert('Descargando reporte — demo')}>
              <span className="text-[0.9rem] mr-1">↓</span> Descargar reporte
            </button>
            <button className="h-[34px] px-3.5 border-none rounded-[8px] bg-blue-600 text-white font-semibold text-[0.85rem] hover:bg-blue-700 transition-colors shadow-sm cursor-pointer" onClick={() => alert('Editar contrato — demo')}>
              ✎ Editar contrato
            </button>
            <button className="h-[34px] w-[34px] border border-slate-300 rounded-[8px] bg-white text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm flex items-center justify-center cursor-pointer">
              ⋮
            </button>
          </div>
        </div>

        {/* Mandante logo + faena */}
        <div className="relative flex items-center gap-3">
          <div className="bg-white border border-slate-200 rounded-[10px] px-3 py-1.5 flex items-center h-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] font-bold text-slate-700 text-sm">
            {c.faena?.mandante}
          </div>
          <span className="text-slate-800 text-[0.88rem] font-semibold">{c.faena?.nombre} · {c.faena?.mandante}</span>
        </div>
      </div>

      {error && <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700 mb-4">{error}</p>}
      {aviso && <p className="rounded-lg bg-sky-50 px-4 py-2 text-sm text-sky-800 mb-4">ℹ️ {aviso}</p>}

      {/* SECCIÓN PLATAFORMAS (SIEMPRE VISIBLE) */}
      <div className="bg-white border border-slate-200 border-t-[3px] border-t-blue-600 rounded-[16px] px-5 py-4 mb-6 shadow-sm">
         <div className="flex items-center justify-between mb-3.5">
           <div>
             <span className="text-[0.88rem] font-bold text-slate-800">Plataformas — {c.faena.mandante}</span>
             <div className="text-[0.75rem] text-slate-500 mt-0.5">Plataformas requeridas para acreditar en <strong>{c.faena.nombre}</strong>, con sus propios requisitos por plataforma.</div>
           </div>
           <button className="h-[34px] px-3.5 border-none rounded-[8px] bg-blue-600 text-white font-semibold text-[0.75rem] hover:bg-blue-700 transition-colors shadow-sm cursor-pointer" onClick={() => setShowAddPlataforma(true)}>
             + Agregar plataforma
           </button>
         </div>
         
         <div className="flex gap-0 border border-slate-200 rounded-[12px] overflow-x-auto overflow-y-hidden snap-x">
           {plataformas.length === 0 ? (
             <div className="p-8 text-center w-full text-slate-500 text-sm">No hay plataformas configuradas</div>
           ) : (
             plataformas.map((pl, i) => {
                const logo = logoForPlatform(pl.nombre);
                return (
                  <div key={pl.id} className={`flex-1 min-w-[200px] shrink-0 snap-start py-3.5 px-4 bg-white ${i < plataformas.length - 1 ? 'border-r border-slate-200' : ''}`}>
                    <div className="flex items-center justify-between mb-2">
                      {logo ? (
                        <div className="h-[34px] min-w-[64px] px-1 bg-white border border-slate-200 rounded-md flex items-center justify-center overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={logo} alt={pl.nombre} className="max-w-[50px] max-h-[22px] object-contain" onError={(e) => {
                            const target = e.target as HTMLElement;
                            const parent = target.parentElement;
                            if (parent) {
                              parent.outerHTML = `<div class="h-[32px] min-w-[52px] px-2 bg-slate-100 rounded-md flex items-center justify-center text-[0.65rem] font-black text-slate-800 text-center leading-tight">${pl.nombre.split(' ')[0]}</div>`;
                            }
                          }} />
                        </div>
                      ) : (
                        <div className="h-[32px] min-w-[52px] px-2 bg-slate-100 rounded-md flex items-center justify-center text-[0.65rem] font-black text-slate-800 text-center leading-tight" style={{ backgroundColor: pl.color || '#f1f5f9' }}>
                          {pl.nombre.split(' ')[0]}
                        </div>
                      )}
                      
                      <div className="flex items-center gap-1.5">
                        <span className={`flex items-center gap-1 text-[0.65rem] font-bold px-2 py-0.5 rounded-lg ${
                          pl.estado === 'activa' ? 'text-emerald-700 bg-emerald-50' :
                          pl.estado === 'solicitada' ? 'text-amber-700 bg-amber-50' : 'text-red-700 bg-red-50'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full inline-block ${
                            pl.estado === 'activa' ? 'bg-emerald-500' :
                            pl.estado === 'solicitada' ? 'bg-amber-500' : 'bg-red-500'
                          }`}></span>
                          {pl.estado.charAt(0).toUpperCase() + pl.estado.slice(1)}
                        </span>
                        <button 
                          onClick={() => handleDeletePlataforma(pl.id)} 
                          className="text-slate-300 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50 flex items-center justify-center"
                          title="Desvincular plataforma"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                      </div>
                    </div>
                  <div className="text-[0.8rem] font-bold text-slate-800">
                    {pl.nombre} {pl.es_custom && <span className="text-purple-700 text-[0.65rem] font-normal">(custom)</span>}
                  </div>
                  <div className="text-[0.65rem] text-slate-500 mt-0.5 min-h-[30px]">{pl.descripcion || 'Sistema de Gestión de Acceso MLP'}</div>
                  {pl.url && pl.url !== '#' && (
                    <a href={pl.url} target="_blank" rel="noopener noreferrer" className="text-[0.65rem] text-blue-600 no-underline mt-0.5 block opacity-80" title={`Abrir ${pl.nombre}`}>
                      {pl.url.replace('https://', '')}
                    </a>
                  )}
                  
                  <div className="text-[0.7rem] text-slate-500 mt-2.5">Usuarios activos</div>
                  <div className="text-[1.15rem] font-bold text-slate-800 leading-tight">{pl.credenciales || 0}</div>
                  {pl.nota && <div className="text-[0.65rem] text-emerald-600 mt-0.5 font-semibold">{pl.nota}</div>}
                  {(!pl.nota || pl.credenciales === 0) && <div className="text-[0.65rem] text-slate-500 mt-0.5">Sin cuentas registradas</div>}
                  <div className="mt-2.5"><span className="text-[0.7rem] text-blue-600 hover:underline cursor-pointer font-medium" onClick={() => setPlataformaToManage(pl)}>Gestionar usuarios →</span></div>
                </div>
                );
             })
           )}
         </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b-2 border-slate-200 mb-5 bg-transparent overflow-x-auto">
        {TABS.map((t) => (
          <div 
            key={t} 
            onClick={() => cambiarTab(t)}
            className={`px-5 py-3.5 text-[0.83rem] font-semibold cursor-pointer border-b-[3px] whitespace-nowrap bg-white transition-all ${tab === t ? "border-b-blue-600 text-blue-600" : "border-b-transparent text-slate-500 hover:text-slate-700"}`}
          >
            {t}
          </div>
        ))}
      </div>

      {tab === "Resumen" && (
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Card Información del contrato */}
            <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-[0.85rem] font-bold text-slate-800 mb-4">Información del contrato</h3>
              <div className="mb-3">
                <div className="text-[0.7rem] text-slate-500 mb-0.5">N° de contrato</div>
                <div className="text-[0.85rem] font-bold text-slate-800">{c.codigo ?? "CT-LP1"}</div>
                <span className="inline-block mt-1 px-2 py-0.5 text-[0.65rem] font-bold rounded bg-emerald-100 text-emerald-700">Vigente</span>
              </div>
              <div className="mb-3">
                <div className="text-[0.7rem] text-slate-500 mb-0.5">Empresa</div>
                <div className="text-[0.85rem] font-bold text-slate-800">Mi empresa</div>
              </div>
              <div className="mb-4">
                <div className="text-[0.7rem] text-slate-500 mb-0.5">Faena principal</div>
                <div className="text-[0.85rem] font-bold text-slate-800">{c.faena.nombre}</div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-[0.7rem] text-slate-500 mb-0.5">Fecha de inicio</div>
                  <div className="text-[0.8rem] font-medium text-slate-800">{c.fecha_inicio ?? "01/01/2026"}</div>
                  <div className="text-[0.7rem] text-slate-500 mb-0.5 mt-2">Duración total</div>
                  <div className="text-[0.8rem] font-medium text-slate-800">24 meses</div>
                </div>
                <div>
                  <div className="text-[0.7rem] text-slate-500 mb-0.5">Fecha de término</div>
                  <div className="text-[0.8rem] font-medium text-slate-800">{c.fecha_termino ?? "31/12/2027"}</div>
                  <div className="text-[0.7rem] text-slate-500 mb-0.5 mt-2">Renovación automática</div>
                  <div className="text-[0.8rem] font-medium text-slate-800">{c.renovacion_automatica ? "Sí" : "No"}</div>
                </div>
              </div>
            </div>

            {/* Card Vigencia del contrato */}
            <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-[0.85rem] font-bold text-slate-800 mb-4">Vigencia del contrato</h3>
              <div className="text-[0.7rem] text-slate-500 text-right mb-1">282 días restantes</div>
              <div className="w-full h-2 bg-slate-100 rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <div className="flex justify-between text-[0.7rem] text-slate-500 mb-5">
                <span>01/01/2026</span>
                <span>31/12/2027</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <div className="text-[0.7rem] text-slate-500 mb-1">Días transcurridos</div>
                  <div className="text-[1.1rem] font-bold text-slate-800">103 días <span className="text-[0.7rem] font-normal text-slate-500">(20%)</span></div>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <div className="text-[0.7rem] text-slate-500 mb-1">Próximo vencimiento relevante</div>
                  <div className="text-[0.75rem] font-bold text-amber-600">Revisión Técnica</div>
                  <div className="text-[0.7rem] text-slate-500 mt-0.5">2026-05-15</div>
                  <div className="text-[0.65rem] text-blue-600 mt-1 cursor-pointer hover:underline">Ver todas →</div>
                </div>
              </div>
            </div>

            {/* Card Usuarios totales en plataformas */}
            <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-[0.85rem] font-bold text-slate-800 mb-4">Usuarios totales en plataformas</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[2rem] font-bold text-slate-800">33</div>
                <div className="text-[0.75rem] text-slate-500">usuarios</div>
              </div>
              <div className="text-[0.7rem] text-slate-500 mb-0.5">Última sincronización 🔄</div>
              <div className="text-[0.8rem] font-medium text-slate-800 mb-3">Hoy 08:15</div>
              <div className="text-[0.75rem] text-blue-600 cursor-pointer hover:underline" onClick={() => cambiarTab("Plataformas")}>Ver detalle por plataforma →</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Card Documentos */}
            <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[0.85rem] font-bold text-slate-800">Documentos</h3>
                <span className="text-[0.75rem] text-blue-600 cursor-pointer hover:underline" onClick={() => cambiarTab("Documentos")}>Ver todos →</span>
              </div>
              
              <div className="flex flex-col gap-2 flex-1">
                {/* Empresa */}
                <div className="border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-lg">🏢</div>
                    <div>
                      <div className="text-[0.8rem] font-bold text-slate-800">Empresa</div>
                      <div className="text-[0.65rem] text-slate-500">89 documentos <span className="text-red-500 font-bold ml-1">2 vencidos</span></div>
                    </div>
                  </div>
                  <button className="px-3 py-1 border border-slate-300 rounded text-[0.7rem] font-semibold text-slate-600 hover:bg-slate-50 transition-colors" onClick={() => cambiarTab("Empresa")}>Ver</button>
                </div>
                
                {/* Personal */}
                <div className="border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-lg">👤</div>
                    <div>
                      <div className="text-[0.8rem] font-bold text-slate-800">Personal</div>
                      <div className="text-[0.65rem] text-slate-500">305 documentos <span className="text-red-500 font-bold ml-1">7 vencidos</span></div>
                    </div>
                  </div>
                  <button className="px-3 py-1 border border-slate-300 rounded text-[0.7rem] font-semibold text-slate-600 hover:bg-slate-50 transition-colors" onClick={() => cambiarTab("Personal")}>Ver</button>
                </div>
                
                {/* Equipos */}
                <div className="border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-lg">🚜</div>
                    <div>
                      <div className="text-[0.8rem] font-bold text-slate-800">Equipos / Vehículos</div>
                      <div className="text-[0.65rem] text-slate-500">14 documentos <span className="text-red-500 font-bold ml-1">2 vencidos</span></div>
                    </div>
                  </div>
                  <button className="px-3 py-1 border border-slate-300 rounded text-[0.7rem] font-semibold text-slate-600 hover:bg-slate-50 transition-colors" onClick={() => cambiarTab("Vehículos / Equipos")}>Ver</button>
                </div>
              </div>
            </div>

            {/* Card Alertas IA */}
            <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[0.85rem] font-bold text-slate-800">Alertas IA</h3>
                <span className="text-[0.65rem] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">{c.stats?.alertas_activas || 4} alertas activas</span>
              </div>
              
              <div className="flex flex-col gap-0 flex-1">
                {[
                  { text: 'Vencimiento: Revisión Técnica', sub: 'Mitsubishi L200 4x4', color: 'red' },
                  { text: 'Vencimiento: Anexo Contrato', sub: 'Carlos Vera Mamani', color: 'red' },
                  { text: 'Vencimiento: Permiso de Circulación', sub: 'Mitsubishi L200 4x4', color: 'red' },
                  { text: 'Desconexión por cámara: Exceso de Velocidad', sub: 'Mercedes Actros 2050', color: 'amber' }
                ].map((a, i) => (
                  <div key={i} className="py-2.5 border-b border-slate-100 flex items-start gap-2 last:border-0">
                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-${a.color}-500`}></div>
                    <div className="flex-1">
                      <div className={`text-[0.75rem] font-semibold text-${a.color}-600`}>{a.text}</div>
                      <div className="text-[0.65rem] text-slate-500">{a.sub}</div>
                    </div>
                    <span className="text-[0.65rem] text-blue-600 cursor-pointer font-bold hover:underline" onClick={() => cambiarTab("Alertas IA")}>Ver detalle</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Resumen General */}
            <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[0.85rem] font-bold text-slate-800">Resumen general</h3>
                <span className="text-[0.65rem] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Cumplido</span>
              </div>
              
              <div className="flex flex-col gap-2.5 flex-1 text-[0.75rem]">
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">Estado general del contrato</span>
                  <span className="font-bold text-emerald-600">Cumplido</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">Requisitos asociados</span>
                  <span className="font-bold text-slate-800">28</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">Requisitos cumplidos</span>
                  <span className="font-bold text-emerald-600">22 (77%)</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">Requisitos en progreso</span>
                  <span className="font-bold text-amber-600">5 (18%)</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">Requisitos no cumplidos</span>
                  <span className="font-bold text-red-600">1 (5%)</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">Documentos totales</span>
                  <span className="font-bold text-slate-800">384</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">Documentos vencidos</span>
                  <span className="font-bold text-red-600">4</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-600">Personal acreditado</span>
                  <span className="font-bold text-slate-800">{c.stats?.personal?.acreditados || 0} / {c.stats?.personal?.total || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Equipos acreditados</span>
                  <span className="font-bold text-slate-800">{c.stats?.equipos?.acreditados || 0} / {c.stats?.equipos?.total || 0}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Requisitos en Terreno */}
          <div className="mt-2">
            <div className="flex items-center justify-between mb-4 bg-slate-50 border border-slate-200 rounded-lg p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-lg shadow-inner">🚧</div>
                <div>
                  <h3 className="text-[0.85rem] font-bold text-slate-800">Requisitos en Terreno</h3>
                  <div className="text-[0.7rem] text-slate-500">Condiciones operativas exigidas por el Reglamento — aplicables dentro de la faena.</div>
                </div>
              </div>
              <span className="text-[0.65rem] font-bold text-slate-500">Solo lectura — no documentales</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Conductores */}
              <div className="border border-slate-200 rounded-[16px] bg-white overflow-hidden shadow-sm">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👤</span>
                    <span className="text-[0.8rem] font-bold text-slate-800">Conductores</span>
                  </div>
                  <span className="text-[0.65rem] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">7 requisitos</span>
                </div>
                <div className="flex flex-col">
                  {[
                    { title: 'AIO vigente (tipo según zona)', level: 'Crítico', desc: 'Autorización de Ingreso de Conductor activa y vigente. El tipo determina la zona de acceso.' },
                    { title: 'Código QR al inicio de turno', level: 'Crítico', desc: 'Escanear código QR en punto de control al inicio de cada turno. Obligatorio.' },
                    { title: 'Máximo 12 horas continuas de conducción', level: 'Crítico', desc: 'El conductor no puede superar 12 horas continuas al volante.' },
                    { title: 'Control de fatiga y alcoholemia negativo', level: 'Crítico', desc: 'Declaración de estado de alerta y resultado negativo en alcotest antes del turno. Tolerancia cero.' },
                    { title: 'Antigüedad de licencia > 3 años', level: 'Importante', desc: 'El conductor debe tener mínimo 3 años de antigüedad en la clase de licencia correspondiente.' },
                    { title: 'Sin infracciones graves vigentes', level: 'Importante', desc: 'No debe registrar 2 o más infracciones gravísimas o graves en los últimos 12 meses.' },
                    { title: 'EPP obligatorio en operación', level: 'Importante', desc: 'Casco, chaleco reflectante, zapatos de seguridad y cinturón en todo momento dentro de faena.' },
                  ].map((r, i) => (
                    <div key={i} className="px-5 py-3.5 border-b border-slate-100 flex gap-3 last:border-0 hover:bg-slate-50 transition-colors">
                      <div className="w-5 h-5 rounded flex-shrink-0 bg-emerald-100 flex items-center justify-center text-[0.6rem] mt-0.5">✅</div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[0.75rem] font-bold text-slate-800">{r.title}</span>
                          <span className={`text-[0.55rem] font-bold px-1.5 py-0.5 rounded ${
                            r.level === 'Crítico' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                          }`}>{r.level}</span>
                        </div>
                        <div className="text-[0.65rem] text-slate-500 leading-relaxed">{r.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehículos / Equipos */}
              <div className="border border-slate-200 rounded-[16px] bg-white overflow-hidden shadow-sm">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🚜</span>
                    <span className="text-[0.8rem] font-bold text-slate-800">Vehículos / Equipos</span>
                  </div>
                  <span className="text-[0.65rem] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">11 requisitos</span>
                </div>
                <div className="flex flex-col">
                  {[
                    { title: 'Sello IMM vigente y color correcto', level: 'Crítico', desc: 'El distintivo de Identificación Mecánica debe estar vigente y coincidir con el color del área.' },
                    { title: 'GPS activo + integrado Multiplataforma MLP', level: 'Crítico', desc: 'El equipo debe tener GPS activo y transmitiendo a la plataforma central.' },
                    { title: 'Checklist diario pre-turno completado', level: 'Crítico', desc: 'Registro físico o digital del checklist pre-turno antes de iniciar operación.' },
                    { title: 'Cuñas (mínimo 2 operativas)', level: 'Crítico', desc: 'El vehículo debe portar mínimo 2 cuñas de estacionamiento en buen estado.' },
                    { title: 'Láminas de seguridad adheridas', level: 'Importante', desc: 'Láminas de protección de 4 micrones en parabrisas y 7 micrones en vidrios laterales.' },
                    { title: 'Alarma marcha atrás + cámara de retroceso', level: 'Importante', desc: 'Alarma sonora y cámara de retroceso operativas en todo momento.' },
                    { title: 'Señalizador de torque en ruedas', level: 'Importante', desc: 'Sistema indicador de torque instalado y visible en todas las ruedas.' },
                  ].map((r, i) => (
                    <div key={i} className="px-5 py-3.5 border-b border-slate-100 flex gap-3 last:border-0 hover:bg-slate-50 transition-colors">
                      <div className="w-5 h-5 rounded flex-shrink-0 bg-emerald-100 flex items-center justify-center text-[0.6rem] mt-0.5">✅</div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[0.75rem] font-bold text-slate-800">{r.title}</span>
                          <span className={`text-[0.55rem] font-bold px-1.5 py-0.5 rounded ${
                            r.level === 'Crítico' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                          }`}>{r.level}</span>
                        </div>
                        <div className="text-[0.65rem] text-slate-500 leading-relaxed">{r.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "Documentos" && c && (
        <TabDocumentosContrato contrato={c} />
      )}

      {tab === "Empresa" && c && (
        <TabEmpresaContrato contrato={c} />
      )}

      {tab === "Personal" && c && (
        <TabPersonalContrato contrato={c} plataformas={plataformas} />
      )}
      {tab === "Equipos" && c && (
        <TabEquiposContrato contrato={c} plataformas={plataformas} />
      )}
      {tab === "Vehículos / Equipos" && c && (
        <TabEquiposContrato contrato={c} plataformas={plataformas} />
      )}

      {tab === "Matriz" && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <select className="input max-w-[200px]" value={tipoMatriz}
              onChange={(e) => { setTipoMatriz(e.target.value as "personal" | "equipo"); setPage(1); }}>
              <option value="personal">Personal</option>
              <option value="equipo">Equipos</option>
            </select>
            <span className="text-xs text-slate-500">
              «—» significa que el requisito no aplica a ese sujeto; no es un incumplimiento.
            </span>
          </div>
          {matriz && <TablaMatriz matriz={matriz} onPagina={setPage} />}
        </div>
      )}

      {tab === "Alertas" && (
        <section className="space-y-2">
          {Api.items(alertas).length === 0 && <p className="text-sm text-slate-500">Sin alertas para este contrato.</p>}
          {Api.items(alertas).map((a) => (
            <div key={a.id} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <Chip estado={a.severidad} texto={SEVERIDAD_LABEL[a.severidad]} />
              <div className="text-sm"><b>{a.titulo}</b><div className="text-slate-500">{a.descripcion}</div></div>
              <Chip estado={a.estado} />
            </div>
          ))}
          {alertas && <Paginador page={alertas.page} totalPaginas={alertas.total_pages} total={alertas.total} etiqueta="alertas" onPagina={setPage} />}
        </section>
      )}
      {tab === "Requisitos" && c && (
        <TabRequisitosContrato contrato={c} plataformas={plataformas} />
      )}

      {tab === "Historial" && (
        <>
          <ul className="space-y-1.5 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm">
            {Api.items(hist).map((h) => (
              <li key={h.id}>
                <span className="text-slate-400">{new Date(h.created_at).toLocaleString("es-CL")} · </span>
                {h.descripcion}
                {h.usuario?.nombre && <span className="text-slate-400"> · {h.usuario.nombre}</span>}
              </li>
            ))}
            {hist && hist.total === 0 && <li className="text-slate-500">Sin actividad registrada para este contrato.</li>}
          </ul>
          {hist && <Paginador page={hist.page} totalPaginas={hist.total_pages} total={hist.total} etiqueta="movimientos" onPagina={setPage} />}
        </>
      )}

      <Modal abierto={!!review} titulo="Revisión IA" onCerrar={() => setReview(null)} ancho="max-w-xl">
        {review && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <Chip estado={review.status === "failed" ? "failed"
                : review.resultado === "validado" ? "ok"
                : review.resultado === "con_errores" ? "venc" : "porvenc"}
                texto={review.resultado ?? review.status} />
              {review.confianza != null && (
                <span className="text-sm text-slate-500">Confianza: {(review.confianza * 100).toFixed(0)}%</span>
              )}
            </div>
            {review.accion_aplicada && (
              <p className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">
                Acción aplicada: {review.accion_aplicada}
              </p>
            )}
            <ul className="space-y-2 text-sm">
              {review.hallazgos.map((h, i) => (
                <li key={i} className="rounded-lg bg-slate-50 px-3 py-2">
                  {h.tipo === "error" ? "⛔" : h.tipo === "warning" ? "⚠️" : "✅"} {h.mensaje}
                </li>
              ))}
            </ul>
            <button className="btn-primary w-full" onClick={() => setReview(null)}>Entendido</button>
          </div>
        )}
      </Modal>

      <AgregarPlataformaModal
        abierto={showAddPlataforma}
        onCerrar={() => setShowAddPlataforma(false)}
        contratoId={id}
        onAgregada={() => Api.plataformas.listar(id).then(res => setPlataformas(res.items || []))}
      />
      
      <GestionarUsuariosModal
        plataforma={plataformaToManage}
        contratoId={id}
        onCerrar={() => {
          setPlataformaToManage(null);
          Api.plataformas.listar(id).then(res => setPlataformas(res.items || []));
        }}
      />
    </div>
  );
}

// ListaSujetos eliminada y extraida a sus propias Tabs modulares

/**
 * Matriz de cumplimiento sujeto × requisito.
 *
 * Es **dispersa**: solo llegan las celdas de los requisitos que aplican a cada
 * sujeto, indexadas por `col`. El hueco se pinta «—», que no es lo mismo que
 * `falta`. Las columnas son las de los sujetos de la página, así que pueden
 * cambiar al paginar.
 */
function TablaMatriz({ matriz, onPagina }: { matriz: Matriz; onPagina: (p: number) => void }) {
  return (
    <div className="space-y-3">
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="tabla">
          <thead>
            <tr>
              <th className="sticky left-0 bg-slate-50">Sujeto</th>
              <th>%</th>
              {matriz.columnas.map((col, i) => (
                <th key={i} className="whitespace-nowrap text-xs">
                  {col.titulo}{col.obligatorio ? "" : " (opc.)"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matriz.filas.map((f) => {
              const porCol = new Map(f.celdas.map((c) => [c.col, c]));
              return (
                <tr key={f.sujeto_id}>
                  <td className="sticky left-0 bg-white">
                    <div className="font-medium">{f.nombre}</div>
                    <div className="text-xs text-slate-500">{f.rut ?? ""} {f.cargo ?? ""}</div>
                  </td>
                  <td className="font-bold">{f.cumplimiento_pct}%</td>
                  {matriz.columnas.map((_, i) => {
                    const celda = porCol.get(i);
                    if (!celda) return <td key={i} className="text-center text-slate-300">—</td>;
                    return (
                      <td key={i} className="text-center">
                        <Chip estado={celda.estado_calc} texto={celda.vence ?? undefined} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {matriz.filas.length === 0 && <p className="p-4 text-sm text-slate-500">Sin sujetos para esta matriz.</p>}
      </div>
      <Paginador page={matriz.page} totalPaginas={matriz.total_pages} total={matriz.total_filas}
        etiqueta="filas" onPagina={onPagina} />
    </div>
  );
}
