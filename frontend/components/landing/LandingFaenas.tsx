"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function LandingFaenas() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  // Todo: Migrar scripts de animación aquí

  return (
    <div ref={ref}>
      {/* FAENAS SCROLL SECTION (YC-style) */}
      <section style={{ background: "#fff", padding: "90px 6% 100px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="sec-label">DÓNDE TRABAJAMOS</span>
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 900,
                color: "var(--azul)",
                margin: "16px 0 12px",
              }}
            >
              Faenas 100% integradas. Un solo lugar para acreditar.
            </h2>
            <p
              style={{
                color: "var(--gris)",
                fontSize: "1rem",
                maxWidth: 680,
                margin: "0 auto",
              }}
            >
              En estas 9 faenas ya tenemos el flujo y las plataformas
              completamente mapeados: integración directa, sin pasos manuales.
              ¿Tu faena no está? También se puede integrar: nuestra IA lee los
              manuales y reglamentos, y tú mismo puedes ir agregando los
              requisitos específicos de cualquier otra faena.
            </p>
          </div>
          <div className="fsc-grid" id="fsc-grid">
            {/* LEFT: scrolling list */}
            <div className="fsc-list" id="fsc-list">
              <div className="fsc-item active" data-faena="flp">
                <div className="fsc-item-name">
                  <span className="fsc-dot" />
                  Los Pelambres
                </div>
                <div className="fsc-item-region">
                  Antofagasta Minerals · Región de Coquimbo
                </div>
              </div>
              <div className="fsc-item" data-faena="fcen">
                <div className="fsc-item-name">
                  <span className="fsc-dot" />
                  Centinela
                </div>
                <div className="fsc-item-region">
                  Antofagasta Minerals · Región de Antofagasta
                </div>
              </div>
              <div className="fsc-item" data-faena="fant">
                <div className="fsc-item-name">
                  <span className="fsc-dot" />
                  Antucoya
                </div>
                <div className="fsc-item-region">
                  Antofagasta Minerals · Región de Antofagasta
                </div>
              </div>
              <div className="fsc-item" data-faena="fzal">
                <div className="fsc-item-name">
                  <span className="fsc-dot" />
                  Zaldívar
                </div>
                <div className="fsc-item-region">
                  Antofagasta Minerals · Región de Antofagasta
                </div>
              </div>
              <div className="fsc-item" data-faena="fcan">
                <div className="fsc-item-name">
                  <span className="fsc-dot" />
                  Candelaria
                </div>
                <div className="fsc-item-region">
                  Lundin Mining · Región de Atacama
                </div>
              </div>
              <div className="fsc-item" data-faena="fcas">
                <div className="fsc-item-name">
                  <span className="fsc-dot" />
                  Caserones
                </div>
                <div className="fsc-item-region">
                  Lundin Mining · Región de Atacama
                </div>
              </div>
              <div className="fsc-item" data-faena="ften">
                <div className="fsc-item-name">
                  <span className="fsc-dot" />
                  El Teniente
                </div>
                <div className="fsc-item-region">
                  Codelco · Región de O'Higgins
                </div>
              </div>
              <div className="fsc-item" data-faena="fand">
                <div className="fsc-item-name">
                  <span className="fsc-dot" />
                  Andina
                </div>
                <div className="fsc-item-region">
                  Codelco · Región de Valparaíso
                </div>
              </div>
              <div className="fsc-item" data-faena="feol">
                <div className="fsc-item-name">
                  <span className="fsc-dot" />
                  Parque Eólico Antofagasta I
                </div>
                <div className="fsc-item-region">
                  Energía renovable · Región de Antofagasta
                </div>
              </div>
            </div>
            {/* RIGHT: sticky visual */}
            <div className="fsc-sticky">
              <div className="fsc-visual-wrap" id="fsc-visual">
                <div
                  className="fsc-card active"
                  data-faena="flp"
                  style={{
                    background:
                      'linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url("/los_pelambres.jpeg") center/cover no-repeat',
                  }}
                >
                  <div className="fsc-card-top">
                    <div className="fsc-card-badge">
                      <img src="/logo_amsa.png" alt="AMSA" />
                      <span>AMSA</span>
                    </div>
                    <span className="fsc-card-tag">SIGA</span>
                  </div>
                  <div className="fsc-card-bottom">
                    <h3>Los Pelambres</h3>
                    <p>
                      Región de Coquimbo — una de las minas de cobre más grandes
                      de Chile.
                    </p>
                  </div>
                </div>
                <div
                  className="fsc-card"
                  data-faena="fcen"
                  style={{
                    background:
                      'linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url("/centinela.jpg") center/cover no-repeat',
                  }}
                >
                  <div className="fsc-card-top">
                    <div className="fsc-card-badge">
                      <img src="/logo_amsa.png" alt="AMSA" />
                      <span>AMSA</span>
                    </div>
                    <span className="fsc-card-tag">SIGA</span>
                  </div>
                  <div className="fsc-card-bottom">
                    <h3>Centinela</h3>
                    <p>
                      Región de Antofagasta — operación de cobre y oro a gran
                      escala.
                    </p>
                  </div>
                </div>
                <div
                  className="fsc-card"
                  data-faena="fant"
                  style={{
                    background:
                      'linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url("/antucoya.jpg") center/cover no-repeat',
                  }}
                >
                  <div className="fsc-card-top">
                    <div className="fsc-card-badge">
                      <img src="/logo_amsa.png" alt="AMSA" />
                      <span>AMSA</span>
                    </div>
                    <span className="fsc-card-tag">SIGA</span>
                  </div>
                  <div className="fsc-card-bottom">
                    <h3>Antucoya</h3>
                    <p>
                      Región de Antofagasta — yacimiento de cobre de baja ley
                      con lixiviación.
                    </p>
                  </div>
                </div>
                <div
                  className="fsc-card"
                  data-faena="fzal"
                  style={{
                    background:
                      'linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url("/zaldivar.png") center/cover no-repeat',
                  }}
                >
                  <div className="fsc-card-top">
                    <div className="fsc-card-badge">
                      <img src="/logo_amsa.png" alt="AMSA" />
                      <span>AMSA</span>
                    </div>
                    <span className="fsc-card-tag">SIGA</span>
                  </div>
                  <div className="fsc-card-bottom">
                    <h3>Zaldívar</h3>
                    <p>
                      Región de Antofagasta — mina de cobre operada en conjunto
                      con Barrick.
                    </p>
                  </div>
                </div>
                <div
                  className="fsc-card"
                  data-faena="fcan"
                  style={{
                    background:
                      'linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url("/candelaria.jpg") center/cover no-repeat',
                  }}
                >
                  <div className="fsc-card-top">
                    <div className="fsc-card-badge">
                      <img
                        src="/logo_lundinmining_icon.png"
                        alt="Lundin Mining"
                      />
                      <span>LUNDIN MINING</span>
                    </div>
                    <span className="fsc-card-tag">WEBCONTROL</span>
                  </div>
                  <div className="fsc-card-bottom">
                    <h3>Candelaria</h3>
                    <p>
                      Región de Atacama — operación de cobre subterránea y a
                      rajo abierto.
                    </p>
                  </div>
                </div>
                <div
                  className="fsc-card"
                  data-faena="fcas"
                  style={{
                    background:
                      'linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url("/caserones.jpeg") center/cover no-repeat',
                  }}
                >
                  <div className="fsc-card-top">
                    <div className="fsc-card-badge">
                      <img
                        src="/logo_lundinmining_icon.png"
                        alt="Lundin Mining"
                      />
                      <span>LUNDIN MINING</span>
                    </div>
                    <span className="fsc-card-tag">WEBCONTROL</span>
                  </div>
                  <div className="fsc-card-bottom">
                    <h3>Caserones</h3>
                    <p>Región de Atacama — yacimiento de cobre y molibdeno.</p>
                  </div>
                </div>
                <div
                  className="fsc-card"
                  data-faena="ften"
                  style={{
                    background:
                      'linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url("/el_teniente.jpg") center/cover no-repeat',
                  }}
                >
                  <div className="fsc-card-top">
                    <div className="fsc-card-badge">
                      <img src="/logo_codelco.webp" alt="Codelco" />
                      <span>CODELCO</span>
                    </div>
                    <span className="fsc-card-tag">SUCALC</span>
                  </div>
                  <div className="fsc-card-bottom">
                    <h3>El Teniente</h3>
                    <p>
                      Región de O'Higgins — la mina subterránea de cobre más
                      grande del mundo.
                    </p>
                  </div>
                </div>
                <div
                  className="fsc-card"
                  data-faena="fand"
                  style={{
                    background:
                      'linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url("/andina.jpg") center/cover no-repeat',
                  }}
                >
                  <div className="fsc-card-top">
                    <div className="fsc-card-badge">
                      <img src="/logo_codelco.webp" alt="Codelco" />
                      <span>CODELCO</span>
                    </div>
                    <span className="fsc-card-tag">SUCALC</span>
                  </div>
                  <div className="fsc-card-bottom">
                    <h3>Andina</h3>
                    <p>
                      Región de Valparaíso — una de las operaciones de cobre más
                      altas del mundo.
                    </p>
                  </div>
                </div>
                <div
                  className="fsc-card"
                  data-faena="feol"
                  style={{
                    background:
                      'linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url("/antofagastaI.jpg") center/cover no-repeat',
                  }}
                >
                  <div className="fsc-card-top">
                    <div className="fsc-card-badge">
                      <span>ENERGÍA RENOVABLE</span>
                    </div>
                    <span className="fsc-card-tag">INTEGRADA</span>
                  </div>
                  <div className="fsc-card-bottom">
                    <h3>Parque Eólico Antofagasta I</h3>
                    <p>
                      Región de Antofagasta — parque eólico en el desierto,
                      acreditación de personal en terreno.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            style={{
              textAlign: "center",
              color: "var(--gris)",
              fontSize: ".88rem",
              marginTop: 36,
              maxWidth: 680,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Estas 9 faenas están{" "}
            <strong style={{ color: "var(--azul)" }}>100% integradas</strong>{" "}
            (flujo y plataformas mapeados). Cualquier otra faena también puede
            sumarse: nuestra IA lee sus manuales y tú agregas los requisitos que
            falten.
          </p>
        </div>
      </section>
    </div>
  );
}
