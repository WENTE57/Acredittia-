"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingHero() {
  const router = useRouter();
  return (
    <>
      {/* HERO FULL WIDTH CENTRADO */}
      <header className="hero-full">
        {/* BACKGROUND SLIDESHOW */}
        <div className="hero-bg-wrap">
          <div
            className="hero-bg-img active"
            id="hbg0"
            style={
              {
                backgroundImage:
                  'url("foto1.jpeg"),linear-gradient(135deg,#0F172A,#1E3A8A)',
              } as any
            }
          />
          <div
            className="hero-bg-img"
            id="hbg1"
            style={
              {
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1452179535021-368bb0edc3a8?auto=format&fit=crop&w=1600&q=80"),linear-gradient(135deg,#0F172A,#10291A)',
              } as any
            }
          />
          <div
            className="hero-bg-img"
            id="hbg2"
            style={
              {
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1502637098811-fa9526d2b659?auto=format&fit=crop&w=1600&q=80"),linear-gradient(135deg,#0F172A,#1a2a0A)',
              } as any
            }
          />
          <div
            className="hero-bg-img"
            id="hbg3"
            style={
              {
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80"),linear-gradient(135deg,#0F172A,#2a1f0A)',
              } as any
            }
          />
          <div
            className="hero-bg-img"
            id="hbg4"
            style={
              {
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1745436058216-7db617e7fb39?auto=format&fit=crop&w=1600&q=80"),linear-gradient(135deg,#0F172A,#0A1E2A)',
              } as any
            }
          />
          <div
            className="hero-bg-img"
            id="hbg5"
            style={
              {
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"),linear-gradient(135deg,#0F172A,#1E2A3A)',
              } as any
            }
          />
        </div>
        <div className="hero-full-overlay" />
        <div className="hero-sector-tag" id="heroBgLabel">
          ⛏️ Gran Minería
        </div>
        <div className="hero-bg-label">
          <div className="hero-bg-dot on" id="hbd0" onClick={() => {}} />
          <div className="hero-bg-dot" id="hbd1" onClick={() => {}} />
          <div className="hero-bg-dot" id="hbd2" onClick={() => {}} />
          <div className="hero-bg-dot" id="hbd3" onClick={() => {}} />
          <div className="hero-bg-dot" id="hbd4" onClick={() => {}} />
          <div className="hero-bg-dot" id="hbd5" onClick={() => {}} />
        </div>
        <span className="hero-tag2" data-i18n="hero.tag">
          ⛏️ AGENTES IA · TODAS TUS PLATAFORMAS · MINERÍA CHILE
        </span>
        <h1 data-i18n="hero.h1">
          TU ACREDITACIÓN,
          <br />
          <span className="hl">EN UN SOLO LUGAR</span>
        </h1>
        <p className="hdesc" data-i18n="hero.desc">
          Monitorea todas tus acreditaciones —sin importar la plataforma del
          mandante— desde un mismo panel. Nuestros{" "}
          <b style={{ color: "#25D366" } as any}>Agentes IA</b> hacen el
          seguimiento por WhatsApp y llamada con cada trabajador, para que tu
          equipo deje de perseguir documentos.
        </p>
        <div className="hero-search" id="heroSearch">
          <div className="hs-field">
            <label data-i18n="hero.lbl1">¿Dónde quieres acreditar?</label>
            <select id="hs-faena" onChange={() => {}}>
              <option value="" data-i18n="hero.selfaena">
                Selecciona la faena o proyecto
              </option>
              <option
                data-i18n="hero.grp.mineria"
                disabled
                style={{ color: "#94A3B8", fontWeight: 700 } as any}
              >
                ── GRAN MINERÍA ──
              </option>
              <option value="Minera Centinela (Antofagasta Minerals)">
                Minera Centinela (Antofagasta Minerals)
              </option>
              <option value="Minera Escondida (BHP)">
                Minera Escondida (BHP)
              </option>
              <option value="Doña Inés de Collahuasi">
                Doña Inés de Collahuasi
              </option>
              <option value="Los Pelambres (Antofagasta Minerals)">
                Los Pelambres (Antofagasta Minerals)
              </option>
              <option value="El Teniente (Codelco)">
                El Teniente (Codelco)
              </option>
              <option value="Chuquicamata (Codelco)">
                Chuquicamata (Codelco)
              </option>
              <option value="Radomiro Tomic (Codelco)">
                Radomiro Tomic (Codelco)
              </option>
              <option value="Ministro Hales (Codelco)">
                Ministro Hales (Codelco)
              </option>
              <option value="Gabriela Mistral (Codelco)">
                Gabriela Mistral (Codelco)
              </option>
              <option value="Andina (Codelco)">Andina (Codelco)</option>
              <option value="Salvador (Codelco)">Salvador (Codelco)</option>
              <option value="Los Bronces (Anglo American)">
                Los Bronces (Anglo American)
              </option>
              <option value="El Soldado (Anglo American)">
                El Soldado (Anglo American)
              </option>
              <option value="Minera Candelaria (Lundin Mining)">
                Minera Candelaria (Lundin Mining)
              </option>
              <option value="Minera Spence (BHP)">Minera Spence (BHP)</option>
              <option value="Quebrada Blanca (Teck)">
                Quebrada Blanca (Teck)
              </option>
              <option value="Caserones (Lundin Mining)">
                Caserones (Lundin Mining)
              </option>
              <option value="El Abra (Freeport-McMoRan)">
                El Abra (Freeport-McMoRan)
              </option>
              <option value="Zaldívar (Antofagasta Minerals)">
                Zaldívar (Antofagasta Minerals)
              </option>
              <option value="Mantoverde (Capstone Copper)">
                Mantoverde (Capstone Copper)
              </option>
              <option value="Mantos Blancos (Capstone Copper)">
                Mantos Blancos (Capstone Copper)
              </option>
              <option value="Sierra Gorda SCM">Sierra Gorda SCM</option>
              <option value="Lomas Bayas (Glencore)">
                Lomas Bayas (Glencore)
              </option>
              <option value="Cerro Colorado (BHP)">Cerro Colorado (BHP)</option>
              <option value="Carmen de Andacollo (Teck)">
                Carmen de Andacollo (Teck)
              </option>
              <option value="Antucoya (Antofagasta Minerals)">
                Antucoya (Antofagasta Minerals)
              </option>
              <option value="Minera Florida (Gold Fields)">
                Minera Florida (Gold Fields)
              </option>
              <option value="El Peñón (Pan American Silver)">
                El Peñón (Pan American Silver)
              </option>
              <option value="Pucobre">Pucobre</option>
              <option value="Salares Norte (Gold Fields)">
                Salares Norte (Gold Fields)
              </option>
              <option value="Las Cenizas">Las Cenizas</option>
              <option value="Quebrada Blanca Fase 2 (Teck)">
                Quebrada Blanca Fase 2 (Teck)
              </option>
              <option value="Norte Abierto (Codelco-Newmont)">
                Norte Abierto (Codelco-Newmont)
              </option>
              <option
                data-i18n="hero.grp.eolica"
                disabled
                style={{ color: "#94A3B8", fontWeight: 700 } as any}
              >
                ── ENERGÍA EÓLICA ──
              </option>
              <option value="Parque Eólico Nordex">Parque Eólico Nordex</option>
              <option value="Parque Eólico Punta Sierra">
                Parque Eólico Punta Sierra
              </option>
              <option value="Parque Eólico Los Cururos (Mainstream)">
                Parque Eólico Los Cururos (Mainstream)
              </option>
              <option value="Parque Eólico Sarco (Acciona)">
                Parque Eólico Sarco (Acciona)
              </option>
              <option value="Parque Eólico Totoral">
                Parque Eólico Totoral
              </option>
              <option value="Parque Eólico Canela">Parque Eólico Canela</option>
              <option value="Parque Eólico Monte Redondo">
                Parque Eólico Monte Redondo
              </option>
              <option value="Parque Eólico Talinay">
                Parque Eólico Talinay
              </option>
              <option value="Parque Eólico Valle de los Vientos (Enel)">
                Parque Eólico Valle de los Vientos (Enel)
              </option>
              <option value="Parque Eólico Aurora">Parque Eólico Aurora</option>
              <option value="Parque Eólico Taltal">Parque Eólico Taltal</option>
              <option value="Parque Eólico San Juan (Mainstream)">
                Parque Eólico San Juan (Mainstream)
              </option>
              <option value="Parque Eólico Cabo Negro">
                Parque Eólico Cabo Negro
              </option>
              <option
                data-i18n="hero.grp.solar"
                disabled
                style={{ color: "#94A3B8", fontWeight: 700 } as any}
              >
                ── ENERGÍA SOLAR ──
              </option>
              <option value="Planta Solar Quilapayún (EDF)">
                Planta Solar Quilapayún (EDF)
              </option>
              <option value="Planta Solar El Romero (Acciona)">
                Planta Solar El Romero (Acciona)
              </option>
              <option value="Planta Solar Luz del Norte (First Solar)">
                Planta Solar Luz del Norte (First Solar)
              </option>
              <option value="Planta Solar Javiera">Planta Solar Javiera</option>
              <option value="Planta Solar Diego de Almagro">
                Planta Solar Diego de Almagro
              </option>
              <option value="Planta Solar Pampa Elvira">
                Planta Solar Pampa Elvira
              </option>
              <option value="Planta Solar Capricornio (Enel)">
                Planta Solar Capricornio (Enel)
              </option>
              <option value="Planta Solar Amanecer">
                Planta Solar Amanecer
              </option>
              <option value="Planta Solar Granja Solar Atacama">
                Planta Solar Granja Solar Atacama
              </option>
              <option value="Planta Solar Los Loros">
                Planta Solar Los Loros
              </option>
              <option
                data-i18n="hero.grp.agro"
                disabled
                style={{ color: "#94A3B8", fontWeight: 700 } as any}
              >
                ── AGROPECUARIO ──
              </option>
              <option value="Agrícola Ariztía">Agrícola Ariztía</option>
              <option value="Planta Agrosuper Rancagua">
                Planta Agrosuper Rancagua
              </option>
              <option value="Exportadora Rio Blanco">
                Exportadora Rio Blanco
              </option>
              <option value="Fundo Santa Cruz (Concha y Toro)">
                Fundo Santa Cruz (Concha y Toro)
              </option>
              <option value="Viña Santa Rita — Alto Jahuel">
                Viña Santa Rita — Alto Jahuel
              </option>
              <option value="Complejo Agroindustrial Watts">
                Complejo Agroindustrial Watts
              </option>
              <option value="Agrícola La Rosa">Agrícola La Rosa</option>
              <option
                data-i18n="hero.grp.salmon"
                disabled
                style={{ color: "#94A3B8", fontWeight: 700 } as any}
              >
                ── SALMONICULTURA ──
              </option>
              <option value="AquaChile — Aysén">AquaChile — Aysén</option>
              <option value="Salmones Camanchaca — Los Lagos">
                Salmones Camanchaca — Los Lagos
              </option>
              <option value="Multiexport Foods — Chiloé">
                Multiexport Foods — Chiloé
              </option>
              <option value="Cermaq Chile — Magallanes">
                Cermaq Chile — Magallanes
              </option>
              <option value="Salmones Austral — Puerto Montt">
                Salmones Austral — Puerto Montt
              </option>
              <option value="Nova Austral — Tierra del Fuego">
                Nova Austral — Tierra del Fuego
              </option>
              <option value="Blumar Salmones — Corral">
                Blumar Salmones — Corral
              </option>
              <option
                data-i18n="hero.grp.constr"
                disabled
                style={{ color: "#94A3B8", fontWeight: 700 } as any}
              >
                ── CONSTRUCCIÓN ──
              </option>
              <option value="Echeverría Izquierdo — Obra Santiago">
                Echeverría Izquierdo — Obra Santiago
              </option>
              <option value="Besalco — Proyecto Vial">
                Besalco — Proyecto Vial
              </option>
              <option value="Claro Vicuña Valenzuela (CVV)">
                Claro Vicuña Valenzuela (CVV)
              </option>
              <option value="Salfa Corp — Edificación">
                Salfa Corp — Edificación
              </option>
              <option value="Ingevec — Obra Industrial">
                Ingevec — Obra Industrial
              </option>
              <option value="Icafal — Infraestructura">
                Icafal — Infraestructura
              </option>
              <option
                data-i18n="hero.grp.otro"
                disabled
                style={{ color: "#94A3B8", fontWeight: 700 } as any}
              >
                ── OTRO ──
              </option>
              <option
                data-i18n="hero.grp.otroval"
                value="Otro proyecto / faena"
              >
                Otro proyecto / faena
              </option>
            </select>
          </div>
          <div className="hs-sep" />
          <div className="hs-field">
            <label data-i18n="hero.lbl2">¿Qué quieres acreditar?</label>
            <select id="hs-tipo" onChange={() => {}}>
              <option value="" data-i18n="hero.tipo0">
                Personas o Equipos
              </option>
              <option value="personal" data-i18n="hero.tipo1">
                👷 Personas
              </option>
              <option value="equipo" data-i18n="hero.tipo2">
                🚛 Equipos
              </option>
              <option value="empresa" data-i18n="hero.tipo3">
                🏢 Empresa (documentos)
              </option>
              <option value="todo" data-i18n="hero.tipo4">
                📋 Todo (empresa + personas + equipos)
              </option>
            </select>
          </div>
          <div className="hs-sep hs-tipo" id="hs-sep2" />
          <div className="hs-field hs-tipo" id="hs-equipo-field">
            <label data-i18n="hero.lbl3">¿Qué tipo de equipo?</label>
            <select id="hs-equipo-tipo">
              <option value="">Selecciona tipo de vehículo</option>
              <option value="Tracto-Camión">Tracto-Camión</option>
              <option value="Camión">Camión</option>
              <option value="Camión Pluma">Camión Pluma</option>
              <option value="Camión Aljibe">Camión Aljibe</option>
              <option value="Cama Baja">Cama Baja</option>
              <option value="Semirremolque">Semirremolque</option>
              <option value="Rampla Plana">Rampla Plana</option>
              <option value="Camioneta">Camioneta</option>
              <option value="JEEP">JEEP</option>
              <option value="Bus">Bus</option>
              <option value="MINIBUS">MINIBUS</option>
              <option value="Furgón">Furgón</option>
              <option value="Automóvil">Automóvil</option>
              <option value="Alzahombre">Alzahombre</option>
              <option value="Grúa">Grúa</option>
              <option value="Grúa Horquilla">Grúa Horquilla</option>
              <option value="Retroexcavadora">Retroexcavadora</option>
              <option value="Motoniveladora">Motoniveladora</option>
              <option value="Equipo de levante">Equipo de levante</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <button className="hs-btn" data-i18n="hero.btn" onClick={() => {}}>
            Empezar →
          </button>
        </div>
        <div className="hero-stats-row">
          <div className="hstat2">
            <b id="s-faenas">9</b>
            <span data-i18n="hero.stat1">Faenas integradas actualmente</span>
          </div>
          <div className="hstat2">
            <b>100%</b>
            <span data-i18n="hero.stat2">
              Visibilidad de tus acreditaciones activas
            </span>
          </div>
          <div className="hstat2">
            <b>-80%</b>
            <span data-i18n="hero.stat3">
              Reducción del equipo de acreditación
            </span>
          </div>
          <div className="hstat2">
            <b>24/7</b>
            <span data-i18n="hero.stat4">
              Monitoreo automático de vencimientos
            </span>
          </div>
        </div>
        <div className="hero-ai-intro">
          <div className="hero-ai-bubble">
            <div className="nm">
              <span className="dot" />
              <span data-i18n="hero.sofianame">Sofía · Asistente IA</span>
            </div>
            <div className="tx" data-i18n="hero.sofiatxt">
              ¡Hola! 👋 Soy Sofía. Te enseño a acreditar paso a paso en
              cualquier faena integrada.
            </div>
          </div>
          <div className="hero-ai-avatar">
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
              <rect x={19} y={26} width={62} height={6} rx={3} fill="#e0b27c" />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}
