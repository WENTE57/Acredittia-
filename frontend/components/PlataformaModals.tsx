"use client";
import React, { useState, useEffect } from "react";
import { Modal, Spinner } from "./ui";
import * as Api from "@/lib/cliente";
import type { PlataformaContrato, Credencial } from "@/lib/tipos";

export function AgregarPlataformaModal({
  abierto,
  onCerrar,
  contratoId,
  onAgregada,
}: {
  abierto: boolean;
  onCerrar: () => void;
  contratoId: string;
  onAgregada: () => void;
}) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [url, setUrl] = useState("");
  const [creando, setCreando] = useState(false);

  const handleGuardar = async () => {
    if (!nombre) return alert("El nombre es requerido");
    setCreando(true);
    try {
      await Api.plataformas.crear(contratoId, { nombre, descripcion, url });
      onAgregada();
      onCerrar();
    } catch (e) {
      alert(Api.mensajeError(e));
    } finally {
      setCreando(false);
    }
  };

  return (
    <Modal abierto={abierto} titulo="Agregar plataforma custom" onCerrar={onCerrar}>
      <div className="text-[0.8rem] text-slate-500 mb-4 leading-relaxed">
        Se asociará al contrato actual. Luego podrás agregar los requisitos que esta plataforma exige.
      </div>
      <div className="mb-3">
        <label className="block text-[0.75rem] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Nombre de la plataforma *</label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej: SICEP, Portal Contratistas..."
          className="w-full h-[38px] px-3.5 border border-slate-300 rounded-lg text-[0.85rem] focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-3">
        <label className="block text-[0.75rem] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Descripción</label>
        <input
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Ej: Sistema de control de acceso de la faena"
          className="w-full h-[38px] px-3.5 border border-slate-300 rounded-lg text-[0.85rem] focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label className="block text-[0.75rem] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">URL de acceso (opcional)</label>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Ej: https://..."
          className="w-full h-[38px] px-3.5 border border-slate-300 rounded-lg text-[0.85rem] focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
        <button className="px-4 py-2 text-[0.85rem] font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" onClick={onCerrar}>
          Cancelar
        </button>
        <button
          className="px-4 py-2 text-[0.85rem] font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 min-w-[120px] flex justify-center"
          onClick={handleGuardar}
          disabled={creando}
        >
          {creando ? <Spinner /> : "Agregar"}
        </button>
      </div>
    </Modal>
  );
}

export function GestionarUsuariosModal({
  plataforma,
  contratoId,
  onCerrar,
}: {
  plataforma: PlataformaContrato | null;
  contratoId: string;
  onCerrar: () => void;
}) {
  const [usuarios, setUsuarios] = useState<Credencial[]>([]);
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [creando, setCreando] = useState(false);

  useEffect(() => {
    if (plataforma) {
      // Safeguard for mock string IDs to prevent backend 422 Unprocessable Entity
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(plataforma.id);
      if (!isUUID) {
        setUsuarios([]);
        return;
      }
      
      setLoading(true);
      Api.credenciales.listar(contratoId, plataforma.id)
        .then(res => setUsuarios(res.items || []))
        .catch(e => alert(Api.mensajeError(e)))
        .finally(() => setLoading(false));
    }
  }, [plataforma, contratoId]);

  const handleAgregar = async () => {
    if (!usuario || !password || !plataforma) return alert("Falta usuario o contraseña");
    setCreando(true);
    try {
      await Api.credenciales.crear(contratoId, plataforma.id, { nombre, usuario, password });
      setNombre(""); setUsuario(""); setPassword("");
      const res = await Api.credenciales.listar(contratoId, plataforma.id);
      setUsuarios(res.items || []);
    } catch (e) {
      alert(Api.mensajeError(e));
    } finally {
      setCreando(false);
    }
  };

  const handleEliminar = async (uid: string) => {
    if (!plataforma || !confirm("¿Eliminar esta cuenta?")) return;
    try {
      await Api.credenciales.eliminar(contratoId, plataforma.id, uid);
      setUsuarios(usuarios.filter(u => u.id !== uid));
    } catch (e) {
      alert(Api.mensajeError(e));
    }
  };

  if (!plataforma) return null;

  return (
    <Modal abierto={!!plataforma} titulo={`${plataforma.nombre} — Usuarios`} onCerrar={onCerrar} ancho="max-w-[520px]">
      <div className="text-[0.8rem] text-slate-500 mb-4 leading-relaxed">
        Credenciales de acceso a {plataforma.nombre}.
      </div>
      
      {loading ? (
        <div className="py-8 flex justify-center"><Spinner /></div>
      ) : (
        <div className="mb-5 max-h-[300px] overflow-y-auto pr-2">
          {usuarios.length === 0 ? (
            <div className="text-[0.78rem] text-slate-500 py-2">Sin usuarios registrados aún.</div>
          ) : (
            usuarios.map(u => (
              <div key={u.id} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                <div>
                  <div className="text-[0.83rem] font-bold text-slate-800">{u.nombre || '—'}</div>
                  <div className="text-[0.74rem] text-slate-500 mt-0.5">
                    👤 {u.usuario} &nbsp;·&nbsp; 🔑 <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-700">********</span>
                  </div>
                </div>
                <button 
                  className="w-6 h-6 flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  onClick={() => handleEliminar(u.id)}
                  title="Eliminar"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      )}

      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
        <div className="text-[0.75rem] font-bold text-slate-700 mb-2.5">NUEVO USUARIO</div>
        <div className="mb-2.5">
          <label className="block text-[0.7rem] font-bold text-slate-600 mb-1 uppercase">Nombre del responsable</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Carolina Pérez"
            className="w-full h-[34px] px-3 border border-slate-300 rounded text-[0.8rem] focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex gap-2 mb-3">
          <div className="flex-1">
            <label className="block text-[0.7rem] font-bold text-slate-600 mb-1 uppercase">Usuario *</label>
            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="c.perez"
              className="w-full h-[34px] px-3 border border-slate-300 rounded text-[0.8rem] focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-[0.7rem] font-bold text-slate-600 mb-1 uppercase">Contraseña *</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              type="password"
              className="w-full h-[34px] px-3 border border-slate-300 rounded text-[0.8rem] focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button className="px-3 py-1.5 text-[0.75rem] font-semibold text-slate-600 hover:bg-slate-200 rounded transition-colors" onClick={onCerrar}>
            Cerrar
          </button>
          <button
            className="px-3 py-1.5 text-[0.75rem] font-bold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors disabled:opacity-50"
            onClick={handleAgregar}
            disabled={creando}
          >
            {creando ? "..." : "+ Agregar usuario"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
