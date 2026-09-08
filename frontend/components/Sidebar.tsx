"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Api from "@/lib/cliente";

const ITEMS = [
  { href: "/dashboard", icono: "🏠", nombre: "Inicio" },
  { href: "/contratos", icono: "📋", nombre: "Contratos" },
  { href: "/mandantes", icono: "🏢", nombre: "Mandantes" },
  { href: "/personal", icono: "👥", nombre: "Personal" },
  { href: "/equipos", icono: "🚛", nombre: "Equipos / Vehículos" },
  { href: "/cargos", icono: "🪪", nombre: "Cargos" },
  { href: "/requisitos", icono: "📑", nombre: "Requisitos" },
  { href: "/plantillas", icono: "📐", nombre: "Plantillas" },
  { href: "/reportes", icono: "📊", nombre: "Reportes" },
  { href: "/alertas", icono: "🔔", nombre: "Alertas" },
  { href: "/calendario", icono: "📅", nombre: "Calendario" },
  { href: "/integraciones", icono: "🔌", nombre: "Integraciones" },
];

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const path = usePathname();
  const router = useRouter();
  const [noLeidas, setNoLeidas] = useState(0);
  const user = typeof window !== "undefined" ? Api.currentUser() : null;
  const esAdmin = user?.role === "admin";
  const impersonando =
    typeof window !== "undefined"
      ? sessionStorage.getItem("impersonar_nombre")
      : null;

  useEffect(() => {
    if (esAdmin && !impersonando) return;
    Api.alertas
      .resumen()
      .then((r) => setNoLeidas(r.no_leidas))
      .catch(() => {});
  }, [path, esAdmin, impersonando]);

  const salir = async () => {
    const refresh = Api.refreshToken();
    if (refresh) await Api.auth.logout(refresh).catch(() => {});
    Api.clearSession();
    sessionStorage.clear();
    router.push("/login");
  };

  const subtitulo = esAdmin
    ? "Administración"
    : (user?.contrato?.nombre ?? user?.company?.nombre ?? "Mi Empresa");
  const name = user?.nombre ?? "Usuario";
  const initial = name.charAt(0).toUpperCase();

  return (
    <>
      <aside className={`side ${isOpen ? "mob-open" : ""}`}>
        {/* Logo */}
        <div className="slogo">
          <svg
            className="mark"
            viewBox="0 0 100 92"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cop1b" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#e3ad74" />
                <stop offset=".5" stopColor="#c98a4b" />
                <stop offset="1" stopColor="#8f5223" />
              </linearGradient>
              <linearGradient id="cop2b" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f2cda0" />
                <stop offset="1" stopColor="#b06a30" />
              </linearGradient>
            </defs>
            <path
              d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z"
              fill="url(#cop1b)"
            />
            <path d="M50 6 L66 36 L50 44 Z" fill="url(#cop2b)" />
            <path
              d="M50 6 L92 80 L80 80 L50 24 Z"
              fill="#6e3e18"
              opacity=".22"
            />
          </svg>
          <div>
            <span className="wm">
              ACREDIT<span className="cyan">TIA</span>
            </span>
            <span className="wmsub">Plataforma de Acreditación</span>
          </div>
        </div>

        {/* User Info */}
        <div className="suser">
          <div className="su-av" id="su-av">
            {initial}
          </div>
          <div className="su-info">
            <b id="su-name">{name}</b>
            <small id="su-role">{esAdmin ? "Administrador" : "Usuario"}</small>
          </div>
        </div>

        {/* Company Selector */}
        <div
          className="orgsw"
          onClick={() => alert("Cambiar de empresa — demo")}
        >
          <span className="orgic">⛏️</span>
          <span className="orgnm" id="dyn-orgname">
            {subtitulo}
          </span>
          <span className="chev">⌄</span>
        </div>

        {impersonando && (
          <div className="mx-3 mb-2 rounded-lg bg-amber-500/90 px-3 py-2 text-xs font-semibold text-white">
            Viendo como {impersonando}
            <button
              className="ml-2 underline"
              onClick={() => {
                sessionStorage.clear();
                router.push("/admin");
              }}
            >
              salir
            </button>
          </div>
        )}

        {/* Navigation */}
        <nav className="snav" id="snav">
          {esAdmin && (
            <Link
              href="/admin"
              className={`snavi ${path === "/admin" ? "active" : ""}`}
            >
              <span className="ico">🛡️</span>Panel admin
            </Link>
          )}
          {(!esAdmin || impersonando) &&
            ITEMS.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className={`snavi ${path.startsWith(i.href) ? "active" : ""}`}
              >
                <span className="ico">{i.icono}</span>
                {i.nombre}
                {i.href === "/alertas" && noLeidas > 0 && (
                  <span className="nbadge">{noLeidas}</span>
                )}
              </Link>
            ))}
        </nav>

        {/* Bottom Menu */}
        <div className="sbottom">
          <Link
            href="/config"
            className={`snavi ${path.startsWith("/config") ? "active" : ""}`}
          >
            <span className="ico">⚙️</span>Configuración
          </Link>
          <a
            className="snavi"
            onClick={() => alert("Centro de ayuda — próximamente")}
            style={{ cursor: "pointer" }}
          >
            <span className="ico">❓</span>Ayuda
          </a>
          <a
            className="snavi snavi-logout"
            onClick={salir}
            style={{ cursor: "pointer" }}
          >
            <span className="ico">🚪</span>Cerrar sesión
          </a>
        </div>
      </aside>

      {isOpen && (
        <div
          className="mob-overlay"
          onClick={onClose}
          style={{ display: "block" }}
        ></div>
      )}
    </>
  );
}
