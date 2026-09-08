"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingFooter() {
  const router = useRouter();
  return (
    <>
      {/* FOOTER */}
      <footer className="footer2">
        <div className="f2-inner">
          <div className="f2-top">
            <div className="f2-brand">
              <div className="f2logo">
                <img
                  src="/acredittia-mark.svg"
                  alt=""
                  style={{ width: 26, height: 24, flexShrink: 0 } as any}
                />
                ACREDIT
                <span style={{ color: "#1D4ED8", marginLeft: "-.1em" } as any}>
                  TIA
                </span>
              </div>
              <p data-i18n="foot.tagline">
                La plataforma inteligente que conecta todas tus acreditaciones —
                minería, salmonicultura, energía, agropecuario, construcción y
                cualquier otro rubro — en un solo lugar.
              </p>
              <p
                data-i18n="foot.contact"
                style={{ marginTop: 10, fontSize: ".8rem" } as any}
              >
                📧 acredittia.contacto@gmail.com
                <br />
                🌐 www.acredittia.cl
              </p>
            </div>
            <div className="f2-col">
              <h4 data-i18n="foot.col1.h">Plataforma</h4>
              <a
                data-i18n="foot.col1.l1"
                onClick={() => document.getElementById("sectores")?.scrollIntoView({ behavior: "smooth" })}
                style={{ cursor: "pointer" }}
              >
                Industrias
              </a>
              <a
                data-i18n="foot.col1.l2"
                onClick={() => router.push("/login")}
                style={{ cursor: "pointer" }}
              >
                Iniciar sesión
              </a>
              <a
                data-i18n="foot.col1.l3"
                onClick={() => router.push("/login")}
                style={{ cursor: "pointer" }}
              >
                Registrar empresa
              </a>
            </div>
            <div className="f2-col">
              <h4 data-i18n="foot.col2.h">Sectores</h4>
              <a data-i18n="foot.col2.l1" onClick={() => document.getElementById("sectores")?.scrollIntoView({ behavior: "smooth" })} style={{ cursor: "pointer" }}>Gran Minería</a>
              <a data-i18n="foot.col2.l7" onClick={() => document.getElementById("sectores")?.scrollIntoView({ behavior: "smooth" })} style={{ cursor: "pointer" }}>Salmonicultura</a>
              <a data-i18n="foot.col2.l4" onClick={() => document.getElementById("sectores")?.scrollIntoView({ behavior: "smooth" })} style={{ cursor: "pointer" }}>Agropecuario</a>
              <a data-i18n="foot.col2.l2" onClick={() => document.getElementById("sectores")?.scrollIntoView({ behavior: "smooth" })} style={{ cursor: "pointer" }}>Energía Solar</a>
              <a data-i18n="foot.col2.l3" onClick={() => document.getElementById("sectores")?.scrollIntoView({ behavior: "smooth" })} style={{ cursor: "pointer" }}>Energía Eólica</a>
              <a data-i18n="foot.col2.l5" onClick={() => document.getElementById("sectores")?.scrollIntoView({ behavior: "smooth" })} style={{ cursor: "pointer" }}>Construcción</a>
              <a data-i18n="foot.col2.l6" onClick={() => document.getElementById("sectores")?.scrollIntoView({ behavior: "smooth" })} style={{ cursor: "pointer" }}>Otras industrias</a>
            </div>
            <div className="f2-col">
              <h4 data-i18n="foot.col3.h">Empresa</h4>
              <a data-i18n="foot.col3.l1">Sobre nosotros</a>
              <a data-i18n="foot.col3.l2">Contacto</a>
              <a data-i18n="foot.col3.l3">Términos de uso</a>
              <a data-i18n="foot.col3.l4">Privacidad</a>
            </div>
          </div>
          <div className="f2-bottom">
            <span data-i18n="foot.copy">
              © 2026 ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span>{" "}
              SpA · Todos los derechos reservados
            </span>
            <span data-i18n="foot.madein">
              Hecho en Chile 🇨🇱 · IA + Acreditación Multi-industria
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
