"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingNav() {
  const router = useRouter();
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="logo">
          <img
            src="/acredittia-logo.svg"
            alt="ACREDITTIA"
            style={{ height: 48, width: "auto" } as any}
          />
        </div>
        <div className="nav-links">
          <a data-i18n="nav.agentes" onClick={() => {}}>
            Agentes IA
          </a>
          <a data-i18n="nav.red" onClick={() => {}}>
            Red Autorizada
          </a>
          <a data-i18n="nav.sectores" onClick={() => {}}>
            Sectores
          </a>
          <a data-i18n="nav.laplataforma" onClick={() => {}}>
            La Plataforma
          </a>
        </div>
        <div className="nav-ctas">
          <div className="lang-switch" id="langSwitch">
            <button
              className="lang-opt active"
              data-lang="es"
              onClick={() => {}}
            >
              🇨🇱 ES
            </button>
            <button className="lang-opt" data-lang="en" onClick={() => {}}>
              🇺🇸 EN
            </button>
          </div>
          <button
            className="btn btn-ghost"
            data-i18n="nav.login"
            onClick={() => {}}
          >
            Iniciar sesión
          </button>
          <button
            className="btn btn-primary"
            data-i18n="nav.cta"
            onClick={() => {}}
          >
            Empezar gratis →
          </button>
        </div>
      </nav>
      {/* Floating language switcher (visible even when scrolled past nav) */}
      <div className="lang-switch lang-switch-float" id="langSwitchFloat">
        <button className="lang-opt active" data-lang="es" onClick={() => {}}>
          🇨🇱 ES
        </button>
        <button className="lang-opt" data-lang="en" onClick={() => {}}>
          🇺🇸 EN
        </button>
      </div>
    </>
  );
}
