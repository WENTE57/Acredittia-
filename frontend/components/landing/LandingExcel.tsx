"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingExcel() {
  const router = useRouter();
  return (
    <>
      {/* DE EXCEL A ACREDITTIA CON IA */}
      <section
        className="hs-sect-pad"
        style={{ background: "#fff", padding: "80px 6%" } as any}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" } as any}>
          <div style={{ textAlign: "center", marginBottom: 8 } as any}>
            <span data-i18n="xls.label" className="sec-label">
              MIGRACIÓN CON IA
            </span>
            <h2
              data-i18n="xls.h2"
              style={
                {
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "var(--azul)",
                  margin: "12px 0 16px",
                } as any
              }
            >
              Del Excel de siempre, a ACREDIT
              <span style={{ color: "#1D4ED8" } as any}>TIA</span> — con IA.
            </h2>
            <p
              data-i18n="xls.p"
              style={
                {
                  color: "var(--gris)",
                  maxWidth: 680,
                  margin: "0 auto",
                  fontSize: "1rem",
                } as any
              }
            >
              No tienes que cambiar tu forma de trabajar de un día para otro.
              Sube el mismo Excel que ya usas hoy y la IA crea tu nómina de
              trabajadores inicial y sus requisitos — así dejas de depender de
              un Excel y pasas a una plataforma en línea donde todo tu equipo
              trabaja conectado, con recordatorios automáticos de cada punto
              crítico de tus documentos vigentes.
            </p>
          </div>
          <div
            id="xlsSteps"
            style={
              {
                display: "flex",
                justifyContent: "center",
                gap: 8,
                margin: "40px auto 28px",
                maxWidth: 920,
                flexWrap: "wrap",
              } as any
            }
          >
            <button
              type="button"
              onClick={() => {}}
              className="xls-tab"
              data-xtab={0}
              style={
                {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  borderWidth: "medium",
                  borderStyle: "none",
                  borderColor: "currentcolor",
                  borderImage: "none",
                  background: "rgb(241, 245, 249)",
                  color: "rgb(51, 65, 85)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  padding: "10px 16px",
                  borderRadius: 30,
                  cursor: "pointer",
                } as any
              }
            >
              <span
                style={
                  {
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgba(15, 23, 42, 0.08)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.68rem",
                    fontWeight: 900,
                  } as any
                }
              >
                1
              </span>
              📊 <span data-i18n="xls.tab1">Sube tu Excel</span>
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="xls-tab"
              data-xtab={1}
              style={
                {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  borderWidth: "medium",
                  borderStyle: "none",
                  borderColor: "currentcolor",
                  borderImage: "none",
                  background: "rgb(61, 98, 245)",
                  color: "rgb(255, 255, 255)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  padding: "10px 16px",
                  borderRadius: 30,
                  cursor: "pointer",
                } as any
              }
            >
              <span
                style={
                  {
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.25)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.68rem",
                    fontWeight: 900,
                  } as any
                }
              >
                2
              </span>
              🤖 <span data-i18n="xls.tab2">La IA lee tus datos</span>
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="xls-tab"
              data-xtab={2}
              style={
                {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  borderWidth: "medium",
                  borderStyle: "none",
                  borderColor: "currentcolor",
                  borderImage: "none",
                  background: "rgb(241, 245, 249)",
                  color: "rgb(51, 65, 85)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  padding: "10px 16px",
                  borderRadius: 30,
                  cursor: "pointer",
                } as any
              }
            >
              <span
                style={
                  {
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgba(15, 23, 42, 0.08)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.68rem",
                    fontWeight: 900,
                  } as any
                }
              >
                3
              </span>
              🔗{" "}
              <span data-i18n="xls.tab3">
                Integra tu listado a ACREDIT
                <span style={{ color: "#1D4ED8" } as any}>TIA</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="xls-tab"
              data-xtab={3}
              style={
                {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  borderWidth: "medium",
                  borderStyle: "none",
                  borderColor: "currentcolor",
                  borderImage: "none",
                  background: "rgb(241, 245, 249)",
                  color: "rgb(51, 65, 85)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  padding: "10px 16px",
                  borderRadius: 30,
                  cursor: "pointer",
                } as any
              }
            >
              <span
                style={
                  {
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgba(15, 23, 42, 0.08)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.68rem",
                    fontWeight: 900,
                  } as any
                }
              >
                4
              </span>
              🖥️{" "}
              <span data-i18n="xls.tab4">Usa la plataforma, no el Excel</span>
            </button>
          </div>
          <div
            style={
              {
                background: "#fff",
                border: "1px solid var(--linea)",
                borderRadius: 22,
                boxShadow: "0 30px 70px -20px rgba(15,23,42,.15)",
                overflow: "hidden",
                maxWidth: 920,
                margin: "0 auto",
              } as any
            }
          >
            <div
              style={
                {
                  padding: "14px 20px",
                  borderBottom: "1px solid var(--linea)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#F8FAFC",
                } as any
              }
            >
              <div style={{ display: "flex", gap: 5 } as any}>
                <span
                  style={
                    {
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: "#F1F5F9",
                      border: "1px solid var(--linea)",
                      display: "inline-block",
                    } as any
                  }
                />
                <span
                  style={
                    {
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: "#F1F5F9",
                      border: "1px solid var(--linea)",
                      display: "inline-block",
                    } as any
                  }
                />
                <span
                  style={
                    {
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: "#F1F5F9",
                      border: "1px solid var(--linea)",
                      display: "inline-block",
                    } as any
                  }
                />
              </div>
              <span
                style={{ fontSize: ".72rem", color: "#94A3B8" } as any}
                data-i18n="xls.url"
              >
                🔒 acredittia.cl · Importar datos
              </span>
            </div>
            <div
              id="xlsPanelBody"
              style={{ padding: 28, minHeight: 360 } as any}
            >
              {/* STEP 0: SUBE TU EXCEL */}
              <div
                className="xls-step"
                data-step={0}
                style={{ display: "none" } as any}
              >
                <div
                  style={
                    {
                      border: "2px dashed var(--linea)",
                      borderRadius: 16,
                      padding: 22,
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      marginBottom: 20,
                      background: "var(--bg)",
                    } as any
                  }
                >
                  <div style={{ fontSize: "2.2rem" } as any}>📊</div>
                  <div style={{ flex: 1 } as any}>
                    <div
                      style={
                        {
                          fontSize: ".92rem",
                          fontWeight: 800,
                          color: "var(--azul)",
                        } as any
                      }
                    >
                      contratos_personal_equipos.xlsx
                    </div>
                    <div
                      data-i18n="xls.s0.drop"
                      style={
                        {
                          fontSize: ".78rem",
                          color: "var(--gris)",
                          marginTop: 2,
                        } as any
                      }
                    >
                      Arrastra tu Excel aquí o haz clic para subir
                    </div>
                  </div>
                  <span
                    data-i18n="xls.s0.detected"
                    style={
                      {
                        fontSize: ".68rem",
                        fontWeight: 700,
                        color: "#16A34A",
                        background: "#DCFCE7",
                        padding: "5px 10px",
                        borderRadius: 8,
                        whiteSpace: "nowrap",
                      } as any
                    }
                  >
                    3 hojas · 156 filas detectadas
                  </span>
                </div>
                <div
                  style={
                    {
                      border: "1px solid var(--linea)",
                      borderRadius: 12,
                      overflow: "hidden",
                    } as any
                  }
                >
                  <table
                    style={
                      {
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: ".76rem",
                      } as any
                    }
                  >
                    <thead>
                      <tr style={{ background: "#E8F5E9" } as any}>
                        <th
                          style={
                            {
                              textAlign: "left",
                              padding: "8px 10px",
                              color: "#1B5E20",
                              fontWeight: 700,
                              borderRight: "1px solid #C8E6C9",
                            } as any
                          }
                        >
                          Nombre
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              padding: "8px 10px",
                              color: "#1B5E20",
                              fontWeight: 700,
                              borderRight: "1px solid #C8E6C9",
                            } as any
                          }
                        >
                          RUT
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              padding: "8px 10px",
                              color: "#1B5E20",
                              fontWeight: 700,
                              borderRight: "1px solid #C8E6C9",
                            } as any
                          }
                        >
                          Cargo
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              padding: "8px 10px",
                              color: "#1B5E20",
                              fontWeight: 700,
                              borderRight: "1px solid #C8E6C9",
                            } as any
                          }
                        >
                          Examen Altura
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              padding: "8px 10px",
                              color: "#1B5E20",
                              fontWeight: 700,
                            } as any
                          }
                        >
                          Patente
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{ borderTop: "1px solid var(--linea)" } as any}
                      >
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          Rodrigo Pérez S.
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          16.234.567-8
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          Operador
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          11-03-2026
                        </td>
                        <td style={{ padding: "7px 10px" } as any}>LXDY88</td>
                      </tr>
                      <tr
                        style={
                          {
                            borderTop: "1px solid var(--linea)",
                            background: "#FAFBFF",
                          } as any
                        }
                      >
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          Marcela Torres
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          15.887.432-1
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          Supervisora
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          30-06-2026
                        </td>
                        <td style={{ padding: "7px 10px" } as any}>—</td>
                      </tr>
                      <tr
                        style={{ borderTop: "1px solid var(--linea)" } as any}
                      >
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          Francisco Águila
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          17.221.098-4
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          Chofer
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          05-05-2026
                        </td>
                        <td style={{ padding: "7px 10px" } as any}>RPDC68</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ marginTop: 20 } as any}>
                  <div
                    data-i18n="xls.s0.createslabel"
                    style={
                      {
                        fontSize: ".68rem",
                        fontWeight: 700,
                        letterSpacing: ".06em",
                        color: "var(--azul)",
                        textTransform: "uppercase",
                        marginBottom: 10,
                      } as any
                    }
                  >
                    Con ese mismo Excel del contrato, ACREDIT
                    <span style={{ color: "#1D4ED8" } as any}>TIA</span> crea
                    automáticamente:
                  </div>
                  <div
                    style={
                      {
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit,minmax(190px,1fr))",
                        gap: 10,
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                          background: "var(--bg)",
                          border: "1px solid var(--linea)",
                          borderRadius: 12,
                          padding: "12px 14px",
                        } as any
                      }
                    >
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
                          data-i18n="xls.s0.c1t"
                          style={
                            {
                              fontSize: ".8rem",
                              fontWeight: 700,
                              color: "#0F172A",
                            } as any
                          }
                        >
                          Nómina de trabajadores inicial
                        </div>
                        <div
                          data-i18n="xls.s0.c1d"
                          style={
                            {
                              fontSize: ".72rem",
                              color: "var(--gris)",
                              marginTop: 1,
                            } as any
                          }
                        >
                          Cada fila del Excel se convierte en un trabajador
                          acreditable, con su cargo y datos — tu nómina inicial
                          queda lista al instante.
                        </div>
                      </div>
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                          background: "var(--bg)",
                          border: "1px solid var(--linea)",
                          borderRadius: 12,
                          padding: "12px 14px",
                        } as any
                      }
                    >
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
                          data-i18n="xls.s0.c2t"
                          style={
                            {
                              fontSize: ".8rem",
                              fontWeight: 700,
                              color: "#0F172A",
                            } as any
                          }
                        >
                          Los equipos
                        </div>
                        <div
                          data-i18n="xls.s0.c2d"
                          style={
                            {
                              fontSize: ".72rem",
                              color: "var(--gris)",
                              marginTop: 1,
                            } as any
                          }
                        >
                          Patentes y vehículos quedan registrados como equipos
                          del contrato.
                        </div>
                      </div>
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                          background: "var(--bg)",
                          border: "1px solid var(--linea)",
                          borderRadius: 12,
                          padding: "12px 14px",
                        } as any
                      }
                    >
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
                          data-i18n="xls.s0.c3t"
                          style={
                            {
                              fontSize: ".8rem",
                              fontWeight: 700,
                              color: "#0F172A",
                            } as any
                          }
                        >
                          Requisitos de cada uno
                        </div>
                        <div
                          data-i18n="xls.s0.c3d"
                          style={
                            {
                              fontSize: ".72rem",
                              color: "var(--gris)",
                              marginTop: 1,
                            } as any
                          }
                        >
                          La IA asigna a cada persona y equipo los documentos
                          que exige esa faena.
                        </div>
                      </div>
                    </div>
                    <div
                      style={
                        {
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                          background: "var(--bg)",
                          border: "1px solid var(--linea)",
                          borderRadius: 12,
                          padding: "12px 14px",
                        } as any
                      }
                    >
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
                          data-i18n="xls.s0.c4t"
                          style={
                            {
                              fontSize: ".8rem",
                              fontWeight: 700,
                              color: "#0F172A",
                            } as any
                          }
                        >
                          Requisitos de la empresa
                        </div>
                        <div
                          data-i18n="xls.s0.c4d"
                          style={
                            {
                              fontSize: ".72rem",
                              color: "var(--gris)",
                              marginTop: 1,
                            } as any
                          }
                        >
                          Pólizas, seguros y documentación a nivel de contrato,
                          también mapeados.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        marginTop: 14,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        background: "#EEF2FF",
                        border: "1px solid rgba(61,98,245,.18)",
                        borderRadius: 12,
                        padding: "14px 16px",
                      } as any
                    }
                  >
                    <span style={{ fontSize: "1.4rem", flexShrink: 0 } as any}>
                      🚀
                    </span>
                    <p
                      data-i18n="xls.s0.ready"
                      style={
                        {
                          fontSize: ".82rem",
                          color: "#1E3A8A",
                          lineHeight: "1.55",
                          margin: 0,
                        } as any
                      }
                    >
                      El contrato queda funcionando de inmediato y{" "}
                      <b>ya no depende de un Excel</b>: tu equipo completo queda
                      conectado a la misma plataforma en línea, con
                      recordatorios automáticos de cada punto crítico — solo
                      falta ir subiendo los documentos (exámenes, pólizas,
                      revisiones técnicas...) para que la IA los lea, los valide
                      y los deje al día.
                    </p>
                  </div>
                </div>
              </div>
              {/* STEP 1: LA IA LEE TUS DATOS */}
              <div className="xls-step" data-step={1} style={{} as any}>
                <div
                  style={
                    {
                      position: "relative",
                      border: "1px solid var(--linea)",
                      borderRadius: 12,
                      overflow: "hidden",
                      marginBottom: 16,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: 2,
                        background:
                          "linear-gradient(90deg,transparent,#3D62F5,transparent)",
                        animation: "docScan 2.6s ease-in-out infinite",
                        zIndex: 2,
                      } as any
                    }
                  />
                  <table
                    style={
                      {
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: ".76rem",
                      } as any
                    }
                  >
                    <thead>
                      <tr style={{ background: "#EEF2FF" } as any}>
                        <th
                          style={
                            {
                              textAlign: "left",
                              padding: "8px 10px",
                              color: "var(--azul)",
                              fontWeight: 700,
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          Nombre{" "}
                          <span
                            style={
                              {
                                display: "block",
                                fontWeight: 600,
                                color: "#16A34A",
                                fontSize: ".62rem",
                              } as any
                            }
                          >
                            ✓ Personal.nombre
                          </span>
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              padding: "8px 10px",
                              color: "var(--azul)",
                              fontWeight: 700,
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          RUT{" "}
                          <span
                            style={
                              {
                                display: "block",
                                fontWeight: 600,
                                color: "#16A34A",
                                fontSize: ".62rem",
                              } as any
                            }
                          >
                            ✓ Personal.rut
                          </span>
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              padding: "8px 10px",
                              color: "var(--azul)",
                              fontWeight: 700,
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          Examen Altura{" "}
                          <span
                            style={
                              {
                                display: "block",
                                fontWeight: 600,
                                color: "#16A34A",
                                fontSize: ".62rem",
                              } as any
                            }
                          >
                            ✓ Documento.vigencia
                          </span>
                        </th>
                        <th
                          style={
                            {
                              textAlign: "left",
                              padding: "8px 10px",
                              color: "var(--azul)",
                              fontWeight: 700,
                            } as any
                          }
                        >
                          Patente{" "}
                          <span
                            style={
                              {
                                display: "block",
                                fontWeight: 600,
                                color: "#16A34A",
                                fontSize: ".62rem",
                              } as any
                            }
                          >
                            ✓ Equipo.patente
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{ borderTop: "1px solid var(--linea)" } as any}
                      >
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          Rodrigo Pérez S.{" "}
                          <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          16.234.567-8{" "}
                          <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          11-03-2026{" "}
                          <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                        <td style={{ padding: "7px 10px" } as any}>
                          LXDY88{" "}
                          <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                      </tr>
                      <tr
                        style={
                          {
                            borderTop: "1px solid var(--linea)",
                            background: "#FAFBFF",
                          } as any
                        }
                      >
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          Marcela Torres{" "}
                          <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          15.887.432-1{" "}
                          <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          30-06-2026{" "}
                          <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                        <td style={{ padding: "7px 10px" } as any}>
                          — <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                      </tr>
                      <tr
                        style={{ borderTop: "1px solid var(--linea)" } as any}
                      >
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          Francisco Águila{" "}
                          <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          17.221.098-4{" "}
                          <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                        <td
                          style={
                            {
                              padding: "7px 10px",
                              borderRight: "1px solid var(--linea)",
                            } as any
                          }
                        >
                          05-05-2026{" "}
                          <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                        <td style={{ padding: "7px 10px" } as any}>
                          RPDC68{" "}
                          <span style={{ color: "#16A34A" } as any}>✓</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      flexWrap: "wrap",
                    } as any
                  }
                >
                  <div style={{ flex: 1, minWidth: 180 } as any}>
                    <div
                      style={
                        {
                          height: 6,
                          background: "var(--linea)",
                          borderRadius: 6,
                          overflow: "hidden",
                        } as any
                      }
                    >
                      <div
                        style={
                          {
                            height: "100%",
                            width: "100%",
                            background:
                              "linear-gradient(90deg,#3D62F5,#16A34A)",
                            borderRadius: 6,
                          } as any
                        }
                      />
                    </div>
                    <div
                      data-i18n="xls.s1.progress"
                      style={
                        {
                          fontSize: ".72rem",
                          color: "var(--gris)",
                          marginTop: 6,
                        } as any
                      }
                    >
                      Leyendo con IA... 100%
                    </div>
                  </div>
                  <span
                    data-i18n="xls.s1.stat"
                    style={
                      {
                        fontSize: ".72rem",
                        fontWeight: 700,
                        color: "#16A34A",
                        background: "#DCFCE7",
                        padding: "6px 12px",
                        borderRadius: 8,
                        whiteSpace: "nowrap",
                      } as any
                    }
                  >
                    156 registros importados · 0 intervención manual
                  </span>
                </div>
              </div>
              {/* STEP 2: INTEGRA TU LISTADO A ACREDITTIA */}
              <div
                className="xls-step"
                data-step={2}
                style={{ display: "none" } as any}
              >
                <div
                  style={{ textAlign: "center", padding: "14px 0 6px" } as any}
                >
                  <div
                    style={
                      {
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "#DCFCE7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                        fontSize: "1.9rem",
                      } as any
                    }
                  >
                    ✅
                  </div>
                  <div
                    data-i18n="xls.s2.title"
                    style={
                      {
                        fontSize: "1.05rem",
                        fontWeight: 900,
                        color: "var(--azul)",
                        marginBottom: 8,
                      } as any
                    }
                  >
                    156 registros integrados a ACREDIT
                    <span style={{ color: "#1D4ED8" } as any}>TIA</span>
                  </div>
                  <p
                    data-i18n="xls.s2.sub"
                    style={
                      {
                        fontSize: ".84rem",
                        color: "var(--gris)",
                        maxWidth: 480,
                        margin: "0 auto",
                        lineHeight: "1.6",
                      } as any
                    }
                  >
                    Tu listado ya no vive en un Excel — ahora es parte de tu
                    plataforma de acreditación, lista para que todo tu equipo
                    trabaje desde ahí.
                  </p>
                </div>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(3,1fr)",
                      gap: 14,
                      marginTop: 24,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "var(--bg)",
                        border: "1px solid var(--linea)",
                        borderRadius: 14,
                        padding: 16,
                        textAlign: "center",
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          fontSize: "1.6rem",
                          fontWeight: 900,
                          color: "var(--azul)",
                        } as any
                      }
                    >
                      28
                    </div>
                    <div
                      data-i18n="xls.s2.k1"
                      style={
                        {
                          fontSize: ".74rem",
                          color: "var(--gris)",
                          marginTop: 2,
                        } as any
                      }
                    >
                      Trabajadores
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "var(--bg)",
                        border: "1px solid var(--linea)",
                        borderRadius: 14,
                        padding: 16,
                        textAlign: "center",
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          fontSize: "1.6rem",
                          fontWeight: 900,
                          color: "var(--azul)",
                        } as any
                      }
                    >
                      14
                    </div>
                    <div
                      data-i18n="xls.s2.k2"
                      style={
                        {
                          fontSize: ".74rem",
                          color: "var(--gris)",
                          marginTop: 2,
                        } as any
                      }
                    >
                      Equipos y vehículos
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "var(--bg)",
                        border: "1px solid var(--linea)",
                        borderRadius: 14,
                        padding: 16,
                        textAlign: "center",
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          fontSize: "1.6rem",
                          fontWeight: 900,
                          color: "var(--azul)",
                        } as any
                      }
                    >
                      114
                    </div>
                    <div
                      data-i18n="xls.s2.k3"
                      style={
                        {
                          fontSize: ".74rem",
                          color: "var(--gris)",
                          marginTop: 2,
                        } as any
                      }
                    >
                      Requisitos asignados
                    </div>
                  </div>
                </div>
              </div>
              {/* STEP 3: USA LA PLATAFORMA, NO EL EXCEL */}
              <div
                className="xls-step"
                data-step={3}
                style={{ display: "none" } as any}
              >
                <p
                  data-i18n="xls.s3.intro"
                  style={
                    {
                      fontSize: ".86rem",
                      color: "var(--gris)",
                      margin: "0 0 16px",
                    } as any
                  }
                >
                  Esto es lo que ves ahora en ACREDIT
                  <span style={{ color: "#1D4ED8" } as any}>TIA</span> — en vez
                  de revisar tu Excel a mano, fila por fila.
                </p>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(3,1fr)",
                      gap: 14,
                      marginBottom: 18,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        background: "#FEF2F2",
                        border: "1px solid #FECACA",
                        borderRadius: 14,
                        padding: 16,
                        textAlign: "center",
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          fontSize: "1.6rem",
                          fontWeight: 900,
                          color: "#DC2626",
                        } as any
                      }
                    >
                      12
                    </div>
                    <div
                      data-i18n="xls.s3.k1"
                      style={
                        {
                          fontSize: ".74rem",
                          color: "#991B1B",
                          marginTop: 2,
                        } as any
                      }
                    >
                      Documentos vencidos
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#FFFBEB",
                        border: "1px solid #FDE68A",
                        borderRadius: 14,
                        padding: 16,
                        textAlign: "center",
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          fontSize: "1.6rem",
                          fontWeight: 900,
                          color: "#D97706",
                        } as any
                      }
                    >
                      34
                    </div>
                    <div
                      data-i18n="xls.s3.k2"
                      style={
                        {
                          fontSize: ".74rem",
                          color: "#92400E",
                          marginTop: 2,
                        } as any
                      }
                    >
                      Por vencer en 30 días
                    </div>
                  </div>
                  <div
                    style={
                      {
                        background: "#F0FDF4",
                        border: "1px solid #BBF7D0",
                        borderRadius: 14,
                        padding: 16,
                        textAlign: "center",
                      } as any
                    }
                  >
                    <div
                      style={
                        {
                          fontSize: "1.6rem",
                          fontWeight: 900,
                          color: "#16A34A",
                        } as any
                      }
                    >
                      110
                    </div>
                    <div
                      data-i18n="xls.s3.k3"
                      style={
                        {
                          fontSize: ".74rem",
                          color: "#166534",
                          marginTop: 2,
                        } as any
                      }
                    >
                      Vigentes y en regla
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      marginBottom: 16,
                    } as any
                  }
                >
                  <div
                    style={
                      {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "10px 14px",
                        border: "1px solid var(--linea)",
                        borderRadius: 10,
                      } as any
                    }
                  >
                    <span style={{ color: "#DC2626", fontWeight: 900 } as any}>
                      ⚠
                    </span>
                    <div style={{ flex: 1 } as any}>
                      <div
                        data-i18n="xls.s3.a1t"
                        style={
                          {
                            fontSize: ".8rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Revisión técnica LXDY88 vencida
                      </div>
                      <div
                        data-i18n="xls.s3.a1d"
                        style={
                          { fontSize: ".72rem", color: "var(--gris)" } as any
                        }
                      >
                        Detectado automáticamente por ACREDIT
                        <span style={{ color: "#1D4ED8" } as any}>TIA</span> —
                        hace 3 días
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "10px 14px",
                        border: "1px solid var(--linea)",
                        borderRadius: 10,
                      } as any
                    }
                  >
                    <span style={{ color: "#D97706", fontWeight: 900 } as any}>
                      ⏱
                    </span>
                    <div style={{ flex: 1 } as any}>
                      <div
                        data-i18n="xls.s3.a2t"
                        style={
                          {
                            fontSize: ".8rem",
                            fontWeight: 700,
                            color: "#0F172A",
                          } as any
                        }
                      >
                        Examen de altura de Rodrigo P.
                      </div>
                      <div
                        data-i18n="xls.s3.a2d"
                        style={
                          { fontSize: ".72rem", color: "var(--gris)" } as any
                        }
                      >
                        Vence en 12 días — alerta programada automáticamente
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      background: "#EEF2FF",
                      border: "1px solid rgba(61,98,245,.18)",
                      borderRadius: 12,
                      padding: "14px 16px",
                    } as any
                  }
                >
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 } as any}>
                    👥
                  </span>
                  <p
                    data-i18n="xls.s3.outro"
                    style={
                      {
                        fontSize: ".82rem",
                        color: "#1E3A8A",
                        lineHeight: "1.55",
                        margin: 0,
                      } as any
                    }
                  >
                    Tu equipo completo ve esto mismo, conectado en tiempo real —
                    ya no necesitan volver a abrir el Excel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
