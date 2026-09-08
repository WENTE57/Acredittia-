"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingVs() {
  const router = useRouter();
  return (
    <>
      {/* ACREDITTIA VS EMPRESAS ACREDITADORAS */}
      <section
        className="hs-sect-pad"
        style={
          {
            background: "linear-gradient(135deg,#F8FAFF 0%,#EEF2FF 100%)",
            padding: "80px 6%",
          } as any
        }
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" } as any}>
          <div style={{ textAlign: "center", marginBottom: 52 } as any}>
            <span data-i18n="cmp.label" className="sec-label">
              COMPARATIVA
            </span>
            <h2
              data-i18n="cmp.h2"
              style={
                {
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "var(--azul)",
                  margin: "12px 0 16px",
                } as any
              }
            >
              Las empresas acreditadoras cobran por proceso
              <br />y te dejan solo cuando termina.
            </h2>
            <p
              data-i18n="cmp.p"
              style={
                {
                  color: "var(--gris)",
                  maxWidth: 660,
                  margin: "0 auto",
                  fontSize: "1rem",
                } as any
              }
            >
              ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span> no es
              un servicio puntual — es la plataforma donde tu departamento de
              acreditación opera permanentemente. Integración directa con cada
              faena, visibilidad en tiempo real y IA que trabaja 24/7 para que
              tu equipo se enfoque en lo que importa.
            </p>
          </div>
          <div className="hs-compare-grid">
            {/* EMPRESA ACREDITADORA */}
            <div
              style={
                {
                  background: "#fff",
                  border: "2px solid #E2E8F0",
                  borderRadius: 24,
                  padding: 36,
                  position: "relative",
                  overflow: "hidden",
                } as any
              }
            >
              <div
                style={
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: "linear-gradient(90deg,#EF4444,#F97316)",
                  } as any
                }
              />
              <div
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 24,
                  } as any
                }
              >
                <div
                  style={
                    {
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "#FEF2F2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.4rem",
                    } as any
                  }
                >
                  🏢
                </div>
                <div>
                  <div
                    data-i18n="cmp.a.title"
                    style={
                      {
                        fontWeight: 900,
                        color: "#1E293B",
                        fontSize: "1rem",
                      } as any
                    }
                  >
                    Empresa Acreditadora Tradicional
                  </div>
                  <div
                    data-i18n="cmp.a.sub"
                    style={{ fontSize: ".78rem", color: "#94A3B8" } as any}
                  >
                    El modelo que usan hoy miles de contratistas
                  </div>
                </div>
              </div>
              <div
                style={
                  { display: "flex", flexDirection: "column", gap: 14 } as any
                }
              >
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ❌
                  </span>
                  <span
                    data-i18n="cmp.a.1"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#64748B",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    Cobro millonario por cada proceso de acreditación, sin
                    precio fijo ni transparencia
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ❌
                  </span>
                  <span
                    data-i18n="cmp.a.2"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#64748B",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    Sin seguimiento una vez terminado el proceso — quedas solo
                    con documentos que vencen
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ❌
                  </span>
                  <span
                    data-i18n="cmp.a.3"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#64748B",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    No te avisan cuando un estándar cambia o el mandante agrega
                    una nueva exigencia
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ❌
                  </span>
                  <span
                    data-i18n="cmp.a.4"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#64748B",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    Si agregas una faena nueva, pagas otro proceso completo
                    desde cero
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ❌
                  </span>
                  <span
                    data-i18n="cmp.a.5"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#64748B",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    Sin visibilidad en tiempo real del estado de cada
                    acreditación
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ❌
                  </span>
                  <span
                    data-i18n="cmp.a.6"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#64748B",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    Dependes de una persona que puede renunciar, olvidar o
                    cometer errores
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ❌
                  </span>
                  <span
                    data-i18n="cmp.a.7"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#64748B",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    Tu equipo debe llamar y perseguir uno por uno a cada
                    trabajador por cursos o documentos pendientes
                  </span>
                </div>
              </div>
              <div
                style={
                  {
                    marginTop: 28,
                    padding: 16,
                    background: "#FEF2F2",
                    borderRadius: 12,
                    textAlign: "center",
                  } as any
                }
              >
                <div
                  data-i18n="cmp.a.price"
                  style={
                    {
                      fontSize: "1.5rem",
                      fontWeight: 900,
                      color: "#EF4444",
                    } as any
                  }
                >
                  $$$$ por proceso
                </div>
                <div
                  data-i18n="cmp.a.pricesub"
                  style={
                    { fontSize: ".8rem", color: "#94A3B8", marginTop: 4 } as any
                  }
                >
                  Sin seguimiento, sin actualizaciones, sin plataforma
                </div>
              </div>
            </div>
            {/* ACREDITTIA */}
            <div
              style={
                {
                  background: "linear-gradient(135deg,#0F172A,#1E293B)",
                  border: "2px solid rgba(139,170,255,.3)",
                  borderRadius: 24,
                  padding: 36,
                  position: "relative",
                  overflow: "hidden",
                } as any
              }
            >
              <div
                style={
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: "linear-gradient(90deg,#3D62F5,#8BAAFF)",
                  } as any
                }
              />
              <div
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 24,
                  } as any
                }
              >
                <div
                  style={
                    {
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "rgba(61,98,245,.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.4rem",
                    } as any
                  }
                >
                  🤖
                </div>
                <div>
                  <div
                    data-i18n="cmp.b.title"
                    style={
                      {
                        fontWeight: 900,
                        color: "#F1F5F9",
                        fontSize: "1rem",
                      } as any
                    }
                  >
                    ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span>
                  </div>
                  <div
                    data-i18n="cmp.b.sub"
                    style={{ fontSize: ".78rem", color: "#64748B" } as any}
                  >
                    Suscripción mensual, inteligencia permanente
                  </div>
                </div>
              </div>
              <div
                style={
                  { display: "flex", flexDirection: "column", gap: 14 } as any
                }
              >
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ✅
                  </span>
                  <span
                    data-i18n="cmp.b.1"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#94A3B8",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    Suscripción mensual fija — acredita cuantas faenas y cuanto
                    personal necesites, sin cobros extra
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ✅
                  </span>
                  <span
                    data-i18n="cmp.b.2"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#94A3B8",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    Seguimiento 24/7 de cada acreditación activa — alertas
                    automáticas de vencimientos y cambios
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ✅
                  </span>
                  <span
                    data-i18n="cmp.b.3"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#94A3B8",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    La IA detecta cuando el mandante actualiza estándares y te
                    avisa qué cambió y qué debes actualizar
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ✅
                  </span>
                  <span
                    data-i18n="cmp.b.4"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#94A3B8",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    Agrega nuevas faenas en cualquier momento — los requisitos
                    se generan automáticamente desde los manuales
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ✅
                  </span>
                  <span
                    data-i18n="cmp.b.5"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#94A3B8",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    Dashboard en tiempo real: ves el estado de cada persona,
                    equipo y empresa al instante
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ✅
                  </span>
                  <span
                    data-i18n="cmp.b.6"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#94A3B8",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    La IA nunca renuncia, nunca olvida y nunca comete el mismo
                    error dos veces
                  </span>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    } as any
                  }
                >
                  <span
                    style={
                      { fontSize: "1rem", flexShrink: 0, marginTop: 1 } as any
                    }
                  >
                    ✅
                  </span>
                  <span
                    data-i18n="cmp.b.7"
                    style={
                      {
                        fontSize: ".88rem",
                        color: "#94A3B8",
                        lineHeight: "1.5",
                      } as any
                    }
                  >
                    Agentes IA escriben y llaman directo al trabajador por
                    WhatsApp — tu equipo deja de perseguir a nadie
                  </span>
                </div>
              </div>
              <div
                style={
                  {
                    marginTop: 28,
                    padding: 16,
                    background: "rgba(61,98,245,.15)",
                    border: "1px solid rgba(139,170,255,.2)",
                    borderRadius: 12,
                    textAlign: "center",
                  } as any
                }
              >
                <div
                  data-i18n="cmp.b.price"
                  style={
                    {
                      fontSize: "1.5rem",
                      fontWeight: 900,
                      color: "#8BAAFF",
                    } as any
                  }
                >
                  Suscripción mensual
                </div>
                <div
                  data-i18n="cmp.b.pricesub"
                  style={
                    { fontSize: ".8rem", color: "#64748B", marginTop: 4 } as any
                  }
                >
                  Acreditaciones ilimitadas + seguimiento permanente + IA
                  siempre activa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
