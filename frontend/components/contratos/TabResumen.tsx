"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Contrato, Alerta, PlataformaContrato, RequisitoTerreno } from "@/lib/tipos";
import * as Api from "@/lib/cliente";
import { currentUser } from "@/lib/api";
import { numeroContrato } from "./ContratoLayout";
import { estadoVigencia } from "./ContratosTable";

interface TabResumenProps {
  contrato: Contrato;
  cambiarTab: (t: any) => void;
  plataformas?: PlataformaContrato[];
}

function TerrenoLista({ items }: { items: RequisitoTerreno[] }) {
  if (!items.length) return <div className="px-5 py-4 text-[0.78rem] text-slate-500">Sin requisitos de terreno para este ámbito.</div>;
  return (
    <div className="flex flex-col">
      {items.map((r) => {
        const critico = (r.nivel || "").toLowerCase().includes("crit");
        return (
          <div key={r.id} className="px-5 py-3.5 border-b border-slate-100 flex gap-3 last:border-0 hover:bg-slate-50 transition-colors">
            <div className="w-5 h-5 rounded flex-shrink-0 bg-slate-100 flex items-center justify-center text-[0.65rem] mt-0.5" aria-hidden="true">
              {r.icono || "📋"}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <span className="text-[0.75rem] font-bold text-slate-800">{r.titulo}</span>
                {r.nivel && (
                  <span className={`text-[0.55rem] font-bold px-1.5 py-0.5 rounded ${critico ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>
                    {r.nivel}
                  </span>
                )}
              </div>
              {r.descripcion && <div className="text-[0.65rem] text-slate-500 leading-relaxed">{r.descripcion}</div>}
              {r.referencia && <div className="text-[0.65rem] text-slate-400 mt-0.5">{r.referencia}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function fmtCorta(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso + "T00:00:00").toLocaleDateString("es-CL").replace(/\//g, "-");
}

function mesesEntre(ini: string | null, fin: string | null): string {
  if (!ini || !fin) return "Indefinida";
  const a = new Date(ini + "T00:00:00");
  const b = new Date(fin + "T00:00:00");
  const m = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
  return m <= 0 ? "Menos de 1 mes" : `${m} meses`;
}

const CHIP_VIG: Record<string, string> = {
  Vigente: "bg-emerald-100 text-emerald-700",
  "Por iniciar": "bg-blue-100 text-blue-700",
  "Por vencer": "bg-amber-100 text-amber-700",
  Vencido: "bg-red-100 text-red-700",
};

export function TabResumen({ contrato: c, cambiarTab, plataformas = [] }: TabResumenProps) {
  const vig = estadoVigencia(c);
  const empresa = currentUser()?.company?.nombre || "Mi empresa";
  const [alertas, setAlertas] = useState<Alerta[]>([]);
  const [nRequisitos, setNRequisitos] = useState<number | null>(null);
  const [terreno, setTerreno] = useState<RequisitoTerreno[]>([]);

  useEffect(() => {
    Api.contratos.alertas(c.id, { page_size: 50, solo_activas: true }).then((res) => setAlertas(res.items || [])).catch(() => setAlertas([]));
    Api.contratos.requisitos(c.id, { page_size: 1 }).then((res) => setNRequisitos(res.total ?? 0)).catch(() => setNRequisitos(null));
    Api.catalogo.requisitosTerreno().then((res) => setTerreno(res.items || [])).catch(() => setTerreno([]));
  }, [c.id]);

  const terrenoConductor = terreno.filter((r) => r.ambito === "conductor");
  const terrenoEquipo = terreno.filter((r) => r.ambito === "equipo");
  const totalCredenciales = plataformas.reduce((a, p) => a + (p.credenciales || 0), 0);

  const DIA = 86_400_000;
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const ini = c.fecha_inicio ? new Date(c.fecha_inicio + "T00:00:00") : null;
  const fin = c.fecha_termino ? new Date(c.fecha_termino + "T00:00:00") : null;
  const trans = ini ? Math.max(0, Math.round((hoy.getTime() - ini.getTime()) / DIA)) : 0;
  const rest = fin ? Math.ceil((fin.getTime() - hoy.getTime()) / DIA) : null;
  const total = ini && fin ? Math.max(1, Math.round((fin.getTime() - ini.getTime()) / DIA)) : 0;
  const pctVig = total ? Math.max(0, Math.min(100, Math.round((trans / total) * 100))) : 0;
  const proxima = alertas[0] || null;
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Card Información del contrato */}
        <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-[0.85rem] font-bold text-slate-800 mb-4">Información del contrato</h3>
          <div className="mb-4">
            <div className="text-[0.75rem] text-slate-500 mb-1">N° de contrato</div>
            <div className="text-[0.95rem] font-medium text-slate-800 mb-2">{numeroContrato(c)}</div>
            <span className={`inline-block px-2 py-0.5 text-[0.75rem] font-bold rounded ${CHIP_VIG[vig]}`}>{vig}</span>
          </div>
          <div className="mb-4">
            <div className="text-[0.75rem] text-slate-500 mb-1">Empresa</div>
            <div className="text-[0.95rem] font-medium text-slate-800">{empresa}</div>
          </div>
          <div className="mb-5">
            <div className="text-[0.75rem] text-slate-500 mb-1">Faena principal</div>
            <div className="text-[0.95rem] font-medium text-slate-800">{c.faena?.nombre || "—"}</div>
          </div>
          <div className="flex w-full gap-3 pt-2">
            <div className="flex-1">
              <div className="text-[0.75rem] text-slate-500 mb-1">Fecha de inicio</div>
              <div className="text-[0.9rem] font-medium text-slate-800 mb-4">{fmtCorta(c.fecha_inicio)}</div>
              <div className="text-[0.75rem] text-slate-500 mb-1">Duración total</div>
              <div className="text-[0.9rem] font-medium text-slate-800">{mesesEntre(c.fecha_inicio, c.fecha_termino)}</div>
            </div>
            <div className="flex-1">
              <div className="text-[0.75rem] text-slate-500 mb-1">Fecha de término</div>
              <div className="text-[0.9rem] font-medium text-slate-800 mb-4">{c.fecha_termino ? fmtCorta(c.fecha_termino) : "Sin fecha de término"}</div>
              <div className="text-[0.75rem] text-slate-500 mb-1">Renovación automática</div>
              <div className="text-[0.9rem] font-medium text-slate-800">{c.renovacion_automatica ? "Sí" : "No"}</div>
            </div>
          </div>
        </div>

        {/* Card Vigencia del contrato */}
        <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-[0.85rem] font-bold text-slate-800 mb-4">Vigencia del contrato</h3>
          <div className={`text-[0.75rem] text-right mb-2 ${rest !== null && rest <= 60 ? "font-bold text-amber-600" : "text-slate-500"}`}>
            {rest === null ? "Sin fecha de término" : rest < 0 ? `Vencido hace ${-rest} días` : `${rest} días restantes`}
          </div>
          <div className="w-full h-2.5 bg-slate-200 rounded-full mb-3 overflow-hidden">
            <div className={`h-full rounded-full ${rest !== null && rest < 0 ? "bg-red-500" : "bg-blue-600"}`} style={{ width: `${fin ? pctVig : 100}%` }}></div>
          </div>
          <div className="flex justify-between text-[0.75rem] text-slate-500 mb-6">
            <span>{fmtCorta(c.fecha_inicio)}</span>
            <span>{fin ? fmtCorta(c.fecha_termino) : "∞"}</span>
          </div>
          <div className="flex w-full gap-3">
            <div className="bg-slate-50 rounded-xl p-4 flex-1">
              <div className="text-[0.75rem] text-slate-500 mb-1">Días transcurridos</div>
              <div className="text-[1.15rem] font-bold text-slate-800 mt-1">{trans} días {fin ? <span className="text-[0.85rem] font-bold text-slate-500 ml-1">({pctVig}%)</span> : null}</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 flex-1">
              <div className="text-[0.75rem] text-slate-500 mb-2">Próximo vencimiento relevante</div>
              {proxima ? (
                <>
                  <div className="text-[0.8rem] font-bold text-amber-500 line-clamp-2">{proxima.titulo}</div>
                  <div className="text-[0.75rem] text-slate-500 mt-1 mb-2 line-clamp-3 break-words">{proxima.descripcion || ""}</div>
                  <div className="text-[0.75rem] font-bold text-blue-600 cursor-pointer hover:underline mt-2" onClick={() => cambiarTab("Alertas IA")}>Ver todos →</div>
                </>
              ) : (
                <div className="text-[0.82rem] text-emerald-600 font-semibold">Sin vencimientos próximos</div>
              )}
            </div>
          </div>
        </div>

        {/* Card Usuarios totales en plataformas */}
        <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-[0.85rem] font-bold text-slate-800 mb-4">Usuarios totales en plataformas</h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-[2rem] font-bold text-slate-800">{totalCredenciales}</div>
            <div className="text-[0.75rem] text-slate-500">usuarios en {plataformas.length} plataforma{plataformas.length === 1 ? "" : "s"}</div>
          </div>
          {plataformas.length > 0 ? (
            <div className="flex flex-col gap-1 mb-3">
              {plataformas.slice(0, 4).map((p) => (
                <div key={p.id} className="flex justify-between text-[0.75rem]">
                  <span className="text-slate-600 truncate">{p.nombre}</span>
                  <span className="font-bold text-slate-800 ml-2">{p.credenciales || 0}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-[0.75rem] text-slate-500 mb-3">Sin plataformas configuradas.</div>
          )}
          <Link href="/integraciones" className="text-[0.75rem] text-blue-600 hover:underline">Ver detalle por plataforma →</Link>
        </div>
      </div>
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Card Documentos */}
        <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[0.85rem] font-bold text-slate-800">Documentos</h3>
            <span className="text-[0.75rem] text-blue-600 cursor-pointer hover:underline" onClick={() => cambiarTab("Documentos")}>Ver todos →</span>
          </div>
          
          <div className="flex flex-col gap-2 flex-1">
            {/* Empresa */}
            <div className="border border-slate-200 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-lg">🏢</div>
                <div>
                  <div className="text-[0.8rem] font-bold text-slate-800">Empresa</div>
                  <div className="text-[0.65rem] text-slate-500">{c.stats?.docs_empresa?.total || 0} documentos <span className="text-amber-500 font-bold ml-1">{(c.stats?.docs_empresa?.total || 0) - (c.stats?.docs_empresa?.ok || 0)} pendientes</span></div>
                </div>
              </div>
              <button className="px-3 py-1 border border-slate-300 rounded text-[0.7rem] font-semibold text-slate-600 hover:bg-slate-50 transition-colors" onClick={() => cambiarTab("Empresa")}>Ver</button>
            </div>
            
            {/* Personal */}
            <div className="border border-slate-200 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-lg">👤</div>
                <div>
                  <div className="text-[0.8rem] font-bold text-slate-800">Personal</div>
                  <div className="text-[0.65rem] text-slate-500">{c.stats?.personal?.total || 0} personas <span className="text-emerald-500 font-bold ml-1">{c.stats?.personal?.acreditados || 0} acreditados</span></div>
                </div>
              </div>
              <button className="px-3 py-1 border border-slate-300 rounded text-[0.7rem] font-semibold text-slate-600 hover:bg-slate-50 transition-colors" onClick={() => cambiarTab("Personal")}>Ver</button>
            </div>
            
            {/* Equipos */}
            <div className="border border-slate-200 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-lg">🚜</div>
                <div>
                  <div className="text-[0.8rem] font-bold text-slate-800">Equipos / Vehículos</div>
                  <div className="text-[0.65rem] text-slate-500">{c.stats?.equipos?.total || 0} equipos <span className="text-emerald-500 font-bold ml-1">{c.stats?.equipos?.acreditados || 0} acreditados</span></div>
                </div>
              </div>
              <button className="px-3 py-1 border border-slate-300 rounded text-[0.7rem] font-semibold text-slate-600 hover:bg-slate-50 transition-colors" onClick={() => cambiarTab("Vehículos / Equipos")}>Ver</button>
            </div>
          </div>
        </div>

        {/* Card Alertas IA */}
        <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[0.85rem] font-bold text-slate-800">Alertas IA</h3>
            <span className="text-[0.65rem] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
              {c.stats?.alertas_activas ?? alertas.length} alertas activas
            </span>
          </div>

          <div className="flex flex-col gap-0 flex-1">
            {alertas.length === 0 && (
              <div className="text-[0.82rem] font-semibold text-emerald-600">Sin alertas activas ✓</div>
            )}
            {alertas.slice(0, 5).map((a) => {
              const grave = a.severidad === "critica";
              return (
                <div key={a.id} className="py-2.5 border-b border-slate-100 flex items-start gap-2 last:border-0">
                  <span aria-hidden="true" className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${grave ? "bg-red-500" : "bg-amber-500"}`}></span>
                  <div className="flex-1 min-w-0">
                    <div className={`text-[0.75rem] font-semibold ${grave ? "text-red-600" : "text-amber-600"} line-clamp-2`}>{a.titulo}</div>
                    <div className="text-[0.65rem] text-slate-500 line-clamp-1">{a.descripcion}</div>
                  </div>
                  <span className="text-[0.65rem] text-blue-600 cursor-pointer font-bold hover:underline whitespace-nowrap" onClick={() => cambiarTab("Alertas IA")}>Ver detalle</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card Resumen General */}
        <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[0.85rem] font-bold text-slate-800">Resumen general</h3>
            <span className="text-[0.65rem] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{c.stats?.cumplimiento_pct || 0}%</span>
          </div>

          <div className="flex flex-col gap-2.5 flex-1 text-[0.75rem]">
            {[
              { k: "Cumplimiento Global", v: `${c.stats?.cumplimiento_pct || 0}%`, c: "text-emerald-600" },
              { k: "Requisitos asociados", v: nRequisitos === null ? "…" : String(nRequisitos), c: "text-slate-800" },
              { k: "Documentos empresa", v: `${c.stats?.docs_empresa?.ok || 0} / ${c.stats?.docs_empresa?.total || 0}`, c: "text-slate-800" },
              { k: "Alertas activas", v: String(c.stats?.alertas_activas ?? alertas.length), c: "text-red-600" },
              { k: "Personal acreditado", v: `${c.stats?.personal?.acreditados || 0} / ${c.stats?.personal?.total || 0}`, c: "text-slate-800" },
              { k: "Equipos acreditados", v: `${c.stats?.equipos?.acreditados || 0} / ${c.stats?.equipos?.total || 0}`, c: "text-slate-800" },
            ].map((f) => (
              <div key={f.k} className="flex justify-between border-b border-slate-100 pb-1.5 last:border-0 last:pb-0">
                <span className="text-slate-600">{f.k}</span>
                <span className={`font-bold ${f.c}`}>{f.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Requisitos en Terreno */}
      <div className="mt-2">
        <div className="flex items-center justify-between mb-4 bg-slate-50 border border-slate-200 rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-lg shadow-inner">🚧</div>
            <div>
              <h3 className="text-[0.85rem] font-bold text-slate-800">Requisitos en Terreno</h3>
              <div className="text-[0.7rem] text-slate-500">Condiciones operativas exigidas por el Reglamento — aplicables dentro de la faena.</div>
            </div>
          </div>
          <span className="text-[0.65rem] font-bold text-slate-500">Solo lectura — no documentales</span>
        </div>
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Conductores */}
          <div className="border border-slate-200 rounded-[16px] bg-white overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">👤</span>
                <span className="text-[0.8rem] font-bold text-slate-800">Conductores</span>
              </div>
              <span className="text-[0.65rem] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{terrenoConductor.length} requisitos</span>
            </div>
            <TerrenoLista items={terrenoConductor} />
          </div>

          {/* Vehículos / Equipos */}
          <div className="border border-slate-200 rounded-[16px] bg-white overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">🚜</span>
                <span className="text-[0.8rem] font-bold text-slate-800">Vehículos / Equipos</span>
              </div>
              <span className="text-[0.65rem] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{terrenoEquipo.length} requisitos</span>
            </div>
            <TerrenoLista items={terrenoEquipo} />
          </div>
        </div>
      </div>
    </div>
  );
}
