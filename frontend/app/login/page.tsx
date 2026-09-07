"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as Api from "@/lib/cliente";
import { Campo } from "@/components/ui";

type Pestana = "login" | "registro" | "recuperar";

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Pestana>("login");
  const [pendiente, setPendiente] = useState(false);
  const [error, setError] = useState("");
  const [aviso, setAviso] = useState("");
  const [cargando, setCargando] = useState(false);
  const [f, setF] = useState({ email: "", password: "", empresa: "", rut: "", pass2: "" });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setF({ ...f, [k]: e.target.value });

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setAviso(""); setCargando(true);
    try {
      const r = await Api.auth.login(f.email, f.password);
      Api.setSession(r.access_token, r.refresh_token, r.user);
      router.push(r.user.role === "admin" ? "/admin" : "/dashboard");
    } catch (err) {
      if (Api.esApiError(err) && err.code === "ACCOUNT_PENDING") setPendiente(true);
      else setError(Api.mensajeError(err));
    } finally { setCargando(false); }
  };

  const registrar = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (f.password !== f.pass2) { setError("Las contraseñas no coinciden"); return; }
    setCargando(true);
    try {
      await Api.auth.register({ empresa: f.empresa, rut: f.rut, email: f.email, password: f.password });
      setPendiente(true);
    } catch (err) { setError(Api.mensajeError(err)); } finally { setCargando(false); }
  };

  const recuperar = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setAviso(""); setCargando(true);
    try {
      const r = await Api.auth.olvidePassword(f.email);
      setAviso(r.message);
    } catch (err) { setError(Api.mensajeError(err)); } finally { setCargando(false); }
  };

  if (pendiente) {
    return (
      <main id="login-screen">
        <div className="lcard" style={{ textAlign: "center" }}>
          <div className="text-4xl mb-4">⏳</div>
          <h1 className="mt-3 text-xl font-bold text-white">Solicitud en revisión</h1>
          <p className="mt-2 text-sm text-slate-400">
            Tu cuenta está siendo revisada por nuestro equipo. Te notificaremos por email al ser aprobada.
          </p>
          <button className="lbtn mt-6" onClick={() => setPendiente(false)}>Volver</button>
        </div>
      </main>
    );
  }

  return (
    <main id="login-screen">
      <div className="lcard">
        <div className="llogo">
          <svg style={{ width: "26px", height: "24px" }} viewBox="0 0 100 92" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#6B8FFF" />
                <stop offset="1" stopColor="#2448E0" />
              </linearGradient>
            </defs>
            <path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="url(#lg1)" />
          </svg>
          <span className="lwm">ACREDIT<span className="lcyan">TIA</span></span>
        </div>
        <p className="lsub">IA + Minería · Plataforma de Acreditación</p>

        <div className="ltab">
          <button className={tab === "login" ? "on" : ""} onClick={() => { setTab("login"); setError(""); setAviso(""); }}>Ingresar</button>
          <button className={tab === "registro" ? "on" : ""} onClick={() => { setTab("registro"); setError(""); setAviso(""); }}>Registrar empresa</button>
        </div>

        {error && <p className="mb-4 rounded-lg bg-red-500/10 border border-red-500/20 px-3 py-2 text-sm text-red-400">{error}</p>}
        {aviso && <p className="mb-4 rounded-lg bg-sky-500/10 border border-sky-500/20 px-3 py-2 text-sm text-sky-400">{aviso}</p>}

        {tab === "login" && (
          <form onSubmit={login} className="lform active">
            <input className="linput" type="email" placeholder="Correo electrónico" value={f.email} onChange={set("email")} required />
            <input className="linput" type="password" placeholder="Contraseña" value={f.password} onChange={set("password")} required />
            <button className="lbtn" disabled={cargando}>
              {cargando ? "Ingresando..." : "Ingresar a la plataforma →"}
            </button>
            <div className="mt-4 text-center">
              <button type="button" className="text-xs text-slate-500 hover:text-white transition" onClick={() => { setTab("recuperar"); setError(""); setAviso(""); }}>
                ¿Olvidaste tu contraseña?
              </button>
            </div>
            <div className="ldemo">
              <p>Demo: demo@acredittia.cl / Demo2026!<br/>Admin: admin@acredittia.cl / Admin2026!</p>
            </div>
          </form>
        )}

        {tab === "registro" && (
          <form onSubmit={registrar} className="lform active">
            <input className="linput" type="text" placeholder="Razón social" value={f.empresa} onChange={set("empresa")} required />
            <input className="linput" type="text" placeholder="RUT empresa (ej: 76.543.210-9)" value={f.rut} onChange={set("rut")} required />
            <input className="linput" type="email" placeholder="Correo electrónico" value={f.email} onChange={set("email")} required />
            <input className="linput" type="password" placeholder="Contraseña (mínimo 8 caracteres)" minLength={8} value={f.password} onChange={set("password")} required />
            <input className="linput" type="password" placeholder="Confirmar contraseña" value={f.pass2} onChange={set("pass2")} required />
            <button className="lbtn" disabled={cargando}>
              {cargando ? "Creando..." : "Crear cuenta y comenzar →"}
            </button>
          </form>
        )}

        {tab === "recuperar" && (
          <form onSubmit={recuperar} className="lform active">
            <p className="text-sm text-slate-400 mb-4 text-center">
              Te enviaremos un enlace para restablecer la contraseña.
            </p>
            <input className="linput" type="email" placeholder="Correo electrónico" value={f.email} onChange={set("email")} required />
            <button className="lbtn" disabled={cargando}>
              {cargando ? "Enviando..." : "Enviar instrucciones"}
            </button>
            <div className="mt-4 text-center">
              <button type="button" className="text-xs text-slate-500 hover:text-white transition" onClick={() => { setTab("login"); setError(""); setAviso(""); }}>
                ← Volver a ingresar
              </button>
            </div>
          </form>
        )}

        <Link href="/" className="lback">← Volver al inicio</Link>
      </div>
    </main>
  );
}
