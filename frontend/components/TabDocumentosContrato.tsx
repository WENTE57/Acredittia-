import React, { useState, useEffect } from 'react';
import { Contrato, Documento, Pagina } from '@/lib/tipos';
import * as Api from '@/lib/cliente';

export function TabDocumentosContrato({ contrato }: { contrato: Contrato }) {
  const [page, setPage] = useState(1);
  const [cargando, setCargando] = useState(false);
  const [docs, setDocs] = useState<Pagina<Documento> | null>(null);
  const [cat, setCat] = useState('todos');

  const cargar = async () => {
    try {
      setCargando(true);
      const res = await Api.contratos.documentos(contrato.id, { page, page_size: 50 });
      setDocs(res);
    } catch (e) {
      console.error("Error al cargar documentos", e);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargar();
  }, [page, contrato.id]);

  const list = docs ? docs.items : [];
  const totalDocs = docs?.total || 0;

  const cats = [
    { k: 'todos', lbl: 'Todos los documentos', n: totalDocs },
    { k: 'empresa', lbl: 'Empresa', n: Math.floor(totalDocs * 0.2) }, // mock
    { k: 'personal', lbl: 'Personal', n: Math.floor(totalDocs * 0.5) }, // mock
    { k: 'equipo', lbl: 'Equipos / Vehículos', n: Math.floor(totalDocs * 0.3) }, // mock
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-5 items-start">
      {/* Sidebar Categorías */}
      <div className="w-full xl:w-[220px] shrink-0 flex flex-col gap-4">
        <div className="bg-white border border-slate-200 rounded-[14px] overflow-hidden shadow-sm">
          <div className="px-3.5 py-3 bg-slate-50 border-b border-slate-200 text-[0.75rem] font-bold text-slate-500 uppercase tracking-wider">
            Categoría
          </div>
          <div className="flex flex-col p-2 gap-1 bg-white">
            {cats.map(c => (
              <div 
                key={c.k}
                onClick={() => setCat(c.k)}
                className={`flex justify-between items-center px-3 py-2.5 rounded-[8px] cursor-pointer text-[0.82rem] transition-colors ${
                  cat === c.k 
                    ? 'bg-blue-50/60 text-blue-800 font-bold' 
                    : 'text-slate-600 hover:bg-slate-50 font-medium'
                }`}
              >
                <span>{c.lbl}</span>
                <span className={`px-2 py-0.5 rounded-[6px] text-[0.68rem] font-bold ${
                  cat === c.k ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-500'
                }`}>
                  {c.n}
                </span>
              </div>
            ))}
          </div>
          <div className="px-3.5 py-3.5 bg-emerald-50 border-t border-slate-200">
            <div className="text-[0.68rem] font-black text-emerald-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span>🤖</span> Vigía IA
            </div>
            <div className="text-[0.72rem] text-emerald-700 leading-snug">
              Revisa cada documento al instante, apenas se sube. Sin cola de validación manual.
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="flex-1 min-w-0 w-full">
        <div className="flex items-start justify-between mb-3.5 gap-3">
          <div>
            <h3 className="text-[#1E293B] text-[0.95rem] font-bold">Gestor documental</h3>
            <p className="text-[0.78rem] text-slate-500 m-0 mt-0.5">Vista consolidada de todos los documentos asociados a este contrato.</p>
          </div>
          <div className="flex gap-2 shrink-0 items-center">
            <label className="px-3 py-1.5 bg-blue-600 text-white rounded-[8px] text-[0.78rem] font-medium hover:bg-blue-700 transition-colors shadow-sm cursor-pointer flex items-center gap-1.5">
              <span>📎</span> Subir documento
              <input type="file" className="hidden" />
            </label>
            <button className="px-3 py-1.5 border border-slate-300 text-slate-700 rounded-[8px] text-[0.78rem] font-medium hover:bg-slate-50 transition-colors shadow-sm bg-white flex items-center gap-1.5">
              Acciones masivas <span className="text-[0.6rem] opacity-60">▼</span>
            </button>
          </div>
        </div>

        {/* View Filters */}
        <div className="flex flex-wrap gap-2.5 mb-4 items-center">
          <input className="flex-1 min-w-[200px] max-w-[360px] bg-white border border-slate-200 rounded-[10px] px-3.5 py-2.5 text-[0.88rem] text-slate-800 placeholder-slate-400 outline-none shadow-sm" placeholder="Buscar por nombre, código..." />
          <select className="bg-white border border-slate-200 rounded-[10px] px-3 py-2.5 text-[0.82rem] text-slate-500 cursor-pointer outline-none shadow-sm"><option>Tipo de documento: Todos</option></select>
          <select className="bg-white border border-slate-200 rounded-[10px] px-3 py-2.5 text-[0.82rem] text-slate-500 cursor-pointer outline-none shadow-sm"><option>Categoría: Todas</option></select>
          <select className="bg-white border border-slate-200 rounded-[10px] px-3 py-2.5 text-[0.82rem] text-slate-500 cursor-pointer outline-none shadow-sm"><option>Plataforma: Todas</option></select>
          <select className="bg-white border border-slate-200 rounded-[10px] px-3 py-2.5 text-[0.82rem] text-slate-500 cursor-pointer outline-none shadow-sm"><option>Validación IA: Todas</option></select>
        </div>

        {/* Tabla Documentos */}
        <div className="bg-white border border-slate-200 rounded-[14px] overflow-x-auto shadow-sm">
          <table className="w-full border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-left text-[0.68rem] text-slate-500 font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4">Documento</th>
                <th className="py-3.5 px-4">Plataforma</th>
                <th className="py-3.5 px-4">Estado</th>
                <th className="py-3.5 px-4">Vencimiento</th>
                <th className="py-3.5 px-4">Subido</th>
                <th className="py-3.5 px-4">Validación IA</th>
                <th className="py-3.5 px-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400 text-[0.85rem]">
                    Cargando documentos...
                  </td>
                </tr>
              ) : list.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400 text-[0.85rem]">
                    No se encontraron documentos.
                  </td>
                </tr>
              ) : (
                list.map((d, idx) => {
                  const estado = d.estado_calc || 'falta';
                  return (
                    <tr key={d.id || idx} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-4 align-middle">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[1.1rem]">📄</span>
                          <div>
                            <div className="text-[0.82rem] font-bold text-slate-800">{d.titulo || d.id}</div>
                            <div className="text-[0.68rem] text-slate-500 mt-0.5">Empresa</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        <div className="h-[22px] w-[44px] bg-slate-100 rounded-[5px] flex items-center justify-center text-[0.55rem] font-black text-slate-600">
                          -
                        </div>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        <span className={`inline-flex items-center h-5 px-2 rounded-full text-[0.62rem] font-bold uppercase tracking-wider ${
                          estado === 'ok' ? 'bg-emerald-100 text-emerald-700' : 
                          estado === 'venc' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {estado === 'ok' ? 'Vigente' : estado === 'venc' ? 'Vencido' : 'Pendiente'}
                        </span>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        <div className={`text-[0.78rem] font-semibold ${estado === 'venc' ? 'text-red-500' : 'text-slate-700'}`}>
                          {d.vence || '-'}
                        </div>
                        {d.vence && <div className="text-[0.65rem] text-slate-500 mt-0.5">{estado === 'venc' ? 'Vencido' : 'Vigente'}</div>}
                      </td>
                      <td className="py-3 px-4 align-middle">
                        <div className="text-[0.75rem] text-slate-700">Hoy</div>
                        <div className="text-[0.65rem] text-slate-500 mt-0.5">Sistema</div>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        {estado === 'ok' ? (
                          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-50 border border-emerald-100">
                            <span className="text-[0.6rem]">✅</span>
                            <span className="text-[0.65rem] font-bold text-emerald-700">Aprobado</span>
                          </div>
                        ) : estado === 'venc' ? (
                          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-red-50 border border-red-100">
                            <span className="text-[0.6rem]">⛔</span>
                            <span className="text-[0.65rem] font-bold text-red-700">Rechazado</span>
                          </div>
                        ) : (
                          <span className="text-[0.75rem] text-slate-400">-</span>
                        )}
                      </td>
                      <td className="py-3 px-4 align-middle text-right">
                        <button className="px-2.5 py-1 border border-slate-200 rounded-[6px] text-[0.72rem] font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors bg-white">
                          Ver
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          
          <div className="bg-slate-50 border-t border-slate-200 p-3 flex justify-between items-center text-[0.75rem] text-slate-500">
            <span>Mostrando {list.length} de {totalDocs} documentos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
