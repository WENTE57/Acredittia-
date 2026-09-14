"use client";

import React, { useEffect, useState } from "react";
import * as Api from "@/lib/cliente";
import type { Cargo } from "@/lib/tipos";

export default function CargosPage() {
  const [loading, setLoading] = useState(true);
  const [cargosList, setCargosList] = useState<Cargo[]>([]);

  useEffect(() => {
    async function fetchCargos() {
      setLoading(true);
      try {
        const res = await Api.cargos.listar({ page_size: 50 });
        setCargosList(res.items || []);
      } catch (err) {
        console.error("Error al cargar cargos:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCargos();
  }, []);

  const total = cargosList.length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Cargos & Roles</h2>
          <p className="text-xs text-slate-500 mt-1">
            Catálogo de cargos definidos para el personal de tu empresa.
          </p>
        </div>
      </div>

      {!loading && total === 0 && (
        <div className="bg-amber-50 border border-amber-300 text-amber-900 rounded-xl p-4 flex items-start gap-3 shadow-sm">
          <span className="text-xl">⚠️</span>
          <div className="space-y-1">
            <h4 className="font-bold text-sm">Sin datos de cargos en la base de datos</h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              No se encontraron cargos registrados actualmente en la base de datos.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase text-[10px] tracking-wider">
            <tr>
              <th className="p-3.5">Cargo</th>
              <th className="p-3.5">Categoría</th>
              <th className="p-3.5">EMSIPOR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={3} className="p-8 text-center text-slate-400">
                  Cargando cargos...
                </td>
              </tr>
            ) : cargosList.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-8 text-center text-slate-400">
                  No hay cargos registrados en la base de datos.
                </td>
              </tr>
            ) : (
              cargosList.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/50">
                  <td className="p-3.5 font-bold text-slate-800">{c.nombre}</td>
                  <td className="p-3.5 text-slate-600">{c.categoria || "General"}</td>
                  <td className="p-3.5 text-slate-500">
                    {c.requiere_emsipor ? "Sí (Requiere EMSIPOR)" : "No"}
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
