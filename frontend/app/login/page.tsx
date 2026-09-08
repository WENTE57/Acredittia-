"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      {/* ================= LOGIN SCREEN ================= */}
      <div id="login-screen" className="hidden">
        <div className="lcard">
          <div className="llogo">
            <img
              src="/acredittia-mark.svg"
              alt=""
              style={{ width: 26, height: 24 } as any}
            />
            <span className="lwm">
              ACREDIT<span className="lcyan">TIA</span>
            </span>
          </div>
          <p className="lsub">IA + Minería · Plataforma de Acreditación</p>
          <div className="ltab">
            <button id="tab-login" className="on" onClick={() => {}}>
              Ingresar
            </button>
            <button id="tab-register" onClick={() => {}}>
              Registrar empresa
            </button>
          </div>
          {/* LOGIN FORM */}
          <div id="lform-login" className="lform active">
            <input
              id="l-email"
              className="linput"
              type="email"
              placeholder="Correo electrónico"
              autoComplete="email"
            />
            <input
              id="l-pass"
              className="linput"
              type="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              onKeyDown={() => {}}
            />
            <button className="lbtn" onClick={() => {}} id="l-btn">
              Ingresar a la plataforma →
            </button>
            <p className="lerr" id="l-err">
              Error al ingresar: Firebase: The supplied auth credential is
              incorrect, malformed or has expired. (auth/invalid-credential).
            </p>
            <div className="ldemo">
              <p>¿Quieres probar la plataforma? Solicita tu acceso demo.</p>
            </div>
          </div>
          {/* REGISTER FORM */}
          <div id="lform-register" className="lform">
            <input
              id="r-empresa"
              className="linput"
              type="text"
              placeholder="Nombre de la empresa"
            />
            <input
              id="r-rut"
              className="linput"
              type="text"
              placeholder="RUT empresa (ej: 76.543.210-9)"
            />
            <input
              id="r-email"
              className="linput"
              type="email"
              placeholder="Correo de contacto"
            />
            <input
              id="r-pass"
              className="linput"
              type="password"
              placeholder="Contraseña (mínimo 6 caracteres)"
            />
            <input
              id="r-pass2"
              className="linput"
              type="password"
              placeholder="Confirmar contraseña"
              onKeyDown={() => {}}
            />
            <button className="lbtn" onClick={() => {}} id="r-btn">
              Crear cuenta y comenzar →
            </button>
            <p className="lerr" id="r-err" />
          </div>
          <span className="lback" onClick={() => {}}>
            ← Volver al inicio
          </span>
        </div>
      </div>
    </>
  );
}
