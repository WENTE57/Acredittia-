"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingTarget() {
  const router = useRouter();
  return (
    <>
      {/* PARA QUIÉN ES ACREDITTIA: FAENAS Y PROVEEDORES */}
      <section style={{ background: "#fff", padding: "76px 6%" } as any}>
        <div style={{ maxWidth: 1100, margin: "0 auto" } as any}>
          <div style={{ textAlign: "center", marginBottom: 44 } as any}>
            <span data-i18n="whoq.label" className="sec-label">
              PARA QUIÉN ES ACREDIT
              <span style={{ color: "#1D4ED8" } as any}>TIA</span>
            </span>
            <h2
              data-i18n="whoq.h2"
              style={
                {
                  fontSize: "2.1rem",
                  fontWeight: 900,
                  color: "var(--azul)",
                  margin: "12px 0 14px",
                } as any
              }
            >
              Una plataforma, dos lados de la acreditación resueltos.
            </h2>
            <p
              data-i18n="whoq.p"
              style={
                {
                  color: "var(--gris)",
                  maxWidth: 680,
                  margin: "0 auto",
                  fontSize: "1rem",
                } as any
              }
            >
              Trabajamos para que a la faena nunca se le atrase la operación, y
              para que la empresa proveedora nunca pierda tiempo ni plata
              persiguiendo documentos.
            </p>
          </div>
          <div
            style={
              {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                gap: 24,
              } as any
            }
          >
            {/* FAENAS / MANDANTE */}
            <div
              className="hs-feat-card"
              style={{ textAlign: "left", padding: 0 } as any}
            >
              <div
                style={
                  {
                    height: 180,
                    overflow: "hidden",
                    position: "relative",
                  } as any
                }
              >
                <img
                  src="/whoq_faena.jpeg"
                  alt="Faena minera — acceso controlado"
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
                        "linear-gradient(to top,rgba(10,16,32,.75) 0%,transparent 55%)",
                    } as any
                  }
                />
              </div>
              <div style={{ padding: "24px 28px 28px" } as any}>
                <span
                  data-i18n="whoq.faena.tag"
                  style={
                    {
                      display: "inline-block",
                      background: "rgba(61,98,245,.08)",
                      color: "var(--azul)",
                      fontSize: ".68rem",
                      fontWeight: 800,
                      letterSpacing: ".06em",
                      padding: "4px 10px",
                      borderRadius: 20,
                      marginBottom: 12,
                    } as any
                  }
                >
                  PARA LA FAENA / MANDANTE
                </span>
                <h3
                  data-i18n="whoq.faena.title"
                  style={
                    {
                      fontSize: "1.22rem",
                      fontWeight: 900,
                      color: "var(--azul)",
                      margin: "0 0 16px",
                      lineHeight: "1.3",
                    } as any
                  }
                >
                  Que tus proveedores acrediten rápido — y no se te atrase la
                  operación.
                </h3>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 11 } as any
                  }
                >
                  <div
                    data-i18n="whoq.faena.b1"
                    style={
                      {
                        display: "flex",
                        gap: 10,
                        fontSize: ".88rem",
                        color: "var(--gris)",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    <span
                      style={
                        {
                          color: "var(--cyan)",
                          fontWeight: 700,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      →
                    </span>
                    Tus empresas proveedoras acreditan más rápido y con muchos
                    menos rechazos.
                  </div>
                  <div
                    data-i18n="whoq.faena.b2"
                    style={
                      {
                        display: "flex",
                        gap: 10,
                        fontSize: ".88rem",
                        color: "var(--gris)",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    <span
                      style={
                        {
                          color: "var(--cyan)",
                          fontWeight: 700,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      →
                    </span>
                    Monitoreo automático de vencimientos — nadie llega a garita
                    con un documento caducado.
                  </div>
                  <div
                    data-i18n="whoq.faena.b3"
                    style={
                      {
                        display: "flex",
                        gap: 10,
                        fontSize: ".88rem",
                        color: "var(--gris)",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    <span
                      style={
                        {
                          color: "var(--cyan)",
                          fontWeight: 700,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      →
                    </span>
                    Un Agente IA guía a cada proveedor paso a paso, sin que tu
                    equipo tenga que explicar lo mismo mil veces.
                  </div>
                  <div
                    data-i18n="whoq.faena.b4"
                    style={
                      {
                        display: "flex",
                        gap: 10,
                        fontSize: ".88rem",
                        color: "var(--gris)",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    <span
                      style={
                        {
                          color: "var(--cyan)",
                          fontWeight: 700,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      →
                    </span>
                    Libera horas-hombre del área de prevención de riesgos, que
                    hoy se van en perseguir papeles.
                  </div>
                </div>
              </div>
            </div>
            {/* EMPRESA PROVEEDORA */}
            <div
              className="hs-feat-card"
              style={{ textAlign: "left", padding: 0 } as any}
            >
              <div
                style={
                  {
                    height: 180,
                    overflow: "hidden",
                    position: "relative",
                  } as any
                }
              >
                <img
                  src="/whoq_proveedor.jpeg"
                  alt="Trabajador de empresa proveedora en faena"
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
                        "linear-gradient(to top,rgba(10,16,32,.75) 0%,transparent 55%)",
                    } as any
                  }
                />
              </div>
              <div style={{ padding: "24px 28px 28px" } as any}>
                <span
                  data-i18n="whoq.prov.tag"
                  style={
                    {
                      display: "inline-block",
                      background: "rgba(16,185,129,.1)",
                      color: "#059669",
                      fontSize: ".68rem",
                      fontWeight: 800,
                      letterSpacing: ".06em",
                      padding: "4px 10px",
                      borderRadius: 20,
                      marginBottom: 12,
                    } as any
                  }
                >
                  PARA LA EMPRESA PROVEEDORA
                </span>
                <h3
                  data-i18n="whoq.prov.title"
                  style={
                    {
                      fontSize: "1.22rem",
                      fontWeight: 900,
                      color: "var(--azul)",
                      margin: "0 0 16px",
                      lineHeight: "1.3",
                    } as any
                  }
                >
                  Acredítate rápido, fluido y sin sorpresas — en todas tus
                  faenas a la vez.
                </h3>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 11 } as any
                  }
                >
                  <div
                    data-i18n="whoq.prov.b1"
                    style={
                      {
                        display: "flex",
                        gap: 10,
                        fontSize: ".88rem",
                        color: "var(--gris)",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    <span
                      style={
                        {
                          color: "var(--cyan)",
                          fontWeight: 700,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      →
                    </span>
                    Acreditación más rápida y fluida, sin idas y vueltas con el
                    mandante.
                  </div>
                  <div
                    data-i18n="whoq.prov.b2"
                    style={
                      {
                        display: "flex",
                        gap: 10,
                        fontSize: ".88rem",
                        color: "var(--gris)",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    <span
                      style={
                        {
                          color: "var(--cyan)",
                          fontWeight: 700,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      →
                    </span>
                    Revisión automática de vencimientos, para que ningún
                    documento te caduque sin avisar.
                  </div>
                  <div
                    data-i18n="whoq.prov.b3"
                    style={
                      {
                        display: "flex",
                        gap: 10,
                        fontSize: ".88rem",
                        color: "var(--gris)",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    <span
                      style={
                        {
                          color: "var(--cyan)",
                          fontWeight: 700,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      →
                    </span>
                    Sabes exactamente qué requisitos específicos exige cada
                    faena — sin adivinar ni llamar a preguntar.
                  </div>
                  <div
                    data-i18n="whoq.prov.b4"
                    style={
                      {
                        display: "flex",
                        gap: 10,
                        fontSize: ".88rem",
                        color: "var(--gris)",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    <span
                      style={
                        {
                          color: "var(--cyan)",
                          fontWeight: 700,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      →
                    </span>
                    Te conectas directo con la plataforma de cada mandante —
                    SIGA, Workmate, Metacontratas y más.
                  </div>
                  <div
                    data-i18n="whoq.prov.b5"
                    style={
                      {
                        display: "flex",
                        gap: 10,
                        fontSize: ".88rem",
                        color: "var(--gris)",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    <span
                      style={
                        {
                          color: "var(--cyan)",
                          fontWeight: 700,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      →
                    </span>
                    Gestiona varias acreditaciones, en distintas faenas y
                    distintas plataformas, desde un solo lugar con seguimiento
                    centralizado.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ALERTAS AUTOMÁTICAS POR CORREO */}
      <section
        style={
          {
            background: "linear-gradient(180deg,#fff 0%,#F8FAFF 100%)",
            padding: "80px 6%",
          } as any
        }
      >
        <div
          style={
            {
              maxWidth: 1140,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
              gap: 56,
              alignItems: "center",
            } as any
          }
        >
          <div>
            <span data-i18n="mail.label" className="sec-label">
              SIEMPRE UN PASO ADELANTE
            </span>
            <h2
              data-i18n="mail.h2"
              style={
                {
                  fontSize: "2.1rem",
                  fontWeight: 900,
                  color: "var(--azul)",
                  margin: "14px 0 16px",
                  lineHeight: "1.25",
                } as any
              }
            >
              Empiezas el día ya sabiendo qué falta — por correo.
            </h2>
            <p
              data-i18n="mail.p"
              style={
                {
                  color: "var(--gris)",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  marginBottom: 28,
                } as any
              }
            >
              No necesitas a alguien recordándote los vencimientos. ACREDIT
              <span style={{ color: "#1D4ED8" } as any}>TIA</span> te manda
              alertas automáticas por correo con todo lo próximo a vencer, todo
              lo que falta y todo lo que queda por agendar — para que nunca te
              descuides.
            </p>
            <div
              style={
                { display: "flex", flexDirection: "column", gap: 16 } as any
              }
            >
              <div
                style={
                  { display: "flex", gap: 14, alignItems: "flex-start" } as any
                }
              >
                <div
                  style={
                    {
                      width: 38,
                      height: 38,
                      borderRadius: 11,
                      background: "rgba(61,98,245,.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    } as any
                  }
                >
                  📧
                </div>
                <div>
                  <div
                    data-i18n="mail.b1t"
                    style={
                      {
                        fontWeight: 800,
                        color: "var(--azul)",
                        fontSize: ".94rem",
                        marginBottom: 2,
                      } as any
                    }
                  >
                    Empiezas el día ya informado
                  </div>
                  <div
                    data-i18n="mail.b1d"
                    style={
                      {
                        color: "var(--gris)",
                        fontSize: ".85rem",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    Apenas parte tu jornada, te llega un correo con todo lo
                    próximo a vencer y lo que falta por agendar.
                  </div>
                </div>
              </div>
              <div
                style={
                  { display: "flex", gap: 14, alignItems: "flex-start" } as any
                }
              >
                <div
                  style={
                    {
                      width: 38,
                      height: 38,
                      borderRadius: 11,
                      background: "rgba(61,98,245,.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    } as any
                  }
                >
                  🔔
                </div>
                <div>
                  <div
                    data-i18n="mail.b2t"
                    style={
                      {
                        fontWeight: 800,
                        color: "var(--azul)",
                        fontSize: ".94rem",
                        marginBottom: 2,
                      } as any
                    }
                  >
                    Distintas alertas para distintas urgencias
                  </div>
                  <div
                    data-i18n="mail.b2d"
                    style={
                      {
                        color: "var(--gris)",
                        fontSize: ".85rem",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    Vencimientos, documentos faltantes, exámenes por agendar —
                    cada tipo de alerta llega por su cuenta, no como un solo
                    correo genérico.
                  </div>
                </div>
              </div>
              <div
                style={
                  { display: "flex", gap: 14, alignItems: "flex-start" } as any
                }
              >
                <div
                  style={
                    {
                      width: 38,
                      height: 38,
                      borderRadius: 11,
                      background: "rgba(61,98,245,.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    } as any
                  }
                >
                  🙅
                </div>
                <div>
                  <div
                    data-i18n="mail.b3t"
                    style={
                      {
                        fontWeight: 800,
                        color: "var(--azul)",
                        fontSize: ".94rem",
                        marginBottom: 2,
                      } as any
                    }
                  >
                    Ya no depende de que alguien se acuerde
                  </div>
                  <div
                    data-i18n="mail.b3d"
                    style={
                      {
                        color: "var(--gris)",
                        fontSize: ".85rem",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    Ya no necesitas una persona avisándote de los vencimientos —
                    es la plataforma la que te escribe, sola y a tiempo.
                  </div>
                </div>
              </div>
              <div
                style={
                  { display: "flex", gap: 14, alignItems: "flex-start" } as any
                }
              >
                <div
                  style={
                    {
                      width: 38,
                      height: 38,
                      borderRadius: 11,
                      background: "rgba(61,98,245,.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    } as any
                  }
                >
                  🛡️
                </div>
                <div>
                  <div
                    data-i18n="mail.b4t"
                    style={
                      {
                        fontWeight: 800,
                        color: "var(--azul)",
                        fontSize: ".94rem",
                        marginBottom: 2,
                      } as any
                    }
                  >
                    Nunca te descuidas
                  </div>
                  <div
                    data-i18n="mail.b4d"
                    style={
                      {
                        color: "var(--gris)",
                        fontSize: ".85rem",
                        lineHeight: "1.55",
                      } as any
                    }
                  >
                    Con alertas llegando solas a tu correo, ningún vencimiento
                    te toma por sorpresa.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={
                {
                  background: "#fff",
                  border: "1px solid var(--linea)",
                  borderRadius: 20,
                  boxShadow: "0 20px 50px rgba(30,58,138,.1)",
                  overflow: "hidden",
                } as any
              }
            >
              <div
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "16px 20px",
                    borderBottom: "1px solid var(--linea)",
                    background: "#F8FAFF",
                  } as any
                }
              >
                <div
                  style={
                    {
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: "linear-gradient(135deg,#3D62F5,#2448E0)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: ".95rem",
                      flexShrink: 0,
                    } as any
                  }
                >
                  📧
                </div>
                <div style={{ minWidth: 0 } as any}>
                  <div
                    style={
                      {
                        fontWeight: 800,
                        color: "var(--azul)",
                        fontSize: ".85rem",
                      } as any
                    }
                    data-i18n="mail.inboxname"
                  >
                    ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span>{" "}
                    Alertas
                  </div>
                  <div
                    style={{ color: "var(--gris)", fontSize: ".7rem" } as any}
                    data-i18n="mail.inboxaddr"
                  >
                    alertas@acredittia.cl
                  </div>
                </div>
                <div
                  style={
                    {
                      marginLeft: "auto",
                      fontSize: ".7rem",
                      color: "var(--gris)",
                      flexShrink: 0,
                    } as any
                  }
                  data-i18n="mail.inboxtime"
                >
                  Hoy, 7:02 AM
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" } as any}>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      padding: "16px 20px",
                      borderBottom: "1px solid var(--linea)",
                    } as any
                  }
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 } as any}>
                    ⚠️
                  </span>
                  <div style={{ minWidth: 0 } as any}>
                    <div
                      data-i18n="mail.e1t"
                      style={
                        {
                          fontWeight: 800,
                          color: "var(--azul)",
                          fontSize: ".86rem",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      3 documentos vencen esta semana — Andina
                    </div>
                    <div
                      data-i18n="mail.e1d"
                      style={
                        {
                          color: "var(--gris)",
                          fontSize: ".78rem",
                          lineHeight: "1.5",
                        } as any
                      }
                    >
                      Revisión técnica, examen de altura y licencia de conducir
                      de tu equipo. Revisa y agenda antes del viernes.
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      padding: "16px 20px",
                      borderBottom: "1px solid var(--linea)",
                    } as any
                  }
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 } as any}>
                    🗓️
                  </span>
                  <div style={{ minWidth: 0 } as any}>
                    <div
                      data-i18n="mail.e2t"
                      style={
                        {
                          fontWeight: 800,
                          color: "var(--azul)",
                          fontSize: ".86rem",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      Falta agendar examen de altura — Rodrigo M.
                    </div>
                    <div
                      data-i18n="mail.e2d"
                      style={
                        {
                          color: "var(--gris)",
                          fontSize: ".78rem",
                          lineHeight: "1.5",
                        } as any
                      }
                    >
                      Su certificado actual vence en 12 días y aún no tiene hora
                      reservada.
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      padding: "16px 20px",
                      borderBottom: "1px solid var(--linea)",
                    } as any
                  }
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 } as any}>
                    📋
                  </span>
                  <div style={{ minWidth: 0 } as any}>
                    <div
                      data-i18n="mail.e3t"
                      style={
                        {
                          fontWeight: 800,
                          color: "var(--azul)",
                          fontSize: ".86rem",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      2 certificados por renovar — Los Pelambres
                    </div>
                    <div
                      data-i18n="mail.e3d"
                      style={
                        {
                          color: "var(--gris)",
                          fontSize: ".78rem",
                          lineHeight: "1.5",
                        } as any
                      }
                    >
                      Padrón y permiso de circulación de tu tracto-camión
                      LXDY88.
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      padding: "16px 20px",
                      background: "#F0FDF4",
                    } as any
                  }
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 } as any}>
                    ✅
                  </span>
                  <div style={{ minWidth: 0 } as any}>
                    <div
                      data-i18n="mail.e4t"
                      style={
                        {
                          fontWeight: 800,
                          color: "#047857",
                          fontSize: ".86rem",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      Resumen diario: 28 vigentes, 4 por vencer, 1 vencido
                    </div>
                    <div
                      data-i18n="mail.e4d"
                      style={
                        {
                          color: "#059669",
                          fontSize: ".78rem",
                          lineHeight: "1.5",
                        } as any
                      }
                    >
                      Así partes el día sabiendo exactamente dónde estás parado,
                      sin abrir la plataforma.
                    </div>
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
