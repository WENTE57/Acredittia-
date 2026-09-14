"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Api from "@/lib/cliente";
import type { Sujeto } from "@/lib/tipos";

export default function PersonasPage() {
  const [loading, setLoading] = useState(true);
  const [personalList, setPersonalList] = useState<Sujeto[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPersonal() {
      setLoading(true);
      try {
        const res = await Api.personal.listar({ page_size: 50 });
        setPersonalList(res.items || []);
      } catch (err) {
        console.error("Error al cargar personal:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPersonal();
  }, []);

  const filtered = personalList.filter((p) => {
    if (!search) return true;
    const term = search.toLowerCase();
    return (
      p.nombre?.toLowerCase().includes(term) ||
      p.rut?.toLowerCase().includes(term) ||
      p.cargo?.toLowerCase().includes(term)
    );
  });

  const total = personalList.length;
  const acreditados = personalList.filter((p) => p.estado === "ok").length;
  const pendientes = personalList.filter((p) => p.estado === "proc" || p.estado === "falta").length;
  const vencidos = personalList.filter((p) => p.estado === "venc").length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Personal</h2>
          <p className="text-xs text-slate-500 mt-1">
            Gestiona y supervisa a todo el personal de tu empresa en sus diferentes faenas.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3.5 py-2 text-xs font-semibold border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50">
            ↓ Exportar
          </button>
          <button className="px-3.5 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            + Agregar personal
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
          <div className="text-2xl p-2 bg-slate-100 rounded-lg">👥</div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Total personal</div>
            <div className="text-xl font-bold text-slate-800">{loading ? "..." : total}</div>
            <div className="text-[11px] text-slate-400">en tu empresa</div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
          <div className="text-2xl p-2 bg-emerald-50 rounded-lg text-emerald-600">✅</div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Acreditados</div>
            <div className="text-xl font-bold text-slate-800">{loading ? "..." : acreditados}</div>
            <div className="text-[11px] text-emerald-600 font-medium">
              {total > 0 ? `${Math.round((acreditados / total) * 100)}% del total` : "0% del total"}
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
          <div className="text-2xl p-2 bg-amber-50 rounded-lg text-amber-600">⏳</div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Pendientes</div>
            <div className="text-xl font-bold text-slate-800">{loading ? "..." : pendientes}</div>
            <div className="text-[11px] text-amber-600 font-medium">
              {total > 0 ? `${Math.round((pendientes / total) * 100)}% del total` : "0% del total"}
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
          <div className="text-2xl p-2 bg-red-50 rounded-lg text-red-600">❌</div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Vencidos</div>
            <div className="text-xl font-bold text-slate-800">{loading ? "..." : vencidos}</div>
            <div className="text-[11px] text-red-600 font-medium">
              {total > 0 ? `${Math.round((vencidos / total) * 100)}% del total` : "0% del total"}
            </div>
          </div>
        </div>
      </div>

      {/* Empty State Banner */}
      {!loading && total === 0 && (
        <div className="bg-amber-50 border border-amber-300 text-amber-900 rounded-xl p-4 flex items-start gap-3 shadow-sm">
          <span className="text-xl">⚠️</span>
          <div className="space-y-1">
            <h4 className="font-bold text-sm">Sin datos de personal en la base de datos</h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              No se encontraron trabajadores registrados actualmente en la base de datos.
              Los datos estáticos de demostración fueron removidos. Puedes hacer clic en <b>"+ Agregar personal"</b> para registrar trabajadores.
            </p>
          </div>
        </div>
      )}

      {/* Filters & Search */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Buscar por nombre, RUT o cargo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase text-[10px] tracking-wider">
            <tr>
              <th className="p-3.5">Trabajador</th>
              <th className="p-3.5">RUT</th>
              <th className="p-3.5">Cargo</th>
              <th className="p-3.5">Estado</th>
              <th className="p-3.5 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-400">
                  Cargando registros de personal...
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-400">
                  No se encontraron trabajadores registrados en la base de datos.
                </td>
              </tr>
            ) : (
              filtered.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-800">{p.nombre}</td>
                  <td className="p-3.5 text-slate-500">{p.rut || "Sin RUT"}</td>
                  <td className="p-3.5 text-slate-700">{p.cargo || "Sin cargo"}</td>
                  <td className="p-3.5">
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                        p.estado === "ok"
                          ? "bg-emerald-100 text-emerald-800"
                          : p.estado === "proc"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {p.estado === "ok" ? "Acreditado" : p.estado === "proc" ? "En proceso" : "Pendiente/Vencido"}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <Link href={`/personal/${p.id}`} className="text-blue-600 hover:underline font-medium">
                      Ver ficha
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
