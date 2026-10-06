"use client";

import React, { useEffect, useState } from "react";
import * as Api from "@/lib/cliente";
import type { Contrato } from "@/lib/tipos";
import { NuevaModalContrato } from "@/components/contratos/NuevaModalContrato";
import { ContratosTable } from "@/components/contratos/ContratosTable";

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
      <ContratosTable
        contratos={filtered}
        loading={loading}
        total={total}
        onDelete={handleDelete}
      />
      
      <NuevaModalContrato
        abierto={isModalOpen}
        onCerrar={() => setIsModalOpen(false)}
      />
    </div>
  );
}
