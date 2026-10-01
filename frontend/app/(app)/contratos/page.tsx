"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Api from "@/lib/cliente";
import type { Contrato } from "@/lib/tipos";
import { NuevaModalContrato } from "@/components/NuevaModalContrato";

export default function ContratosPage() {
  const [loading, setLoading] = useState(true);
  const [contratosList, setContratosList] = useState<Contrato[]>([]);
  const [search, setSearch] = useState("");
  const [estadoFilter, setEstadoFilter] = useState("Todos");
  const [faenaFilter, setFaenaFilter] = useState("Todas");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchContratos = async () => {
    setLoading(true);
    try {
      const res = await Api.contratos.listar({ page_size: 50 });
      setContratosList(res.items || []);
    } catch (err) {
      console.error("Error al cargar contratos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContratos();
  }, []);

  const handleDelete = async (id: string, nombre: string) => {
    if (!confirm(`¿Estás seguro de que deseas eliminar el contrato "${nombre}"?\nEsto eliminará permanentemente el contrato y sus referencias.`)) return;
    try {
      await Api.contratos.eliminar(id);
      fetchContratos();
    } catch (e) {
      alert(Api.mensajeError(e));
    }
  };

  const filtered = contratosList.filter((c) => {
    if (search) {
      const term = search.toLowerCase();
      const match = c.nombre?.toLowerCase().includes(term) ||
                    c.codigo?.toLowerCase().includes(term) ||
                    c.faena?.nombre?.toLowerCase().includes(term);
      if (!match) return false;
    }
    if (estadoFilter !== "Todos") {
      let estado = c.stats?.cumplimiento_pct >= 70 ? "Activo" : c.stats?.cumplimiento_pct >= 40 ? "Por vencer" : "Vencido";
      if (estado !== estadoFilter) return false;
    }
    if (faenaFilter !== "Todas" && c.faena?.nombre !== faenaFilter) {
      return false;
    }
    return true;
  });

  const total = contratosList.length;
  const activos = contratosList.filter(c => c.stats?.cumplimiento_pct >= 70).length;
  const porVencer = contratosList.filter(c => c.stats?.cumplimiento_pct >= 40 && c.stats?.cumplimiento_pct < 70).length;
  const vencidos = contratosList.filter(c => c.stats?.cumplimiento_pct < 40).length;

  const faenasDistintas = Array.from(new Set(contratosList.map(c => c.faena?.nombre).filter(Boolean)));

  return (
    <div className="p-6 max-w-[1400px] mx-auto pb-20">
      {/* View Head */}
      <div className="flex justify-between mb-8 items-center">
        <div>
          <h2 className="text-[1.8rem] font-bold text-[#0F172A] m-0 leading-tight">Contratos</h2>
          <p className="text-[0.88rem] text-slate-500 m-0 mt-1">Administra todos los contratos de tu empresa en sus diferentes faenas.</p>
        </div>
        <div className="flex gap-2">
          <button className="h-[36px] px-4 border border-slate-300 rounded-[10px] bg-white text-slate-700 font-semibold text-[0.82rem] hover:bg-slate-50 hover:border-slate-400 transition-colors cursor-pointer shadow-sm" onClick={() => alert("Exportar — próximamente")}>
            ↓ Exportar
          </button>
          <button className="h-[36px] px-4 border-none rounded-[10px] bg-blue-600 text-white font-semibold text-[0.82rem] hover:bg-blue-700 transition-colors shadow-sm cursor-pointer" onClick={() => setIsModalOpen(true)}>
            + Nuevo contrato
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-200 rounded-[16px] px-6 py-5 flex gap-4 shadow-sm items-center">
          <div className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center text-[1.4rem] bg-slate-100/80">📋</div>
          <div>
            <div className="text-[0.72rem] text-slate-500 font-bold uppercase tracking-wider mb-1">Total contratos</div>
            <div className="text-[1.7rem] font-black text-[#0F172A] leading-none mb-1.5">{total}</div>
            <div className="text-[0.7rem] text-slate-400 font-medium">de todos los contratos</div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-[16px] px-6 py-5 flex gap-4 shadow-sm items-center">
          <div className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center text-[1.4rem] bg-emerald-500/15">✅</div>
          <div>
            <div className="text-[0.72rem] text-slate-500 font-bold uppercase tracking-wider mb-1">Contratos activos</div>
            <div className="text-[1.7rem] font-black text-[#0F172A] leading-none mb-1.5">{activos}</div>
            <div className="text-[0.7rem] font-bold text-emerald-600">{total ? Math.round((activos / total) * 100) : 0}% del total</div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-[16px] px-6 py-5 flex gap-4 shadow-sm items-center">
          <div className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center text-[1.4rem] bg-amber-500/15">⏳</div>
          <div>
            <div className="text-[0.72rem] text-slate-500 font-bold uppercase tracking-wider mb-1">Por vencer <span className="lowercase font-normal">(próx. 90 días)</span></div>
            <div className="text-[1.7rem] font-black text-[#0F172A] leading-none mb-1.5">{porVencer}</div>
            <div className="text-[0.7rem] font-bold text-amber-600">{total ? Math.round((porVencer / total) * 100) : 0}% del total</div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-[16px] px-6 py-5 flex gap-4 shadow-sm items-center">
          <div className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center text-[1.4rem] bg-red-500/15">❌</div>
          <div>
            <div className="text-[0.72rem] text-slate-500 font-bold uppercase tracking-wider mb-1">Vencidos</div>
            <div className="text-[1.7rem] font-black text-[#0F172A] leading-none mb-1.5">{vencidos}</div>
            <div className="text-[0.7rem] font-bold text-red-600">{total ? Math.round((vencidos / total) * 100) : 0}% del total</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2.5 mb-5 items-center">
        <input
          type="text"
          placeholder="Buscar contrato, faena o estado..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[200px] max-w-[360px] bg-white border border-slate-200 rounded-[10px] px-3.5 py-2.5 text-[0.88rem] text-slate-800 placeholder-slate-400 outline-none shadow-sm"
        />
        <select
          value={estadoFilter}
          onChange={(e) => setEstadoFilter(e.target.value)}
          className="bg-white border border-slate-200 rounded-[10px] px-3 py-2.5 text-[0.82rem] text-slate-500 cursor-pointer outline-none shadow-sm"
        >
          <option value="Todos">Estado: Todos</option>
          <option value="Activo">Activo</option>
          <option value="Por vencer">Por vencer</option>
          <option value="Vencido">Vencido</option>
        </select>
        <select
          value={faenaFilter}
          onChange={(e) => setFaenaFilter(e.target.value)}
          className="bg-white border border-slate-200 rounded-[10px] px-3 py-2.5 text-[0.82rem] text-slate-500 cursor-pointer outline-none shadow-sm"
        >
          <option value="Todas">Faena: Todas</option>
          {faenasDistintas.map(f => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-left text-[0.78rem] text-slate-500 font-bold uppercase">
              <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Contrato</th>
              <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Faena</th>
              <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Inicio</th>
              <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Término</th>
              <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Estado</th>
              <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Cumplimiento</th>
              <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Personal acreditado</th>
              <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Equipos acreditados</th>
              <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Alertas</th>
              <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={10} className="p-8 text-center text-slate-400 text-[0.85rem]">
                  Cargando contratos...
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={10} className="p-8 text-center text-slate-400 text-[0.85rem]">
                  No se encontraron contratos.
                </td>
              </tr>
            ) : (
              filtered.map((c) => {
                const pct = c.stats?.cumplimiento_pct || 0;
                const bar = pct >= 70 ? "#10B981" : pct >= 40 ? "#F59E0B" : "#EF4444";
                const chipC = pct >= 70 ? "bg-emerald-100 text-emerald-700" : pct >= 40 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700";
                const chipT = pct >= 70 ? "Activo" : pct >= 40 ? "Por vencer" : "Vencido";
                const perOk = c.stats?.personal?.acreditados || 0;
                const perTot = c.stats?.personal?.total || 0;
                const eqOk = c.stats?.equipos?.acreditados || 0;
                const eqTot = c.stats?.equipos?.total || 0;
                const alCt = c.stats?.alertas_activas || 0;

                return (
                  <tr key={c.id} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 align-middle">
                      <Link href={`/contratos/${c.id}`} className="block font-bold text-[#1e293b] hover:text-blue-600 hover:underline text-[0.88rem] mb-0.5 truncate max-w-[200px]">
                        • {c.nombre}
                      </Link>
                      <div className="text-[0.72rem] text-slate-400">{c.faena?.nombre}</div>
                    </td>
                    <td className="py-3 px-4 align-middle text-[0.8rem] text-slate-500">{c.faena?.nombre}</td>
                    <td className="py-3 px-4 align-middle text-[0.8rem] text-slate-500">
                      {c.fecha_inicio ? new Date(c.fecha_inicio + 'T00:00:00').toLocaleDateString('es-CL') : '01-01-2024'}
                    </td>
                    <td className="py-3 px-4 align-middle text-[0.8rem] text-slate-500">
                      {c.fecha_termino ? new Date(c.fecha_termino + 'T00:00:00').toLocaleDateString('es-CL') : '31-12-2025'}
                    </td>
                    <td className="py-3 px-4 align-middle">
                      <span className={`inline-flex items-center h-5 px-2 rounded-full text-[0.62rem] font-bold uppercase tracking-wider ${chipC}`}>
                        {chipT}
                      </span>
                    </td>
                    <td className="py-3 px-4 align-middle">
                      <div className="flex items-center gap-1.5">
                        <div className="h-[6px] w-[60px] bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: bar }} />
                        </div>
                        <span className="text-[0.78rem] font-semibold" style={{ color: bar }}>{pct}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 align-middle text-[0.8rem]">
                      {perOk} / {perTot}
                      <div className="text-[0.68rem] text-slate-400 font-semibold">{perTot ? Math.round(perOk/perTot*100) : 0}%</div>
                    </td>
                    <td className="py-3 px-4 align-middle text-[0.8rem]">
                      {eqOk} / {eqTot}
                      <div className="text-[0.68rem] text-slate-400 font-semibold">{eqTot ? Math.round(eqOk/eqTot*100) : 0}%</div>
                    </td>
                    <td className="py-3 px-4 align-middle">
                      {alCt > 0 ? (
                        <span className="inline-flex items-center h-5 px-2 rounded-full text-[0.68rem] font-bold bg-amber-100 text-amber-700">
                          {alCt}
                        </span>
                      ) : (
                        <span className="text-slate-400 text-[0.8rem]">0</span>
                      )}
                    </td>
                    <td className="py-3 px-4 align-middle">
                      <Link href={`/contratos/${c.id}`} className="text-slate-400 hover:text-slate-600 text-lg cursor-pointer inline-block mr-2" title="Ver">👁</Link>
                      <span className="text-red-400 hover:text-red-600 text-lg cursor-pointer" title="Eliminar contrato" onClick={() => handleDelete(c.id, c.nombre)}>🗑</span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        <div className="px-4 py-3 border-t border-slate-200 text-[0.75rem] font-medium text-slate-500 flex justify-between items-center bg-slate-50">
          <span>Mostrando 1 a {filtered.length} de {total} contratos</span>
          <span className="text-blue-600 font-bold">10 por página</span>
        </div>
      </div>
      
      <NuevaModalContrato
        abierto={isModalOpen}
        onCerrar={() => setIsModalOpen(false)}
      />
    </div>
  );
}
