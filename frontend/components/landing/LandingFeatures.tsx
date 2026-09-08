"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingFeatures() {
  const router = useRouter();
  return (
    <>
      {/* FUNCIONALIDADES DIFERENCIADORAS */}
      <section
        className="hs-sect-pad"
        style={{ background: "#fff", padding: "80px 6%" } as any}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" } as any}>
          <div style={{ textAlign: "center", marginBottom: 52 } as any}>
            <span data-i18n="dif.label" className="sec-label">
              INTELIGENCIA APLICADA
            </span>
            <h2
              data-i18n="dif.h2"
              style={
                {
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "var(--azul)",
                  margin: "12px 0 16px",
                } as any
              }
            >
              Todo lo que necesita un departamento
              <br />
              de acreditación — en una sola plataforma.
            </h2>
            <p
              data-i18n="dif.p"
              style={
                {
                  color: "var(--gris)",
                  maxWidth: 660,
                  margin: "0 auto",
                  fontSize: "1rem",
                } as any
              }
            >
              Diseñado para empresas proveedoras que operan en varias faenas
              simultáneas y que necesitan visibilidad, control y automatización
              — sin aumentar el equipo.
            </p>
          </div>
          <div className="hs-feat-grid">
            {/* AGENTES ACREDITADORES IA */}
            <div
              className="hs-feat-card"
              style={{ padding: 0, textAlign: "left" } as any}
            >
              <div className="dif-banner">
                <img
                  className="dif-photo"
                  src="/dif_agentes.jpeg"
                  alt=""
                  onError={() => {}}
                />
                <div className="dif-fade" />
                <div
                  className="dif-badge"
                  style={
                    {
                      background: "linear-gradient(135deg,#34D399,#059669)",
                    } as any
                  }
                >
                  💬
                </div>
              </div>
              <div style={{ padding: "20px 24px 26px" } as any}>
                <h3
                  data-i18n="dif.t1"
                  style={
                    {
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 10px",
                    } as any
                  }
                >
                  Agentes Acreditadores IA
                </h3>
                <p
                  data-i18n="dif.d1"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".88rem",
                      lineHeight: "1.65",
                      margin: 0,
                    } as any
                  }
                >
                  Cada trabajador tiene un agente que le escribe por WhatsApp,
                  correo o lo llama para pedirle el curso o documento pendiente.
                  Tu equipo deja de perseguir choferes uno por uno — la IA
                  insiste hasta resolverlo.
                </p>
              </div>
            </div>
            {/* PANEL MULTI-FAENA */}
            <div
              className="hs-feat-card"
              style={{ padding: 0, textAlign: "left" } as any}
            >
              <div className="dif-banner">
                <img
                  className="dif-photo"
                  src="/dif_panel.jpeg"
                  alt=""
                  onError={() => {}}
                />
                <div className="dif-fade" />
                <div
                  className="dif-badge"
                  style={
                    {
                      background: "linear-gradient(135deg,#8BAAFF,#3D62F5)",
                    } as any
                  }
                >
                  🗂️
                </div>
              </div>
              <div style={{ padding: "20px 24px 26px" } as any}>
                <h3
                  data-i18n="dif.t2"
                  style={
                    {
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 10px",
                    } as any
                  }
                >
                  Un panel para todas tus faenas
                </h3>
                <p
                  data-i18n="dif.d2"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".88rem",
                      lineHeight: "1.65",
                      margin: 0,
                    } as any
                  }
                >
                  ¿Tienes contratos activos en Los Pelambres, Candelaria y El
                  Teniente al mismo tiempo? ACREDIT
                  <span style={{ color: "#1D4ED8" } as any}>TIA</span>{" "}
                  centraliza cada proyecto en un único panel con visibilidad
                  total — estado por faena, personas, equipos y vencimientos,
                  todo en tiempo real.
                </p>
              </div>
            </div>
            {/* MANUALES */}
            <div
              className="hs-feat-card"
              style={{ padding: 0, textAlign: "left" } as any}
            >
              <div className="dif-banner">
                <img
                  className="dif-photo"
                  src="/dif_integracion.jpeg"
                  alt=""
                  onError={() => {}}
                />
                <div className="dif-fade" />
                <div
                  className="dif-badge"
                  style={
                    {
                      background: "linear-gradient(135deg,#3D62F5,#2448E0)",
                    } as any
                  }
                >
                  📚
                </div>
              </div>
              <div style={{ padding: "20px 24px 26px" } as any}>
                <h3
                  data-i18n="dif.t3"
                  style={
                    {
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 10px",
                    } as any
                  }
                >
                  Integración completa de cada faena
                </h3>
                <p
                  data-i18n="dif.d3"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".88rem",
                      lineHeight: "1.65",
                      margin: 0,
                    } as any
                  }
                >
                  No solo nos conectamos a las plataformas — conocemos cada
                  proceso: formularios, formatos de documentos, correos del
                  mandante, flujos de aprobación y contactos. Trabajamos con
                  profesionales del rubro para integrar cada faena de principio
                  a fin, para que la IA sepa exactamente qué hacer en cada paso.
                </p>
              </div>
            </div>
            {/* LABORATORIOS */}
            <div
              className="hs-feat-card"
              style={{ padding: 0, textAlign: "left" } as any}
            >
              <div className="dif-banner">
                <img
                  className="dif-photo"
                  src="/dif_laboratorios.jpeg"
                  alt=""
                  onError={() => {}}
                />
                <div className="dif-fade" />
                <div
                  className="dif-badge"
                  style={
                    {
                      background: "linear-gradient(135deg,#059669,#047857)",
                    } as any
                  }
                >
                  🔬
                </div>
              </div>
              <div style={{ padding: "20px 24px 26px" } as any}>
                <h3
                  data-i18n="dif.t4"
                  style={
                    {
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 10px",
                    } as any
                  }
                >
                  Laboratorios autorizados por faena
                </h3>
                <p
                  data-i18n="dif.d4"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".88rem",
                      lineHeight: "1.65",
                      margin: 0,
                    } as any
                  }
                >
                  Cada faena tiene laboratorios autorizados para exámenes
                  ocupacionales. ACREDIT
                  <span style={{ color: "#1D4ED8" } as any}>TIA</span> te
                  muestra cuáles son — Mutual, ACHS u otros — y te conecta
                  directamente con ellos para agendar y obtener los certificados
                  que la faena acepta. Sin buscar, sin llamadas.
                </p>
              </div>
            </div>
            {/* TIPS DE APROBACIÓN */}
            <div
              className="hs-feat-card"
              style={{ padding: 0, textAlign: "left" } as any}
            >
              <div className="dif-banner">
                <img
                  className="dif-photo"
                  src="/dif_ejemplos.jpeg"
                  alt=""
                  onError={() => {}}
                />
                <div className="dif-fade" />
                <div
                  className="dif-badge"
                  style={
                    {
                      background: "linear-gradient(135deg,#F59E0B,#D97706)",
                    } as any
                  }
                >
                  💡
                </div>
              </div>
              <div style={{ padding: "20px 24px 26px" } as any}>
                <h3
                  data-i18n="dif.t5"
                  style={
                    {
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 10px",
                    } as any
                  }
                >
                  Ejemplos y tips por requisito
                </h3>
                <p
                  data-i18n="dif.d5"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".88rem",
                      lineHeight: "1.65",
                      margin: 0,
                    } as any
                  }
                >
                  Para cada requisito de la faena, la IA te entrega ejemplos
                  reales de documentos aprobados, indicaciones precisas de
                  formato y los errores más comunes que generan observaciones.
                  Sube el documento correcto a la primera, sin idas y vueltas
                  con el mandante.
                </p>
              </div>
            </div>
            {/* TALLERES AUTORIZADOS */}
            <div
              className="hs-feat-card"
              style={{ padding: 0, textAlign: "left" } as any}
            >
              <div className="dif-banner">
                <img
                  className="dif-photo"
                  src="/dif_talleres.jpeg"
                  alt=""
                  onError={() => {}}
                />
                <div className="dif-fade" />
                <div
                  className="dif-badge"
                  style={
                    {
                      background: "linear-gradient(135deg,#7C3AED,#6D28D9)",
                    } as any
                  }
                >
                  🔧
                </div>
              </div>
              <div style={{ padding: "20px 24px 26px" } as any}>
                <h3
                  data-i18n="dif.t6"
                  style={
                    {
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 10px",
                    } as any
                  }
                >
                  Talleres autorizados para inspección visual
                </h3>
                <p
                  data-i18n="dif.d6"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".88rem",
                      lineHeight: "1.65",
                      margin: 0,
                    } as any
                  }
                >
                  Cuando un equipo necesita inspección visual para su estándar,
                  te mostramos los talleres autorizados por esa faena y te
                  conectamos con ellos directamente desde la plataforma para
                  coordinar la revisión y obtener la documentación que el
                  mandante requiere.
                </p>
              </div>
            </div>
            {/* EMPRESAS DE ESTÁNDAR */}
            <div
              className="hs-feat-card"
              style={{ padding: 0, textAlign: "left" } as any}
            >
              <div className="dif-banner">
                <img
                  className="dif-photo"
                  src="/dif_estandar.jpeg"
                  alt=""
                  onError={() => {}}
                />
                <div className="dif-fade" />
                <div
                  className="dif-badge"
                  style={
                    {
                      background: "linear-gradient(135deg,#DC2626,#B91C1C)",
                    } as any
                  }
                >
                  🏗️
                </div>
              </div>
              <div style={{ padding: "20px 24px 26px" } as any}>
                <h3
                  data-i18n="dif.t7"
                  style={
                    {
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 10px",
                    } as any
                  }
                >
                  Conexión con empresas de estándar de equipos
                </h3>
                <p
                  data-i18n="dif.d7"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".88rem",
                      lineHeight: "1.65",
                      margin: 0,
                    } as any
                  }
                >
                  ¿Tu excavadora, grúa o alzahombre necesita adaptaciones para
                  cumplir el estándar de la faena? Te conectamos con empresas
                  especializadas en poner a estándar los equipos según los
                  requerimientos del mandante — para que tu maquinaria pueda
                  entrar sin observaciones.
                </p>
              </div>
            </div>
            {/* SEGUIMIENTO CONTINUO */}
            <div
              className="hs-feat-card"
              style={{ padding: 0, textAlign: "left" } as any}
            >
              <div className="dif-banner">
                <img
                  className="dif-photo"
                  src="/dif_seguimiento.jpeg"
                  alt=""
                  onError={() => {}}
                />
                <div className="dif-fade" />
                <div
                  className="dif-badge"
                  style={
                    {
                      background: "linear-gradient(135deg,#8BAAFF,#3D62F5)",
                    } as any
                  }
                >
                  🔔
                </div>
              </div>
              <div style={{ padding: "20px 24px 26px" } as any}>
                <h3
                  data-i18n="dif.t8"
                  style={
                    {
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 10px",
                    } as any
                  }
                >
                  Seguimiento inteligente, siempre activo
                </h3>
                <p
                  data-i18n="dif.d8"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".88rem",
                      lineHeight: "1.65",
                      margin: 0,
                    } as any
                  }
                >
                  Una vez acreditado, la IA no para. Monitorea vencimientos de
                  documentos, cambios en estándares del mandante y nuevas
                  exigencias de plataforma. Te avisa con tiempo para que nunca
                  pierdas la vigencia de un contrato activo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
