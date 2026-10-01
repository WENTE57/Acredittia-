import React, { useState, useEffect } from 'react';
import { Contrato, Documento } from '@/lib/tipos';
import * as Api from '@/lib/cliente';

export function TabEmpresaContrato({ contrato }: { contrato: Contrato }) {
  const [cargando, setCargando] = useState(false);
  const [docs, setDocs] = useState<Documento[]>([]);

  const cargar = async () => {
    try {
      setCargando(true);
      const res = await Api.contratos.documentos(contrato.id, { page_size: 50 });
      setDocs(res.items || []);
    } catch (e) {
      console.error("Error al cargar docs empresa", e);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargar();
  }, [contrato.id]);

  const okN = docs.filter(d => d.estado_calc === 'ok').length;
  const pct = docs.length > 0 ? Math.round((okN / docs.length) * 100) : 100;
  
  const textColor = pct >= 80 ? 'text-[#16a34a]' : pct >= 50 ? 'text-[#d97706]' : 'text-[#dc2626]';

  const vencidos = docs.filter(d => d.estado_calc === 'venc');
  const porVencer = docs.filter(d => d.estado_calc === 'porvenc');
  const faltan = docs.filter(d => d.estado_calc === 'falta' && d.obligatorio);

  return (
    <div className="max-w-[960px]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-[56px] h-[56px] bg-[#f1f5f9] border border-slate-200 rounded-[14px] flex items-center justify-center text-[1.6rem] shrink-0">
          🏢
        </div>
        <div className="flex-1">
          <h3 className="text-[1.05rem] text-[#1E293B] font-bold m-0 mb-1 leading-tight">Acreditación de Empresa — {contrato.nombre}</h3>
          <div className="text-[0.8rem] text-slate-500 font-medium">
            Tiex SpA · {contrato.faena?.nombre} · {contrato.faena?.mandante}
          </div>
        </div>
        <div className="text-right">
          <div className={`text-[1.8rem] font-black leading-none mb-1 ${textColor}`}>{pct}%</div>
          <div className="text-[0.72rem] text-slate-500 font-medium">{okN} de {docs.length} al día</div>
        </div>
      </div>

      {/* AI Box */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#1e293b] rounded-[16px] p-5 mb-8 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-black text-[0.75rem] shadow-sm">
            IA
          </div>
          <div>
            <div className="text-[0.95rem] text-white font-bold leading-tight">Diagnóstico de acreditación de empresa</div>
            <div className="text-[0.75rem] text-slate-400 font-medium mt-0.5">Revisado contra el estándar {contrato.faena?.nombre}</div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2.5">
          {vencidos.map(d => (
            <div key={d.id} className="flex gap-3 items-center p-3 bg-[#1e293b]/80 border border-slate-700/50 rounded-[10px]">
              <span className="text-[1rem]">⛔</span>
              <div className="text-[0.82rem] text-slate-200 leading-snug">
                <span className="font-bold text-white">{d.titulo}</span> venció el {d.vence || 'desconocido'}.
              </div>
            </div>
          ))}
          {porVencer.map(d => (
            <div key={d.id} className="flex gap-3 items-center p-3 bg-[#1e293b]/80 border border-slate-700/50 rounded-[10px]">
              <span className="text-[1rem]">⏰</span>
              <div className="text-[0.82rem] text-slate-200 leading-snug">
                <span className="font-bold text-white">{d.titulo}</span> vence en pocos días ({d.vence}).
              </div>
            </div>
          ))}
          {faltan.length > 0 && (
            <div className="flex gap-3 items-center p-3 bg-[#1e293b]/80 border border-slate-700/50 rounded-[10px]">
              <span className="text-[1rem]">📋</span>
              <div className="text-[0.82rem] text-slate-200 leading-snug">
                Faltan <span className="font-bold text-white">{faltan.length} documentos obligatorios</span>: {faltan.map(d => d.titulo).join(', ')}.
              </div>
            </div>
          )}
          {vencidos.length === 0 && porVencer.length === 0 && faltan.length === 0 && (
            <div className="flex gap-3 items-center p-3 bg-[#1e293b]/80 border border-slate-700/50 rounded-[10px]">
              <span className="text-[1rem]">✅</span>
              <div className="text-[0.82rem] text-slate-200 leading-snug">
                La documentación de empresa está al día. Contrato en condiciones de acreditar.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Title List */}
      <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
        <h3 className="text-[0.95rem] text-[#1E293B] font-bold m-0">Documentos requeridos ({docs.length})</h3>
        <div className="flex items-center gap-4">
          <span className="text-[0.78rem] text-slate-500 font-medium">
            {docs.filter(d => d.obligatorio).length} obligatorios · {docs.filter(d => !d.obligatorio).length} opcionales
          </span>
          <button className="h-[30px] px-3.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-[6px] text-[0.75rem] font-semibold text-emerald-700 flex items-center gap-1.5 transition-colors shadow-sm">
            <span className="text-emerald-600">📊</span> Ver en hoja de cálculo
          </button>
        </div>
      </div>

      {/* Docs List */}
      <div className="flex flex-col gap-3">
        {cargando ? (
          <div className="p-8 text-center text-slate-400 text-[0.85rem]">Cargando documentos...</div>
        ) : docs.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-[0.85rem]">No hay documentos requeridos.</div>
        ) : (
          docs.map((d, i) => {
            const estado = d.estado_calc || 'falta';
            const isOk = estado === 'ok';
            const isVenc = estado === 'venc';
            const isPorVenc = estado === 'porvenc';
            
            return (
              <div key={d.id || i} className="flex gap-3.5 p-4 rounded-[12px] bg-white border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
                {/* Icon Checkbox */}
                <div className={`w-[20px] h-[20px] mt-0.5 rounded-[4px] flex items-center justify-center shrink-0 border transition-colors ${
                  isOk || isPorVenc ? 'bg-[#10B981] border-[#10B981] text-white text-[0.7rem] font-bold' : 
                  'bg-white border-slate-300 text-transparent'
                }`}>
                  {isOk || isPorVenc ? '✓' : ''}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h4 className="text-[0.88rem] font-bold text-[#1E293B] m-0 mr-1">{d.titulo}</h4>
                    {d.obligatorio ? (
                      <span className="text-[0.55rem] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-[4px] bg-red-50 text-red-600 border border-red-100">Obligatorio</span>
                    ) : (
                      <span className="text-[0.55rem] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-[4px] bg-slate-100 text-slate-600 border border-slate-200">Opcional</span>
                    )}
                    <span className="text-[0.55rem] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-[4px] bg-blue-50 text-blue-600 border border-blue-100">SIGA</span>
                  </div>

                  {/* Vence info */}
                  <div className={`text-[0.75rem] font-semibold mb-3.5 ${
                    isOk ? 'text-[#10B981]' : 
                    isPorVenc ? 'text-amber-500' :
                    isVenc ? 'text-red-500' : 'text-[#b45309]'
                  }`}>
                    {isOk ? `✓ Vigente hasta ${d.vence || 'indefinido'}` : 
                     isPorVenc ? `⏰ DOCUMENTO VA A VENCER - ${d.vence || ''}` :
                     isVenc ? `⛔ DOCUMENTO VENCIDO - ${d.vence || ''}` : 
                     `⏳ Pendiente de carga`}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center flex-wrap gap-2">
                    <label className="h-[28px] px-3 bg-blue-50/50 border border-blue-200 hover:bg-blue-50 rounded-[6px] text-[0.72rem] font-semibold text-blue-600 cursor-pointer flex items-center gap-1.5 transition-colors">
                      <span className="text-[0.8rem] font-normal leading-none">↑</span> Subir documento
                      <input type="file" className="hidden" />
                    </label>
                    
                    {isOk || isPorVenc || isVenc ? (
                      <div className="flex items-center gap-2">
                        <button className="h-[28px] px-2.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-[6px] text-[0.72rem] font-medium text-slate-600 transition-colors flex items-center gap-1">
                          📄 documento.pdf
                        </button>
                        <button className="h-[28px] px-3 bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4338CA] rounded-[6px] text-[0.72rem] font-bold transition-colors">
                          Ver documento
                        </button>
                        <button className="h-[28px] px-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-[6px] text-[0.72rem] font-bold transition-colors">
                          Quitar
                        </button>
                      </div>
                    ) : (
                      <button className="h-[28px] px-2.5 bg-[#FFFbeb] border border-[#fde68a] hover:bg-[#fef3c7] rounded-[6px] text-[0.72rem] font-medium text-amber-700 transition-colors flex items-center gap-1">
                        📄 Ver ejemplo
                      </button>
                    )}

                    <div className="ml-auto flex items-center gap-2">
                      <span className="text-[0.7rem] font-semibold text-slate-400">SIGA:</span>
                      <select className="h-[28px] px-2 bg-slate-50 border border-slate-200 rounded-[6px] text-[0.7rem] text-slate-600 outline-none cursor-pointer">
                        <option>Sin subir</option>
                        <option>Subido</option>
                        <option>Aprobado</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
