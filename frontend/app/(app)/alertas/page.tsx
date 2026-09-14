"use client";

import React, { useEffect, useState } from "react";
import * as Api from "@/lib/cliente";
import type { Alerta } from "@/lib/tipos";

export default function AlertasPage() {
  const [loading, setLoading] = useState(true);
  const [alertasList, setAlertasList] = useState<Alerta[]>([]);

  useEffect(() => {
    async function fetchAlertas() {
      setLoading(true);
      try {
        const res = await Api.alertas.listar({ page_size: 50 });
        setAlertasList(res.items || []);
      } catch (err) {
        console.error("Error al cargar alertas:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAlertas();
  }, []);

  const total = alertasList.length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Alertas & Notificaciones</h2>
          <p className="text-xs text-slate-500 mt-1">
            Revisa los vencimientos y observaciones generados por la plataforma.
          </p>
        </div>
      </div>

      {/* Empty State Banner */}
      {!loading && total === 0 && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl p-4 flex items-start gap-3 shadow-sm">
          <span className="text-xl">✨</span>
          <div className="space-y-1">
            <h4 className="font-bold text-sm">Sin alertas registradas</h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              No existen alertas activas ni observaciones de vencimiento en la base de datos de tu organización.
            </p>
          </div>
        </div>
      )}

      {/* List */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-8 text-center text-slate-400 text-xs">Cargando alertas...</div>
        ) : alertasList.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            No existen alertas en la base de datos.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {alertasList.map((a) => (
              <div key={a.id} className="p-4 flex items-start gap-3 text-xs hover:bg-slate-50/50">
                <span className="text-lg">⚠️</span>
                <div className="flex-1">
                  <div className="font-bold text-slate-800">{a.titulo}</div>
                  <div className="text-slate-600 mt-0.5">{a.descripcion}</div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    Origen: {a.origen || "Sistema"} • Severidad: {a.severidad || "Normal"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
