"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as Api from "@/lib/cliente";
import { Contrato, PlataformaContrato, Sujeto } from "@/lib/tipos";
import { Paginador } from "@/components/ui";

interface TabPersonalContratoProps {
  contrato: Contrato;
  plataformas: PlataformaContrato[];
}

export function TabPersonalContrato({ contrato, plataformas }: TabPersonalContratoProps) {
  const [personal, setPersonal] = useState<Api.Pagina<Sujeto> | null>(null);
  const [page, setPage] = useState(1);
  const [cargando, setCargando] = useState(false);

  const cargar = async () => {
    try {
      setCargando(true);
      const res = await Api.contratos.personal(contrato.id, { page, page_size: 50 });
      setPersonal(res);
    } catch (e) {
      console.error("Error al cargar personal", e);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargar();
  }, [page, contrato.id]);

  const list = personal ? personal.items : [];
  
  // En lugar de globales precisas (que requerirían un endpoint de stats de personal), 
  // usamos las stats del contrato para lo básico y el resto aproximado o en 0.
  const total = contrato.stats?.personal?.total || 0;
  const acred = contrato.stats?.personal?.acreditados || 0;
  
  // Calculamos la proporción basada en la página actual para los otros KPIs (solo visual referencial)
  const porAcred = list.filter(s => s.estado === 'proc' || s.estado === 'falta').length;
  const venc = list.filter(s => s.estado === 'venc').length;
  const suspend = list.filter(s => s.estado === 'baja').length;

  const kpis = [
    { ic: '👥', lbl: 'Total personal', n: total, sub: 'personas', c: '#64748B' },
    { ic: '✅', lbl: 'Acreditados', n: acred, sub: `${Math.round((acred / (total || 1)) * 100)}% del total`, c: '#15803d' },
    { ic: '⏳', lbl: 'Por acreditar', n: porAcred, sub: 'En esta página', c: '#b45309' },
    { ic: '⛔', lbl: 'Vencidos', n: venc, sub: 'En esta página', c: '#b91c1c' },
    { ic: '⊖', lbl: 'Suspendidos', n: suspend, sub: 'En esta página', c: '#64748b' }
  ];

  // Datos mockeados para el gráfico basándonos en stats globales
  const ok = contrato.stats?.docs_empresa?.ok || acred * 3 || 300;
  const pv = 2;
  const vc = venc || 4;
  const totDocs = (ok + pv + vc) || 1;
  const pct = Math.round((ok / totDocs) * 100);

  const r = 52, C = 2 * Math.PI * r;
  const segs = [['#3f8f5b', ok], ['#d68a2e', pv], ['#c0392b', vc]];
  let off = 0;

  return (
    <div className="flex flex-col xl:flex-row gap-5 items-start">
      <div className="flex-1 min-w-0 w-full">
        <div className="flex items-start justify-between mb-3.5 gap-3">
          <div>
            <h3 className="text-[#1E293B] text-[0.95rem] font-bold">Personal del contrato</h3>
            <p className="text-[0.78rem] text-slate-500 m-0 mt-0.5">Consulta y gestiona todo el personal asociado a este contrato.</p>
          </div>
          <div className="flex gap-2 shrink-0 items-center">
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-[0.78rem] font-medium hover:bg-blue-700 transition-colors shadow-sm">
              ✨ Asignar con Sofía IA
            </button>
            <label className="px-3 py-1.5 border border-slate-300 text-slate-700 rounded text-[0.78rem] font-medium cursor-pointer hover:bg-slate-50 transition-colors shadow-sm bg-white">
              ↑ Subir documento
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        <div className="flex gap-4 mb-4 flex-wrap">
          {kpis.map((k, i) => (
            <div key={i} className="bg-[#F8FAFC] rounded-xl px-4 py-3 flex items-center gap-2.5 border border-slate-200 min-w-[140px] shadow-sm flex-1">
              <span className="text-[1.1rem]">{k.ic}</span>
              <div>
                <div className="text-[0.72rem] text-slate-500">{k.lbl}</div>
                <div className="text-[1.3rem] font-extrabold text-[#0F172A] leading-tight">{k.n}</div>
                <div className="text-[0.7rem]" style={{ color: k.c }}>{k.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5 mb-4 items-center">
          <input className="flex-1 min-w-[200px] max-w-[360px] bg-white border border-slate-200 rounded-[10px] px-3.5 py-2.5 text-[0.88rem] text-slate-800 placeholder-slate-400 outline-none shadow-sm" placeholder="Buscar por nombre, RUT o cargo..." />
          <select className="bg-white border border-slate-200 rounded-[10px] px-3 py-2.5 text-[0.82rem] text-slate-500 cursor-pointer outline-none shadow-sm"><option>Plataforma: Todas</option></select>
          <select className="bg-white border border-slate-200 rounded-[10px] px-3 py-2.5 text-[0.82rem] text-slate-500 cursor-pointer outline-none shadow-sm"><option>Estado: Todos</option></select>
          <select className="bg-white border border-slate-200 rounded-[10px] px-3 py-2.5 text-[0.82rem] text-slate-500 cursor-pointer outline-none shadow-sm"><option>Acreditación: Todas</option></select>
          <select className="bg-white border border-slate-200 rounded-[10px] px-3 py-2.5 text-[0.82rem] text-slate-500 cursor-pointer outline-none shadow-sm"><option>Faena: Todas</option></select>
          <select className="bg-white border border-slate-200 rounded-[10px] px-3 py-2.5 text-[0.82rem] text-slate-500 cursor-pointer outline-none shadow-sm"><option>Cargo: Todos</option></select>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm mb-4">
          {cargando ? (
            <div className="p-8 text-center text-slate-500 text-sm">Cargando personal...</div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[0.75rem] text-slate-500 font-bold uppercase tracking-wider">
                  <th className="p-3 font-semibold">Nombre</th>
                  <th className="p-3 font-semibold">RUT</th>
                  <th className="p-3 font-semibold">Cargo</th>
                  <th className="p-3 font-semibold">Faena</th>
                  <th className="p-3 font-semibold">Plataformas</th>
                  <th className="p-3 font-semibold">Estado</th>
                  <th className="p-3 font-semibold">Acreditación</th>
                  <th className="p-3 font-semibold">Últ. act.</th>
                  <th className="p-3 font-semibold text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {list.map(s => {
                  const ini = s.nombre.split(' ').slice(0, 2).map(w => w[0]).join('');
                  const pct = s.stats.cumplimiento_pct || 0;
                  const acredLbl = pct >= 70 ? 'Completa' : pct >= 40 ? 'Incompleta' : 'Sin acreditar';
                  const estLbl = s.estado === 'ok' ? 'Acreditado' : s.estado === 'venc' ? 'Vencido' : s.estado === 'baja' ? 'Suspendido' : 'Por acreditar';
                  
                  return (
                    <tr key={s.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="p-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[0.75rem] font-bold text-white shrink-0">
                            {ini}
                          </div>
                          <div>
                            <Link href={`/personal/${s.id}`} className="text-[0.83rem] font-semibold text-blue-700 hover:underline">
                              {s.nombre}
                            </Link>
                            <div className="text-[0.7rem] text-slate-500">{s.rut}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-[0.8rem] text-slate-500 font-mono">{s.rut}</td>
                      <td className="p-3 text-[0.8rem]">{s.cargo}</td>
                      <td className="p-3 text-[0.8rem]">{contrato.faena.nombre}</td>
                      <td className="p-3 text-[0.75rem]">
                        <span className="font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">WC</span>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[0.68rem] font-bold ${
                          s.estado === 'ok' ? 'bg-emerald-100 text-emerald-700' :
                          s.estado === 'venc' ? 'bg-red-100 text-red-700' :
                          s.estado === 'baja' ? 'bg-slate-100 text-slate-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {estLbl}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[0.68rem] font-bold ${
                          pct >= 70 ? 'bg-emerald-50 text-emerald-700' :
                          pct >= 40 ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                        }`}>
                          {acredLbl} ({pct}%)
                        </span>
                      </td>
                      <td className="p-3 text-[0.72rem] text-slate-500">Hoy</td>
                      <td className="p-3 text-[0.8rem] text-right">
                        <Link href={`/personal/${s.id}`} className="text-blue-600 font-semibold hover:underline">Ver perfil</Link>
                      </td>
                    </tr>
                  );
                })}
                {list.length === 0 && !cargando && (
                  <tr>
                    <td colSpan={9} className="p-6 text-center text-slate-500 text-sm">Sin personal registrado</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
        
        {personal && personal.total_pages > 1 && (
          <div className="flex justify-between items-center bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-sm text-[0.8rem]">
            <span className="text-slate-500">Mostrando {(page - 1) * 50 + 1} a {Math.min(page * 50, personal.total)} de {personal.total} personas</span>
            <Paginador page={page} totalPaginas={personal.total_pages} total={personal.total} etiqueta="trabajadores" onPagina={setPage} />
          </div>
        )}
      </div>

      <div className="w-full xl:w-[260px] shrink-0 flex flex-col gap-4">
        {/* Cumplimiento Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-[0.85rem] text-slate-800 leading-tight">Cumplimiento<br/>del proyecto</h3>
            <select className="text-[0.7rem] border border-slate-200 rounded px-1.5 py-1 text-slate-600 outline-none cursor-pointer"><option>Últimos 30 días</option></select>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-[130px] h-[130px] mb-5">
              <svg width="130" height="130" viewBox="0 0 170 170" className="rotate-[-90deg]">
                <circle cx="85" cy="85" r={r} fill="none" stroke="#eee5da" strokeWidth="18" />
                {segs.map(([col, val], i) => {
                  const len = (Number(val) / totDocs) * C;
                  const el = <circle key={i} cx="85" cy="85" r={r} fill="none" stroke={col as string} strokeWidth="18" strokeDasharray={`${len} ${C - len}`} strokeDashoffset={-off} />;
                  off += len;
                  return el;
                })}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-extrabold text-[#0F172A] leading-none mb-0.5">{pct}%</span>
                <span className="text-[0.55rem] text-slate-500 font-semibold leading-tight uppercase tracking-wide">Cumplimiento<br/>general</span>
              </div>
            </div>
            <div className="w-full space-y-2.5 text-[0.75rem]">
              <div className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#3f8f5b]"></div><span className="text-slate-600 font-medium">Vigentes</span></div><span className="font-bold text-slate-800">{ok} <span className="text-slate-400 font-normal">({Math.round(ok/totDocs*100)}%)</span></span></div>
              <div className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#d68a2e]"></div><span className="text-slate-600 font-medium">Por vencer</span></div><span className="font-bold text-slate-800">{pv} <span className="text-slate-400 font-normal">({Math.round(pv/totDocs*100)}%)</span></span></div>
              <div className="flex justify-between items-center"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#c0392b]"></div><span className="text-slate-600 font-medium">Vencidas</span></div><span className="font-bold text-slate-800">{vc} <span className="text-slate-400 font-normal">({Math.round(vc/totDocs*100)}%)</span></span></div>
            </div>
          </div>
        </div>

        {/* Requisitos Críticos */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[0.85rem] text-slate-800">Requisitos<br/>críticos</h3>
            <span className="text-[0.7rem] text-blue-600 font-bold cursor-pointer hover:underline">Ver<br/>todos</span>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { t: 'Anexo Contrato', reg: '1 registro con vencidos' },
              { t: 'Revisión Técnica', reg: '1 registro con vencidos' },
              { t: 'Cédula de Identidad', reg: '1 registro con vencidos' },
              { t: 'Permiso de Circulación', reg: '2 registros con vencidos' }
            ].map((rc, i) => (
              <div key={i} className="flex gap-2.5 items-start bg-red-50/50 p-2.5 rounded-lg border border-red-100">
                <span className="text-red-500 text-[0.85rem] mt-0.5">⚠️</span>
                <div className="flex-1">
                  <div className="text-[0.75rem] font-bold text-slate-800">{rc.t}</div>
                  <div className="text-[0.65rem] text-slate-500">{rc.reg}</div>
                </div>
                <span className="text-[0.6rem] font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded border border-red-200">Vencido</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
