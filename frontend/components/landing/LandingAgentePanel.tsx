"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingAgentePanel() {
  const router = useRouter();
  return (
    <>
      {/* AGENTE IA PANEL (estilo Spaceflow.tech) */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .aw-mount{position:absolute;bottom:0;border-radius:40% 60% 0 0/100% 100% 0 0}\n  @media(max-width:960px){\n    .aw-grid{grid-template-columns:1fr !important}\n    .aw-panel{margin-top:40px}\n    .aw-body{grid-template-columns:1fr !important}\n  }\n  ",
        }}
      />
      <section
        style={
          {
            background:
              "linear-gradient(180deg,#EEF1F5 0%,#E4EAF5 55%,#DCE6F5 100%)",
            padding: "88px 6% 0",
            position: "relative",
            overflow: "hidden",
          } as any
        }
      >
        <div
          className="aw-mount"
          style={
            {
              left: "-10%",
              width: "55%",
              height: 220,
              background: "#8BAAFF",
              opacity: ".35",
            } as any
          }
        />
        <div
          className="aw-mount"
          style={
            {
              left: "20%",
              width: "60%",
              height: 280,
              background: "#3D62F5",
              opacity: ".3",
            } as any
          }
        />
        <div
          className="aw-mount"
          style={
            {
              right: "-15%",
              width: "60%",
              height: 240,
              background: "#1E3A8A",
              opacity: ".28",
            } as any
          }
        />
        <div
          className="aw-grid"
          style={
            {
              position: "relative",
              maxWidth: 1280,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: ".8fr 1.2fr",
              gap: 40,
              alignItems: "center",
            } as any
          }
        >
          <div>
            <span
              style={
                {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#fff",
                  border: "1px solid rgba(61,98,245,.15)",
                  borderRadius: 20,
                  padding: "7px 14px 7px 8px",
                  boxShadow: "0 4px 14px rgba(15,23,42,.06)",
                } as any
              }
            >
              <span
                style={
                  {
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    background: "#1D4ED8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  } as any
                }
              >
                <svg
                  style={{ width: 12, height: 11 } as any}
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 12 L92 86 L66 86 L50 48 L34 86 L8 86 Z"
                    fill="#fff"
                  />
                </svg>
              </span>
              <span
                data-i18n="awp.badge"
                style={
                  {
                    fontSize: ".78rem",
                    fontWeight: 700,
                    color: "#0F172A",
                  } as any
                }
              >
                9 faenas ya en producción
              </span>
            </span>
            <h1
              data-i18n="awp.h1"
              style={
                {
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "#0F172A",
                  lineHeight: "1.08",
                  margin: "20px 0 22px",
                } as any
              }
            >
              Acreditación con IA, sin transformar tu equipo.
            </h1>
            <p
              data-i18n="awp.p"
              style={
                {
                  color: "#475569",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  maxWidth: 480,
                  margin: "0 0 32px",
                } as any
              }
            >
              ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span>{" "}
              despliega Agentes Acreditadores IA que trabajan dentro de las
              plataformas que ya usas — Workmate, SIGA, Metacontratas, Pronexo,
              AQS — revisando documentos, contactando trabajadores y
              actualizando tus contratos, todos los días.
            </p>
            <button
              data-i18n="awp.cta"
              className="btn-hero-main"
              onClick={() => {}}
            >
              Empezar gratis →
            </button>
          </div>
          <div
            className="aw-panel"
            style={
              {
                background: "#fff",
                borderRadius: 20,
                border: "1px solid rgba(15,23,42,.08)",
                boxShadow: "0 40px 90px -20px rgba(15,23,42,.25)",
                overflow: "hidden",
              } as any
            }
          >
            <div
              data-i18n="awp.breadcrumb"
              style={
                {
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 20px",
                  borderBottom: "1px solid var(--linea)",
                  fontSize: ".78rem",
                  color: "#94A3B8",
                } as any
              }
            >
              <svg
                style={{ width: 14, height: 13, flexShrink: 0 } as any}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 12 L92 86 L66 86 L50 48 L34 86 L8 86 Z"
                  fill="#1D4ED8"
                />
              </svg>
              <span>Agentes IA</span>
              <span>/</span>
              <span style={{ color: "#0F172A", fontWeight: 700 } as any}>
                Agente Acreditador
              </span>
            </div>
            <div
              className="aw-body"
              style={
                { display: "grid", gridTemplateColumns: ".85fr 1.15fr" } as any
              }
            >
              <div
                style={
                  {
                    padding: 20,
                    borderRight: "1px solid var(--linea)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  } as any
                }
              >
                <div>
                  <div
                    style={
                      {
                        fontSize: ".65rem",
                        color: "#94A3B8",
                        fontWeight: 700,
                        marginBottom: 4,
                      } as any
                    }
                  >
                    #AA-01
                  </div>
                  <h3
                    data-i18n="awp.cardtitle"
                    style={
                      {
                        fontSize: "1.05rem",
                        fontWeight: 900,
                        color: "#0F172A",
                        margin: "0 0 6px",
                      } as any
                    }
                  >
                    Agente Acreditador IA
                  </h3>
                  <p
                    data-i18n="awp.carddesc"
                    style={
                      {
                        fontSize: ".78rem",
                        color: "#64748B",
                        lineHeight: "1.55",
                        margin: 0,
                      } as any
                    }
                  >
                    Detecta vencimientos, contacta al trabajador y actualiza el
                    contrato antes de que llegue a garita.
                  </p>
                </div>
                <div style={{ display: "flex", gap: 8 } as any}>
                  <span
                    data-i18n="awp.runbtn"
                    style={
                      {
                        background: "#3D62F5",
                        color: "#fff",
                        fontSize: ".75rem",
                        fontWeight: 700,
                        padding: "7px 14px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    ▶ Ejecutar
                  </span>
                  <span
                    data-i18n="awp.editbtn"
                    style={
                      {
                        background: "#F1F5F9",
                        color: "#0F172A",
                        fontSize: ".75rem",
                        fontWeight: 700,
                        padding: "7px 14px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    Editar
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      fontSize: ".78rem",
                      paddingTop: 8,
                      borderTop: "1px solid var(--linea)",
                    } as any
                  }
                >
                  <div
                    data-i18n="awp.stat1"
                    style={
                      {
                        display: "flex",
                        justifyContent: "space-between",
                      } as any
                    }
                  >
                    <span style={{ color: "#94A3B8" } as any}>
                      Alertas esta semana
                    </span>
                    <b style={{ color: "#0F172A" } as any}>11</b>
                  </div>
                  <div
                    data-i18n="awp.stat2"
                    style={
                      {
                        display: "flex",
                        justifyContent: "space-between",
                      } as any
                    }
                  >
                    <span style={{ color: "#94A3B8" } as any}>
                      Esperando confirmación
                    </span>
                    <b style={{ color: "#0F172A" } as any}>1</b>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      fontSize: ".78rem",
                      paddingTop: 8,
                      borderTop: "1px solid var(--linea)",
                    } as any
                  }
                >
                  <div
                    data-i18n="awp.st1"
                    style={
                      {
                        display: "flex",
                        justifyContent: "space-between",
                      } as any
                    }
                  >
                    <span style={{ color: "#94A3B8" } as any}>Estado</span>
                    <b style={{ color: "#16A34A" } as any}>Activo</b>
                  </div>
                  <div
                    data-i18n="awp.st2"
                    style={
                      {
                        display: "flex",
                        justifyContent: "space-between",
                      } as any
                    }
                  >
                    <span style={{ color: "#94A3B8" } as any}>Rol</span>
                    <b style={{ color: "#0F172A" } as any}>Acreditación</b>
                  </div>
                  <div
                    data-i18n="awp.st3"
                    style={
                      {
                        display: "flex",
                        justifyContent: "space-between",
                      } as any
                    }
                  >
                    <span style={{ color: "#94A3B8" } as any}>Cadencia</span>
                    <b style={{ color: "#0F172A" } as any}>
                      Todos los días 08:00
                    </b>
                  </div>
                  <div
                    data-i18n="awp.st4"
                    style={
                      {
                        display: "flex",
                        justifyContent: "space-between",
                      } as any
                    }
                  >
                    <span style={{ color: "#94A3B8" } as any}>
                      Próxima ejecución
                    </span>
                    <b style={{ color: "#0F172A" } as any}>en 21 horas</b>
                  </div>
                </div>
                <div
                  style={
                    {
                      paddingTop: 8,
                      borderTop: "1px solid var(--linea)",
                    } as any
                  }
                >
                  <div
                    data-i18n="awp.systems"
                    style={
                      {
                        fontSize: ".72rem",
                        color: "#94A3B8",
                        marginBottom: 6,
                      } as any
                    }
                  >
                    Sistemas
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: 6 } as any}
                  >
                    <span
                      style={
                        {
                          background: "#F1F5F9",
                          color: "#334155",
                          fontSize: ".68rem",
                          fontWeight: 600,
                          padding: "4px 9px",
                          borderRadius: 6,
                        } as any
                      }
                    >
                      Workmate
                    </span>
                    <span
                      style={
                        {
                          background: "#F1F5F9",
                          color: "#334155",
                          fontSize: ".68rem",
                          fontWeight: 600,
                          padding: "4px 9px",
                          borderRadius: 6,
                        } as any
                      }
                    >
                      SIGA
                    </span>
                    <span
                      style={
                        {
                          background: "#F1F5F9",
                          color: "#334155",
                          fontSize: ".68rem",
                          fontWeight: 600,
                          padding: "4px 9px",
                          borderRadius: 6,
                        } as any
                      }
                    >
                      WhatsApp
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ padding: "16px 20px" } as any}>
                <div
                  data-i18n="awp.tabsrow"
                  style={
                    {
                      display: "flex",
                      gap: 16,
                      fontSize: ".76rem",
                      color: "#94A3B8",
                      fontWeight: 700,
                      borderBottom: "1px solid var(--linea)",
                      paddingBottom: 10,
                      marginBottom: 14,
                      flexWrap: "wrap",
                    } as any
                  }
                >
                  <span
                    style={
                      {
                        color: "#0F172A",
                        borderBottom: "2px solid #3D62F5",
                        paddingBottom: 9,
                        marginBottom: "-11px",
                      } as any
                    }
                  >
                    Actividad
                  </span>
                  <span>Chat</span>
                  <span>Ejecuciones</span>
                  <span>Hallazgos</span>
                  <span>Integraciones</span>
                  <span>Config</span>
                </div>
                <div
                  id="awScenarioTabs"
                  style={
                    {
                      display: "flex",
                      gap: 6,
                      marginBottom: 14,
                      flexWrap: "wrap",
                    } as any
                  }
                >
                  <button
                    type="button"
                    onClick={() => {}}
                    className="aw-sc-btn"
                    data-awtab={0}
                    style={
                      {
                        borderWidth: "medium",
                        borderStyle: "none",
                        borderColor: "currentcolor",
                        borderImage: "none",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        padding: "6px 12px",
                        borderRadius: 20,
                        cursor: "pointer",
                        background: "rgb(241, 245, 249)",
                        color: "rgb(51, 65, 85)",
                      } as any
                    }
                  >
                    🩺 <span data-i18n="awp.sc1">Exámenes</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {}}
                    className="aw-sc-btn"
                    data-awtab={1}
                    style={
                      {
                        borderWidth: "medium",
                        borderStyle: "none",
                        borderColor: "currentcolor",
                        borderImage: "none",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        padding: "6px 12px",
                        borderRadius: 20,
                        cursor: "pointer",
                        background: "rgb(241, 245, 249)",
                        color: "rgb(51, 65, 85)",
                      } as any
                    }
                  >
                    🎓 <span data-i18n="awp.sc2">Cursos</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {}}
                    className="aw-sc-btn"
                    data-awtab={2}
                    style={
                      {
                        borderWidth: "medium",
                        borderStyle: "none",
                        borderColor: "currentcolor",
                        borderImage: "none",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        padding: "6px 12px",
                        borderRadius: 20,
                        cursor: "pointer",
                        background: "rgb(61, 98, 245)",
                        color: "rgb(255, 255, 255)",
                      } as any
                    }
                  >
                    📄 <span data-i18n="awp.sc3">Hoja de vida</span>
                  </button>
                </div>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 14 } as any
                  }
                >
                  <div style={{ display: "flex", gap: 10 } as any}>
                    <span
                      style={
                        {
                          color: "#16A34A",
                          fontWeight: 900,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ✓
                    </span>
                    <div>
                      <div
                        data-i18n="awp.act1t"
                        style={
                          {
                            fontSize: ".8rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Ejecución iniciada{" "}
                        <span
                          style={{ color: "#94A3B8", fontWeight: 600 } as any}
                        >
                          · 08:00 AM
                        </span>
                      </div>
                      <div
                        data-i18n="awp.act1d"
                        style={
                          {
                            fontSize: ".76rem",
                            color: "#64748B",
                            marginTop: 1,
                          } as any
                        }
                      >
                        Revisión diaria de vencimientos en todos los contratos
                        activos.
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10 } as any}>
                    <span
                      style={
                        {
                          color: "#16A34A",
                          fontWeight: 900,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ✓
                    </span>
                    <div style={{ flex: 1 } as any}>
                      <div
                        id="awAct2t"
                        style={
                          {
                            fontSize: ".8rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Alerta detectada{" "}
                        <span
                          style={{ color: "#94A3B8", fontWeight: 600 } as any}
                        >
                          · 8:01 AM
                        </span>
                      </div>
                      <div
                        id="awAct2d"
                        style={
                          {
                            fontSize: ".76rem",
                            color: "#64748B",
                            marginTop: 1,
                          } as any
                        }
                      >
                        Hoja de vida desactualizada (+90 días) — Francisco A.,
                        El Teniente.
                      </div>
                      <div
                        style={
                          {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 6,
                            marginTop: 8,
                          } as any
                        }
                      >
                        <span
                          id="awTag1"
                          style={
                            {
                              background: "#F8FAFF",
                              border: "1px solid var(--linea)",
                              color: "#475569",
                              fontSize: ".65rem",
                              padding: "3px 8px",
                              borderRadius: 6,
                            } as any
                          }
                        >
                          contrato · tnt02
                        </span>
                        <span
                          id="awTag2"
                          style={
                            {
                              background: "#F8FAFF",
                              border: "1px solid var(--linea)",
                              color: "#475569",
                              fontSize: ".65rem",
                              padding: "3px 8px",
                              borderRadius: 6,
                            } as any
                          }
                        >
                          doc · hoja de vida
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10 } as any}>
                    <span
                      style={
                        {
                          color: "#16A34A",
                          fontWeight: 900,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ✓
                    </span>
                    <div>
                      <div
                        id="awAct3t"
                        style={
                          {
                            fontSize: ".8rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Dato{" "}
                        <span
                          style={{ color: "#94A3B8", fontWeight: 600 } as any}
                        >
                          · 8:02 AM
                        </span>
                      </div>
                      <div
                        id="awAct3d"
                        style={
                          {
                            fontSize: ".76rem",
                            color: "#64748B",
                            marginTop: 1,
                          } as any
                        }
                      >
                        La ficha fue emitida hace{" "}
                        <b style={{ color: "#0F172A" } as any}>94 días</b>;
                        SUCAL exige actualización cada 90 días.
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10 } as any}>
                    <span
                      style={
                        {
                          color: "#16A34A",
                          fontWeight: 900,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ✓
                    </span>
                    <div>
                      <div
                        id="awAct4t"
                        style={
                          {
                            fontSize: ".8rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Contactó al trabajador{" "}
                        <span
                          style={{ color: "#94A3B8", fontWeight: 600 } as any}
                        >
                          · 8:03 AM
                        </span>{" "}
                        <span
                          style={
                            {
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".6rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                              marginLeft: 4,
                            } as any
                          }
                        >
                          whatsapp.send
                        </span>
                      </div>
                      <div
                        id="awAct4d"
                        style={
                          {
                            fontSize: ".76rem",
                            color: "#64748B",
                            marginTop: 1,
                          } as any
                        }
                      >
                        Pidió a Francisco enviar su hoja de vida actualizada por
                        WhatsApp.
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10 } as any}>
                    <span
                      style={
                        {
                          color: "#16A34A",
                          fontWeight: 900,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ✓
                    </span>
                    <div>
                      <div
                        id="awAct5t"
                        style={
                          {
                            fontSize: ".8rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Hallazgo{" "}
                        <span
                          style={{ color: "#94A3B8", fontWeight: 600 } as any}
                        >
                          · 9:00 AM
                        </span>
                      </div>
                      <div
                        id="awAct5d"
                        style={
                          {
                            fontSize: ".76rem",
                            color: "#64748B",
                            marginTop: 1,
                          } as any
                        }
                      >
                        Francisco envió el documento; la IA validó formato,
                        firma y vigencia.
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10 } as any}>
                    <span
                      id="awAct6icon"
                      style={
                        {
                          color: "rgb(22, 163, 74)",
                          fontWeight: 900,
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ✓
                    </span>
                    <div>
                      <div
                        id="awAct6t"
                        style={
                          {
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: "rgb(22, 163, 74)",
                          } as any
                        }
                      >
                        Actualizado — sin pendientes{" "}
                        <span
                          style={{ color: "#94A3B8", fontWeight: 600 } as any}
                        >
                          · 9:15 AM
                        </span>
                      </div>
                      <div
                        id="awAct6d"
                        style={
                          {
                            fontSize: ".76rem",
                            color: "#64748B",
                            marginTop: 1,
                          } as any
                        }
                      >
                        Hoja de vida cargada y validada. Contrato al día, sin
                        necesidad de intervención humana.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 64 } as any} />
      </section>
    </>
  );
}
