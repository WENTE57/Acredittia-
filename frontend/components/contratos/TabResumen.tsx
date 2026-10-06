"use client";
import React from "react";
import { Contrato } from "@/lib/tipos";

interface TabResumenProps {
  contrato: Contrato;
  cambiarTab: (t: any) => void;
}

export function TabResumen({ contrato: c, cambiarTab }: TabResumenProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full grid !grid-cols-1 lg:!grid-cols-3 gap-5">
        {/* Card Información del contrato */}
        <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-[0.85rem] font-bold text-slate-800 mb-4">Información del contrato</h3>
          <div className="mb-4">
            <div className="text-[0.75rem] text-slate-500 mb-1">N° de contrato</div>
            <div className="text-[0.95rem] font-medium text-slate-800 mb-2">{c.codigo ?? "CTR-2026-105"}</div>
            <span className="inline-block px-2 py-0.5 text-[0.75rem] font-bold rounded bg-emerald-100 text-emerald-700">Vigente</span>
          </div>
          <div className="mb-4">
            <div className="text-[0.75rem] text-slate-500 mb-1">Empresa</div>
            <div className="text-[0.95rem] font-medium text-slate-800">Mi empresa</div>
          </div>
          <div className="mb-5">
            <div className="text-[0.75rem] text-slate-500 mb-1">Faena principal</div>
            <div className="text-[0.95rem] font-medium text-slate-800">{c.faena?.nombre || "Minera Centinela"}</div>
          </div>
          <div className="flex w-full gap-3 pt-2">
            <div className="flex-1">
              <div className="text-[0.75rem] text-slate-500 mb-1">Fecha de inicio</div>
              <div className="text-[0.9rem] font-medium text-slate-800 mb-4">{c.fecha_inicio ?? "2026-07-23"}</div>
              <div className="text-[0.75rem] text-slate-500 mb-1">Duración total</div>
              <div className="text-[0.9rem] font-medium text-slate-800">24 meses</div>
            </div>
            <div className="flex-1">
              <div className="text-[0.75rem] text-slate-500 mb-1">Fecha de término</div>
              <div className="text-[0.9rem] font-medium text-slate-800 mb-4">{c.fecha_termino ?? "2027-07-18"}</div>
              <div className="text-[0.75rem] text-slate-500 mb-1">Renovación automática</div>
              <div className="text-[0.9rem] font-medium text-slate-800">Sí</div>
            </div>
          </div>
        </div>

        {/* Card Vigencia del contrato */}
        <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-[0.85rem] font-bold text-slate-800 mb-4">Vigencia del contrato</h3>
          <div className="text-[0.75rem] text-slate-500 text-right mb-2">818 días restantes</div>
          <div className="w-full h-2.5 bg-slate-200 rounded-full mb-3 overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{ width: '25%' }}></div>
          </div>
          <div className="flex justify-between text-[0.75rem] text-slate-500 mb-6">
            <span>01/01/2026</span>
            <span>31/12/2028</span>
          </div>
          <div className="flex w-full gap-3">
            <div className="bg-slate-50 rounded-xl p-4 flex-1">
              <div className="text-[0.75rem] text-slate-500 mb-1">Días transcurridos</div>
              <div className="text-[1.15rem] font-bold text-slate-800 mt-1">277 días <span className="text-[0.85rem] font-bold text-slate-500 ml-1">(25%)</span></div>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 flex-1">
              <div className="text-[0.75rem] text-slate-500 mb-2">Próximo vencimiento relevante</div>
              <div className="text-[0.8rem] font-bold text-amber-400">Revisión Técnica</div>
              <div className="text-[0.75rem] text-slate-500 mt-1 mb-2">2026-05-18</div>
              <div className="text-[0.75rem] font-bold text-blue-600 cursor-pointer hover:underline mt-2">Ver todos →</div>
            </div>
          </div>
        </div>

        {/* Card Usuarios totales en plataformas */}
        <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-[0.85rem] font-bold text-slate-800 mb-4">Usuarios totales en plataformas</h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-[2rem] font-bold text-slate-800">33</div>
            <div className="text-[0.75rem] text-slate-500">usuarios</div>
          </div>
          <div className="text-[0.7rem] text-slate-500 mb-0.5">Última sincronización 🔄</div>
          <div className="text-[0.8rem] font-medium text-slate-800 mb-3">Hoy 08:15</div>
          <div className="text-[0.75rem] text-blue-600 cursor-pointer hover:underline" onClick={() => cambiarTab("Plataformas")}>Ver detalle por plataforma →</div>
        </div>
      </div>
      
      <div className="w-full grid !grid-cols-1 lg:!grid-cols-3 gap-5">
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
                  <div className="text-[0.65rem] text-slate-500">89 documentos <span className="text-red-500 font-bold ml-1">2 vencidos</span></div>
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
                  <div className="text-[0.65rem] text-slate-500">305 documentos <span className="text-red-500 font-bold ml-1">7 vencidos</span></div>
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
                  <div className="text-[0.65rem] text-slate-500">14 documentos <span className="text-red-500 font-bold ml-1">2 vencidos</span></div>
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
            <span className="text-[0.65rem] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">{c.stats?.alertas_activas || 4} alertas activas</span>
          </div>
          
          <div className="flex flex-col gap-0 flex-1">
            {[
              { text: 'Vencimiento: Revisión Técnica', sub: 'Mitsubishi L200 4x4', color: 'red' },
              { text: 'Vencimiento: Anexo Contrato', sub: 'Carlos Vera Mamani', color: 'red' },
              { text: 'Vencimiento: Permiso de Circulación', sub: 'Mitsubishi L200 4x4', color: 'red' },
              { text: 'Desconexión por cámara: Exceso de Velocidad', sub: 'Mercedes Actros 2050', color: 'amber' }
            ].map((a, i) => (
              <div key={i} className="py-2.5 border-b border-slate-100 flex items-start gap-2 last:border-0">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-${a.color}-500`}></div>
                <div className="flex-1">
                  <div className={`text-[0.75rem] font-semibold text-${a.color}-600`}>{a.text}</div>
                  <div className="text-[0.65rem] text-slate-500">{a.sub}</div>
                </div>
                <span className="text-[0.65rem] text-blue-600 cursor-pointer font-bold hover:underline" onClick={() => cambiarTab("Alertas IA")}>Ver detalle</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Resumen General */}
        <div className="rounded-[16px] border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[0.85rem] font-bold text-slate-800">Resumen general</h3>
            <span className="text-[0.65rem] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Cumplido</span>
          </div>
          
          <div className="flex flex-col gap-2.5 flex-1 text-[0.75rem]">
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-600">Estado general del contrato</span>
              <span className="font-bold text-emerald-600">Cumplido</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-600">Requisitos asociados</span>
              <span className="font-bold text-slate-800">28</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-600">Requisitos cumplidos</span>
              <span className="font-bold text-emerald-600">22 (77%)</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-600">Requisitos en progreso</span>
              <span className="font-bold text-amber-600">5 (18%)</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-600">Requisitos no cumplidos</span>
              <span className="font-bold text-red-600">1 (5%)</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-600">Documentos totales</span>
              <span className="font-bold text-slate-800">384</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-600">Documentos vencidos</span>
              <span className="font-bold text-red-600">4</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="text-slate-600">Personal acreditado</span>
              <span className="font-bold text-slate-800">{c.stats?.personal?.acreditados || 0} / {c.stats?.personal?.total || 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Equipos acreditados</span>
              <span className="font-bold text-slate-800">{c.stats?.equipos?.acreditados || 0} / {c.stats?.equipos?.total || 0}</span>
            </div>
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
        
        <div className="w-full grid !grid-cols-1 lg:!grid-cols-2 gap-5">
          {/* Conductores */}
          <div className="border border-slate-200 rounded-[16px] bg-white overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-lg">👤</span>
                <span className="text-[0.8rem] font-bold text-slate-800">Conductores</span>
              </div>
              <span className="text-[0.65rem] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">7 requisitos</span>
            </div>
            <div className="flex flex-col">
              {[
                { title: 'AIO vigente (tipo según zona)', level: 'Crítico', desc: 'Autorización de Ingreso de Conductor activa y vigente. El tipo determina la zona de acceso.' },
                { title: 'Código QR al inicio de turno', level: 'Crítico', desc: 'Escanear código QR en punto de control al inicio de cada turno. Obligatorio.' },
                { title: 'Máximo 12 horas continuas de conducción', level: 'Crítico', desc: 'El conductor no puede superar 12 horas continuas al volante.' },
                { title: 'Control de fatiga y alcoholemia negativo', level: 'Crítico', desc: 'Declaración de estado de alerta y resultado negativo en alcotest antes del turno. Tolerancia cero.' },
                { title: 'Antigüedad de licencia > 3 años', level: 'Importante', desc: 'El conductor debe tener mínimo 3 años de antigüedad en la clase de licencia correspondiente.' },
                { title: 'Sin infracciones graves vigentes', level: 'Importante', desc: 'No debe registrar 2 o más infracciones gravísimas o graves en los últimos 12 meses.' },
                { title: 'EPP obligatorio en operación', level: 'Importante', desc: 'Casco, chaleco reflectante, zapatos de seguridad y cinturón en todo momento dentro de faena.' },
              ].map((r, i) => (
                <div key={i} className="px-5 py-3.5 border-b border-slate-100 flex gap-3 last:border-0 hover:bg-slate-50 transition-colors">
                  <div className="w-5 h-5 rounded flex-shrink-0 bg-emerald-100 flex items-center justify-center text-[0.6rem] mt-0.5">✅</div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[0.75rem] font-bold text-slate-800">{r.title}</span>
                      <span className={`text-[0.55rem] font-bold px-1.5 py-0.5 rounded ${
                        r.level === 'Crítico' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                      }`}>{r.level}</span>
                    </div>
                    <div className="text-[0.65rem] text-slate-500 leading-relaxed">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vehículos / Equipos */}
          <div className="border border-slate-200 rounded-[16px] bg-white overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-lg">🚜</span>
                <span className="text-[0.8rem] font-bold text-slate-800">Vehículos / Equipos</span>
              </div>
              <span className="text-[0.65rem] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">11 requisitos</span>
            </div>
            <div className="flex flex-col">
              {[
                { title: 'Sello IMM vigente y color correcto', level: 'Crítico', desc: 'El distintivo de Identificación Mecánica debe estar vigente y coincidir con el color del área.' },
                { title: 'GPS activo + integrado Multiplataforma MLP', level: 'Crítico', desc: 'El equipo debe tener GPS activo y transmitiendo a la plataforma central.' },
                { title: 'Checklist diario pre-turno completado', level: 'Crítico', desc: 'Registro físico o digital del checklist pre-turno antes de iniciar operación.' },
                { title: 'Cuñas (mínimo 2 operativas)', level: 'Crítico', desc: 'El vehículo debe portar mínimo 2 cuñas de estacionamiento en buen estado.' },
                { title: 'Láminas de seguridad adheridas', level: 'Importante', desc: 'Láminas de protección de 4 micrones en parabrisas y 7 micrones en vidrios laterales.' },
                { title: 'Alarma marcha atrás + cámara de retroceso', level: 'Importante', desc: 'Alarma sonora y cámara de retroceso operativas en todo momento.' },
                { title: 'Señalizador de torque en ruedas', level: 'Importante', desc: 'Sistema indicador de torque instalado y visible en todas las ruedas.' },
              ].map((r, i) => (
                <div key={i} className="px-5 py-3.5 border-b border-slate-100 flex gap-3 last:border-0 hover:bg-slate-50 transition-colors">
                  <div className="w-5 h-5 rounded flex-shrink-0 bg-emerald-100 flex items-center justify-center text-[0.6rem] mt-0.5">✅</div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[0.75rem] font-bold text-slate-800">{r.title}</span>
                      <span className={`text-[0.55rem] font-bold px-1.5 py-0.5 rounded ${
                        r.level === 'Crítico' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                      }`}>{r.level}</span>
                    </div>
                    <div className="text-[0.65rem] text-slate-500 leading-relaxed">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
