"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingCTA() {
  const router = useRouter();
  return (
    <>
      {/* CTA FINAL BANNER (RendaloMaq style) */}
      <section className="cta-banner">
        <h2 data-i18n="ctaf.h2">
          CENTRALIZA TODAS TUS FAENAS
          <br />
          EN UNA SOLA PLATAFORMA.
        </h2>
        <p data-i18n="ctaf.p">
          La IA gestiona, valida y mantiene vigentes todas tus acreditaciones —
          mientras tu equipo se enfoca en lo que realmente importa. Ideal para
          empresas proveedoras con múltiples contratos activos.
        </p>
        <button
          data-i18n="ctaf.cta"
          className="btn-cta-white"
          onClick={() => router.push("/login")}
        >
          Solicitar acceso a ACREDIT
          <span style={{ color: "#1D4ED8" } as any}>TIA</span> →
        </button>
      </section>
    </>
  );
}
