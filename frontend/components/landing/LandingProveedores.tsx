"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingProveedores() {
  const router = useRouter();
  return (
    <>
      {/* RED DE PROVEEDORES AUTORIZADOS */}
      <section
        className="hs-sect-pad"
        id="red-autorizada"
        style={
          {
            background: "linear-gradient(180deg,#fff 0%,#F8FAFF 100%)",
            padding: "84px 6%",
          } as any
        }
      >
        <div
          style={
            {
              maxWidth: 1180,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1.05fr",
              gap: 56,
              alignItems: "center",
            } as any
          }
        >
          <div>
            <span
              className="sec-label"
              style={{ color: "#D97706" } as any}
              data-i18n="red.label"
            >
              RED DE PROVEEDORES AUTORIZADOS
            </span>
            <h2
              style={
                {
                  fontSize: "2.3rem",
                  fontWeight: 900,
                  color: "var(--azul)",
                  margin: "14px 0 18px",
                  lineHeight: "1.2",
                } as any
              }
              data-i18n="red.h2"
            >
              No busques por tu cuenta.
              <br />
              Te conectamos con quien ya está autorizado.
            </h2>
            <p
              style={
                {
                  color: "var(--gris)",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  margin: "0 0 28px",
                } as any
              }
              data-i18n="red.p"
            >
              Cada faena exige que los exámenes ocupacionales y las inspecciones
              de equipos se hagan con proveedores autorizados por el mandante.
              ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span> sabe
              exactamente cuáles son en cada faena y te conecta directo con
              ellos — sin buscar, sin llamar uno por uno.
            </p>
            <div
              style={
                { display: "flex", flexDirection: "column", gap: 18 } as any
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
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      overflow: "hidden",
                      flexShrink: 0,
                    } as any
                  }
                >
                  <img
                    src="/red_examen.jpeg"
                    alt="Laboratorio autorizado"
                    style={
                      {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      } as any
                    }
                    onError={() => {}}
                  />
                </div>
                <div>
                  <b
                    style={{ color: "var(--azul)", fontSize: ".95rem" } as any}
                    data-i18n="red.f1t"
                  >
                    Laboratorios autorizados por faena
                  </b>
                  <p
                    style={
                      {
                        color: "var(--gris)",
                        fontSize: ".85rem",
                        margin: "4px 0 0",
                        lineHeight: "1.5",
                      } as any
                    }
                    data-i18n="red.f1d"
                  >
                    Mutual, ACHS u otros: te mostramos cuáles están autorizados
                    para exámenes ocupacionales en cada faena y te conectamos
                    para agendar hora.
                  </p>
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
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      overflow: "hidden",
                      flexShrink: 0,
                    } as any
                  }
                >
                  <img
                    src="/red_talleres.jpeg"
                    alt="Taller autorizado para inspección visual"
                    style={
                      {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      } as any
                    }
                    onError={() => {}}
                  />
                </div>
                <div>
                  <b
                    style={{ color: "var(--azul)", fontSize: ".95rem" } as any}
                    data-i18n="red.f2t"
                  >
                    Talleres autorizados para inspección visual
                  </b>
                  <p
                    style={
                      {
                        color: "var(--gris)",
                        fontSize: ".85rem",
                        margin: "4px 0 0",
                        lineHeight: "1.5",
                      } as any
                    }
                    data-i18n="red.f2d"
                  >
                    Cuando un equipo necesita inspección visual para su
                    estándar, te conectamos con los talleres autorizados por esa
                    faena para coordinar la revisión.
                  </p>
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
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      overflow: "hidden",
                      flexShrink: 0,
                    } as any
                  }
                >
                  <img
                    src="/red_estandar.jpeg"
                    alt="Empresa de estándar de equipos"
                    style={
                      {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      } as any
                    }
                    onError={() => {}}
                  />
                </div>
                <div>
                  <b
                    style={{ color: "var(--azul)", fontSize: ".95rem" } as any}
                    data-i18n="red.f3t"
                  >
                    Empresas de estándar de equipos
                  </b>
                  <p
                    style={
                      {
                        color: "var(--gris)",
                        fontSize: ".85rem",
                        margin: "4px 0 0",
                        lineHeight: "1.5",
                      } as any
                    }
                    data-i18n="red.f3d"
                  >
                    Si tu grúa, alzahombre o excavadora necesita adaptaciones,
                    te conectamos con empresas especializadas en poner tu
                    maquinaria al estándar exacto del mandante.
                  </p>
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
                  borderRadius: 22,
                  padding: 22,
                  boxShadow: "0 24px 64px rgba(30,58,95,.1)",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: ".78rem",
                    fontWeight: 700,
                    color: "var(--gris)",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    marginBottom: 14,
                    paddingBottom: 14,
                    borderBottom: "1px solid var(--linea)",
                  } as any
                }
                data-i18n="red.cardtitle"
              >
                Proveedores autorizados cerca de ti
              </div>
              <div
                style={
                  { display: "flex", flexDirection: "column", gap: 10 } as any
                }
              >
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 14px",
                      background: "var(--bg)",
                      borderRadius: 14,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "#DCFCE7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    🔬
                  </div>
                  <div style={{ flex: 1 } as any}>
                    <div
                      style={
                        {
                          fontWeight: 800,
                          color: "var(--azul)",
                          fontSize: ".88rem",
                        } as any
                      }
                    >
                      Mutual Los Andes
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".75rem",
                          color: "#15803D",
                          fontWeight: 700,
                        } as any
                      }
                      data-i18n="red.row1"
                    >
                      ✓ Autorizado · Los Pelambres
                    </div>
                  </div>
                  <span
                    style={
                      {
                        fontSize: ".75rem",
                        fontWeight: 700,
                        color: "var(--cyan)",
                        whiteSpace: "nowrap",
                      } as any
                    }
                    data-i18n="red.cta1"
                  >
                    Agendar →
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 14px",
                      background: "var(--bg)",
                      borderRadius: 14,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "#EDE9FE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    🔧
                  </div>
                  <div style={{ flex: 1 } as any}>
                    <div
                      style={
                        {
                          fontWeight: 800,
                          color: "var(--azul)",
                          fontSize: ".88rem",
                        } as any
                      }
                    >
                      Talleres Rectifica S.A.
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".75rem",
                          color: "#15803D",
                          fontWeight: 700,
                        } as any
                      }
                      data-i18n="red.row2"
                    >
                      ✓ Autorizado · Centinela
                    </div>
                  </div>
                  <span
                    style={
                      {
                        fontSize: ".75rem",
                        fontWeight: 700,
                        color: "var(--cyan)",
                        whiteSpace: "nowrap",
                      } as any
                    }
                    data-i18n="red.cta2"
                  >
                    Coordinar →
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 14px",
                      background: "var(--bg)",
                      borderRadius: 14,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "#FEE2E2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    🏗️
                  </div>
                  <div style={{ flex: 1 } as any}>
                    <div
                      style={
                        {
                          fontWeight: 800,
                          color: "var(--azul)",
                          fontSize: ".88rem",
                        } as any
                      }
                    >
                      EquipEstándar SpA
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".75rem",
                          color: "#15803D",
                          fontWeight: 700,
                        } as any
                      }
                      data-i18n="red.row3"
                    >
                      ✓ Autorizado · El Teniente
                    </div>
                  </div>
                  <span
                    style={
                      {
                        fontSize: ".75rem",
                        fontWeight: 700,
                        color: "var(--cyan)",
                        whiteSpace: "nowrap",
                      } as any
                    }
                    data-i18n="red.cta3"
                  >
                    Solicitar →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* VIDEO SECTION */}
      <section
        style={
          {
            background: "var(--bg)",
            padding: "72px 6% 80px",
            textAlign: "center",
          } as any
        }
      >
        <div style={{ maxWidth: 960, margin: "0 auto" } as any}>
          <span className="sec-label" data-i18n="vid.label">
            VE CÓMO FUNCIONA
          </span>
          <h2
            style={
              {
                fontSize: "2rem",
                fontWeight: 900,
                color: "var(--azul)",
                margin: "12px 0 16px",
              } as any
            }
            data-i18n="vid.h2"
          >
            Una plataforma construida
            <br />
            para cualquier industria
          </h2>
          <p
            style={
              {
                color: "var(--gris)",
                fontSize: "1rem",
                maxWidth: 560,
                margin: "0 auto 36px",
                lineHeight: "1.65",
              } as any
            }
            data-i18n="vid.p"
          >
            Integración completa con cada faena, IA que revisa tus documentos y
            visibilidad total de todos tus proyectos — desde un solo lugar.
          </p>
          <div
            style={
              {
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(36,72,224,.18)",
                border: "1px solid var(--linea)",
                background: "#000",
                position: "relative",
              } as any
            }
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={
                {
                  width: "100%",
                  display: "block",
                  maxHeight: 560,
                  objectFit: "cover",
                } as any
              }
              poster=""
            >
              <source
                src="/haz_un_video_como_este_estilo.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <p
            style={
              { marginTop: 20, color: "#94A3B8", fontSize: ".85rem" } as any
            }
          >
            <span data-i18n="vid.ready">
              ¿Listo para integrar tu primera faena?
            </span>
            <button
              onClick={() => router.push("/login")}
              style={
                {
                  background: "none",
                  border: "none",
                  color: "var(--cyan)",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: ".85rem",
                  padding: 0,
                  marginLeft: 4,
                } as any
              }
              data-i18n="vid.cta"
            >
              Solicitar acceso →
            </button>
          </p>
        </div>
      </section>
      {/* MOCKUP SECTION */}
      <section className="mockup-section" id="plataforma">
        <div className="ms-head">
          <span data-i18n="mock.label" className="sec-label">
            ASÍ SE VE LA PLATAFORMA
          </span>
          <h2 data-i18n="mock.h2">
            Rápido, fácil y claro.
            <br />
            Sin volverte loco.
          </h2>
          <p data-i18n="mock.p">
            Un solo panel para ver todas tus acreditaciones, sin importar
            cuántas faenas o plataformas tenga cada una.
          </p>
        </div>
        {/* Tabs */}
        <div className="mock-tabs">
          <div
            data-i18n="mock.tab1"
            className="mock-tab active"
            onClick={() => {}}
          >
            🏠 Inicio
          </div>
          <div data-i18n="mock.tab2" className="mock-tab" onClick={() => {}}>
            📋 Contratos
          </div>
          <div data-i18n="mock.tab3" className="mock-tab" onClick={() => {}}>
            👥 Personal
          </div>
          <div data-i18n="mock.tab4" className="mock-tab" onClick={() => {}}>
            🚛 Equipos
          </div>
          <div data-i18n="mock.tab5" className="mock-tab" onClick={() => {}}>
            🏔️ Faenas
          </div>
          <div data-i18n="mock.tab6" className="mock-tab" onClick={() => {}}>
            📊 Reportes
          </div>
          <div data-i18n="mock.tab7" className="mock-tab" onClick={() => {}}>
            🔔 Alertas IA
          </div>
        </div>
        {/* shared sidebar helper: new nav */}
        {/* SCREEN 1: Dashboard */}
        <div id="mock-dashboard" className="mock-screen show">
          <div className="browser-frame">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div data-i18n="dash.url" className="browser-url">
                🔒 acredittia.cl · Inicio
              </div>
            </div>
            <div className="mock-app" style={{ background: "#F8FAFC" } as any}>
              {/* sidebar */}
              <div
                className="mock-sidebar"
                style={
                  {
                    background: "#0F172A",
                    borderRight: "1px solid #1E3A5F",
                    gap: 2,
                    padding: "14px 10px",
                  } as any
                }
              >
                <div
                  className="mock-logo"
                  style={
                    {
                      paddingBottom: 14,
                      borderBottom: "1px solid #F1F5F9",
                      marginBottom: 10,
                    } as any
                  }
                >
                  <svg
                    style={{ width: 15, height: 13 } as any}
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50 12 L92 86 L66 86 L50 48 L34 86 L8 86 Z"
                      fill="#1D4ED8"
                    />
                  </svg>
                  <span>
                    ACREDIT
                    <span
                      style={{ color: "#1D4ED8", marginLeft: "-.08em" } as any}
                    >
                      TIA
                    </span>
                  </span>
                </div>
                {/* user chip */}
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: 8,
                      borderRadius: 10,
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid #1E3A5F",
                      marginBottom: 10,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#3D62F5,#6B8FFF)",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: 700,
                        fontSize: ".72rem",
                        color: "#fff",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    T
                  </div>
                  <div>
                    <div
                      style={
                        {
                          fontSize: ".72rem",
                          fontWeight: 600,
                          color: "#F1F5F9",
                        } as any
                      }
                    >
                      Tiex SpA
                    </div>
                    <div
                      data-i18n="dash.roleadmin"
                      style={{ fontSize: ".6rem", color: "#64748B" } as any}
                    >
                      Administrador
                    </div>
                  </div>
                </div>
                <div
                  data-i18n="nav.inicio"
                  className="mock-nav-item active"
                  style={
                    { background: "rgba(61,98,245,.2)", color: "#fff" } as any
                  }
                >
                  🏠 Inicio
                </div>
                <div data-i18n="nav.contratos" className="mock-nav-item">
                  📋 Contratos
                </div>
                <div data-i18n="nav.faenas" className="mock-nav-item">
                  🏔️ Faenas
                </div>
                <div data-i18n="nav.personal" className="mock-nav-item">
                  👥 Personal
                </div>
                <div data-i18n="nav.equipos" className="mock-nav-item">
                  🚛 Equipos / Vehículos
                </div>
                <div data-i18n="nav.requisitos" className="mock-nav-item">
                  📑 Requisitos
                </div>
                <div data-i18n="nav.reportes" className="mock-nav-item">
                  📊 Reportes
                </div>
                <div data-i18n="nav.alertas" className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={
                      {
                        marginLeft: "auto",
                        background: "#EF4444",
                        color: "#fff",
                        fontSize: ".55rem",
                        padding: "1px 5px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    7
                  </span>
                </div>
                <div data-i18n="nav.calendario" className="mock-nav-item">
                  📅 Calendario
                </div>
                <div data-i18n="nav.integraciones" className="mock-nav-item">
                  🔌 Integraciones
                </div>
              </div>
              {/* main */}
              <div
                className="mock-main"
                style={{ background: "#F8FAFC", padding: "18px 16px" } as any}
              >
                {/* header */}
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 14,
                    } as any
                  }
                >
                  <div>
                    <div
                      data-i18n="dash.hi"
                      style={
                        {
                          fontSize: ".88rem",
                          fontWeight: 700,
                          color: "#0F172A",
                        } as any
                      }
                    >
                      ¡Hola, Tiex!
                    </div>
                    <div
                      data-i18n="dash.hisub"
                      style={{ fontSize: ".62rem", color: "#64748B" } as any}
                    >
                      Resumen de tu operación en todas las faenas
                    </div>
                  </div>
                  <div
                    style={
                      { display: "flex", gap: 6, alignItems: "center" } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 26,
                          height: 26,
                          borderRadius: 8,
                          background: "#fff",
                          border: "1px solid #E2E8F0",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".7rem",
                        } as any
                      }
                    >
                      ?
                    </div>
                    <div
                      style={
                        {
                          width: 26,
                          height: 26,
                          borderRadius: 8,
                          background: "#fff",
                          border: "1px solid #E2E8F0",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                        } as any
                      }
                    >
                      🔔
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          background: "#fff",
                          border: "1px solid #E2E8F0",
                          borderRadius: 10,
                          padding: "4px 8px",
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background:
                              "linear-gradient(135deg,#3D62F5,#6B8FFF)",
                            display: "grid",
                            placeItems: "center",
                            fontSize: ".65rem",
                            fontWeight: 700,
                            color: "#fff",
                          } as any
                        }
                      >
                        T
                      </div>
                      <span
                        style={
                          {
                            fontSize: ".62rem",
                            fontWeight: 600,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Tiex SpA
                      </span>
                    </div>
                  </div>
                </div>
                {/* 5 KPI cards */}
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(5,1fr)",
                      gap: 7,
                      marginBottom: 12,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: "rgba(61,98,245,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".8rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      📋
                    </div>
                    <div data-i18n="dash.kpi1">
                      <div
                        style={{ fontSize: ".55rem", color: "#64748B" } as any}
                      >
                        Contratos activos
                      </div>
                      <div
                        style={
                          {
                            fontSize: "1rem",
                            fontWeight: 900,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        6
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: "rgba(61,98,245,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".8rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      🏔️
                    </div>
                    <div data-i18n="dash.kpi2">
                      <div
                        style={{ fontSize: ".55rem", color: "#64748B" } as any}
                      >
                        Faenas activas
                      </div>
                      <div
                        style={
                          {
                            fontSize: "1rem",
                            fontWeight: 900,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        4
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: "rgba(16,185,129,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".8rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      👥
                    </div>
                    <div data-i18n="dash.kpi3">
                      <div
                        style={{ fontSize: ".55rem", color: "#64748B" } as any}
                      >
                        Personal acreditado
                      </div>
                      <div
                        style={
                          {
                            fontSize: "1rem",
                            fontWeight: 900,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        48
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: "rgba(16,185,129,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".8rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      🚛
                    </div>
                    <div data-i18n="dash.kpi4">
                      <div
                        style={{ fontSize: ".55rem", color: "#64748B" } as any}
                      >
                        Equipos acreditados
                      </div>
                      <div
                        style={
                          {
                            fontSize: "1rem",
                            fontWeight: 900,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        15
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          display: "grid",
                          placeItems: "center",
                          flexShrink: 0,
                          position: "relative",
                        } as any
                      }
                    >
                      <svg width={32} height={32} viewBox="0 0 32 32">
                        <circle
                          cx={16}
                          cy={16}
                          r={11}
                          fill="none"
                          stroke="rgba(255,255,255,.1)"
                          strokeWidth={3}
                        />
                        <circle
                          cx={16}
                          cy={16}
                          r={11}
                          fill="none"
                          stroke="#10B981"
                          strokeWidth={3}
                          strokeDasharray="50 19"
                          strokeLinecap="round"
                          transform="rotate(-90 16 16)"
                        />
                      </svg>
                      <span
                        style={
                          {
                            position: "absolute",
                            fontSize: ".45rem",
                            fontWeight: 900,
                            color: "#10B981",
                          } as any
                        }
                      >
                        76%
                      </span>
                    </div>
                    <div data-i18n="dash.kpi5">
                      <div
                        style={{ fontSize: ".55rem", color: "#64748B" } as any}
                      >
                        Cumplimiento
                      </div>
                      <div
                        style={
                          {
                            fontSize: "1rem",
                            fontWeight: 900,
                            color: "#10B981",
                          } as any
                        }
                      >
                        76%
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2-col bottom */}
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "1.5fr 1fr",
                      gap: 8,
                    } as any
                  }
                >
                  {/* contracts table */}
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        overflow: "hidden",
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          padding: "9px 12px",
                          borderBottom: "1px solid #F1F5F9",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        } as any
                      }
                    >
                      <span
                        data-i18n="dash.contracts.h"
                        style={
                          {
                            fontSize: ".72rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Mis contratos{" "}
                        <span
                          style={
                            {
                              fontWeight: 400,
                              color: "#64748B",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          (6 activos)
                        </span>
                      </span>
                      <span
                        data-i18n="dash.contracts.viewall"
                        style={
                          {
                            fontSize: ".6rem",
                            color: "#38BDF8",
                            fontWeight: 600,
                          } as any
                        }
                      >
                        Ver todos →
                      </span>
                    </div>
                    <div style={{ padding: "0 12px" } as any}>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #F1F5F9" } as any}
                      >
                        <div
                          style={
                            {
                              width: 24,
                              height: 24,
                              borderRadius: 6,
                              background:
                                "linear-gradient(135deg,#3D62F5,#6B8FFF)",
                              display: "grid",
                              placeItems: "center",
                              fontSize: ".6rem",
                              color: "#fff",
                              flexShrink: 0,
                            } as any
                          }
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 } as any}>
                          <div
                            data-i18n="dash.row1"
                            className="mr-name"
                            style={
                              { color: "#0F172A", fontSize: ".68rem" } as any
                            }
                          >
                            MLP Operaciones
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" } as any}
                          >
                            Los Pelambres · SIGA · WORKMATE
                          </div>
                        </div>
                        <div
                          className="mock-bar-wrap"
                          style={{ width: 50 } as any}
                        >
                          <div
                            className="mock-bar-fill"
                            style={
                              { width: "74%", background: "#10B981" } as any
                            }
                          />
                        </div>
                        <span
                          className="mbadge ok"
                          style={{ fontSize: ".55rem" } as any}
                        >
                          74%
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #F1F5F9" } as any}
                      >
                        <div
                          style={
                            {
                              width: 24,
                              height: 24,
                              borderRadius: 6,
                              background:
                                "linear-gradient(135deg,#0891B2,#38BDF8)",
                              display: "grid",
                              placeItems: "center",
                              fontSize: ".6rem",
                              color: "#fff",
                              flexShrink: 0,
                            } as any
                          }
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 } as any}>
                          <div
                            data-i18n="dash.row2"
                            className="mr-name"
                            style={
                              { color: "#0F172A", fontSize: ".68rem" } as any
                            }
                          >
                            Collahuasi CT-7821
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" } as any}
                          >
                            Collahuasi · METACONTRATAS
                          </div>
                        </div>
                        <div
                          className="mock-bar-wrap"
                          style={{ width: 50 } as any}
                        >
                          <div
                            className="mock-bar-fill"
                            style={
                              { width: "58%", background: "#F59E0B" } as any
                            }
                          />
                        </div>
                        <span
                          className="mbadge warn"
                          style={{ fontSize: ".55rem" } as any}
                        >
                          58%
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #F1F5F9" } as any}
                      >
                        <div
                          style={
                            {
                              width: 24,
                              height: 24,
                              borderRadius: 6,
                              background:
                                "linear-gradient(135deg,#059669,#34D399)",
                              display: "grid",
                              placeItems: "center",
                              fontSize: ".6rem",
                              color: "#fff",
                              flexShrink: 0,
                            } as any
                          }
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 } as any}>
                          <div
                            data-i18n="dash.row3"
                            className="mr-name"
                            style={
                              { color: "#0F172A", fontSize: ".68rem" } as any
                            }
                          >
                            Centinela Servicios
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" } as any}
                          >
                            Centinela · WEBCONTROL
                          </div>
                        </div>
                        <div
                          className="mock-bar-wrap"
                          style={{ width: 50 } as any}
                        >
                          <div
                            className="mock-bar-fill"
                            style={
                              { width: "91%", background: "#10B981" } as any
                            }
                          />
                        </div>
                        <span
                          className="mbadge ok"
                          style={{ fontSize: ".55rem" } as any}
                        >
                          91%
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #F1F5F9" } as any}
                      >
                        <div
                          style={
                            {
                              width: 24,
                              height: 24,
                              borderRadius: 6,
                              background:
                                "linear-gradient(135deg,#7C3AED,#A78BFA)",
                              display: "grid",
                              placeItems: "center",
                              fontSize: ".6rem",
                              color: "#fff",
                              flexShrink: 0,
                            } as any
                          }
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 } as any}>
                          <div
                            data-i18n="dash.row4"
                            className="mr-name"
                            style={
                              { color: "#0F172A", fontSize: ".68rem" } as any
                            }
                          >
                            El Teniente Mant.
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" } as any}
                          >
                            El Teniente · SIGA
                          </div>
                        </div>
                        <div
                          className="mock-bar-wrap"
                          style={{ width: 50 } as any}
                        >
                          <div
                            className="mock-bar-fill"
                            style={
                              { width: "83%", background: "#10B981" } as any
                            }
                          />
                        </div>
                        <span
                          className="mbadge ok"
                          style={{ fontSize: ".55rem" } as any}
                        >
                          83%
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #F1F5F9" } as any}
                      >
                        <div
                          style={
                            {
                              width: 24,
                              height: 24,
                              borderRadius: 6,
                              background:
                                "linear-gradient(135deg,#B45309,#FCD34D)",
                              display: "grid",
                              placeItems: "center",
                              fontSize: ".6rem",
                              color: "#fff",
                              flexShrink: 0,
                            } as any
                          }
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 } as any}>
                          <div
                            data-i18n="dash.row5"
                            className="mr-name"
                            style={
                              { color: "#0F172A", fontSize: ".68rem" } as any
                            }
                          >
                            Candelaria Infraestr.
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" } as any}
                          >
                            Candelaria · WEBCONTROL
                          </div>
                        </div>
                        <div
                          className="mock-bar-wrap"
                          style={{ width: 50 } as any}
                        >
                          <div
                            className="mock-bar-fill"
                            style={
                              { width: "42%", background: "#EF4444" } as any
                            }
                          />
                        </div>
                        <span
                          className="mbadge err"
                          style={{ fontSize: ".55rem" } as any}
                        >
                          42%
                        </span>
                      </div>
                      <div className="mock-row">
                        <div
                          style={
                            {
                              width: 24,
                              height: 24,
                              borderRadius: 6,
                              background:
                                "linear-gradient(135deg,#0369A1,#38BDF8)",
                              display: "grid",
                              placeItems: "center",
                              fontSize: ".6rem",
                              color: "#fff",
                              flexShrink: 0,
                            } as any
                          }
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 } as any}>
                          <div
                            data-i18n="dash.row6"
                            className="mr-name"
                            style={
                              { color: "#0F172A", fontSize: ".68rem" } as any
                            }
                          >
                            Zaldívar Operaciones
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" } as any}
                          >
                            Zaldívar · SIGA
                          </div>
                        </div>
                        <div
                          className="mock-bar-wrap"
                          style={{ width: 50 } as any}
                        >
                          <div
                            className="mock-bar-fill"
                            style={
                              { width: "67%", background: "#F59E0B" } as any
                            }
                          />
                        </div>
                        <span
                          className="mbadge warn"
                          style={{ fontSize: ".55rem" } as any}
                        >
                          67%
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* alerts panel */}
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        overflow: "hidden",
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          padding: "9px 12px",
                          borderBottom: "1px solid #F1F5F9",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        } as any
                      }
                    >
                      <span
                        data-i18n="dash.alerts.h"
                        style={
                          {
                            fontSize: ".72rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Alertas recientes
                      </span>
                      <span
                        style={
                          {
                            background: "#fee2e2",
                            color: "#b91c1c",
                            fontSize: ".55rem",
                            fontWeight: 700,
                            padding: "1px 5px",
                            borderRadius: 6,
                          } as any
                        }
                      >
                        10
                      </span>
                    </div>
                    <div style={{ padding: "0 10px" } as any}>
                      <div
                        className="mock-row"
                        style={
                          { borderBottom: "1px solid #F1F5F9", gap: 6 } as any
                        }
                      >
                        <div
                          style={
                            {
                              width: 20,
                              height: 20,
                              borderRadius: 5,
                              background: "#fee2e2",
                              display: "grid",
                              placeItems: "center",
                              fontSize: ".55rem",
                              flexShrink: 0,
                            } as any
                          }
                        >
                          🔴
                        </div>
                        <div style={{ flex: 1, minWidth: 0 } as any}>
                          <div
                            data-i18n="dash.al1"
                            className="mr-name"
                            style={
                              { color: "#b91c1c", fontSize: ".62rem" } as any
                            }
                          >
                            Rev. técnica vencida
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".54rem" } as any}
                          >
                            LXDY88 · hace 3 días
                          </div>
                        </div>
                        <span
                          data-i18n="dash.badge.critica"
                          className="mbadge err"
                          style={{ fontSize: ".5rem" } as any}
                        >
                          Crítica
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={
                          { borderBottom: "1px solid #F1F5F9", gap: 6 } as any
                        }
                      >
                        <div
                          style={
                            {
                              width: 20,
                              height: 20,
                              borderRadius: 5,
                              background: "#fee2e2",
                              display: "grid",
                              placeItems: "center",
                              fontSize: ".55rem",
                              flexShrink: 0,
                            } as any
                          }
                        >
                          🔴
                        </div>
                        <div style={{ flex: 1, minWidth: 0 } as any}>
                          <div
                            data-i18n="dash.al2"
                            className="mr-name"
                            style={
                              { color: "#b91c1c", fontSize: ".62rem" } as any
                            }
                          >
                            Seguro accidentes vencido
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".54rem" } as any}
                          >
                            Empresa · hace 1 día
                          </div>
                        </div>
                        <span
                          data-i18n="dash.badge.critica"
                          className="mbadge err"
                          style={{ fontSize: ".5rem" } as any}
                        >
                          Crítica
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={
                          { borderBottom: "1px solid #F1F5F9", gap: 6 } as any
                        }
                      >
                        <div
                          style={
                            {
                              width: 20,
                              height: 20,
                              borderRadius: 5,
                              background: "#fef3c7",
                              display: "grid",
                              placeItems: "center",
                              fontSize: ".55rem",
                              flexShrink: 0,
                            } as any
                          }
                        >
                          ⚠️
                        </div>
                        <div style={{ flex: 1, minWidth: 0 } as any}>
                          <div
                            data-i18n="dash.al3"
                            className="mr-name"
                            style={
                              { color: "#92400e", fontSize: ".62rem" } as any
                            }
                          >
                            F30-1 por vencer
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".54rem" } as any}
                          >
                            Empresa · en 8 días
                          </div>
                        </div>
                        <span
                          data-i18n="dash.badge.8dias"
                          className="mbadge warn"
                          style={{ fontSize: ".5rem" } as any}
                        >
                          8 días
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={
                          { borderBottom: "1px solid #F1F5F9", gap: 6 } as any
                        }
                      >
                        <div
                          style={
                            {
                              width: 20,
                              height: 20,
                              borderRadius: 5,
                              background: "#fef3c7",
                              display: "grid",
                              placeItems: "center",
                              fontSize: ".55rem",
                              flexShrink: 0,
                            } as any
                          }
                        >
                          ⚠️
                        </div>
                        <div style={{ flex: 1, minWidth: 0 } as any}>
                          <div
                            data-i18n="dash.al4"
                            className="mr-name"
                            style={
                              { color: "#92400e", fontSize: ".62rem" } as any
                            }
                          >
                            Examen altura por vencer
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".54rem" } as any}
                          >
                            Ruiz José · en 12 días
                          </div>
                        </div>
                        <span
                          data-i18n="dash.badge.12dias"
                          className="mbadge warn"
                          style={{ fontSize: ".5rem" } as any}
                        >
                          12 días
                        </span>
                      </div>
                      <div className="mock-row" style={{ gap: 6 } as any}>
                        <div
                          style={
                            {
                              width: 20,
                              height: 20,
                              borderRadius: 5,
                              background: "#dbeafe",
                              display: "grid",
                              placeItems: "center",
                              fontSize: ".55rem",
                              flexShrink: 0,
                            } as any
                          }
                        >
                          ℹ️
                        </div>
                        <div style={{ flex: 1, minWidth: 0 } as any}>
                          <div
                            data-i18n="dash.al5"
                            className="mr-name"
                            style={
                              { color: "#1e40af", fontSize: ".62rem" } as any
                            }
                          >
                            IA: Antigüedad excedida
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".54rem" } as any}
                          >
                            RPDC68 · 17 años vs máx 15
                          </div>
                        </div>
                        <span
                          data-i18n="dash.badge.info"
                          style={
                            {
                              fontSize: ".5rem",
                              background: "#dbeafe",
                              color: "#1e40af",
                              padding: "1px 4px",
                              borderRadius: 4,
                              fontWeight: 700,
                              whiteSpace: "nowrap",
                            } as any
                          }
                        >
                          Info
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mock-ai-guide">
                <div className="mock-ai-bubble">
                  <div data-i18n="dash.sofianame" className="nm">
                    <span className="dot" />
                    Sofía · Asistente IA
                  </div>
                  <div data-i18n="dash.sofiatxt" className="tx">
                    ¡Hola! Tienes <b>3 documentos</b> por vencer esta semana.
                    ¿Te ayudo a revisarlos?
                  </div>
                </div>
                <div className="mock-ai-avatar">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={50} cy={50} r={50} fill="#FDE9D2" />
                    <path
                      d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z"
                      fill="#2448E0"
                    />
                    <path
                      d="M35 95 L50 79 L65 95"
                      stroke="#ffffff"
                      strokeWidth={5}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity=".9"
                    />
                    <path
                      d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z"
                      fill="#F2C49B"
                    />
                    <path
                      d="M27 36 C24 47 26 58 33 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M73 36 C76 47 74 58 67 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx={41} cy={43} r="2.6" fill="#2A1A10" />
                    <circle cx={59} cy={43} r="2.6" fill="#2A1A10" />
                    <path
                      d="M41 54 Q50 60 59 54"
                      stroke="#9a5236"
                      strokeWidth="2.4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z"
                      fill="#f2cda0"
                    />
                    <rect
                      x={19}
                      y={26}
                      width={62}
                      height={6}
                      rx={3}
                      fill="#e0b27c"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SCREEN 2: Contratos (detalle con plataformas) */}
        <div id="mock-docs" className="mock-screen">
          <div className="browser-frame">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-url">
                🔒 acredittia.cl · Contratos › CT-45000641
              </div>
            </div>
            <div className="mock-app" style={{ background: "#F8FAFC" } as any}>
              <div
                className="mock-sidebar"
                style={
                  {
                    background: "#0F172A",
                    borderRight: "1px solid #1E3A5F",
                    gap: 2,
                    padding: "14px 10px",
                  } as any
                }
              >
                <div
                  className="mock-logo"
                  style={
                    {
                      paddingBottom: 14,
                      borderBottom: "1px solid #F1F5F9",
                      marginBottom: 10,
                    } as any
                  }
                >
                  <svg
                    style={{ width: 15, height: 13 } as any}
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50 12 L92 86 L66 86 L50 48 L34 86 L8 86 Z"
                      fill="#1D4ED8"
                    />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span
                      style={{ color: "#1D4ED8", marginLeft: "-.08em" } as any}
                    >
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 8px",
                      borderRadius: 8,
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid #1E3A5F",
                      marginBottom: 8,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#3D62F5,#6B8FFF)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".6rem",
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    T
                  </div>
                  <div
                    style={
                      {
                        fontSize: ".65rem",
                        fontWeight: 600,
                        color: "#F1F5F9",
                      } as any
                    }
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div
                  data-i18n="nav.contratos"
                  className="mock-nav-item active"
                  style={
                    { background: "rgba(61,98,245,.2)", color: "#fff" } as any
                  }
                >
                  📋 Contratos
                </div>
                <div data-i18n="nav.faenas" className="mock-nav-item">
                  🏔️ Faenas
                </div>
                <div data-i18n="nav.personal" className="mock-nav-item">
                  👥 Personal
                </div>
                <div data-i18n="nav.equipos" className="mock-nav-item">
                  🚛 Equipos / Vehículos
                </div>
                <div data-i18n="nav.requisitos" className="mock-nav-item">
                  📑 Requisitos
                </div>
                <div data-i18n="nav.reportes" className="mock-nav-item">
                  📊 Reportes
                </div>
                <div data-i18n="nav.alertas" className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={
                      {
                        marginLeft: "auto",
                        background: "#EF4444",
                        color: "#fff",
                        fontSize: ".55rem",
                        padding: "1px 5px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    7
                  </span>
                </div>
                <div data-i18n="nav.calendario" className="mock-nav-item">
                  📅 Calendario
                </div>
                <div data-i18n="nav.integraciones" className="mock-nav-item">
                  🔌 Integraciones
                </div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#F8FAFC", padding: 16 } as any}
              >
                {/* breadcrumb + title */}
                <div
                  style={
                    {
                      fontSize: ".58rem",
                      color: "#64748B",
                      marginBottom: 8,
                    } as any
                  }
                >
                  Contratos › Detalle del contrato
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 4,
                    } as any
                  }
                >
                  <span
                    style={
                      {
                        fontSize: ".88rem",
                        fontWeight: 800,
                        color: "#0F172A",
                      } as any
                    }
                  >
                    Contrato CT-45000641
                  </span>
                  <span
                    style={
                      {
                        background: "#dcfce7",
                        color: "#15803d",
                        fontSize: ".55rem",
                        fontWeight: 700,
                        padding: "2px 6px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    ● Vigente
                  </span>
                </div>
                <div
                  style={
                    {
                      fontSize: ".62rem",
                      color: "#64748B",
                      marginBottom: 10,
                    } as any
                  }
                >
                  Minera Los Pelambres
                </div>
                {/* platforms row */}
                <div
                  style={
                    {
                      background: "#fff",
                      border: "1px solid #E2E8F0",
                      borderRadius: 10,
                      padding: 10,
                      marginBottom: 10,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        fontSize: ".65rem",
                        fontWeight: 700,
                        color: "#0F172A",
                        marginBottom: 7,
                      } as any
                    }
                  >
                    Plataformas que utiliza Los Pelambres
                  </div>
                  <div
                    style={
                      {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 8,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          border: "1px solid #E2E8F0",
                          borderRadius: 8,
                          padding: "10px 12px",
                          background: "#F8FAFC",
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 6,
                          } as any
                        }
                      >
                        <div
                          style={
                            {
                              fontSize: ".6rem",
                              fontWeight: 900,
                              fontStyle: "italic",
                              color: "#2d6a4f",
                              background: "#e8f5e9",
                              borderRadius: 4,
                              padding: "2px 7px",
                              display: "inline-block",
                            } as any
                          }
                        >
                          siga
                        </div>
                        <span
                          style={
                            {
                              fontSize: ".5rem",
                              background: "#dcfce7",
                              color: "#166534",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 5,
                            } as any
                          }
                        >
                          ● Conectado
                        </span>
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".55rem",
                            color: "#64748B",
                            marginBottom: 2,
                          } as any
                        }
                      >
                        Sistema de Gestión y Acreditación
                      </div>
                      <div
                        style={
                          {
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: 6,
                          } as any
                        }
                      >
                        <div>
                          <div
                            style={
                              { fontSize: ".52rem", color: "#64748B" } as any
                            }
                          >
                            Usuarios
                          </div>
                          <div
                            style={
                              {
                                fontSize: ".9rem",
                                fontWeight: 900,
                                color: "#38BDF8",
                              } as any
                            }
                          >
                            12
                          </div>
                        </div>
                        <div>
                          <div
                            style={
                              { fontSize: ".52rem", color: "#64748B" } as any
                            }
                          >
                            Docs vigentes
                          </div>
                          <div
                            style={
                              {
                                fontSize: ".9rem",
                                fontWeight: 900,
                                color: "#10B981",
                              } as any
                            }
                          >
                            87
                          </div>
                        </div>
                        <div>
                          <div
                            style={
                              { fontSize: ".52rem", color: "#64748B" } as any
                            }
                          >
                            Alertas
                          </div>
                          <div
                            style={
                              {
                                fontSize: ".9rem",
                                fontWeight: 900,
                                color: "#F59E0B",
                              } as any
                            }
                          >
                            3
                          </div>
                        </div>
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".52rem",
                            color: "#38BDF8",
                            marginTop: 5,
                          } as any
                        }
                      >
                        Ver detalles en SIGA →
                      </div>
                    </div>
                    <div
                      style={
                        {
                          border: "1px solid #E2E8F0",
                          borderRadius: 8,
                          padding: "10px 12px",
                          background: "#F8FAFC",
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 6,
                          } as any
                        }
                      >
                        <div
                          style={
                            {
                              fontSize: ".6rem",
                              fontWeight: 900,
                              color: "#1e3a8a",
                              background: "#dbeafe",
                              borderRadius: 4,
                              padding: "2px 7px",
                              display: "inline-block",
                            } as any
                          }
                        >
                          WORKMATE
                        </div>
                        <span
                          style={
                            {
                              fontSize: ".5rem",
                              background: "#dcfce7",
                              color: "#166534",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 5,
                            } as any
                          }
                        >
                          ● Conectado
                        </span>
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".55rem",
                            color: "#64748B",
                            marginBottom: 2,
                          } as any
                        }
                      >
                        Plataforma de Gestión de Contratistas
                      </div>
                      <div
                        style={
                          {
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: 6,
                          } as any
                        }
                      >
                        <div>
                          <div
                            style={
                              { fontSize: ".52rem", color: "#64748B" } as any
                            }
                          >
                            Usuarios
                          </div>
                          <div
                            style={
                              {
                                fontSize: ".9rem",
                                fontWeight: 900,
                                color: "#38BDF8",
                              } as any
                            }
                          >
                            20
                          </div>
                        </div>
                        <div>
                          <div
                            style={
                              { fontSize: ".52rem", color: "#64748B" } as any
                            }
                          >
                            Requisitos
                          </div>
                          <div
                            style={
                              {
                                fontSize: ".9rem",
                                fontWeight: 900,
                                color: "#10B981",
                              } as any
                            }
                          >
                            34
                          </div>
                        </div>
                        <div>
                          <div
                            style={
                              { fontSize: ".52rem", color: "#64748B" } as any
                            }
                          >
                            Alertas
                          </div>
                          <div
                            style={
                              {
                                fontSize: ".9rem",
                                fontWeight: 900,
                                color: "#EF4444",
                              } as any
                            }
                          >
                            1
                          </div>
                        </div>
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".52rem",
                            color: "#38BDF8",
                            marginTop: 5,
                          } as any
                        }
                      >
                        Ver detalles en WORKMATE →
                      </div>
                    </div>
                  </div>
                </div>
                {/* tabs + resumen */}
                <div
                  style={
                    {
                      display: "flex",
                      gap: 0,
                      borderBottom: "1px solid #F1F5F9",
                      marginBottom: 10,
                    } as any
                  }
                >
                  <span
                    style={
                      {
                        padding: "5px 10px",
                        fontSize: ".62rem",
                        fontWeight: 700,
                        color: "#38BDF8",
                        borderBottom: "2px solid #38BDF8",
                      } as any
                    }
                  >
                    Resumen
                  </span>
                  <span
                    style={
                      {
                        padding: "5px 10px",
                        fontSize: ".62rem",
                        color: "#64748B",
                      } as any
                    }
                  >
                    Documentos
                  </span>
                  <span
                    style={
                      {
                        padding: "5px 10px",
                        fontSize: ".62rem",
                        color: "#64748B",
                      } as any
                    }
                  >
                    Personal
                  </span>
                  <span
                    style={
                      {
                        padding: "5px 10px",
                        fontSize: ".62rem",
                        color: "#64748B",
                      } as any
                    }
                  >
                    Equipos / Vehículos
                  </span>
                  <span
                    style={
                      {
                        padding: "5px 10px",
                        fontSize: ".62rem",
                        color: "#64748B",
                      } as any
                    }
                  >
                    Alertas IA
                  </span>
                  <span
                    style={
                      {
                        padding: "5px 10px",
                        fontSize: ".62rem",
                        color: "#64748B",
                      } as any
                    }
                  >
                    Historial
                  </span>
                </div>
                {/* 3-col resumen */}
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "1.2fr 1fr 1fr",
                      gap: 8,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 8,
                        padding: 10,
                        fontSize: ".62rem",
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          fontWeight: 700,
                          color: "#0F172A",
                          marginBottom: 7,
                        } as any
                      }
                    >
                      Información del contrato
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 4 } as any}>
                      N° de contrato{" "}
                      <span
                        style={
                          {
                            color: "#0F172A",
                            float: "right",
                            fontWeight: 600,
                          } as any
                        }
                      >
                        CT-45000641
                      </span>
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 4 } as any}>
                      Estado{" "}
                      <span style={{ float: "right" } as any}>
                        <span
                          style={
                            {
                              background: "#dcfce7",
                              color: "#15803d",
                              fontSize: ".5rem",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 5,
                            } as any
                          }
                        >
                          Vigente
                        </span>
                      </span>
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 4 } as any}>
                      Empresa{" "}
                      <span style={{ color: "#0F172A", float: "right" } as any}>
                        Tiex SpA
                      </span>
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 4 } as any}>
                      Faena{" "}
                      <span style={{ color: "#0F172A", float: "right" } as any}>
                        Los Pelambres
                      </span>
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 4 } as any}>
                      Inicio{" "}
                      <span style={{ color: "#0F172A", float: "right" } as any}>
                        01/01/2024
                      </span>
                    </div>
                    <div style={{ color: "#64748B" } as any}>
                      Término{" "}
                      <span style={{ color: "#0F172A", float: "right" } as any}>
                        31/12/2025
                      </span>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 8,
                        padding: 10,
                        fontSize: ".62rem",
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          fontWeight: 700,
                          color: "#0F172A",
                          marginBottom: 7,
                        } as any
                      }
                    >
                      Vigencia del contrato
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".55rem",
                          color: "#64748B",
                          textAlign: "right",
                          marginBottom: 4,
                        } as any
                      }
                    >
                      215 días restantes
                    </div>
                    <div
                      style={
                        {
                          height: 5,
                          background: "#E2E8F0",
                          borderRadius: 5,
                          overflow: "hidden",
                          marginBottom: 8,
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            height: "100%",
                            width: "41%",
                            background: "#38BDF8",
                            borderRadius: 5,
                          } as any
                        }
                      />
                    </div>
                    <div
                      style={
                        {
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 6,
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            background: "rgba(255,255,255,.04)",
                            borderRadius: 6,
                            padding: 6,
                          } as any
                        }
                      >
                        <div
                          style={
                            { color: "#64748B", fontSize: ".55rem" } as any
                          }
                        >
                          Días transcurridos
                        </div>
                        <div
                          style={
                            {
                              color: "#0F172A",
                              fontWeight: 700,
                              fontSize: ".72rem",
                            } as any
                          }
                        >
                          150 días (41%)
                        </div>
                      </div>
                      <div
                        style={
                          {
                            background: "rgba(255,255,255,.04)",
                            borderRadius: 6,
                            padding: 6,
                          } as any
                        }
                      >
                        <div
                          style={
                            { color: "#64748B", fontSize: ".55rem" } as any
                          }
                        >
                          Próx. vencimiento
                        </div>
                        <div
                          style={
                            {
                              color: "#fbbf24",
                              fontWeight: 700,
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          Seguro de accidentes
                        </div>
                        <div
                          style={
                            { color: "#64748B", fontSize: ".52rem" } as any
                          }
                        >
                          10/04/2025
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 8,
                        padding: 10,
                        fontSize: ".62rem",
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          fontWeight: 700,
                          color: "#0F172A",
                          marginBottom: 7,
                        } as any
                      }
                    >
                      Resumen general
                    </div>
                    <div
                      style={
                        {
                          color: "#64748B",
                          marginBottom: 3,
                          borderBottom: "1px solid #F1F5F9",
                          paddingBottom: 3,
                        } as any
                      }
                    >
                      Estado{" "}
                      <span style={{ float: "right" } as any}>
                        <span
                          style={
                            {
                              background: "#dcfce7",
                              color: "#15803d",
                              fontSize: ".5rem",
                              padding: "1px 5px",
                              borderRadius: 5,
                            } as any
                          }
                        >
                          Cumplido
                        </span>
                      </span>
                    </div>
                    <div
                      style={
                        {
                          color: "#64748B",
                          marginBottom: 3,
                          borderBottom: "1px solid #F1F5F9",
                          paddingBottom: 3,
                        } as any
                      }
                    >
                      Requisitos asociados{" "}
                      <span style={{ color: "#0F172A", float: "right" } as any}>
                        28
                      </span>
                    </div>
                    <div
                      style={
                        {
                          color: "#5fbf80",
                          marginBottom: 3,
                          borderBottom: "1px solid #F1F5F9",
                          paddingBottom: 3,
                        } as any
                      }
                    >
                      Req. cumplidos{" "}
                      <span style={{ float: "right" } as any}>20 (71%)</span>
                    </div>
                    <div
                      style={
                        {
                          color: "#fbbf24",
                          marginBottom: 3,
                          borderBottom: "1px solid #F1F5F9",
                          paddingBottom: 3,
                        } as any
                      }
                    >
                      Req. en progreso{" "}
                      <span style={{ float: "right" } as any}>5 (18%)</span>
                    </div>
                    <div
                      style={
                        {
                          color: "#f87171",
                          marginBottom: 3,
                          borderBottom: "1px solid #F1F5F9",
                          paddingBottom: 3,
                        } as any
                      }
                    >
                      Req. no cumplidos{" "}
                      <span style={{ float: "right" } as any}>3 (11%)</span>
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 3 } as any}>
                      Documentos totales{" "}
                      <span style={{ color: "#0F172A", float: "right" } as any}>
                        145
                      </span>
                    </div>
                    <div style={{ color: "#f87171" } as any}>
                      Docs vencidos{" "}
                      <span style={{ float: "right" } as any}>10</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mock-ai-guide">
                <div className="mock-ai-bubble">
                  <div data-i18n="dash.sofianame" className="nm">
                    <span className="dot" />
                    Sofía · Asistente IA
                  </div>
                  <div className="tx">
                    Te faltan <b>2 documentos</b> para completar el contrato de
                    Los Pelambres.
                  </div>
                </div>
                <div className="mock-ai-avatar">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={50} cy={50} r={50} fill="#FDE9D2" />
                    <path
                      d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z"
                      fill="#2448E0"
                    />
                    <path
                      d="M35 95 L50 79 L65 95"
                      stroke="#ffffff"
                      strokeWidth={5}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity=".9"
                    />
                    <path
                      d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z"
                      fill="#F2C49B"
                    />
                    <path
                      d="M27 36 C24 47 26 58 33 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M73 36 C76 47 74 58 67 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx={41} cy={43} r="2.6" fill="#2A1A10" />
                    <circle cx={59} cy={43} r="2.6" fill="#2A1A10" />
                    <path
                      d="M41 54 Q50 60 59 54"
                      stroke="#9a5236"
                      strokeWidth="2.4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z"
                      fill="#f2cda0"
                    />
                    <rect
                      x={19}
                      y={26}
                      width={62}
                      height={6}
                      rx={3}
                      fill="#e0b27c"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SCREEN: Personal */}
        <div id="mock-personal" className="mock-screen">
          <div className="browser-frame">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-url">
                🔒 acredittia.cl · Personal · 48 trabajadores
              </div>
            </div>
            <div className="mock-app" style={{ background: "#F8FAFC" } as any}>
              <div
                className="mock-sidebar"
                style={
                  {
                    background: "#0F172A",
                    borderRight: "1px solid #1E3A5F",
                    gap: 2,
                    padding: "14px 10px",
                  } as any
                }
              >
                <div
                  className="mock-logo"
                  style={
                    {
                      paddingBottom: 14,
                      borderBottom: "1px solid #F1F5F9",
                      marginBottom: 10,
                    } as any
                  }
                >
                  <svg
                    style={{ width: 15, height: 13 } as any}
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50 12 L92 86 L66 86 L50 48 L34 86 L8 86 Z"
                      fill="#1D4ED8"
                    />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span
                      style={{ color: "#1D4ED8", marginLeft: "-.08em" } as any}
                    >
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 8px",
                      borderRadius: 8,
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid #1E3A5F",
                      marginBottom: 8,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#3D62F5,#6B8FFF)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".6rem",
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    T
                  </div>
                  <div
                    style={
                      {
                        fontSize: ".65rem",
                        fontWeight: 600,
                        color: "#F1F5F9",
                      } as any
                    }
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div data-i18n="nav.contratos" className="mock-nav-item">
                  📋 Contratos
                </div>
                <div data-i18n="nav.faenas" className="mock-nav-item">
                  🏔️ Faenas
                </div>
                <div
                  data-i18n="nav.personal"
                  className="mock-nav-item active"
                  style={
                    { background: "rgba(61,98,245,.2)", color: "#fff" } as any
                  }
                >
                  👥 Personal
                </div>
                <div data-i18n="nav.equipos" className="mock-nav-item">
                  🚛 Equipos / Vehículos
                </div>
                <div data-i18n="nav.requisitos" className="mock-nav-item">
                  📑 Requisitos
                </div>
                <div data-i18n="nav.reportes" className="mock-nav-item">
                  📊 Reportes
                </div>
                <div data-i18n="nav.alertas" className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={
                      {
                        marginLeft: "auto",
                        background: "#EF4444",
                        color: "#fff",
                        fontSize: ".55rem",
                        padding: "1px 5px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    7
                  </span>
                </div>
                <div data-i18n="nav.calendario" className="mock-nav-item">
                  📅 Calendario
                </div>
                <div data-i18n="nav.integraciones" className="mock-nav-item">
                  🔌 Integraciones
                </div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#F8FAFC", padding: 16 } as any}
              >
                <div
                  style={
                    {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 12,
                    } as any
                  }
                >
                  <div>
                    <div
                      style={
                        {
                          fontSize: ".82rem",
                          fontWeight: 800,
                          color: "#0F172A",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      Personal
                    </div>
                    <div style={{ fontSize: ".6rem", color: "#64748B" } as any}>
                      Gestiona y supervisa a todo el personal acreditado de tu
                      empresa en sus diferentes faenas.
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", gap: 6, flexShrink: 0 } as any}
                  >
                    <span
                      style={
                        {
                          fontSize: ".56rem",
                          fontWeight: 700,
                          color: "#64748B",
                          background: "#fff",
                          border: "1px solid #E2E8F0",
                          padding: "6px 10px",
                          borderRadius: 7,
                          whiteSpace: "nowrap",
                        } as any
                      }
                    >
                      ↓ Exportar
                    </span>
                    <span
                      style={
                        {
                          fontSize: ".56rem",
                          fontWeight: 700,
                          color: "#fff",
                          background: "#3D62F5",
                          padding: "6px 10px",
                          borderRadius: 7,
                          whiteSpace: "nowrap",
                        } as any
                      }
                    >
                      + Agregar personal
                    </span>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(5,1fr)",
                      gap: 7,
                      marginBottom: 10,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(61,98,245,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      👥
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Total personal
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        48
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(16,185,129,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ✅
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Acreditados
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#10B981",
                          } as any
                        }
                      >
                        36
                        <span
                          style={
                            {
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          {" "}
                          (75%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(245,158,11,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ⏳
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Por vencer (30 días)
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#F59E0B",
                          } as any
                        }
                      >
                        8
                        <span
                          style={
                            {
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          {" "}
                          (17%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(239,68,68,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ❌
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Vencidos
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#EF4444",
                          } as any
                        }
                      >
                        3
                        <span
                          style={
                            {
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          {" "}
                          (6%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(148,163,184,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      📋
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Sin asignar a faena
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        1
                        <span
                          style={
                            {
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          {" "}
                          (2%)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 7,
                      marginBottom: 9,
                      alignItems: "center",
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        flex: 1,
                        maxWidth: 220,
                        padding: "6px 10px",
                        borderRadius: 8,
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        color: "#64748B",
                        fontSize: ".56rem",
                      } as any
                    }
                  >
                    🔍 Buscar por nombre, RUT o cargo...
                  </div>
                  <span
                    style={
                      {
                        fontSize: ".54rem",
                        color: "#94A3B8",
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        padding: "6px 9px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    Estado: Todos
                  </span>
                  <span
                    style={
                      {
                        fontSize: ".54rem",
                        color: "#94A3B8",
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        padding: "6px 9px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    Faena: Todas
                  </span>
                  <span
                    style={
                      {
                        fontSize: ".54rem",
                        color: "#94A3B8",
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        padding: "6px 9px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    Cargo: Todos
                  </span>
                </div>
                <div
                  style={
                    {
                      background: "#fff",
                      borderRadius: 10,
                      overflow: "hidden",
                    } as any
                  }
                >
                  <table
                    style={{ width: "100%", borderCollapse: "collapse" } as any}
                  >
                    <thead>
                      <tr style={{ background: "#fafafa" } as any}>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Trabajador
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Cargo
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Faena
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Estado
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Vencim. próximo
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Certificaciones
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        />
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: "50%",
                                  background: "#3D62F5",
                                  color: "#fff",
                                  fontSize: ".46rem",
                                  fontWeight: 800,
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              GM
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                González Mario
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                12.345.678-9
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Operador Mina
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Los Pelambres
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          14 ago 2026
                          <div
                            style={
                              { color: "#94A3B8", fontSize: ".46rem" } as any
                            }
                          >
                            en 57 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                                marginRight: 2,
                              } as any
                            }
                          >
                            Exam. Altura
                          </span>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Inducción OAS
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: "50%",
                                  background: "#10B981",
                                  color: "#fff",
                                  fontSize: ".46rem",
                                  fontWeight: 800,
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              RJ
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Ruiz José
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                9.876.543-2
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Supervisor
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Los Pelambres
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fef3c7",
                                color: "#92400e",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Por vencer
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          30 jun 2026
                          <div
                            style={
                              { color: "#D97706", fontSize: ".46rem" } as any
                            }
                          >
                            en 12 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Lic. Conducir A4
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: "50%",
                                  background: "#F59E0B",
                                  color: "#fff",
                                  fontSize: ".46rem",
                                  fontWeight: 800,
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              MR
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Mora Rodrigo
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                15.222.333-4
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Conductor
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          El Teniente
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fef3c7",
                                color: "#92400e",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Por vencer
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          25 jun 2026
                          <div
                            style={
                              { color: "#D97706", fontSize: ".46rem" } as any
                            }
                          >
                            en 7 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Psicosensotéc.
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: "50%",
                                  background: "#EC4899",
                                  color: "#fff",
                                  fontSize: ".46rem",
                                  fontWeight: 800,
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              VC
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Vega Carla
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                17.654.321-0
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Administrativa
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Centinela
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          10 nov 2026
                          <div
                            style={
                              { color: "#94A3B8", fontSize: ".46rem" } as any
                            }
                          >
                            en 144 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                                marginRight: 2,
                              } as any
                            }
                          >
                            Inducción SSO
                          </span>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            ODI
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: "50%",
                                  background: "#EF4444",
                                  color: "#fff",
                                  fontSize: ".46rem",
                                  fontWeight: 800,
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              SP
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Soto Patricio
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                13.111.222-5
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Operador Equipo
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Candelaria
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fee2e2",
                                color: "#b91c1c",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Vencido
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          14 jun 2026
                          <div
                            style={
                              { color: "#DC2626", fontSize: ".46rem" } as any
                            }
                          >
                            hace 4 días
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".46rem",
                            } as any
                          }
                        >
                          —
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: "50%",
                                  background: "#8B5CF6",
                                  color: "#fff",
                                  fontSize: ".46rem",
                                  fontWeight: 800,
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              PA
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Pérez Ana
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                16.789.123-6
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Mecánico
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Zaldívar
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fef3c7",
                                color: "#92400e",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Por vencer
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          8 jul 2026
                          <div
                            style={
                              { color: "#D97706", fontSize: ".46rem" } as any
                            }
                          >
                            en 20 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Altura Física
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: "50%",
                                  background: "#0EA5E9",
                                  color: "#fff",
                                  fontSize: ".46rem",
                                  fontWeight: 800,
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              FL
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Fernández Luis
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                14.456.789-3
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Operador Mina
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Andina
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          5 sep 2026
                          <div
                            style={
                              { color: "#94A3B8", fontSize: ".46rem" } as any
                            }
                          >
                            en 78 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Esp. Confinados
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: "50%",
                                  background: "#14B8A6",
                                  color: "#fff",
                                  fontSize: ".46rem",
                                  fontWeight: 800,
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              CD
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Castro Daniela
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                18.234.567-8
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Geóloga
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Caserones
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          22 oct 2026
                          <div
                            style={
                              { color: "#94A3B8", fontSize: ".46rem" } as any
                            }
                          >
                            en 125 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Inducción Faena
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: "50%",
                                  background: "#EF4444",
                                  color: "#fff",
                                  fontSize: ".46rem",
                                  fontWeight: 800,
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              MC
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Muñoz Cristian
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                11.987.654-1
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Operador Equipo
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Antucoya
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fee2e2",
                                color: "#b91c1c",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Vencido
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          17 jun 2026
                          <div
                            style={
                              { color: "#DC2626", fontSize: ".46rem" } as any
                            }
                          >
                            hace 1 día
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".46rem",
                            } as any
                          }
                        >
                          —
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: "50%",
                                  background: "#6366F1",
                                  color: "#fff",
                                  fontSize: ".46rem",
                                  fontWeight: 800,
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              RV
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Rojas Valentina
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                19.345.678-2
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Téc. Eléctrico
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          P. Eólico Antof. I
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          18 dic 2026
                          <div
                            style={
                              { color: "#94A3B8", fontSize: ".46rem" } as any
                            }
                          >
                            en 182 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                                marginRight: 2,
                              } as any
                            }
                          >
                            Trab. Altura
                          </span>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            NR-10
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  style={
                    {
                      padding: "8px 9px",
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: ".5rem",
                      color: "#64748B",
                      background: "#fff",
                      borderRadius: "0 0 10px 10px",
                      marginTop: "-1px",
                    } as any
                  }
                >
                  <span>Mostrando 1 a 10 de 48 trabajadores</span>
                  <span style={{ color: "#3D62F5", fontWeight: 600 } as any}>
                    10 por página
                  </span>
                </div>
              </div>
              <div className="mock-ai-guide">
                <div className="mock-ai-bubble">
                  <div data-i18n="dash.sofianame" className="nm">
                    <span className="dot" />
                    Sofía · Asistente IA
                  </div>
                  <div className="tx">
                    <b>8 trabajadores</b> tienen certificaciones por vencer
                    pronto. ¿Les avisamos?
                  </div>
                </div>
                <div className="mock-ai-avatar">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={50} cy={50} r={50} fill="#FDE9D2" />
                    <path
                      d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z"
                      fill="#2448E0"
                    />
                    <path
                      d="M35 95 L50 79 L65 95"
                      stroke="#ffffff"
                      strokeWidth={5}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity=".9"
                    />
                    <path
                      d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z"
                      fill="#F2C49B"
                    />
                    <path
                      d="M27 36 C24 47 26 58 33 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M73 36 C76 47 74 58 67 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx={41} cy={43} r="2.6" fill="#2A1A10" />
                    <circle cx={59} cy={43} r="2.6" fill="#2A1A10" />
                    <path
                      d="M41 54 Q50 60 59 54"
                      stroke="#9a5236"
                      strokeWidth="2.4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z"
                      fill="#f2cda0"
                    />
                    <rect
                      x={19}
                      y={26}
                      width={62}
                      height={6}
                      rx={3}
                      fill="#e0b27c"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SCREEN: Equipos / Vehículos */}
        <div id="mock-equipos" className="mock-screen">
          <div className="browser-frame">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-url">
                🔒 acredittia.cl · Equipos / Vehículos · 15 unidades
              </div>
            </div>
            <div className="mock-app" style={{ background: "#F8FAFC" } as any}>
              <div
                className="mock-sidebar"
                style={
                  {
                    background: "#0F172A",
                    borderRight: "1px solid #1E3A5F",
                    gap: 2,
                    padding: "14px 10px",
                  } as any
                }
              >
                <div
                  className="mock-logo"
                  style={
                    {
                      paddingBottom: 14,
                      borderBottom: "1px solid #F1F5F9",
                      marginBottom: 10,
                    } as any
                  }
                >
                  <svg
                    style={{ width: 15, height: 13 } as any}
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50 12 L92 86 L66 86 L50 48 L34 86 L8 86 Z"
                      fill="#1D4ED8"
                    />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span
                      style={{ color: "#1D4ED8", marginLeft: "-.08em" } as any}
                    >
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 8px",
                      borderRadius: 8,
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid #1E3A5F",
                      marginBottom: 8,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#3D62F5,#6B8FFF)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".6rem",
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    T
                  </div>
                  <div
                    style={
                      {
                        fontSize: ".65rem",
                        fontWeight: 600,
                        color: "#F1F5F9",
                      } as any
                    }
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div data-i18n="nav.contratos" className="mock-nav-item">
                  📋 Contratos
                </div>
                <div data-i18n="nav.faenas" className="mock-nav-item">
                  🏔️ Faenas
                </div>
                <div data-i18n="nav.personal" className="mock-nav-item">
                  👥 Personal
                </div>
                <div
                  data-i18n="nav.equipos"
                  className="mock-nav-item active"
                  style={
                    { background: "rgba(61,98,245,.2)", color: "#fff" } as any
                  }
                >
                  🚛 Equipos / Vehículos
                </div>
                <div data-i18n="nav.requisitos" className="mock-nav-item">
                  📑 Requisitos
                </div>
                <div data-i18n="nav.reportes" className="mock-nav-item">
                  📊 Reportes
                </div>
                <div data-i18n="nav.alertas" className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={
                      {
                        marginLeft: "auto",
                        background: "#EF4444",
                        color: "#fff",
                        fontSize: ".55rem",
                        padding: "1px 5px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    7
                  </span>
                </div>
                <div data-i18n="nav.calendario" className="mock-nav-item">
                  📅 Calendario
                </div>
                <div data-i18n="nav.integraciones" className="mock-nav-item">
                  🔌 Integraciones
                </div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#F8FAFC", padding: 16 } as any}
              >
                <div
                  style={
                    {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 12,
                    } as any
                  }
                >
                  <div>
                    <div
                      style={
                        {
                          fontSize: ".82rem",
                          fontWeight: 800,
                          color: "#0F172A",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      Equipos / Vehículos
                    </div>
                    <div style={{ fontSize: ".6rem", color: "#64748B" } as any}>
                      Controla la documentación y vigencia de tu flota y
                      maquinaria en cada faena.
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", gap: 6, flexShrink: 0 } as any}
                  >
                    <span
                      style={
                        {
                          fontSize: ".56rem",
                          fontWeight: 700,
                          color: "#64748B",
                          background: "#fff",
                          border: "1px solid #E2E8F0",
                          padding: "6px 10px",
                          borderRadius: 7,
                          whiteSpace: "nowrap",
                        } as any
                      }
                    >
                      ↓ Exportar
                    </span>
                    <span
                      style={
                        {
                          fontSize: ".56rem",
                          fontWeight: 700,
                          color: "#fff",
                          background: "#3D62F5",
                          padding: "6px 10px",
                          borderRadius: 7,
                          whiteSpace: "nowrap",
                        } as any
                      }
                    >
                      + Agregar equipo
                    </span>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(5,1fr)",
                      gap: 7,
                      marginBottom: 10,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(61,98,245,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      🚛
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Total equipos
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        15
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(16,185,129,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ✅
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Acreditados
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#10B981",
                          } as any
                        }
                      >
                        11
                        <span
                          style={
                            {
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          {" "}
                          (73%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(245,158,11,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ⏳
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Por vencer
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#F59E0B",
                          } as any
                        }
                      >
                        3
                        <span
                          style={
                            {
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          {" "}
                          (20%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(239,68,68,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ❌
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Vencidos
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#EF4444",
                          } as any
                        }
                      >
                        1
                        <span
                          style={
                            {
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          {" "}
                          (7%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(148,163,184,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      📋
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Sin asignar
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        0
                        <span
                          style={
                            {
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          {" "}
                          (0%)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 7,
                      marginBottom: 9,
                      alignItems: "center",
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        flex: 1,
                        maxWidth: 220,
                        padding: "6px 10px",
                        borderRadius: 8,
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        color: "#64748B",
                        fontSize: ".56rem",
                      } as any
                    }
                  >
                    🔍 Buscar por patente, ID o modelo...
                  </div>
                  <span
                    style={
                      {
                        fontSize: ".54rem",
                        color: "#94A3B8",
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        padding: "6px 9px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    Estado: Todos
                  </span>
                  <span
                    style={
                      {
                        fontSize: ".54rem",
                        color: "#94A3B8",
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        padding: "6px 9px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    Faena: Todas
                  </span>
                  <span
                    style={
                      {
                        fontSize: ".54rem",
                        color: "#94A3B8",
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        padding: "6px 9px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    Tipo: Todos
                  </span>
                </div>
                <div
                  style={
                    {
                      background: "#fff",
                      borderRadius: 10,
                      overflow: "hidden",
                    } as any
                  }
                >
                  <table
                    style={{ width: "100%", borderCollapse: "collapse" } as any}
                  >
                    <thead>
                      <tr style={{ background: "#fafafa" } as any}>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Equipo / Vehículo
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Modelo / Marca
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Faena
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Estado
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Vencim. próximo
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Certificaciones
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        />
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: 6,
                                  background: "#1E293B",
                                  color: "#fff",
                                  fontSize: ".5rem",
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              🚛
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Camión Tolva
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                LXDY88
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Volvo FH 2021
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Los Pelambres
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fee2e2",
                                color: "#b91c1c",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Vencido
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          15 jun 2026
                          <div
                            style={
                              { color: "#DC2626", fontSize: ".46rem" } as any
                            }
                          >
                            hace 3 días
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".46rem",
                            } as any
                          }
                        >
                          —
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: 6,
                                  background: "#1E293B",
                                  color: "#fff",
                                  fontSize: ".5rem",
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              🚙
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Camioneta
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                RPDC68
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Toyota Hilux 2022
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Centinela
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          14 mar 2027
                          <div
                            style={
                              { color: "#94A3B8", fontSize: ".46rem" } as any
                            }
                          >
                            en 269 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                                marginRight: 2,
                              } as any
                            }
                          >
                            SOAP
                          </span>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Rev. Técnica
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: 6,
                                  background: "#1E293B",
                                  color: "#fff",
                                  fontSize: ".5rem",
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              🚚
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Camión Aljibe
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                HBCK21
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Mercedes Actros 2020
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Zaldívar
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fef3c7",
                                color: "#92400e",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Por vencer
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          26 jun 2026
                          <div
                            style={
                              { color: "#D97706", fontSize: ".46rem" } as any
                            }
                          >
                            en 8 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Rev. Técnica
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: 6,
                                  background: "#1E293B",
                                  color: "#fff",
                                  fontSize: ".5rem",
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              🏗️
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Excavadora
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                MLP-EXC04
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          CAT 320 2019
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Los Pelambres
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          30 sep 2026
                          <div
                            style={
                              { color: "#94A3B8", fontSize: ".46rem" } as any
                            }
                          >
                            en 103 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Cert. Operador
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: 6,
                                  background: "#1E293B",
                                  color: "#fff",
                                  fontSize: ".5rem",
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              🚌
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Bus de Personal
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                TGHC55
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Mercedes O500 2021
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          El Teniente
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          12 dic 2026
                          <div
                            style={
                              { color: "#94A3B8", fontSize: ".46rem" } as any
                            }
                          >
                            en 176 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Permiso Circul.
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: 6,
                                  background: "#1E293B",
                                  color: "#fff",
                                  fontSize: ".5rem",
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              🚛
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Camión Pluma
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                FRWZ09
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Hino 500 2020
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Candelaria
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fef3c7",
                                color: "#92400e",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Por vencer
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          3 jul 2026
                          <div
                            style={
                              { color: "#D97706", fontSize: ".46rem" } as any
                            }
                          >
                            en 15 días
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".46rem",
                            } as any
                          }
                        >
                          —
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: 6,
                                  background: "#1E293B",
                                  color: "#fff",
                                  fontSize: ".5rem",
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              🏗️
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Grúa Horquilla
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                JKLM12
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Komatsu FG25 2018
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Caserones
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          8 ene 2027
                          <div
                            style={
                              { color: "#94A3B8", fontSize: ".46rem" } as any
                            }
                          >
                            en 203 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Cert. Operador Grúa
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: 6,
                                  background: "#1E293B",
                                  color: "#fff",
                                  fontSize: ".5rem",
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              🚐
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Furgón
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                QPRT34
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Hyundai H1 2022
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Andina
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          25 feb 2027
                          <div
                            style={
                              { color: "#94A3B8", fontSize: ".46rem" } as any
                            }
                          >
                            en 251 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            SOAP
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: 6,
                                  background: "#1E293B",
                                  color: "#fff",
                                  fontSize: ".5rem",
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              🚙
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Camioneta
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                VBNH77
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Ford Ranger 2021
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Antucoya
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fee2e2",
                                color: "#b91c1c",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Vencido
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          13 jun 2026
                          <div
                            style={
                              { color: "#DC2626", fontSize: ".46rem" } as any
                            }
                          >
                            hace 6 días
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".46rem",
                            } as any
                          }
                        >
                          —
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 8px" } as any}>
                          <div
                            style={
                              {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              } as any
                            }
                          >
                            <div
                              style={
                                {
                                  width: 20,
                                  height: 20,
                                  borderRadius: 6,
                                  background: "#1E293B",
                                  color: "#fff",
                                  fontSize: ".5rem",
                                  display: "grid",
                                  placeItems: "center",
                                  flexShrink: 0,
                                } as any
                              }
                            >
                              ⚡
                            </div>
                            <div>
                              <div
                                style={
                                  {
                                    fontSize: ".58rem",
                                    color: "#1e293b",
                                    fontWeight: 700,
                                  } as any
                                }
                              >
                                Generador
                              </div>
                              <div
                                style={
                                  {
                                    fontSize: ".48rem",
                                    color: "#94A3B8",
                                  } as any
                                }
                              >
                                WLKX90
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".55rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Cummins 150kVA
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          P. Eólico Antof. I
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          19 nov 2026
                          <div
                            style={
                              { color: "#94A3B8", fontSize: ".46rem" } as any
                            }
                          >
                            en 153 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#EEF2FF",
                                color: "#3D62F5",
                                fontSize: ".46rem",
                                fontWeight: 600,
                                padding: "2px 5px",
                                borderRadius: 5,
                              } as any
                            }
                          >
                            Cert. Eléctrico
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⋮
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  style={
                    {
                      padding: "8px 9px",
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: ".5rem",
                      color: "#64748B",
                      background: "#fff",
                      borderRadius: "0 0 10px 10px",
                      marginTop: "-1px",
                    } as any
                  }
                >
                  <span>Mostrando 1 a 10 de 15 equipos</span>
                  <span style={{ color: "#3D62F5", fontWeight: 600 } as any}>
                    10 por página
                  </span>
                </div>
              </div>
              <div className="mock-ai-guide">
                <div className="mock-ai-bubble">
                  <div data-i18n="dash.sofianame" className="nm">
                    <span className="dot" />
                    Sofía · Asistente IA
                  </div>
                  <div className="tx">
                    Detecté <b>1 equipo vencido</b> y 3 por vencer. ¿Te ayudo a
                    renovarlos?
                  </div>
                </div>
                <div className="mock-ai-avatar">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={50} cy={50} r={50} fill="#FDE9D2" />
                    <path
                      d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z"
                      fill="#2448E0"
                    />
                    <path
                      d="M35 95 L50 79 L65 95"
                      stroke="#ffffff"
                      strokeWidth={5}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity=".9"
                    />
                    <path
                      d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z"
                      fill="#F2C49B"
                    />
                    <path
                      d="M27 36 C24 47 26 58 33 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M73 36 C76 47 74 58 67 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx={41} cy={43} r="2.6" fill="#2A1A10" />
                    <circle cx={59} cy={43} r="2.6" fill="#2A1A10" />
                    <path
                      d="M41 54 Q50 60 59 54"
                      stroke="#9a5236"
                      strokeWidth="2.4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z"
                      fill="#f2cda0"
                    />
                    <rect
                      x={19}
                      y={26}
                      width={62}
                      height={6}
                      rx={3}
                      fill="#e0b27c"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SCREEN: Faenas */}
        <div id="mock-faenas" className="mock-screen">
          <div className="browser-frame">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-url">
                🔒 acredittia.cl · Faenas · 9 integradas
              </div>
            </div>
            <div className="mock-app" style={{ background: "#F8FAFC" } as any}>
              <div
                className="mock-sidebar"
                style={
                  {
                    background: "#0F172A",
                    borderRight: "1px solid #1E3A5F",
                    gap: 2,
                    padding: "14px 10px",
                  } as any
                }
              >
                <div
                  className="mock-logo"
                  style={
                    {
                      paddingBottom: 14,
                      borderBottom: "1px solid #F1F5F9",
                      marginBottom: 10,
                    } as any
                  }
                >
                  <svg
                    style={{ width: 15, height: 13 } as any}
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50 12 L92 86 L66 86 L50 48 L34 86 L8 86 Z"
                      fill="#1D4ED8"
                    />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span
                      style={{ color: "#1D4ED8", marginLeft: "-.08em" } as any}
                    >
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 8px",
                      borderRadius: 8,
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid #1E3A5F",
                      marginBottom: 8,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#3D62F5,#6B8FFF)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".6rem",
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    T
                  </div>
                  <div
                    style={
                      {
                        fontSize: ".65rem",
                        fontWeight: 600,
                        color: "#F1F5F9",
                      } as any
                    }
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div data-i18n="nav.contratos" className="mock-nav-item">
                  📋 Contratos
                </div>
                <div
                  data-i18n="nav.faenas"
                  className="mock-nav-item active"
                  style={
                    { background: "rgba(61,98,245,.2)", color: "#fff" } as any
                  }
                >
                  🏔️ Faenas
                </div>
                <div data-i18n="nav.personal" className="mock-nav-item">
                  👥 Personal
                </div>
                <div data-i18n="nav.equipos" className="mock-nav-item">
                  🚛 Equipos / Vehículos
                </div>
                <div data-i18n="nav.requisitos" className="mock-nav-item">
                  📑 Requisitos
                </div>
                <div data-i18n="nav.reportes" className="mock-nav-item">
                  📊 Reportes
                </div>
                <div data-i18n="nav.alertas" className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={
                      {
                        marginLeft: "auto",
                        background: "#EF4444",
                        color: "#fff",
                        fontSize: ".55rem",
                        padding: "1px 5px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    7
                  </span>
                </div>
                <div data-i18n="nav.calendario" className="mock-nav-item">
                  📅 Calendario
                </div>
                <div data-i18n="nav.integraciones" className="mock-nav-item">
                  🔌 Integraciones
                </div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#F8FAFC", padding: 16 } as any}
              >
                <div
                  style={
                    {
                      fontSize: ".82rem",
                      fontWeight: 800,
                      color: "#0F172A",
                      marginBottom: 2,
                    } as any
                  }
                >
                  Faenas
                </div>
                <div
                  style={
                    {
                      fontSize: ".6rem",
                      color: "#64748B",
                      marginBottom: 12,
                    } as any
                  }
                >
                  Todas las faenas donde tu empresa tiene contratos activos, con
                  visibilidad por plataforma.
                </div>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(3,1fr)",
                      gap: 9,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 11,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 6,
                        } as any
                      }
                    >
                      <span
                        style={
                          {
                            fontSize: ".7rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Los Pelambres
                      </span>
                      <span
                        style={
                          {
                            fontSize: ".5rem",
                            background: "rgba(56,189,248,.15)",
                            color: "#38BDF8",
                            fontWeight: 700,
                            padding: "1px 6px",
                            borderRadius: 6,
                          } as any
                        }
                      >
                        SIGA
                      </span>
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".56rem",
                          color: "#64748B",
                          marginBottom: 8,
                        } as any
                      }
                    >
                      AMSA · Región de Coquimbo
                    </div>
                    <div
                      style={
                        {
                          height: 5,
                          background: "#E2E8F0",
                          borderRadius: 5,
                          overflow: "hidden",
                          marginBottom: 5,
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            height: "100%",
                            width: "74%",
                            background: "#10B981",
                          } as any
                        }
                      />
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: ".55rem",
                          color: "#64748B",
                        } as any
                      }
                    >
                      <span>1 contrato activo</span>
                      <span
                        style={{ color: "#10B981", fontWeight: 700 } as any}
                      >
                        74%
                      </span>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 11,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 6,
                        } as any
                      }
                    >
                      <span
                        style={
                          {
                            fontSize: ".7rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Centinela
                      </span>
                      <span
                        style={
                          {
                            fontSize: ".5rem",
                            background: "rgba(56,189,248,.15)",
                            color: "#38BDF8",
                            fontWeight: 700,
                            padding: "1px 6px",
                            borderRadius: 6,
                          } as any
                        }
                      >
                        SIGA
                      </span>
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".56rem",
                          color: "#64748B",
                          marginBottom: 8,
                        } as any
                      }
                    >
                      AMSA · Región de Antofagasta
                    </div>
                    <div
                      style={
                        {
                          height: 5,
                          background: "#E2E8F0",
                          borderRadius: 5,
                          overflow: "hidden",
                          marginBottom: 5,
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            height: "100%",
                            width: "91%",
                            background: "#10B981",
                          } as any
                        }
                      />
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: ".55rem",
                          color: "#64748B",
                        } as any
                      }
                    >
                      <span>1 contrato activo</span>
                      <span
                        style={{ color: "#10B981", fontWeight: 700 } as any}
                      >
                        91%
                      </span>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 11,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 6,
                        } as any
                      }
                    >
                      <span
                        style={
                          {
                            fontSize: ".7rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        El Teniente
                      </span>
                      <span
                        style={
                          {
                            fontSize: ".5rem",
                            background: "rgba(167,139,250,.18)",
                            color: "#A78BFA",
                            fontWeight: 700,
                            padding: "1px 6px",
                            borderRadius: 6,
                          } as any
                        }
                      >
                        SUCAL
                      </span>
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".56rem",
                          color: "#64748B",
                          marginBottom: 8,
                        } as any
                      }
                    >
                      Codelco · Región de O'Higgins
                    </div>
                    <div
                      style={
                        {
                          height: 5,
                          background: "#E2E8F0",
                          borderRadius: 5,
                          overflow: "hidden",
                          marginBottom: 5,
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            height: "100%",
                            width: "83%",
                            background: "#10B981",
                          } as any
                        }
                      />
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: ".55rem",
                          color: "#64748B",
                        } as any
                      }
                    >
                      <span>1 contrato activo</span>
                      <span
                        style={{ color: "#10B981", fontWeight: 700 } as any}
                      >
                        83%
                      </span>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 11,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 6,
                        } as any
                      }
                    >
                      <span
                        style={
                          {
                            fontSize: ".7rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Candelaria
                      </span>
                      <span
                        style={
                          {
                            fontSize: ".5rem",
                            background: "rgba(245,158,11,.15)",
                            color: "#F59E0B",
                            fontWeight: 700,
                            padding: "1px 6px",
                            borderRadius: 6,
                          } as any
                        }
                      >
                        WEBCONTROL
                      </span>
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".56rem",
                          color: "#64748B",
                          marginBottom: 8,
                        } as any
                      }
                    >
                      Lundin Mining · Región de Atacama
                    </div>
                    <div
                      style={
                        {
                          height: 5,
                          background: "#E2E8F0",
                          borderRadius: 5,
                          overflow: "hidden",
                          marginBottom: 5,
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            height: "100%",
                            width: "42%",
                            background: "#EF4444",
                          } as any
                        }
                      />
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: ".55rem",
                          color: "#64748B",
                        } as any
                      }
                    >
                      <span>1 contrato activo</span>
                      <span
                        style={{ color: "#EF4444", fontWeight: 700 } as any}
                      >
                        42%
                      </span>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 11,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 6,
                        } as any
                      }
                    >
                      <span
                        style={
                          {
                            fontSize: ".7rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Zaldívar
                      </span>
                      <span
                        style={
                          {
                            fontSize: ".5rem",
                            background: "rgba(56,189,248,.15)",
                            color: "#38BDF8",
                            fontWeight: 700,
                            padding: "1px 6px",
                            borderRadius: 6,
                          } as any
                        }
                      >
                        SIGA
                      </span>
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".56rem",
                          color: "#64748B",
                          marginBottom: 8,
                        } as any
                      }
                    >
                      AMSA · Región de Antofagasta
                    </div>
                    <div
                      style={
                        {
                          height: 5,
                          background: "#E2E8F0",
                          borderRadius: 5,
                          overflow: "hidden",
                          marginBottom: 5,
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            height: "100%",
                            width: "67%",
                            background: "#F59E0B",
                          } as any
                        }
                      />
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: ".55rem",
                          color: "#64748B",
                        } as any
                      }
                    >
                      <span>1 contrato activo</span>
                      <span
                        style={{ color: "#F59E0B", fontWeight: 700 } as any}
                      >
                        67%
                      </span>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 11,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                      } as any
                    }
                  >
                    <div>
                      <div
                        style={
                          {
                            fontSize: ".62rem",
                            color: "#38BDF8",
                            fontWeight: 700,
                            marginBottom: 3,
                          } as any
                        }
                      >
                        + 4 faenas más
                      </div>
                      <div
                        style={{ fontSize: ".54rem", color: "#64748B" } as any}
                      >
                        Antucoya, Caserones, Andina, P. Eólico Antofagasta I
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mock-ai-guide">
                <div className="mock-ai-bubble">
                  <div data-i18n="dash.sofianame" className="nm">
                    <span className="dot" />
                    Sofía · Asistente IA
                  </div>
                  <div className="tx">
                    Candelaria tiene el cumplimiento más bajo (<b>42%</b>).
                    ¿Vemos qué falta?
                  </div>
                </div>
                <div className="mock-ai-avatar">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={50} cy={50} r={50} fill="#FDE9D2" />
                    <path
                      d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z"
                      fill="#2448E0"
                    />
                    <path
                      d="M35 95 L50 79 L65 95"
                      stroke="#ffffff"
                      strokeWidth={5}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity=".9"
                    />
                    <path
                      d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z"
                      fill="#F2C49B"
                    />
                    <path
                      d="M27 36 C24 47 26 58 33 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M73 36 C76 47 74 58 67 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx={41} cy={43} r="2.6" fill="#2A1A10" />
                    <circle cx={59} cy={43} r="2.6" fill="#2A1A10" />
                    <path
                      d="M41 54 Q50 60 59 54"
                      stroke="#9a5236"
                      strokeWidth="2.4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z"
                      fill="#f2cda0"
                    />
                    <rect
                      x={19}
                      y={26}
                      width={62}
                      height={6}
                      rx={3}
                      fill="#e0b27c"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SCREEN: Reportes */}
        <div id="mock-reportes" className="mock-screen">
          <div className="browser-frame">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-url">🔒 acredittia.cl · Reportes</div>
            </div>
            <div className="mock-app" style={{ background: "#F8FAFC" } as any}>
              <div
                className="mock-sidebar"
                style={
                  {
                    background: "#0F172A",
                    borderRight: "1px solid #1E3A5F",
                    gap: 2,
                    padding: "14px 10px",
                  } as any
                }
              >
                <div
                  className="mock-logo"
                  style={
                    {
                      paddingBottom: 14,
                      borderBottom: "1px solid #F1F5F9",
                      marginBottom: 10,
                    } as any
                  }
                >
                  <svg
                    style={{ width: 15, height: 13 } as any}
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50 12 L92 86 L66 86 L50 48 L34 86 L8 86 Z"
                      fill="#1D4ED8"
                    />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span
                      style={{ color: "#1D4ED8", marginLeft: "-.08em" } as any}
                    >
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 8px",
                      borderRadius: 8,
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid #1E3A5F",
                      marginBottom: 8,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#3D62F5,#6B8FFF)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".6rem",
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    T
                  </div>
                  <div
                    style={
                      {
                        fontSize: ".65rem",
                        fontWeight: 600,
                        color: "#F1F5F9",
                      } as any
                    }
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div data-i18n="nav.contratos" className="mock-nav-item">
                  📋 Contratos
                </div>
                <div data-i18n="nav.faenas" className="mock-nav-item">
                  🏔️ Faenas
                </div>
                <div data-i18n="nav.personal" className="mock-nav-item">
                  👥 Personal
                </div>
                <div data-i18n="nav.equipos" className="mock-nav-item">
                  🚛 Equipos / Vehículos
                </div>
                <div data-i18n="nav.requisitos" className="mock-nav-item">
                  📑 Requisitos
                </div>
                <div
                  data-i18n="nav.reportes"
                  className="mock-nav-item active"
                  style={
                    { background: "rgba(61,98,245,.2)", color: "#fff" } as any
                  }
                >
                  📊 Reportes
                </div>
                <div data-i18n="nav.alertas" className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={
                      {
                        marginLeft: "auto",
                        background: "#EF4444",
                        color: "#fff",
                        fontSize: ".55rem",
                        padding: "1px 5px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    7
                  </span>
                </div>
                <div data-i18n="nav.calendario" className="mock-nav-item">
                  📅 Calendario
                </div>
                <div data-i18n="nav.integraciones" className="mock-nav-item">
                  🔌 Integraciones
                </div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#F8FAFC", padding: 16 } as any}
              >
                <div
                  style={
                    {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 12,
                    } as any
                  }
                >
                  <div>
                    <div
                      style={
                        {
                          fontSize: ".82rem",
                          fontWeight: 800,
                          color: "#0F172A",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      Reportes
                    </div>
                    <div style={{ fontSize: ".6rem", color: "#64748B" } as any}>
                      Análisis del estado de acreditación de tu empresa en
                      contratos, faenas, personal y equipos.
                    </div>
                  </div>
                  <span
                    style={
                      {
                        fontSize: ".58rem",
                        fontWeight: 700,
                        color: "#fff",
                        background: "#3D62F5",
                        padding: "6px 11px",
                        borderRadius: 8,
                        whiteSpace: "nowrap",
                      } as any
                    }
                  >
                    ⬇ Exportar PDF
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(4,1fr)",
                      gap: 7,
                      marginBottom: 10,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(61,98,245,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      📊
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Reportes generados
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        28
                        <span
                          style={
                            {
                              fontSize: ".5rem",
                              color: "#10B981",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          {" "}
                          ↑12%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(139,92,246,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      🔁
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Programados activos
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        6
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(16,185,129,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ✅
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Cobertura acreditación
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#10B981",
                          } as any
                        }
                      >
                        76%
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          background: "rgba(239,68,68,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".75rem",
                          flexShrink: 0,
                        } as any
                      }
                    >
                      ⚠️
                    </div>
                    <div>
                      <div
                        style={{ fontSize: ".5rem", color: "#64748B" } as any}
                      >
                        Hallazgos críticos
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#EF4444",
                          } as any
                        }
                      >
                        10
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "1.3fr 1fr",
                      gap: 10,
                      marginBottom: 10,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 12,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          fontSize: ".62rem",
                          fontWeight: 700,
                          color: "#0F172A",
                          marginBottom: 10,
                        } as any
                      }
                    >
                      Cumplimiento por faena
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          alignItems: "flex-end",
                          gap: 8,
                          height: 74,
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 4,
                          } as any
                        }
                      >
                        <div
                          style={
                            {
                              width: "100%",
                              height: "74%",
                              background:
                                "linear-gradient(180deg,#6B8FFF,#3D62F5)",
                              borderRadius: "4px 4px 0 0",
                            } as any
                          }
                        />
                        <span
                          style={
                            { fontSize: ".44rem", color: "#64748B" } as any
                          }
                        >
                          Pelambres
                        </span>
                      </div>
                      <div
                        style={
                          {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 4,
                          } as any
                        }
                      >
                        <div
                          style={
                            {
                              width: "100%",
                              height: "91%",
                              background:
                                "linear-gradient(180deg,#6B8FFF,#3D62F5)",
                              borderRadius: "4px 4px 0 0",
                            } as any
                          }
                        />
                        <span
                          style={
                            { fontSize: ".44rem", color: "#64748B" } as any
                          }
                        >
                          Centinela
                        </span>
                      </div>
                      <div
                        style={
                          {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 4,
                          } as any
                        }
                      >
                        <div
                          style={
                            {
                              width: "100%",
                              height: "42%",
                              background:
                                "linear-gradient(180deg,#F87171,#EF4444)",
                              borderRadius: "4px 4px 0 0",
                            } as any
                          }
                        />
                        <span
                          style={
                            { fontSize: ".44rem", color: "#64748B" } as any
                          }
                        >
                          Candelaria
                        </span>
                      </div>
                      <div
                        style={
                          {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 4,
                          } as any
                        }
                      >
                        <div
                          style={
                            {
                              width: "100%",
                              height: "83%",
                              background:
                                "linear-gradient(180deg,#6B8FFF,#3D62F5)",
                              borderRadius: "4px 4px 0 0",
                            } as any
                          }
                        />
                        <span
                          style={
                            { fontSize: ".44rem", color: "#64748B" } as any
                          }
                        >
                          El Teniente
                        </span>
                      </div>
                      <div
                        style={
                          {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 4,
                          } as any
                        }
                      >
                        <div
                          style={
                            {
                              width: "100%",
                              height: "67%",
                              background:
                                "linear-gradient(180deg,#FCD34D,#F59E0B)",
                              borderRadius: "4px 4px 0 0",
                            } as any
                          }
                        />
                        <span
                          style={
                            { fontSize: ".44rem", color: "#64748B" } as any
                          }
                        >
                          Zaldívar
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 12,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          fontSize: ".62rem",
                          fontWeight: 700,
                          color: "#0F172A",
                          marginBottom: 8,
                        } as any
                      }
                    >
                      Estado general de documentos
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          marginBottom: 6,
                        } as any
                      }
                    >
                      <svg width={50} height={50} viewBox="0 0 32 32">
                        <circle
                          cx={16}
                          cy={16}
                          r={13}
                          fill="none"
                          stroke="rgba(255,255,255,.08)"
                          strokeWidth={4}
                        />
                        <circle
                          cx={16}
                          cy={16}
                          r={13}
                          fill="none"
                          stroke="#10B981"
                          strokeWidth={4}
                          strokeDasharray="59 23"
                          strokeLinecap="round"
                          transform="rotate(-90 16 16)"
                        />
                      </svg>
                      <div>
                        <div
                          style={
                            {
                              fontSize: ".85rem",
                              fontWeight: 900,
                              color: "#10B981",
                            } as any
                          }
                        >
                          76%
                        </div>
                        <div
                          style={{ fontSize: ".5rem", color: "#64748B" } as any}
                        >
                          cumplimiento global
                        </div>
                      </div>
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".54rem",
                          color: "#64748B",
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      <span>✅ Vigentes</span>
                      <span
                        style={{ color: "#0F172A", fontWeight: 700 } as any}
                      >
                        112
                      </span>
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".54rem",
                          color: "#64748B",
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      <span>⏰ Por vencer</span>
                      <span
                        style={{ color: "#0F172A", fontWeight: 700 } as any}
                      >
                        18
                      </span>
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".54rem",
                          color: "#64748B",
                          display: "flex",
                          justifyContent: "space-between",
                        } as any
                      }
                    >
                      <span>⛔ Vencidos</span>
                      <span
                        style={{ color: "#0F172A", fontWeight: 700 } as any}
                      >
                        10
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      fontSize: ".62rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: 7,
                    } as any
                  }
                >
                  Reportes disponibles
                </div>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(4,1fr)",
                      gap: 8,
                      marginBottom: 12,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 10,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 24,
                          height: 24,
                          borderRadius: 7,
                          background: "rgba(61,98,245,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".7rem",
                          marginBottom: 6,
                        } as any
                      }
                    >
                      📑
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".56rem",
                          fontWeight: 700,
                          color: "#0F172A",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      Estado de acreditación
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".46rem",
                          color: "#64748B",
                          marginBottom: 8,
                          lineHeight: "1.3",
                        } as any
                      }
                    >
                      Resumen global por contrato y faena.
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".5rem",
                          fontWeight: 700,
                          color: "#fff",
                          background: "#3D62F5",
                          textAlign: "center",
                          padding: 5,
                          borderRadius: 6,
                        } as any
                      }
                    >
                      Generar reporte
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 10,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 24,
                          height: 24,
                          borderRadius: 7,
                          background: "rgba(16,185,129,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".7rem",
                          marginBottom: 6,
                        } as any
                      }
                    >
                      ✅
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".56rem",
                          fontWeight: 700,
                          color: "#0F172A",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      Cumplimiento de requisitos
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".46rem",
                          color: "#64748B",
                          marginBottom: 8,
                          lineHeight: "1.3",
                        } as any
                      }
                    >
                      Detalle de requisitos por faena.
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".5rem",
                          fontWeight: 700,
                          color: "#fff",
                          background: "#3D62F5",
                          textAlign: "center",
                          padding: 5,
                          borderRadius: 6,
                        } as any
                      }
                    >
                      Generar reporte
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 10,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 24,
                          height: 24,
                          borderRadius: 7,
                          background: "rgba(139,92,246,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".7rem",
                          marginBottom: 6,
                        } as any
                      }
                    >
                      👥
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".56rem",
                          fontWeight: 700,
                          color: "#0F172A",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      Personal acreditado
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".46rem",
                          color: "#64748B",
                          marginBottom: 8,
                          lineHeight: "1.3",
                        } as any
                      }
                    >
                      Listado de trabajadores y vigencias.
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".5rem",
                          fontWeight: 700,
                          color: "#fff",
                          background: "#3D62F5",
                          textAlign: "center",
                          padding: 5,
                          borderRadius: 6,
                        } as any
                      }
                    >
                      Generar reporte
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fff",
                        border: "1px solid #E2E8F0",
                        borderRadius: 10,
                        padding: 10,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          width: 24,
                          height: 24,
                          borderRadius: 7,
                          background: "rgba(245,158,11,.15)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".7rem",
                          marginBottom: 6,
                        } as any
                      }
                    >
                      ⏰
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".56rem",
                          fontWeight: 700,
                          color: "#0F172A",
                          marginBottom: 2,
                        } as any
                      }
                    >
                      Vencimientos
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".46rem",
                          color: "#64748B",
                          marginBottom: 8,
                          lineHeight: "1.3",
                        } as any
                      }
                    >
                      Documentos próximos a vencer.
                    </div>
                    <div
                      style={
                        {
                          fontSize: ".5rem",
                          fontWeight: 700,
                          color: "#fff",
                          background: "#3D62F5",
                          textAlign: "center",
                          padding: 5,
                          borderRadius: 6,
                        } as any
                      }
                    >
                      Generar reporte
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      fontSize: ".62rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: 7,
                    } as any
                  }
                >
                  Mis reportes recientes
                </div>
                <div
                  style={
                    {
                      background: "#fff",
                      borderRadius: 10,
                      overflow: "hidden",
                    } as any
                  }
                >
                  <table
                    style={{ width: "100%", borderCollapse: "collapse" } as any}
                  >
                    <thead>
                      <tr style={{ background: "#fafafa" } as any}>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Nombre del reporte
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Ámbito
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Generado por
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Fecha
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Formato
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".5rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 8px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        />
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".56rem",
                              color: "#1e293b",
                              fontWeight: 700,
                            } as any
                          }
                        >
                          📑 Estado de acreditación — Junio 2026
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Todas las faenas
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Gonzalo Vera
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          18 jun 2026
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fee2e2",
                                color: "#b91c1c",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            PDF
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⬇
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".56rem",
                              color: "#1e293b",
                              fontWeight: 700,
                            } as any
                          }
                        >
                          ✅ Cumplimiento de requisitos — Los Pelambres
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Los Pelambres
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Gonzalo Vera
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          15 jun 2026
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Excel
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⬇
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".56rem",
                              color: "#1e293b",
                              fontWeight: 700,
                            } as any
                          }
                        >
                          👥 Personal acreditado — Mayo 2026
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Todas las faenas
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          M. Salinas
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          2 jun 2026
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fee2e2",
                                color: "#b91c1c",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            PDF
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⬇
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" } as any}>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".56rem",
                              color: "#1e293b",
                              fontWeight: 700,
                            } as any
                          }
                        >
                          ⏰ Vencimientos — próximos 30 días
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Candelaria, Zaldívar
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Gonzalo Vera
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          28 may 2026
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#dcfce7",
                                color: "#166534",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Excel
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⬇
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".56rem",
                              color: "#1e293b",
                              fontWeight: 700,
                            } as any
                          }
                        >
                          🚛 Equipos y vehículos — Q2 2026
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          Todas las faenas
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          M. Salinas
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              fontSize: ".53rem",
                              color: "#475569",
                            } as any
                          }
                        >
                          20 may 2026
                        </td>
                        <td style={{ padding: "5px 8px" } as any}>
                          <span
                            style={
                              {
                                background: "#fee2e2",
                                color: "#b91c1c",
                                fontSize: ".48rem",
                                fontWeight: 700,
                                padding: "2px 6px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            PDF
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 8px",
                              color: "#94A3B8",
                              fontSize: ".6rem",
                            } as any
                          }
                        >
                          ⬇
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mock-ai-guide">
                <div className="mock-ai-bubble">
                  <div data-i18n="dash.sofianame" className="nm">
                    <span className="dot" />
                    Sofía · Asistente IA
                  </div>
                  <div className="tx">
                    ¿Generamos el reporte mensual de cumplimiento ahora?
                  </div>
                </div>
                <div className="mock-ai-avatar">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={50} cy={50} r={50} fill="#FDE9D2" />
                    <path
                      d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z"
                      fill="#2448E0"
                    />
                    <path
                      d="M35 95 L50 79 L65 95"
                      stroke="#ffffff"
                      strokeWidth={5}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity=".9"
                    />
                    <path
                      d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z"
                      fill="#F2C49B"
                    />
                    <path
                      d="M27 36 C24 47 26 58 33 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M73 36 C76 47 74 58 67 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx={41} cy={43} r="2.6" fill="#2A1A10" />
                    <circle cx={59} cy={43} r="2.6" fill="#2A1A10" />
                    <path
                      d="M41 54 Q50 60 59 54"
                      stroke="#9a5236"
                      strokeWidth="2.4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z"
                      fill="#f2cda0"
                    />
                    <rect
                      x={19}
                      y={26}
                      width={62}
                      height={6}
                      rx={3}
                      fill="#e0b27c"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SCREEN 3: Alertas IA */}
        <div id="mock-alertas" className="mock-screen">
          <div className="browser-frame">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-url">
                🔒 acredittia.cl · Alertas · 10 activas
              </div>
            </div>
            <div className="mock-app" style={{ background: "#F8FAFC" } as any}>
              <div
                className="mock-sidebar"
                style={
                  {
                    background: "#0F172A",
                    borderRight: "1px solid #1E3A5F",
                    gap: 2,
                    padding: "14px 10px",
                  } as any
                }
              >
                <div
                  className="mock-logo"
                  style={
                    {
                      paddingBottom: 14,
                      borderBottom: "1px solid #F1F5F9",
                      marginBottom: 10,
                    } as any
                  }
                >
                  <svg
                    style={{ width: 15, height: 13 } as any}
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50 12 L92 86 L66 86 L50 48 L34 86 L8 86 Z"
                      fill="#1D4ED8"
                    />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span
                      style={{ color: "#1D4ED8", marginLeft: "-.08em" } as any}
                    >
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 8px",
                      borderRadius: 8,
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid #1E3A5F",
                      marginBottom: 8,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#3D62F5,#6B8FFF)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".6rem",
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      } as any
                    }
                  >
                    T
                  </div>
                  <div
                    style={
                      {
                        fontSize: ".65rem",
                        fontWeight: 600,
                        color: "#F1F5F9",
                      } as any
                    }
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div data-i18n="nav.contratos" className="mock-nav-item">
                  📋 Contratos
                </div>
                <div data-i18n="nav.faenas" className="mock-nav-item">
                  🏔️ Faenas
                </div>
                <div data-i18n="nav.personal" className="mock-nav-item">
                  👥 Personal
                </div>
                <div data-i18n="nav.equipos" className="mock-nav-item">
                  🚛 Equipos / Vehículos
                </div>
                <div data-i18n="nav.requisitos" className="mock-nav-item">
                  📑 Requisitos
                </div>
                <div data-i18n="nav.reportes" className="mock-nav-item">
                  📊 Reportes
                </div>
                <div
                  data-i18n="nav.alertas"
                  className="mock-nav-item active"
                  style={
                    { background: "rgba(61,98,245,.2)", color: "#fff" } as any
                  }
                >
                  🔔 Alertas{" "}
                  <span
                    style={
                      {
                        marginLeft: "auto",
                        background: "#EF4444",
                        color: "#fff",
                        fontSize: ".55rem",
                        padding: "1px 5px",
                        borderRadius: 8,
                      } as any
                    }
                  >
                    7
                  </span>
                </div>
                <div data-i18n="nav.calendario" className="mock-nav-item">
                  📅 Calendario
                </div>
                <div data-i18n="nav.integraciones" className="mock-nav-item">
                  🔌 Integraciones
                </div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#F8FAFC", padding: 16 } as any}
              >
                <div
                  style={
                    {
                      fontSize: ".82rem",
                      fontWeight: 800,
                      color: "#0F172A",
                      marginBottom: 2,
                    } as any
                  }
                >
                  Alertas
                </div>
                <div
                  style={
                    {
                      fontSize: ".6rem",
                      color: "#64748B",
                      marginBottom: 12,
                    } as any
                  }
                >
                  Supervisa y gestiona las alertas críticas que requieren
                  atención.
                </div>
                {/* KPI row */}
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(4,1fr)",
                      gap: 7,
                      marginBottom: 12,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#fee2e2",
                        borderRadius: 9,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <span style={{ fontSize: ".9rem" } as any}>🔴</span>
                    <div>
                      <div
                        style={
                          {
                            fontSize: ".55rem",
                            fontWeight: 700,
                            color: "#b91c1c",
                          } as any
                        }
                      >
                        Críticas
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#b91c1c",
                          } as any
                        }
                      >
                        3
                      </div>
                      <div
                        style={{ fontSize: ".48rem", color: "#b91c1c" } as any}
                      >
                        requieren atención
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#fef3c7",
                        borderRadius: 9,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <span style={{ fontSize: ".9rem" } as any}>⚠️</span>
                    <div>
                      <div
                        style={
                          {
                            fontSize: ".55rem",
                            fontWeight: 700,
                            color: "#92400e",
                          } as any
                        }
                      >
                        Advertencias
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#92400e",
                          } as any
                        }
                      >
                        4
                      </div>
                      <div
                        style={{ fontSize: ".48rem", color: "#92400e" } as any}
                      >
                        requieren atención
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#dbeafe",
                        borderRadius: 9,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <span style={{ fontSize: ".9rem" } as any}>ℹ️</span>
                    <div>
                      <div
                        style={
                          {
                            fontSize: ".55rem",
                            fontWeight: 700,
                            color: "#1e40af",
                          } as any
                        }
                      >
                        Informativas
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#1e40af",
                          } as any
                        }
                      >
                        3
                      </div>
                      <div
                        style={{ fontSize: ".48rem", color: "#1e40af" } as any}
                      >
                        nuevas
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#dcfce7",
                        borderRadius: 9,
                        padding: 9,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                      } as any
                    }
                  >
                    <span style={{ fontSize: ".9rem" } as any}>✅</span>
                    <div>
                      <div
                        style={
                          {
                            fontSize: ".55rem",
                            fontWeight: 700,
                            color: "#166534",
                          } as any
                        }
                      >
                        Resueltas
                      </div>
                      <div
                        style={
                          {
                            fontSize: ".95rem",
                            fontWeight: 900,
                            color: "#166534",
                          } as any
                        }
                      >
                        24
                      </div>
                      <div
                        style={{ fontSize: ".48rem", color: "#166534" } as any}
                      >
                        últimos 30 días
                      </div>
                    </div>
                  </div>
                </div>
                {/* alert tabs */}
                <div
                  style={
                    {
                      display: "flex",
                      gap: 2,
                      background: "#fff",
                      border: "1px solid #E2E8F0",
                      borderRadius: 8,
                      padding: 3,
                      width: "fit-content",
                      marginBottom: 10,
                    } as any
                  }
                >
                  <span
                    style={
                      {
                        padding: "4px 10px",
                        background: "#38BDF8",
                        color: "#fff",
                        borderRadius: 6,
                        fontSize: ".6rem",
                        fontWeight: 700,
                      } as any
                    }
                  >
                    Todas
                  </span>
                  <span
                    style={
                      {
                        padding: "4px 10px",
                        color: "#64748B",
                        fontSize: ".6rem",
                        fontWeight: 600,
                      } as any
                    }
                  >
                    Críticas{" "}
                    <span
                      style={
                        {
                          background: "#fee2e2",
                          color: "#b91c1c",
                          fontSize: ".5rem",
                          borderRadius: 5,
                          padding: "1px 4px",
                        } as any
                      }
                    >
                      3
                    </span>
                  </span>
                  <span
                    style={
                      {
                        padding: "4px 10px",
                        color: "#64748B",
                        fontSize: ".6rem",
                        fontWeight: 600,
                      } as any
                    }
                  >
                    Advertencias
                  </span>
                  <span
                    style={
                      {
                        padding: "4px 10px",
                        color: "#64748B",
                        fontSize: ".6rem",
                        fontWeight: 600,
                      } as any
                    }
                  >
                    Resueltas
                  </span>
                </div>
                {/* alerts table (mini) */}
                <div
                  style={
                    {
                      background: "#fff",
                      borderRadius: 10,
                      overflow: "hidden",
                    } as any
                  }
                >
                  <table
                    style={{ width: "100%", borderCollapse: "collapse" } as any}
                  >
                    <thead>
                      <tr style={{ background: "#fafafa" } as any}>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".52rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 9px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Prioridad
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".52rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 9px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Alerta
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".52rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 9px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Relacionado con
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              fontSize: ".52rem",
                              color: "#64748B",
                              fontWeight: 700,
                              padding: "6px 9px",
                              borderBottom: "1px solid #E2E8F0",
                              textTransform: "uppercase",
                            } as any
                          }
                        >
                          Estado
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                fontSize: ".58rem",
                                fontWeight: 700,
                                color: "#b91c1c",
                              } as any
                            }
                          >
                            ⊗ Crítica
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".6rem",
                              color: "#1e293b",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          Vencimiento: Rev. técnica
                          <div
                            style={
                              {
                                fontWeight: 400,
                                color: "#64748B",
                                fontSize: ".53rem",
                              } as any
                            }
                          >
                            Tracto LXDY88 · hace 3 días
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".58rem",
                              color: "#64748B",
                            } as any
                          }
                        >
                          Collahuasi / CT-7821
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                background: "#fee2e2",
                                color: "#b91c1c",
                                fontSize: ".5rem",
                                fontWeight: 700,
                                padding: "1px 5px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                fontSize: ".58rem",
                                fontWeight: 700,
                                color: "#b91c1c",
                              } as any
                            }
                          >
                            ⊗ Crítica
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".6rem",
                              color: "#1e293b",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          Seguro accidentes vencido
                          <div
                            style={
                              {
                                fontWeight: 400,
                                color: "#64748B",
                                fontSize: ".53rem",
                              } as any
                            }
                          >
                            Empresa · hace 1 día
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".58rem",
                              color: "#64748B",
                            } as any
                          }
                        >
                          Candelaria / CT-5501
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                background: "#fee2e2",
                                color: "#b91c1c",
                                fontSize: ".5rem",
                                fontWeight: 700,
                                padding: "1px 5px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                fontSize: ".58rem",
                                fontWeight: 700,
                                color: "#b91c1c",
                              } as any
                            }
                          >
                            ⊗ Crítica
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".6rem",
                              color: "#1e293b",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          Cert. OTIC vencido en SIGA
                          <div
                            style={
                              {
                                fontWeight: 400,
                                color: "#64748B",
                                fontSize: ".53rem",
                              } as any
                            }
                          >
                            González Mario · hace 5 días
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".58rem",
                              color: "#64748B",
                            } as any
                          }
                        >
                          Los Pelambres / CT-45641
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                background: "#fee2e2",
                                color: "#b91c1c",
                                fontSize: ".5rem",
                                fontWeight: 700,
                                padding: "1px 5px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                fontSize: ".58rem",
                                fontWeight: 700,
                                color: "#92400e",
                              } as any
                            }
                          >
                            ⚠ Advertencia
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".6rem",
                              color: "#1e293b",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          Por vencer: F30-1
                          <div
                            style={
                              {
                                fontWeight: 400,
                                color: "#64748B",
                                fontSize: ".53rem",
                              } as any
                            }
                          >
                            Vence en 8 días
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".58rem",
                              color: "#64748B",
                            } as any
                          }
                        >
                          Centinela / CT-002
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                background: "#fef3c7",
                                color: "#92400e",
                                fontSize: ".5rem",
                                fontWeight: 700,
                                padding: "1px 5px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                fontSize: ".58rem",
                                fontWeight: 700,
                                color: "#92400e",
                              } as any
                            }
                          >
                            ⚠ Advertencia
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".6rem",
                              color: "#1e293b",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          Examen altura por vencer
                          <div
                            style={
                              {
                                fontWeight: 400,
                                color: "#64748B",
                                fontSize: ".53rem",
                              } as any
                            }
                          >
                            Ruiz José · en 12 días
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".58rem",
                              color: "#64748B",
                            } as any
                          }
                        >
                          Los Pelambres / CT-45641
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                background: "#fef3c7",
                                color: "#92400e",
                                fontSize: ".5rem",
                                fontWeight: 700,
                                padding: "1px 5px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                fontSize: ".58rem",
                                fontWeight: 700,
                                color: "#92400e",
                              } as any
                            }
                          >
                            ⚠ Advertencia
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".6rem",
                              color: "#1e293b",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          Licencia conducir B por vencer
                          <div
                            style={
                              {
                                fontWeight: 400,
                                color: "#64748B",
                                fontSize: ".53rem",
                              } as any
                            }
                          >
                            Mora Rodrigo · en 18 días
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".58rem",
                              color: "#64748B",
                            } as any
                          }
                        >
                          El Teniente / CT-9102
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                background: "#fef3c7",
                                color: "#92400e",
                                fontSize: ".5rem",
                                fontWeight: 700,
                                padding: "1px 5px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                fontSize: ".58rem",
                                fontWeight: 700,
                                color: "#92400e",
                              } as any
                            }
                          >
                            ⚠ Advertencia
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".6rem",
                              color: "#1e293b",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          Permiso de circulación vence pronto
                          <div
                            style={
                              {
                                fontWeight: 400,
                                color: "#64748B",
                                fontSize: ".53rem",
                              } as any
                            }
                          >
                            Camión HBCK21 · en 22 días
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".58rem",
                              color: "#64748B",
                            } as any
                          }
                        >
                          Zaldívar / CT-3310
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                background: "#fef3c7",
                                color: "#92400e",
                                fontSize: ".5rem",
                                fontWeight: 700,
                                padding: "1px 5px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                fontSize: ".58rem",
                                fontWeight: 700,
                                color: "#1e40af",
                              } as any
                            }
                          >
                            ℹ Informativa
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".6rem",
                              color: "#1e293b",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          IA: Antigüedad excedida
                          <div
                            style={
                              {
                                fontWeight: 400,
                                color: "#64748B",
                                fontSize: ".53rem",
                              } as any
                            }
                          >
                            RPDC68 · 17 años vs máx 15
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".58rem",
                              color: "#64748B",
                            } as any
                          }
                        >
                          Centinela / CT-002
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                background: "#f1f5f9",
                                color: "#64748b",
                                fontSize: ".5rem",
                                fontWeight: 700,
                                padding: "1px 5px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                fontSize: ".58rem",
                                fontWeight: 700,
                                color: "#1e40af",
                              } as any
                            }
                          >
                            ℹ Informativa
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".6rem",
                              color: "#1e293b",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          IA: Firma ausente en contrato
                          <div
                            style={
                              {
                                fontWeight: 400,
                                color: "#64748B",
                                fontSize: ".53rem",
                              } as any
                            }
                          >
                            Contrato CT-7821 — página 3
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                              fontSize: ".58rem",
                              color: "#64748B",
                            } as any
                          }
                        >
                          Collahuasi / CT-7821
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              borderBottom: "1px solid #F1F5F9",
                            } as any
                          }
                        >
                          <span
                            style={
                              {
                                background: "#f1f5f9",
                                color: "#64748b",
                                fontSize: ".5rem",
                                fontWeight: 700,
                                padding: "1px 5px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 9px" } as any}>
                          <span
                            style={
                              {
                                fontSize: ".58rem",
                                fontWeight: 700,
                                color: "#1e40af",
                              } as any
                            }
                          >
                            ℹ Informativa
                          </span>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              fontSize: ".6rem",
                              color: "#1e293b",
                              fontWeight: 600,
                            } as any
                          }
                        >
                          Nuevo req. publicado en WORKMATE
                          <div
                            style={
                              {
                                fontWeight: 400,
                                color: "#64748B",
                                fontSize: ".53rem",
                              } as any
                            }
                          >
                            Los Pelambres actualizó requisitos
                          </div>
                        </td>
                        <td
                          style={
                            {
                              padding: "5px 9px",
                              fontSize: ".58rem",
                              color: "#64748B",
                            } as any
                          }
                        >
                          Los Pelambres / CT-45641
                        </td>
                        <td style={{ padding: "5px 9px" } as any}>
                          <span
                            style={
                              {
                                background: "#f1f5f9",
                                color: "#64748b",
                                fontSize: ".5rem",
                                fontWeight: 700,
                                padding: "1px 5px",
                                borderRadius: 6,
                              } as any
                            }
                          >
                            Leída
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mock-ai-guide">
                <div className="mock-ai-bubble">
                  <div data-i18n="dash.sofianame" className="nm">
                    <span className="dot" />
                    Sofía · Asistente IA
                  </div>
                  <div className="tx">
                    Tienes <b>3 alertas críticas</b> sin leer. ¿Te ayudo a
                    resolverlas?
                  </div>
                </div>
                <div className="mock-ai-avatar">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={50} cy={50} r={50} fill="#FDE9D2" />
                    <path
                      d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z"
                      fill="#2448E0"
                    />
                    <path
                      d="M35 95 L50 79 L65 95"
                      stroke="#ffffff"
                      strokeWidth={5}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity=".9"
                    />
                    <path
                      d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z"
                      fill="#F2C49B"
                    />
                    <path
                      d="M27 36 C24 47 26 58 33 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M73 36 C76 47 74 58 67 64"
                      stroke="#3B2415"
                      strokeWidth={8}
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx={41} cy={43} r="2.6" fill="#2A1A10" />
                    <circle cx={59} cy={43} r="2.6" fill="#2A1A10" />
                    <path
                      d="M41 54 Q50 60 59 54"
                      stroke="#9a5236"
                      strokeWidth="2.4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z"
                      fill="#f2cda0"
                    />
                    <rect
                      x={19}
                      y={26}
                      width={62}
                      height={6}
                      rx={3}
                      fill="#e0b27c"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
