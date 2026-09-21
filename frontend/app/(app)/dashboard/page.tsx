"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Api from "@/lib/cliente";
import type {
  Kpis,
  CumplimientoContrato,
  AcreditacionesEstado,
  Alerta,
  ProximoVencimiento,
  ActividadFila,
  Tendencia,
  Usuario,
} from "@/lib/tipos";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<Usuario | null>(null);
  const [kpis, setKpis] = useState<Kpis | null>(null);
  const [acreditaciones, setAcreditaciones] = useState<AcreditacionesEstado | null>(null);
  const [contratos, setContratos] = useState<CumplimientoContrato[]>([]);
  const [alertas, setAlertas] = useState<Alerta[]>([]);
  const [vencimientos, setVencimientos] = useState<ProximoVencimiento[]>([]);
  const [actividades, setActividades] = useState<ActividadFila[]>([]);
  const [tendencia, setTendencia] = useState<Tendencia | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    setUser(Api.currentUser());

    async function loadData() {
      setLoading(true);
      setApiError(null);
      try {
        const [
          kpisRes,
          acreditacionesRes,
          contratosRes,
          alertasRes,
          vencimientosRes,
          actividadRes,
          tendenciaRes,
        ] = await Promise.allSettled([
          Api.dashboard.kpis(),
          Api.dashboard.acreditacionesEstado(),
          Api.dashboard.cumplimientoContratos({ page_size: 10 }),
          Api.alertas.listar({ page_size: 10, solo_activas: true }),
          Api.dashboard.proximosVencimientos({ page_size: 5, dias: 30 }),
          Api.dashboard.actividad({ page_size: 5 }),
          Api.dashboard.tendencia({ periodo: "semana" }),
        ]);

        if (kpisRes.status === "fulfilled") setKpis(kpisRes.value);
        if (acreditacionesRes.status === "fulfilled") setAcreditaciones(acreditacionesRes.value);
        if (contratosRes.status === "fulfilled") setContratos(contratosRes.value.items || []);
        if (alertasRes.status === "fulfilled") setAlertas(alertasRes.value.items || []);
        if (vencimientosRes.status === "fulfilled") setVencimientos(vencimientosRes.value.items || []);
        if (actividadRes.status === "fulfilled") setActividades(actividadRes.value.items || []);
        if (tendenciaRes.status === "fulfilled") setTendencia(tendenciaRes.value);

        if (kpisRes.status === "rejected") {
          const reason = (kpisRes as any).reason;
          setApiError(reason?.message || "Sesión expirada o error de conexión.");
        }
      } catch (err: any) {
        console.error("Error al cargar datos del dashboard:", err);
        setApiError(err.message || "Error al conectar con la API.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const totalContratos = kpis?.contratos_activos ?? 0;
  const totalFaenas = kpis?.faenas_activas ?? 0;
  const personalAcred = kpis?.personal?.acreditados ?? 0;
  const personalTot = kpis?.personal?.total ?? 0;
  const equiposAcred = kpis?.equipos?.acreditados ?? 0;
  const equiposTot = kpis?.equipos?.total ?? 0;
  const cumplimientoPct = kpis?.cumplimiento_general_pct ?? 0;

  // Donut chart calculations
  const totalAcred = acreditaciones?.total || 1;
  const acredCount = acreditaciones?.acreditados || 0;
  const pendCount = acreditaciones?.pendientes || 0;
  const vencCount = acreditaciones?.vencidos || 0;

  const pctAcred = Math.round((acredCount / totalAcred) * 100);
  const pctPend = Math.round((pendCount / totalAcred) * 100);
  const pctVenc = Math.round((vencCount / totalAcred) * 100);

  // Helper formatting for date
  const formatearFechaBadge = (fechaIso: string) => {
    try {
      const d = new Date(fechaIso);
      const dia = d.getDate();
      const mes = d.toLocaleString("es-CL", { month: "short" }).toUpperCase();
      return { dia, mes };
    } catch {
      return { dia: "--", mes: "---" };
    }
  };

  const formatearTiempoRelativo = (fechaIso: string) => {
    try {
      const d = new Date(fechaIso);
      const hoy = new Date();
      const diffHs = Math.floor((hoy.getTime() - d.getTime()) / (1000 * 60 * 60));
      if (diffHs < 24) {
        return `Hoy, ${d.toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" })}`;
      }
      if (diffHs < 48) return "Ayer";
      return d.toLocaleDateString("es-CL", { day: "2-digit", month: "short" });
    } catch {
      return "Reciente";
    }
  };

  const nav = (route: string) => {
    if (typeof window !== "undefined" && (window as any).navTo) {
      (window as any).navTo(route);
    }
  };

  return (
    <div className="w-full space-y-6 text-slate-800">
      {/* Mensaje de Error de Conexión */}
      {apiError && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 flex items-center gap-3 text-xs">
          <span>❌</span>
          <div>
            <b>Conexión backend:</b> {apiError}
          </div>
        </div>
      )}

      {/* Saludo y Cabecera */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Hola, {user?.email || "demo@acredittia.cl"}!
        </h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Aquí tienes el resumen de tu operación minera.
        </p>
      </div>

      {/* 1. Tarjetas KPI Superior (5 Columnas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Contratos Activos */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm hover:border-slate-300 transition-colors">
          <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0">
            📋
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Contratos activos</div>
            <div className="text-2xl font-bold text-slate-900 leading-tight">
              {loading ? "..." : totalContratos}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {loading ? "..." : `de ${totalContratos} contratos totales`}
            </div>
          </div>
        </div>

        {/* Faenas Activas */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm hover:border-slate-300 transition-colors">
          <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0">
            🏔️
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Faenas activas</div>
            <div className="text-2xl font-bold text-slate-900 leading-tight">
              {loading ? "..." : totalFaenas}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {loading ? "..." : `de ${totalFaenas} faenas totales`}
            </div>
          </div>
        </div>

        {/* Personal Acreditado */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm hover:border-slate-300 transition-colors">
          <div className="w-11 h-11 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shrink-0">
            👥
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Personal acreditado</div>
            <div className="text-2xl font-bold text-slate-900 leading-tight">
              {loading ? "..." : personalAcred}
            </div>
            <div className="text-[11px] text-emerald-600 font-medium mt-0.5">
              {loading ? "..." : `de ${personalTot} trabajadores`}
            </div>
          </div>
        </div>

        {/* Equipos Acreditados */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm hover:border-slate-300 transition-colors">
          <div className="w-11 h-11 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0">
            🚛
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Equipos acreditados</div>
            <div className="text-2xl font-bold text-slate-900 leading-tight">
              {loading ? "..." : equiposAcred}
            </div>
            <div className="text-[11px] text-emerald-600 font-medium mt-0.5">
              {loading ? "..." : `de ${equiposTot} equipos`}
            </div>
          </div>
        </div>

        {/* Cumplimiento General Gauge */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm hover:border-slate-300 transition-colors">
          <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-100"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-emerald-500"
                strokeDasharray={`${cumplimientoPct}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-[11px] font-bold text-slate-800">
              {loading ? "..." : `${cumplimientoPct}%`}
            </span>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Cumplimiento general</div>
            <div className="text-2xl font-bold text-slate-900 leading-tight">
              {loading ? "..." : `${cumplimientoPct}%`}
            </div>
            <div className="text-[11px] text-emerald-600 font-medium mt-0.5">
              {loading
                ? "..."
                : tendencia?.delta_pct !== undefined
                ? `${tendencia.delta_pct >= 0 ? "+" : ""}${tendencia.delta_pct}% vs semana anterior`
                : "Datos en vivo en BD"}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Banner Vigía IA */}
      <div className="bg-emerald-50/90 border border-emerald-300/70 rounded-xl p-3.5 flex items-center gap-3 text-xs text-emerald-950 shadow-sm">
        <span className="text-base shrink-0">🛡️</span>
        <div className="flex-1 font-medium">
          <span className="font-bold">Vigía IA Activo</span> — Todo documento que se sube en cualquier contrato se revisa al instante, sin días de validación manual.
        </div>
      </div>

      {/* 3. Acciones Pendientes */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-sm text-slate-800">Acciones pendientes</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Documentos que faltan por cargar — resuélvelos desde aquí
            </p>
          </div>
          <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-red-100 text-red-700">
            {alertas.length} pendientes
          </span>
        </div>

        {loading ? (
          <div className="p-8 text-center text-slate-400 text-xs">Cargando acciones pendientes...</div>
        ) : alertas.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs">
            ✨ ¡Excelente! No tienes acciones pendientes por regularizar.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {alertas.map((alerta) => (
              <div
                key={alerta.id}
                className="p-3.5 flex items-center justify-between gap-4 text-xs hover:bg-slate-50/60 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold rounded shrink-0 ${
                      alerta.severidad === "critica" || alerta.severidad === "alta"
                        ? "bg-red-100 text-red-700"
                        : alerta.severidad === "media"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {alerta.severidad === "critica" ? "Alta" : alerta.severidad === "alta" ? "Alta" : "Media"}
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-800 truncate">
                      {alerta.titulo}
                    </div>
                    {alerta.descripcion && (
                      <div className="text-slate-500 text-[11px] truncate">
                        {alerta.descripcion}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => nav("alertas")}
                  className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs transition-colors shrink-0"
                >
                  Solucionar
                </button>
              </div>
            ))}
          </div>
        )}

        {alertas.length > 0 && (
          <div className="p-3 bg-slate-50/50 border-t border-slate-100 text-center">
            <button
              onClick={() => nav("alertas")}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Ver los {alertas.length} pendientes →
            </button>
          </div>
        )}
      </div>

      {/* 4. Sección Central (2 Columnas Grid) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Cumplimiento por Contrato (Ocupa 7 columnas de 12) */}
        <div className="xl:col-span-7 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
          <div>
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-800">Cumplimiento por contrato</h3>
              <button
                onClick={() => nav("contratos")}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ver todos los contratos →
              </button>
            </div>

            {loading ? (
              <div className="p-8 text-center text-slate-400 text-xs">Cargando datos de contratos...</div>
            ) : contratos.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs space-y-2">
                <div>No se encontraron contratos registrados.</div>
                <button
                  onClick={() => nav("contratos")}
                  className="px-3 py-1.5 bg-blue-600 text-white font-semibold rounded text-xs"
                >
                  + Crear Contrato
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left divide-y divide-slate-100">
                  <thead className="bg-slate-50 text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                    <tr>
                      <th className="py-2.5 px-4">Contrato / Faena</th>
                      <th className="py-2.5 px-3">Estado</th>
                      <th className="py-2.5 px-3">Cumplimiento</th>
                      <th className="py-2.5 px-3 text-center">Personal</th>
                      <th className="py-2.5 px-3 text-center">Equipos</th>
                      <th className="py-2.5 px-3 text-center">Alertas</th>
                      <th className="py-2.5 px-3 text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {contratos.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-4">
                          <div className="font-bold text-slate-800">{c.nombre}</div>
                          <div className="text-[11px] text-slate-400">{c.faena || "Sin Faena"}</div>
                        </td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">
                            {c.estado || "Activo"}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                              <div
                                className="bg-emerald-500 h-full rounded-full"
                                style={{ width: `${c.cumplimiento_pct}%` }}
                              />
                            </div>
                            <span className="font-bold text-slate-700">{c.cumplimiento_pct}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <div className="font-semibold text-slate-700">
                            {c.personal?.acreditados || 0}/{c.personal?.total || 0}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {c.personal?.total ? Math.round(((c.personal?.acreditados || 0) / c.personal.total) * 100) : 0}%
                          </div>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <div className="font-semibold text-slate-700">
                            {c.equipos?.acreditados || 0}/{c.equipos?.total || 0}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {c.equipos?.total ? Math.round(((c.equipos?.acreditados || 0) / c.equipos.total) * 100) : 0}%
                          </div>
                        </td>
                        <td className="py-3 px-3 text-center">
                          {(c.alertas_activas || 0) > 0 ? (
                            <span className="inline-flex items-center justify-center w-5 h-5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-full">
                              ⚠️ {c.alertas_activas}
                            </span>
                          ) : (
                            <span className="text-slate-300">--</span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => nav("contratos")}
                            className="p-1 text-slate-400 hover:text-blue-600 transition-colors font-bold text-sm"
                          >
                            →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Alertas Importantes (Ocupa 5 columnas de 12) */}
        <div className="xl:col-span-5 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
          <div>
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-800">Alertas importantes</h3>
              <button
                onClick={() => nav("alertas")}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ver todas ({alertas.length})
              </button>
            </div>

            {loading ? (
              <div className="p-8 text-center text-slate-400 text-xs">Cargando alertas...</div>
            ) : alertas.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                Sin alertas importantes reportadas.
              </div>
            ) : (
              <div className="divide-y divide-slate-100 text-xs">
                {alertas.slice(0, 5).map((a) => (
                  <div key={a.id} className="p-3.5 flex items-start gap-3 hover:bg-slate-50/60 transition-colors">
                    <span className="text-base text-amber-500 mt-0.5">⚠️</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-slate-800 line-clamp-1">{a.titulo}</div>
                      <div className="text-slate-500 text-[11px] line-clamp-2 mt-0.5">
                        {a.descripcion || "Documento por vencer o requiere revisión de vigencia."}
                      </div>
                    </div>
                    <button
                      onClick={() => nav("alertas")}
                      className="px-2 py-1 text-[10px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded shrink-0"
                    >
                      Ver doc
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5. Sección Inferior (3 Columnas Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columna 1: Acreditaciones por Estado (Donut Visual) */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-sm text-slate-800 mb-4">
              Acreditaciones por estado
            </h3>

            <div className="flex items-center justify-center my-4">
              {/* SVG Donut Chart */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-100"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Segmento Vencidos (Rojo) */}
                  <path
                    className="text-red-500"
                    strokeDasharray={`${pctVenc}, 100`}
                    strokeDashoffset="0"
                    strokeWidth="4.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Segmento Pendientes (Amarillo) */}
                  <path
                    className="text-amber-400"
                    strokeDasharray={`${pctPend}, 100`}
                    strokeDashoffset={`-${pctVenc}`}
                    strokeWidth="4.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Segmento Acreditados (Verde) */}
                  <path
                    className="text-emerald-500"
                    strokeDasharray={`${pctAcred}, 100`}
                    strokeDashoffset={`-${pctVenc + pctPend}`}
                    strokeWidth="4.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-xl font-bold text-slate-900 leading-none">
                    {loading ? "..." : totalAcred}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                    Total
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 mt-4 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-slate-700">Acreditados</span>
                </div>
                <div className="font-bold text-slate-800">
                  {acredCount} <span className="text-slate-400 text-[11px] font-normal">({pctAcred}%)</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="font-semibold text-slate-700">Pendiente</span>
                </div>
                <div className="font-bold text-slate-800">
                  {pendCount} <span className="text-slate-400 text-[11px] font-normal">({pctPend}%)</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="font-semibold text-slate-700">Vencido</span>
                </div>
                <div className="font-bold text-slate-800">
                  {vencCount} <span className="text-slate-400 text-[11px] font-normal">({pctVenc}%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 2: Actividad Reciente */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm text-slate-800">Actividad reciente</h3>
              <button
                onClick={() => nav("actividad")}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ver todas →
              </button>
            </div>

            {loading ? (
              <div className="p-8 text-center text-slate-400 text-xs">Cargando actividad...</div>
            ) : actividades.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                No hay actividad reciente registrada.
              </div>
            ) : (
              <div className="divide-y divide-slate-100 text-xs">
                {actividades.map((act) => (
                  <div key={act.id} className="py-3 flex items-start gap-2.5">
                    <span className="text-xs text-blue-500 mt-0.5">🔹</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-800 leading-snug">
                        {act.descripcion}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {formatearTiempoRelativo(act.created_at)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Columna 3: Próximos Vencimientos */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm text-slate-800">Próximos vencimientos</h3>
              <button
                onClick={() => nav("calendario")}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ver calendario →
              </button>
            </div>

            {loading ? (
              <div className="p-8 text-center text-slate-400 text-xs">Cargando vencimientos...</div>
            ) : vencimientos.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                No hay documentos próximos a vencer.
              </div>
            ) : (
              <div className="space-y-2.5 text-xs">
                {vencimientos.map((v) => {
                  const { dia, mes } = formatearFechaBadge(v.vence);
                  const estaVencido = v.dias < 0;
                  return (
                    <div
                      key={v.documento_id}
                      className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-slate-200/70 text-slate-800 flex flex-col items-center justify-center shrink-0">
                          <span className="text-xs font-black leading-none">{dia}</span>
                          <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">
                            {mes}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-slate-800 truncate">{v.titulo}</div>
                          {v.sujeto && (
                            <div className="text-[11px] text-slate-500 truncate">{v.sujeto}</div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                            estaVencido
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {estaVencido ? "Vencido" : "Por vencer"}
                        </span>
                        <button
                          onClick={() => nav("requisitos")}
                          className="px-2 py-1 text-[10px] font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 rounded"
                        >
                          Ver doc
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

