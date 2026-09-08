"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [rut, setRut] = useState("");
  const [err, setErr] = useState("");

  React.useEffect(() => {
    router.prefetch("/dashboard");
    router.prefetch("/");
  }, [router]);

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const userEmail = email.trim() || "demo@acredittia.cl";
    const demoUser = {
      id: "usr_demo",
      nombre: userEmail.split("@")[0] || "Usuario Demo",
      email: userEmail,
      role: "usuario",
      company: { id: "emp_1", nombre: "Empresa Proveedora" },
    };
    localStorage.setItem("acredittia_user", JSON.stringify(demoUser));
    router.push("/dashboard");
  };

  const handleRegister = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const demoUser = {
      id: "usr_demo",
      nombre: empresa.trim() || "Nueva Empresa SpA",
      email: email.trim() || "contacto@empresa.cl",
      role: "usuario",
      company: { id: "emp_1", nombre: empresa.trim() || "Nueva Empresa SpA" },
    };
    localStorage.setItem("acredittia_user", JSON.stringify(demoUser));
    router.push("/dashboard");
  };

  return (
    <>
      {/* ================= LOGIN SCREEN ================= */}
      <div id="login-screen">
        <div className="lcard">
          <div className="llogo" onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
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
            <button
              id="tab-login"
              className={tab === "login" ? "on" : ""}
              onClick={() => {
                setTab("login");
                setErr("");
              }}
            >
              Ingresar
            </button>
            <button
              id="tab-register"
              className={tab === "register" ? "on" : ""}
              onClick={() => {
                setTab("register");
                setErr("");
              }}
            >
              Registrar empresa
            </button>
          </div>

          {/* LOGIN FORM */}
          <form
            id="lform-login"
            className={`lform ${tab === "login" ? "active" : ""}`}
            onSubmit={handleLogin}
          >
            <input
              id="l-email"
              className="linput"
              type="email"
              placeholder="Correo electrónico"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="l-pass"
              className="linput"
              type="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLogin();
              }}
            />
            <button className="lbtn" type="submit" id="l-btn">
              Ingresar a la plataforma →
            </button>
            {err && (
              <p className="lerr" id="l-err">
                {err}
              </p>
            )}
            <div className="ldemo">
              <p>¿Quieres probar la plataforma? Ingresa directamente con tu correo o solicita acceso demo.</p>
            </div>
          </form>

          {/* REGISTER FORM */}
          <form
            id="lform-register"
            className={`lform ${tab === "register" ? "active" : ""}`}
            onSubmit={handleRegister}
          >
            <input
              id="r-empresa"
              className="linput"
              type="text"
              placeholder="Nombre de la empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
            <input
              id="r-rut"
              className="linput"
              type="text"
              placeholder="RUT empresa (ej: 76.543.210-9)"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
            />
            <input
              id="r-email"
              className="linput"
              type="email"
              placeholder="Correo de contacto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="r-pass"
              className="linput"
              type="password"
              placeholder="Contraseña (mínimo 6 caracteres)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleRegister();
              }}
            />
            <button className="lbtn" type="submit" id="r-btn">
              Crear cuenta y comenzar →
            </button>
          </form>

          <span
            className="lback"
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          >
            ← Volver al inicio
          </span>
        </div>
      </div>
    </>
  );
}

