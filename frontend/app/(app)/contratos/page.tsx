"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Api from "@/lib/cliente";
import type { Contrato } from "@/lib/tipos";

export default function ContratosPage() {
  const [loading, setLoading] = useState(true);
  const [contratosList, setContratosList] = useState<Contrato[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchContratos() {
      setLoading(true);
      try {
        const res = await Api.contratos.listar({ page_size: 50 });
        setContratosList(res.items || []);
      } catch (err) {
        console.error("Error al cargar contratos:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchContratos();
  }, []);

  const filtered = contratosList.filter((c) => {
    if (!search) return true;
    const term = search.toLowerCase();
    return (
      c.nombre?.toLowerCase().includes(term) ||
      c.codigo?.toLowerCase().includes(term) ||
      c.faena?.nombre?.toLowerCase().includes(term)
    );
  });

  const total = contratosList.length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Contratos</h2>
          <p className="text-xs text-slate-500 mt-1">
            Administra los contratos activos y sus requisitos de acreditación.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3.5 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            + Crear nuevo contrato
          </button>
        </div>
      </div>

      {/* Empty State Banner */}
      {!loading && total === 0 && (
        <div className="bg-amber-50 border border-amber-300 text-amber-900 rounded-xl p-4 flex items-start gap-3 shadow-sm">
          <span className="text-xl">⚠️</span>
          <div className="space-y-1">
            <h4 className="font-bold text-sm">Sin datos de contratos en la base de datos</h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              No se encontraron contratos registrados actualmente en la base de datos de tu organización.
              Los datos estáticos de demostración fueron removidos. Puedes hacer clic en <b>"+ Crear nuevo contrato"</b> para agregar uno.
            </p>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <input
          type="text"
          placeholder="Buscar por nombre de contrato, código o faena..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase text-[10px] tracking-wider">
            <tr>
              <th className="p-3.5">Contrato</th>
              <th className="p-3.5">Código</th>
              <th className="p-3.5">Faena</th>
              <th className="p-3.5">Estado</th>
              <th className="p-3.5 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-400">
                  Cargando contratos...
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-400">
                  No se encontraron contratos registrados en la base de datos.
                </td>
              </tr>
            ) : (
              filtered.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-800">{c.nombre}</td>
                  <td className="p-3.5 text-slate-500">{c.codigo || "Sin código"}</td>
                  <td className="p-3.5 text-slate-700">{c.faena?.nombre || "Sin faena"}</td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-100 text-emerald-800">
                      {c.estado || "Vigente"}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <Link href={`/contratos/${c.id}`} className="text-blue-600 hover:underline font-medium">
                      Ver contrato
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
