"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingRiesgos() {
  const router = useRouter();
  return (
    <>
      {/* RIESGOS: Una carpeta rechazada cuesta más que una bien hecha */}
      <section
        className="hs-sect-pad"
        style={
          {
            background: "linear-gradient(135deg,#080E1C 0%,#0F172A 100%)",
            padding: "80px 6%",
            position: "relative",
            overflow: "hidden",
          } as any
        }
      >
        <img
          src="/el_teniente.jpg"
          alt=""
          style={
            {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: ".2",
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
                "linear-gradient(135deg,rgba(8,14,28,.94) 0%,rgba(15,23,42,.92) 100%)",
            } as any
          }
        />
        <div
          style={
            {
              maxWidth: 1200,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            } as any
          }
        >
          <div style={{ textAlign: "center", marginBottom: 52 } as any}>
            <span
              data-i18n="risk.label"
              className="sec-label"
              style={{ color: "#8BAAFF" } as any}
            >
              RIESGOS
            </span>
            <h2
              data-i18n="risk.h2"
              style={
                {
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "#F1F5F9",
                  margin: "12px 0 16px",
                } as any
              }
            >
              Una carpeta rechazada cuesta más
              <br />
              que una bien hecha desde el inicio.
            </h2>
            <p
              data-i18n="risk.p"
              style={
                {
                  color: "#94A3B8",
                  maxWidth: 620,
                  margin: "0 auto",
                  fontSize: "1rem",
                } as any
              }
            >
              Los errores de acreditación no son solo administrativos. Detienen
              operaciones, generan multas y dañan la relación con el mandante.
              La IA de ACREDIT
              <span style={{ color: "#1D4ED8" } as any}>TIA</span> los elimina
              antes de que ocurran.
            </p>
          </div>
          <div className="hs-risk-grid">
            <div
              style={
                {
                  background: "rgba(30,58,95,.35)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 18,
                  overflow: "hidden",
                } as any
              }
            >
              <div style={{ height: 150, position: "relative" } as any}>
                <img
                  src="/risk_garita.jpeg"
                  alt="Control de acceso en garita"
                  style={
                    { width: "100%", height: "100%", objectFit: "cover" } as any
                  }
                  onError={() => {}}
                />
                <div
                  style={
                    {
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(8,14,28,.95) 0%,rgba(8,14,28,.25) 60%,rgba(8,14,28,.05) 100%)",
                    } as any
                  }
                />
                <div
                  style={
                    {
                      position: "absolute",
                      bottom: 10,
                      left: 14,
                      fontSize: "1.5rem",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,.6))",
                    } as any
                  }
                >
                  🚧
                </div>
              </div>
              <div style={{ padding: "22px 26px 26px" } as any}>
                <h4
                  data-i18n="risk.t1"
                  style={
                    {
                      color: "#F1F5F9",
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      margin: "0 0 8px",
                    } as any
                  }
                >
                  Trabajador devuelto en garita
                </h4>
                <p
                  data-i18n="risk.d1"
                  style={
                    {
                      color: "#94A3B8",
                      fontSize: ".88rem",
                      lineHeight: "1.6",
                      margin: 0,
                    } as any
                  }
                >
                  Un examen vencido o un dato que no calza y tu personal vuelve
                  sin entrar. Día perdido, traslado pagado a pérdida y una
                  desmovilización que nadie presupuestó. ACREDIT
                  <span style={{ color: "#1D4ED8" } as any}>TIA</span> detecta
                  el problema antes de que el trabajador llegue a garita.
                </p>
              </div>
            </div>
            <div
              style={
                {
                  background: "rgba(30,58,95,.35)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 18,
                  overflow: "hidden",
                } as any
              }
            >
              <div style={{ height: 150, position: "relative" } as any}>
                <img
                  src="/risk_atraso.jpeg"
                  alt="Firma de carpeta de arranque en terreno"
                  style={
                    { width: "100%", height: "100%", objectFit: "cover" } as any
                  }
                  onError={() => {}}
                />
                <div
                  style={
                    {
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(8,14,28,.95) 0%,rgba(8,14,28,.25) 60%,rgba(8,14,28,.05) 100%)",
                    } as any
                  }
                />
                <div
                  style={
                    {
                      position: "absolute",
                      bottom: 10,
                      left: 14,
                      fontSize: "1.5rem",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,.6))",
                    } as any
                  }
                >
                  📋
                </div>
              </div>
              <div style={{ padding: "22px 26px 26px" } as any}>
                <h4
                  data-i18n="risk.t2"
                  style={
                    {
                      color: "#F1F5F9",
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      margin: "0 0 8px",
                    } as any
                  }
                >
                  Inicio de faena retrasado
                </h4>
                <p
                  data-i18n="risk.d2"
                  style={
                    {
                      color: "#94A3B8",
                      fontSize: ".88rem",
                      lineHeight: "1.6",
                      margin: 0,
                    } as any
                  }
                >
                  La carpeta de arranque rebota y el contrato no parte. Cada día
                  de atraso es facturación que no entra y un mandante mirando el
                  reloj. La IA estructura tu carpeta al estándar exacto del
                  mandante antes de enviarla.
                </p>
              </div>
            </div>
            <div
              style={
                {
                  background: "rgba(30,58,95,.35)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 18,
                  overflow: "hidden",
                } as any
              }
            >
              <div style={{ height: 150, position: "relative" } as any}>
                <img
                  src="/risk_multas.jpeg"
                  alt="Revisión de documentación HSEC en faena"
                  style={
                    {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 20%",
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
                        "linear-gradient(to top,rgba(8,14,28,.95) 0%,rgba(8,14,28,.25) 60%,rgba(8,14,28,.05) 100%)",
                    } as any
                  }
                />
                <div
                  style={
                    {
                      position: "absolute",
                      bottom: 10,
                      left: 14,
                      fontSize: "1.5rem",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,.6))",
                    } as any
                  }
                >
                  ⚠️
                </div>
              </div>
              <div style={{ padding: "22px 26px 26px" } as any}>
                <h4
                  data-i18n="risk.t3"
                  style={
                    {
                      color: "#F1F5F9",
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      margin: "0 0 8px",
                    } as any
                  }
                >
                  Multas y no conformidades HSEC
                </h4>
                <p
                  data-i18n="risk.d3"
                  style={
                    {
                      color: "#94A3B8",
                      fontSize: ".88rem",
                      lineHeight: "1.6",
                      margin: 0,
                    } as any
                  }
                >
                  Documentación incompleta o vencida detectada en faena genera
                  multas, paralizaciones y no conformidades que golpean directo
                  tu margen. ACREDIT
                  <span style={{ color: "#1D4ED8" } as any}>TIA</span> monitorea
                  el 100% de los documentos activos, 24/7.
                </p>
              </div>
            </div>
            <div
              style={
                {
                  background: "rgba(30,58,95,.35)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 18,
                  overflow: "hidden",
                } as any
              }
            >
              <div style={{ height: 150, position: "relative" } as any}>
                <img
                  src="/risk_departamento.jpeg"
                  alt="Departamento de acreditación sobrecargado de documentos"
                  style={
                    { width: "100%", height: "100%", objectFit: "cover" } as any
                  }
                  onError={() => {}}
                />
                <div
                  style={
                    {
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(8,14,28,.95) 0%,rgba(8,14,28,.25) 60%,rgba(8,14,28,.05) 100%)",
                    } as any
                  }
                />
                <div
                  style={
                    {
                      position: "absolute",
                      bottom: 10,
                      left: 14,
                      fontSize: "1.5rem",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,.6))",
                    } as any
                  }
                >
                  🧑‍💼
                </div>
              </div>
              <div style={{ padding: "22px 26px 26px" } as any}>
                <h4
                  data-i18n="risk.t4"
                  style={
                    {
                      color: "#F1F5F9",
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      margin: "0 0 8px",
                    } as any
                  }
                >
                  Departamento de acreditación sobrecargado
                </h4>
                <p
                  data-i18n="risk.d4"
                  style={
                    {
                      color: "#94A3B8",
                      fontSize: ".88rem",
                      lineHeight: "1.6",
                      margin: 0,
                    } as any
                  }
                >
                  Cuando tienes 3 o 4 faenas activas en simultáneo, el equipo
                  revisa carpetas en múltiples plataformas a la vez, a mano y
                  bajo presión. ACREDIT
                  <span style={{ color: "#1D4ED8" } as any}>TIA</span>{" "}
                  centraliza todo y reduce hasta un 80% ese trabajo — sin
                  contratar más personas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
