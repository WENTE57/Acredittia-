"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingIndustries() {
  const router = useRouter();
  return (
    <>
      {/* INDUSTRIAS */}
      <section
        id="sectores"
        style={{ background: "#fff", padding: "72px 6%" } as any}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" } as any}>
          <div style={{ textAlign: "center", marginBottom: 48 } as any}>
            <span data-i18n="ind.label" className="sec-label">
              TODAS LAS INDUSTRIAS
            </span>
            <h2
              data-i18n="ind.h2"
              style={
                {
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "var(--azul)",
                  marginBottom: 12,
                } as any
              }
            >
              Trabajamos con cualquier faena que necesite acreditar proveedores
            </h2>
            <p
              data-i18n="ind.p"
              style={
                {
                  color: "var(--gris)",
                  maxWidth: 640,
                  margin: "0 auto",
                  fontSize: "1rem",
                } as any
              }
            >
              Agropecuario, salmonicultura, minería, energía, construcción o
              cualquier otro rubro — si tu faena exige documentos, contratos y
              requisitos a sus proveedores, ACREDIT
              <span style={{ color: "#1D4ED8" } as any}>TIA</span> se adapta. No
              estamos limitados a un solo sector.
            </p>
          </div>
          <div
            className="industrias-grid"
            style={
              {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: 24,
                maxWidth: 1200,
                margin: "0 auto",
              } as any
            }
          >
            {/* MINERÍA */}
            <div
              style={
                {
                  background: "var(--bg)",
                  border: "1px solid var(--linea)",
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: ".15s",
                  cursor: "pointer",
                } as any
              }
              onMouseOver={() => {}}
              onMouseOut={() => {}}
            >
              <div
                className="ind-card-img"
                style={
                  {
                    height: 180,
                    background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
                    position: "relative",
                    overflow: "hidden",
                  } as any
                }
              >
                <img
                  src="/foto1.jpeg"
                  style={
                    {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      opacity: ".7",
                    } as any
                  }
                  onError={() => {}}
                />
                <div
                  style={
                    {
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(10,16,32,.8) 0%,transparent 60%)",
                    } as any
                  }
                />
                <div
                  style={
                    {
                      position: "absolute",
                      bottom: 14,
                      left: 18,
                      color: "#fff",
                    } as any
                  }
                >
                  <div style={{ fontSize: "2rem", marginBottom: 4 } as any}>
                    ⛏️
                  </div>
                  <div
                    data-i18n="ind.min.title"
                    style={
                      {
                        fontSize: "1.3rem",
                        fontWeight: 900,
                        fontFamily: "var(--display)",
                      } as any
                    }
                  >
                    MINERÍA
                  </div>
                </div>
              </div>
              <div style={{ padding: 22 } as any}>
                <p
                  data-i18n="ind.min.p"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".9rem",
                      lineHeight: "1.6",
                      marginBottom: 16,
                    } as any
                  }
                >
                  Faenas de gran minería, minería mediana y proyectos de
                  exploración. Workmate, SIGA, Metacontratas y más de 30 faenas
                  integradas.
                </p>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 7 } as any
                  }
                >
                  <div
                    data-i18n="ind.min.b1"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Codelco, BHP, Antofagasta Minerals, Teck
                  </div>
                  <div
                    data-i18n="ind.min.b2"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Workmate, SIGA, Metacontratas
                  </div>
                  <div
                    data-i18n="ind.min.b3"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Requisitos de terreno: Pértiga, Radio, GPS
                  </div>
                </div>
              </div>
            </div>
            {/* ENERGÍA */}
            <div
              style={
                {
                  background: "var(--bg)",
                  border: "1px solid var(--linea)",
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: "0.15s",
                  cursor: "pointer",
                } as any
              }
              onMouseOver={() => {}}
              onMouseOut={() => {}}
            >
              <div
                className="ind-card-img"
                style={
                  {
                    height: 180,
                    background: "linear-gradient(135deg,#0F2D1A,#1a4a2a)",
                    position: "relative",
                    overflow: "hidden",
                  } as any
                }
              >
                <img
                  src="/photo-1452179535021-368bb0edc3a8"
                  style={
                    {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: ".7",
                    } as any
                  }
                  onError={() => {}}
                />
                <div
                  style={
                    {
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(10,30,16,.8) 0%,transparent 60%)",
                    } as any
                  }
                />
                <div
                  style={
                    {
                      position: "absolute",
                      bottom: 14,
                      left: 18,
                      color: "#fff",
                    } as any
                  }
                >
                  <div style={{ fontSize: "2rem", marginBottom: 4 } as any}>
                    ⚡
                  </div>
                  <div
                    data-i18n="ind.ener.title"
                    style={
                      {
                        fontSize: "1.3rem",
                        fontWeight: 900,
                        fontFamily: "var(--display)",
                      } as any
                    }
                  >
                    ENERGÍA
                  </div>
                </div>
              </div>
              <div style={{ padding: 22 } as any}>
                <p
                  data-i18n="ind.ener.p"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".9rem",
                      lineHeight: "1.6",
                      marginBottom: 16,
                    } as any
                  }
                >
                  Parques eólicos, plantas fotovoltaicas y proyectos de energía
                  renovable. Requisitos específicos de trabajo en altura y
                  riesgo eléctrico.
                </p>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 7 } as any
                  }
                >
                  <div
                    data-i18n="ind.ener.b1"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Nordex, Acciona, Enel Green Power, EDF
                  </div>
                  <div
                    data-i18n="ind.ener.b2"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Parques eólicos y plantas solares en Chile
                  </div>
                  <div
                    data-i18n="ind.ener.b3"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Trabajo en altura, riesgo eléctrico, ISO 45001
                  </div>
                </div>
              </div>
            </div>
            {/* CONSTRUCCIÓN */}
            <div
              style={
                {
                  background: "var(--bg)",
                  border: "1px solid var(--linea)",
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: "0.15s",
                  cursor: "pointer",
                } as any
              }
              onMouseOver={() => {}}
              onMouseOut={() => {}}
            >
              <div
                className="ind-card-img"
                style={
                  {
                    height: 180,
                    background: "linear-gradient(135deg,#1a1000,#2a1e00)",
                    position: "relative",
                    overflow: "hidden",
                  } as any
                }
              >
                <img
                  src="/photo-1504917595217-d4dc5ebe6122"
                  style={
                    {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: ".7",
                    } as any
                  }
                  onError={() => {}}
                />
                <div
                  style={
                    {
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(26,16,0,.8) 0%,transparent 60%)",
                    } as any
                  }
                />
                <div
                  style={
                    {
                      position: "absolute",
                      bottom: 14,
                      left: 18,
                      color: "#fff",
                    } as any
                  }
                >
                  <div style={{ fontSize: "2rem", marginBottom: 4 } as any}>
                    🏗️
                  </div>
                  <div
                    data-i18n="ind.con.title"
                    style={
                      {
                        fontSize: "1.3rem",
                        fontWeight: 900,
                        fontFamily: "var(--display)",
                      } as any
                    }
                  >
                    CONSTRUCCIÓN
                  </div>
                </div>
              </div>
              <div style={{ padding: 22 } as any}>
                <p
                  data-i18n="ind.con.p"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".9rem",
                      lineHeight: "1.6",
                      marginBottom: 16,
                    } as any
                  }
                >
                  Obras civiles, montajes industriales y construcción en
                  proyectos mineros y energéticos. Alzahombres, grúas y
                  maquinaria pesada.
                </p>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 7 } as any
                  }
                >
                  <div
                    data-i18n="ind.con.b1"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Obras en faenas mineras y proyectos de energía
                  </div>
                  <div
                    data-i18n="ind.con.b2"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Alzahombres, grúas, maquinaria especializada
                  </div>
                  <div
                    data-i18n="ind.con.b3"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Certificaciones, planes de emergencia, seguros
                  </div>
                </div>
              </div>
            </div>
            {/* AGROPECUARIO */}
            <div
              style={
                {
                  background: "var(--bg)",
                  border: "1px solid var(--linea)",
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: ".15s",
                  cursor: "pointer",
                } as any
              }
              onMouseOver={() => {}}
              onMouseOut={() => {}}
            >
              <div
                className="ind-card-img"
                style={
                  {
                    height: 180,
                    background: "linear-gradient(135deg,#1a2e0a,#2f4a14)",
                    position: "relative",
                    overflow: "hidden",
                  } as any
                }
              >
                <img
                  src="/photo-1500595046743-cd271d694d30"
                  style={
                    {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: ".7",
                    } as any
                  }
                  onError={() => {}}
                />
                <div
                  style={
                    {
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(20,30,10,.8) 0%,transparent 60%)",
                    } as any
                  }
                />
                <div
                  style={
                    {
                      position: "absolute",
                      bottom: 14,
                      left: 18,
                      color: "#fff",
                    } as any
                  }
                >
                  <div style={{ fontSize: "2rem", marginBottom: 4 } as any}>
                    🌾
                  </div>
                  <div
                    data-i18n="ind.agro.title"
                    style={
                      {
                        fontSize: "1.3rem",
                        fontWeight: 900,
                        fontFamily: "var(--display)",
                      } as any
                    }
                  >
                    AGROPECUARIO
                  </div>
                </div>
              </div>
              <div style={{ padding: 22 } as any}>
                <p
                  data-i18n="ind.agro.p"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".9rem",
                      lineHeight: "1.6",
                      marginBottom: 16,
                    } as any
                  }
                >
                  Faenas agrícolas, agroindustriales y ganaderas que exigen
                  acreditación a contratistas, transportistas y proveedores de
                  servicios.
                </p>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 7 } as any
                  }
                >
                  <div
                    data-i18n="ind.agro.b1"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Contratistas, transportistas y maquinaria agrícola
                  </div>
                  <div
                    data-i18n="ind.agro.b2"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Requisitos sanitarios, de inocuidad y trazabilidad
                  </div>
                  <div
                    data-i18n="ind.agro.b3"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Documentación de personal y equipos en terreno
                  </div>
                </div>
              </div>
            </div>
            {/* SALMONICULTURA */}
            <div
              style={
                {
                  background: "var(--bg)",
                  border: "1px solid var(--linea)",
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: ".15s",
                  cursor: "pointer",
                } as any
              }
              onMouseOver={() => {}}
              onMouseOut={() => {}}
            >
              <div
                className="ind-card-img"
                style={
                  {
                    height: 180,
                    background: "linear-gradient(135deg,#062330,#0a3d52)",
                    position: "relative",
                    overflow: "hidden",
                  } as any
                }
              >
                <img
                  src="/photo-1745436058216-7db617e7fb39"
                  style={
                    {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: ".75",
                    } as any
                  }
                  onError={() => {}}
                />
                <div
                  style={
                    {
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(6,35,48,.85) 0%,transparent 60%)",
                    } as any
                  }
                />
                <div
                  style={
                    {
                      position: "absolute",
                      bottom: 14,
                      left: 18,
                      color: "#fff",
                    } as any
                  }
                >
                  <div style={{ fontSize: "2rem", marginBottom: 4 } as any}>
                    🐟
                  </div>
                  <div
                    data-i18n="ind.salm.title"
                    style={
                      {
                        fontSize: "1.3rem",
                        fontWeight: 900,
                        fontFamily: "var(--display)",
                      } as any
                    }
                  >
                    SALMONICULTURA
                  </div>
                </div>
              </div>
              <div style={{ padding: 22 } as any}>
                <p
                  data-i18n="ind.salm.p"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".9rem",
                      lineHeight: "1.6",
                      marginBottom: 16,
                    } as any
                  }
                >
                  Centros de cultivo, plantas de proceso y toda la cadena de
                  proveedores de la salmonicultura en el sur de Chile.
                  Compatible con las plataformas que ya usa la industria.
                </p>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 7 } as any
                  }
                >
                  <div
                    data-i18n="ind.salm.b1"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    AquaChile, Camanchaca, Multiexport, Cermaq, Blumar
                  </div>
                  <div
                    data-i18n="ind.salm.b2"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Pronexo, AQS, ProCheck, HP Office
                  </div>
                  <div
                    data-i18n="ind.salm.b3"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Requisitos sanitarios, ambientales y de bioseguridad
                  </div>
                </div>
              </div>
            </div>
            {/* CUALQUIER FAENA */}
            <div
              style={
                {
                  background: "var(--bg)",
                  border: "1px solid var(--linea)",
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: "0.15s",
                  cursor: "pointer",
                } as any
              }
              onMouseOver={() => {}}
              onMouseOut={() => {}}
            >
              <div
                className="ind-card-img"
                style={
                  {
                    height: 180,
                    background: "linear-gradient(135deg,#1E1B4B,#3730A3)",
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-end",
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
                        "linear-gradient(to top,rgba(15,10,40,.4) 0%,transparent 60%)",
                    } as any
                  }
                />
                <div
                  style={
                    {
                      position: "relative",
                      bottom: 14,
                      left: 18,
                      padding: "0 18px",
                      color: "#fff",
                    } as any
                  }
                >
                  <div style={{ fontSize: "2rem", marginBottom: 4 } as any}>
                    📄
                  </div>
                  <div
                    data-i18n="ind.other.title"
                    style={
                      {
                        fontSize: "1.3rem",
                        fontWeight: 900,
                        fontFamily: "var(--display)",
                      } as any
                    }
                  >
                    Y CUALQUIER OTRA FAENA
                  </div>
                </div>
              </div>
              <div style={{ padding: 22 } as any}>
                <p
                  data-i18n="ind.other.p"
                  style={
                    {
                      color: "var(--gris)",
                      fontSize: ".9rem",
                      lineHeight: "1.6",
                      marginBottom: 16,
                    } as any
                  }
                >
                  Portuario, industrial, sanitario o cualquier otro rubro — si
                  tu faena exige documentos y requisitos a sus proveedores,
                  podemos mapear el flujo completo y automatizarlo.
                </p>
                <div
                  style={
                    { display: "flex", flexDirection: "column", gap: 7 } as any
                  }
                >
                  <div
                    data-i18n="ind.other.b1"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Nos adaptamos a tu plataforma o proceso actual
                  </div>
                  <div
                    data-i18n="ind.other.b2"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Mapeamos tus requisitos y formularios propios
                  </div>
                  <div
                    data-i18n="ind.other.b3"
                    style={
                      {
                        display: "flex",
                        gap: 8,
                        fontSize: ".82rem",
                        color: "var(--gris)",
                      } as any
                    }
                  >
                    <span
                      style={{ color: "var(--cyan)", fontWeight: 700 } as any}
                    >
                      →
                    </span>
                    Implementación a medida de tu rubro
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
