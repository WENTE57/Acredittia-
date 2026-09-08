"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingHub() {
  const router = useRouter();
  return (
    <>
      {/* HUB & SPOKE: 3-RING ECOSYSTEM */}
      <section
        className="hs-sect-pad"
        style={
          {
            background: "linear-gradient(180deg,#fff 0%,#EEF2FF 50%,#fff 100%)",
            padding: "80px 6%",
            textAlign: "center",
            overflow: "hidden",
          } as any
        }
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" } as any}>
          <span data-i18n="hub.label" className="sec-label">
            ECOSISTEMA DE ACREDITACIÓN
          </span>
          <h2
            data-i18n="hub.h2"
            style={
              {
                fontSize: "2.2rem",
                fontWeight: 900,
                color: "var(--azul)",
                margin: "16px 0 12px",
              } as any
            }
          >
            ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span>: el
            centro que conecta
            <br />
            mandantes y plataformas
          </h2>
          <p
            data-i18n="hub.p"
            style={
              {
                color: "var(--gris)",
                fontSize: "1rem",
                maxWidth: 640,
                margin: "0 auto 52px",
              } as any
            }
          >
            Tu empresa acredita en las principales faenas de Chile. Cada faena
            usa su plataforma de acreditación. ACREDIT
            <span style={{ color: "#1D4ED8" } as any}>TIA</span> los conecta
            todos desde una sola pantalla.
          </p>
          <svg
            viewBox="0 0 800 800"
            className="hs-hub-svg"
            style={{ width: "min(700px,90vw)", overflow: "visible" } as any}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="hsCG" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#3D62F5" />
                <stop offset="100%" stopColor="#080E1C" />
              </radialGradient>
              <filter id="hsGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation={14} result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="hsSh" x="-25%" y="-25%" width="150%" height="150%">
                <feDropShadow
                  dx={0}
                  dy={3}
                  stdDeviation={8}
                  floodColor="rgba(0,0,0,.13)"
                />
              </filter>
            </defs>
            {/* ORBITAL RINGS */}
            <circle
              cx={400}
              cy={400}
              r={185}
              fill="none"
              stroke="rgba(61,98,245,.1)"
              strokeWidth={1}
              strokeDasharray="3 7"
            />
            <circle
              cx={400}
              cy={400}
              r={332}
              fill="none"
              stroke="rgba(61,98,245,.07)"
              strokeWidth={1}
              strokeDasharray="3 7"
            />
            {/* RING BADGE LABELS */}
            <rect
              x={295}
              y={148}
              width={210}
              height={24}
              rx={12}
              fill="rgba(61,98,245,.07)"
            />
            <text
              x={400}
              y={164}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={13}
              fontWeight={700}
              letterSpacing="1.5"
              fill="#64748B"
            >
              FAENAS MANDANTE
            </text>
            <rect
              x={266}
              y={40}
              width={268}
              height={24}
              rx={12}
              fill="rgba(61,98,245,.05)"
            />
            <text
              x={400}
              y={56}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={13}
              fontWeight={700}
              letterSpacing="1.5"
              fill="#94A3B8"
            >
              PLATAFORMAS DE ACREDITACIÓN
            </text>
            {/* ===== CENTER→INNER LINES ===== */}
            {/* →AMSA (green, NE) */}
            <line
              x1={455}
              y1={345}
              x2={498}
              y2={302}
              stroke="#16A34A"
              strokeWidth={2}
              strokeDasharray="5 4"
              strokeLinecap="round"
              opacity="0.55"
            >
              <animate
                attributeName="stroke-dashoffset"
                from={0}
                to={-90}
                dur="1.7s"
                repeatCount="indefinite"
              />
            </line>
            {/* →CODELCO (amber, SE) */}
            <line
              x1={455}
              y1={455}
              x2={498}
              y2={498}
              stroke="#F59E0B"
              strokeWidth={2}
              strokeDasharray="5 4"
              strokeLinecap="round"
              opacity="0.55"
            >
              <animate
                attributeName="stroke-dashoffset"
                from={0}
                to={-90}
                dur="2.1s"
                repeatCount="indefinite"
              />
            </line>
            {/* →ENERGÍA RENOVABLE (red, SW) */}
            <line
              x1={345}
              y1={455}
              x2={302}
              y2={498}
              stroke="#DC2626"
              strokeWidth={2}
              strokeDasharray="5 4"
              strokeLinecap="round"
              opacity="0.55"
            >
              <animate
                attributeName="stroke-dashoffset"
                from={0}
                to={-90}
                dur="1.9s"
                repeatCount="indefinite"
              />
            </line>
            {/* →LUNDIN MINING (purple, NW) */}
            <line
              x1={345}
              y1={345}
              x2={302}
              y2={302}
              stroke="#7C3AED"
              strokeWidth={2}
              strokeDasharray="5 4"
              strokeLinecap="round"
              opacity="0.55"
            >
              <animate
                attributeName="stroke-dashoffset"
                from={0}
                to={-90}
                dur="2.3s"
                repeatCount="indefinite"
              />
            </line>
            {/* ===== INNER→OUTER LINES ===== */}
            {/* AMSA→SIGA (green) */}
            <line
              x1={563}
              y1={237}
              x2={600}
              y2={200}
              stroke="#16A34A"
              strokeWidth="1.5"
              strokeDasharray="4 5"
              opacity="0.45"
            >
              <animate
                attributeName="stroke-dashoffset"
                from={0}
                to={-90}
                dur="2.5s"
                repeatCount="indefinite"
              />
            </line>
            {/* CODELCO→SUCAL (amber) */}
            <line
              x1={563}
              y1={563}
              x2={600}
              y2={600}
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeDasharray="4 5"
              opacity="0.45"
            >
              <animate
                attributeName="stroke-dashoffset"
                from={0}
                to={-90}
                dur="2.9s"
                repeatCount="indefinite"
              />
            </line>
            {/* ENERGÍA RENOVABLE→METACONTRATAS (red) */}
            <line
              x1={237}
              y1={563}
              x2={200}
              y2={600}
              stroke="#DC2626"
              strokeWidth="1.5"
              strokeDasharray="4 5"
              opacity="0.45"
            >
              <animate
                attributeName="stroke-dashoffset"
                from={0}
                to={-90}
                dur="3.1s"
                repeatCount="indefinite"
              />
            </line>
            {/* LUNDIN MINING→WEBCONTROL (purple) */}
            <line
              x1={237}
              y1={237}
              x2={200}
              y2={200}
              stroke="#7C3AED"
              strokeWidth="1.5"
              strokeDasharray="4 5"
              opacity="0.45"
            >
              <animate
                attributeName="stroke-dashoffset"
                from={0}
                to={-90}
                dur="2.6s"
                repeatCount="indefinite"
              />
            </line>
            {/* ===== TRAVELING DOTS: CENTER→INNER ===== */}
            <circle r={5} fill="#16A34A" opacity="0.9">
              <animateMotion
                dur="1.7s"
                repeatCount="indefinite"
                path="M455,345 L498,302"
              />
            </circle>
            <circle r={5} fill="#F59E0B" opacity="0.9">
              <animateMotion
                dur="2.1s"
                repeatCount="indefinite"
                begin="0.8s"
                path="M455,455 L498,498"
              />
            </circle>
            <circle r={5} fill="#DC2626" opacity="0.9">
              <animateMotion
                dur="1.9s"
                repeatCount="indefinite"
                begin="0.3s"
                path="M345,455 L302,498"
              />
            </circle>
            <circle r={5} fill="#7C3AED" opacity="0.9">
              <animateMotion
                dur="2.3s"
                repeatCount="indefinite"
                begin="1.2s"
                path="M345,345 L302,302"
              />
            </circle>
            {/* ===== TRAVELING DOTS: INNER→OUTER ===== */}
            <circle r={4} fill="#16A34A" opacity="0.85">
              <animateMotion
                dur="2.5s"
                repeatCount="indefinite"
                begin="0.4s"
                path="M563,237 L600,200"
              />
            </circle>
            <circle r={4} fill="#F59E0B" opacity="0.85">
              <animateMotion
                dur="2.9s"
                repeatCount="indefinite"
                begin="1.0s"
                path="M563,563 L600,600"
              />
            </circle>
            <circle r={4} fill="#DC2626" opacity="0.85">
              <animateMotion
                dur="3.1s"
                repeatCount="indefinite"
                begin="0.7s"
                path="M237,563 L200,600"
              />
            </circle>
            <circle r={4} fill="#7C3AED" opacity="0.85">
              <animateMotion
                dur="2.6s"
                repeatCount="indefinite"
                begin="0.9s"
                path="M237,237 L200,200"
              />
            </circle>
            {/* ===== CENTER: ACREDITTIA ===== */}
            <circle
              cx={400}
              cy={400}
              r={78}
              fill="url(#hsCG)"
              filter="url(#hsGlow)"
            />
            <circle
              cx={400}
              cy={400}
              r={78}
              fill="none"
              stroke="rgba(139,170,255,.25)"
              strokeWidth={2}
            />
            <polygon
              points="400,362 428,400 372,400"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <line
              x1={374}
              y1={400}
              x2={426}
              y2={400}
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <text
              x={400}
              y={418}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={14}
              fontWeight={900}
              letterSpacing="0.5"
              fill="white"
            >
              ACREDITTIA
            </text>
            <text
              x={400}
              y={432}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={11}
              letterSpacing="1.5"
              fill="rgba(255,255,255,.5)"
            >
              CENTRAL HUB
            </text>
            {/* ===== INNER RING: FAENAS MANDANTE (4 grupos reales, 9 faenas) ===== */}
            {/* AMSA — Los Pelambres, Centinela, Antucoya, Zaldívar (530.8,269.2) */}
            <circle
              cx="530.8"
              cy="269.2"
              r={46}
              fill="#ECFDF5"
              stroke="#16A34A"
              strokeWidth="2.5"
              filter="url(#hsSh)"
            />
            <image
              href="logo_amsa.png"
              x="507.8"
              y="248.2"
              width={46}
              height={24}
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x="530.8"
              y={290}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize="10.5"
              fontWeight={700}
              fill="#065F46"
            >
              4 faenas
            </text>
            {/* CODELCO — El Teniente, Andina (530.8,530.8) */}
            <circle
              cx="530.8"
              cy="530.8"
              r={46}
              fill="#FFFBEB"
              stroke="#F59E0B"
              strokeWidth="2.5"
              filter="url(#hsSh)"
            />
            <image
              href="logo_codelco.webp"
              x="503.8"
              y="509.8"
              width={54}
              height={24}
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x="530.8"
              y="551.6"
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize="10.5"
              fontWeight={700}
              fill="#78350F"
            >
              2 faenas
            </text>
            {/* REPSOL — Parque Eólico Antofagasta I (269.2,530.8) */}
            <circle
              cx="269.2"
              cy="530.8"
              r={46}
              fill="#FEF2F2"
              stroke="#DC2626"
              strokeWidth="2.5"
              filter="url(#hsSh)"
            />
            <image
              href="logo_repsol.svg"
              x="235.2"
              y="519.8"
              width={68}
              height={16}
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x="269.2"
              y="551.6"
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize="9.5"
              fontWeight={700}
              fill="#B91C1C"
            >
              1 faena
            </text>
            {/* LUNDIN MINING — Candelaria, Caserones (269.2,269.2) */}
            <circle
              cx="269.2"
              cy="269.2"
              r={46}
              fill="#F5F3FF"
              stroke="#7C3AED"
              strokeWidth="2.5"
              filter="url(#hsSh)"
            />
            <image
              href="logo_lundinmining_icon.png"
              x="254.2"
              y="248.2"
              width={30}
              height={24}
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x="269.2"
              y={290}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize="10.5"
              fontWeight={700}
              fill="#4C1D95"
            >
              2 faenas
            </text>
            {/* ===== OUTER RING: PLATAFORMAS (logos reales) ===== */}
            {/* SIGA (635,165) — AMSA */}
            <circle
              cx={635}
              cy={165}
              r={50}
              fill="white"
              stroke="#16A34A"
              strokeWidth="2.5"
              filter="url(#hsSh)"
            />
            <image
              href="plat_siga.png"
              x={608}
              y={142}
              width={54}
              height={30}
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x={635}
              y={188}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={11}
              fontWeight={800}
              fill="#15803D"
            >
              SIGA
            </text>
            {/* SUCAL (635,635) — Codelco */}
            <circle
              cx={635}
              cy={635}
              r={50}
              fill="white"
              stroke="#F59E0B"
              strokeWidth="2.5"
              filter="url(#hsSh)"
            />
            <image
              href="plat_sucal.png"
              x={608}
              y={612}
              width={54}
              height={30}
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x={635}
              y={658}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={11}
              fontWeight={800}
              fill="#B45309"
            >
              SUCAL
            </text>
            {/* METACONTRATAS (165,635) — Energía Renovable */}
            <circle
              cx={165}
              cy={635}
              r={50}
              fill="white"
              stroke="#DC2626"
              strokeWidth="2.5"
              filter="url(#hsSh)"
            />
            <image
              href="plat_metacontratas.png"
              x={135}
              y={613}
              width={60}
              height={26}
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x={165}
              y={658}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize="9.5"
              fontWeight={800}
              fill="#B91C1C"
            >
              METACONTRATAS
            </text>
            {/* WEBCONTROL (165,165) — Lundin Mining */}
            <circle
              cx={165}
              cy={165}
              r={50}
              fill="white"
              stroke="#7C3AED"
              strokeWidth="2.5"
              filter="url(#hsSh)"
            />
            <image
              href="plat_webcontrol.png"
              x={135}
              y={143}
              width={60}
              height={26}
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x={165}
              y={188}
              textAnchor="middle"
              fontFamily="system-ui,sans-serif"
              fontSize={10}
              fontWeight={800}
              fill="#6D28D9"
            >
              WEBCONTROL
            </text>
          </svg>
          {/* MOBILE FALLBACK: card-based layout shown only on small screens */}
          <div className="hs-hub-mobile">
            {/* Plataformas row */}
            <div
              style={
                {
                  display: "flex",
                  gap: 10,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginBottom: 16,
                } as any
              }
            >
              <div
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "white",
                    border: "2px solid #16A34A",
                    borderRadius: 12,
                    padding: "6px 12px",
                  } as any
                }
              >
                <img
                  src="/plat_siga.png"
                  alt="SIGA"
                  style={{ height: 20, width: "auto" } as any}
                />
                <span
                  style={
                    {
                      fontSize: ".78rem",
                      fontWeight: 800,
                      color: "#15803D",
                    } as any
                  }
                >
                  SIGA
                </span>
              </div>
              <div
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "white",
                    border: "2px solid #F59E0B",
                    borderRadius: 12,
                    padding: "6px 12px",
                  } as any
                }
              >
                <img
                  src="/plat_sucal.png"
                  alt="SUCAL"
                  style={{ height: 20, width: "auto" } as any}
                />
                <span
                  style={
                    {
                      fontSize: ".78rem",
                      fontWeight: 800,
                      color: "#B45309",
                    } as any
                  }
                >
                  SUCAL
                </span>
              </div>
              <div
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "white",
                    border: "2px solid #DC2626",
                    borderRadius: 12,
                    padding: "6px 12px",
                  } as any
                }
              >
                <img
                  src="/plat_metacontratas.png"
                  alt="METACONTRATAS"
                  style={{ height: 20, width: "auto" } as any}
                />
                <span
                  style={
                    {
                      fontSize: ".78rem",
                      fontWeight: 800,
                      color: "#B91C1C",
                    } as any
                  }
                >
                  METACONTRATAS
                </span>
              </div>
              <div
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "white",
                    border: "2px solid #7C3AED",
                    borderRadius: 12,
                    padding: "6px 12px",
                  } as any
                }
              >
                <img
                  src="/plat_webcontrol.png"
                  alt="WEBCONTROL"
                  style={{ height: 20, width: "auto" } as any}
                />
                <span
                  style={
                    {
                      fontSize: ".78rem",
                      fontWeight: 800,
                      color: "#6D28D9",
                    } as any
                  }
                >
                  WEBCONTROL
                </span>
              </div>
            </div>
            {/* Arrow */}
            <div
              style={
                {
                  fontSize: "1.4rem",
                  color: "#3D62F5",
                  opacity: ".5",
                  lineHeight: 1,
                  marginBottom: 8,
                } as any
              }
            >
              ↕
            </div>
            {/* Center badge */}
            <div
              style={
                {
                  background: "linear-gradient(135deg,#3D62F5,#080E1C)",
                  borderRadius: 20,
                  padding: "20px 32px",
                  textAlign: "center",
                  marginBottom: 8,
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    color: "white",
                    letterSpacing: ".05em",
                  } as any
                }
              >
                ACREDITTIA
              </div>
              <div
                style={
                  {
                    fontSize: ".72rem",
                    color: "rgba(255,255,255,.5)",
                    letterSpacing: ".1em",
                    marginTop: 3,
                  } as any
                }
              >
                CENTRAL HUB
              </div>
            </div>
            {/* Arrow */}
            <div
              style={
                {
                  fontSize: "1.4rem",
                  color: "#3D62F5",
                  opacity: ".5",
                  lineHeight: 1,
                  marginBottom: 8,
                } as any
              }
            >
              ↕
            </div>
            {/* Faenas row */}
            <div
              style={
                {
                  display: "flex",
                  gap: 8,
                  justifyContent: "center",
                  flexWrap: "wrap",
                } as any
              }
            >
              <div
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#ECFDF5",
                    border: "2px solid #16A34A",
                    borderRadius: 12,
                    padding: "6px 12px",
                  } as any
                }
              >
                <img
                  src="/logo_amsa.png"
                  alt="AMSA"
                  style={{ height: 16, width: "auto" } as any}
                />
                <span
                  style={
                    {
                      fontSize: ".72rem",
                      fontWeight: 800,
                      color: "#065F46",
                    } as any
                  }
                >
                  AMSA · 4 faenas
                </span>
              </div>
              <div
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#FFFBEB",
                    border: "2px solid #F59E0B",
                    borderRadius: 12,
                    padding: "6px 12px",
                  } as any
                }
              >
                <img
                  src="/logo_codelco.webp"
                  alt="Codelco"
                  style={{ height: 16, width: "auto" } as any}
                />
                <span
                  style={
                    {
                      fontSize: ".72rem",
                      fontWeight: 800,
                      color: "#78350F",
                    } as any
                  }
                >
                  CODELCO · 2 faenas
                </span>
              </div>
              <div
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#FEF2F2",
                    border: "2px solid #DC2626",
                    borderRadius: 12,
                    padding: "6px 12px",
                  } as any
                }
              >
                <img
                  src="/logo_repsol.svg"
                  alt="Repsol"
                  style={{ height: 14, width: "auto" } as any}
                />
                <span
                  style={
                    {
                      fontSize: ".72rem",
                      fontWeight: 800,
                      color: "#991B1B",
                    } as any
                  }
                >
                  REPSOL · 1 faena
                </span>
              </div>
              <div
                style={
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#F5F3FF",
                    border: "2px solid #7C3AED",
                    borderRadius: 12,
                    padding: "6px 12px",
                  } as any
                }
              >
                <img
                  src="/logo_lundinmining_icon.png"
                  alt="Lundin Mining"
                  style={{ height: 16, width: "auto" } as any}
                />
                <span
                  style={
                    {
                      fontSize: ".72rem",
                      fontWeight: 800,
                      color: "#4C1D95",
                    } as any
                  }
                >
                  LUNDIN MINING · 2 faenas
                </span>
              </div>
            </div>
          </div>
          {/* Legend */}
          <div
            style={
              {
                display: "flex",
                gap: 28,
                justifyContent: "center",
                marginTop: 44,
                flexWrap: "wrap",
              } as any
            }
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: 8 } as any}
            >
              <div
                style={
                  {
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#FFFBEB",
                    border: "2.5px solid #F59E0B",
                  } as any
                }
              />
              <span
                data-i18n="hub.leg1"
                style={
                  {
                    fontSize: ".82rem",
                    color: "var(--gris)",
                    fontWeight: 600,
                  } as any
                }
              >
                Faena / Mandante
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: 8 } as any}
            >
              <div
                style={
                  {
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "white",
                    border: "2.5px solid #3D62F5",
                  } as any
                }
              />
              <span
                data-i18n="hub.leg2"
                style={
                  {
                    fontSize: ".82rem",
                    color: "var(--gris)",
                    fontWeight: 600,
                  } as any
                }
              >
                Plataforma de Acreditación
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: 8 } as any}
            >
              <div
                style={
                  {
                    width: 26,
                    height: 2,
                    background: "linear-gradient(90deg,#3D62F5,#8BAAFF)",
                    borderRadius: 1,
                  } as any
                }
              />
              <span
                data-i18n="hub.leg3"
                style={
                  {
                    fontSize: ".82rem",
                    color: "var(--gris)",
                    fontWeight: 600,
                  } as any
                }
              >
                Flujo de datos en tiempo real
              </span>
            </div>
          </div>
          <p
            data-i18n="hub.ymas"
            style={
              {
                marginTop: 20,
                color: "var(--gris)",
                fontSize: ".88rem",
                maxWidth: 600,
                marginLeft: "auto",
                marginRight: "auto",
              } as any
            }
          >
            Y más por venir:{" "}
            <strong style={{ color: "var(--azul)" } as any}>
              BHP Escondida, Collahuasi, Los Bronces, Anglo American, Teck,
              Antapaccay
            </strong>{" "}
            y cualquier otra faena — todas conectables desde ACREDIT
            <span style={{ color: "#1D4ED8" } as any}>TIA</span>.
          </p>
        </div>
      </section>
    </>
  );
}
