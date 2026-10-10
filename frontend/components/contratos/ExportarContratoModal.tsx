"use client";
import React, { useEffect, useState } from "react";
import { Modal, Spinner } from "@/components/ui";
import * as Api from "@/lib/cliente";
import type { Contrato, PlataformaContrato, RecursoExport } from "@/lib/tipos";
import { numeroContrato } from "./ContratoLayout";

interface ExportarContratoModalProps {
  abierto: boolean;
  onCerrar: () => void;
  contrato: Contrato | null;
  plataformas: PlataformaContrato[];
}

type Sec = "documentos" | "personal" | "equipos" | "alertas" | "matriz";
type Paso = "cfg" | "run" | "done";

const SECCIONES: { k: Sec; icono: string; t: string; d: string; recurso: RecursoExport }[] = [
  { k: "documentos", icono: "📄", t: "Documentos", d: "Listado documental del contrato con estados y vencimientos", recurso: "documentos" },
  { k: "personal", icono: "👤", t: "Personal", d: "Nómina y estado de acreditación por trabajador", recurso: "personal" },
  { k: "equipos", icono: "🚛", t: "Equipos", d: "Flota y estado de acreditación por equipo", recurso: "equipos" },
  { k: "alertas", icono: "⚠️", t: "Alertas", d: "Alertas activas del contrato", recurso: "alertas" },
  { k: "matriz", icono: "📊", t: "Matriz", d: "Cuadrícula de cumplimiento por trabajador", recurso: "matriz" },
];

