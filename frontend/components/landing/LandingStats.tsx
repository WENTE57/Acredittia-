"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingStats() {
  const router = useRouter();
  return (
    <>
      {/* STATS BAND */}
      <section className="stats-band2">
        <div className="sb-inner">
          <div>
            <span data-i18n="stats.label" className="sec-label">
              POR QUÉ ACREDIT
              <span style={{ color: "#1D4ED8" } as any}>TIA</span>
            </span>
            <h2 data-i18n="stats.h2">
              No somos una IA que lee un manual.
              <br />
              Integramos la faena al 100%.
            </h2>
            <p data-i18n="stats.p">
              Trabajamos con profesionales del rubro para integrar cada faena de
              forma completa: plataformas, procesos, formularios, formatos,
              contactos y correos del mandante. Entendemos el flujo de principio
              a fin — y eso es lo que le da a nuestra IA el contexto real para
              guiarte en cada acreditación. El resultado: menos equipo, más
              velocidad, menos errores. Y no se queda esperando: nuestros
              Agentes Acreditadores IA contactan directo a cada trabajador por
              WhatsApp y llamada para que los documentos y cursos pendientes se
              resuelvan solos.
            </p>
          </div>
          <div className="stats-nums">
            <div data-i18n="stats.n1" className="snum">
              <b>100%</b>
              <span>
                Integración completa de cada faena: procesos, plataformas,
                formularios y contactos
              </span>
            </div>
            <div data-i18n="stats.n2" className="snum">
              <b>-80%</b>
              <span>Reducción del equipo de acreditación gracias a la IA</span>
            </div>
            <div data-i18n="stats.n3" className="snum">
              <b>1 sola</b>
              <span>Plataforma donde gestionas todas tus faenas activas</span>
            </div>
            <div data-i18n="stats.n4" className="snum">
              <b>24/7</b>
              <span>Monitoreo automático de vencimientos y estados</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
