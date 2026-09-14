"use client";

import React, { useEffect, useState } from "react";
import * as Api from "@/lib/cliente";
import type { Faena } from "@/lib/tipos";

export default function MandantesPage() {
  const [loading, setLoading] = useState(true);
  const [faenasList, setFaenasList] = useState<Faena[]>([]);

  useEffect(() => {
    async function fetchMandantes() {
      setLoading(true);
      try {
        const res = await Api.faenas.listar({ page_size: 50 });
        setFaenasList(res.items || []);
      } catch (err) {
        console.error("Error al cargar mandantes:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMandantes();
  }, []);

  const total = faenasList.length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Mandantes & Compañías Operadoras</h2>
          <p className="text-xs text-slate-500 mt-1">
            Lista de mandantes principales y mineras asociadas a los contratos.
          </p>
        </div>
      </div>

      {!loading && total === 0 && (
        <div className="bg-amber-50 border border-amber-300 text-amber-900 rounded-xl p-4 flex items-start gap-3 shadow-sm">
          <span className="text-xl">⚠️</span>
          <div className="space-y-1">
            <h4 className="font-bold text-sm">Sin datos de mandantes en la base de datos</h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              No se encontraron mandantes o compañías operadoras registradas actualmente en la base de datos.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase text-[10px] tracking-wider">
            <tr>
              <th className="p-3.5">Compañía Mandante</th>
              <th className="p-3.5">Faena</th>
              <th className="p-3.5">Región</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={3} className="p-8 text-center text-slate-400">
                  Cargando mandantes...
                </td>
              </tr>
            ) : faenasList.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-8 text-center text-slate-400">
                  No hay mandantes registrados en la base de datos.
                </td>
              </tr>
            ) : (
              faenasList.map((f) => (
                <tr key={f.id} className="hover:bg-slate-50/50">
                  <td className="p-3.5 font-bold text-slate-800">{f.mandante}</td>
                  <td className="p-3.5 text-slate-600">{f.nombre}</td>
                  <td className="p-3.5 text-slate-500">{f.region || "N/A"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
