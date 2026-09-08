"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingOrbit() {
  const router = useRouter();
  return (
    <>
      {/* ORBIT: ACREDITTIA + FAENAS INTEGRADAS */}
      <section className="orbit-sect">
        <div className="orbit-inner">
          <div className="orbit-text">
            <span
              data-i18n="orbit.label"
              className="sec-label"
              style={{ color: "#8BAAFF" } as any}
            >
              INTEGRACIÓN REAL
            </span>
            <h2 data-i18n="orbit.h2">
              Una sola plataforma,
              <br />
              conectada a toda industria.
            </h2>
            <p data-i18n="orbit.p">
              ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span> está
              integrado al 100% a las plataformas, procesos y formularios de las
              principales faenas mineras, energéticas, agrícolas y de
              construcción de Chile — con IA que entiende el flujo real de cada
              una.
            </p>
          </div>
          <div className="orbit-visual">
            <div className="orbit-glow" />
            <div className="orbit-center">
              <img
                src="/acredittia-mark.svg"
                alt=""
                style={{ width: 48, height: 44 } as any}
              />
            </div>
            <div className="orbit-ring">
              <div className="orbit-bubble" style={{ "--ang": "0deg" } as any}>
                <div className="orbit-bubble-counter">
                  <div
                    className="orbit-bubble-inner"
                    style={
                      { backgroundImage: 'url("/los_pelambres.jpeg")' } as any
                    }
                    title="Los Pelambres"
                  />
                  <span className="orbit-bubble-label">Los Pelambres</span>
                </div>
              </div>
              <div className="orbit-bubble" style={{ "--ang": "40deg" } as any}>
                <div className="orbit-bubble-counter">
                  <div
                    className="orbit-bubble-inner"
                    style={{ backgroundImage: 'url("/centinela.jpg")' } as any}
                    title="Centinela"
                  />
                  <span className="orbit-bubble-label">Centinela</span>
                </div>
              </div>
              <div className="orbit-bubble" style={{ "--ang": "80deg" } as any}>
                <div className="orbit-bubble-counter">
                  <div
                    className="orbit-bubble-inner"
                    style={{ backgroundImage: 'url("/antucoya.jpg")' } as any}
                    title="Antucoya"
                  />
                  <span className="orbit-bubble-label">Antucoya</span>
                </div>
              </div>
              <div
                className="orbit-bubble"
                style={{ "--ang": "120deg" } as any}
              >
                <div className="orbit-bubble-counter">
                  <div
                    className="orbit-bubble-inner"
                    style={{ backgroundImage: 'url("/zaldivar.png")' } as any}
                    title="Zaldívar"
                  />
                  <span className="orbit-bubble-label">Zaldívar</span>
                </div>
              </div>
              <div
                className="orbit-bubble"
                style={{ "--ang": "160deg" } as any}
              >
                <div className="orbit-bubble-counter">
                  <div
                    className="orbit-bubble-inner"
                    style={{ backgroundImage: 'url("/candelaria.jpg")' } as any}
                    title="Candelaria"
                  />
                  <span className="orbit-bubble-label">Candelaria</span>
                </div>
              </div>
              <div
                className="orbit-bubble"
                style={{ "--ang": "200deg" } as any}
              >
                <div className="orbit-bubble-counter">
                  <div
                    className="orbit-bubble-inner"
                    style={{ backgroundImage: 'url("/caserones.jpeg")' } as any}
                    title="Caserones"
                  />
                  <span className="orbit-bubble-label">Caserones</span>
                </div>
              </div>
              <div
                className="orbit-bubble"
                style={{ "--ang": "240deg" } as any}
              >
                <div className="orbit-bubble-counter">
                  <div
                    className="orbit-bubble-inner"
                    style={{ backgroundImage: 'url("/el_teniente.jpg")' } as any}
                    title="El Teniente"
                  />
                  <span className="orbit-bubble-label">El Teniente</span>
                </div>
              </div>
              <div
                className="orbit-bubble"
                style={{ "--ang": "280deg" } as any}
              >
                <div className="orbit-bubble-counter">
                  <div
                    className="orbit-bubble-inner"
                    style={{ backgroundImage: 'url("/andina.jpg")' } as any}
                    title="Andina"
                  />
                  <span className="orbit-bubble-label">Andina</span>
                </div>
              </div>
              <div
                className="orbit-bubble"
                style={{ "--ang": "320deg" } as any}
              >
                <div className="orbit-bubble-counter">
                  <div
                    className="orbit-bubble-inner"
                    style={
                      { backgroundImage: 'url("/antofagastaI.jpg")' } as any
                    }
                    title="Parque Eólico Antofagasta I"
                  />
                  <span className="orbit-bubble-label">
                    P. Eólico Antofagasta I
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
