"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingIADocs() {
  const router = useRouter();
  const [activeDoc, setActiveDoc] = useState<number>(0);
  return (
    <>
      {/* IA QUE LEE DOCUMENTOS (interactivo estilo CarSignal) */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .doc-tab{background:#fff;border:1px solid var(--linea);color:var(--gris);font-size:.78rem;font-weight:700;padding:9px 16px;border-radius:20px;cursor:pointer;transition:.2s}\n  .doc-tab.is-active{background:var(--azul);color:#fff;border-color:var(--azul)}\n  .doc-field{display:flex;align-items:center;gap:8px;background:#F8FAFF;border:1px solid var(--linea);border-radius:9px;padding:8px 10px;font-size:.78rem;opacity:0;transform:translateY(6px);animation:docFieldIn .45s ease forwards}\n  .doc-field.bad{background:#FEF2F2;border-color:#FCA5A5}\n  @keyframes docFieldIn{to{opacity:1;transform:translateY(0)}}\n  @keyframes docScan{0%{top:6%;opacity:.9}50%{top:88%;opacity:.5}100%{top:6%;opacity:.9}}\n  @keyframes docConfBar{from{width:0%}}\n  .doc-sil{display:none}\n  .doc-sil.is-active{display:block}\n  .doc-bar{height:9px;border-radius:4px;background:#E2E8F0}\n  ",
        }}
      />
      <section
        style={
          {
            background:
              "linear-gradient(180deg,#F8FAFF 0%,#EEF2FF 40%,#F8FAFF 100%)",
            padding: "96px 6%",
            position: "relative",
            overflow: "hidden",
          } as any
        }
      >
        <div
          style={
            {
              maxWidth: 820,
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
            } as any
          }
        >
          <span data-i18n="doc.label" className="sec-label">
            DETECCIÓN CON IA
          </span>
          <h2 data-i18n="doc.h2" className="sec-title" style={{ marginTop: 10 } as any}>
            Sube cualquier documento.
            <br />
            La IA extrae los datos y valida las reglas.
          </h2>
          <p data-i18n="doc.lead" className="sec-lead">
            Haz clic en los ejemplos para ver cómo la IA lee distintos tipos de archivos en tiempo real.
          </p>
        </div>
        <div
          style={
            {
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 32,
              marginBottom: 40,
              flexWrap: "wrap",
              maxWidth: 700,
              marginInline: "auto",
            } as any
          }
        >
          <button
            data-i18n="doc.tab0"
            className={`doc-tab ${activeDoc === 0 ? "is-active" : ""}`}
            data-doc={0}
            onClick={() => setActiveDoc(0)}
          >
            🪪 Cédula de Identidad
          </button>
          <button
            data-i18n="doc.tab1"
            className={`doc-tab ${activeDoc === 1 ? "is-active" : ""}`}
            data-doc={1}
            onClick={() => setActiveDoc(1)}
          >
            🩺 Examen de Salud
          </button>
          <button
            data-i18n="doc.tab2"
            className={`doc-tab ${activeDoc === 2 ? "is-active" : ""}`}
            data-doc={2}
            onClick={() => setActiveDoc(2)}
          >
            ⚠️ Documento con error
          </button>
        </div>
        <div
          className="wf-laptop-float"
          style={
            {
              maxWidth: 980,
              margin: "36px auto 0",
              display: "grid",
              gridTemplateColumns: ".85fr 1.15fr",
              gap: 24,
              position: "relative",
            } as any
          }
        >
          {/* VIEWER */}
          <div
            style={
              {
                background: "#0F172A",
                borderRadius: 20,
                padding: 20,
                boxShadow: "0 30px 70px -20px rgba(15,23,42,.35)",
              } as any
            }
          >
            <div
              style={
                {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                } as any
              }
            >
              <span
                className="wf-livedot"
                style={
                  {
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#25D366",
                    display: "inline-block",
                  } as any
                }
              />
              <span
                id="docLabel"
                style={
                  {
                    color: "#94A3B8",
                    fontSize: ".66rem",
                    fontWeight: 700,
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                  } as any
                }
              >
                Cédula de Identidad
              </span>
            </div>
            <div
              style={
                {
                  background: "#fff",
                  borderRadius: 12,
                  padding: 16,
                  position: "relative",
                  overflow: "hidden",
                  minHeight: 230,
                } as any
              }
            >
              <div
                id="docScanLine"
                style={
                  {
                    position: "absolute",
                    left: "6%",
                    right: "6%",
                    height: 3,
                    background:
                      "linear-gradient(90deg,transparent,#3D62F5,transparent)",
                    boxShadow: "0 0 16px 2px rgba(61,98,245,.55)",
                    animation: "docScan 2.6s ease-in-out infinite",
                  } as any
                }
              />
              {/* SIL 0: CÉDULA */}
              <div className={`doc-sil ${activeDoc === 0 ? "is-active" : ""}`} id="docSil0">
                <div
                  style={
                    {
                      fontSize: ".6rem",
                      fontWeight: 800,
                      letterSpacing: ".05em",
                      color: "#94A3B8",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    } as any
                  }
                >
                  Cédula de Identidad · República de Chile
                </div>
                <div style={{ display: "flex", gap: 14 } as any}>
                  <div
                    style={
                      {
                        width: 64,
                        height: 78,
                        borderRadius: 8,
                        background: "#F1F5F9",
                        border: "1px solid var(--linea)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.6rem",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    👤
                  </div>
                  <div
                    style={
                      {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        justifyContent: "center",
                      } as any
                    }
                  >
                    <div className="doc-bar" style={{ width: "88%" } as any} />
                    <div className="doc-bar" style={{ width: "64%" } as any} />
                    <div className="doc-bar" style={{ width: "72%" } as any} />
                    <div className="doc-bar" style={{ width: "40%" } as any} />
                  </div>
                </div>
              </div>
              {/* SIL 1: EXAMEN SALUD */}
              <div className={`doc-sil ${activeDoc === 1 ? "is-active" : ""}`} id="docSil1">
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 12,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        background: "#3D62F5",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: ".7rem",
                      } as any
                    }
                  >
                    ✚
                  </div>
                  <div
                    style={
                      {
                        fontSize: ".6rem",
                        fontWeight: 800,
                        letterSpacing: ".05em",
                        color: "#94A3B8",
                        textTransform: "uppercase",
                      } as any
                    }
                  >
                    Certificado de Evaluación Laboral de Salud
                  </div>
                </div>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 9 } as any
                  }
                >
                  <div className="doc-bar" style={{ width: "92%" } as any} />
                  <div className="doc-bar" style={{ width: "80%" } as any} />
                  <div className="doc-bar" style={{ width: "70%" } as any} />
                  <div className="doc-bar" style={{ width: "85%" } as any} />
                  <div className="doc-bar" style={{ width: "55%" } as any} />
                </div>
              </div>
              {/* SIL 2: DOCUMENTO CON ERROR */}
              <div className={`doc-sil ${activeDoc === 2 ? "is-active" : ""}`} id="docSil2">
                <div
                  style={
                    {
                      fontSize: ".6rem",
                      fontWeight: 800,
                      letterSpacing: ".05em",
                      color: "#94A3B8",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    } as any
                  }
                >
                  Documento recibido
                </div>
                <div
                  style={
                    {
                      transform: "rotate(-3deg)",
                      filter: "blur(.4px)",
                      opacity: ".85",
                    } as any
                  }
                >
                  <div style={{ display: "flex", gap: 14 } as any}>
                    <div
                      style={
                        {
                          width: 64,
                          height: 78,
                          borderRadius: 8,
                          background: "#F1F5F9",
                          border: "1px solid var(--linea)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.6rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      👤
                    </div>
                    <div
                      style={
                        {
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                          justifyContent: "center",
                        } as any
                      }
                    >
                      <div
                        className="doc-bar"
                        style={{ width: "70%", background: "#FCA5A5" } as any}
                      />
                      <div
                        className="doc-bar"
                        style={{ width: "50%" } as any}
                      />
                      <div
                        className="doc-bar"
                        style={{ width: "35%", background: "#FCA5A5" } as any}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      marginTop: 14,
                      background: "#FEF2F2",
                      border: "1px solid #FCA5A5",
                      borderRadius: 8,
                      padding: "8px 10px",
                      fontSize: ".68rem",
                      color: "#B91C1C",
                      fontWeight: 700,
                    } as any
                  }
                >
                  ⚠ Calidad de escaneo insuficiente
                </div>
              </div>
            </div>
          </div>
          {/* OUTPUT */}
          <div
            style={
              {
                background: "#fff",
                border: "1px solid var(--linea)",
                borderRadius: 20,
                padding: 24,
                boxShadow: "0 20px 50px -20px rgba(15,23,42,.15)",
              } as any
            }
          >
            <div
              style={
                {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                } as any
              }
            >
              <div
                style={
                  { display: "flex", alignItems: "center", gap: 10 } as any
                }
              >
                <div
                  style={
                    {
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#3D62F5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: ".85rem",
                      flexShrink: 0,
                    } as any
                  }
                >
                  🤖
                </div>
                <div>
                  <div
                    style={
                      {
                        fontSize: ".8rem",
                        fontWeight: 800,
                        color: "#0F172A",
                      } as any
                    }
                  >
                    Sofía · IA leyendo el documento
                  </div>
                  <div style={{ fontSize: ".65rem", color: "#64748B" } as any}>
                    Confianza de lectura
                  </div>
                </div>
              </div>
              <div
                style={
                  {
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "var(--azul)",
                  } as any
                }
                id="docConf"
              >
                98%
              </div>
            </div>
            <div
              id="docFields"
              style={
                {
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginBottom: 14,
                  minHeight: 150,
                } as any
              }
            >
              <div
                className="doc-field"
                style={{ animationDelay: "0ms" } as any}
              >
                <span
                  style={
                    { flexShrink: 0, fontWeight: 900, color: "#16A34A" } as any
                  }
                >
                  ✓
                </span>
                <span style={{ color: "#0F172A", fontWeight: 600 } as any}>
                  Nombre: Rodrigo Pérez Salinas
                </span>
              </div>
              <div
                className="doc-field"
                style={{ animationDelay: "140ms" } as any}
              >
                <span
                  style={
                    { flexShrink: 0, fontWeight: 900, color: "#16A34A" } as any
                  }
                >
                  ✓
                </span>
                <span style={{ color: "#0F172A", fontWeight: 600 } as any}>
                  RUN: 16.234.567-8
                </span>
              </div>
              <div
                className="doc-field"
                style={{ animationDelay: "280ms" } as any}
              >
                <span
                  style={
                    { flexShrink: 0, fontWeight: 900, color: "#16A34A" } as any
                  }
                >
                  ✓
                </span>
                <span style={{ color: "#0F172A", fontWeight: 600 } as any}>
                  Fecha de vencimiento: 14 SEP 2026
                </span>
              </div>
            </div>
            <div
              id="docStatus"
              style={
                {
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  padding: "8px 12px",
                  borderRadius: 9,
                  display: "inline-block",
                  marginBottom: 14,
                  background: "rgb(220, 252, 231)",
                  color: "rgb(22, 101, 52)",
                } as any
              }
            >
              ✅ Vigente — 44 días para vencer
            </div>
            <div
              style={
                {
                  background: "#0F172A",
                  borderRadius: 12,
                  padding: 14,
                  minHeight: 74,
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: ".62rem",
                    fontWeight: 800,
                    letterSpacing: ".08em",
                    color: "#8BAAFF",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  } as any
                }
              >
                Acción automática
              </div>
              <p
                id="docAction"
                style={
                  {
                    color: "#E2E8F0",
                    fontSize: ".78rem",
                    lineHeight: "1.6",
                    margin: 0,
                  } as any
                }
              >
                Actualizado automáticamente en el contrato Los Pelambres. Sin
                acción del encargado.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* LO QUE LA IA DETECTA */}
      <section
        className="hs-sect-pad"
        style={{ background: "#F8FAFF", padding: "80px 6%" } as any}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" } as any}>
          <div style={{ textAlign: "center", marginBottom: 52 } as any}>
            <span data-i18n="det.label" className="sec-label">
              UNA DE LAS FUNCIONES DE LA PLATAFORMA
            </span>
            <h2
              data-i18n="det.h2"
              style={
                {
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "var(--azul)",
                  margin: "12px 0 16px",
                } as any
              }
            >
              Todos tus documentos revisados
              <br />
              con IA — al instante
            </h2>
            <p
              data-i18n="det.p"
              style={
                {
                  color: "var(--gris)",
                  maxWidth: 660,
                  margin: "0 auto",
                  fontSize: "1rem",
                } as any
              }
            >
              Porque integramos la faena al 100% — procesos, plataformas,
              formularios, formatos y contactos — nuestra IA sabe exactamente
              qué revisar en cada documento. No lee un manual: conoce el flujo
              completo, igual que un especialista interno de esa faena.
            </p>
          </div>
          <div className="hs-feat-grid" style={{ gap: 16 } as any}>
            <div
              className="det-card"
              style={
                {
                  background: "white",
                  border: "1px solid var(--linea)",
                  borderRadius: 16,
                  padding: "22px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                } as any
              }
            >
              <div
                className="det-icon"
                style={
                  {
                    flexShrink: 0,
                    lineHeight: 1,
                    width: 44,
                    height: 44,
                    background: "#FEF3C7",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  } as any
                }
              >
                <span
                  className="req-emoji"
                  style={{ fontSize: "1.8rem" } as any}
                >
                  🩺
                </span>
                <img
                  className="req-photo"
                  src="/req_examenes.jpeg"
                  alt=""
                  onError={() => {}}
                />
              </div>
              <div>
                <h4
                  data-i18n="det.t1"
                  style={
                    {
                      fontSize: ".95rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 5px",
                    } as any
                  }
                >
                  Exámenes Ocupacionales
                </h4>
                <p
                  data-i18n="det.d1"
                  style={
                    {
                      fontSize: ".82rem",
                      color: "var(--gris)",
                      margin: 0,
                      lineHeight: "1.5",
                    } as any
                  }
                >
                  Vigencia, firma del médico, datos del trabajador y legibilidad
                  del documento. Detecta si está vencido o próximo a vencer.
                </p>
              </div>
            </div>
            <div
              className="det-card"
              style={
                {
                  background: "white",
                  border: "1px solid var(--linea)",
                  borderRadius: 16,
                  padding: "22px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                } as any
              }
            >
              <div
                className="det-icon"
                style={
                  {
                    flexShrink: 0,
                    lineHeight: 1,
                    width: 44,
                    height: 44,
                    background: "#DCFCE7",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  } as any
                }
              >
                <span
                  className="req-emoji"
                  style={{ fontSize: "1.8rem" } as any}
                >
                  🚗
                </span>
                <img
                  className="req-photo"
                  src="/req_revisiones.jpeg"
                  alt=""
                  onError={() => {}}
                />
              </div>
              <div>
                <h4
                  data-i18n="det.t2"
                  style={
                    {
                      fontSize: ".95rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 5px",
                    } as any
                  }
                >
                  Revisiones Técnicas
                </h4>
                <p
                  data-i18n="det.d2"
                  style={
                    {
                      fontSize: ".82rem",
                      color: "var(--gris)",
                      margin: 0,
                      lineHeight: "1.5",
                    } as any
                  }
                >
                  Vigencia, patente, firma y sello del taller. Verifica que el
                  documento corresponde al vehículo o equipo declarado.
                </p>
              </div>
            </div>
            <div
              className="det-card"
              style={
                {
                  background: "white",
                  border: "1px solid var(--linea)",
                  borderRadius: 16,
                  padding: "22px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                } as any
              }
            >
              <div
                className="det-icon"
                style={
                  {
                    flexShrink: 0,
                    lineHeight: 1,
                    width: 44,
                    height: 44,
                    background: "#EDE9FE",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  } as any
                }
              >
                <span
                  className="req-emoji"
                  style={{ fontSize: "1.8rem" } as any}
                >
                  🪪
                </span>
                <img
                  className="req-photo"
                  src="/req_identidad.jpeg"
                  alt=""
                  onError={() => {}}
                />
              </div>
              <div>
                <h4
                  data-i18n="det.t3"
                  style={
                    {
                      fontSize: ".95rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 5px",
                    } as any
                  }
                >
                  Identidad y RUT
                </h4>
                <p
                  data-i18n="det.d3"
                  style={
                    {
                      fontSize: ".82rem",
                      color: "var(--gris)",
                      margin: 0,
                      lineHeight: "1.5",
                    } as any
                  }
                >
                  Cruza el RUT del trabajador en todos los documentos. Si hay
                  inconsistencia entre un certificado y otro, la IA la detecta
                  al instante.
                </p>
              </div>
            </div>
            <div
              className="det-card"
              style={
                {
                  background: "white",
                  border: "1px solid var(--linea)",
                  borderRadius: 16,
                  padding: "22px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                } as any
              }
            >
              <div
                className="det-icon"
                style={
                  {
                    flexShrink: 0,
                    lineHeight: 1,
                    width: 44,
                    height: 44,
                    background: "#FEE2E2",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  } as any
                }
              >
                <span
                  className="req-emoji"
                  style={{ fontSize: "1.8rem" } as any}
                >
                  ✍️
                </span>
                <img
                  className="req-photo"
                  src="/req_firmas.jpeg"
                  alt=""
                  onError={() => {}}
                />
              </div>
              <div>
                <h4
                  data-i18n="det.t4"
                  style={
                    {
                      fontSize: ".95rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 5px",
                    } as any
                  }
                >
                  Firmas y Sellos
                </h4>
                <p
                  data-i18n="det.d4"
                  style={
                    {
                      fontSize: ".82rem",
                      color: "var(--gris)",
                      margin: 0,
                      lineHeight: "1.5",
                    } as any
                  }
                >
                  Detecta documentos sin firma o sello del responsable — una de
                  las causas más frecuentes de rechazo en garita que ningún
                  humano a contrarreloj siempre ve.
                </p>
              </div>
            </div>
            <div
              className="det-card"
              style={
                {
                  background: "white",
                  border: "1px solid var(--linea)",
                  borderRadius: 16,
                  padding: "22px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                } as any
              }
            >
              <div
                className="det-icon"
                style={
                  {
                    flexShrink: 0,
                    lineHeight: 1,
                    width: 44,
                    height: 44,
                    background: "#DBEAFE",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  } as any
                }
              >
                <span
                  className="req-emoji"
                  style={{ fontSize: "1.8rem" } as any}
                >
                  📋
                </span>
                <img
                  className="req-photo"
                  src="/req_certificados.jpeg"
                  alt=""
                  onError={() => {}}
                />
              </div>
              <div>
                <h4
                  data-i18n="det.t5"
                  style={
                    {
                      fontSize: ".95rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 5px",
                    } as any
                  }
                >
                  Certificados e Inducciones
                </h4>
                <p
                  data-i18n="det.d5"
                  style={
                    {
                      fontSize: ".82rem",
                      color: "var(--gris)",
                      margin: 0,
                      lineHeight: "1.5",
                    } as any
                  }
                >
                  Vigencia, nombre del trabajador, faena correspondiente. Revisa
                  que la inducción sea la correcta para el mandante al que
                  ingresa.
                </p>
              </div>
            </div>
            <div
              className="det-card"
              style={
                {
                  background: "white",
                  border: "1px solid var(--linea)",
                  borderRadius: 16,
                  padding: "22px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                } as any
              }
            >
              <div
                className="det-icon"
                style={
                  {
                    flexShrink: 0,
                    lineHeight: 1,
                    width: 44,
                    height: 44,
                    background: "#FFF7ED",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  } as any
                }
              >
                <span
                  className="req-emoji"
                  style={{ fontSize: "1.8rem" } as any}
                >
                  🚜
                </span>
                <img
                  className="req-photo"
                  src="/req_estandar.jpeg"
                  alt=""
                  onError={() => {}}
                />
              </div>
              <div>
                <h4
                  data-i18n="det.t6"
                  style={
                    {
                      fontSize: ".95rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 5px",
                    } as any
                  }
                >
                  Estándar de Equipos
                </h4>
                <p
                  data-i18n="det.d6"
                  style={
                    {
                      fontSize: ".82rem",
                      color: "var(--gris)",
                      margin: 0,
                      lineHeight: "1.5",
                    } as any
                  }
                >
                  Verifica que la maquinaria cumple el estándar exigido por la
                  faena: dispositivos de seguridad, revisiones periódicas y
                  documentos del operador.
                </p>
              </div>
            </div>
            <div
              className="det-card"
              style={
                {
                  background: "white",
                  border: "1px solid var(--linea)",
                  borderRadius: 16,
                  padding: "22px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                } as any
              }
            >
              <div
                className="det-icon"
                style={
                  {
                    flexShrink: 0,
                    lineHeight: 1,
                    width: 44,
                    height: 44,
                    background: "#F0FDF4",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  } as any
                }
              >
                <span
                  className="req-emoji"
                  style={{ fontSize: "1.8rem" } as any}
                >
                  🛡️
                </span>
                <img
                  className="req-photo"
                  src="/req_polizas.jpeg"
                  alt=""
                  onError={() => {}}
                />
              </div>
              <div>
                <h4
                  data-i18n="det.t7"
                  style={
                    {
                      fontSize: ".95rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 5px",
                    } as any
                  }
                >
                  Pólizas y Seguros
                </h4>
                <p
                  data-i18n="det.d7"
                  style={
                    {
                      fontSize: ".82rem",
                      color: "var(--gris)",
                      margin: 0,
                      lineHeight: "1.5",
                    } as any
                  }
                >
                  Vigencia, montos mínimos de cobertura y que el asegurado
                  corresponda. Detecta pólizas vencidas o con cobertura
                  insuficiente para el mandante.
                </p>
              </div>
            </div>
            <div
              className="det-card"
              style={
                {
                  background: "white",
                  border: "1px solid var(--linea)",
                  borderRadius: 16,
                  padding: "22px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                } as any
              }
            >
              <div
                className="det-icon"
                style={
                  {
                    flexShrink: 0,
                    lineHeight: 1,
                    width: 44,
                    height: 44,
                    background: "#F1F5F9",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  } as any
                }
              >
                <span
                  className="req-emoji"
                  style={{ fontSize: "1.8rem" } as any}
                >
                  ⚠️
                </span>
                <img
                  className="req-photo"
                  src="/req_borrosa.jpeg"
                  alt=""
                  onError={() => {}}
                />
              </div>
              <div>
                <h4
                  data-i18n="det.t8"
                  style={
                    {
                      fontSize: ".95rem",
                      fontWeight: 800,
                      color: "var(--azul)",
                      margin: "0 0 5px",
                    } as any
                  }
                >
                  Documentos Ilegibles o Incompletos
                </h4>
                <p
                  data-i18n="det.d8"
                  style={
                    {
                      fontSize: ".82rem",
                      color: "var(--gris)",
                      margin: 0,
                      lineHeight: "1.5",
                    } as any
                  }
                >
                  Detecta archivos de baja calidad, fotos torcidas, PDFs
                  corruptos o páginas que faltan — antes de que el mandante los
                  rechace.
                </p>
              </div>
            </div>
            <div
              className="det-card"
              style={
                {
                  background: "linear-gradient(135deg,#0F172A,#1E3A5F)",
                  border: "1px solid rgba(139,170,255,.2)",
                  borderRadius: 16,
                  padding: "22px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                } as any
              }
            >
              <div
                className="det-icon"
                style={
                  {
                    flexShrink: 0,
                    lineHeight: 1,
                    width: 44,
                    height: 44,
                    background: "rgba(61,98,245,.2)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  } as any
                }
              >
                <span
                  className="req-emoji"
                  style={{ fontSize: "1.8rem" } as any}
                >
                  🔗
                </span>
                <img
                  className="req-photo"
                  src="/req_consistencia.jpeg"
                  alt=""
                  onError={() => {}}
                />
              </div>
              <div>
                <h4
                  data-i18n="det.t9"
                  style={
                    {
                      fontSize: ".95rem",
                      fontWeight: 800,
                      color: "#F1F5F9",
                      margin: "0 0 5px",
                    } as any
                  }
                >
                  Consistencia entre Documentos
                </h4>
                <p
                  data-i18n="det.d9"
                  style={
                    {
                      fontSize: ".82rem",
                      color: "#94A3B8",
                      margin: 0,
                      lineHeight: "1.5",
                    } as any
                  }
                >
                  Si el nombre en el carnet no calza con el del examen, o la
                  patente del documento no es la del vehículo declarado — la IA
                  lo detecta cruzando todos los archivos de la carpeta entre sí.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
