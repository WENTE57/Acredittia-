"use client";
import React from "react";
import Link from "next/link";
import { Contrato, PlataformaContrato } from "@/lib/tipos";
import { ContratoTabs, Tab } from "./ContratoTabs";

interface ContratoLayoutProps {
  contrato: Contrato;
  plataformas: PlataformaContrato[];
  vigente: boolean;
  onDeletePlataforma: (id: string) => void;
  onAddPlataforma: () => void;
  onManagePlataforma: (plataforma: PlataformaContrato) => void;
  tabActual: Tab;
  onTabChange: (tab: Tab) => void;
  children: React.ReactNode;
}

const PLATFORM_LOGOS = [
  { m: 'SIGA',           f: '/plat_siga.png' },
  { m: 'DIRECTIC',       f: '/plat_directic.png' },
  { m: 'SGES',           f: '/plat_sges.png' },
  { m: 'ACADEMIA',       f: '/plat_academia.png' },
  { m: 'EMSIPOR',        f: '/plat_emsipor.png' },
  { m: 'WEBCONTROL',     f: '/plat_webcontrol.png' },
  { m: 'METACONTRATAS',  f: '/plat_metacontratas.png' },
  { m: 'META CONTRATAS', f: '/plat_metacontratas.png' },
  { m: 'SUCAL',          f: '/plat_sucal.png' },
];

function logoForPlatform(nom: string) {
  const up = (nom || '').toUpperCase();
  const hit = PLATFORM_LOGOS.find(x => up.includes(x.m));
  return hit ? hit.f : null;
}

