"use client";
import React, { useState, useEffect } from "react";
import { Modal, Spinner } from "@/components/ui";
import * as Api from "@/lib/cliente";
import type { Faena } from "@/lib/tipos";
import { useRouter } from "next/navigation";

interface NuevaModalContratoProps {
  abierto: boolean;
  onCerrar: () => void;
}

const EXTRA_PLATS = ["SIGA", "Workmate", "Webcontrol", "Metacontratas", "SUCAL", "DIRECTIC", "Otra plataforma"];

export function NuevaModalContrato({
  abierto,
  onCerrar,
}: NuevaModalContratoProps) {
  const router = useRouter();
  
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [faenaId, setFaenaId] = useState("");
  const [faenasList, setFaenasList] = useState<Faena[]>([]);
  const [creando, setCreando] = useState(false);
  
  // Custom faena states
  const [customFaenaNombre, setCustomFaenaNombre] = useState("");
  const [customFaenaMandante, setCustomFaenaMandante] = useState("");
  const [customPlats, setCustomPlats] = useState<string[]>([]);
  const [platToAdd, setPlatToAdd] = useState(EXTRA_PLATS[0]);
  
  // Integrated faena platforms
  const [integratedPlats, setIntegratedPlats] = useState<any[]>([]);
  
  // Right side states
  const [mode, setMode] = useState<'chat' | 'man'>('chat');
  const [chatMsgs, setChatMsgs] = useState<any[]>([
    { r: 'bot', t: '¡Hola! Soy el asistente de ACREDITTIA. Súbeme pantallazos, un Excel o un PDF con los requisitos del contrato, o escríbemelos, y los dejo mapeados para empresa, trabajadores, equipos y licencia interna.' }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  
  useEffect(() => {
    if (abierto) {
      Api.faenas.listar({ page_size: 100 })
        .then(res => {
          setFaenasList(res.items || []);
          if (res.items?.length > 0) setFaenaId(res.items[0].id);
        })
        .catch(console.error);
    }
  }, [abierto]);

  useEffect(() => {
    if (faenaId && faenaId !== "__otra") {
      Api.faenas.plataformas(faenaId)
        .then(res => setIntegratedPlats(res.items || []))
        .catch(console.error);
    } else {
      setIntegratedPlats([]);
    }
  }, [faenaId]);

  const handleCrear = async () => {
    if (!nombre || !faenaId) return alert("Falta el nombre o la faena");
    if (faenaId === "__otra" && !customFaenaNombre) return alert("Ingresa el nombre de la faena");
    
    setCreando(true);
    try {
      let finalFaenaId = faenaId;
      if (faenaId === "__otra") {
         alert("Nota: Para el prototipo, seleccionaremos la primera faena integrada al guardar.");
         finalFaenaId = faenasList[0]?.id;
      }
      
      const c = await Api.contratos.crear({
        nombre,
        codigo: codigo || null,
        faena_id: finalFaenaId,
      });
      onCerrar();
      router.push(`/contratos/${c.id}`);
    } catch (e) {
      alert(Api.mensajeError(e));
    } finally {
      setCreando(false);
    }
  };

  if (!abierto) return null;

  const isCustom = faenaId === "__otra";

  return (
    <Modal abierto={abierto} titulo={
      <div className="flex items-center gap-2.5 mb-1">
        <div className="w-9 h-9 bg-blue-100 rounded-[10px] flex items-center justify-center text-[1.1rem]">📋</div>
        <h3 className="m-0 text-[1.05rem] font-bold text-slate-800">Crear nuevo contrato</h3>
      </div>
    } onCerrar={onCerrar} ancho="max-w-[1000px]">
      <div className="text-[0.85rem] text-slate-500 mb-4">
        Define el contrato, elige la faena y fija sus requisitos: con el asistente ACREDITTIA (chat, pantallazos o Excel) o manualmente.
      </div>
      
      <div className="flex flex-col md:flex-row gap-5">
        {/* LEFT COLUMN */}
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[0.75rem] font-bold text-slate-700 mb-1">Nombre del contrato *</label>
              <input value={nombre} onChange={e=>setNombre(e.target.value)} placeholder="Ej: Transporte de personal ML..." className="w-full h-9 px-3 border border-slate-300 rounded-lg text-[0.85rem] focus:border-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-[0.75rem] font-bold text-slate-700 mb-1">Código / N° contrato</label>
              <input value={codigo} onChange={e=>setCodigo(e.target.value)} placeholder="Ej: HUA-MLP-2026" className="w-full h-9 px-3 border border-slate-300 rounded-lg text-[0.85rem] focus:border-blue-500 outline-none" />
            </div>
          </div>
          
          <div>
            <label className="block text-[0.75rem] font-bold text-slate-700 mb-1">Faena (mandante) *</label>
            <select value={faenaId} onChange={e=>setFaenaId(e.target.value)} className="w-full h-9 px-3 border border-slate-300 rounded-lg text-[0.85rem] focus:border-blue-500 outline-none bg-white">
              {faenasList.map(f=><option key={f.id} value={f.id}>{f.nombre} ({f.mandante})</option>)}
              <option value="__otra">➕ Otra faena (no integrada)</option>
            </select>
          </div>
          
          {isCustom && (
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[0.75rem] font-bold text-slate-700 mb-1">Nombre de la faena</label>
                <input value={customFaenaNombre} onChange={e=>setCustomFaenaNombre(e.target.value)} placeholder="Ej: Planta Coronel" className="w-full h-9 px-3 border border-slate-300 rounded-lg text-[0.85rem] focus:border-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-[0.75rem] font-bold text-slate-700 mb-1">Mandante</label>
                <input value={customFaenaMandante} onChange={e=>setCustomFaenaMandante(e.target.value)} placeholder="Ej: Empresa mandante" className="w-full h-9 px-3 border border-slate-300 rounded-lg text-[0.85rem] focus:border-blue-500 outline-none" />
              </div>
            </div>
          )}
          
          {/* PLATAFORMAS */}
          {!isCustom ? (
             <div className="border border-slate-200 rounded-xl p-3 bg-white">
               <div className="flex justify-between items-center mb-1">
                 <b className="text-[0.8rem] text-slate-800">🔌 Plataformas de la faena</b>
                 <span className="text-[0.7rem] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-bold">{integratedPlats.length} plataformas</span>
               </div>
               <div className="text-[0.74rem] text-emerald-700 mb-2">✓ Esta es una faena integrada: sus plataformas y requisitos ya están mapeados.</div>
               <div className="flex flex-wrap gap-1.5">
                 {integratedPlats.map(p => (
                   <span key={p.id} className="text-[0.7rem] bg-indigo-50 text-indigo-800 font-bold px-2 py-1 rounded-md uppercase border border-indigo-100">{p.nombre}</span>
                 ))}
               </div>
             </div>
          ) : (
             <div className="border border-slate-200 rounded-xl p-3 bg-white">
               <div className="flex justify-between items-center mb-1">
                 <b className="text-[0.8rem] text-slate-800">🔌 Plataformas de la faena</b>
                 <span className={`text-[0.7rem] px-2 py-0.5 rounded-full font-bold ${customPlats.length ? 'bg-blue-50 text-blue-700' : 'text-slate-400'}`}>{customPlats.length} plataformas</span>
               </div>
               <div className="text-[0.74rem] text-amber-700 mb-2">Esta faena no está integrada. Agrega las plataformas que usa el mandante (opcional).</div>
               <div className="flex flex-wrap gap-1.5 mb-2">
                 {customPlats.map(p => (
                   <span key={p} className="text-[0.7rem] bg-slate-100 text-slate-700 font-bold px-2 py-1 rounded-md uppercase border border-slate-200 flex items-center gap-1">
                     {p} <span className="cursor-pointer text-slate-400 hover:text-red-500" onClick={()=>setCustomPlats(customPlats.filter(x=>x!==p))}>✕</span>
                   </span>
                 ))}
                 {customPlats.length === 0 && <span className="text-[0.76rem] text-slate-400">Sin plataformas asignadas</span>}
               </div>
               <div className="flex gap-1.5">
                 <select value={platToAdd} onChange={e=>setPlatToAdd(e.target.value)} className="flex-1 h-8 px-2 border border-slate-300 rounded text-[0.8rem] outline-none bg-white">
                   {EXTRA_PLATS.map(p=><option key={p} value={p}>{p}</option>)}
                 </select>
                 <button onClick={()=>{if(!customPlats.includes(platToAdd)) setCustomPlats([...customPlats, platToAdd])}} className="h-8 px-3 text-[0.78rem] border border-slate-300 rounded hover:bg-slate-50 transition-colors font-medium whitespace-nowrap">+ Agregar</button>
               </div>
             </div>
          )}

          {/* REQUISITOS SUMMARY */}
          {!isCustom ? (
            <div className="border border-slate-200 rounded-xl p-3 bg-white">
              <div className="flex justify-between items-center mb-2">
                 <b className="text-[0.8rem] text-slate-800">📋 Requisitos de la faena</b>
                 <span className="text-[0.7rem] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-bold">ya mapeados</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '6px', marginBottom: '8px' }}>
                {[
                  { n: 10, t: 'Empresa', i: '🏢' },
                  { n: 13, t: 'Trabajadores', i: '👤' },
                  { n: 10, t: 'Equipos', i: '🚛' },
                  { n: 9, t: 'Licencia interna', i: '🪪' }
                ].map(r => (
                  <div key={r.t} className="bg-slate-50 border border-slate-200 rounded-md p-1.5 flex flex-col items-center justify-center text-center">
                    <div className="text-[1.1rem] font-bold text-slate-800 leading-none mb-1">{r.n}</div>
                    <div className="text-[0.65rem] text-slate-500 font-medium leading-tight flex items-center gap-1"><span className="text-[0.7rem]">{r.i}</span> {r.t}</div>
                  </div>
                ))}
              </div>
              <div className="text-[0.72rem] text-slate-500">Si el contrato pide algo adicional, cuéntaselo al asistente o agrégalo manualmente.</div>
            </div>
          ) : (
            <div className="border border-slate-200 border-dashed rounded-xl p-3 bg-white">
              <div className="flex justify-between items-center mb-1">
                 <b className="text-[0.8rem] text-slate-800">📋 Requisitos del contrato</b>
                 <span className="text-[0.7rem] text-slate-400 px-2 py-0.5 rounded-full font-bold">0 mapeados</span>
              </div>
              <div className="text-[0.76rem] text-slate-500">Sube pantallazos o el Excel de requisitos al asistente, o agrégalos manualmente →</div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 min-w-0 border border-slate-200 rounded-xl flex flex-col bg-white overflow-hidden">
          <div className="flex text-[0.8rem] font-bold text-slate-500 border-b border-slate-200 bg-slate-50">
            <div className={`flex-1 text-center py-2.5 cursor-pointer ${mode==='chat'?'bg-[#0F172A] text-white':'hover:bg-slate-100 transition-colors'}`} onClick={()=>setMode('chat')}>🤖 Asistente ACREDITTIA</div>
            <div className={`flex-1 text-center py-2.5 cursor-pointer ${mode==='man'?'bg-[#0F172A] text-white':'hover:bg-slate-100 transition-colors'}`} onClick={()=>setMode('man')}>✍️ Manual</div>
          </div>
          
          <div className="flex-1 flex flex-col min-h-[300px]">
            {mode === 'chat' && (
              <div className="flex-1 flex flex-col p-3">
                <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100">
                  <div className="w-7 h-7 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-[0.7rem]">A</div>
                  <div className="flex flex-col leading-tight">
                    <b className="text-[0.75rem] text-slate-800">Asistente ACREDITTIA</b>
                    <span className="text-[0.65rem] text-slate-400">Lee pantallazos, Excel y PDF de requisitos</span>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto mb-2 flex flex-col gap-2">
                  {chatMsgs.map((m,i)=>(
                    <div key={i} className={`flex ${m.r==='user'?'justify-end':'justify-start'}`}>
                      <div className={`max-w-[85%] p-2.5 rounded-xl text-[0.8rem] ${m.r==='user'?'bg-blue-600 text-white rounded-tr-sm':'bg-slate-100 text-slate-700 rounded-tl-sm'}`}>
                        {m.t}
                      </div>
                    </div>
                  ))}
                  {isBusy && (
                    <div className="flex justify-start">
                      <div className="bg-slate-100 p-2.5 rounded-xl rounded-tl-sm text-slate-500 text-[0.8rem]">Escribiendo...</div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col gap-1.5 mb-2">
                  <div className="text-[0.7rem] text-blue-600 cursor-pointer hover:underline" onClick={()=>setChatInput("Subir pantallazo")}>📷 Subir pantallazo de requisitos</div>
                  <div className="text-[0.7rem] text-blue-600 cursor-pointer hover:underline" onClick={()=>setChatInput("Subir Excel")}>📊 Subir Excel de requisitos</div>
                </div>
                
                <div className="flex gap-1.5">
                  <button className="px-2 py-1.5 bg-slate-100 rounded-lg hover:bg-slate-200">📎</button>
                  <input value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>{
                    if(e.key==='Enter' && chatInput) {
                      setChatMsgs([...chatMsgs, {r:'user', t:chatInput}]);
                      setChatInput("");
                      setIsBusy(true);
                      setTimeout(()=>{ setIsBusy(false); setChatMsgs(prev=>[...prev, {r:'bot', t:'¡Anotado!'}]) }, 1000);
                    }
                  }} placeholder="Escribe o pega los requisitos..." className="flex-1 h-9 px-3 border border-slate-300 rounded-lg text-[0.8rem] outline-none focus:border-blue-500" />
                  <button className="px-3.5 h-9 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700" onClick={()=>{
                    if(!chatInput)return;
                    setChatMsgs([...chatMsgs, {r:'user', t:chatInput}]);
                    setChatInput("");
                    setIsBusy(true);
                    setTimeout(()=>{ setIsBusy(false); setChatMsgs(prev=>[...prev, {r:'bot', t:'¡Anotado!'}]) }, 1000);
                  }}>➤</button>
                </div>
              </div>
            )}
            
            {mode === 'man' && (
              <div className="flex-1 p-3 overflow-y-auto max-h-[400px]" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px', overflowX: 'hidden' }}>
                {[
                  {k:'empresa', t:'🏢 Empresa'},
                  {k:'personal', t:'👤 Trabajadores'},
                  {k:'equipo', t:'🚛 Equipos'},
                  {k:'licencia', t:'🪪 Licencia interna'}
                ].map(g => (
                  <div key={g.k} className="bg-slate-50 border border-slate-100 rounded-xl p-2.5">
                    <div className="flex justify-between items-center mb-2">
                      <b className="text-[0.75rem] text-slate-800">{g.t}</b>
                      <span className="text-[0.7rem] bg-blue-100 text-blue-800 px-1.5 rounded-full font-bold">0</span>
                    </div>
                    <div className="flex gap-1 mt-2">
                      <input placeholder="Nuevo requisito" className="flex-1 min-w-0 h-7 px-2 border border-slate-300 rounded text-[0.75rem] outline-none" />
                      <button className="h-7 px-2 bg-white border border-slate-300 rounded hover:bg-slate-50 text-[0.8rem] font-bold text-slate-600">+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-2.5 mt-4 pt-4 border-t border-slate-100">
        <button className="px-4 h-9 text-[0.85rem] font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" onClick={onCerrar}>
          Cancelar
        </button>
        <button className="px-4 h-9 text-[0.85rem] font-bold text-white bg-[#3D62F5] hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center min-w-[140px]" onClick={handleCrear} disabled={creando}>
          {creando ? <Spinner /> : "Crear contrato →"}
        </button>
      </div>
    </Modal>
  );
}
