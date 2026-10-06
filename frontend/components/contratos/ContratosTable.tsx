"use client";

import React from "react";
import Link from "next/link";
import type { Contrato } from "@/lib/tipos";

interface ContratosTableProps {
  contratos: Contrato[];
  loading: boolean;
  total: number;
  onDelete: (id: string, nombre: string) => void;
}

export function ContratosTable({ contratos, loading, total, onDelete }: ContratosTableProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200 text-left text-[0.78rem] text-slate-500 font-bold uppercase">
            <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Contrato</th>
            <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Faena</th>
            <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Inicio</th>
            <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Término</th>
            <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Estado</th>
            <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Cumplimiento</th>
            <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Personal acreditado</th>
            <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Equipos acreditados</th>
            <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Alertas</th>
            <th className="py-3 px-4 font-bold text-slate-600 tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={10} className="p-8 text-center text-slate-400 text-[0.85rem]">
                Cargando contratos...
              </td>
            </tr>
          ) : contratos.length === 0 ? (
            <tr>
              <td colSpan={10} className="p-8 text-center text-slate-400 text-[0.85rem]">
                No se encontraron contratos.
              </td>
            </tr>
          ) : (
            contratos.map((c) => {
              const pct = c.stats?.cumplimiento_pct || 0;
              const bar = pct >= 70 ? "#10B981" : pct >= 40 ? "#F59E0B" : "#EF4444";
              const chipC = pct >= 70 ? "bg-emerald-100 text-emerald-700" : pct >= 40 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700";
              const chipT = pct >= 70 ? "Activo" : pct >= 40 ? "Por vencer" : "Vencido";
              const perOk = c.stats?.personal?.acreditados || 0;
              const perTot = c.stats?.personal?.total || 0;
              const eqOk = c.stats?.equipos?.acreditados || 0;
              const eqTot = c.stats?.equipos?.total || 0;
              const alCt = c.stats?.alertas_activas || 0;

              return (
                <tr key={c.id} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 align-middle">
                    <Link href={`/contratos/${c.id}`} className="block font-bold text-[#1e293b] hover:text-blue-600 hover:underline text-[0.88rem] mb-0.5 truncate max-w-[200px]">
                      • {c.nombre}
                    </Link>
                    <div className="text-[0.72rem] text-slate-400">{c.faena?.nombre}</div>
                  </td>
                  <td className="py-3 px-4 align-middle text-[0.8rem] text-slate-500">{c.faena?.nombre}</td>
                  <td className="py-3 px-4 align-middle text-[0.8rem] text-slate-500">
                    {c.fecha_inicio ? new Date(c.fecha_inicio + 'T00:00:00').toLocaleDateString('es-CL') : '01-01-2024'}
                  </td>
                  <td className="py-3 px-4 align-middle text-[0.8rem] text-slate-500">
                    {c.fecha_termino ? new Date(c.fecha_termino + 'T00:00:00').toLocaleDateString('es-CL') : '31-12-2025'}
                  </td>
                  <td className="py-3 px-4 align-middle">
                    <span className={`inline-flex items-center h-5 px-2 rounded-full text-[0.62rem] font-bold uppercase tracking-wider ${chipC}`}>
                      {chipT}
                    </span>
                  </td>
                  <td className="py-3 px-4 align-middle">
                    <div className="flex items-center gap-1.5">
                      <div className="h-[6px] w-[60px] bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: bar }} />
                      </div>
                      <span className="text-[0.78rem] font-semibold" style={{ color: bar }}>{pct}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 align-middle text-[0.8rem]">
                    {perOk} / {perTot}
                    <div className="text-[0.68rem] text-slate-400 font-semibold">{perTot ? Math.round(perOk/perTot*100) : 0}%</div>
                  </td>
                  <td className="py-3 px-4 align-middle text-[0.8rem]">
                    {eqOk} / {eqTot}
                    <div className="text-[0.68rem] text-slate-400 font-semibold">{eqTot ? Math.round(eqOk/eqTot*100) : 0}%</div>
                  </td>
                  <td className="py-3 px-4 align-middle">
                    {alCt > 0 ? (
                      <span className="inline-flex items-center h-5 px-2 rounded-full text-[0.68rem] font-bold bg-amber-100 text-amber-700">
                        {alCt}
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[0.8rem]">0</span>
                    )}
                  </td>
                  <td className="py-3 px-4 align-middle">
                    <Link href={`/contratos/${c.id}`} className="text-slate-400 hover:text-slate-600 text-lg cursor-pointer inline-block mr-2" title="Ver">👁</Link>
                    <span className="text-red-400 hover:text-red-600 text-lg cursor-pointer" title="Eliminar contrato" onClick={() => onDelete(c.id, c.nombre)}>🗑</span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <div className="px-4 py-3 border-t border-slate-200 text-[0.75rem] font-medium text-slate-500 flex justify-between items-center bg-slate-50">
        <span>Mostrando 1 a {contratos.length} de {total} contratos</span>
        <span className="text-blue-600 font-bold">10 por página</span>
      </div>
    </div>
  );
}
