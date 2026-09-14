"use client";

import React, { useEffect, useState } from "react";
import * as Api from "@/lib/cliente";
import type { RequisitoFila } from "@/lib/tipos";

export default function RequisitosPage() {
  const [loading, setLoading] = useState(true);
  const [requisitosList, setRequisitosList] = useState<RequisitoFila[]>([]);

  useEffect(() => {
    async function fetchRequisitos() {
      setLoading(true);
      try {
        const res = await Api.requisitos.listar({ page_size: 50 });
        setRequisitosList(res.items || []);
      } catch (err) {
        console.error("Error al cargar requisitos:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRequisitos();
  }, []);

  const total = requisitosList.length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Requisitos de Acreditación</h2>
          <p className="text-xs text-slate-500 mt-1">
            Catálogo y matriz de requisitos aplicables a tu empresa.
          </p>
        </div>
      </div>

      {!loading && total === 0 && (
        <div className="bg-amber-50 border border-amber-300 text-amber-900 rounded-xl p-4 flex items-start gap-3 shadow-sm">
          <span className="text-xl">⚠️</span>
          <div className="space-y-1">
            <h4 className="font-bold text-sm">Sin datos de requisitos en la base de datos</h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              No se encontraron requisitos o plantillas asociadas a tu organización en la base de datos.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase text-[10px] tracking-wider">
            <tr>
              <th className="p-3.5">Requisito / Documento</th>
              <th className="p-3.5">Ámbito</th>
              <th className="p-3.5">Tipo</th>
              <th className="p-3.5">Obligatorio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-400">
                  Cargando requisitos...
                </td>
              </tr>
            ) : requisitosList.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-400">
                  No hay requisitos registrados en la base de datos.
                </td>
              </tr>
            ) : (
              requisitosList.map((r) => (
                <tr key={r.template_id} className="hover:bg-slate-50/50">
                  <td className="p-3.5 font-bold text-slate-800">{r.titulo}</td>
                  <td className="p-3.5 text-slate-600">{r.ambito || "General"}</td>
                  <td className="p-3.5 text-slate-500">{r.tipo || "Documento"}</td>
                  <td className="p-3.5">
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${r.obligatorio ? "bg-red-100 text-red-800" : "bg-slate-100 text-slate-600"}`}>
                      {r.obligatorio ? "Obligatorio" : "Opcional"}
                    </span>
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
