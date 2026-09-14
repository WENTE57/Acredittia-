"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Api from "@/lib/cliente";
import type { Kpis, Contrato, Alerta, ProximoVencimiento, ActividadFila } from "@/lib/tipos";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [kpis, setKpis] = useState<Kpis | null>(null);
  const [contratosList, setContratosList] = useState<Contrato[]>([]);
  const [alertasVector, setAlertasVector] = useState<Alerta[]>([]);
  const [vencimientosList, setVencimientosList] = useState<ProximoVencimiento[]>([]);
  const [actividadList, setActividadList] = useState<ActividadFila[]>([]);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDashboardData() {
      setLoading(true);
      setApiError(null);
      try {
        const [kpisRes, contratosRes, alertasRes, vencimientosRes, actividadRes] = await Promise.allSettled([
          Api.dashboard.kpis(),
          Api.contratos.listar({ page_size: 10 }),
          Api.alertas.listar({ page_size: 5, solo_activas: true }),
          Api.dashboard.proximosVencimientos({ page_size: 5 }),
          Api.dashboard.actividad({ page_size: 5 }),
        ]);

        if (kpisRes.status === "fulfilled") setKpis(kpisRes.value);
        if (contratosRes.status === "fulfilled") setContratosList(contratosRes.value.items || []);
        if (alertasRes.status === "fulfilled") setAlertasVector(alertasRes.value.items || []);
        if (vencimientosRes.status === "fulfilled") setVencimientosList(vencimientosRes.value.items || []);
        if (actividadRes.status === "fulfilled") setActividadList(actividadRes.value.items || []);
      } catch (err: any) {
        console.error("Error al cargar datos del dashboard:", err);
        setApiError(err.message || "No se pudo establecer conexión con el servidor backend.");
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  const totalContratos = kpis?.contratos_activos ?? contratosList.length;
  const totalFaenas = kpis?.faenas_activas ?? 0;
  const personalAcreditado = kpis?.personal?.acreditados ?? 0;
  const personalTotal = kpis?.personal?.total ?? 0;
  const equiposAcreditados = kpis?.equipos?.acreditados ?? 0;
  const equiposTotal = kpis?.equipos?.total ?? 0;
  const cumplimientoPct = kpis?.cumplimiento_general_pct ?? 0;

  const sinDatosRegistrados = !loading && totalContratos === 0 && personalTotal === 0 && equiposTotal === 0;

  return (
    <div className="p-6 space-y-6">
      {/* Banner de información de conexión y datos reales */}
      {sinDatosRegistrados && (
        <div className="bg-amber-50 border border-amber-300 text-amber-900 rounded-xl p-4 flex items-start gap-3 shadow-sm">
          <span className="text-xl">⚠️</span>
          <div className="space-y-1">
            <h4 className="font-bold text-sm">Sin datos reales en la base de datos</h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              Los datos estáticos de demostración fueron eliminados. Actualmente no existen registros (contratos, personal o equipos) cargados en la base de datos de tu organización. 
              Puedes comenzar agregando registros en{" "}
              <Link href="/contratos" className="underline font-semibold text-amber-950">Contratos</Link> o{" "}
              <Link href="/personal" className="underline font-semibold text-amber-950">Personal</Link>.
            </p>
          </div>
        </div>
      )}

      {apiError && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 flex items-center gap-3 text-xs">
          <span>❌</span>
          <div>
            <b>Conexión backend:</b> {apiError} (El frontend está listo y conectado a la API).
          </div>
        </div>
      )}

      {/* Tarjetas KPI */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Contratos */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
          <div className="text-2xl p-2.5 bg-slate-100 rounded-lg">📋</div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Contratos activos</div>
            <div className="text-xl font-bold text-slate-800">{loading ? "..." : totalContratos}</div>
            <div className="text-[11px] text-slate-400">de {totalContratos} totales</div>
          </div>
        </div>

        {/* Faenas */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
          <div className="text-2xl p-2.5 bg-slate-100 rounded-lg">🏔️</div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Faenas activas</div>
            <div className="text-xl font-bold text-slate-800">{loading ? "..." : totalFaenas}</div>
            <div className="text-[11px] text-slate-400">de {totalFaenas} totales</div>
          </div>
        </div>

        {/* Personal */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
          <div className="text-2xl p-2.5 bg-slate-100 rounded-lg">👥</div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Personal acreditado</div>
            <div className="text-xl font-bold text-slate-800">{loading ? "..." : personalAcreditado}</div>
            <div className="text-[11px] text-emerald-600 font-medium">de {personalTotal} trabajadores</div>
          </div>
        </div>

        {/* Equipos */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
          <div className="text-2xl p-2.5 bg-slate-100 rounded-lg">🚛</div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Equipos acreditados</div>
            <div className="text-xl font-bold text-slate-800">{loading ? "..." : equiposAcreditados}</div>
            <div className="text-[11px] text-emerald-600 font-medium">de {equiposTotal} equipos</div>
          </div>
        </div>

        {/* Cumplimiento General */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-bold text-xs">
            {cumplimientoPct}%
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Cumplimiento general</div>
            <div className="text-xl font-bold text-slate-800">{loading ? "..." : `${cumplimientoPct}%`}</div>
            <div className="text-[11px] text-slate-400 font-medium">Datos en vivo</div>
          </div>
        </div>
      </div>

      {/* Banner Vigía IA */}
      <div className="flex items-center gap-3 bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 shadow-sm">
        <span className="text-lg">🛡️</span>
        <div>
          <b>Vigía IA activo</b> — Monitoreo automático integrado a la API y base de datos.
        </div>
      </div>

      {/* Acciones Pendientes */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-sm text-slate-800">Acciones pendientes</h3>
            <p className="text-xs text-slate-500">Documentos por cargar o regularizar en la plataforma</p>
          </div>
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-600">
            {alertasVector.length} pendientes
          </span>
        </div>

        {loading ? (
          <div className="p-8 text-center text-slate-400 text-xs">Cargando datos desde la API...</div>
        ) : alertasVector.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs">
            ✨ No hay acciones pendientes registradas en este momento.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {alertasVector.map((alerta) => (
              <div key={alerta.id} className="p-3.5 flex items-center justify-between text-xs hover:bg-slate-50/50">
                <div>
                  <div className="font-bold text-slate-800">{alerta.titulo}</div>
                  <div className="text-slate-500">{alerta.descripcion}</div>
                </div>
                <Link href="/alertas" className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 font-medium transition-colors">
                  Ver detalle
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cumplimiento por Contrato & Alertas Importantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-sm text-slate-800">Cumplimiento por contrato</h3>
            <Link href="/contratos" className="text-xs text-blue-600 hover:underline">Ver todos los contratos →</Link>
          </div>
          {loading ? (
            <div className="p-8 text-center text-slate-400 text-xs">Cargando contratos...</div>
          ) : contratosList.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs space-y-2">
              <div>No existen contratos registrados en la base de datos.</div>
              <Link href="/contratos" className="inline-block px-3 py-1.5 bg-blue-600 text-white font-medium rounded text-xs">
                + Crear primer contrato
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 text-xs">
              {contratosList.map((c) => (
                <div key={c.id} className="p-3.5 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-800">{c.nombre}</div>
                    <div className="text-slate-400 text-[11px]">{c.codigo || "Sin código"}</div>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">
                    {c.estado || "Activo"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Alertas Importantes */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-sm text-slate-800">Alertas importantes</h3>
            <Link href="/alertas" className="text-xs text-blue-600 hover:underline">Ver todas →</Link>
          </div>
          {loading ? (
            <div className="p-8 text-center text-slate-400 text-xs">Cargando alertas...</div>
          ) : alertasVector.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs">
              No existen alertas registradas en el sistema.
            </div>
          ) : (
            <div className="divide-y divide-slate-100 text-xs">
              {alertasVector.map((a) => (
                <div key={a.id} className="p-3.5 flex items-center gap-3">
                  <span>⚠️</span>
                  <div className="flex-1">
                    <div className="font-bold text-slate-800">{a.titulo}</div>
                    <div className="text-slate-500 text-[11px]">{a.descripcion}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
