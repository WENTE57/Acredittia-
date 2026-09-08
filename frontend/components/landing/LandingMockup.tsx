"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function LandingMockup() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  // Todo: Migrar scripts de animación aquí

  return (
    <div ref={ref}>
      {/* MOCKUP SECTION */}
      <section className="mockup-section" id="plataforma">
        <div className="ms-head">
          <span className="sec-label">ASÍ SE VE LA PLATAFORMA</span>
          <h2>
            Rápido, fácil y claro.
            <br />
            Sin volverte loco.
          </h2>
          <p>
            Un solo panel para ver todas tus acreditaciones, sin importar
            cuántas faenas o plataformas tenga cada una.
          </p>
        </div>
        {/* Tabs */}
        <div className="mock-tabs">
          <div
            className="mock-tab active"
            onClick={() => router.push("/login")}
          >
            🏠 Inicio
          </div>
          <div className="mock-tab" onClick={() => router.push("/login")}>
            📋 Contratos
          </div>
          <div className="mock-tab" onClick={() => router.push("/login")}>
            👥 Personal
          </div>
          <div className="mock-tab" onClick={() => router.push("/login")}>
            🚛 Equipos
          </div>
          <div className="mock-tab" onClick={() => router.push("/login")}>
            🏔️ Faenas
          </div>
          <div className="mock-tab" onClick={() => router.push("/login")}>
            📊 Reportes
          </div>
          <div className="mock-tab" onClick={() => router.push("/login")}>
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
              <div className="browser-url">🔒 acredittia.cl · Inicio</div>
            </div>
            <div className="mock-app" style={{ background: "#080E1C" }}>
              {/* sidebar */}
              <div
                className="mock-sidebar"
                style={{
                  background: "#0F172A",
                  borderRight: "1px solid #1E3A5F",
                  gap: 2,
                  padding: "14px 10px",
                }}
              >
                <div
                  className="mock-logo"
                  style={{
                    paddingBottom: 14,
                    borderBottom: "1px solid #1E3A5F",
                    marginBottom: 10,
                  }}
                >
                  <svg style={{ width: 15, height: 13 }} viewBox="0 0 100 92">
                    <path
                      d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z"
                      fill="#f2cda0"
                    />
                    <path d="M50 6 L66 36 L50 44 Z" fill="#fff" />
                  </svg>
                  <span>
                    ACREDIT
                    <span style={{ color: "#38BDF8", marginLeft: "-.08em" }}>
                      TIA
                    </span>
                  </span>
                </div>
                {/* user chip */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: 8,
                    borderRadius: 10,
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid #1E3A5F",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
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
                    }}
                  >
                    T
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: ".72rem",
                        fontWeight: 600,
                        color: "#F1F5F9",
                      }}
                    >
                      Tiex SpA
                    </div>
                    <div style={{ fontSize: ".6rem", color: "#64748B" }}>
                      Administrador
                    </div>
                  </div>
                </div>
                <div
                  className="mock-nav-item active"
                  style={{ background: "rgba(61,98,245,.2)", color: "#fff" }}
                >
                  🏠 Inicio
                </div>
                <div className="mock-nav-item">📋 Contratos</div>
                <div className="mock-nav-item">🏔️ Faenas</div>
                <div className="mock-nav-item">👥 Personal</div>
                <div className="mock-nav-item">🚛 Equipos / Vehículos</div>
                <div className="mock-nav-item">📑 Requisitos</div>
                <div className="mock-nav-item">📊 Reportes</div>
                <div className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={{
                      marginLeft: "auto",
                      background: "#EF4444",
                      color: "#fff",
                      fontSize: ".55rem",
                      padding: "1px 5px",
                      borderRadius: 8,
                    }}
                  >
                    7
                  </span>
                </div>
                <div className="mock-nav-item">📅 Calendario</div>
                <div className="mock-nav-item">🔌 Integraciones</div>
              </div>
              {/* main */}
              <div
                className="mock-main"
                style={{ background: "#080E1C", padding: "18px 16px" }}
              >
                {/* header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 14,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: ".88rem",
                        fontWeight: 700,
                        color: "#F1F5F9",
                      }}
                    >
                      ¡Hola, Tiex!
                    </div>
                    <div style={{ fontSize: ".62rem", color: "#64748B" }}>
                      Resumen de tu operación en todas las faenas
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", gap: 6, alignItems: "center" }}
                  >
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 8,
                        background: "#1E293B",
                        border: "1px solid #1E3A5F",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".7rem",
                      }}
                    >
                      ?
                    </div>
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 8,
                        background: "#1E293B",
                        border: "1px solid #1E3A5F",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                      }}
                    >
                      🔔
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        background: "#1E293B",
                        border: "1px solid #1E3A5F",
                        borderRadius: 10,
                        padding: "4px 8px",
                      }}
                    >
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg,#3D62F5,#6B8FFF)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: ".65rem",
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        T
                      </div>
                      <span
                        style={{
                          fontSize: ".62rem",
                          fontWeight: 600,
                          color: "#F1F5F9",
                        }}
                      >
                        Tiex SpA
                      </span>
                    </div>
                  </div>
                </div>
                {/* 5 KPI cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5,1fr)",
                    gap: 7,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(61,98,245,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".8rem",
                        flexShrink: 0,
                      }}
                    >
                      📋
                    </div>
                    <div>
                      <div style={{ fontSize: ".55rem", color: "#64748B" }}>
                        Contratos activos
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        6
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(61,98,245,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".8rem",
                        flexShrink: 0,
                      }}
                    >
                      🏔️
                    </div>
                    <div>
                      <div style={{ fontSize: ".55rem", color: "#64748B" }}>
                        Faenas activas
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        4
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(16,185,129,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".8rem",
                        flexShrink: 0,
                      }}
                    >
                      👥
                    </div>
                    <div>
                      <div style={{ fontSize: ".55rem", color: "#64748B" }}>
                        Personal acreditado
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        48
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(16,185,129,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".8rem",
                        flexShrink: 0,
                      }}
                    >
                      🚛
                    </div>
                    <div>
                      <div style={{ fontSize: ".55rem", color: "#64748B" }}>
                        Equipos acreditados
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        15
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                        position: "relative",
                      }}
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
                        style={{
                          position: "absolute",
                          fontSize: ".45rem",
                          fontWeight: 900,
                          color: "#10B981",
                        }}
                      >
                        76%
                      </span>
                    </div>
                    <div>
                      <div style={{ fontSize: ".55rem", color: "#64748B" }}>
                        Cumplimiento
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 900,
                          color: "#10B981",
                        }}
                      >
                        76%
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2-col bottom */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 1fr",
                    gap: 8,
                  }}
                >
                  {/* contracts table */}
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        padding: "9px 12px",
                        borderBottom: "1px solid #1E3A5F",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: ".72rem",
                          fontWeight: 700,
                          color: "#F1F5F9",
                        }}
                      >
                        Mis contratos{" "}
                        <span
                          style={{
                            fontWeight: 400,
                            color: "#64748B",
                            fontSize: ".6rem",
                          }}
                        >
                          (6 activos)
                        </span>
                      </span>
                      <span
                        style={{
                          fontSize: ".6rem",
                          color: "#38BDF8",
                          fontWeight: 600,
                        }}
                      >
                        Ver todos →
                      </span>
                    </div>
                    <div style={{ padding: "0 12px" }}>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #1E3A5F" }}
                      >
                        <div
                          style={{
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
                          }}
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="mr-name"
                            style={{ color: "#F1F5F9", fontSize: ".68rem" }}
                          >
                            MLP Operaciones
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" }}
                          >
                            Los Pelambres · SIGA · WORKMATE
                          </div>
                        </div>
                        <div className="mock-bar-wrap" style={{ width: 50 }}>
                          <div
                            className="mock-bar-fill"
                            style={{ width: "74%", background: "#10B981" }}
                          />
                        </div>
                        <span
                          className="mbadge ok"
                          style={{ fontSize: ".55rem" }}
                        >
                          74%
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #1E3A5F" }}
                      >
                        <div
                          style={{
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
                          }}
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="mr-name"
                            style={{ color: "#F1F5F9", fontSize: ".68rem" }}
                          >
                            Collahuasi CT-7821
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" }}
                          >
                            Collahuasi · METACONTRATAS
                          </div>
                        </div>
                        <div className="mock-bar-wrap" style={{ width: 50 }}>
                          <div
                            className="mock-bar-fill"
                            style={{ width: "58%", background: "#F59E0B" }}
                          />
                        </div>
                        <span
                          className="mbadge warn"
                          style={{ fontSize: ".55rem" }}
                        >
                          58%
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #1E3A5F" }}
                      >
                        <div
                          style={{
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
                          }}
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="mr-name"
                            style={{ color: "#F1F5F9", fontSize: ".68rem" }}
                          >
                            Centinela Servicios
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" }}
                          >
                            Centinela · WEBCONTROL
                          </div>
                        </div>
                        <div className="mock-bar-wrap" style={{ width: 50 }}>
                          <div
                            className="mock-bar-fill"
                            style={{ width: "91%", background: "#10B981" }}
                          />
                        </div>
                        <span
                          className="mbadge ok"
                          style={{ fontSize: ".55rem" }}
                        >
                          91%
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #1E3A5F" }}
                      >
                        <div
                          style={{
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
                          }}
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="mr-name"
                            style={{ color: "#F1F5F9", fontSize: ".68rem" }}
                          >
                            El Teniente Mant.
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" }}
                          >
                            El Teniente · SIGA
                          </div>
                        </div>
                        <div className="mock-bar-wrap" style={{ width: 50 }}>
                          <div
                            className="mock-bar-fill"
                            style={{ width: "83%", background: "#10B981" }}
                          />
                        </div>
                        <span
                          className="mbadge ok"
                          style={{ fontSize: ".55rem" }}
                        >
                          83%
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #1E3A5F" }}
                      >
                        <div
                          style={{
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
                          }}
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="mr-name"
                            style={{ color: "#F1F5F9", fontSize: ".68rem" }}
                          >
                            Candelaria Infraestr.
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" }}
                          >
                            Candelaria · WEBCONTROL
                          </div>
                        </div>
                        <div className="mock-bar-wrap" style={{ width: 50 }}>
                          <div
                            className="mock-bar-fill"
                            style={{ width: "42%", background: "#EF4444" }}
                          />
                        </div>
                        <span
                          className="mbadge err"
                          style={{ fontSize: ".55rem" }}
                        >
                          42%
                        </span>
                      </div>
                      <div className="mock-row">
                        <div
                          style={{
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
                          }}
                        >
                          ⛰
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="mr-name"
                            style={{ color: "#F1F5F9", fontSize: ".68rem" }}
                          >
                            Zaldívar Operaciones
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".58rem" }}
                          >
                            Zaldívar · SIGA
                          </div>
                        </div>
                        <div className="mock-bar-wrap" style={{ width: 50 }}>
                          <div
                            className="mock-bar-fill"
                            style={{ width: "67%", background: "#F59E0B" }}
                          />
                        </div>
                        <span
                          className="mbadge warn"
                          style={{ fontSize: ".55rem" }}
                        >
                          67%
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* alerts panel */}
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        padding: "9px 12px",
                        borderBottom: "1px solid #1E3A5F",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: ".72rem",
                          fontWeight: 700,
                          color: "#F1F5F9",
                        }}
                      >
                        Alertas recientes
                      </span>
                      <span
                        style={{
                          background: "#fee2e2",
                          color: "#b91c1c",
                          fontSize: ".55rem",
                          fontWeight: 700,
                          padding: "1px 5px",
                          borderRadius: 6,
                        }}
                      >
                        10
                      </span>
                    </div>
                    <div style={{ padding: "0 10px" }}>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #1E3A5F", gap: 6 }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 5,
                            background: "#fee2e2",
                            display: "grid",
                            placeItems: "center",
                            fontSize: ".55rem",
                            flexShrink: 0,
                          }}
                        >
                          🔴
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="mr-name"
                            style={{ color: "#fca5a5", fontSize: ".62rem" }}
                          >
                            Rev. técnica vencida
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".54rem" }}
                          >
                            LXDY88 · hace 3 días
                          </div>
                        </div>
                        <span
                          className="mbadge err"
                          style={{ fontSize: ".5rem" }}
                        >
                          Crítica
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #1E3A5F", gap: 6 }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 5,
                            background: "#fee2e2",
                            display: "grid",
                            placeItems: "center",
                            fontSize: ".55rem",
                            flexShrink: 0,
                          }}
                        >
                          🔴
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="mr-name"
                            style={{ color: "#fca5a5", fontSize: ".62rem" }}
                          >
                            Seguro accidentes vencido
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".54rem" }}
                          >
                            Empresa · hace 1 día
                          </div>
                        </div>
                        <span
                          className="mbadge err"
                          style={{ fontSize: ".5rem" }}
                        >
                          Crítica
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #1E3A5F", gap: 6 }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 5,
                            background: "#fef3c7",
                            display: "grid",
                            placeItems: "center",
                            fontSize: ".55rem",
                            flexShrink: 0,
                          }}
                        >
                          ⚠️
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="mr-name"
                            style={{ color: "#fde68a", fontSize: ".62rem" }}
                          >
                            F30-1 por vencer
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".54rem" }}
                          >
                            Empresa · en 8 días
                          </div>
                        </div>
                        <span
                          className="mbadge warn"
                          style={{ fontSize: ".5rem" }}
                        >
                          8 días
                        </span>
                      </div>
                      <div
                        className="mock-row"
                        style={{ borderBottom: "1px solid #1E3A5F", gap: 6 }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 5,
                            background: "#fef3c7",
                            display: "grid",
                            placeItems: "center",
                            fontSize: ".55rem",
                            flexShrink: 0,
                          }}
                        >
                          ⚠️
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="mr-name"
                            style={{ color: "#fde68a", fontSize: ".62rem" }}
                          >
                            Examen altura por vencer
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".54rem" }}
                          >
                            Ruiz José · en 12 días
                          </div>
                        </div>
                        <span
                          className="mbadge warn"
                          style={{ fontSize: ".5rem" }}
                        >
                          12 días
                        </span>
                      </div>
                      <div className="mock-row" style={{ gap: 6 }}>
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 5,
                            background: "#dbeafe",
                            display: "grid",
                            placeItems: "center",
                            fontSize: ".55rem",
                            flexShrink: 0,
                          }}
                        >
                          ℹ️
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            className="mr-name"
                            style={{ color: "#93C5FD", fontSize: ".62rem" }}
                          >
                            IA: Antigüedad excedida
                          </div>
                          <div
                            className="mr-sub"
                            style={{ fontSize: ".54rem" }}
                          >
                            RPDC68 · 17 años vs máx 15
                          </div>
                        </div>
                        <span
                          style={{
                            fontSize: ".5rem",
                            background: "#dbeafe",
                            color: "#1e40af",
                            padding: "1px 4px",
                            borderRadius: 4,
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                          }}
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
                  <div className="nm">
                    <span className="dot" />
                    Sofía · Asistente IA
                  </div>
                  <div className="tx">
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
            <div className="mock-app" style={{ background: "#080E1C" }}>
              <div
                className="mock-sidebar"
                style={{
                  background: "#0F172A",
                  borderRight: "1px solid #1E3A5F",
                  gap: 2,
                  padding: "14px 10px",
                }}
              >
                <div
                  className="mock-logo"
                  style={{
                    paddingBottom: 14,
                    borderBottom: "1px solid #1E3A5F",
                    marginBottom: 10,
                  }}
                >
                  <svg style={{ width: 15, height: 13 }} viewBox="0 0 100 92">
                    <path
                      d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z"
                      fill="#f2cda0"
                    />
                    <path d="M50 6 L66 36 L50 44 Z" fill="#fff" />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span style={{ color: "#38BDF8", marginLeft: "-.08em" }}>
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 8px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid #1E3A5F",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
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
                    }}
                  >
                    T
                  </div>
                  <div
                    style={{
                      fontSize: ".65rem",
                      fontWeight: 600,
                      color: "#F1F5F9",
                    }}
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div
                  className="mock-nav-item active"
                  style={{ background: "rgba(61,98,245,.2)", color: "#fff" }}
                >
                  📋 Contratos
                </div>
                <div className="mock-nav-item">🏔️ Faenas</div>
                <div className="mock-nav-item">👥 Personal</div>
                <div className="mock-nav-item">🚛 Equipos / Vehículos</div>
                <div className="mock-nav-item">📑 Requisitos</div>
                <div className="mock-nav-item">📊 Reportes</div>
                <div className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={{
                      marginLeft: "auto",
                      background: "#EF4444",
                      color: "#fff",
                      fontSize: ".55rem",
                      padding: "1px 5px",
                      borderRadius: 8,
                    }}
                  >
                    7
                  </span>
                </div>
                <div className="mock-nav-item">📅 Calendario</div>
                <div className="mock-nav-item">🔌 Integraciones</div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#080E1C", padding: 16 }}
              >
                {/* breadcrumb + title */}
                <div
                  style={{
                    fontSize: ".58rem",
                    color: "#64748B",
                    marginBottom: 8,
                  }}
                >
                  Contratos › Detalle del contrato
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontSize: ".88rem",
                      fontWeight: 800,
                      color: "#fff",
                    }}
                  >
                    Contrato CT-45000641
                  </span>
                  <span
                    style={{
                      background: "#dcfce7",
                      color: "#15803d",
                      fontSize: ".55rem",
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: 8,
                    }}
                  >
                    ● Vigente
                  </span>
                </div>
                <div
                  style={{
                    fontSize: ".62rem",
                    color: "#64748B",
                    marginBottom: 10,
                  }}
                >
                  Minera Los Pelambres
                </div>
                {/* platforms row */}
                <div
                  style={{
                    background: "#1E293B",
                    border: "1px solid #1E3A5F",
                    borderRadius: 10,
                    padding: 10,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      fontSize: ".65rem",
                      fontWeight: 700,
                      color: "#F1F5F9",
                      marginBottom: 7,
                    }}
                  >
                    Plataformas que utiliza Los Pelambres
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid #1E3A5F",
                        borderRadius: 8,
                        padding: "10px 12px",
                        background: "#0F172A",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: 6,
                        }}
                      >
                        <div
                          style={{
                            fontSize: ".6rem",
                            fontWeight: 900,
                            fontStyle: "italic",
                            color: "#2d6a4f",
                            background: "#e8f5e9",
                            borderRadius: 4,
                            padding: "2px 7px",
                            display: "inline-block",
                          }}
                        >
                          siga
                        </div>
                        <span
                          style={{
                            fontSize: ".5rem",
                            background: "#dcfce7",
                            color: "#166534",
                            fontWeight: 700,
                            padding: "1px 5px",
                            borderRadius: 5,
                          }}
                        >
                          ● Conectado
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: ".55rem",
                          color: "#64748B",
                          marginBottom: 2,
                        }}
                      >
                        Sistema de Gestión y Acreditación
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: 6,
                        }}
                      >
                        <div>
                          <div style={{ fontSize: ".52rem", color: "#64748B" }}>
                            Usuarios
                          </div>
                          <div
                            style={{
                              fontSize: ".9rem",
                              fontWeight: 900,
                              color: "#38BDF8",
                            }}
                          >
                            12
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: ".52rem", color: "#64748B" }}>
                            Docs vigentes
                          </div>
                          <div
                            style={{
                              fontSize: ".9rem",
                              fontWeight: 900,
                              color: "#10B981",
                            }}
                          >
                            87
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: ".52rem", color: "#64748B" }}>
                            Alertas
                          </div>
                          <div
                            style={{
                              fontSize: ".9rem",
                              fontWeight: 900,
                              color: "#F59E0B",
                            }}
                          >
                            3
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: ".52rem",
                          color: "#38BDF8",
                          marginTop: 5,
                        }}
                      >
                        Ver detalles en SIGA →
                      </div>
                    </div>
                    <div
                      style={{
                        border: "1px solid #1E3A5F",
                        borderRadius: 8,
                        padding: "10px 12px",
                        background: "#0F172A",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: 6,
                        }}
                      >
                        <div
                          style={{
                            fontSize: ".6rem",
                            fontWeight: 900,
                            color: "#1e3a8a",
                            background: "#dbeafe",
                            borderRadius: 4,
                            padding: "2px 7px",
                            display: "inline-block",
                          }}
                        >
                          WORKMATE
                        </div>
                        <span
                          style={{
                            fontSize: ".5rem",
                            background: "#dcfce7",
                            color: "#166534",
                            fontWeight: 700,
                            padding: "1px 5px",
                            borderRadius: 5,
                          }}
                        >
                          ● Conectado
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: ".55rem",
                          color: "#64748B",
                          marginBottom: 2,
                        }}
                      >
                        Plataforma de Gestión de Contratistas
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: 6,
                        }}
                      >
                        <div>
                          <div style={{ fontSize: ".52rem", color: "#64748B" }}>
                            Usuarios
                          </div>
                          <div
                            style={{
                              fontSize: ".9rem",
                              fontWeight: 900,
                              color: "#38BDF8",
                            }}
                          >
                            20
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: ".52rem", color: "#64748B" }}>
                            Requisitos
                          </div>
                          <div
                            style={{
                              fontSize: ".9rem",
                              fontWeight: 900,
                              color: "#10B981",
                            }}
                          >
                            34
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: ".52rem", color: "#64748B" }}>
                            Alertas
                          </div>
                          <div
                            style={{
                              fontSize: ".9rem",
                              fontWeight: 900,
                              color: "#EF4444",
                            }}
                          >
                            1
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: ".52rem",
                          color: "#38BDF8",
                          marginTop: 5,
                        }}
                      >
                        Ver detalles en WORKMATE →
                      </div>
                    </div>
                  </div>
                </div>
                {/* tabs + resumen */}
                <div
                  style={{
                    display: "flex",
                    gap: 0,
                    borderBottom: "1px solid #1E3A5F",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      padding: "5px 10px",
                      fontSize: ".62rem",
                      fontWeight: 700,
                      color: "#38BDF8",
                      borderBottom: "2px solid #38BDF8",
                    }}
                  >
                    Resumen
                  </span>
                  <span
                    style={{
                      padding: "5px 10px",
                      fontSize: ".62rem",
                      color: "#64748B",
                    }}
                  >
                    Documentos
                  </span>
                  <span
                    style={{
                      padding: "5px 10px",
                      fontSize: ".62rem",
                      color: "#64748B",
                    }}
                  >
                    Personal
                  </span>
                  <span
                    style={{
                      padding: "5px 10px",
                      fontSize: ".62rem",
                      color: "#64748B",
                    }}
                  >
                    Equipos / Vehículos
                  </span>
                  <span
                    style={{
                      padding: "5px 10px",
                      fontSize: ".62rem",
                      color: "#64748B",
                    }}
                  >
                    Alertas IA
                  </span>
                  <span
                    style={{
                      padding: "5px 10px",
                      fontSize: ".62rem",
                      color: "#64748B",
                    }}
                  >
                    Historial
                  </span>
                </div>
                {/* 3-col resumen */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.2fr 1fr 1fr",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 8,
                      padding: 10,
                      fontSize: ".62rem",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#F1F5F9",
                        marginBottom: 7,
                      }}
                    >
                      Información del contrato
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 4 }}>
                      N° de contrato{" "}
                      <span
                        style={{
                          color: "#F1F5F9",
                          float: "right",
                          fontWeight: 600,
                        }}
                      >
                        CT-45000641
                      </span>
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 4 }}>
                      Estado{" "}
                      <span style={{ float: "right" }}>
                        <span
                          style={{
                            background: "#dcfce7",
                            color: "#15803d",
                            fontSize: ".5rem",
                            fontWeight: 700,
                            padding: "1px 5px",
                            borderRadius: 5,
                          }}
                        >
                          Vigente
                        </span>
                      </span>
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 4 }}>
                      Empresa{" "}
                      <span style={{ color: "#F1F5F9", float: "right" }}>
                        Tiex SpA
                      </span>
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 4 }}>
                      Faena{" "}
                      <span style={{ color: "#F1F5F9", float: "right" }}>
                        Los Pelambres
                      </span>
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 4 }}>
                      Inicio{" "}
                      <span style={{ color: "#F1F5F9", float: "right" }}>
                        01/01/2024
                      </span>
                    </div>
                    <div style={{ color: "#64748B" }}>
                      Término{" "}
                      <span style={{ color: "#F1F5F9", float: "right" }}>
                        31/12/2025
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 8,
                      padding: 10,
                      fontSize: ".62rem",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#F1F5F9",
                        marginBottom: 7,
                      }}
                    >
                      Vigencia del contrato
                    </div>
                    <div
                      style={{
                        fontSize: ".55rem",
                        color: "#64748B",
                        textAlign: "right",
                        marginBottom: 4,
                      }}
                    >
                      215 días restantes
                    </div>
                    <div
                      style={{
                        height: 5,
                        background: "#1E3A5F",
                        borderRadius: 5,
                        overflow: "hidden",
                        marginBottom: 8,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "41%",
                          background: "#38BDF8",
                          borderRadius: 5,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(255,255,255,.04)",
                          borderRadius: 6,
                          padding: 6,
                        }}
                      >
                        <div style={{ color: "#64748B", fontSize: ".55rem" }}>
                          Días transcurridos
                        </div>
                        <div
                          style={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: ".72rem",
                          }}
                        >
                          150 días (41%)
                        </div>
                      </div>
                      <div
                        style={{
                          background: "rgba(255,255,255,.04)",
                          borderRadius: 6,
                          padding: 6,
                        }}
                      >
                        <div style={{ color: "#64748B", fontSize: ".55rem" }}>
                          Próx. vencimiento
                        </div>
                        <div
                          style={{
                            color: "#fbbf24",
                            fontWeight: 700,
                            fontSize: ".6rem",
                          }}
                        >
                          Seguro de accidentes
                        </div>
                        <div style={{ color: "#64748B", fontSize: ".52rem" }}>
                          10/04/2025
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 8,
                      padding: 10,
                      fontSize: ".62rem",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#F1F5F9",
                        marginBottom: 7,
                      }}
                    >
                      Resumen general
                    </div>
                    <div
                      style={{
                        color: "#64748B",
                        marginBottom: 3,
                        borderBottom: "1px solid #1E3A5F",
                        paddingBottom: 3,
                      }}
                    >
                      Estado{" "}
                      <span style={{ float: "right" }}>
                        <span
                          style={{
                            background: "#dcfce7",
                            color: "#15803d",
                            fontSize: ".5rem",
                            padding: "1px 5px",
                            borderRadius: 5,
                          }}
                        >
                          Cumplido
                        </span>
                      </span>
                    </div>
                    <div
                      style={{
                        color: "#64748B",
                        marginBottom: 3,
                        borderBottom: "1px solid #1E3A5F",
                        paddingBottom: 3,
                      }}
                    >
                      Requisitos asociados{" "}
                      <span style={{ color: "#F1F5F9", float: "right" }}>
                        28
                      </span>
                    </div>
                    <div
                      style={{
                        color: "#5fbf80",
                        marginBottom: 3,
                        borderBottom: "1px solid #1E3A5F",
                        paddingBottom: 3,
                      }}
                    >
                      Req. cumplidos{" "}
                      <span style={{ float: "right" }}>20 (71%)</span>
                    </div>
                    <div
                      style={{
                        color: "#fbbf24",
                        marginBottom: 3,
                        borderBottom: "1px solid #1E3A5F",
                        paddingBottom: 3,
                      }}
                    >
                      Req. en progreso{" "}
                      <span style={{ float: "right" }}>5 (18%)</span>
                    </div>
                    <div
                      style={{
                        color: "#f87171",
                        marginBottom: 3,
                        borderBottom: "1px solid #1E3A5F",
                        paddingBottom: 3,
                      }}
                    >
                      Req. no cumplidos{" "}
                      <span style={{ float: "right" }}>3 (11%)</span>
                    </div>
                    <div style={{ color: "#64748B", marginBottom: 3 }}>
                      Documentos totales{" "}
                      <span style={{ color: "#F1F5F9", float: "right" }}>
                        145
                      </span>
                    </div>
                    <div style={{ color: "#f87171" }}>
                      Docs vencidos <span style={{ float: "right" }}>10</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mock-ai-guide">
                <div className="mock-ai-bubble">
                  <div className="nm">
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
            <div className="mock-app" style={{ background: "#080E1C" }}>
              <div
                className="mock-sidebar"
                style={{
                  background: "#0F172A",
                  borderRight: "1px solid #1E3A5F",
                  gap: 2,
                  padding: "14px 10px",
                }}
              >
                <div
                  className="mock-logo"
                  style={{
                    paddingBottom: 14,
                    borderBottom: "1px solid #1E3A5F",
                    marginBottom: 10,
                  }}
                >
                  <svg style={{ width: 15, height: 13 }} viewBox="0 0 100 92">
                    <path
                      d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z"
                      fill="#f2cda0"
                    />
                    <path d="M50 6 L66 36 L50 44 Z" fill="#fff" />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span style={{ color: "#38BDF8", marginLeft: "-.08em" }}>
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 8px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid #1E3A5F",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
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
                    }}
                  >
                    T
                  </div>
                  <div
                    style={{
                      fontSize: ".65rem",
                      fontWeight: 600,
                      color: "#F1F5F9",
                    }}
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div className="mock-nav-item">📋 Contratos</div>
                <div className="mock-nav-item">🏔️ Faenas</div>
                <div
                  className="mock-nav-item active"
                  style={{ background: "rgba(61,98,245,.2)", color: "#fff" }}
                >
                  👥 Personal
                </div>
                <div className="mock-nav-item">🚛 Equipos / Vehículos</div>
                <div className="mock-nav-item">📑 Requisitos</div>
                <div className="mock-nav-item">📊 Reportes</div>
                <div className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={{
                      marginLeft: "auto",
                      background: "#EF4444",
                      color: "#fff",
                      fontSize: ".55rem",
                      padding: "1px 5px",
                      borderRadius: 8,
                    }}
                  >
                    7
                  </span>
                </div>
                <div className="mock-nav-item">📅 Calendario</div>
                <div className="mock-nav-item">🔌 Integraciones</div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#080E1C", padding: 16 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: ".82rem",
                        fontWeight: 800,
                        color: "#fff",
                        marginBottom: 2,
                      }}
                    >
                      Personal
                    </div>
                    <div style={{ fontSize: ".6rem", color: "#64748B" }}>
                      Gestiona y supervisa a todo el personal acreditado de tu
                      empresa en sus diferentes faenas.
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                    <span
                      style={{
                        fontSize: ".56rem",
                        fontWeight: 700,
                        color: "#94A3B8",
                        background: "rgba(255,255,255,.05)",
                        border: "1px solid #1E3A5F",
                        padding: "6px 10px",
                        borderRadius: 7,
                        whiteSpace: "nowrap",
                      }}
                    >
                      ↓ Exportar
                    </span>
                    <span
                      style={{
                        fontSize: ".56rem",
                        fontWeight: 700,
                        color: "#fff",
                        background: "#3D62F5",
                        padding: "6px 10px",
                        borderRadius: 7,
                        whiteSpace: "nowrap",
                      }}
                    >
                      + Agregar personal
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5,1fr)",
                    gap: 7,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(61,98,245,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      👥
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Total personal
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        48
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(16,185,129,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      ✅
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Acreditados
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#10B981",
                        }}
                      >
                        36
                        <span
                          style={{
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 600,
                          }}
                        >
                          {" "}
                          (75%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(245,158,11,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      ⏳
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Por vencer (30 días)
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#F59E0B",
                        }}
                      >
                        8
                        <span
                          style={{
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 600,
                          }}
                        >
                          {" "}
                          (17%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(239,68,68,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      ❌
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Vencidos
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#EF4444",
                        }}
                      >
                        3
                        <span
                          style={{
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 600,
                          }}
                        >
                          {" "}
                          (6%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(148,163,184,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      📋
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Sin asignar a faena
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        1
                        <span
                          style={{
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 600,
                          }}
                        >
                          {" "}
                          (2%)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 7,
                    marginBottom: 9,
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      maxWidth: 220,
                      padding: "6px 10px",
                      borderRadius: 8,
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      color: "#64748B",
                      fontSize: ".56rem",
                    }}
                  >
                    🔍 Buscar por nombre, RUT o cargo...
                  </div>
                  <span
                    style={{
                      fontSize: ".54rem",
                      color: "#94A3B8",
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      padding: "6px 9px",
                      borderRadius: 8,
                    }}
                  >
                    Estado: Todos
                  </span>
                  <span
                    style={{
                      fontSize: ".54rem",
                      color: "#94A3B8",
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      padding: "6px 9px",
                      borderRadius: 8,
                    }}
                  >
                    Faena: Todas
                  </span>
                  <span
                    style={{
                      fontSize: ".54rem",
                      color: "#94A3B8",
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      padding: "6px 9px",
                      borderRadius: 8,
                    }}
                  >
                    Cargo: Todos
                  </span>
                </div>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "#fafafa" }}>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Trabajador
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Cargo
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Faena
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Estado
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Vencim. próximo
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Certificaciones
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        />
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
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
                              }}
                            >
                              GM
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                González Mario
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                12.345.678-9
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Operador Mina
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Los Pelambres
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          14 ago 2026
                          <div style={{ color: "#94A3B8", fontSize: ".46rem" }}>
                            en 57 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                              marginRight: 2,
                            }}
                          >
                            Exam. Altura
                          </span>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Inducción OAS
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
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
                              }}
                            >
                              RJ
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Ruiz José
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                9.876.543-2
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Supervisor
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Los Pelambres
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fef3c7",
                              color: "#92400e",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Por vencer
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          30 jun 2026
                          <div style={{ color: "#D97706", fontSize: ".46rem" }}>
                            en 12 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Lic. Conducir A4
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
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
                              }}
                            >
                              MR
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Mora Rodrigo
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                15.222.333-4
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Conductor
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          El Teniente
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fef3c7",
                              color: "#92400e",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Por vencer
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          25 jun 2026
                          <div style={{ color: "#D97706", fontSize: ".46rem" }}>
                            en 7 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Psicosensotéc.
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
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
                              }}
                            >
                              VC
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Vega Carla
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                17.654.321-0
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Administrativa
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Centinela
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          10 nov 2026
                          <div style={{ color: "#94A3B8", fontSize: ".46rem" }}>
                            en 144 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                              marginRight: 2,
                            }}
                          >
                            Inducción SSO
                          </span>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            ODI
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
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
                              }}
                            >
                              SP
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Soto Patricio
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                13.111.222-5
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Operador Equipo
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Candelaria
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fee2e2",
                              color: "#b91c1c",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Vencido
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          14 jun 2026
                          <div style={{ color: "#DC2626", fontSize: ".46rem" }}>
                            hace 4 días
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".46rem",
                          }}
                        >
                          —
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
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
                              }}
                            >
                              PA
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Pérez Ana
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                16.789.123-6
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Mecánico
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Zaldívar
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fef3c7",
                              color: "#92400e",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Por vencer
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          8 jul 2026
                          <div style={{ color: "#D97706", fontSize: ".46rem" }}>
                            en 20 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Altura Física
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
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
                              }}
                            >
                              FL
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Fernández Luis
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                14.456.789-3
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Operador Mina
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Andina
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          5 sep 2026
                          <div style={{ color: "#94A3B8", fontSize: ".46rem" }}>
                            en 78 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Esp. Confinados
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
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
                              }}
                            >
                              CD
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Castro Daniela
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                18.234.567-8
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Geóloga
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Caserones
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          22 oct 2026
                          <div style={{ color: "#94A3B8", fontSize: ".46rem" }}>
                            en 125 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Inducción Faena
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
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
                              }}
                            >
                              MC
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Muñoz Cristian
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                11.987.654-1
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Operador Equipo
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Antucoya
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fee2e2",
                              color: "#b91c1c",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Vencido
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          17 jun 2026
                          <div style={{ color: "#DC2626", fontSize: ".46rem" }}>
                            hace 1 día
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".46rem",
                          }}
                        >
                          —
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
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
                              }}
                            >
                              RV
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Rojas Valentina
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                19.345.678-2
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Téc. Eléctrico
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          P. Eólico Antof. I
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          18 dic 2026
                          <div style={{ color: "#94A3B8", fontSize: ".46rem" }}>
                            en 182 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                              marginRight: 2,
                            }}
                          >
                            Trab. Altura
                          </span>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            NR-10
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  style={{
                    padding: "8px 9px",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: ".5rem",
                    color: "#64748B",
                    background: "#fff",
                    borderRadius: "0 0 10px 10px",
                    marginTop: "-1px",
                  }}
                >
                  <span>Mostrando 1 a 10 de 48 trabajadores</span>
                  <span style={{ color: "#3D62F5", fontWeight: 600 }}>
                    10 por página
                  </span>
                </div>
              </div>
              <div className="mock-ai-guide">
                <div className="mock-ai-bubble">
                  <div className="nm">
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
            <div className="mock-app" style={{ background: "#080E1C" }}>
              <div
                className="mock-sidebar"
                style={{
                  background: "#0F172A",
                  borderRight: "1px solid #1E3A5F",
                  gap: 2,
                  padding: "14px 10px",
                }}
              >
                <div
                  className="mock-logo"
                  style={{
                    paddingBottom: 14,
                    borderBottom: "1px solid #1E3A5F",
                    marginBottom: 10,
                  }}
                >
                  <svg style={{ width: 15, height: 13 }} viewBox="0 0 100 92">
                    <path
                      d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z"
                      fill="#f2cda0"
                    />
                    <path d="M50 6 L66 36 L50 44 Z" fill="#fff" />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span style={{ color: "#38BDF8", marginLeft: "-.08em" }}>
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 8px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid #1E3A5F",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
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
                    }}
                  >
                    T
                  </div>
                  <div
                    style={{
                      fontSize: ".65rem",
                      fontWeight: 600,
                      color: "#F1F5F9",
                    }}
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div className="mock-nav-item">📋 Contratos</div>
                <div className="mock-nav-item">🏔️ Faenas</div>
                <div className="mock-nav-item">👥 Personal</div>
                <div
                  className="mock-nav-item active"
                  style={{ background: "rgba(61,98,245,.2)", color: "#fff" }}
                >
                  🚛 Equipos / Vehículos
                </div>
                <div className="mock-nav-item">📑 Requisitos</div>
                <div className="mock-nav-item">📊 Reportes</div>
                <div className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={{
                      marginLeft: "auto",
                      background: "#EF4444",
                      color: "#fff",
                      fontSize: ".55rem",
                      padding: "1px 5px",
                      borderRadius: 8,
                    }}
                  >
                    7
                  </span>
                </div>
                <div className="mock-nav-item">📅 Calendario</div>
                <div className="mock-nav-item">🔌 Integraciones</div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#080E1C", padding: 16 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: ".82rem",
                        fontWeight: 800,
                        color: "#fff",
                        marginBottom: 2,
                      }}
                    >
                      Equipos / Vehículos
                    </div>
                    <div style={{ fontSize: ".6rem", color: "#64748B" }}>
                      Controla la documentación y vigencia de tu flota y
                      maquinaria en cada faena.
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                    <span
                      style={{
                        fontSize: ".56rem",
                        fontWeight: 700,
                        color: "#94A3B8",
                        background: "rgba(255,255,255,.05)",
                        border: "1px solid #1E3A5F",
                        padding: "6px 10px",
                        borderRadius: 7,
                        whiteSpace: "nowrap",
                      }}
                    >
                      ↓ Exportar
                    </span>
                    <span
                      style={{
                        fontSize: ".56rem",
                        fontWeight: 700,
                        color: "#fff",
                        background: "#3D62F5",
                        padding: "6px 10px",
                        borderRadius: 7,
                        whiteSpace: "nowrap",
                      }}
                    >
                      + Agregar equipo
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5,1fr)",
                    gap: 7,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(61,98,245,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      🚛
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Total equipos
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        15
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(16,185,129,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      ✅
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Acreditados
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#10B981",
                        }}
                      >
                        11
                        <span
                          style={{
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 600,
                          }}
                        >
                          {" "}
                          (73%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(245,158,11,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      ⏳
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Por vencer
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#F59E0B",
                        }}
                      >
                        3
                        <span
                          style={{
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 600,
                          }}
                        >
                          {" "}
                          (20%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(239,68,68,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      ❌
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Vencidos
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#EF4444",
                        }}
                      >
                        1
                        <span
                          style={{
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 600,
                          }}
                        >
                          {" "}
                          (7%)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(148,163,184,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      📋
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Sin asignar
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        0
                        <span
                          style={{
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 600,
                          }}
                        >
                          {" "}
                          (0%)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 7,
                    marginBottom: 9,
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      maxWidth: 220,
                      padding: "6px 10px",
                      borderRadius: 8,
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      color: "#64748B",
                      fontSize: ".56rem",
                    }}
                  >
                    🔍 Buscar por patente, ID o modelo...
                  </div>
                  <span
                    style={{
                      fontSize: ".54rem",
                      color: "#94A3B8",
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      padding: "6px 9px",
                      borderRadius: 8,
                    }}
                  >
                    Estado: Todos
                  </span>
                  <span
                    style={{
                      fontSize: ".54rem",
                      color: "#94A3B8",
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      padding: "6px 9px",
                      borderRadius: 8,
                    }}
                  >
                    Faena: Todas
                  </span>
                  <span
                    style={{
                      fontSize: ".54rem",
                      color: "#94A3B8",
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      padding: "6px 9px",
                      borderRadius: 8,
                    }}
                  >
                    Tipo: Todos
                  </span>
                </div>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "#fafafa" }}>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Equipo / Vehículo
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Modelo / Marca
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Faena
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Estado
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Vencim. próximo
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Certificaciones
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        />
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                background: "#1E293B",
                                color: "#fff",
                                fontSize: ".5rem",
                                display: "grid",
                                placeItems: "center",
                                flexShrink: 0,
                              }}
                            >
                              🚛
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Camión Tolva
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                LXDY88
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Volvo FH 2021
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Los Pelambres
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fee2e2",
                              color: "#b91c1c",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Vencido
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          15 jun 2026
                          <div style={{ color: "#DC2626", fontSize: ".46rem" }}>
                            hace 3 días
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".46rem",
                          }}
                        >
                          —
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                background: "#1E293B",
                                color: "#fff",
                                fontSize: ".5rem",
                                display: "grid",
                                placeItems: "center",
                                flexShrink: 0,
                              }}
                            >
                              🚙
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Camioneta
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                RPDC68
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Toyota Hilux 2022
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Centinela
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          14 mar 2027
                          <div style={{ color: "#94A3B8", fontSize: ".46rem" }}>
                            en 269 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                              marginRight: 2,
                            }}
                          >
                            SOAP
                          </span>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Rev. Técnica
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                background: "#1E293B",
                                color: "#fff",
                                fontSize: ".5rem",
                                display: "grid",
                                placeItems: "center",
                                flexShrink: 0,
                              }}
                            >
                              🚚
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Camión Aljibe
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                HBCK21
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Mercedes Actros 2020
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Zaldívar
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fef3c7",
                              color: "#92400e",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Por vencer
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          26 jun 2026
                          <div style={{ color: "#D97706", fontSize: ".46rem" }}>
                            en 8 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Rev. Técnica
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                background: "#1E293B",
                                color: "#fff",
                                fontSize: ".5rem",
                                display: "grid",
                                placeItems: "center",
                                flexShrink: 0,
                              }}
                            >
                              🏗️
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Excavadora
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                MLP-EXC04
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          CAT 320 2019
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Los Pelambres
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          30 sep 2026
                          <div style={{ color: "#94A3B8", fontSize: ".46rem" }}>
                            en 103 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Cert. Operador
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                background: "#1E293B",
                                color: "#fff",
                                fontSize: ".5rem",
                                display: "grid",
                                placeItems: "center",
                                flexShrink: 0,
                              }}
                            >
                              🚌
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Bus de Personal
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                TGHC55
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Mercedes O500 2021
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          El Teniente
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          12 dic 2026
                          <div style={{ color: "#94A3B8", fontSize: ".46rem" }}>
                            en 176 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Permiso Circul.
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                background: "#1E293B",
                                color: "#fff",
                                fontSize: ".5rem",
                                display: "grid",
                                placeItems: "center",
                                flexShrink: 0,
                              }}
                            >
                              🚛
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Camión Pluma
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                FRWZ09
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Hino 500 2020
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Candelaria
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fef3c7",
                              color: "#92400e",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Por vencer
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          3 jul 2026
                          <div style={{ color: "#D97706", fontSize: ".46rem" }}>
                            en 15 días
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".46rem",
                          }}
                        >
                          —
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                background: "#1E293B",
                                color: "#fff",
                                fontSize: ".5rem",
                                display: "grid",
                                placeItems: "center",
                                flexShrink: 0,
                              }}
                            >
                              🏗️
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Grúa Horquilla
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                JKLM12
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Komatsu FG25 2018
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Caserones
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          8 ene 2027
                          <div style={{ color: "#94A3B8", fontSize: ".46rem" }}>
                            en 203 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Cert. Operador Grúa
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                background: "#1E293B",
                                color: "#fff",
                                fontSize: ".5rem",
                                display: "grid",
                                placeItems: "center",
                                flexShrink: 0,
                              }}
                            >
                              🚐
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Furgón
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                QPRT34
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Hyundai H1 2022
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Andina
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          25 feb 2027
                          <div style={{ color: "#94A3B8", fontSize: ".46rem" }}>
                            en 251 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            SOAP
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                background: "#1E293B",
                                color: "#fff",
                                fontSize: ".5rem",
                                display: "grid",
                                placeItems: "center",
                                flexShrink: 0,
                              }}
                            >
                              🚙
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Camioneta
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                VBNH77
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Ford Ranger 2021
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Antucoya
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fee2e2",
                              color: "#b91c1c",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Vencido
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          13 jun 2026
                          <div style={{ color: "#DC2626", fontSize: ".46rem" }}>
                            hace 6 días
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".46rem",
                          }}
                        >
                          —
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 8px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                background: "#1E293B",
                                color: "#fff",
                                fontSize: ".5rem",
                                display: "grid",
                                placeItems: "center",
                                flexShrink: 0,
                              }}
                            >
                              ⚡
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: ".58rem",
                                  color: "#1e293b",
                                  fontWeight: 700,
                                }}
                              >
                                Generador
                              </div>
                              <div
                                style={{ fontSize: ".48rem", color: "#94A3B8" }}
                              >
                                WLKX90
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".55rem",
                            color: "#475569",
                          }}
                        >
                          Cummins 150kVA
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          P. Eólico Antof. I
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Acreditado
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          19 nov 2026
                          <div style={{ color: "#94A3B8", fontSize: ".46rem" }}>
                            en 153 días
                          </div>
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#EEF2FF",
                              color: "#3D62F5",
                              fontSize: ".46rem",
                              fontWeight: 600,
                              padding: "2px 5px",
                              borderRadius: 5,
                            }}
                          >
                            Cert. Eléctrico
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⋮
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  style={{
                    padding: "8px 9px",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: ".5rem",
                    color: "#64748B",
                    background: "#fff",
                    borderRadius: "0 0 10px 10px",
                    marginTop: "-1px",
                  }}
                >
                  <span>Mostrando 1 a 10 de 15 equipos</span>
                  <span style={{ color: "#3D62F5", fontWeight: 600 }}>
                    10 por página
                  </span>
                </div>
              </div>
              <div className="mock-ai-guide">
                <div className="mock-ai-bubble">
                  <div className="nm">
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
            <div className="mock-app" style={{ background: "#080E1C" }}>
              <div
                className="mock-sidebar"
                style={{
                  background: "#0F172A",
                  borderRight: "1px solid #1E3A5F",
                  gap: 2,
                  padding: "14px 10px",
                }}
              >
                <div
                  className="mock-logo"
                  style={{
                    paddingBottom: 14,
                    borderBottom: "1px solid #1E3A5F",
                    marginBottom: 10,
                  }}
                >
                  <svg style={{ width: 15, height: 13 }} viewBox="0 0 100 92">
                    <path
                      d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z"
                      fill="#f2cda0"
                    />
                    <path d="M50 6 L66 36 L50 44 Z" fill="#fff" />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span style={{ color: "#38BDF8", marginLeft: "-.08em" }}>
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 8px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid #1E3A5F",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
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
                    }}
                  >
                    T
                  </div>
                  <div
                    style={{
                      fontSize: ".65rem",
                      fontWeight: 600,
                      color: "#F1F5F9",
                    }}
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div className="mock-nav-item">📋 Contratos</div>
                <div
                  className="mock-nav-item active"
                  style={{ background: "rgba(61,98,245,.2)", color: "#fff" }}
                >
                  🏔️ Faenas
                </div>
                <div className="mock-nav-item">👥 Personal</div>
                <div className="mock-nav-item">🚛 Equipos / Vehículos</div>
                <div className="mock-nav-item">📑 Requisitos</div>
                <div className="mock-nav-item">📊 Reportes</div>
                <div className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={{
                      marginLeft: "auto",
                      background: "#EF4444",
                      color: "#fff",
                      fontSize: ".55rem",
                      padding: "1px 5px",
                      borderRadius: 8,
                    }}
                  >
                    7
                  </span>
                </div>
                <div className="mock-nav-item">📅 Calendario</div>
                <div className="mock-nav-item">🔌 Integraciones</div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#080E1C", padding: 16 }}
              >
                <div
                  style={{
                    fontSize: ".82rem",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: 2,
                  }}
                >
                  Faenas
                </div>
                <div
                  style={{
                    fontSize: ".6rem",
                    color: "#64748B",
                    marginBottom: 12,
                  }}
                >
                  Todas las faenas donde tu empresa tiene contratos activos, con
                  visibilidad por plataforma.
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: 9,
                  }}
                >
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 11,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          fontSize: ".7rem",
                          fontWeight: 700,
                          color: "#F1F5F9",
                        }}
                      >
                        Los Pelambres
                      </span>
                      <span
                        style={{
                          fontSize: ".5rem",
                          background: "rgba(56,189,248,.15)",
                          color: "#38BDF8",
                          fontWeight: 700,
                          padding: "1px 6px",
                          borderRadius: 6,
                        }}
                      >
                        SIGA
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: ".56rem",
                        color: "#64748B",
                        marginBottom: 8,
                      }}
                    >
                      AMSA · Región de Coquimbo
                    </div>
                    <div
                      style={{
                        height: 5,
                        background: "#1E3A5F",
                        borderRadius: 5,
                        overflow: "hidden",
                        marginBottom: 5,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "74%",
                          background: "#10B981",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: ".55rem",
                        color: "#64748B",
                      }}
                    >
                      <span>1 contrato activo</span>
                      <span style={{ color: "#10B981", fontWeight: 700 }}>
                        74%
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 11,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          fontSize: ".7rem",
                          fontWeight: 700,
                          color: "#F1F5F9",
                        }}
                      >
                        Centinela
                      </span>
                      <span
                        style={{
                          fontSize: ".5rem",
                          background: "rgba(56,189,248,.15)",
                          color: "#38BDF8",
                          fontWeight: 700,
                          padding: "1px 6px",
                          borderRadius: 6,
                        }}
                      >
                        SIGA
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: ".56rem",
                        color: "#64748B",
                        marginBottom: 8,
                      }}
                    >
                      AMSA · Región de Antofagasta
                    </div>
                    <div
                      style={{
                        height: 5,
                        background: "#1E3A5F",
                        borderRadius: 5,
                        overflow: "hidden",
                        marginBottom: 5,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "91%",
                          background: "#10B981",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: ".55rem",
                        color: "#64748B",
                      }}
                    >
                      <span>1 contrato activo</span>
                      <span style={{ color: "#10B981", fontWeight: 700 }}>
                        91%
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 11,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          fontSize: ".7rem",
                          fontWeight: 700,
                          color: "#F1F5F9",
                        }}
                      >
                        El Teniente
                      </span>
                      <span
                        style={{
                          fontSize: ".5rem",
                          background: "rgba(167,139,250,.18)",
                          color: "#A78BFA",
                          fontWeight: 700,
                          padding: "1px 6px",
                          borderRadius: 6,
                        }}
                      >
                        SUCALC
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: ".56rem",
                        color: "#64748B",
                        marginBottom: 8,
                      }}
                    >
                      Codelco · Región de O'Higgins
                    </div>
                    <div
                      style={{
                        height: 5,
                        background: "#1E3A5F",
                        borderRadius: 5,
                        overflow: "hidden",
                        marginBottom: 5,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "83%",
                          background: "#10B981",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: ".55rem",
                        color: "#64748B",
                      }}
                    >
                      <span>1 contrato activo</span>
                      <span style={{ color: "#10B981", fontWeight: 700 }}>
                        83%
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 11,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          fontSize: ".7rem",
                          fontWeight: 700,
                          color: "#F1F5F9",
                        }}
                      >
                        Candelaria
                      </span>
                      <span
                        style={{
                          fontSize: ".5rem",
                          background: "rgba(245,158,11,.15)",
                          color: "#F59E0B",
                          fontWeight: 700,
                          padding: "1px 6px",
                          borderRadius: 6,
                        }}
                      >
                        WEBCONTROL
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: ".56rem",
                        color: "#64748B",
                        marginBottom: 8,
                      }}
                    >
                      Lundin Mining · Región de Atacama
                    </div>
                    <div
                      style={{
                        height: 5,
                        background: "#1E3A5F",
                        borderRadius: 5,
                        overflow: "hidden",
                        marginBottom: 5,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "42%",
                          background: "#EF4444",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: ".55rem",
                        color: "#64748B",
                      }}
                    >
                      <span>1 contrato activo</span>
                      <span style={{ color: "#EF4444", fontWeight: 700 }}>
                        42%
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 11,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          fontSize: ".7rem",
                          fontWeight: 700,
                          color: "#F1F5F9",
                        }}
                      >
                        Zaldívar
                      </span>
                      <span
                        style={{
                          fontSize: ".5rem",
                          background: "rgba(56,189,248,.15)",
                          color: "#38BDF8",
                          fontWeight: 700,
                          padding: "1px 6px",
                          borderRadius: 6,
                        }}
                      >
                        SIGA
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: ".56rem",
                        color: "#64748B",
                        marginBottom: 8,
                      }}
                    >
                      AMSA · Región de Antofagasta
                    </div>
                    <div
                      style={{
                        height: 5,
                        background: "#1E3A5F",
                        borderRadius: 5,
                        overflow: "hidden",
                        marginBottom: 5,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "67%",
                          background: "#F59E0B",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: ".55rem",
                        color: "#64748B",
                      }}
                    >
                      <span>1 contrato activo</span>
                      <span style={{ color: "#F59E0B", fontWeight: 700 }}>
                        67%
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 11,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: ".62rem",
                          color: "#38BDF8",
                          fontWeight: 700,
                          marginBottom: 3,
                        }}
                      >
                        + 4 faenas más
                      </div>
                      <div style={{ fontSize: ".54rem", color: "#64748B" }}>
                        Antucoya, Caserones, Andina, P. Eólico Antofagasta I
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mock-ai-guide">
                <div className="mock-ai-bubble">
                  <div className="nm">
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
            <div className="mock-app" style={{ background: "#080E1C" }}>
              <div
                className="mock-sidebar"
                style={{
                  background: "#0F172A",
                  borderRight: "1px solid #1E3A5F",
                  gap: 2,
                  padding: "14px 10px",
                }}
              >
                <div
                  className="mock-logo"
                  style={{
                    paddingBottom: 14,
                    borderBottom: "1px solid #1E3A5F",
                    marginBottom: 10,
                  }}
                >
                  <svg style={{ width: 15, height: 13 }} viewBox="0 0 100 92">
                    <path
                      d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z"
                      fill="#f2cda0"
                    />
                    <path d="M50 6 L66 36 L50 44 Z" fill="#fff" />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span style={{ color: "#38BDF8", marginLeft: "-.08em" }}>
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 8px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid #1E3A5F",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
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
                    }}
                  >
                    T
                  </div>
                  <div
                    style={{
                      fontSize: ".65rem",
                      fontWeight: 600,
                      color: "#F1F5F9",
                    }}
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div className="mock-nav-item">📋 Contratos</div>
                <div className="mock-nav-item">🏔️ Faenas</div>
                <div className="mock-nav-item">👥 Personal</div>
                <div className="mock-nav-item">🚛 Equipos / Vehículos</div>
                <div className="mock-nav-item">📑 Requisitos</div>
                <div
                  className="mock-nav-item active"
                  style={{ background: "rgba(61,98,245,.2)", color: "#fff" }}
                >
                  📊 Reportes
                </div>
                <div className="mock-nav-item">
                  🔔 Alertas{" "}
                  <span
                    style={{
                      marginLeft: "auto",
                      background: "#EF4444",
                      color: "#fff",
                      fontSize: ".55rem",
                      padding: "1px 5px",
                      borderRadius: 8,
                    }}
                  >
                    7
                  </span>
                </div>
                <div className="mock-nav-item">📅 Calendario</div>
                <div className="mock-nav-item">🔌 Integraciones</div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#080E1C", padding: 16 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: ".82rem",
                        fontWeight: 800,
                        color: "#fff",
                        marginBottom: 2,
                      }}
                    >
                      Reportes
                    </div>
                    <div style={{ fontSize: ".6rem", color: "#64748B" }}>
                      Análisis del estado de acreditación de tu empresa en
                      contratos, faenas, personal y equipos.
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: ".58rem",
                      fontWeight: 700,
                      color: "#fff",
                      background: "#3D62F5",
                      padding: "6px 11px",
                      borderRadius: 8,
                      whiteSpace: "nowrap",
                    }}
                  >
                    ⬇ Exportar PDF
                  </span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: 7,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(61,98,245,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      📊
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Reportes generados
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        28
                        <span
                          style={{
                            fontSize: ".5rem",
                            color: "#10B981",
                            fontWeight: 600,
                          }}
                        >
                          {" "}
                          ↑12%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(139,92,246,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      🔁
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Programados activos
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      >
                        6
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(16,185,129,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      ✅
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Cobertura acreditación
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#10B981",
                        }}
                      >
                        76%
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: "rgba(239,68,68,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".75rem",
                        flexShrink: 0,
                      }}
                    >
                      ⚠️
                    </div>
                    <div>
                      <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                        Hallazgos críticos
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#EF4444",
                        }}
                      >
                        10
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.3fr 1fr",
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 12,
                    }}
                  >
                    <div
                      style={{
                        fontSize: ".62rem",
                        fontWeight: 700,
                        color: "#F1F5F9",
                        marginBottom: 10,
                      }}
                    >
                      Cumplimiento por faena
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: 8,
                        height: 74,
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "74%",
                            background:
                              "linear-gradient(180deg,#6B8FFF,#3D62F5)",
                            borderRadius: "4px 4px 0 0",
                          }}
                        />
                        <span style={{ fontSize: ".44rem", color: "#64748B" }}>
                          Pelambres
                        </span>
                      </div>
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "91%",
                            background:
                              "linear-gradient(180deg,#6B8FFF,#3D62F5)",
                            borderRadius: "4px 4px 0 0",
                          }}
                        />
                        <span style={{ fontSize: ".44rem", color: "#64748B" }}>
                          Centinela
                        </span>
                      </div>
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "42%",
                            background:
                              "linear-gradient(180deg,#F87171,#EF4444)",
                            borderRadius: "4px 4px 0 0",
                          }}
                        />
                        <span style={{ fontSize: ".44rem", color: "#64748B" }}>
                          Candelaria
                        </span>
                      </div>
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "83%",
                            background:
                              "linear-gradient(180deg,#6B8FFF,#3D62F5)",
                            borderRadius: "4px 4px 0 0",
                          }}
                        />
                        <span style={{ fontSize: ".44rem", color: "#64748B" }}>
                          El Teniente
                        </span>
                      </div>
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "67%",
                            background:
                              "linear-gradient(180deg,#FCD34D,#F59E0B)",
                            borderRadius: "4px 4px 0 0",
                          }}
                        />
                        <span style={{ fontSize: ".44rem", color: "#64748B" }}>
                          Zaldívar
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 12,
                    }}
                  >
                    <div
                      style={{
                        fontSize: ".62rem",
                        fontWeight: 700,
                        color: "#F1F5F9",
                        marginBottom: 8,
                      }}
                    >
                      Estado general de documentos
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 6,
                      }}
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
                          style={{
                            fontSize: ".85rem",
                            fontWeight: 900,
                            color: "#10B981",
                          }}
                        >
                          76%
                        </div>
                        <div style={{ fontSize: ".5rem", color: "#64748B" }}>
                          cumplimiento global
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: ".54rem",
                        color: "#64748B",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 2,
                      }}
                    >
                      <span>✅ Vigentes</span>
                      <span style={{ color: "#F1F5F9", fontWeight: 700 }}>
                        112
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: ".54rem",
                        color: "#64748B",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 2,
                      }}
                    >
                      <span>⏰ Por vencer</span>
                      <span style={{ color: "#F1F5F9", fontWeight: 700 }}>
                        18
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: ".54rem",
                        color: "#64748B",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>⛔ Vencidos</span>
                      <span style={{ color: "#F1F5F9", fontWeight: 700 }}>
                        10
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: ".62rem",
                    fontWeight: 700,
                    color: "#F1F5F9",
                    marginBottom: 7,
                  }}
                >
                  Reportes disponibles
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 7,
                        background: "rgba(61,98,245,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".7rem",
                        marginBottom: 6,
                      }}
                    >
                      📑
                    </div>
                    <div
                      style={{
                        fontSize: ".56rem",
                        fontWeight: 700,
                        color: "#F1F5F9",
                        marginBottom: 2,
                      }}
                    >
                      Estado de acreditación
                    </div>
                    <div
                      style={{
                        fontSize: ".46rem",
                        color: "#64748B",
                        marginBottom: 8,
                        lineHeight: "1.3",
                      }}
                    >
                      Resumen global por contrato y faena.
                    </div>
                    <div
                      style={{
                        fontSize: ".5rem",
                        fontWeight: 700,
                        color: "#fff",
                        background: "#3D62F5",
                        textAlign: "center",
                        padding: 5,
                        borderRadius: 6,
                      }}
                    >
                      Generar reporte
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 7,
                        background: "rgba(16,185,129,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".7rem",
                        marginBottom: 6,
                      }}
                    >
                      ✅
                    </div>
                    <div
                      style={{
                        fontSize: ".56rem",
                        fontWeight: 700,
                        color: "#F1F5F9",
                        marginBottom: 2,
                      }}
                    >
                      Cumplimiento de requisitos
                    </div>
                    <div
                      style={{
                        fontSize: ".46rem",
                        color: "#64748B",
                        marginBottom: 8,
                        lineHeight: "1.3",
                      }}
                    >
                      Detalle de requisitos por faena.
                    </div>
                    <div
                      style={{
                        fontSize: ".5rem",
                        fontWeight: 700,
                        color: "#fff",
                        background: "#3D62F5",
                        textAlign: "center",
                        padding: 5,
                        borderRadius: 6,
                      }}
                    >
                      Generar reporte
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 7,
                        background: "rgba(139,92,246,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".7rem",
                        marginBottom: 6,
                      }}
                    >
                      👥
                    </div>
                    <div
                      style={{
                        fontSize: ".56rem",
                        fontWeight: 700,
                        color: "#F1F5F9",
                        marginBottom: 2,
                      }}
                    >
                      Personal acreditado
                    </div>
                    <div
                      style={{
                        fontSize: ".46rem",
                        color: "#64748B",
                        marginBottom: 8,
                        lineHeight: "1.3",
                      }}
                    >
                      Listado de trabajadores y vigencias.
                    </div>
                    <div
                      style={{
                        fontSize: ".5rem",
                        fontWeight: 700,
                        color: "#fff",
                        background: "#3D62F5",
                        textAlign: "center",
                        padding: 5,
                        borderRadius: 6,
                      }}
                    >
                      Generar reporte
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1E293B",
                      border: "1px solid #1E3A5F",
                      borderRadius: 10,
                      padding: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 7,
                        background: "rgba(245,158,11,.15)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: ".7rem",
                        marginBottom: 6,
                      }}
                    >
                      ⏰
                    </div>
                    <div
                      style={{
                        fontSize: ".56rem",
                        fontWeight: 700,
                        color: "#F1F5F9",
                        marginBottom: 2,
                      }}
                    >
                      Vencimientos
                    </div>
                    <div
                      style={{
                        fontSize: ".46rem",
                        color: "#64748B",
                        marginBottom: 8,
                        lineHeight: "1.3",
                      }}
                    >
                      Documentos próximos a vencer.
                    </div>
                    <div
                      style={{
                        fontSize: ".5rem",
                        fontWeight: 700,
                        color: "#fff",
                        background: "#3D62F5",
                        textAlign: "center",
                        padding: 5,
                        borderRadius: 6,
                      }}
                    >
                      Generar reporte
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: ".62rem",
                    fontWeight: 700,
                    color: "#F1F5F9",
                    marginBottom: 7,
                  }}
                >
                  Mis reportes recientes
                </div>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "#fafafa" }}>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Nombre del reporte
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Ámbito
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Generado por
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Fecha
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Formato
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".5rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        />
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".56rem",
                            color: "#1e293b",
                            fontWeight: 700,
                          }}
                        >
                          📑 Estado de acreditación — Junio 2026
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Todas las faenas
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Gonzalo Vera
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          18 jun 2026
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fee2e2",
                              color: "#b91c1c",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            PDF
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⬇
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".56rem",
                            color: "#1e293b",
                            fontWeight: 700,
                          }}
                        >
                          ✅ Cumplimiento de requisitos — Los Pelambres
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Los Pelambres
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Gonzalo Vera
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          15 jun 2026
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Excel
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⬇
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".56rem",
                            color: "#1e293b",
                            fontWeight: 700,
                          }}
                        >
                          👥 Personal acreditado — Mayo 2026
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Todas las faenas
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          M. Salinas
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          2 jun 2026
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fee2e2",
                              color: "#b91c1c",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            PDF
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⬇
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".56rem",
                            color: "#1e293b",
                            fontWeight: 700,
                          }}
                        >
                          ⏰ Vencimientos — próximos 30 días
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Candelaria, Zaldívar
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Gonzalo Vera
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          28 may 2026
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#dcfce7",
                              color: "#166534",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            Excel
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
                        >
                          ⬇
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".56rem",
                            color: "#1e293b",
                            fontWeight: 700,
                          }}
                        >
                          🚛 Equipos y vehículos — Q2 2026
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          Todas las faenas
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          M. Salinas
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            fontSize: ".53rem",
                            color: "#475569",
                          }}
                        >
                          20 may 2026
                        </td>
                        <td style={{ padding: "5px 8px" }}>
                          <span
                            style={{
                              background: "#fee2e2",
                              color: "#b91c1c",
                              fontSize: ".48rem",
                              fontWeight: 700,
                              padding: "2px 6px",
                              borderRadius: 6,
                            }}
                          >
                            PDF
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 8px",
                            color: "#94A3B8",
                            fontSize: ".6rem",
                          }}
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
                  <div className="nm">
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
            <div className="mock-app" style={{ background: "#080E1C" }}>
              <div
                className="mock-sidebar"
                style={{
                  background: "#0F172A",
                  borderRight: "1px solid #1E3A5F",
                  gap: 2,
                  padding: "14px 10px",
                }}
              >
                <div
                  className="mock-logo"
                  style={{
                    paddingBottom: 14,
                    borderBottom: "1px solid #1E3A5F",
                    marginBottom: 10,
                  }}
                >
                  <svg style={{ width: 15, height: 13 }} viewBox="0 0 100 92">
                    <path
                      d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z"
                      fill="#f2cda0"
                    />
                    <path d="M50 6 L66 36 L50 44 Z" fill="#fff" />
                  </svg>{" "}
                  <span>
                    ACREDIT
                    <span style={{ color: "#38BDF8", marginLeft: "-.08em" }}>
                      TIA
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 8px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid #1E3A5F",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
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
                    }}
                  >
                    T
                  </div>
                  <div
                    style={{
                      fontSize: ".65rem",
                      fontWeight: 600,
                      color: "#F1F5F9",
                    }}
                  >
                    Tiex SpA
                  </div>
                </div>
                <div className="mock-nav-item">🏠 Inicio</div>
                <div className="mock-nav-item">📋 Contratos</div>
                <div className="mock-nav-item">🏔️ Faenas</div>
                <div className="mock-nav-item">👥 Personal</div>
                <div className="mock-nav-item">🚛 Equipos / Vehículos</div>
                <div className="mock-nav-item">📑 Requisitos</div>
                <div className="mock-nav-item">📊 Reportes</div>
                <div
                  className="mock-nav-item active"
                  style={{ background: "rgba(61,98,245,.2)", color: "#fff" }}
                >
                  🔔 Alertas{" "}
                  <span
                    style={{
                      marginLeft: "auto",
                      background: "#EF4444",
                      color: "#fff",
                      fontSize: ".55rem",
                      padding: "1px 5px",
                      borderRadius: 8,
                    }}
                  >
                    7
                  </span>
                </div>
                <div className="mock-nav-item">📅 Calendario</div>
                <div className="mock-nav-item">🔌 Integraciones</div>
              </div>
              <div
                className="mock-main"
                style={{ background: "#080E1C", padding: 16 }}
              >
                <div
                  style={{
                    fontSize: ".82rem",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: 2,
                  }}
                >
                  Alertas
                </div>
                <div
                  style={{
                    fontSize: ".6rem",
                    color: "#64748B",
                    marginBottom: 12,
                  }}
                >
                  Supervisa y gestiona las alertas críticas que requieren
                  atención.
                </div>
                {/* KPI row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: 7,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      background: "#fee2e2",
                      borderRadius: 9,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <span style={{ fontSize: ".9rem" }}>🔴</span>
                    <div>
                      <div
                        style={{
                          fontSize: ".55rem",
                          fontWeight: 700,
                          color: "#b91c1c",
                        }}
                      >
                        Críticas
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#b91c1c",
                        }}
                      >
                        3
                      </div>
                      <div style={{ fontSize: ".48rem", color: "#b91c1c" }}>
                        requieren atención
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#fef3c7",
                      borderRadius: 9,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <span style={{ fontSize: ".9rem" }}>⚠️</span>
                    <div>
                      <div
                        style={{
                          fontSize: ".55rem",
                          fontWeight: 700,
                          color: "#92400e",
                        }}
                      >
                        Advertencias
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#92400e",
                        }}
                      >
                        4
                      </div>
                      <div style={{ fontSize: ".48rem", color: "#92400e" }}>
                        requieren atención
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#dbeafe",
                      borderRadius: 9,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <span style={{ fontSize: ".9rem" }}>ℹ️</span>
                    <div>
                      <div
                        style={{
                          fontSize: ".55rem",
                          fontWeight: 700,
                          color: "#1e40af",
                        }}
                      >
                        Informativas
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#1e40af",
                        }}
                      >
                        3
                      </div>
                      <div style={{ fontSize: ".48rem", color: "#1e40af" }}>
                        nuevas
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#dcfce7",
                      borderRadius: 9,
                      padding: 9,
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <span style={{ fontSize: ".9rem" }}>✅</span>
                    <div>
                      <div
                        style={{
                          fontSize: ".55rem",
                          fontWeight: 700,
                          color: "#166534",
                        }}
                      >
                        Resueltas
                      </div>
                      <div
                        style={{
                          fontSize: ".95rem",
                          fontWeight: 900,
                          color: "#166534",
                        }}
                      >
                        24
                      </div>
                      <div style={{ fontSize: ".48rem", color: "#166534" }}>
                        últimos 30 días
                      </div>
                    </div>
                  </div>
                </div>
                {/* alert tabs */}
                <div
                  style={{
                    display: "flex",
                    gap: 2,
                    background: "#1E293B",
                    border: "1px solid #1E3A5F",
                    borderRadius: 8,
                    padding: 3,
                    width: "fit-content",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      padding: "4px 10px",
                      background: "#38BDF8",
                      color: "#fff",
                      borderRadius: 6,
                      fontSize: ".6rem",
                      fontWeight: 700,
                    }}
                  >
                    Todas
                  </span>
                  <span
                    style={{
                      padding: "4px 10px",
                      color: "#64748B",
                      fontSize: ".6rem",
                      fontWeight: 600,
                    }}
                  >
                    Críticas{" "}
                    <span
                      style={{
                        background: "#fee2e2",
                        color: "#b91c1c",
                        fontSize: ".5rem",
                        borderRadius: 5,
                        padding: "1px 4px",
                      }}
                    >
                      3
                    </span>
                  </span>
                  <span
                    style={{
                      padding: "4px 10px",
                      color: "#64748B",
                      fontSize: ".6rem",
                      fontWeight: 600,
                    }}
                  >
                    Advertencias
                  </span>
                  <span
                    style={{
                      padding: "4px 10px",
                      color: "#64748B",
                      fontSize: ".6rem",
                      fontWeight: 600,
                    }}
                  >
                    Resueltas
                  </span>
                </div>
                {/* alerts table (mini) */}
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "#fafafa" }}>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".52rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 9px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Prioridad
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".52rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 9px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Alerta
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".52rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 9px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Relacionado con
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            fontSize: ".52rem",
                            color: "#64748B",
                            fontWeight: 700,
                            padding: "6px 9px",
                            borderBottom: "1px solid #E2E8F0",
                            textTransform: "uppercase",
                          }}
                        >
                          Estado
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              fontSize: ".58rem",
                              fontWeight: 700,
                              color: "#b91c1c",
                            }}
                          >
                            ⊗ Crítica
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".6rem",
                            color: "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          Vencimiento: Rev. técnica
                          <div
                            style={{
                              fontWeight: 400,
                              color: "#64748B",
                              fontSize: ".53rem",
                            }}
                          >
                            Tracto LXDY88 · hace 3 días
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".58rem",
                            color: "#64748B",
                          }}
                        >
                          Collahuasi / CT-7821
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              background: "#fee2e2",
                              color: "#b91c1c",
                              fontSize: ".5rem",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 6,
                            }}
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              fontSize: ".58rem",
                              fontWeight: 700,
                              color: "#b91c1c",
                            }}
                          >
                            ⊗ Crítica
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".6rem",
                            color: "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          Seguro accidentes vencido
                          <div
                            style={{
                              fontWeight: 400,
                              color: "#64748B",
                              fontSize: ".53rem",
                            }}
                          >
                            Empresa · hace 1 día
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".58rem",
                            color: "#64748B",
                          }}
                        >
                          Candelaria / CT-5501
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              background: "#fee2e2",
                              color: "#b91c1c",
                              fontSize: ".5rem",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 6,
                            }}
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              fontSize: ".58rem",
                              fontWeight: 700,
                              color: "#b91c1c",
                            }}
                          >
                            ⊗ Crítica
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".6rem",
                            color: "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          Cert. OTIC vencido en SIGA
                          <div
                            style={{
                              fontWeight: 400,
                              color: "#64748B",
                              fontSize: ".53rem",
                            }}
                          >
                            González Mario · hace 5 días
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".58rem",
                            color: "#64748B",
                          }}
                        >
                          Los Pelambres / CT-45641
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              background: "#fee2e2",
                              color: "#b91c1c",
                              fontSize: ".5rem",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 6,
                            }}
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              fontSize: ".58rem",
                              fontWeight: 700,
                              color: "#92400e",
                            }}
                          >
                            ⚠ Advertencia
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".6rem",
                            color: "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          Por vencer: F30-1
                          <div
                            style={{
                              fontWeight: 400,
                              color: "#64748B",
                              fontSize: ".53rem",
                            }}
                          >
                            Vence en 8 días
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".58rem",
                            color: "#64748B",
                          }}
                        >
                          Centinela / CT-002
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              background: "#fef3c7",
                              color: "#92400e",
                              fontSize: ".5rem",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 6,
                            }}
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              fontSize: ".58rem",
                              fontWeight: 700,
                              color: "#92400e",
                            }}
                          >
                            ⚠ Advertencia
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".6rem",
                            color: "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          Examen altura por vencer
                          <div
                            style={{
                              fontWeight: 400,
                              color: "#64748B",
                              fontSize: ".53rem",
                            }}
                          >
                            Ruiz José · en 12 días
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".58rem",
                            color: "#64748B",
                          }}
                        >
                          Los Pelambres / CT-45641
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              background: "#fef3c7",
                              color: "#92400e",
                              fontSize: ".5rem",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 6,
                            }}
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              fontSize: ".58rem",
                              fontWeight: 700,
                              color: "#92400e",
                            }}
                          >
                            ⚠ Advertencia
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".6rem",
                            color: "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          Licencia conducir B por vencer
                          <div
                            style={{
                              fontWeight: 400,
                              color: "#64748B",
                              fontSize: ".53rem",
                            }}
                          >
                            Mora Rodrigo · en 18 días
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".58rem",
                            color: "#64748B",
                          }}
                        >
                          El Teniente / CT-9102
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              background: "#fef3c7",
                              color: "#92400e",
                              fontSize: ".5rem",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 6,
                            }}
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              fontSize: ".58rem",
                              fontWeight: 700,
                              color: "#92400e",
                            }}
                          >
                            ⚠ Advertencia
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".6rem",
                            color: "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          Permiso de circulación vence pronto
                          <div
                            style={{
                              fontWeight: 400,
                              color: "#64748B",
                              fontSize: ".53rem",
                            }}
                          >
                            Camión HBCK21 · en 22 días
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".58rem",
                            color: "#64748B",
                          }}
                        >
                          Zaldívar / CT-3310
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              background: "#fef3c7",
                              color: "#92400e",
                              fontSize: ".5rem",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 6,
                            }}
                          >
                            No leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              fontSize: ".58rem",
                              fontWeight: 700,
                              color: "#1e40af",
                            }}
                          >
                            ℹ Informativa
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".6rem",
                            color: "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          IA: Antigüedad excedida
                          <div
                            style={{
                              fontWeight: 400,
                              color: "#64748B",
                              fontSize: ".53rem",
                            }}
                          >
                            RPDC68 · 17 años vs máx 15
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".58rem",
                            color: "#64748B",
                          }}
                        >
                          Centinela / CT-002
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              background: "#f1f5f9",
                              color: "#64748b",
                              fontSize: ".5rem",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 6,
                            }}
                          >
                            Leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              fontSize: ".58rem",
                              fontWeight: 700,
                              color: "#1e40af",
                            }}
                          >
                            ℹ Informativa
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".6rem",
                            color: "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          IA: Firma ausente en contrato
                          <div
                            style={{
                              fontWeight: 400,
                              color: "#64748B",
                              fontSize: ".53rem",
                            }}
                          >
                            Contrato CT-7821 — página 3
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                            fontSize: ".58rem",
                            color: "#64748B",
                          }}
                        >
                          Collahuasi / CT-7821
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            borderBottom: "1px solid #F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              background: "#f1f5f9",
                              color: "#64748b",
                              fontSize: ".5rem",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 6,
                            }}
                          >
                            Leída
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 9px" }}>
                          <span
                            style={{
                              fontSize: ".58rem",
                              fontWeight: 700,
                              color: "#1e40af",
                            }}
                          >
                            ℹ Informativa
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            fontSize: ".6rem",
                            color: "#1e293b",
                            fontWeight: 600,
                          }}
                        >
                          Nuevo req. publicado en WORKMATE
                          <div
                            style={{
                              fontWeight: 400,
                              color: "#64748B",
                              fontSize: ".53rem",
                            }}
                          >
                            Los Pelambres actualizó requisitos
                          </div>
                        </td>
                        <td
                          style={{
                            padding: "5px 9px",
                            fontSize: ".58rem",
                            color: "#64748B",
                          }}
                        >
                          Los Pelambres / CT-45641
                        </td>
                        <td style={{ padding: "5px 9px" }}>
                          <span
                            style={{
                              background: "#f1f5f9",
                              color: "#64748b",
                              fontSize: ".5rem",
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 6,
                            }}
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
                  <div className="nm">
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
    </div>
  );
}
