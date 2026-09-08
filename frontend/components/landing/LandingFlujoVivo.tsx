"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingFlujoVivo() {
  const router = useRouter();
  return (
    <>
      {/* VE UN FLUJO EN VIVO (laptop mockup estilo Semble AI) */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  @keyframes wfFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}\n  @keyframes wfPulseDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}\n  @keyframes wfSpin{to{transform:rotate(360deg)}}\n  @keyframes wfFadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}\n  .wf-laptop-float{animation:wfFloat 6s ease-in-out infinite,wfFadeUp .9s ease-out both}\n  .wf-livedot{animation:wfPulseDot 1.6s ease-in-out infinite}\n  .wf-ring-spin{animation:wfSpin .85s linear infinite}\n  .wf-step{display:flex;gap:8px;align-items:flex-start;border-radius:9px;padding:8px 10px;border:1px solid transparent;transition:background .5s ease,border-color .5s ease,opacity .5s ease}\n  .wf-step.is-done{background:#fff;border-color:var(--linea);opacity:1}\n  .wf-step.is-active{background:#EEF2FF;border-color:rgba(61,98,245,.25);opacity:1}\n  .wf-step.is-pending{opacity:.5;background:transparent}\n  .wf-key{height:16px;border-radius:3px;background:linear-gradient(#334155,#1E293B);border:1px solid rgba(255,255,255,.06)}\n  .wf-dot{width:3px;height:3px;border-radius:50%;background:#0F172A}\n  ",
        }}
      />
      <section
        style={
          {
            background:
              "linear-gradient(180deg,#F8FAFF 0%,#EEF2FF 45%,#F8FAFF 100%)",
            padding: "96px 6% 0",
            overflow: "hidden",
            position: "relative",
          } as any
        }
      >
        <div
          style={
            {
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(61,98,245,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(61,98,245,.05) 1px,transparent 1px)",
              backgroundSize: "44px 44px",
              WebkitMaskImage:
                "radial-gradient(ellipse 55% 60% at 50% 10%,#000 30%,transparent 75%)",
              maskImage:
                "radial-gradient(ellipse 55% 60% at 50% 10%,#000 30%,transparent 75%)",
            } as any
          }
        />
        <div
          style={
            {
              position: "relative",
              maxWidth: 820,
              margin: "0 auto",
              textAlign: "center",
            } as any
          }
        >
          <span
            data-i18n="wf.eyebrow"
            style={
              {
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: ".72rem",
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--gris)",
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
            VE UN FLUJO EN VIVO
          </span>
          <h2
            data-i18n="wf.h2"
            style={
              {
                fontSize: "2.4rem",
                fontWeight: 900,
                color: "var(--azul)",
                margin: "16px 0 18px",
                lineHeight: "1.15",
              } as any
            }
          >
            Mira a un Agente IA trabajar
          </h2>
          <p
            data-i18n="wf.p"
            style={
              {
                color: "var(--gris)",
                fontSize: "1.05rem",
                lineHeight: "1.7",
                maxWidth: 640,
                margin: "0 auto",
              } as any
            }
          >
            Un examen ocupacional vence en 5 días. Un Agente Acreditador IA
            detecta la alerta, contacta al trabajador por WhatsApp, agenda la
            hora, valida el documento nuevo y deja el contrato al día — sin que
            tu equipo escriba un solo mensaje.
          </p>
        </div>
        <div
          className="wf-laptop-float"
          style={
            {
              position: "relative",
              maxWidth: 920,
              margin: "64px auto 0",
              perspective: 2000,
            } as any
          }
        >
          <div
            style={
              {
                transform: "rotateX(24deg)",
                transformOrigin: "bottom center",
                background: "#0B1220",
                borderRadius: "22px 22px 4px 4px",
                padding: "16px 16px 8px",
                boxShadow:
                  "0 50px 100px -20px rgba(15,23,42,.4),0 20px 40px rgba(15,23,42,.15)",
                border: "1px solid rgba(255,255,255,.08)",
              } as any
            }
          >
            <div
              style={
                {
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#334155",
                  margin: "0 auto 10px",
                } as any
              }
            />
            <div
              style={
                {
                  background: "#fff",
                  borderRadius: 10,
                  overflow: "hidden",
                  padding: "20px 22px 24px",
                } as any
              }
            >
              <div
                style={
                  {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 18,
                    flexWrap: "wrap",
                    gap: 8,
                  } as any
                }
              >
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: ".72rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      flexWrap: "wrap",
                    } as any
                  }
                >
                  <span
                    data-i18n="wf.live"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        color: "#16A34A",
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
                          background: "#16A34A",
                          display: "inline-block",
                        } as any
                      }
                    />
                    EN VIVO
                  </span>
                  <span style={{ color: "#CBD5E1" } as any}>·</span>
                  <span data-i18n="wf.title">
                    Vencimiento examen de altura — Rodrigo P.
                  </span>
                  <span
                    data-i18n="wf.secsago"
                    style={{ color: "#94A3B8", fontWeight: 600 } as any}
                  >
                    · hace <span id="wfSecs">2</span> segundos
                  </span>
                </div>
                <span
                  data-i18n="wf.autobadge"
                  style={
                    {
                      background: "#EEF2FF",
                      color: "#3D62F5",
                      fontSize: ".62rem",
                      fontWeight: 800,
                      letterSpacing: ".06em",
                      padding: "5px 10px",
                      borderRadius: 20,
                      whiteSpace: "nowrap",
                    } as any
                  }
                >
                  AUTOMÁTICO
                </span>
              </div>
              <div
                style={
                  {
                    display: "grid",
                    gridTemplateColumns: "1.15fr .85fr",
                    gap: 16,
                  } as any
                }
              >
                <div
                  style={
                    {
                      background: "#F8FAFF",
                      border: "1px solid var(--linea)",
                      borderRadius: 12,
                      padding: 14,
                    } as any
                  }
                >
                  <div
                    data-i18n="wf.doinglabel"
                    style={
                      {
                        fontSize: ".62rem",
                        fontWeight: 800,
                        letterSpacing: ".08em",
                        color: "#94A3B8",
                        textTransform: "uppercase",
                        marginBottom: 10,
                      } as any
                    }
                  >
                    Qué está haciendo el agente
                  </div>
                  <div
                    id="wfSteps"
                    style={
                      {
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      } as any
                    }
                  >
                    <div className="wf-step is-done" data-step={0}>
                      <span
                        className="wf-ic"
                        style={{ flexShrink: 0, marginTop: 2 } as any}
                      >
                        <span
                          style={
                            {
                              color: "#16A34A",
                              fontSize: ".8rem",
                              fontWeight: 900,
                            } as any
                          }
                        >
                          ✓
                        </span>
                      </span>
                      <div>
                        <div
                          data-i18n="wf.s0t"
                          style={
                            {
                              fontSize: ".74rem",
                              fontWeight: 700,
                              color: "#0F172A",
                            } as any
                          }
                        >
                          Detecta vencimiento en 5 días
                          <span
                            style={
                              {
                                background: "#DCFCE7",
                                color: "#166534",
                                fontSize: ".55rem",
                                fontWeight: 800,
                                letterSpacing: ".05em",
                                padding: "2px 6px",
                                borderRadius: 8,
                                marginLeft: 6,
                              } as any
                            }
                          >
                            DISPARADOR
                          </span>
                        </div>
                        <div
                          data-i18n="wf.s0d"
                          style={
                            {
                              fontSize: ".68rem",
                              color: "#64748B",
                              marginTop: 1,
                            } as any
                          }
                        >
                          Examen de altura de Rodrigo, contrato Los Pelambres
                        </div>
                      </div>
                    </div>
                    <div className="wf-step is-done" data-step={1}>
                      <span
                        className="wf-ic"
                        style={{ flexShrink: 0, marginTop: 2 } as any}
                      >
                        <span
                          style={
                            {
                              color: "#16A34A",
                              fontSize: ".8rem",
                              fontWeight: 900,
                            } as any
                          }
                        >
                          ✓
                        </span>
                      </span>
                      <div>
                        <div
                          data-i18n="wf.s1t"
                          style={
                            {
                              fontSize: ".74rem",
                              fontWeight: 700,
                              color: "#0F172A",
                            } as any
                          }
                        >
                          Contacta al trabajador por WhatsApp
                        </div>
                        <div
                          data-i18n="wf.s1d"
                          style={
                            {
                              fontSize: ".68rem",
                              color: "#64748B",
                              marginTop: 1,
                            } as any
                          }
                        >
                          Le avisa del vencimiento y pide confirmar hora
                        </div>
                      </div>
                    </div>
                    <div className="wf-step is-done" data-step={2}>
                      <span
                        className="wf-ic"
                        style={{ flexShrink: 0, marginTop: 2 } as any}
                      >
                        <span
                          style={
                            {
                              color: "#16A34A",
                              fontSize: ".8rem",
                              fontWeight: 900,
                            } as any
                          }
                        >
                          ✓
                        </span>
                      </span>
                      <div>
                        <div
                          data-i18n="wf.s2t"
                          style={
                            {
                              fontSize: ".74rem",
                              fontWeight: 700,
                              color: "#0F172A",
                            } as any
                          }
                        >
                          Agenda hora en Mutual Los Andes
                        </div>
                        <div
                          data-i18n="wf.s2d"
                          style={
                            {
                              fontSize: ".68rem",
                              color: "#64748B",
                              marginTop: 1,
                            } as any
                          }
                        >
                          Esperando confirmación del trabajador
                        </div>
                      </div>
                    </div>
                    <div className="wf-step is-active" data-step={3}>
                      <span
                        className="wf-ic"
                        style={{ flexShrink: 0, marginTop: 2 } as any}
                      >
                        <span
                          className="wf-ring-spin"
                          style={
                            {
                              width: 14,
                              height: 14,
                              borderRadius: "50%",
                              border: "2px solid #3D62F5",
                              borderTopColor: "transparent",
                              display: "block",
                            } as any
                          }
                        />
                      </span>
                      <div>
                        <div
                          data-i18n="wf.s3t"
                          style={
                            {
                              fontSize: ".74rem",
                              fontWeight: 700,
                              color: "#0F172A",
                            } as any
                          }
                        >
                          Valida el documento nuevo con IA
                        </div>
                      </div>
                    </div>
                    <div className="wf-step is-pending" data-step={4}>
                      <span
                        className="wf-ic"
                        style={{ flexShrink: 0, marginTop: 2 } as any}
                      >
                        <span
                          style={
                            {
                              width: 14,
                              height: 14,
                              borderRadius: "50%",
                              border: "1.5px solid #CBD5E1",
                              display: "block",
                            } as any
                          }
                        />
                      </span>
                      <div>
                        <div
                          data-i18n="wf.s4t"
                          style={
                            {
                              fontSize: ".74rem",
                              fontWeight: 700,
                              color: "#0F172A",
                            } as any
                          }
                        >
                          Actualiza el contrato en la plataforma
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 12 } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#F8FAFF",
                        border: "1px solid var(--linea)",
                        borderRadius: 12,
                        padding: 14,
                      } as any
                    }
                  >
                    <div
                      data-i18n="wf.alertlabel"
                      style={
                        {
                          fontSize: ".62rem",
                          fontWeight: 800,
                          letterSpacing: ".08em",
                          color: "#94A3B8",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        } as any
                      }
                    >
                      La alerta que lo gatilló
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          gap: 8,
                          alignItems: "flex-start",
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            width: 26,
                            height: 26,
                            borderRadius: "50%",
                            background: "#3D62F5",
                            color: "#fff",
                            fontSize: ".65rem",
                            fontWeight: 800,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          } as any
                        }
                      >
                        AC
                      </div>
                      <div>
                        <div
                          data-i18n="wf.alerttitle"
                          style={
                            {
                              fontSize: ".72rem",
                              fontWeight: 800,
                              color: "#0F172A",
                            } as any
                          }
                        >
                          ACREDIT
                          <span style={{ color: "#1D4ED8" } as any}>TIA</span> ·
                          monitoreo 24/7
                        </div>
                        <div
                          data-i18n="wf.alertdesc"
                          style={
                            {
                              fontSize: ".68rem",
                              color: "#64748B",
                              marginTop: 2,
                              lineHeight: "1.5",
                            } as any
                          }
                        >
                          Examen de altura vence en 5 días — Rodrigo P.,
                          contrato Los Pelambres. Sin acción del encargado.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#0F172A",
                        borderRadius: 12,
                        padding: 14,
                        minHeight: 78,
                      } as any
                    }
                  >
                    <div
                      data-i18n="wf.nowlabel"
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
                      Ahora mismo
                    </div>
                    <p
                      id="wfNow"
                      style={
                        {
                          color: "#E2E8F0",
                          fontSize: ".74rem",
                          lineHeight: "1.6",
                          margin: 0,
                        } as any
                      }
                    >
                      La IA está revisando el documento nuevo que subió Rodrigo.
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={
                  {
                    display: "flex",
                    gap: 18,
                    marginTop: 16,
                    paddingTop: 14,
                    borderTop: "1px solid var(--linea)",
                    fontSize: ".62rem",
                    fontWeight: 700,
                    color: "#94A3B8",
                    letterSpacing: ".04em",
                  } as any
                }
              >
                <span
                  data-i18n="wf.leg1"
                  style={
                    { display: "flex", alignItems: "center", gap: 5 } as any
                  }
                >
                  <span
                    style={
                      {
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#CBD5E1",
                        display: "inline-block",
                      } as any
                    }
                  />
                  PENDIENTE
                </span>
                <span
                  data-i18n="wf.leg2"
                  style={
                    { display: "flex", alignItems: "center", gap: 5 } as any
                  }
                >
                  <span
                    style={
                      {
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#3D62F5",
                        display: "inline-block",
                      } as any
                    }
                  />
                  EN PROCESO
                </span>
                <span
                  data-i18n="wf.leg3"
                  style={
                    { display: "flex", alignItems: "center", gap: 5 } as any
                  }
                >
                  <span
                    style={
                      {
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#16A34A",
                        display: "inline-block",
                      } as any
                    }
                  />
                  LISTO
                </span>
              </div>
            </div>
          </div>
          <div
            style={
              {
                height: 8,
                background: "linear-gradient(180deg,#050810,#1E293B)",
                margin: "0 3%",
                borderRadius: "0 0 2px 2px",
              } as any
            }
          />
          <div
            style={
              {
                background: "linear-gradient(180deg,#CBD5E1,#94A3B8)",
                borderRadius: "0 0 22px 22px",
                padding: "2px 0 0",
                boxShadow: "0 40px 70px -20px rgba(15,23,42,.35)",
              } as any
            }
          >
            <div
              style={
                {
                  background: "linear-gradient(180deg,#1E293B,#0B1220)",
                  borderRadius: "0 0 20px 20px",
                  padding: "16px 0 24px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  alignItems: "center",
                  gap: 6,
                } as any
              }
            >
              <div
                style={
                  {
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: 4,
                    paddingLeft: 22,
                  } as any
                }
              >
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
              </div>
              <div>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(14,1fr)",
                      gap: 4,
                      maxWidth: 520,
                      margin: "0 auto 5px",
                    } as any
                  }
                >
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                </div>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(14,1fr)",
                      gap: 4,
                      maxWidth: 520,
                      margin: "0 auto 5px",
                    } as any
                  }
                >
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                </div>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(14,1fr)",
                      gap: 4,
                      maxWidth: 520,
                      margin: "0 auto 5px",
                    } as any
                  }
                >
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                  <span className="wf-key" />
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      justifyContent: "center",
                      gap: 4,
                      maxWidth: 520,
                      margin: "0 auto 14px",
                    } as any
                  }
                >
                  <span className="wf-key" style={{ width: 70 } as any} />
                  <span
                    className="wf-key"
                    style={{ flex: 1, maxWidth: 220 } as any}
                  />
                  <span className="wf-key" style={{ width: 70 } as any} />
                </div>
                <div
                  style={
                    {
                      width: 150,
                      height: 70,
                      background: "linear-gradient(180deg,#111827,#0B1220)",
                      borderRadius: 8,
                      margin: "0 auto",
                      border: "1px solid rgba(255,255,255,.06)",
                    } as any
                  }
                />
              </div>
              <div
                style={
                  {
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: 4,
                    paddingRight: 22,
                  } as any
                }
              >
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
                <span className="wf-dot" />
              </div>
            </div>
          </div>
          <div style={{ height: 40 } as any} />
        </div>
      </section>
    </>
  );
}