export function ContratoLayout({
  contrato: c,
  plataformas,
  vigente,
  onDeletePlataforma,
  onAddPlataforma,
  onManagePlataforma,
  tabActual,
  onTabChange,
  children
}: ContratoLayoutProps) {
  
  // Dynamic colors based on Mandante
  let colorTheme = "blue";
  const mandante = (c.faena?.mandante || "").toLowerCase();
  if (mandante.includes("codelco")) colorTheme = "orange";
  else if (mandante.includes("bhp")) colorTheme = "orange";
  else if (mandante.includes("anglo")) colorTheme = "red";
  else if (mandante.includes("pelambres")) colorTheme = "teal";
  
  const themeStyles = {
    blue: "from-blue-50/80 border-t-blue-600 bg-blue-600",
    orange: "from-orange-50/80 border-t-orange-500 bg-orange-500",
    red: "from-red-50/80 border-t-red-600 bg-red-600",
    teal: "from-teal-50/80 border-t-teal-600 bg-teal-600",
  }[colorTheme] || "from-blue-50/80 border-t-blue-600 bg-blue-600";
  
  const headerBgGradient = `bg-gradient-to-br border-t-4 ${themeStyles.split(" bg-")[0]}`;
  const circleColor = themeStyles.split(" bg-")[1];
  const borderTop = `border-t-[3px] ${themeStyles.split(" ")[1]}`;
  const btnClass = `bg-${circleColor.replace("bg-", "")} hover:bg-${circleColor.replace("bg-", "")}/90`;

  return (
    <div className="w-4/5 mx-auto pb-20 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-[0.8rem] text-slate-500 mb-4">
        <Link href="/contratos" className="hover:underline hover:text-slate-700 cursor-pointer text-[0.8rem]">Contratos</Link>
        <span>›</span>
        <span className="cursor-pointer text-[0.8rem] hover:underline hover:text-slate-700">Detalle del contrato</span>
      </div>

      {/* AMBIENTE DEL MANDANTE */}
      <div className={`relative overflow-hidden ${headerBgGradient} to-white border border-slate-200 rounded-[18px] px-6 py-5 mb-5 shadow-sm`}>
        <div className={`absolute -top-[70px] -right-[50px] w-[230px] h-[230px] rounded-full ${circleColor} opacity-[0.06] pointer-events-none`} />
        <div className={`absolute -bottom-[90px] right-[110px] w-[170px] h-[170px] rounded-full ${circleColor} opacity-[0.04] pointer-events-none`} />
        
        {/* Header row */}
        <div className="relative flex items-center justify-between flex-wrap gap-3 mb-3.5">
          <div className="flex items-center gap-3.5">
            <h2 className="text-[#0F172A] text-[1.45rem] font-bold m-0">{c.nombre}</h2>
            <span className={`px-2 py-0.5 text-[0.78rem] font-bold rounded ${vigente ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
              {vigente ? 'Vigente' : 'En evaluación'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="h-[34px] px-3.5 border border-slate-300 rounded-[8px] bg-white text-slate-700 font-semibold text-[0.85rem] hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm cursor-pointer" onClick={() => alert('Descargando reporte — demo')}>
              <span className="text-[0.9rem] mr-1">↓</span> Descargar reporte
            </button>
            <button className={`h-[34px] px-3.5 border-none rounded-[8px] ${btnClass} text-white font-semibold text-[0.85rem] transition-colors shadow-sm cursor-pointer`} onClick={() => alert('Editar contrato — demo')}>
              ✎ Editar contrato
            </button>
            <button className="h-[34px] w-[34px] border border-slate-300 rounded-[8px] bg-white text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm flex items-center justify-center cursor-pointer">
              ⋮
            </button>
          </div>
        </div>

        {/* Mandante logo + faena */}
        <div className="relative flex items-center gap-3">
          <div className="bg-white border border-slate-200 rounded-[10px] px-3 py-1.5 flex items-center h-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] font-bold text-slate-700 text-sm">
            {c.faena?.mandante}
          </div>
          <span className="text-slate-800 text-[0.88rem] font-semibold">{c.faena?.nombre} · {c.faena?.mandante}</span>
        </div>
      </div>

      {/* SECCIÓN PLATAFORMAS (SIEMPRE VISIBLE) */}
      <div className={`bg-white border border-slate-200 ${borderTop} rounded-[16px] px-5 py-4 mb-6 shadow-sm`}>
         <div className="flex items-center justify-between mb-3.5">
           <div>
             <span className="text-[0.88rem] font-bold text-slate-800">Plataformas — {c.faena?.mandante}</span>
             <div className="text-[0.75rem] text-slate-500 mt-0.5">Plataformas requeridas para acreditar en <strong>{c.faena?.nombre}</strong>, con sus propios requisitos por plataforma.</div>
           </div>
           <button className={`h-[34px] px-3.5 border-none rounded-[8px] ${btnClass} text-white font-semibold text-[0.75rem] transition-colors shadow-sm cursor-pointer`} onClick={onAddPlataforma}>
             + Agregar plataforma
           </button>
         </div>
         
         <div className="flex gap-0 border border-slate-200 rounded-[12px] overflow-x-auto overflow-y-hidden snap-x">
           {plataformas.length === 0 ? (
             <div className="p-8 text-center w-full text-slate-500 text-sm">No hay plataformas configuradas</div>
           ) : (
             plataformas.map((pl, i) => {
                const logo = logoForPlatform(pl.nombre);
                return (
                  <div key={pl.id} className={`flex-1 min-w-[200px] shrink-0 snap-start py-3.5 px-4 bg-white ${i < plataformas.length - 1 ? 'border-r border-slate-200' : ''}`}>
                    <div className="flex items-center justify-between mb-2">
                      {logo ? (
                        <div className="h-[34px] min-w-[64px] px-1 bg-white border border-slate-200 rounded-md flex items-center justify-center overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={logo} alt={pl.nombre} className="max-w-[50px] max-h-[22px] object-contain" onError={(e) => {
                            const target = e.target as HTMLElement;
                            const parent = target.parentElement;
                            if (parent) {
                              parent.outerHTML = `<div class="h-[32px] min-w-[52px] px-2 bg-slate-100 rounded-md flex items-center justify-center text-[0.65rem] font-black text-slate-800 text-center leading-tight">${pl.nombre.split(' ')[0]}</div>`;
                            }
                          }} />
                        </div>
                      ) : (
                        <div className="h-[32px] min-w-[52px] px-2 bg-slate-100 rounded-md flex items-center justify-center text-[0.65rem] font-black text-slate-800 text-center leading-tight" style={{ backgroundColor: pl.color || '#f1f5f9' }}>
                          {pl.nombre.split(' ')[0]}
                        </div>
                      )}
                      
                      <div className="flex items-center gap-1.5">
                        <span className={`flex items-center gap-1 text-[0.65rem] font-bold px-2 py-0.5 rounded-lg ${
                          pl.estado === 'activa' ? 'text-emerald-700 bg-emerald-50' :
                          pl.estado === 'solicitada' ? 'text-amber-700 bg-amber-50' : 'text-red-700 bg-red-50'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full inline-block ${
                            pl.estado === 'activa' ? 'bg-emerald-500' :
                            pl.estado === 'solicitada' ? 'bg-amber-500' : 'bg-red-500'
                          }`}></span>
                          {pl.estado.charAt(0).toUpperCase() + pl.estado.slice(1)}
                        </span>
                        <button 
                          onClick={() => onDeletePlataforma(pl.id)} 
                          className="text-slate-300 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50 flex items-center justify-center"
                          title="Desvincular plataforma"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                      </div>
                    </div>
                  <div className="text-[0.8rem] font-bold text-slate-800">
                    {pl.nombre} {pl.es_custom && <span className="text-purple-700 text-[0.65rem] font-normal">(custom)</span>}
                  </div>
                  <div className="text-[0.65rem] text-slate-500 mt-0.5 min-h-[30px]">{pl.descripcion || 'Sistema de Gestión de Acceso'}</div>
                  {pl.url && pl.url !== '#' && (
                    <a href={pl.url} target="_blank" rel="noopener noreferrer" className="text-[0.65rem] text-blue-600 no-underline mt-0.5 block opacity-80" title={`Abrir ${pl.nombre}`}>
                      {pl.url.replace('https://', '')}
                    </a>
                  )}
                  
                  <div className="text-[0.7rem] text-slate-500 mt-2.5">Usuarios activos</div>
                  <div className="text-[1.15rem] font-bold text-slate-800 leading-tight">{pl.credenciales || 0}</div>
                  {pl.nota && <div className="text-[0.65rem] text-emerald-600 mt-0.5 font-semibold">{pl.nota}</div>}
                  {(!pl.nota || pl.credenciales === 0) && <div className="text-[0.65rem] text-slate-500 mt-0.5">Sin cuentas registradas</div>}
                  <div className="mt-2.5"><span className="text-[0.7rem] text-blue-600 hover:underline cursor-pointer font-medium" onClick={() => onManagePlataforma(pl)}>Gestionar usuarios →</span></div>
                </div>
                );
             })
           )}
         </div>
      </div>

      <ContratoTabs currentTab={tabActual} onTabChange={onTabChange} colorTheme={circleColor} />
      
      {/* Tab Content rendering */}
      <div className="mt-5">
        {children}
      </div>
    </div>
  );
}
