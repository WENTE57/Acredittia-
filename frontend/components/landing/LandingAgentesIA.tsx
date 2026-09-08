"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingAgentesIA() {
  const router = useRouter();
  return (
    <>
      {/* AGENTES ACREDITADORES IA */}
      <section
        className="hs-sect-pad"
        id="agentes-ia"
        style={
          {
            background: "linear-gradient(135deg,#080E1C 0%,#0F172A 100%)",
            padding: "84px 6%",
            position: "relative",
            overflow: "hidden",
          } as any
        }
      >
        <div
          style={
            {
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%,rgba(37,211,102,.08) 0%,transparent 70%)",
              pointerEvents: "none",
            } as any
          }
        />
        <div
          style={
            { maxWidth: 1180, margin: "0 auto", position: "relative" } as any
          }
        >
          <div
            style={
              {
                textAlign: "center",
                maxWidth: 760,
                margin: "0 auto 8px",
              } as any
            }
          >
            <span
              className="sec-label"
              style={{ color: "#25D366" } as any}
              data-i18n="agia.label"
            >
              NUESTRA VENTAJA · AGENTES IA
            </span>
            <h2
              style={
                {
                  fontSize: "2.3rem",
                  fontWeight: 900,
                  color: "#F1F5F9",
                  margin: "14px 0 18px",
                  lineHeight: "1.2",
                } as any
              }
              data-i18n="agia.h2"
            >
              Tu equipo ya no tiene que perseguir
              <br />a nadie. Los Agentes IA lo hacen.
            </h2>
            <p
              style={
                {
                  color: "#94A3B8",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  margin: "0 auto",
                } as any
              }
              data-i18n="agia.p"
            >
              No somos solo una plataforma que revisa documentos. Cada
              trabajador tiene un{" "}
              <b style={{ color: "#F1F5F9" } as any}>Agente Acreditador IA</b>{" "}
              asignado que lo contacta por{" "}
              <b style={{ color: "#F1F5F9" } as any}>
                WhatsApp, correo y llamada
              </b>{" "}
              — para pedirle documentos, recordarle vencimientos y agendarle
              exámenes o cursos, antes de que se convierta en un problema en
              garita.
            </p>
          </div>
          {/* channel pills */}
          <div
            style={
              {
                display: "flex",
                justifyContent: "center",
                gap: 10,
                flexWrap: "wrap",
                margin: "26px 0 0",
              } as any
            }
          >
            <span
              className="agia-pill"
              style={
                {
                  background: "rgba(37,211,102,.12)",
                  border: "1px solid rgba(37,211,102,.3)",
                  color: "#25D366",
                } as any
              }
            >
              <span
                className="agia-live-dot"
                style={{ background: "#25D366" } as any}
              />
              <span data-i18n="agia.pill1">💬 WhatsApp</span>
            </span>
            <span
              className="agia-pill"
              style={
                {
                  background: "rgba(61,98,245,.14)",
                  border: "1px solid rgba(61,98,245,.35)",
                  color: "#8BAAFF",
                } as any
              }
            >
              <span
                className="agia-live-dot"
                style={{ background: "#8BAAFF" } as any}
              />
              <span data-i18n="agia.pill2">📧 Correo</span>
            </span>
            <span
              className="agia-pill"
              style={
                {
                  background: "rgba(245,158,11,.12)",
                  border: "1px solid rgba(245,158,11,.3)",
                  color: "#FBBF24",
                } as any
              }
            >
              <span
                className="agia-live-dot"
                style={{ background: "#FBBF24" } as any}
              />
              <span data-i18n="agia.pill3">📞 Llamada</span>
            </span>
            <span
              className="agia-pill"
              style={
                {
                  background: "rgba(139,170,255,.1)",
                  border: "1px solid rgba(139,170,255,.25)",
                  color: "#C7D6FF",
                } as any
              }
              data-i18n="agia.pill4"
            >
              🗓️ Agenda exámenes y cursos
            </span>
          </div>
          <div
            className="agia-grid"
            style={
              {
                display: "grid",
                gridTemplateColumns: "1.05fr .95fr",
                gap: 56,
                alignItems: "center",
                marginTop: 44,
              } as any
            }
          >
            <div>
              <div
                style={
                  { display: "flex", flexDirection: "column", gap: 18 } as any
                }
              >
                <div
                  style={
                    {
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "rgba(37,211,102,.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    💬
                  </div>
                  <div>
                    <b
                      style={{ color: "#F1F5F9", fontSize: ".95rem" } as any}
                      data-i18n="agia.f1t"
                    >
                      Solicita documentos por WhatsApp y correo
                    </b>
                    <p
                      style={
                        {
                          color: "#94A3B8",
                          fontSize: ".85rem",
                          margin: "4px 0 0",
                          lineHeight: "1.5",
                        } as any
                      }
                      data-i18n="agia.f1d"
                    >
                      El agente escribe directo al trabajador pidiéndole el
                      documento o curso pendiente, y hace seguimiento por el
                      canal que responda hasta que quede resuelto.
                    </p>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "rgba(245,158,11,.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    ⏰
                  </div>
                  <div>
                    <b
                      style={{ color: "#F1F5F9", fontSize: ".95rem" } as any}
                      data-i18n="agia.f2t"
                    >
                      Recuerda vencimientos antes de que sean problema
                    </b>
                    <p
                      style={
                        {
                          color: "#94A3B8",
                          fontSize: ".85rem",
                          margin: "4px 0 0",
                          lineHeight: "1.5",
                        } as any
                      }
                      data-i18n="agia.f2d"
                    >
                      Exámenes, licencias y cursos por vencer se avisan con días
                      de anticipación — no cuando el trabajador ya quedó fuera
                      de garita.
                    </p>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "rgba(139,170,255,.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    🗓️
                  </div>
                  <div>
                    <b
                      style={{ color: "#F1F5F9", fontSize: ".95rem" } as any}
                      data-i18n="agia.f3t"
                    >
                      Agenda exámenes y cursos por su cuenta
                    </b>
                    <p
                      style={
                        {
                          color: "#94A3B8",
                          fontSize: ".85rem",
                          margin: "4px 0 0",
                          lineHeight: "1.5",
                        } as any
                      }
                      data-i18n="agia.f3d"
                    >
                      Coordina la hora con el proveedor autorizado y se la
                      propone al trabajador — cuando confirma, queda agendado
                      sin que nadie tenga que llamar.
                    </p>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "rgba(61,98,245,.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    📞
                  </div>
                  <div>
                    <b
                      style={{ color: "#F1F5F9", fontSize: ".95rem" } as any}
                      data-i18n="agia.f4t"
                    >
                      Llama cuando no hay respuesta
                    </b>
                    <p
                      style={
                        {
                          color: "#94A3B8",
                          fontSize: ".85rem",
                          margin: "4px 0 0",
                          lineHeight: "1.5",
                        } as any
                      }
                      data-i18n="agia.f4d"
                    >
                      Si el trabajador no contesta el mensaje ni el correo, la
                      IA insiste con una llamada — sin que la encargada de
                      acreditación tenga que marcar un número.
                    </p>
                  </div>
                </div>
              </div>
              {/* stats row */}
              <div
                style={
                  {
                    display: "flex",
                    marginTop: 32,
                    borderTop: "1px solid rgba(255,255,255,.1)",
                    paddingTop: 6,
                  } as any
                }
              >
                <div className="agia-stat">
                  <b>3</b>
                  <span data-i18n="agia.s1">
                    canales por trabajador
                    <br />
                    WhatsApp · Correo · Llamada
                  </span>
                </div>
                <div className="agia-stat">
                  <b>24/7</b>
                  <span data-i18n="agia.s2">
                    agentes activos
                    <br />
                    sin turnos ni horario
                  </span>
                </div>
                <div className="agia-stat">
                  <b>0</b>
                  <span data-i18n="agia.s3">
                    llamadas manuales
                    <br />
                    de tu equipo
                  </span>
                </div>
              </div>
            </div>
            <div>
              {/* live multichannel feed */}
              <div
                style={
                  {
                    background: "#0B1220",
                    border: "1px solid rgba(139,170,255,.14)",
                    borderRadius: 18,
                    padding: "14px 16px",
                    marginBottom: 14,
                    boxShadow: "0 12px 32px rgba(0,0,0,.3)",
                  } as any
                }
              >
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 10,
                      fontSize: ".68rem",
                      fontWeight: 700,
                      color: "#64748B",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                    } as any
                  }
                >
                  <span
                    className="agia-live-dot"
                    style={{ background: "#25D366" } as any}
                  />
                  <span data-i18n="agia.feedtitle">
                    Agentes trabajando ahora
                  </span>
                </div>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 6 } as any
                  }
                >
                  <div className="agia-feed-row">
                    <span style={{ fontSize: ".9rem" } as any}>💬</span>
                    <span
                      style={
                        { fontSize: ".78rem", color: "#E2E8F0", flex: 1 } as any
                      }
                      data-i18n="agia.feed1"
                    >
                      WhatsApp · Rodrigo M. — recordatorio de examen enviado
                    </span>
                    <span
                      style={{ fontSize: ".68rem", color: "#64748B" } as any}
                    >
                      8s
                    </span>
                  </div>
                  <div className="agia-feed-row">
                    <span style={{ fontSize: ".9rem" } as any}>📞</span>
                    <span
                      style={
                        { fontSize: ".78rem", color: "#E2E8F0", flex: 1 } as any
                      }
                      data-i18n="agia.feed2"
                    >
                      Llamada · Camila R. — agendando examen de altura
                    </span>
                    <span
                      style={{ fontSize: ".68rem", color: "#64748B" } as any}
                    >
                      22s
                    </span>
                  </div>
                  <div className="agia-feed-row">
                    <span style={{ fontSize: ".9rem" } as any}>📧</span>
                    <span
                      style={
                        { fontSize: ".78rem", color: "#E2E8F0", flex: 1 } as any
                      }
                      data-i18n="agia.feed3"
                    >
                      Correo · Diego P. — solicitando licencia de conducir
                    </span>
                    <span
                      style={{ fontSize: ".68rem", color: "#64748B" } as any}
                    >
                      41s
                    </span>
                  </div>
                </div>
              </div>
              {/* chat mockup */}
              <div
                style={
                  {
                    background: "#0B1220",
                    border: "1px solid rgba(139,170,255,.18)",
                    borderRadius: 22,
                    padding: 22,
                    boxShadow: "0 24px 64px rgba(0,0,0,.4)",
                  } as any
                }
              >
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 16,
                      paddingBottom: 14,
                      borderBottom: "1px solid rgba(255,255,255,.08)",
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "#25D366",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                      } as any
                    }
                  >
                    🤖
                  </div>
                  <div>
                    <div
                      style={
                        {
                          color: "#F1F5F9",
                          fontWeight: 800,
                          fontSize: ".9rem",
                        } as any
                      }
                      data-i18n="agia.chatname"
                    >
                      Agente Acreditador IA
                    </div>
                    <div
                      style={
                        {
                          color: "#25D366",
                          fontSize: ".72rem",
                          fontWeight: 700,
                        } as any
                      }
                      data-i18n="agia.chatstatus"
                    >
                      ● Activo por WhatsApp
                    </div>
                  </div>
                </div>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 10 } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#1E293B",
                        color: "#E2E8F0",
                        fontSize: ".82rem",
                        lineHeight: "1.5",
                        padding: "10px 14px",
                        borderRadius: "14px 14px 14px 4px",
                        maxWidth: "88%",
                      } as any
                    }
                    data-i18n="agia.chat1"
                  >
                    Hola Rodrigo 👋 tu examen de altura vence en 5 días para Los
                    Pelambres. ¿Ya tienes hora agendada?
                  </div>
                  <div
                    style={
                      {
                        background: "#25D366",
                        color: "#04210F",
                        fontSize: ".82rem",
                        lineHeight: "1.5",
                        padding: "10px 14px",
                        borderRadius: "14px 14px 4px 14px",
                        maxWidth: "80%",
                        alignSelf: "flex-end",
                        fontWeight: 600,
                      } as any
                    }
                    data-i18n="agia.chat2"
                  >
                    Aún no, no había visto el mensaje
                  </div>
                  <div
                    style={
                      {
                        background: "#1E293B",
                        color: "#E2E8F0",
                        fontSize: ".82rem",
                        lineHeight: "1.5",
                        padding: "10px 14px",
                        borderRadius: "14px 14px 14px 4px",
                        maxWidth: "88%",
                      } as any
                    }
                    data-i18n="agia.chat3"
                  >
                    Sin problema. Te dejo hora disponible en Mutual Los Andes
                    mañana 9:00 AM. Si no confirmas hoy, te llamo. 📞
                  </div>
                  <div
                    style={
                      {
                        background: "#1E293B",
                        color: "#E2E8F0",
                        fontSize: ".82rem",
                        lineHeight: "1.5",
                        padding: "10px 14px",
                        borderRadius: "14px 14px 14px 4px",
                        maxWidth: "88%",
                        opacity: ".75",
                      } as any
                    }
                    data-i18n="agia.chat4"
                  >
                    ✅ Documento recibido y validado. Contrato CT-45641 al día.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