export function ExportarContratoModal({ abierto, onCerrar, contrato, plataformas }: ExportarContratoModalProps) {
  const [plat, setPlat] = useState("");
  const [on, setOn] = useState<Record<Sec, boolean>>({ documentos: true, personal: true, equipos: true, alertas: true, matriz: false });
  const [fmt, setFmt] = useState<Record<Sec, "excel" | "csv">>({ documentos: "excel", personal: "excel", equipos: "excel", alertas: "excel", matriz: "excel" });
  const [paso, setPaso] = useState<Paso>("cfg");
  const [prog, setProg] = useState(0);
  const [msg, setMsg] = useState("");
  const [archivos, setArchivos] = useState<{ sec: Sec; url: string; nombre: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (abierto) {
      setPlat(plataformas[0]?.nombre || "");
      setPaso("cfg");
      setArchivos([]);
      setError(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abierto]);

  if (!contrato) return null;

  const stats = contrato.stats;
  const conteo: Record<Sec, number> = {
    documentos: stats?.docs_empresa?.total ?? 0,
    personal: stats?.personal?.total ?? 0,
    equipos: stats?.equipos?.total ?? 0,
    alertas: stats?.alertas_activas ?? 0,
    matriz: (stats?.personal?.total ?? 0) + (stats?.equipos?.total ?? 0),
  };
  const elegidas = SECCIONES.filter((s) => on[s.k]);
  const raiz = `${numeroContrato(contrato)}_${(plat || "plataforma").replace(/[\\/:*?"<>|]/g, "-").replace(/\s+/g, " ")}`;

  const cerrar = () => {
    setPaso("cfg");
    setArchivos([]);
    setError(null);
    onCerrar();
  };

  const ejecutar = async () => {
    if (!elegidas.length) return;
    setPaso("run");
    setProg(5);
    setError(null);
    const listos: { sec: Sec; url: string; nombre: string }[] = [];
    try {
      for (let i = 0; i < elegidas.length; i++) {
        const s = elegidas[i];
        setMsg(`Generando ${s.t}...`);
        setProg(Math.round(5 + (i / elegidas.length) * 90));
        const res = await Api.exportaciones.crear({
          recurso: s.recurso,
          filtros: { contrato_id: contrato.id },
          formato: fmt[s.k],
        });
        const url = res.download_url ?? (res.id ? await Api.reportes.esperarDescarga(res.id) : null);
        if (!url) throw new Error(`El servidor no devolvió archivo para ${s.t}.`);
        listos.push({ sec: s.k, url, nombre: `${numeroContrato(contrato)}_${s.k}.${fmt[s.k] === "excel" ? "xlsx" : "csv"}` });
      }
      setArchivos(listos);
      setProg(100);
      setPaso("done");
    } catch (e) {
      setError(Api.mensajeError(e));
      setPaso("cfg");
    }
  };

  return (
    <Modal abierto={abierto} onCerrar={cerrar} titulo="" ancho={paso === "cfg" ? "max-w-[920px]" : "max-w-[520px]"}>
      {paso === "cfg" && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span aria-hidden="true" className="w-[42px] h-[42px] rounded-xl bg-indigo-50 grid place-items-center text-[1.3rem] flex-shrink-0">📦</span>
            <div>
              <h3 className="m-0 text-[1.1rem] font-bold text-slate-900">Exportar documentos del contrato</h3>
              <p className="m-0 text-[0.8rem] text-slate-500">{numeroContrato(contrato)} · {contrato.faena?.nombre} — preparados para subirlos a la plataforma del mandante</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 min-w-0">
              <div className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-500 mb-2">1 · Plataforma de destino</div>
              <div className="flex gap-1.5 flex-wrap" role="radiogroup" aria-label="Plataforma de destino">
                {plataformas.length === 0 && <span className="text-[0.8rem] text-slate-400">Sin plataformas en este contrato.</span>}
                {plataformas.map((p) => (
                  <button
                    key={p.id}
                    role="radio"
                    aria-checked={plat === p.nombre}
                    onClick={() => setPlat(p.nombre)}
                    className={`px-3.5 py-1.5 rounded-full border text-[0.8rem] font-semibold transition-colors ${
                      plat === p.nombre ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {p.nombre}
                  </button>
                ))}
              </div>

              <div className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-500 mt-4 mb-2">2 · Qué exportar</div>
              <div className="flex flex-col gap-2">
                {SECCIONES.map((s) => (
                  <div key={s.k} className={on[s.k] ? "" : "opacity-55"}>
                    <div className="flex items-center gap-2">
                      <label className="flex items-center gap-2 m-0 font-bold text-slate-800 text-[0.85rem] min-w-[140px] cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-auto"
                          checked={on[s.k]}
                          onChange={(e) => setOn((p) => ({ ...p, [s.k]: e.target.checked }))}
                        />
                        {s.icono} {s.t}
                      </label>
                      <select
                        aria-label={`Formato de ${s.t}`}
                        value={fmt[s.k]}
                        disabled={!on[s.k]}
                        onChange={(e) => setFmt((p) => ({ ...p, [s.k]: e.target.value as "excel" | "csv" }))}
                        className="flex-1 h-9 px-2 border border-slate-300 rounded-lg text-[0.8rem] bg-white outline-none"
                      >
                        <option value="excel">📊 Excel (.xlsx)</option>
                        <option value="csv">📝 CSV</option>
                      </select>
                    </div>
                    <div className="text-[0.72rem] text-slate-500 mt-0.5 ml-6">{on[s.k] ? `${s.d} · ${conteo[s.k]} registros` : "No se incluye"}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-500 mb-2">Vista previa del archivo</div>
              <div className="rounded-xl bg-slate-900 text-slate-200 font-mono text-[0.72rem] leading-relaxed p-3.5 max-h-[300px] overflow-auto">
                {elegidas.length === 0 && <div className="text-slate-400">Nada seleccionado.</div>}
                {elegidas.length > 0 && <div className="font-bold text-white mb-1">🗜️ {raiz}.zip</div>}
                {elegidas.map((s, i) => (
                  <div key={s.k} className="pl-4 truncate">
                    📄 {String(i + 1).padStart(2, "0")}_{s.t}/{numeroContrato(contrato)}_{s.k}.{fmt[s.k] === "excel" ? "xlsx" : "csv"}
                  </div>
                ))}
              </div>
              <div className="flex gap-2.5 mt-2.5 flex-wrap">
                <div className="flex-1 min-w-[90px] bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-center">
                  <b className="block text-[1.15rem] text-slate-800 leading-tight">{conteo.documentos + conteo.personal + conteo.equipos}</b>
                  <span className="text-[0.68rem] text-slate-500">registros</span>
                </div>
                <div className="flex-1 min-w-[90px] bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-center">
                  <b className="block text-[1.15rem] text-slate-800 leading-tight">{elegidas.length}</b>
                  <span className="text-[0.68rem] text-slate-500">archivos</span>
                </div>
                <div className="flex-1 min-w-[90px] bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-center">
                  <b className="block text-[1.15rem] text-slate-800 leading-tight">{SECCIONES.length - elegidas.length}</b>
                  <span className="text-[0.68rem] text-slate-500">excluidos</span>
                </div>
              </div>
              {error && (
                <div role="alert" className="mt-2.5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-[0.82rem] text-red-700">
                  {error}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4 pt-3.5 border-t border-slate-200">
            <button
              className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              onClick={cerrar}
            >
              Cancelar
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
              onClick={ejecutar}
              disabled={!elegidas.length}
            >
              ↓ Exportar {elegidas.length} archivo{elegidas.length === 1 ? "" : "s"}
            </button>
          </div>
        </div>
      )}

      {paso === "run" && (
        <div className="text-center px-2.5 py-6">
          <div className="text-[2rem]" aria-hidden="true">📦</div>
          <h3 className="my-2 text-[1.05rem] font-bold text-slate-900">Preparando la exportación…</h3>
          <div className="text-[0.85rem] text-slate-500">{msg || `Ordenando documentos para ${plat || "la plataforma"}`}</div>
          <div className="h-2 bg-slate-200 rounded-full my-4 mx-auto max-w-[380px] overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full transition-all" style={{ width: `${prog}%` }} />
          </div>
        </div>
      )}

      {paso === "done" && (
        <div className="text-center px-2.5 py-5">
          <div aria-hidden="true" className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center text-[1.6rem] mx-auto">✓</div>
          <h3 className="my-2.5 text-[1.05rem] font-bold text-slate-900">Exportación lista</h3>
          <p className="m-0 text-[0.85rem] text-slate-500">
            Se generaron <b>{archivos.length} archivos</b>. Súbelos a <b>{plat || "la plataforma del mandante"}</b> en orden.
          </p>
          <div className="flex flex-col gap-1.5 mt-4 text-left">
            {archivos.map((a) => (
              <a
                key={a.sec}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-[0.82rem] font-semibold text-blue-700 hover:bg-blue-50"
              >
                <span aria-hidden="true">📄</span> {a.nombre}
                <span className="ml-auto text-[0.75rem]">↓ Descargar</span>
              </a>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <button
              className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              onClick={() => setPaso("cfg")}
            >
              ← Volver
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors"
              onClick={cerrar}
            >
              Listo
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
