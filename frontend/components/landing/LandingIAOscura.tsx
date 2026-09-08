"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingIAOscura() {
  const router = useRouter();
  return (
    <>
      {/* IA SECTION OSCURA */}
      <section
        className="ia-dark"
        id="ia-flow"
        style={{ position: "relative", overflow: "hidden" } as any}
      >
        <img
          src="/andina.jpg"
          alt=""
          style={
            {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: ".18",
            } as any
          }
          onError={() => {}}
        />
        <div
          style={
            {
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg,rgba(8,14,28,.94) 0%,rgba(15,23,42,.92) 50%,rgba(16,29,56,.94) 100%)",
            } as any
          }
        />
        <div
          className="iad-inner"
          style={{ position: "relative", zIndex: 1 } as any}
        >
          <div>
            <span
              data-i18n="iad.label"
              className="sec-label"
              style={{ color: "#6B8FFF" } as any}
            >
              INTELIGENCIA ARTIFICIAL APLICADA
            </span>
            <h2 data-i18n="iad.h2">
              Menos plataformas.
              <br />
              Menos caos.
              <br />
              <span className="hl">Más control.</span>
            </h2>
            <p
              data-i18n="iad.p"
              style={
                {
                  color: "#94A3B8",
                  fontSize: "1.02rem",
                  lineHeight: "1.65",
                  marginBottom: 28,
                } as any
              }
            >
              La IA de ACREDIT
              <span style={{ color: "#1D4ED8" } as any}>TIA</span> estudia todos
              los manuales y estándares de cada faena. Cuando subes un
              documento, lo lee automáticamente — extrae vencimientos, detecta
              antigüedades y te levanta alertas sin que tengas que hacer nada.
            </p>
            <div
              style={
                {
                  background: "rgba(61,98,245,.1)",
                  border: "1px solid rgba(61,98,245,.25)",
                  borderRadius: 14,
                  padding: 20,
                  marginBottom: 20,
                } as any
              }
            >
              <div
                data-i18n="iad.exlabel"
                style={
                  {
                    fontSize: ".72rem",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    color: "#6B8FFF",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  } as any
                }
              >
                Ejemplo real — La IA lee el Padrón de un vehículo
              </div>
              <div
                style={
                  { display: "flex", flexDirection: "column", gap: 8 } as any
                }
              >
                <div
                  data-i18n="iad.ex1"
                  style={
                    {
                      display: "flex",
                      gap: 10,
                      fontSize: ".85rem",
                      color: "#E2E8F0",
                    } as any
                  }
                >
                  <span style={{ color: "#10B981", fontWeight: 700 } as any}>
                    →
                  </span>{" "}
                  Subes el Padrón de un tracto-camión
                </div>
                <div
                  data-i18n="iad.ex2"
                  style={
                    {
                      display: "flex",
                      gap: 10,
                      fontSize: ".85rem",
                      color: "#E2E8F0",
                    } as any
                  }
                >
                  <span style={{ color: "#10B981", fontWeight: 700 } as any}>
                    →
                  </span>{" "}
                  La IA lee el año de fabricación automáticamente
                </div>
                <div
                  data-i18n="iad.ex3"
                  style={
                    {
                      display: "flex",
                      gap: 10,
                      fontSize: ".85rem",
                      color: "#E2E8F0",
                    } as any
                  }
                >
                  <span style={{ color: "#F59E0B", fontWeight: 700 } as any}>
                    ⚠
                  </span>{" "}
                  Detecta que supera la antigüedad máxima de 15 años que exige
                  Centinela
                </div>
                <div
                  data-i18n="iad.ex4"
                  style={
                    {
                      display: "flex",
                      gap: 10,
                      fontSize: ".85rem",
                      color: "#E2E8F0",
                    } as any
                  }
                >
                  <span style={{ color: "#EF4444", fontWeight: 700 } as any}>
                    🚨
                  </span>{" "}
                  Te levanta alerta antes de que llegues a portería
                </div>
              </div>
            </div>
            <button
              data-i18n="iad.cta"
              className="btn-hero-main"
              onClick={() => {}}
              style={{ marginTop: 8 } as any}
            >
              Empezar gratis →
            </button>
          </div>
          <div>
            <div className="ia-feats">
              <div className="ia-feat2">
                <span className="if2ico">📖</span>
                <div data-i18n="iad.f1">
                  <b>Estudia todos los manuales y estándares</b>
                  <span>
                    Lee los manuales de cada faena y mapea 100% de los
                    requisitos — de plataforma y de terreno.
                  </span>
                </div>
              </div>
              <div className="ia-feat2">
                <span className="if2ico">📄</span>
                <div data-i18n="iad.f2">
                  <b>Lee cada documento que subes</b>
                  <span>
                    Extrae vencimientos, fechas, RUTs y datos clave. Tú solo
                    subes el archivo — la IA hace el resto.
                  </span>
                </div>
              </div>
              <div className="ia-feat2">
                <span className="if2ico">🚗</span>
                <div data-i18n="iad.f3">
                  <b>Detecta antigüedad máxima de vehículos</b>
                  <span>
                    Lee el Padrón y verifica si el equipo cumple la antigüedad
                    máxima que exige cada faena.
                  </span>
                </div>
              </div>
              <div className="ia-feat2">
                <span className="if2ico">📡</span>
                <div data-i18n="iad.f4">
                  <b>Requisitos de terreno: Pértiga, Radio y más</b>
                  <span>
                    Conoce los estándares físicos de cada faena — no solo para
                    acreditar en plataforma, sino para entrar en terreno.
                  </span>
                </div>
              </div>
              <div className="ia-feat2">
                <span className="if2ico">🔔</span>
                <div data-i18n="iad.f5">
                  <b>Alertas automáticas de vencimiento</b>
                  <span>
                    Lee la fecha de vencimiento de cada certificado y te avisa
                    con anticipación — sin que tengas que rastrear nada.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
