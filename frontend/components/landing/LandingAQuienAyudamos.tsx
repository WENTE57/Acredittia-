"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingAQuienAyudamos() {
  const router = useRouter();
  return (
    <>
      {/* A QUIÉN AYUDAMOS: FAENAS, JEFE DE ACREDITACIONES, ADMINISTRADOR DE CONTRATO, TRABAJADOR */}
      <section
        className="hs-sect-pad"
        style={{ background: "#fff", padding: "80px 6%" } as any}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" } as any}>
          <div style={{ textAlign: "center", marginBottom: 48 } as any}>
            <span data-i18n="who.label" className="sec-label">
              A QUIÉN AYUDAMOS
            </span>
            <h2
              data-i18n="who.h2"
              style={
                {
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "var(--azul)",
                  margin: "12px 0 16px",
                } as any
              }
            >
              Todos ganan cuando la acreditación funciona.
            </h2>
            <p
              data-i18n="who.p"
              style={
                {
                  color: "var(--gris)",
                  maxWidth: 680,
                  margin: "0 auto",
                  fontSize: "1rem",
                } as any
              }
            >
              La acreditación no depende de una sola persona — pasa por la
              faena, por quien lidera las acreditaciones en la empresa, por el
              administrador de cada contrato y por el propio trabajador. ACREDIT
              <span style={{ color: "#1D4ED8" } as any}>TIA</span> está pensado
              para que todos ganen.
            </p>
          </div>
          {/* FAENA / MANDANTE — banner destacado */}
          <div
            style={
              {
                position: "relative",
                overflow: "hidden",
                borderRadius: 22,
                padding: "36px 40px",
                display: "flex",
                gap: 24,
                alignItems: "flex-start",
                maxWidth: 1000,
                margin: "0 auto 24px",
              } as any
            }
          >
            <img
              src="/foto1.jpeg"
              alt=""
              style={
                {
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: ".35",
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
                    "linear-gradient(135deg,rgba(15,23,42,.94),rgba(30,58,95,.9))",
                } as any
              }
            />
            <div
              style={
                {
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                  border: "2px solid rgba(139,170,255,.4)",
                  boxShadow: "0 6px 16px rgba(0,0,0,.3)",
                } as any
              }
            >
              <img
                src="/who_faena.png"
                alt=""
                style={
                  { width: "100%", height: "100%", objectFit: "cover" } as any
                }
                onError={() => {}}
              />
            </div>
            <div style={{ position: "relative", zIndex: 1 } as any}>
              <h3
                data-i18n="who.t0"
                style={
                  {
                    fontSize: "1.2rem",
                    fontWeight: 900,
                    color: "#F1F5F9",
                    margin: "0 0 8px",
                  } as any
                }
              >
                A las faenas y mandantes
              </h3>
              <p
                data-i18n="who.d0"
                style={
                  {
                    color: "#94A3B8",
                    fontSize: ".95rem",
                    lineHeight: "1.7",
                    margin: 0,
                  } as any
                }
              >
                Ayudamos a que sus empresas proveedoras acrediten más fácil, más
                claro y con muchos menos errores.{" "}
                <b style={{ color: "#F1F5F9" } as any}>
                  Si un proveedor no está acreditado, la faena no opera
                </b>{" "}
                — y ahí pierden todos: el mandante, el contratista y los
                trabajadores. Menos rechazos y menos atrasos significan más
                continuidad operacional para la faena.
              </p>
            </div>
          </div>
          {/* EMPRESA PROVEEDORA + TRABAJADOR */}
          <div
            style={
              {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 20,
                maxWidth: 1000,
                margin: "0 auto",
              } as any
            }
          >
            <div
              style={
                {
                  background: "var(--bg)",
                  border: "1px solid var(--linea)",
                  borderRadius: 20,
                  padding: 28,
                  transition: ".15s",
                } as any
              }
              onMouseOver={() => {}}
              onMouseOut={() => {}}
            >
              <div
                style={
                  {
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    overflow: "hidden",
                    marginBottom: 18,
                    boxShadow: "0 4px 12px rgba(61,98,245,.18)",
                  } as any
                }
              >
                <img
                  src="/who_jefe.jpeg"
                  alt=""
                  style={
                    { width: "100%", height: "100%", objectFit: "cover" } as any
                  }
                  onError={() => {}}
                />
              </div>
              <h3
                data-i18n="who.t1"
                style={
                  {
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "var(--azul)",
                    margin: "0 0 10px",
                  } as any
                }
              >
                Al jefe de acreditaciones
              </h3>
              <p
                data-i18n="who.d1"
                style={
                  {
                    color: "var(--gris)",
                    fontSize: ".88rem",
                    lineHeight: "1.65",
                    margin: 0,
                  } as any
                }
              >
                Visualiza todos los contratos de la empresa en un solo panel:
                cumplimiento, requisitos pendientes y % de acreditación por
                faena, en tiempo real — sin tener que perseguir el dato en cada
                plataforma del mandante.
              </p>
            </div>
            <div
              style={
                {
                  background: "var(--bg)",
                  border: "1px solid var(--linea)",
                  borderRadius: 20,
                  padding: 28,
                  transition: ".15s",
                } as any
              }
              onMouseOver={() => {}}
              onMouseOut={() => {}}
            >
              <div
                style={
                  {
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    overflow: "hidden",
                    marginBottom: 18,
                    boxShadow: "0 4px 12px rgba(61,98,245,.18)",
                  } as any
                }
              >
                <img
                  src="/who_adc.png"
                  alt=""
                  style={
                    { width: "100%", height: "100%", objectFit: "cover" } as any
                  }
                  onError={() => {}}
                />
              </div>
              <h3
                data-i18n="who.t2"
                style={
                  {
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "var(--azul)",
                    margin: "0 0 10px",
                  } as any
                }
              >
                Al administrador de contrato
              </h3>
              <p
                data-i18n="who.d2"
                style={
                  {
                    color: "var(--gris)",
                    fontSize: ".88rem",
                    lineHeight: "1.65",
                    margin: 0,
                  } as any
                }
              >
                Maneja la acreditación de su contrato desde un solo lugar, sin
                tener que andar apurando ni molestando a los trabajadores, ni
                revisando vencimientos uno por uno. La plataforma se encarga de
                todo eso por él.
              </p>
            </div>
            <div
              style={
                {
                  background: "linear-gradient(135deg,#0F172A,#1E3A5F)",
                  border: "1px solid rgba(139,170,255,.2)",
                  borderRadius: 20,
                  padding: 28,
                  transition: ".15s",
                } as any
              }
              onMouseOver={() => {}}
              onMouseOut={() => {}}
            >
              <div
                style={
                  {
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    overflow: "hidden",
                    marginBottom: 18,
                    boxShadow: "0 4px 12px rgba(0,0,0,.3)",
                  } as any
                }
              >
                <img
                  src="/who_trabajador.jpeg"
                  alt=""
                  style={
                    { width: "100%", height: "100%", objectFit: "cover" } as any
                  }
                  onError={() => {}}
                />
              </div>
              <h3
                data-i18n="who.t3"
                style={
                  {
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "#F1F5F9",
                    margin: "0 0 10px",
                  } as any
                }
              >
                Al trabajador
              </h3>
              <p
                data-i18n="who.d3"
                style={
                  {
                    color: "#94A3B8",
                    fontSize: ".88rem",
                    lineHeight: "1.65",
                    margin: 0,
                  } as any
                }
              >
                También se ve beneficiado: tiene su propio Agente IA que le
                solicita los documentos y le va recordando lo que debe mantener
                vigente, directo por WhatsApp — el canal que ya usa todos los
                días. Tranquilidad y claridad, sin sorpresas en garita.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
