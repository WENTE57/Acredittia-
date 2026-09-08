"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingMapa() {
  const router = useRouter();
  return (
    <>
      {/* ESCALABILIDAD GLOBAL: MAPA MUNDIAL */}
      <section
        className="hs-sect-pad"
        style={
          {
            background:
              "linear-gradient(135deg,#080E1C 0%,#0F172A 55%,#0B1830 100%)",
            padding: "80px 6%",
            position: "relative",
            overflow: "hidden",
          } as any
        }
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" } as any}>
          <div style={{ textAlign: "center", marginBottom: 8 } as any}>
            <span
              data-i18n="map.label"
              className="sec-label"
              style={{ color: "#8BAAFF" } as any}
            >
              ESCALABILIDAD GLOBAL
            </span>
            <h2
              data-i18n="map.h2"
              style={
                {
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "#F1F5F9",
                  margin: "12px 0 16px",
                } as any
              }
            >
              De Chile a cualquier faena del mundo.
            </h2>
            <p
              data-i18n="map.p"
              style={
                {
                  color: "#94A3B8",
                  maxWidth: 680,
                  margin: "0 auto",
                  fontSize: "1rem",
                } as any
              }
            >
              El mismo motor de integración y de IA que hoy conecta 9 faenas en
              Chile se puede mapear a la plataforma de acreditación de cualquier
              mandante, en cualquier país. Escalar a una faena nueva es un
              proceso de semanas, no de años — ACREDIT
              <span style={{ color: "#1D4ED8" } as any}>TIA</span> es 100%
              escalable a nivel global.
            </p>
          </div>
          <div
            style={
              {
                position: "relative",
                maxWidth: 960,
                margin: "44px auto 0",
                aspectRatio: "2/1",
                minHeight: 260,
              } as any
            }
          >
            {/* mapa mundial base (equirectangular, alineado con el math de pines) */}
            <img
              src="/Equirectangular_projection_SW.jpg"
              alt=""
              style={
                {
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  opacity: ".22",
                  filter:
                    "invert(1) grayscale(1) brightness(1.6) contrast(1.2)",
                  mixBlendMode: "screen",
                  pointerEvents: "none",
                } as any
              }
              onError={() => {}}
            />
            {/* continentes: manchas difuminadas decorativas */}
            <div
              style={
                {
                  position: "absolute",
                  left: "14%",
                  top: "38%",
                  width: 130,
                  height: 220,
                  background: "#3D62F5",
                  opacity: ".10",
                  borderRadius: "50%",
                  filter: "blur(50px)",
                } as any
              }
            />
            <div
              style={
                {
                  position: "absolute",
                  left: "12%",
                  top: "8%",
                  width: 180,
                  height: 150,
                  background: "#8BAAFF",
                  opacity: ".08",
                  borderRadius: "50%",
                  filter: "blur(55px)",
                } as any
              }
            />
            <div
              style={
                {
                  position: "absolute",
                  left: "44%",
                  top: "4%",
                  width: 120,
                  height: 110,
                  background: "#8BAAFF",
                  opacity: ".08",
                  borderRadius: "50%",
                  filter: "blur(45px)",
                } as any
              }
            />
            <div
              style={
                {
                  position: "absolute",
                  left: "48%",
                  top: "34%",
                  width: 140,
                  height: 180,
                  background: "#3D62F5",
                  opacity: ".08",
                  borderRadius: "50%",
                  filter: "blur(55px)",
                } as any
              }
            />
            <div
              style={
                {
                  position: "absolute",
                  left: "62%",
                  top: "2%",
                  width: 260,
                  height: 200,
                  background: "#8BAAFF",
                  opacity: ".07",
                  borderRadius: "50%",
                  filter: "blur(60px)",
                } as any
              }
            />
            <div
              style={
                {
                  position: "absolute",
                  left: "82%",
                  top: "40%",
                  width: 110,
                  height: 90,
                  background: "#8BAAFF",
                  opacity: ".09",
                  borderRadius: "50%",
                  filter: "blur(45px)",
                } as any
              }
            />
            <svg
              viewBox="0 0 1000 500"
              style={
                {
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  overflow: "visible",
                } as any
              }
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* arcos: Chile → destinos */}
              <path
                d="M304,316 Q285,230 292,276"
                fill="none"
                stroke="#3D62F5"
                strokeWidth="1.6"
                strokeDasharray="4 5"
                strokeLinecap="round"
                opacity=".55"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={0}
                  to={-60}
                  dur="1.9s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M304,316 Q330,300 323,357"
                fill="none"
                stroke="#3D62F5"
                strokeWidth="1.6"
                strokeDasharray="4 5"
                strokeLinecap="round"
                opacity=".55"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={0}
                  to={-60}
                  dur="2.1s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M304,316 Q230,180 215,184"
                fill="none"
                stroke="#8BAAFF"
                strokeWidth="1.6"
                strokeDasharray="4 5"
                strokeLinecap="round"
                opacity=".5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={0}
                  to={-70}
                  dur="2.3s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M304,316 Q220,150 234,147"
                fill="none"
                stroke="#8BAAFF"
                strokeWidth="1.6"
                strokeDasharray="4 5"
                strokeLinecap="round"
                opacity=".5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={0}
                  to={-70}
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M304,316 Q588,140 872,320"
                fill="none"
                stroke="#8BAAFF"
                strokeWidth="1.6"
                strokeDasharray="4 5"
                strokeLinecap="round"
                opacity=".45"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={0}
                  to={-90}
                  dur="3.1s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M304,316 Q400,70 490,138"
                fill="none"
                stroke="#8BAAFF"
                strokeWidth="1.6"
                strokeDasharray="4 5"
                strokeLinecap="round"
                opacity=".5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={0}
                  to={-80}
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </path>
              {/* puntos viajando por cada arco */}
              <circle r="3.5" fill="#3D62F5" opacity="0.9">
                <animateMotion
                  dur="1.9s"
                  repeatCount="indefinite"
                  path="M304,316 Q285,230 292,276"
                />
              </circle>
              <circle r="3.5" fill="#3D62F5" opacity="0.9">
                <animateMotion
                  dur="2.1s"
                  repeatCount="indefinite"
                  begin=".4s"
                  path="M304,316 Q330,300 323,357"
                />
              </circle>
              <circle r="3.5" fill="#8BAAFF" opacity="0.85">
                <animateMotion
                  dur="2.3s"
                  repeatCount="indefinite"
                  begin=".7s"
                  path="M304,316 Q230,180 215,184"
                />
              </circle>
              <circle r="3.5" fill="#8BAAFF" opacity="0.85">
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  begin="1.1s"
                  path="M304,316 Q220,150 234,147"
                />
              </circle>
              <circle r="3.5" fill="#8BAAFF" opacity="0.8">
                <animateMotion
                  dur="3.1s"
                  repeatCount="indefinite"
                  begin="1.4s"
                  path="M304,316 Q588,140 872,320"
                />
              </circle>
              <circle r="3.5" fill="#8BAAFF" opacity="0.85">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin=".9s"
                  path="M304,316 Q400,70 490,138"
                />
              </circle>
              {/* pin HUB: Chile */}
              <circle
                cx={304}
                cy={316}
                r={10}
                fill="none"
                stroke="#3D62F5"
                strokeWidth={2}
              >
                <animate
                  attributeName="r"
                  values="8;22;8"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values=".6;0;.6"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={304}
                cy={316}
                r={7}
                fill="#3D62F5"
                stroke="#fff"
                strokeWidth={2}
              />
              {/* pines de expansión (destino) */}
              <circle
                cx={292}
                cy={276}
                r={5}
                fill="#0F172A"
                stroke="#8BAAFF"
                strokeWidth={2}
              />
              <circle
                cx={323}
                cy={357}
                r={5}
                fill="#0F172A"
                stroke="#8BAAFF"
                strokeWidth={2}
              />
              <circle
                cx={215}
                cy={184}
                r={5}
                fill="#0F172A"
                stroke="#8BAAFF"
                strokeWidth={2}
              />
              <circle
                cx={234}
                cy={147}
                r={5}
                fill="#0F172A"
                stroke="#8BAAFF"
                strokeWidth={2}
              />
              <circle
                cx={872}
                cy={320}
                r={5}
                fill="#0F172A"
                stroke="#8BAAFF"
                strokeWidth={2}
              />
              <circle
                cx={490}
                cy={138}
                r={5}
                fill="#0F172A"
                stroke="#8BAAFF"
                strokeWidth={2}
              />
            </svg>
            {/* etiquetas HTML posicionadas sobre el mapa */}
            <div
              className="map-label"
              style={
                {
                  position: "absolute",
                  left: "30.4%",
                  top: "63.2%",
                  transform: "translate(-50%,-165%)",
                  zIndex: 2,
                } as any
              }
            >
              <span
                style={
                  {
                    background: "#3D62F5",
                    color: "#fff",
                    fontSize: ".68rem",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 14px rgba(61,98,245,.5)",
                  } as any
                }
              >
                🇨🇱 <span data-i18n="map.chile">Chile — 9 faenas activas</span>
              </span>
            </div>
            <div
              className="map-label"
              style={
                {
                  position: "absolute",
                  left: "29.2%",
                  top: "55.2%",
                  transform: "translate(-108%,-45%)",
                  zIndex: 2,
                } as any
              }
            >
              <span
                style={
                  {
                    background: "rgba(255,255,255,.08)",
                    border: "1px solid rgba(139,170,255,.3)",
                    color: "#CBD5E1",
                    fontSize: ".64rem",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  } as any
                }
              >
                🇵🇪 <span data-i18n="map.peru">Perú</span>
              </span>
            </div>
            <div
              className="map-label"
              style={
                {
                  position: "absolute",
                  left: "32.3%",
                  top: "71.4%",
                  transform: "translate(-50%,25%)",
                  zIndex: 2,
                } as any
              }
            >
              <span
                style={
                  {
                    background: "rgba(255,255,255,.08)",
                    border: "1px solid rgba(139,170,255,.3)",
                    color: "#CBD5E1",
                    fontSize: ".64rem",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  } as any
                }
              >
                🇦🇷 <span data-i18n="map.arg">Argentina</span>
              </span>
            </div>
            <div
              className="map-label"
              style={
                {
                  position: "absolute",
                  left: "21.5%",
                  top: "36.8%",
                  transform: "translate(-112%,-50%)",
                  zIndex: 2,
                } as any
              }
            >
              <span
                style={
                  {
                    background: "rgba(255,255,255,.08)",
                    border: "1px solid rgba(139,170,255,.3)",
                    color: "#CBD5E1",
                    fontSize: ".64rem",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  } as any
                }
              >
                🇲🇽 <span data-i18n="map.mex">México</span>
              </span>
            </div>
            <div
              className="map-label"
              style={
                {
                  position: "absolute",
                  left: "23.4%",
                  top: "29.4%",
                  transform: "translate(-50%,-160%)",
                  zIndex: 2,
                } as any
              }
            >
              <span
                style={
                  {
                    background: "rgba(255,255,255,.08)",
                    border: "1px solid rgba(139,170,255,.3)",
                    color: "#CBD5E1",
                    fontSize: ".64rem",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  } as any
                }
              >
                🇺🇸 <span data-i18n="map.usa">Estados Unidos</span>
              </span>
            </div>
            <div
              className="map-label"
              style={
                {
                  position: "absolute",
                  left: "87.2%",
                  top: "64%",
                  transform: "translate(-30%,25%)",
                  zIndex: 2,
                } as any
              }
            >
              <span
                style={
                  {
                    background: "rgba(255,255,255,.08)",
                    border: "1px solid rgba(139,170,255,.3)",
                    color: "#CBD5E1",
                    fontSize: ".64rem",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  } as any
                }
              >
                🇦🇺 <span data-i18n="map.aus">Australia</span>
              </span>
            </div>
            <div
              className="map-label"
              style={
                {
                  position: "absolute",
                  left: "49%",
                  top: "27.6%",
                  transform: "translate(-50%,-160%)",
                  zIndex: 2,
                } as any
              }
            >
              <span
                style={
                  {
                    background: "rgba(255,255,255,.08)",
                    border: "1px solid rgba(139,170,255,.3)",
                    color: "#CBD5E1",
                    fontSize: ".64rem",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  } as any
                }
              >
                🇪🇸 <span data-i18n="map.esp">España</span>
              </span>
            </div>
          </div>
          {/* leyenda */}
          <div
            style={
              {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 22,
                marginTop: 20,
                flexWrap: "wrap",
              } as any
            }
          >
            <div
              style={
                {
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: ".78rem",
                  color: "#94A3B8",
                } as any
              }
            >
              <span
                style={
                  {
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: "#3D62F5",
                    display: "inline-block",
                  } as any
                }
              />
              <span data-i18n="map.leg1">Operando hoy</span>
            </div>
            <div
              style={
                {
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: ".78rem",
                  color: "#94A3B8",
                } as any
              }
            >
              <span
                style={
                  {
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: "#0F172A",
                    border: "2px solid #8BAAFF",
                    display: "inline-block",
                  } as any
                }
              />
              <span data-i18n="map.leg2">Listo para integrar en semanas</span>
            </div>
          </div>
          {/* stats de escalabilidad */}
          <div
            style={
              {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: 20,
                maxWidth: 820,
                margin: "40px auto 0",
              } as any
            }
          >
            <div
              style={
                {
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 16,
                  padding: "22px 16px",
                  textAlign: "center",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.8rem",
                    fontWeight: 900,
                    color: "#F1F5F9",
                    fontFamily: "var(--display)",
                  } as any
                }
              >
                9
              </div>
              <div
                data-i18n="map.s1"
                style={
                  { fontSize: ".8rem", color: "#94A3B8", marginTop: 4 } as any
                }
              >
                Faenas activas hoy, en Chile
              </div>
            </div>
            <div
              style={
                {
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 16,
                  padding: "22px 16px",
                  textAlign: "center",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.8rem",
                    fontWeight: 900,
                    color: "#F1F5F9",
                    fontFamily: "var(--display)",
                  } as any
                }
              >
                100%
              </div>
              <div
                data-i18n="map.s2"
                style={
                  { fontSize: ".8rem", color: "#94A3B8", marginTop: 4 } as any
                }
              >
                Del modelo es replicable a cualquier país
              </div>
            </div>
            <div
              style={
                {
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 16,
                  padding: "22px 16px",
                  textAlign: "center",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.8rem",
                    fontWeight: 900,
                    color: "#F1F5F9",
                    fontFamily: "var(--display)",
                  } as any
                }
                data-i18n="map.s3n"
              >
                Semanas
              </div>
              <div
                data-i18n="map.s3"
                style={
                  { fontSize: ".8rem", color: "#94A3B8", marginTop: 4 } as any
                }
              >
                Para integrar una faena nueva — no meses
              </div>
            </div>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @media(max-width:640px){ .map-label{display:none} }\n  ",
        }}
      />
    </>
  );
}
