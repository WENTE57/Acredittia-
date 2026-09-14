"use client";

import React, { useEffect, useState } from "react";
import * as Api from "@/lib/cliente";
import type { Eventos } from "@/lib/tipos";

export default function CalendarioPage() {
  const [loading, setLoading] = useState(true);
  const [eventosList, setEventosList] = useState<Eventos["items"]>([]);

  useEffect(() => {
    async function fetchEventos() {
      setLoading(true);
      try {
        const hoy = new Date();
        const hace30d = new Date(hoy.getTime() - 30 * 24 * 60 * 60 * 1000);
        const en90d = new Date(hoy.getTime() + 90 * 24 * 60 * 60 * 1000);
        const desde = hace30d.toISOString().split("T")[0];
        const hasta = en90d.toISOString().split("T")[0];
        const res = await Api.calendario.eventos(desde, hasta);
        setEventosList(res.items || []);
      } catch (err) {
        console.error("Error al cargar eventos del calendario:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEventos();
  }, []);

  const total = eventosList.length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Calendario de Vencimientos</h2>
          <p className="text-xs text-slate-500 mt-1">
            Visualiza los próximos vencimientos programados y renovaciones.
          </p>
        </div>
      </div>

      {!loading && total === 0 && (
        <div className="bg-amber-50 border border-amber-300 text-amber-900 rounded-xl p-4 flex items-start gap-3 shadow-sm">
          <span className="text-xl">⚠️</span>
          <div className="space-y-1">
            <h4 className="font-bold text-sm">Sin datos de eventos en el calendario</h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              No se encontraron eventos o vencimientos registrados en la base de datos para los próximos 30 días.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-8 text-center text-slate-400 text-xs">Cargando calendario...</div>
        ) : eventosList.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            No existen eventos o vencimientos programados en la base de datos.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {eventosList.map((e) => (
              <div key={e.id} className="p-4 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-800">{e.titulo}</div>
                  <div className="text-slate-500">{e.descripcion}</div>
                </div>
                <div className="text-right text-slate-600 font-semibold">{e.fecha}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
