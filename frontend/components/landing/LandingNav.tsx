"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LandingNav() {
  const router = useRouter();
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    router.prefetch("/login");
    router.prefetch("/dashboard");
  }, [router]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <Link href="/" className="logo">
          <img
            src="/acredittia-logo.svg"
            alt="ACREDITTIA"
            style={{ height: 48, width: "auto" } as any}
          />
        </Link>
        <div className="nav-links">
          <a data-i18n="nav.agentes" onClick={() => scrollToSection("agentes-ia")} style={{ cursor: "pointer" }}>
            Agentes IA
          </a>
          <a data-i18n="nav.red" onClick={() => scrollToSection("red-autorizada")} style={{ cursor: "pointer" }}>
            Red Autorizada
          </a>
          <a data-i18n="nav.sectores" onClick={() => scrollToSection("sectores")} style={{ cursor: "pointer" }}>
            Sectores
          </a>
          <a data-i18n="nav.laplataforma" onClick={() => scrollToSection("plataforma")} style={{ cursor: "pointer" }}>
            La Plataforma
          </a>
        </div>
        <div className="nav-ctas">
          <div className="lang-switch" id="langSwitch">
            <button
              className={`lang-opt ${lang === "es" ? "active" : ""}`}
              data-lang="es"
              onClick={() => setLang("es")}
            >
              🇨🇱 ES
            </button>
            <button
              className={`lang-opt ${lang === "en" ? "active" : ""}`}
              data-lang="en"
              onClick={() => setLang("en")}
            >
              🇺🇸 EN
            </button>
          </div>
          <Link href="/login" className="btn btn-ghost" data-i18n="nav.login">
            Iniciar sesión
          </Link>
          <Link href="/login" className="btn btn-primary" data-i18n="nav.cta">
            Empezar gratis →
          </Link>
        </div>
      </nav>
      {/* Floating language switcher (visible even when scrolled past nav) */}
      <div className="lang-switch lang-switch-float" id="langSwitchFloat">
        <button
          className={`lang-opt ${lang === "es" ? "active" : ""}`}
          data-lang="es"
          onClick={() => setLang("es")}
        >
          🇨🇱 ES
        </button>
        <button
          className={`lang-opt ${lang === "en" ? "active" : ""}`}
          data-lang="en"
          onClick={() => setLang("en")}
        >
          🇺🇸 EN
        </button>
      </div>
    </>
  );
}

