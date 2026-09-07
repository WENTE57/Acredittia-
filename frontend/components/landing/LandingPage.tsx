
"use client";
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    // Attach click handlers to any button or link that wants to enter the app
    const btns = ref.current.querySelectorAll('.btn-ghost, .btn-primary');
    btns.forEach(btn => {
      if (btn.textContent?.toLowerCase().includes('iniciar sesión') || 
          btn.textContent?.toLowerCase().includes('empezar')) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          router.push('/login');
        });
      }
    });

    // Also the 'solicitar acceso' button
    const links = ref.current.querySelectorAll('button');
    links.forEach(btn => {
        if (btn.textContent?.toLowerCase().includes('solicitar acceso')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                router.push('/login');
            });
        }
    });

  }, [router]);

  return (
    <div 
      ref={ref}
      dangerouslySetInnerHTML={{ __html: `<div id="landing">

  <!-- NAV -->
  <nav class="nav">
    <div class="logo">
      <svg class="mark" style="width:28px;height:26px;flex-shrink:0" viewBox="0 0 100 92" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="lg-nav1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6B8FFF"/><stop offset=".5" stop-color="#3D62F5"/><stop offset="1" stop-color="#2448E0"/></linearGradient><linearGradient id="lg-nav2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8BAAFF"/><stop offset="1" stop-color="#3D62F5"/></linearGradient></defs><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="url(#lg-nav1)"/><path d="M50 6 L66 36 L50 44 Z" fill="url(#lg-nav2)"/><path d="M50 6 L92 80 L80 80 L50 24 Z" fill="#1E293B" opacity=".22"/></svg>
      <span class="wm">ACREDIT<span class="cyan">TIA</span></span>
    </div>
    <div class="nav-links">
      <a onclick="document.getElementById('como-funciona').scrollIntoView({behavior:'smooth'})">Cómo Funciona</a>
      <a onclick="document.getElementById('plataformas').scrollIntoView({behavior:'smooth'})">Plataformas</a>
      <a onclick="document.getElementById('sectores').scrollIntoView({behavior:'smooth'})">Sectores</a>
      <a onclick="document.getElementById('plataforma').scrollIntoView({behavior:'smooth'})">La Plataforma</a>
    </div>
    <div class="nav-ctas">
      <button class="btn btn-ghost" onclick="enterApp()">Iniciar sesión</button>
      <button class="btn btn-primary" onclick="enterApp()">Empezar gratis →</button>
    </div>
  </nav>

  <!-- HERO FULL WIDTH CENTRADO -->
  <header class="hero-full">
  <!-- BACKGROUND SLIDESHOW -->
  <div class="hero-bg-wrap">
    <div class="hero-bg-img active" id="hbg0" style="background-image:url('/foto1.jpeg'),linear-gradient(135deg,#0F172A,#1E3A8A)"></div>
    <div class="hero-bg-img" id="hbg1" style="background-image:url('https://images.unsplash.com/photo-1452179535021-368bb0edc3a8?auto=format&fit=crop&w=1600&q=80'),linear-gradient(135deg,#0F172A,#10291A)"></div>
    <div class="hero-bg-img" id="hbg2" style="background-image:url('https://images.unsplash.com/photo-1502637098811-fa9526d2b659?auto=format&fit=crop&w=1600&q=80'),linear-gradient(135deg,#0F172A,#1a2a0A)"></div>
  </div>
  <div class="hero-full-overlay"></div>
  <div class="hero-sector-tag" id="heroBgLabel">⛏️ Gran Minería</div>
  <div class="hero-bg-label">
    <div class="hero-bg-dot on" id="hbd0" onclick="goHeroBg(0)"></div>
    <div class="hero-bg-dot" id="hbd1" onclick="goHeroBg(1)"></div>
    <div class="hero-bg-dot" id="hbd2" onclick="goHeroBg(2)"></div>
  </div>
    <span class="hero-tag2">⛏️ INTEGRACIÓN COMPLETA DE FAENAS · IA · MINERÍA · CHILE</span>
    <h1>TODOS TUS PROYECTOS DE<br><span class="hl">ACREDITACIÓN EN UN SOLO LUGAR</span></h1>
    <p class="hdesc">Integramos cada faena al 100%: plataformas, procesos, formularios, contactos y flujos completos — trabajando con profesionales del rubro. Luego la IA lo gestiona todo por ti, de forma más fácil y económica que armar un equipo propio. <b style="color:#8BAAFF">Todo en un solo lugar.</b></p>
    <div class="hero-search" id="heroSearch">
      <div class="hs-field">
        <label>¿Dónde quieres acreditar?</label>
        <select id="hs-faena" onchange="hsCheck()">
          <option value="">Selecciona la faena o proyecto</option>
          <option disabled style="color:#94A3B8;font-weight:700">── GRAN MINERÍA ──</option><option value="Minera Centinela (Antofagasta Minerals)">Minera Centinela (Antofagasta Minerals)</option><option value="Minera Escondida (BHP)">Minera Escondida (BHP)</option><option value="Doña Inés de Collahuasi">Doña Inés de Collahuasi</option><option value="Los Pelambres (Antofagasta Minerals)">Los Pelambres (Antofagasta Minerals)</option><option value="El Teniente (Codelco)">El Teniente (Codelco)</option><option value="Chuquicamata (Codelco)">Chuquicamata (Codelco)</option><option value="Radomiro Tomic (Codelco)">Radomiro Tomic (Codelco)</option><option value="Ministro Hales (Codelco)">Ministro Hales (Codelco)</option><option value="Gabriela Mistral (Codelco)">Gabriela Mistral (Codelco)</option><option value="Andina (Codelco)">Andina (Codelco)</option><option value="Salvador (Codelco)">Salvador (Codelco)</option><option value="Los Bronces (Anglo American)">Los Bronces (Anglo American)</option><option value="El Soldado (Anglo American)">El Soldado (Anglo American)</option><option value="Minera Candelaria (Lundin Mining)">Minera Candelaria (Lundin Mining)</option><option value="Minera Spence (BHP)">Minera Spence (BHP)</option><option value="Quebrada Blanca (Teck)">Quebrada Blanca (Teck)</option><option value="Caserones (Lundin Mining)">Caserones (Lundin Mining)</option><option value="El Abra (Freeport-McMoRan)">El Abra (Freeport-McMoRan)</option><option value="Zaldívar (Antofagasta Minerals)">Zaldívar (Antofagasta Minerals)</option><option value="Mantoverde (Capstone Copper)">Mantoverde (Capstone Copper)</option><option value="Mantos Blancos (Capstone Copper)">Mantos Blancos (Capstone Copper)</option><option value="Sierra Gorda SCM">Sierra Gorda SCM</option><option value="Lomas Bayas (Glencore)">Lomas Bayas (Glencore)</option><option value="Cerro Colorado (BHP)">Cerro Colorado (BHP)</option><option value="Carmen de Andacollo (Teck)">Carmen de Andacollo (Teck)</option><option value="Antucoya (Antofagasta Minerals)">Antucoya (Antofagasta Minerals)</option><option value="Minera Florida (Gold Fields)">Minera Florida (Gold Fields)</option><option value="El Peñón (Pan American Silver)">El Peñón (Pan American Silver)</option><option value="Pucobre">Pucobre</option><option value="Salares Norte (Gold Fields)">Salares Norte (Gold Fields)</option><option value="Las Cenizas">Las Cenizas</option><option value="Quebrada Blanca Fase 2 (Teck)">Quebrada Blanca Fase 2 (Teck)</option><option value="Norte Abierto (Codelco-Newmont)">Norte Abierto (Codelco-Newmont)</option><option disabled style="color:#94A3B8;font-weight:700">── ENERGÍA EÓLICA ──</option><option value="Parque Eólico Nordex">Parque Eólico Nordex</option><option value="Parque Eólico Punta Sierra">Parque Eólico Punta Sierra</option><option value="Parque Eólico Los Cururos (Mainstream)">Parque Eólico Los Cururos (Mainstream)</option><option value="Parque Eólico Sarco (Acciona)">Parque Eólico Sarco (Acciona)</option><option value="Parque Eólico Totoral">Parque Eólico Totoral</option><option value="Parque Eólico Canela">Parque Eólico Canela</option><option value="Parque Eólico Monte Redondo">Parque Eólico Monte Redondo</option><option value="Parque Eólico Talinay">Parque Eólico Talinay</option><option value="Parque Eólico Valle de los Vientos (Enel)">Parque Eólico Valle de los Vientos (Enel)</option><option value="Parque Eólico Aurora">Parque Eólico Aurora</option><option value="Parque Eólico Taltal">Parque Eólico Taltal</option><option value="Parque Eólico San Juan (Mainstream)">Parque Eólico San Juan (Mainstream)</option><option value="Parque Eólico Cabo Negro">Parque Eólico Cabo Negro</option><option disabled style="color:#94A3B8;font-weight:700">── ENERGÍA SOLAR ──</option><option value="Planta Solar Quilapayún (EDF)">Planta Solar Quilapayún (EDF)</option><option value="Planta Solar El Romero (Acciona)">Planta Solar El Romero (Acciona)</option><option value="Planta Solar Luz del Norte (First Solar)">Planta Solar Luz del Norte (First Solar)</option><option value="Planta Solar Javiera">Planta Solar Javiera</option><option value="Planta Solar Diego de Almagro">Planta Solar Diego de Almagro</option><option value="Planta Solar Pampa Elvira">Planta Solar Pampa Elvira</option><option value="Planta Solar Capricornio (Enel)">Planta Solar Capricornio (Enel)</option><option value="Planta Solar Amanecer">Planta Solar Amanecer</option><option value="Planta Solar Granja Solar Atacama">Planta Solar Granja Solar Atacama</option><option value="Planta Solar Los Loros">Planta Solar Los Loros</option><option disabled style="color:#94A3B8;font-weight:700">── OTRO ──</option><option value="Otro proyecto / faena">Otro proyecto / faena</option>
        </select>
      </div>
      <div class="hs-sep"></div>
      <div class="hs-field">
        <label>¿Qué quieres acreditar?</label>
        <select id="hs-tipo" onchange="hsTipoChange()">
          <option value="">Personas o Equipos</option>
          <option value="personal">👷 Personas</option>
          <option value="equipo">🚛 Equipos</option>
          <option value="empresa">🏢 Empresa (documentos)</option>
          <option value="todo">📋 Todo (empresa + personas + equipos)</option>
        </select>
      </div>
      <div class="hs-sep hs-tipo" id="hs-sep2"></div>
      <div class="hs-field hs-tipo" id="hs-equipo-field">
        <label>¿Qué tipo de equipo?</label>
        <select id="hs-equipo-tipo">
          <option value="">Selecciona tipo de vehículo</option>
          <option value="Tracto-Camión">Tracto-Camión</option><option value="Camión">Camión</option><option value="Camión Pluma">Camión Pluma</option><option value="Camión Aljibe">Camión Aljibe</option><option value="Cama Baja">Cama Baja</option><option value="Semirremolque">Semirremolque</option><option value="Rampla Plana">Rampla Plana</option><option value="Camioneta">Camioneta</option><option value="JEEP">JEEP</option><option value="Bus">Bus</option><option value="MINIBUS">MINIBUS</option><option value="Furgón">Furgón</option><option value="Automóvil">Automóvil</option><option value="Alzahombre">Alzahombre</option><option value="Grúa">Grúa</option><option value="Grúa Horquilla">Grúa Horquilla</option><option value="Retroexcavadora">Retroexcavadora</option><option value="Motoniveladora">Motoniveladora</option><option value="Equipo de levante">Equipo de levante</option><option value="Otro">Otro</option>
        </select>
      </div>
      <button class="hs-btn" onclick="hsEmpezar()">Empezar →</button>
    </div>
    <div class="hero-stats-row">
      <div class="hstat2"><b id="s-faenas">8+</b><span>Faenas integradas actualmente</span></div>
      <div class="hstat2"><b>100%</b><span>Visibilidad de tus acreditaciones activas</span></div>
      <div class="hstat2"><b>-80%</b><span>Reducción del equipo de acreditación</span></div>
      <div class="hstat2"><b>24/7</b><span>Monitoreo automático de vencimientos</span></div>
    </div>
    <div class="hero-ai-intro">
      <div class="hero-ai-bubble"><div class="nm"><span class="dot"></span>Sofía · Asistente IA</div><div class="tx">¡Hola! 👋 Soy Sofía. Te enseño a acreditar paso a paso en cualquier faena integrada.</div></div>
      <div class="hero-ai-avatar"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FDE9D2"/><path d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z" fill="#2448E0"/><path d="M35 95 L50 79 L65 95" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><path d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z" fill="#F2C49B"/><path d="M27 36 C24 47 26 58 33 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M73 36 C76 47 74 58 67 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="41" cy="43" r="2.6" fill="#2A1A10"/><circle cx="59" cy="43" r="2.6" fill="#2A1A10"/><path d="M41 54 Q50 60 59 54" stroke="#9a5236" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z" fill="#f2cda0"/><rect x="19" y="26" width="62" height="6" rx="3" fill="#e0b27c"/></svg></div>
    </div>
  </header>

  <!-- ORBIT: ACREDITTIA + FAENAS INTEGRADAS -->
  <section class="orbit-sect">
    <div class="orbit-inner">
      <div class="orbit-text">
        <span class="sec-label" style="color:#8BAAFF">INTEGRACIÓN REAL</span>
        <h2>Una sola plataforma,<br>conectada a toda la gran minería.</h2>
        <p>ACREDITTIA está integrado al 100% a las plataformas, procesos y formularios de las principales faenas mineras y energéticas de Chile — con IA que entiende el flujo real de cada una.</p>
      </div>
      <div class="orbit-visual">
        <div class="orbit-glow"></div>
        <div class="orbit-center">
          <svg class="mark" style="width:48px;height:44px" viewBox="0 0 100 92" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="lg-orbit1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6B8FFF"/><stop offset=".5" stop-color="#3D62F5"/><stop offset="1" stop-color="#2448E0"/></linearGradient><linearGradient id="lg-orbit2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8BAAFF"/><stop offset="1" stop-color="#3D62F5"/></linearGradient></defs><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="url(#lg-orbit1)"/><path d="M50 6 L66 36 L50 44 Z" fill="url(#lg-orbit2)"/><path d="M50 6 L92 80 L80 80 L50 24 Z" fill="#1E293B" opacity=".22"/></svg>
        </div>
        <div class="orbit-ring">
          <div class="orbit-bubble" style="--ang:0deg"><div class="orbit-bubble-counter"><div class="orbit-bubble-inner" style="background-image:url('/los_pelambres.jpeg')" title="Los Pelambres"></div><span class="orbit-bubble-label">Los Pelambres</span></div></div>
          <div class="orbit-bubble" style="--ang:40deg"><div class="orbit-bubble-counter"><div class="orbit-bubble-inner" style="background-image:url('/centinela.jpg')" title="Centinela"></div><span class="orbit-bubble-label">Centinela</span></div></div>
          <div class="orbit-bubble" style="--ang:80deg"><div class="orbit-bubble-counter"><div class="orbit-bubble-inner" style="background-image:url('/antucoya.jpg')" title="Antucoya"></div><span class="orbit-bubble-label">Antucoya</span></div></div>
          <div class="orbit-bubble" style="--ang:120deg"><div class="orbit-bubble-counter"><div class="orbit-bubble-inner" style="background-image:url('/zaldivar.png')" title="Zaldívar"></div><span class="orbit-bubble-label">Zaldívar</span></div></div>
          <div class="orbit-bubble" style="--ang:160deg"><div class="orbit-bubble-counter"><div class="orbit-bubble-inner" style="background-image:url('/candelaria.jpg')" title="Candelaria"></div><span class="orbit-bubble-label">Candelaria</span></div></div>
          <div class="orbit-bubble" style="--ang:200deg"><div class="orbit-bubble-counter"><div class="orbit-bubble-inner" style="background-image:url('/caserones.jpeg')" title="Caserones"></div><span class="orbit-bubble-label">Caserones</span></div></div>
          <div class="orbit-bubble" style="--ang:240deg"><div class="orbit-bubble-counter"><div class="orbit-bubble-inner" style="background-image:url('/el_teniente.jpg')" title="El Teniente"></div><span class="orbit-bubble-label">El Teniente</span></div></div>
          <div class="orbit-bubble" style="--ang:280deg"><div class="orbit-bubble-counter"><div class="orbit-bubble-inner" style="background-image:url('/andina.jpg')" title="Andina"></div><span class="orbit-bubble-label">Andina</span></div></div>
          <div class="orbit-bubble" style="--ang:320deg"><div class="orbit-bubble-counter"><div class="orbit-bubble-inner" style="background-image:url('/antofagastaI.jpg')" title="Parque Eólico Antofagasta I"></div><span class="orbit-bubble-label">P. Eólico Antofagasta I</span></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- VIDEO SECTION -->
  <section style="background:var(--bg);padding:72px 6% 80px;text-align:center">
    <div style="max-width:960px;margin:0 auto">
      <span class="sec-label">VE CÓMO FUNCIONA</span>
      <h2 style="font-size:2rem;font-weight:900;color:var(--azul);margin:12px 0 16px">Una plataforma construida<br>para el rubro minero</h2>
      <p style="color:var(--gris);font-size:1rem;max-width:560px;margin:0 auto 36px;line-height:1.65">Integración completa con cada faena, IA que revisa tus documentos y visibilidad total de todos tus proyectos — desde un solo lugar.</p>
      <div style="border-radius:20px;overflow:hidden;box-shadow:0 24px 64px rgba(36,72,224,.18);border:1px solid var(--linea);background:#000;position:relative">
        <video
          autoplay muted loop playsinline
          style="width:100%;display:block;max-height:560px;object-fit:cover"
          poster="">
          <source src="/hazme_un_video_para_poner_asi.mp4" type="video/mp4">
        </video>
      </div>
      <p style="margin-top:20px;color:#94A3B8;font-size:.85rem">¿Listo para integrar tu primera faena?
        <button onclick="enterApp()" style="background:none;border:none;color:var(--cyan);font-weight:700;cursor:pointer;font-size:.85rem;padding:0;margin-left:4px">Solicitar acceso →</button>
      </p>
    </div>
  </section>

  <!-- MOCKUP SECTION -->
  <section class="mockup-section" id="plataforma">
    <div class="ms-head">
      <span class="sec-label">ASÍ SE VE LA PLATAFORMA</span>
      <h2>Rápido, fácil y claro.<br>Sin volverte loco.</h2>
      <p>Un solo panel para ver todas tus acreditaciones, sin importar cuántas faenas o plataformas tenga cada una.</p>
    </div>

    <!-- Tabs -->
    <div class="mock-tabs">
      <div class="mock-tab active" onclick="showMock('dashboard',this)">🏠 Inicio</div>
      <div class="mock-tab" onclick="showMock('docs',this)">📋 Contratos</div>
      <div class="mock-tab" onclick="showMock('personal',this)">👥 Personal</div>
      <div class="mock-tab" onclick="showMock('equipos',this)">🚛 Equipos</div>
      <div class="mock-tab" onclick="showMock('faenas',this)">🏔️ Faenas</div>
      <div class="mock-tab" onclick="showMock('reportes',this)">📊 Reportes</div>
      <div class="mock-tab" onclick="showMock('alertas',this)">🔔 Alertas IA</div>
    </div>

    <!-- shared sidebar helper: new nav -->
    <!-- SCREEN 1: Dashboard -->
    <div id="mock-dashboard" class="mock-screen show">
      <div class="browser-frame">
        <div class="browser-chrome">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-url">🔒 acredittia.cl · Inicio</div>
        </div>
        <div class="mock-app" style="background:#080E1C">
          <!-- sidebar -->
          <div class="mock-sidebar" style="background:#0F172A;border-right:1px solid #1E3A5F;gap:2px;padding:14px 10px">
            <div class="mock-logo" style="padding-bottom:14px;border-bottom:1px solid #1E3A5F;margin-bottom:10px">
              <svg style="width:15px;height:13px" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"/><path d="M50 6 L66 36 L50 44 Z" fill="#fff"/></svg>
              <span>ACREDIT<span style="color:#38BDF8;margin-left:-.08em">TIA</span></span>
            </div>
            <!-- user chip -->
            <div style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:10px;background:rgba(255,255,255,.04);border:1px solid #1E3A5F;margin-bottom:10px">
              <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);display:grid;place-items:center;font-weight:700;font-size:.72rem;color:#fff;flex-shrink:0">T</div>
              <div><div style="font-size:.72rem;font-weight:600;color:#F1F5F9">Tiex SpA</div><div style="font-size:.6rem;color:#64748B">Administrador</div></div>
            </div>
            <div class="mock-nav-item active" style="background:rgba(61,98,245,.2);color:#fff">🏠 Inicio</div>
            <div class="mock-nav-item">📋 Contratos</div>
            <div class="mock-nav-item">🏔️ Faenas</div>
            <div class="mock-nav-item">👥 Personal</div>
            <div class="mock-nav-item">🚛 Equipos / Vehículos</div>
            <div class="mock-nav-item">📑 Requisitos</div>
            <div class="mock-nav-item">📊 Reportes</div>
            <div class="mock-nav-item">🔔 Alertas <span style="margin-left:auto;background:#EF4444;color:#fff;font-size:.55rem;padding:1px 5px;border-radius:8px">7</span></div>
            <div class="mock-nav-item">📅 Calendario</div>
            <div class="mock-nav-item">🔌 Integraciones</div>
          </div>
          <!-- main -->
          <div class="mock-main" style="background:#080E1C;padding:18px 16px">
            <!-- header -->
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
              <div><div style="font-size:.88rem;font-weight:700;color:#F1F5F9">¡Hola, Tiex!</div><div style="font-size:.62rem;color:#64748B">Resumen de tu operación en todas las faenas</div></div>
              <div style="display:flex;gap:6px;align-items:center">
                <div style="width:26px;height:26px;border-radius:8px;background:#1E293B;border:1px solid #1E3A5F;display:grid;place-items:center;font-size:.7rem">?</div>
                <div style="width:26px;height:26px;border-radius:8px;background:#1E293B;border:1px solid #1E3A5F;display:grid;place-items:center;font-size:.75rem">🔔</div>
                <div style="display:flex;align-items:center;gap:5px;background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:4px 8px">
                  <div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);display:grid;place-items:center;font-size:.65rem;font-weight:700;color:#fff">T</div>
                  <span style="font-size:.62rem;font-weight:600;color:#F1F5F9">Tiex SpA</span>
                </div>
              </div>
            </div>
            <!-- 5 KPI cards -->
            <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin-bottom:12px">
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:10px;display:flex;align-items:center;gap:7px">
                <div style="width:32px;height:32px;border-radius:8px;background:rgba(61,98,245,.15);display:grid;place-items:center;font-size:.8rem;flex-shrink:0">📋</div>
                <div><div style="font-size:.55rem;color:#64748B">Contratos activos</div><div style="font-size:1rem;font-weight:900;color:#fff">6</div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:10px;display:flex;align-items:center;gap:7px">
                <div style="width:32px;height:32px;border-radius:8px;background:rgba(61,98,245,.15);display:grid;place-items:center;font-size:.8rem;flex-shrink:0">🏔️</div>
                <div><div style="font-size:.55rem;color:#64748B">Faenas activas</div><div style="font-size:1rem;font-weight:900;color:#fff">4</div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:10px;display:flex;align-items:center;gap:7px">
                <div style="width:32px;height:32px;border-radius:8px;background:rgba(16,185,129,.15);display:grid;place-items:center;font-size:.8rem;flex-shrink:0">👥</div>
                <div><div style="font-size:.55rem;color:#64748B">Personal acreditado</div><div style="font-size:1rem;font-weight:900;color:#fff">48</div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:10px;display:flex;align-items:center;gap:7px">
                <div style="width:32px;height:32px;border-radius:8px;background:rgba(16,185,129,.15);display:grid;place-items:center;font-size:.8rem;flex-shrink:0">🚛</div>
                <div><div style="font-size:.55rem;color:#64748B">Equipos acreditados</div><div style="font-size:1rem;font-weight:900;color:#fff">15</div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:10px;display:flex;align-items:center;gap:7px">
                <div style="width:32px;height:32px;border-radius:8px;display:grid;place-items:center;flex-shrink:0;position:relative">
                  <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="11" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="3"/><circle cx="16" cy="16" r="11" fill="none" stroke="#10B981" stroke-width="3" stroke-dasharray="50 19" stroke-linecap="round" transform="rotate(-90 16 16)"/></svg>
                  <span style="position:absolute;font-size:.45rem;font-weight:900;color:#10B981">76%</span>
                </div>
                <div><div style="font-size:.55rem;color:#64748B">Cumplimiento</div><div style="font-size:1rem;font-weight:900;color:#10B981">76%</div></div>
              </div>
            </div>
            <!-- 2-col bottom -->
            <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:8px">
              <!-- contracts table -->
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;overflow:hidden">
                <div style="padding:9px 12px;border-bottom:1px solid #1E3A5F;display:flex;justify-content:space-between;align-items:center">
                  <span style="font-size:.72rem;font-weight:700;color:#F1F5F9">Mis contratos <span style="font-weight:400;color:#64748B;font-size:.6rem">(6 activos)</span></span>
                  <span style="font-size:.6rem;color:#38BDF8;font-weight:600">Ver todos →</span>
                </div>
                <div style="padding:0 12px">
                  <div class="mock-row" style="border-bottom:1px solid #1E3A5F">
                    <div style="width:24px;height:24px;border-radius:6px;background:linear-gradient(135deg,#3D62F5,#6B8FFF);display:grid;place-items:center;font-size:.6rem;color:#fff;flex-shrink:0">⛰</div>
                    <div style="flex:1;min-width:0"><div class="mr-name" style="color:#F1F5F9;font-size:.68rem">MLP Operaciones</div><div class="mr-sub" style="font-size:.58rem">Los Pelambres · SIGA · WORKMATE</div></div>
                    <div class="mock-bar-wrap" style="width:50px"><div class="mock-bar-fill" style="width:74%;background:#10B981"></div></div>
                    <span class="mbadge ok" style="font-size:.55rem">74%</span>
                  </div>
                  <div class="mock-row" style="border-bottom:1px solid #1E3A5F">
                    <div style="width:24px;height:24px;border-radius:6px;background:linear-gradient(135deg,#0891B2,#38BDF8);display:grid;place-items:center;font-size:.6rem;color:#fff;flex-shrink:0">⛰</div>
                    <div style="flex:1;min-width:0"><div class="mr-name" style="color:#F1F5F9;font-size:.68rem">Collahuasi CT-7821</div><div class="mr-sub" style="font-size:.58rem">Collahuasi · METACONTRATAS</div></div>
                    <div class="mock-bar-wrap" style="width:50px"><div class="mock-bar-fill" style="width:58%;background:#F59E0B"></div></div>
                    <span class="mbadge warn" style="font-size:.55rem">58%</span>
                  </div>
                  <div class="mock-row" style="border-bottom:1px solid #1E3A5F">
                    <div style="width:24px;height:24px;border-radius:6px;background:linear-gradient(135deg,#059669,#34D399);display:grid;place-items:center;font-size:.6rem;color:#fff;flex-shrink:0">⛰</div>
                    <div style="flex:1;min-width:0"><div class="mr-name" style="color:#F1F5F9;font-size:.68rem">Centinela Servicios</div><div class="mr-sub" style="font-size:.58rem">Centinela · WEBCONTROL</div></div>
                    <div class="mock-bar-wrap" style="width:50px"><div class="mock-bar-fill" style="width:91%;background:#10B981"></div></div>
                    <span class="mbadge ok" style="font-size:.55rem">91%</span>
                  </div>
                  <div class="mock-row" style="border-bottom:1px solid #1E3A5F">
                    <div style="width:24px;height:24px;border-radius:6px;background:linear-gradient(135deg,#7C3AED,#A78BFA);display:grid;place-items:center;font-size:.6rem;color:#fff;flex-shrink:0">⛰</div>
                    <div style="flex:1;min-width:0"><div class="mr-name" style="color:#F1F5F9;font-size:.68rem">El Teniente Mant.</div><div class="mr-sub" style="font-size:.58rem">El Teniente · SIGA</div></div>
                    <div class="mock-bar-wrap" style="width:50px"><div class="mock-bar-fill" style="width:83%;background:#10B981"></div></div>
                    <span class="mbadge ok" style="font-size:.55rem">83%</span>
                  </div>
                  <div class="mock-row" style="border-bottom:1px solid #1E3A5F">
                    <div style="width:24px;height:24px;border-radius:6px;background:linear-gradient(135deg,#B45309,#FCD34D);display:grid;place-items:center;font-size:.6rem;color:#fff;flex-shrink:0">⛰</div>
                    <div style="flex:1;min-width:0"><div class="mr-name" style="color:#F1F5F9;font-size:.68rem">Candelaria Infraestr.</div><div class="mr-sub" style="font-size:.58rem">Candelaria · WEBCONTROL</div></div>
                    <div class="mock-bar-wrap" style="width:50px"><div class="mock-bar-fill" style="width:42%;background:#EF4444"></div></div>
                    <span class="mbadge err" style="font-size:.55rem">42%</span>
                  </div>
                  <div class="mock-row">
                    <div style="width:24px;height:24px;border-radius:6px;background:linear-gradient(135deg,#0369A1,#38BDF8);display:grid;place-items:center;font-size:.6rem;color:#fff;flex-shrink:0">⛰</div>
                    <div style="flex:1;min-width:0"><div class="mr-name" style="color:#F1F5F9;font-size:.68rem">Zaldívar Operaciones</div><div class="mr-sub" style="font-size:.58rem">Zaldívar · SIGA</div></div>
                    <div class="mock-bar-wrap" style="width:50px"><div class="mock-bar-fill" style="width:67%;background:#F59E0B"></div></div>
                    <span class="mbadge warn" style="font-size:.55rem">67%</span>
                  </div>
                </div>
              </div>
              <!-- alerts panel -->
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;overflow:hidden">
                <div style="padding:9px 12px;border-bottom:1px solid #1E3A5F;display:flex;justify-content:space-between;align-items:center">
                  <span style="font-size:.72rem;font-weight:700;color:#F1F5F9">Alertas recientes</span>
                  <span style="background:#fee2e2;color:#b91c1c;font-size:.55rem;font-weight:700;padding:1px 5px;border-radius:6px">10</span>
                </div>
                <div style="padding:0 10px">
                  <div class="mock-row" style="border-bottom:1px solid #1E3A5F;gap:6px">
                    <div style="width:20px;height:20px;border-radius:5px;background:#fee2e2;display:grid;place-items:center;font-size:.55rem;flex-shrink:0">🔴</div>
                    <div style="flex:1;min-width:0"><div class="mr-name" style="color:#fca5a5;font-size:.62rem">Rev. técnica vencida</div><div class="mr-sub" style="font-size:.54rem">LXDY88 · hace 3 días</div></div>
                    <span class="mbadge err" style="font-size:.5rem">Crítica</span>
                  </div>
                  <div class="mock-row" style="border-bottom:1px solid #1E3A5F;gap:6px">
                    <div style="width:20px;height:20px;border-radius:5px;background:#fee2e2;display:grid;place-items:center;font-size:.55rem;flex-shrink:0">🔴</div>
                    <div style="flex:1;min-width:0"><div class="mr-name" style="color:#fca5a5;font-size:.62rem">Seguro accidentes vencido</div><div class="mr-sub" style="font-size:.54rem">Empresa · hace 1 día</div></div>
                    <span class="mbadge err" style="font-size:.5rem">Crítica</span>
                  </div>
                  <div class="mock-row" style="border-bottom:1px solid #1E3A5F;gap:6px">
                    <div style="width:20px;height:20px;border-radius:5px;background:#fef3c7;display:grid;place-items:center;font-size:.55rem;flex-shrink:0">⚠️</div>
                    <div style="flex:1;min-width:0"><div class="mr-name" style="color:#fde68a;font-size:.62rem">F30-1 por vencer</div><div class="mr-sub" style="font-size:.54rem">Empresa · en 8 días</div></div>
                    <span class="mbadge warn" style="font-size:.5rem">8 días</span>
                  </div>
                  <div class="mock-row" style="border-bottom:1px solid #1E3A5F;gap:6px">
                    <div style="width:20px;height:20px;border-radius:5px;background:#fef3c7;display:grid;place-items:center;font-size:.55rem;flex-shrink:0">⚠️</div>
                    <div style="flex:1;min-width:0"><div class="mr-name" style="color:#fde68a;font-size:.62rem">Examen altura por vencer</div><div class="mr-sub" style="font-size:.54rem">Ruiz José · en 12 días</div></div>
                    <span class="mbadge warn" style="font-size:.5rem">12 días</span>
                  </div>
                  <div class="mock-row" style="gap:6px">
                    <div style="width:20px;height:20px;border-radius:5px;background:#dbeafe;display:grid;place-items:center;font-size:.55rem;flex-shrink:0">ℹ️</div>
                    <div style="flex:1;min-width:0"><div class="mr-name" style="color:#93C5FD;font-size:.62rem">IA: Antigüedad excedida</div><div class="mr-sub" style="font-size:.54rem">RPDC68 · 17 años vs máx 15</div></div>
                    <span style="font-size:.5rem;background:#dbeafe;color:#1e40af;padding:1px 4px;border-radius:4px;font-weight:700;white-space:nowrap">Info</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mock-ai-guide">
            <div class="mock-ai-bubble"><div class="nm"><span class="dot"></span>Sofía · Asistente IA</div><div class="tx">¡Hola! Tienes <b>3 documentos</b> por vencer esta semana. ¿Te ayudo a revisarlos?</div></div>
            <div class="mock-ai-avatar"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FDE9D2"/><path d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z" fill="#2448E0"/><path d="M35 95 L50 79 L65 95" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><path d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z" fill="#F2C49B"/><path d="M27 36 C24 47 26 58 33 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M73 36 C76 47 74 58 67 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="41" cy="43" r="2.6" fill="#2A1A10"/><circle cx="59" cy="43" r="2.6" fill="#2A1A10"/><path d="M41 54 Q50 60 59 54" stroke="#9a5236" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z" fill="#f2cda0"/><rect x="19" y="26" width="62" height="6" rx="3" fill="#e0b27c"/></svg></div>
          </div>
        </div>
      </div>
    </div>

    <!-- SCREEN 2: Contratos (detalle con plataformas) -->
    <div id="mock-docs" class="mock-screen">
      <div class="browser-frame">
        <div class="browser-chrome">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-url">🔒 acredittia.cl · Contratos › CT-45000641</div>
        </div>
        <div class="mock-app" style="background:#080E1C">
          <div class="mock-sidebar" style="background:#0F172A;border-right:1px solid #1E3A5F;gap:2px;padding:14px 10px">
            <div class="mock-logo" style="padding-bottom:14px;border-bottom:1px solid #1E3A5F;margin-bottom:10px"><svg style="width:15px;height:13px" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"/><path d="M50 6 L66 36 L50 44 Z" fill="#fff"/></svg> <span>ACREDIT<span style="color:#38BDF8;margin-left:-.08em">TIA</span></span></div>
            <div style="display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid #1E3A5F;margin-bottom:8px">
              <div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);display:grid;place-items:center;font-size:.6rem;font-weight:700;color:#fff;flex-shrink:0">T</div>
              <div style="font-size:.65rem;font-weight:600;color:#F1F5F9">Tiex SpA</div>
            </div>
            <div class="mock-nav-item">🏠 Inicio</div>
            <div class="mock-nav-item active" style="background:rgba(61,98,245,.2);color:#fff">📋 Contratos</div>
            <div class="mock-nav-item">🏔️ Faenas</div>
            <div class="mock-nav-item">👥 Personal</div>
            <div class="mock-nav-item">🚛 Equipos / Vehículos</div>
            <div class="mock-nav-item">📑 Requisitos</div>
            <div class="mock-nav-item">📊 Reportes</div>
            <div class="mock-nav-item">🔔 Alertas <span style="margin-left:auto;background:#EF4444;color:#fff;font-size:.55rem;padding:1px 5px;border-radius:8px">7</span></div>
            <div class="mock-nav-item">📅 Calendario</div>
            <div class="mock-nav-item">🔌 Integraciones</div>
          </div>
          <div class="mock-main" style="background:#080E1C;padding:16px">
            <!-- breadcrumb + title -->
            <div style="font-size:.58rem;color:#64748B;margin-bottom:8px">Contratos › Detalle del contrato</div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span style="font-size:.88rem;font-weight:800;color:#fff">Contrato CT-45000641</span>
              <span style="background:#dcfce7;color:#15803d;font-size:.55rem;font-weight:700;padding:2px 6px;border-radius:8px">● Vigente</span>
            </div>
            <div style="font-size:.62rem;color:#64748B;margin-bottom:10px">Minera Los Pelambres</div>
            <!-- platforms row -->
            <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:10px;margin-bottom:10px">
              <div style="font-size:.65rem;font-weight:700;color:#F1F5F9;margin-bottom:7px">Plataformas que utiliza Los Pelambres</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                <div style="border:1px solid #1E3A5F;border-radius:8px;padding:10px 12px;background:#0F172A">
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                    <div style="font-size:.6rem;font-weight:900;font-style:italic;color:#2d6a4f;background:#e8f5e9;border-radius:4px;padding:2px 7px;display:inline-block">siga</div>
                    <span style="font-size:.5rem;background:#dcfce7;color:#166534;font-weight:700;padding:1px 5px;border-radius:5px">● Conectado</span>
                  </div>
                  <div style="font-size:.55rem;color:#64748B;margin-bottom:2px">Sistema de Gestión y Acreditación</div>
                  <div style="display:flex;justify-content:space-between;margin-top:6px">
                    <div><div style="font-size:.52rem;color:#64748B">Usuarios</div><div style="font-size:.9rem;font-weight:900;color:#38BDF8">12</div></div>
                    <div><div style="font-size:.52rem;color:#64748B">Docs vigentes</div><div style="font-size:.9rem;font-weight:900;color:#10B981">87</div></div>
                    <div><div style="font-size:.52rem;color:#64748B">Alertas</div><div style="font-size:.9rem;font-weight:900;color:#F59E0B">3</div></div>
                  </div>
                  <div style="font-size:.52rem;color:#38BDF8;margin-top:5px">Ver detalles en SIGA →</div>
                </div>
                <div style="border:1px solid #1E3A5F;border-radius:8px;padding:10px 12px;background:#0F172A">
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                    <div style="font-size:.6rem;font-weight:900;color:#1e3a8a;background:#dbeafe;border-radius:4px;padding:2px 7px;display:inline-block">WORKMATE</div>
                    <span style="font-size:.5rem;background:#dcfce7;color:#166534;font-weight:700;padding:1px 5px;border-radius:5px">● Conectado</span>
                  </div>
                  <div style="font-size:.55rem;color:#64748B;margin-bottom:2px">Plataforma de Gestión de Contratistas</div>
                  <div style="display:flex;justify-content:space-between;margin-top:6px">
                    <div><div style="font-size:.52rem;color:#64748B">Usuarios</div><div style="font-size:.9rem;font-weight:900;color:#38BDF8">20</div></div>
                    <div><div style="font-size:.52rem;color:#64748B">Requisitos</div><div style="font-size:.9rem;font-weight:900;color:#10B981">34</div></div>
                    <div><div style="font-size:.52rem;color:#64748B">Alertas</div><div style="font-size:.9rem;font-weight:900;color:#EF4444">1</div></div>
                  </div>
                  <div style="font-size:.52rem;color:#38BDF8;margin-top:5px">Ver detalles en WORKMATE →</div>
                </div>
              </div>
            </div>
            <!-- tabs + resumen -->
            <div style="display:flex;gap:0;border-bottom:1px solid #1E3A5F;margin-bottom:10px">
              <span style="padding:5px 10px;font-size:.62rem;font-weight:700;color:#38BDF8;border-bottom:2px solid #38BDF8">Resumen</span>
              <span style="padding:5px 10px;font-size:.62rem;color:#64748B">Documentos</span>
              <span style="padding:5px 10px;font-size:.62rem;color:#64748B">Personal</span>
              <span style="padding:5px 10px;font-size:.62rem;color:#64748B">Equipos / Vehículos</span>
              <span style="padding:5px 10px;font-size:.62rem;color:#64748B">Alertas IA</span>
              <span style="padding:5px 10px;font-size:.62rem;color:#64748B">Historial</span>
            </div>
            <!-- 3-col resumen -->
            <div style="display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:8px">
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:8px;padding:10px;font-size:.62rem">
                <div style="font-weight:700;color:#F1F5F9;margin-bottom:7px">Información del contrato</div>
                <div style="color:#64748B;margin-bottom:4px">N° de contrato <span style="color:#F1F5F9;float:right;font-weight:600">CT-45000641</span></div>
                <div style="color:#64748B;margin-bottom:4px">Estado <span style="float:right"><span style="background:#dcfce7;color:#15803d;font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:5px">Vigente</span></span></div>
                <div style="color:#64748B;margin-bottom:4px">Empresa <span style="color:#F1F5F9;float:right">Tiex SpA</span></div>
                <div style="color:#64748B;margin-bottom:4px">Faena <span style="color:#F1F5F9;float:right">Los Pelambres</span></div>
                <div style="color:#64748B;margin-bottom:4px">Inicio <span style="color:#F1F5F9;float:right">01/01/2024</span></div>
                <div style="color:#64748B">Término <span style="color:#F1F5F9;float:right">31/12/2025</span></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:8px;padding:10px;font-size:.62rem">
                <div style="font-weight:700;color:#F1F5F9;margin-bottom:7px">Vigencia del contrato</div>
                <div style="font-size:.55rem;color:#64748B;text-align:right;margin-bottom:4px">215 días restantes</div>
                <div style="height:5px;background:#1E3A5F;border-radius:5px;overflow:hidden;margin-bottom:8px">
                  <div style="height:100%;width:41%;background:#38BDF8;border-radius:5px"></div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
                  <div style="background:rgba(255,255,255,.04);border-radius:6px;padding:6px">
                    <div style="color:#64748B;font-size:.55rem">Días transcurridos</div>
                    <div style="color:#fff;font-weight:700;font-size:.72rem">150 días (41%)</div>
                  </div>
                  <div style="background:rgba(255,255,255,.04);border-radius:6px;padding:6px">
                    <div style="color:#64748B;font-size:.55rem">Próx. vencimiento</div>
                    <div style="color:#fbbf24;font-weight:700;font-size:.6rem">Seguro de accidentes</div>
                    <div style="color:#64748B;font-size:.52rem">10/04/2025</div>
                  </div>
                </div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:8px;padding:10px;font-size:.62rem">
                <div style="font-weight:700;color:#F1F5F9;margin-bottom:7px">Resumen general</div>
                <div style="color:#64748B;margin-bottom:3px;border-bottom:1px solid #1E3A5F;padding-bottom:3px">Estado <span style="float:right"><span style="background:#dcfce7;color:#15803d;font-size:.5rem;padding:1px 5px;border-radius:5px">Cumplido</span></span></div>
                <div style="color:#64748B;margin-bottom:3px;border-bottom:1px solid #1E3A5F;padding-bottom:3px">Requisitos asociados <span style="color:#F1F5F9;float:right">28</span></div>
                <div style="color:#5fbf80;margin-bottom:3px;border-bottom:1px solid #1E3A5F;padding-bottom:3px">Req. cumplidos <span style="float:right">20 (71%)</span></div>
                <div style="color:#fbbf24;margin-bottom:3px;border-bottom:1px solid #1E3A5F;padding-bottom:3px">Req. en progreso <span style="float:right">5 (18%)</span></div>
                <div style="color:#f87171;margin-bottom:3px;border-bottom:1px solid #1E3A5F;padding-bottom:3px">Req. no cumplidos <span style="float:right">3 (11%)</span></div>
                <div style="color:#64748B;margin-bottom:3px">Documentos totales <span style="color:#F1F5F9;float:right">145</span></div>
                <div style="color:#f87171">Docs vencidos <span style="float:right">10</span></div>
              </div>
            </div>
          </div>
          <div class="mock-ai-guide">
            <div class="mock-ai-bubble"><div class="nm"><span class="dot"></span>Sofía · Asistente IA</div><div class="tx">Te faltan <b>2 documentos</b> para completar el contrato de Los Pelambres.</div></div>
            <div class="mock-ai-avatar"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FDE9D2"/><path d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z" fill="#2448E0"/><path d="M35 95 L50 79 L65 95" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><path d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z" fill="#F2C49B"/><path d="M27 36 C24 47 26 58 33 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M73 36 C76 47 74 58 67 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="41" cy="43" r="2.6" fill="#2A1A10"/><circle cx="59" cy="43" r="2.6" fill="#2A1A10"/><path d="M41 54 Q50 60 59 54" stroke="#9a5236" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z" fill="#f2cda0"/><rect x="19" y="26" width="62" height="6" rx="3" fill="#e0b27c"/></svg></div>
          </div>
        </div>
      </div>
    </div>

    <!-- SCREEN: Personal -->
    <div id="mock-personal" class="mock-screen">
      <div class="browser-frame">
        <div class="browser-chrome">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-url">🔒 acredittia.cl · Personal · 48 trabajadores</div>
        </div>
        <div class="mock-app" style="background:#080E1C">
          <div class="mock-sidebar" style="background:#0F172A;border-right:1px solid #1E3A5F;gap:2px;padding:14px 10px">
            <div class="mock-logo" style="padding-bottom:14px;border-bottom:1px solid #1E3A5F;margin-bottom:10px"><svg style="width:15px;height:13px" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"/><path d="M50 6 L66 36 L50 44 Z" fill="#fff"/></svg> <span>ACREDIT<span style="color:#38BDF8;margin-left:-.08em">TIA</span></span></div>
            <div style="display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid #1E3A5F;margin-bottom:8px">
              <div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);display:grid;place-items:center;font-size:.6rem;font-weight:700;color:#fff;flex-shrink:0">T</div>
              <div style="font-size:.65rem;font-weight:600;color:#F1F5F9">Tiex SpA</div>
            </div>
            <div class="mock-nav-item">🏠 Inicio</div>
            <div class="mock-nav-item">📋 Contratos</div>
            <div class="mock-nav-item">🏔️ Faenas</div>
            <div class="mock-nav-item active" style="background:rgba(61,98,245,.2);color:#fff">👥 Personal</div>
            <div class="mock-nav-item">🚛 Equipos / Vehículos</div>
            <div class="mock-nav-item">📑 Requisitos</div>
            <div class="mock-nav-item">📊 Reportes</div>
            <div class="mock-nav-item">🔔 Alertas <span style="margin-left:auto;background:#EF4444;color:#fff;font-size:.55rem;padding:1px 5px;border-radius:8px">7</span></div>
            <div class="mock-nav-item">📅 Calendario</div>
            <div class="mock-nav-item">🔌 Integraciones</div>
          </div>
          <div class="mock-main" style="background:#080E1C;padding:16px">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
              <div><div style="font-size:.82rem;font-weight:800;color:#fff;margin-bottom:2px">Personal</div><div style="font-size:.6rem;color:#64748B">Gestiona y supervisa a todo el personal acreditado de tu empresa en sus diferentes faenas.</div></div>
              <div style="display:flex;gap:6px;flex-shrink:0">
                <span style="font-size:.56rem;font-weight:700;color:#94A3B8;background:rgba(255,255,255,.05);border:1px solid #1E3A5F;padding:6px 10px;border-radius:7px;white-space:nowrap">↓ Exportar</span>
                <span style="font-size:.56rem;font-weight:700;color:#fff;background:#3D62F5;padding:6px 10px;border-radius:7px;white-space:nowrap">+ Agregar personal</span>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin-bottom:10px">
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(61,98,245,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">👥</div>
                <div><div style="font-size:.5rem;color:#64748B">Total personal</div><div style="font-size:.95rem;font-weight:900;color:#fff">48</div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(16,185,129,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">✅</div>
                <div><div style="font-size:.5rem;color:#64748B">Acreditados</div><div style="font-size:.95rem;font-weight:900;color:#10B981">36<span style="font-size:.5rem;color:#64748B;font-weight:600"> (75%)</span></div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(245,158,11,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">⏳</div>
                <div><div style="font-size:.5rem;color:#64748B">Por vencer (30 días)</div><div style="font-size:.95rem;font-weight:900;color:#F59E0B">8<span style="font-size:.5rem;color:#64748B;font-weight:600"> (17%)</span></div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(239,68,68,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">❌</div>
                <div><div style="font-size:.5rem;color:#64748B">Vencidos</div><div style="font-size:.95rem;font-weight:900;color:#EF4444">3<span style="font-size:.5rem;color:#64748B;font-weight:600"> (6%)</span></div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(148,163,184,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">📋</div>
                <div><div style="font-size:.5rem;color:#64748B">Sin asignar a faena</div><div style="font-size:.95rem;font-weight:900;color:#fff">1<span style="font-size:.5rem;color:#64748B;font-weight:600"> (2%)</span></div></div>
              </div>
            </div>
            <div style="display:flex;gap:7px;margin-bottom:9px;align-items:center">
              <div style="flex:1;max-width:220px;padding:6px 10px;border-radius:8px;background:#1E293B;border:1px solid #1E3A5F;color:#64748B;font-size:.56rem">🔍 Buscar por nombre, RUT o cargo...</div>
              <span style="font-size:.54rem;color:#94A3B8;background:#1E293B;border:1px solid #1E3A5F;padding:6px 9px;border-radius:8px">Estado: Todos</span>
              <span style="font-size:.54rem;color:#94A3B8;background:#1E293B;border:1px solid #1E3A5F;padding:6px 9px;border-radius:8px">Faena: Todas</span>
              <span style="font-size:.54rem;color:#94A3B8;background:#1E293B;border:1px solid #1E3A5F;padding:6px 9px;border-radius:8px">Cargo: Todos</span>
            </div>
            <div style="background:#fff;border-radius:10px;overflow:hidden">
              <table style="width:100%;border-collapse:collapse">
                <thead><tr style="background:#fafafa">
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Trabajador</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Cargo</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Faena</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Estado</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Vencim. próximo</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Certificaciones</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase"></th>
                </tr></thead>
                <tbody>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:50%;background:#3D62F5;color:#fff;font-size:.46rem;font-weight:800;display:grid;place-items:center;flex-shrink:0">GM</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">González Mario</div><div style="font-size:.48rem;color:#94A3B8">12.345.678-9</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Operador Mina</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Los Pelambres</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Acreditado</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">14 ago 2026<div style="color:#94A3B8;font-size:.46rem">en 57 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px;margin-right:2px">Exam. Altura</span><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Inducción OAS</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:50%;background:#10B981;color:#fff;font-size:.46rem;font-weight:800;display:grid;place-items:center;flex-shrink:0">RJ</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Ruiz José</div><div style="font-size:.48rem;color:#94A3B8">9.876.543-2</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Supervisor</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Los Pelambres</td>
                    <td style="padding:5px 8px"><span style="background:#fef3c7;color:#92400e;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Por vencer</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">30 jun 2026<div style="color:#D97706;font-size:.46rem">en 12 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Lic. Conducir A4</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:50%;background:#F59E0B;color:#fff;font-size:.46rem;font-weight:800;display:grid;place-items:center;flex-shrink:0">MR</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Mora Rodrigo</div><div style="font-size:.48rem;color:#94A3B8">15.222.333-4</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Conductor</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">El Teniente</td>
                    <td style="padding:5px 8px"><span style="background:#fef3c7;color:#92400e;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Por vencer</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">25 jun 2026<div style="color:#D97706;font-size:.46rem">en 7 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Psicosensotéc.</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:50%;background:#EC4899;color:#fff;font-size:.46rem;font-weight:800;display:grid;place-items:center;flex-shrink:0">VC</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Vega Carla</div><div style="font-size:.48rem;color:#94A3B8">17.654.321-0</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Administrativa</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Centinela</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Acreditado</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">10 nov 2026<div style="color:#94A3B8;font-size:.46rem">en 144 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px;margin-right:2px">Inducción SSO</span><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">ODI</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:50%;background:#EF4444;color:#fff;font-size:.46rem;font-weight:800;display:grid;place-items:center;flex-shrink:0">SP</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Soto Patricio</div><div style="font-size:.48rem;color:#94A3B8">13.111.222-5</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Operador Equipo</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Candelaria</td>
                    <td style="padding:5px 8px"><span style="background:#fee2e2;color:#b91c1c;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Vencido</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">14 jun 2026<div style="color:#DC2626;font-size:.46rem">hace 4 días</div></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.46rem">—</td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:50%;background:#8B5CF6;color:#fff;font-size:.46rem;font-weight:800;display:grid;place-items:center;flex-shrink:0">PA</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Pérez Ana</div><div style="font-size:.48rem;color:#94A3B8">16.789.123-6</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Mecánico</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Zaldívar</td>
                    <td style="padding:5px 8px"><span style="background:#fef3c7;color:#92400e;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Por vencer</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">8 jul 2026<div style="color:#D97706;font-size:.46rem">en 20 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Altura Física</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:50%;background:#0EA5E9;color:#fff;font-size:.46rem;font-weight:800;display:grid;place-items:center;flex-shrink:0">FL</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Fernández Luis</div><div style="font-size:.48rem;color:#94A3B8">14.456.789-3</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Operador Mina</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Andina</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Acreditado</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">5 sep 2026<div style="color:#94A3B8;font-size:.46rem">en 78 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Esp. Confinados</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:50%;background:#14B8A6;color:#fff;font-size:.46rem;font-weight:800;display:grid;place-items:center;flex-shrink:0">CD</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Castro Daniela</div><div style="font-size:.48rem;color:#94A3B8">18.234.567-8</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Geóloga</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Caserones</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Acreditado</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">22 oct 2026<div style="color:#94A3B8;font-size:.46rem">en 125 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Inducción Faena</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:50%;background:#EF4444;color:#fff;font-size:.46rem;font-weight:800;display:grid;place-items:center;flex-shrink:0">MC</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Muñoz Cristian</div><div style="font-size:.48rem;color:#94A3B8">11.987.654-1</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Operador Equipo</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Antucoya</td>
                    <td style="padding:5px 8px"><span style="background:#fee2e2;color:#b91c1c;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Vencido</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">17 jun 2026<div style="color:#DC2626;font-size:.46rem">hace 1 día</div></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.46rem">—</td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:50%;background:#6366F1;color:#fff;font-size:.46rem;font-weight:800;display:grid;place-items:center;flex-shrink:0">RV</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Rojas Valentina</div><div style="font-size:.48rem;color:#94A3B8">19.345.678-2</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Téc. Eléctrico</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">P. Eólico Antof. I</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Acreditado</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">18 dic 2026<div style="color:#94A3B8;font-size:.46rem">en 182 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px;margin-right:2px">Trab. Altura</span><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">NR-10</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="padding:8px 9px;display:flex;justify-content:space-between;font-size:.5rem;color:#64748B;background:#fff;border-radius:0 0 10px 10px;margin-top:-1px">
              <span>Mostrando 1 a 10 de 48 trabajadores</span><span style="color:#3D62F5;font-weight:600">10 por página</span>
            </div>
          </div>
          <div class="mock-ai-guide">
            <div class="mock-ai-bubble"><div class="nm"><span class="dot"></span>Sofía · Asistente IA</div><div class="tx"><b>8 trabajadores</b> tienen certificaciones por vencer pronto. ¿Les avisamos?</div></div>
            <div class="mock-ai-avatar"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FDE9D2"/><path d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z" fill="#2448E0"/><path d="M35 95 L50 79 L65 95" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><path d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z" fill="#F2C49B"/><path d="M27 36 C24 47 26 58 33 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M73 36 C76 47 74 58 67 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="41" cy="43" r="2.6" fill="#2A1A10"/><circle cx="59" cy="43" r="2.6" fill="#2A1A10"/><path d="M41 54 Q50 60 59 54" stroke="#9a5236" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z" fill="#f2cda0"/><rect x="19" y="26" width="62" height="6" rx="3" fill="#e0b27c"/></svg></div>
          </div>
        </div>
      </div>
    </div>

    <!-- SCREEN: Equipos / Vehículos -->
    <div id="mock-equipos" class="mock-screen">
      <div class="browser-frame">
        <div class="browser-chrome">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-url">🔒 acredittia.cl · Equipos / Vehículos · 15 unidades</div>
        </div>
        <div class="mock-app" style="background:#080E1C">
          <div class="mock-sidebar" style="background:#0F172A;border-right:1px solid #1E3A5F;gap:2px;padding:14px 10px">
            <div class="mock-logo" style="padding-bottom:14px;border-bottom:1px solid #1E3A5F;margin-bottom:10px"><svg style="width:15px;height:13px" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"/><path d="M50 6 L66 36 L50 44 Z" fill="#fff"/></svg> <span>ACREDIT<span style="color:#38BDF8;margin-left:-.08em">TIA</span></span></div>
            <div style="display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid #1E3A5F;margin-bottom:8px">
              <div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);display:grid;place-items:center;font-size:.6rem;font-weight:700;color:#fff;flex-shrink:0">T</div>
              <div style="font-size:.65rem;font-weight:600;color:#F1F5F9">Tiex SpA</div>
            </div>
            <div class="mock-nav-item">🏠 Inicio</div>
            <div class="mock-nav-item">📋 Contratos</div>
            <div class="mock-nav-item">🏔️ Faenas</div>
            <div class="mock-nav-item">👥 Personal</div>
            <div class="mock-nav-item active" style="background:rgba(61,98,245,.2);color:#fff">🚛 Equipos / Vehículos</div>
            <div class="mock-nav-item">📑 Requisitos</div>
            <div class="mock-nav-item">📊 Reportes</div>
            <div class="mock-nav-item">🔔 Alertas <span style="margin-left:auto;background:#EF4444;color:#fff;font-size:.55rem;padding:1px 5px;border-radius:8px">7</span></div>
            <div class="mock-nav-item">📅 Calendario</div>
            <div class="mock-nav-item">🔌 Integraciones</div>
          </div>
          <div class="mock-main" style="background:#080E1C;padding:16px">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
              <div><div style="font-size:.82rem;font-weight:800;color:#fff;margin-bottom:2px">Equipos / Vehículos</div><div style="font-size:.6rem;color:#64748B">Controla la documentación y vigencia de tu flota y maquinaria en cada faena.</div></div>
              <div style="display:flex;gap:6px;flex-shrink:0">
                <span style="font-size:.56rem;font-weight:700;color:#94A3B8;background:rgba(255,255,255,.05);border:1px solid #1E3A5F;padding:6px 10px;border-radius:7px;white-space:nowrap">↓ Exportar</span>
                <span style="font-size:.56rem;font-weight:700;color:#fff;background:#3D62F5;padding:6px 10px;border-radius:7px;white-space:nowrap">+ Agregar equipo</span>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin-bottom:10px">
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(61,98,245,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">🚛</div>
                <div><div style="font-size:.5rem;color:#64748B">Total equipos</div><div style="font-size:.95rem;font-weight:900;color:#fff">15</div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(16,185,129,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">✅</div>
                <div><div style="font-size:.5rem;color:#64748B">Acreditados</div><div style="font-size:.95rem;font-weight:900;color:#10B981">11<span style="font-size:.5rem;color:#64748B;font-weight:600"> (73%)</span></div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(245,158,11,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">⏳</div>
                <div><div style="font-size:.5rem;color:#64748B">Por vencer</div><div style="font-size:.95rem;font-weight:900;color:#F59E0B">3<span style="font-size:.5rem;color:#64748B;font-weight:600"> (20%)</span></div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(239,68,68,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">❌</div>
                <div><div style="font-size:.5rem;color:#64748B">Vencidos</div><div style="font-size:.95rem;font-weight:900;color:#EF4444">1<span style="font-size:.5rem;color:#64748B;font-weight:600"> (7%)</span></div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(148,163,184,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">📋</div>
                <div><div style="font-size:.5rem;color:#64748B">Sin asignar</div><div style="font-size:.95rem;font-weight:900;color:#fff">0<span style="font-size:.5rem;color:#64748B;font-weight:600"> (0%)</span></div></div>
              </div>
            </div>
            <div style="display:flex;gap:7px;margin-bottom:9px;align-items:center">
              <div style="flex:1;max-width:220px;padding:6px 10px;border-radius:8px;background:#1E293B;border:1px solid #1E3A5F;color:#64748B;font-size:.56rem">🔍 Buscar por patente, ID o modelo...</div>
              <span style="font-size:.54rem;color:#94A3B8;background:#1E293B;border:1px solid #1E3A5F;padding:6px 9px;border-radius:8px">Estado: Todos</span>
              <span style="font-size:.54rem;color:#94A3B8;background:#1E293B;border:1px solid #1E3A5F;padding:6px 9px;border-radius:8px">Faena: Todas</span>
              <span style="font-size:.54rem;color:#94A3B8;background:#1E293B;border:1px solid #1E3A5F;padding:6px 9px;border-radius:8px">Tipo: Todos</span>
            </div>
            <div style="background:#fff;border-radius:10px;overflow:hidden">
              <table style="width:100%;border-collapse:collapse">
                <thead><tr style="background:#fafafa">
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Equipo / Vehículo</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Modelo / Marca</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Faena</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Estado</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Vencim. próximo</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Certificaciones</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase"></th>
                </tr></thead>
                <tbody>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:6px;background:#1E293B;color:#fff;font-size:.5rem;display:grid;place-items:center;flex-shrink:0">🚛</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Camión Tolva</div><div style="font-size:.48rem;color:#94A3B8">LXDY88</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Volvo FH 2021</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Los Pelambres</td>
                    <td style="padding:5px 8px"><span style="background:#fee2e2;color:#b91c1c;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Vencido</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">15 jun 2026<div style="color:#DC2626;font-size:.46rem">hace 3 días</div></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.46rem">—</td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:6px;background:#1E293B;color:#fff;font-size:.5rem;display:grid;place-items:center;flex-shrink:0">🚙</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Camioneta</div><div style="font-size:.48rem;color:#94A3B8">RPDC68</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Toyota Hilux 2022</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Centinela</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Acreditado</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">14 mar 2027<div style="color:#94A3B8;font-size:.46rem">en 269 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px;margin-right:2px">SOAP</span><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Rev. Técnica</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:6px;background:#1E293B;color:#fff;font-size:.5rem;display:grid;place-items:center;flex-shrink:0">🚚</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Camión Aljibe</div><div style="font-size:.48rem;color:#94A3B8">HBCK21</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Mercedes Actros 2020</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Zaldívar</td>
                    <td style="padding:5px 8px"><span style="background:#fef3c7;color:#92400e;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Por vencer</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">26 jun 2026<div style="color:#D97706;font-size:.46rem">en 8 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Rev. Técnica</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:6px;background:#1E293B;color:#fff;font-size:.5rem;display:grid;place-items:center;flex-shrink:0">🏗️</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Excavadora</div><div style="font-size:.48rem;color:#94A3B8">MLP-EXC04</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">CAT 320 2019</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Los Pelambres</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Acreditado</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">30 sep 2026<div style="color:#94A3B8;font-size:.46rem">en 103 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Cert. Operador</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:6px;background:#1E293B;color:#fff;font-size:.5rem;display:grid;place-items:center;flex-shrink:0">🚌</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Bus de Personal</div><div style="font-size:.48rem;color:#94A3B8">TGHC55</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Mercedes O500 2021</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">El Teniente</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Acreditado</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">12 dic 2026<div style="color:#94A3B8;font-size:.46rem">en 176 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Permiso Circul.</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:6px;background:#1E293B;color:#fff;font-size:.5rem;display:grid;place-items:center;flex-shrink:0">🚛</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Camión Pluma</div><div style="font-size:.48rem;color:#94A3B8">FRWZ09</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Hino 500 2020</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Candelaria</td>
                    <td style="padding:5px 8px"><span style="background:#fef3c7;color:#92400e;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Por vencer</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">3 jul 2026<div style="color:#D97706;font-size:.46rem">en 15 días</div></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.46rem">—</td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:6px;background:#1E293B;color:#fff;font-size:.5rem;display:grid;place-items:center;flex-shrink:0">🏗️</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Grúa Horquilla</div><div style="font-size:.48rem;color:#94A3B8">JKLM12</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Komatsu FG25 2018</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Caserones</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Acreditado</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">8 ene 2027<div style="color:#94A3B8;font-size:.46rem">en 203 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Cert. Operador Grúa</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:6px;background:#1E293B;color:#fff;font-size:.5rem;display:grid;place-items:center;flex-shrink:0">🚐</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Furgón</div><div style="font-size:.48rem;color:#94A3B8">QPRT34</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Hyundai H1 2022</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Andina</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Acreditado</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">25 feb 2027<div style="color:#94A3B8;font-size:.46rem">en 251 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">SOAP</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:6px;background:#1E293B;color:#fff;font-size:.5rem;display:grid;place-items:center;flex-shrink:0">🚙</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Camioneta</div><div style="font-size:.48rem;color:#94A3B8">VBNH77</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Ford Ranger 2021</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Antucoya</td>
                    <td style="padding:5px 8px"><span style="background:#fee2e2;color:#b91c1c;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Vencido</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">13 jun 2026<div style="color:#DC2626;font-size:.46rem">hace 6 días</div></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.46rem">—</td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 8px"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;border-radius:6px;background:#1E293B;color:#fff;font-size:.5rem;display:grid;place-items:center;flex-shrink:0">⚡</div><div><div style="font-size:.58rem;color:#1e293b;font-weight:700">Generador</div><div style="font-size:.48rem;color:#94A3B8">WLKX90</div></div></div></td>
                    <td style="padding:5px 8px;font-size:.55rem;color:#475569">Cummins 150kVA</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">P. Eólico Antof. I</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Acreditado</span></td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">19 nov 2026<div style="color:#94A3B8;font-size:.46rem">en 153 días</div></td>
                    <td style="padding:5px 8px"><span style="background:#EEF2FF;color:#3D62F5;font-size:.46rem;font-weight:600;padding:2px 5px;border-radius:5px">Cert. Eléctrico</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⋮</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="padding:8px 9px;display:flex;justify-content:space-between;font-size:.5rem;color:#64748B;background:#fff;border-radius:0 0 10px 10px;margin-top:-1px">
              <span>Mostrando 1 a 10 de 15 equipos</span><span style="color:#3D62F5;font-weight:600">10 por página</span>
            </div>
          </div>
          <div class="mock-ai-guide">
            <div class="mock-ai-bubble"><div class="nm"><span class="dot"></span>Sofía · Asistente IA</div><div class="tx">Detecté <b>1 equipo vencido</b> y 3 por vencer. ¿Te ayudo a renovarlos?</div></div>
            <div class="mock-ai-avatar"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FDE9D2"/><path d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z" fill="#2448E0"/><path d="M35 95 L50 79 L65 95" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><path d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z" fill="#F2C49B"/><path d="M27 36 C24 47 26 58 33 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M73 36 C76 47 74 58 67 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="41" cy="43" r="2.6" fill="#2A1A10"/><circle cx="59" cy="43" r="2.6" fill="#2A1A10"/><path d="M41 54 Q50 60 59 54" stroke="#9a5236" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z" fill="#f2cda0"/><rect x="19" y="26" width="62" height="6" rx="3" fill="#e0b27c"/></svg></div>
          </div>
        </div>
      </div>
    </div>

    <!-- SCREEN: Faenas -->
    <div id="mock-faenas" class="mock-screen">
      <div class="browser-frame">
        <div class="browser-chrome">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-url">🔒 acredittia.cl · Faenas · 9 integradas</div>
        </div>
        <div class="mock-app" style="background:#080E1C">
          <div class="mock-sidebar" style="background:#0F172A;border-right:1px solid #1E3A5F;gap:2px;padding:14px 10px">
            <div class="mock-logo" style="padding-bottom:14px;border-bottom:1px solid #1E3A5F;margin-bottom:10px"><svg style="width:15px;height:13px" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"/><path d="M50 6 L66 36 L50 44 Z" fill="#fff"/></svg> <span>ACREDIT<span style="color:#38BDF8;margin-left:-.08em">TIA</span></span></div>
            <div style="display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid #1E3A5F;margin-bottom:8px">
              <div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);display:grid;place-items:center;font-size:.6rem;font-weight:700;color:#fff;flex-shrink:0">T</div>
              <div style="font-size:.65rem;font-weight:600;color:#F1F5F9">Tiex SpA</div>
            </div>
            <div class="mock-nav-item">🏠 Inicio</div>
            <div class="mock-nav-item">📋 Contratos</div>
            <div class="mock-nav-item active" style="background:rgba(61,98,245,.2);color:#fff">🏔️ Faenas</div>
            <div class="mock-nav-item">👥 Personal</div>
            <div class="mock-nav-item">🚛 Equipos / Vehículos</div>
            <div class="mock-nav-item">📑 Requisitos</div>
            <div class="mock-nav-item">📊 Reportes</div>
            <div class="mock-nav-item">🔔 Alertas <span style="margin-left:auto;background:#EF4444;color:#fff;font-size:.55rem;padding:1px 5px;border-radius:8px">7</span></div>
            <div class="mock-nav-item">📅 Calendario</div>
            <div class="mock-nav-item">🔌 Integraciones</div>
          </div>
          <div class="mock-main" style="background:#080E1C;padding:16px">
            <div style="font-size:.82rem;font-weight:800;color:#fff;margin-bottom:2px">Faenas</div>
            <div style="font-size:.6rem;color:#64748B;margin-bottom:12px">Todas las faenas donde tu empresa tiene contratos activos, con visibilidad por plataforma.</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:9px">
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:11px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span style="font-size:.7rem;font-weight:700;color:#F1F5F9">Los Pelambres</span><span style="font-size:.5rem;background:rgba(56,189,248,.15);color:#38BDF8;font-weight:700;padding:1px 6px;border-radius:6px">SIGA</span></div>
                <div style="font-size:.56rem;color:#64748B;margin-bottom:8px">AMSA · Región de Coquimbo</div>
                <div style="height:5px;background:#1E3A5F;border-radius:5px;overflow:hidden;margin-bottom:5px"><div style="height:100%;width:74%;background:#10B981"></div></div>
                <div style="display:flex;justify-content:space-between;font-size:.55rem;color:#64748B"><span>1 contrato activo</span><span style="color:#10B981;font-weight:700">74%</span></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:11px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span style="font-size:.7rem;font-weight:700;color:#F1F5F9">Centinela</span><span style="font-size:.5rem;background:rgba(56,189,248,.15);color:#38BDF8;font-weight:700;padding:1px 6px;border-radius:6px">SIGA</span></div>
                <div style="font-size:.56rem;color:#64748B;margin-bottom:8px">AMSA · Región de Antofagasta</div>
                <div style="height:5px;background:#1E3A5F;border-radius:5px;overflow:hidden;margin-bottom:5px"><div style="height:100%;width:91%;background:#10B981"></div></div>
                <div style="display:flex;justify-content:space-between;font-size:.55rem;color:#64748B"><span>1 contrato activo</span><span style="color:#10B981;font-weight:700">91%</span></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:11px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span style="font-size:.7rem;font-weight:700;color:#F1F5F9">El Teniente</span><span style="font-size:.5rem;background:rgba(167,139,250,.18);color:#A78BFA;font-weight:700;padding:1px 6px;border-radius:6px">SUCALC</span></div>
                <div style="font-size:.56rem;color:#64748B;margin-bottom:8px">Codelco · Región de O'Higgins</div>
                <div style="height:5px;background:#1E3A5F;border-radius:5px;overflow:hidden;margin-bottom:5px"><div style="height:100%;width:83%;background:#10B981"></div></div>
                <div style="display:flex;justify-content:space-between;font-size:.55rem;color:#64748B"><span>1 contrato activo</span><span style="color:#10B981;font-weight:700">83%</span></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:11px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span style="font-size:.7rem;font-weight:700;color:#F1F5F9">Candelaria</span><span style="font-size:.5rem;background:rgba(245,158,11,.15);color:#F59E0B;font-weight:700;padding:1px 6px;border-radius:6px">WEBCONTROL</span></div>
                <div style="font-size:.56rem;color:#64748B;margin-bottom:8px">Lundin Mining · Región de Atacama</div>
                <div style="height:5px;background:#1E3A5F;border-radius:5px;overflow:hidden;margin-bottom:5px"><div style="height:100%;width:42%;background:#EF4444"></div></div>
                <div style="display:flex;justify-content:space-between;font-size:.55rem;color:#64748B"><span>1 contrato activo</span><span style="color:#EF4444;font-weight:700">42%</span></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:11px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span style="font-size:.7rem;font-weight:700;color:#F1F5F9">Zaldívar</span><span style="font-size:.5rem;background:rgba(56,189,248,.15);color:#38BDF8;font-weight:700;padding:1px 6px;border-radius:6px">SIGA</span></div>
                <div style="font-size:.56rem;color:#64748B;margin-bottom:8px">AMSA · Región de Antofagasta</div>
                <div style="height:5px;background:#1E3A5F;border-radius:5px;overflow:hidden;margin-bottom:5px"><div style="height:100%;width:67%;background:#F59E0B"></div></div>
                <div style="display:flex;justify-content:space-between;font-size:.55rem;color:#64748B"><span>1 contrato activo</span><span style="color:#F59E0B;font-weight:700">67%</span></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:11px;display:flex;align-items:center;justify-content:center;text-align:center">
                <div><div style="font-size:.62rem;color:#38BDF8;font-weight:700;margin-bottom:3px">+ 4 faenas más</div><div style="font-size:.54rem;color:#64748B">Antucoya, Caserones, Andina, P. Eólico Antofagasta I</div></div>
              </div>
            </div>
          </div>
          <div class="mock-ai-guide">
            <div class="mock-ai-bubble"><div class="nm"><span class="dot"></span>Sofía · Asistente IA</div><div class="tx">Candelaria tiene el cumplimiento más bajo (<b>42%</b>). ¿Vemos qué falta?</div></div>
            <div class="mock-ai-avatar"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FDE9D2"/><path d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z" fill="#2448E0"/><path d="M35 95 L50 79 L65 95" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><path d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z" fill="#F2C49B"/><path d="M27 36 C24 47 26 58 33 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M73 36 C76 47 74 58 67 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="41" cy="43" r="2.6" fill="#2A1A10"/><circle cx="59" cy="43" r="2.6" fill="#2A1A10"/><path d="M41 54 Q50 60 59 54" stroke="#9a5236" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z" fill="#f2cda0"/><rect x="19" y="26" width="62" height="6" rx="3" fill="#e0b27c"/></svg></div>
          </div>
        </div>
      </div>
    </div>

    <!-- SCREEN: Reportes -->
    <div id="mock-reportes" class="mock-screen">
      <div class="browser-frame">
        <div class="browser-chrome">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-url">🔒 acredittia.cl · Reportes</div>
        </div>
        <div class="mock-app" style="background:#080E1C">
          <div class="mock-sidebar" style="background:#0F172A;border-right:1px solid #1E3A5F;gap:2px;padding:14px 10px">
            <div class="mock-logo" style="padding-bottom:14px;border-bottom:1px solid #1E3A5F;margin-bottom:10px"><svg style="width:15px;height:13px" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"/><path d="M50 6 L66 36 L50 44 Z" fill="#fff"/></svg> <span>ACREDIT<span style="color:#38BDF8;margin-left:-.08em">TIA</span></span></div>
            <div style="display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid #1E3A5F;margin-bottom:8px">
              <div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);display:grid;place-items:center;font-size:.6rem;font-weight:700;color:#fff;flex-shrink:0">T</div>
              <div style="font-size:.65rem;font-weight:600;color:#F1F5F9">Tiex SpA</div>
            </div>
            <div class="mock-nav-item">🏠 Inicio</div>
            <div class="mock-nav-item">📋 Contratos</div>
            <div class="mock-nav-item">🏔️ Faenas</div>
            <div class="mock-nav-item">👥 Personal</div>
            <div class="mock-nav-item">🚛 Equipos / Vehículos</div>
            <div class="mock-nav-item">📑 Requisitos</div>
            <div class="mock-nav-item active" style="background:rgba(61,98,245,.2);color:#fff">📊 Reportes</div>
            <div class="mock-nav-item">🔔 Alertas <span style="margin-left:auto;background:#EF4444;color:#fff;font-size:.55rem;padding:1px 5px;border-radius:8px">7</span></div>
            <div class="mock-nav-item">📅 Calendario</div>
            <div class="mock-nav-item">🔌 Integraciones</div>
          </div>
          <div class="mock-main" style="background:#080E1C;padding:16px">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
              <div><div style="font-size:.82rem;font-weight:800;color:#fff;margin-bottom:2px">Reportes</div><div style="font-size:.6rem;color:#64748B">Análisis del estado de acreditación de tu empresa en contratos, faenas, personal y equipos.</div></div>
              <span style="font-size:.58rem;font-weight:700;color:#fff;background:#3D62F5;padding:6px 11px;border-radius:8px;white-space:nowrap">⬇ Exportar PDF</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:10px">
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(61,98,245,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">📊</div>
                <div><div style="font-size:.5rem;color:#64748B">Reportes generados</div><div style="font-size:.95rem;font-weight:900;color:#fff">28<span style="font-size:.5rem;color:#10B981;font-weight:600"> ↑12%</span></div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(139,92,246,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">🔁</div>
                <div><div style="font-size:.5rem;color:#64748B">Programados activos</div><div style="font-size:.95rem;font-weight:900;color:#fff">6</div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(16,185,129,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">✅</div>
                <div><div style="font-size:.5rem;color:#64748B">Cobertura acreditación</div><div style="font-size:.95rem;font-weight:900;color:#10B981">76%</div></div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:9px;display:flex;align-items:center;gap:7px">
                <div style="width:30px;height:30px;border-radius:8px;background:rgba(239,68,68,.15);display:grid;place-items:center;font-size:.75rem;flex-shrink:0">⚠️</div>
                <div><div style="font-size:.5rem;color:#64748B">Hallazgos críticos</div><div style="font-size:.95rem;font-weight:900;color:#EF4444">10</div></div>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1.3fr 1fr;gap:10px;margin-bottom:10px">
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:12px">
                <div style="font-size:.62rem;font-weight:700;color:#F1F5F9;margin-bottom:10px">Cumplimiento por faena</div>
                <div style="display:flex;align-items:flex-end;gap:8px;height:74px">
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;height:74%;background:linear-gradient(180deg,#6B8FFF,#3D62F5);border-radius:4px 4px 0 0"></div><span style="font-size:.44rem;color:#64748B">Pelambres</span></div>
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;height:91%;background:linear-gradient(180deg,#6B8FFF,#3D62F5);border-radius:4px 4px 0 0"></div><span style="font-size:.44rem;color:#64748B">Centinela</span></div>
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;height:42%;background:linear-gradient(180deg,#F87171,#EF4444);border-radius:4px 4px 0 0"></div><span style="font-size:.44rem;color:#64748B">Candelaria</span></div>
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;height:83%;background:linear-gradient(180deg,#6B8FFF,#3D62F5);border-radius:4px 4px 0 0"></div><span style="font-size:.44rem;color:#64748B">El Teniente</span></div>
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;height:67%;background:linear-gradient(180deg,#FCD34D,#F59E0B);border-radius:4px 4px 0 0"></div><span style="font-size:.44rem;color:#64748B">Zaldívar</span></div>
                </div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:12px">
                <div style="font-size:.62rem;font-weight:700;color:#F1F5F9;margin-bottom:8px">Estado general de documentos</div>
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
                  <svg width="50" height="50" viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="4"/><circle cx="16" cy="16" r="13" fill="none" stroke="#10B981" stroke-width="4" stroke-dasharray="59 23" stroke-linecap="round" transform="rotate(-90 16 16)"/></svg>
                  <div><div style="font-size:.85rem;font-weight:900;color:#10B981">76%</div><div style="font-size:.5rem;color:#64748B">cumplimiento global</div></div>
                </div>
                <div style="font-size:.54rem;color:#64748B;display:flex;justify-content:space-between;margin-bottom:2px"><span>✅ Vigentes</span><span style="color:#F1F5F9;font-weight:700">112</span></div>
                <div style="font-size:.54rem;color:#64748B;display:flex;justify-content:space-between;margin-bottom:2px"><span>⏰ Por vencer</span><span style="color:#F1F5F9;font-weight:700">18</span></div>
                <div style="font-size:.54rem;color:#64748B;display:flex;justify-content:space-between"><span>⛔ Vencidos</span><span style="color:#F1F5F9;font-weight:700">10</span></div>
              </div>
            </div>
            <div style="font-size:.62rem;font-weight:700;color:#F1F5F9;margin-bottom:7px">Reportes disponibles</div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px">
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:10px">
                <div style="width:24px;height:24px;border-radius:7px;background:rgba(61,98,245,.15);display:grid;place-items:center;font-size:.7rem;margin-bottom:6px">📑</div>
                <div style="font-size:.56rem;font-weight:700;color:#F1F5F9;margin-bottom:2px">Estado de acreditación</div>
                <div style="font-size:.46rem;color:#64748B;margin-bottom:8px;line-height:1.3">Resumen global por contrato y faena.</div>
                <div style="font-size:.5rem;font-weight:700;color:#fff;background:#3D62F5;text-align:center;padding:5px;border-radius:6px">Generar reporte</div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:10px">
                <div style="width:24px;height:24px;border-radius:7px;background:rgba(16,185,129,.15);display:grid;place-items:center;font-size:.7rem;margin-bottom:6px">✅</div>
                <div style="font-size:.56rem;font-weight:700;color:#F1F5F9;margin-bottom:2px">Cumplimiento de requisitos</div>
                <div style="font-size:.46rem;color:#64748B;margin-bottom:8px;line-height:1.3">Detalle de requisitos por faena.</div>
                <div style="font-size:.5rem;font-weight:700;color:#fff;background:#3D62F5;text-align:center;padding:5px;border-radius:6px">Generar reporte</div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:10px">
                <div style="width:24px;height:24px;border-radius:7px;background:rgba(139,92,246,.15);display:grid;place-items:center;font-size:.7rem;margin-bottom:6px">👥</div>
                <div style="font-size:.56rem;font-weight:700;color:#F1F5F9;margin-bottom:2px">Personal acreditado</div>
                <div style="font-size:.46rem;color:#64748B;margin-bottom:8px;line-height:1.3">Listado de trabajadores y vigencias.</div>
                <div style="font-size:.5rem;font-weight:700;color:#fff;background:#3D62F5;text-align:center;padding:5px;border-radius:6px">Generar reporte</div>
              </div>
              <div style="background:#1E293B;border:1px solid #1E3A5F;border-radius:10px;padding:10px">
                <div style="width:24px;height:24px;border-radius:7px;background:rgba(245,158,11,.15);display:grid;place-items:center;font-size:.7rem;margin-bottom:6px">⏰</div>
                <div style="font-size:.56rem;font-weight:700;color:#F1F5F9;margin-bottom:2px">Vencimientos</div>
                <div style="font-size:.46rem;color:#64748B;margin-bottom:8px;line-height:1.3">Documentos próximos a vencer.</div>
                <div style="font-size:.5rem;font-weight:700;color:#fff;background:#3D62F5;text-align:center;padding:5px;border-radius:6px">Generar reporte</div>
              </div>
            </div>
            <div style="font-size:.62rem;font-weight:700;color:#F1F5F9;margin-bottom:7px">Mis reportes recientes</div>
            <div style="background:#fff;border-radius:10px;overflow:hidden">
              <table style="width:100%;border-collapse:collapse">
                <thead><tr style="background:#fafafa">
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Nombre del reporte</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Ámbito</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Generado por</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Fecha</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Formato</th>
                  <th style="text-align:left;font-size:.5rem;color:#64748B;font-weight:700;padding:6px 8px;border-bottom:1px solid #E2E8F0;text-transform:uppercase"></th>
                </tr></thead>
                <tbody>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px;font-size:.56rem;color:#1e293b;font-weight:700">📑 Estado de acreditación — Junio 2026</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Todas las faenas</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Gonzalo Vera</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">18 jun 2026</td>
                    <td style="padding:5px 8px"><span style="background:#fee2e2;color:#b91c1c;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">PDF</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⬇</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px;font-size:.56rem;color:#1e293b;font-weight:700">✅ Cumplimiento de requisitos — Los Pelambres</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Los Pelambres</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Gonzalo Vera</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">15 jun 2026</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Excel</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⬇</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px;font-size:.56rem;color:#1e293b;font-weight:700">👥 Personal acreditado — Mayo 2026</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Todas las faenas</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">M. Salinas</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">2 jun 2026</td>
                    <td style="padding:5px 8px"><span style="background:#fee2e2;color:#b91c1c;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">PDF</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⬇</td>
                  </tr>
                  <tr style="border-bottom:1px solid #F1F5F9">
                    <td style="padding:5px 8px;font-size:.56rem;color:#1e293b;font-weight:700">⏰ Vencimientos — próximos 30 días</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Candelaria, Zaldívar</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Gonzalo Vera</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">28 may 2026</td>
                    <td style="padding:5px 8px"><span style="background:#dcfce7;color:#166534;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">Excel</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⬇</td>
                  </tr>
                  <tr>
                    <td style="padding:5px 8px;font-size:.56rem;color:#1e293b;font-weight:700">🚛 Equipos y vehículos — Q2 2026</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">Todas las faenas</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">M. Salinas</td>
                    <td style="padding:5px 8px;font-size:.53rem;color:#475569">20 may 2026</td>
                    <td style="padding:5px 8px"><span style="background:#fee2e2;color:#b91c1c;font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:6px">PDF</span></td>
                    <td style="padding:5px 8px;color:#94A3B8;font-size:.6rem">⬇</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="mock-ai-guide">
            <div class="mock-ai-bubble"><div class="nm"><span class="dot"></span>Sofía · Asistente IA</div><div class="tx">¿Generamos el reporte mensual de cumplimiento ahora?</div></div>
            <div class="mock-ai-avatar"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FDE9D2"/><path d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z" fill="#2448E0"/><path d="M35 95 L50 79 L65 95" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><path d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z" fill="#F2C49B"/><path d="M27 36 C24 47 26 58 33 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M73 36 C76 47 74 58 67 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="41" cy="43" r="2.6" fill="#2A1A10"/><circle cx="59" cy="43" r="2.6" fill="#2A1A10"/><path d="M41 54 Q50 60 59 54" stroke="#9a5236" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z" fill="#f2cda0"/><rect x="19" y="26" width="62" height="6" rx="3" fill="#e0b27c"/></svg></div>
          </div>
        </div>
      </div>
    </div>

    <!-- SCREEN 3: Alertas IA -->
    <div id="mock-alertas" class="mock-screen">
      <div class="browser-frame">
        <div class="browser-chrome">
          <div class="browser-dots"><span></span><span></span><span></span></div>
          <div class="browser-url">🔒 acredittia.cl · Alertas · 10 activas</div>
        </div>
        <div class="mock-app" style="background:#080E1C">
          <div class="mock-sidebar" style="background:#0F172A;border-right:1px solid #1E3A5F;gap:2px;padding:14px 10px">
            <div class="mock-logo" style="padding-bottom:14px;border-bottom:1px solid #1E3A5F;margin-bottom:10px"><svg style="width:15px;height:13px" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"/><path d="M50 6 L66 36 L50 44 Z" fill="#fff"/></svg> <span>ACREDIT<span style="color:#38BDF8;margin-left:-.08em">TIA</span></span></div>
            <div style="display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid #1E3A5F;margin-bottom:8px">
              <div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);display:grid;place-items:center;font-size:.6rem;font-weight:700;color:#fff;flex-shrink:0">T</div>
              <div style="font-size:.65rem;font-weight:600;color:#F1F5F9">Tiex SpA</div>
            </div>
            <div class="mock-nav-item">🏠 Inicio</div>
            <div class="mock-nav-item">📋 Contratos</div>
            <div class="mock-nav-item">🏔️ Faenas</div>
            <div class="mock-nav-item">👥 Personal</div>
            <div class="mock-nav-item">🚛 Equipos / Vehículos</div>
            <div class="mock-nav-item">📑 Requisitos</div>
            <div class="mock-nav-item">📊 Reportes</div>
            <div class="mock-nav-item active" style="background:rgba(61,98,245,.2);color:#fff">🔔 Alertas <span style="margin-left:auto;background:#EF4444;color:#fff;font-size:.55rem;padding:1px 5px;border-radius:8px">7</span></div>
            <div class="mock-nav-item">📅 Calendario</div>
            <div class="mock-nav-item">🔌 Integraciones</div>
          </div>
          <div class="mock-main" style="background:#080E1C;padding:16px">
            <div style="font-size:.82rem;font-weight:800;color:#fff;margin-bottom:2px">Alertas</div>
            <div style="font-size:.6rem;color:#64748B;margin-bottom:12px">Supervisa y gestiona las alertas críticas que requieren atención.</div>
            <!-- KPI row -->
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:12px">
              <div style="background:#fee2e2;border-radius:9px;padding:9px;display:flex;align-items:center;gap:7px">
                <span style="font-size:.9rem">🔴</span>
                <div><div style="font-size:.55rem;font-weight:700;color:#b91c1c">Críticas</div><div style="font-size:.95rem;font-weight:900;color:#b91c1c">3</div><div style="font-size:.48rem;color:#b91c1c">requieren atención</div></div>
              </div>
              <div style="background:#fef3c7;border-radius:9px;padding:9px;display:flex;align-items:center;gap:7px">
                <span style="font-size:.9rem">⚠️</span>
                <div><div style="font-size:.55rem;font-weight:700;color:#92400e">Advertencias</div><div style="font-size:.95rem;font-weight:900;color:#92400e">4</div><div style="font-size:.48rem;color:#92400e">requieren atención</div></div>
              </div>
              <div style="background:#dbeafe;border-radius:9px;padding:9px;display:flex;align-items:center;gap:7px">
                <span style="font-size:.9rem">ℹ️</span>
                <div><div style="font-size:.55rem;font-weight:700;color:#1e40af">Informativas</div><div style="font-size:.95rem;font-weight:900;color:#1e40af">3</div><div style="font-size:.48rem;color:#1e40af">nuevas</div></div>
              </div>
              <div style="background:#dcfce7;border-radius:9px;padding:9px;display:flex;align-items:center;gap:7px">
                <span style="font-size:.9rem">✅</span>
                <div><div style="font-size:.55rem;font-weight:700;color:#166534">Resueltas</div><div style="font-size:.95rem;font-weight:900;color:#166534">24</div><div style="font-size:.48rem;color:#166534">últimos 30 días</div></div>
              </div>
            </div>
            <!-- alert tabs -->
            <div style="display:flex;gap:2px;background:#1E293B;border:1px solid #1E3A5F;border-radius:8px;padding:3px;width:fit-content;margin-bottom:10px">
              <span style="padding:4px 10px;background:#38BDF8;color:#fff;border-radius:6px;font-size:.6rem;font-weight:700">Todas</span>
              <span style="padding:4px 10px;color:#64748B;font-size:.6rem;font-weight:600">Críticas <span style="background:#fee2e2;color:#b91c1c;font-size:.5rem;border-radius:5px;padding:1px 4px">3</span></span>
              <span style="padding:4px 10px;color:#64748B;font-size:.6rem;font-weight:600">Advertencias</span>
              <span style="padding:4px 10px;color:#64748B;font-size:.6rem;font-weight:600">Resueltas</span>
            </div>
            <!-- alerts table (mini) -->
            <div style="background:#fff;border-radius:10px;overflow:hidden">
              <table style="width:100%;border-collapse:collapse">
                <thead><tr style="background:#fafafa">
                  <th style="text-align:left;font-size:.52rem;color:#64748B;font-weight:700;padding:6px 9px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Prioridad</th>
                  <th style="text-align:left;font-size:.52rem;color:#64748B;font-weight:700;padding:6px 9px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Alerta</th>
                  <th style="text-align:left;font-size:.52rem;color:#64748B;font-weight:700;padding:6px 9px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Relacionado con</th>
                  <th style="text-align:left;font-size:.52rem;color:#64748B;font-weight:700;padding:6px 9px;border-bottom:1px solid #E2E8F0;text-transform:uppercase">Estado</th>
                </tr></thead>
                <tbody>
                  <tr><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="font-size:.58rem;font-weight:700;color:#b91c1c">⊗ Crítica</span></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.6rem;color:#1e293b;font-weight:600">Vencimiento: Rev. técnica<div style="font-weight:400;color:#64748B;font-size:.53rem">Tracto LXDY88 · hace 3 días</div></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.58rem;color:#64748B">Collahuasi / CT-7821</td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="background:#fee2e2;color:#b91c1c;font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:6px">No leída</span></td></tr>
                  <tr><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="font-size:.58rem;font-weight:700;color:#b91c1c">⊗ Crítica</span></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.6rem;color:#1e293b;font-weight:600">Seguro accidentes vencido<div style="font-weight:400;color:#64748B;font-size:.53rem">Empresa · hace 1 día</div></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.58rem;color:#64748B">Candelaria / CT-5501</td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="background:#fee2e2;color:#b91c1c;font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:6px">No leída</span></td></tr>
                  <tr><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="font-size:.58rem;font-weight:700;color:#b91c1c">⊗ Crítica</span></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.6rem;color:#1e293b;font-weight:600">Cert. OTIC vencido en SIGA<div style="font-weight:400;color:#64748B;font-size:.53rem">González Mario · hace 5 días</div></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.58rem;color:#64748B">Los Pelambres / CT-45641</td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="background:#fee2e2;color:#b91c1c;font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:6px">No leída</span></td></tr>
                  <tr><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="font-size:.58rem;font-weight:700;color:#92400e">⚠ Advertencia</span></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.6rem;color:#1e293b;font-weight:600">Por vencer: F30-1<div style="font-weight:400;color:#64748B;font-size:.53rem">Vence en 8 días</div></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.58rem;color:#64748B">Centinela / CT-002</td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="background:#fef3c7;color:#92400e;font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:6px">No leída</span></td></tr>
                  <tr><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="font-size:.58rem;font-weight:700;color:#92400e">⚠ Advertencia</span></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.6rem;color:#1e293b;font-weight:600">Examen altura por vencer<div style="font-weight:400;color:#64748B;font-size:.53rem">Ruiz José · en 12 días</div></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.58rem;color:#64748B">Los Pelambres / CT-45641</td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="background:#fef3c7;color:#92400e;font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:6px">No leída</span></td></tr>
                  <tr><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="font-size:.58rem;font-weight:700;color:#92400e">⚠ Advertencia</span></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.6rem;color:#1e293b;font-weight:600">Licencia conducir B por vencer<div style="font-weight:400;color:#64748B;font-size:.53rem">Mora Rodrigo · en 18 días</div></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.58rem;color:#64748B">El Teniente / CT-9102</td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="background:#fef3c7;color:#92400e;font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:6px">No leída</span></td></tr>
                  <tr><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="font-size:.58rem;font-weight:700;color:#92400e">⚠ Advertencia</span></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.6rem;color:#1e293b;font-weight:600">Permiso de circulación vence pronto<div style="font-weight:400;color:#64748B;font-size:.53rem">Camión HBCK21 · en 22 días</div></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.58rem;color:#64748B">Zaldívar / CT-3310</td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="background:#fef3c7;color:#92400e;font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:6px">No leída</span></td></tr>
                  <tr><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="font-size:.58rem;font-weight:700;color:#1e40af">ℹ Informativa</span></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.6rem;color:#1e293b;font-weight:600">IA: Antigüedad excedida<div style="font-weight:400;color:#64748B;font-size:.53rem">RPDC68 · 17 años vs máx 15</div></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.58rem;color:#64748B">Centinela / CT-002</td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="background:#f1f5f9;color:#64748b;font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:6px">Leída</span></td></tr>
                  <tr><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="font-size:.58rem;font-weight:700;color:#1e40af">ℹ Informativa</span></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.6rem;color:#1e293b;font-weight:600">IA: Firma ausente en contrato<div style="font-weight:400;color:#64748B;font-size:.53rem">Contrato CT-7821 — página 3</div></td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9;font-size:.58rem;color:#64748B">Collahuasi / CT-7821</td><td style="padding:5px 9px;border-bottom:1px solid #F1F5F9"><span style="background:#f1f5f9;color:#64748b;font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:6px">Leída</span></td></tr>
                  <tr><td style="padding:5px 9px"><span style="font-size:.58rem;font-weight:700;color:#1e40af">ℹ Informativa</span></td><td style="padding:5px 9px;font-size:.6rem;color:#1e293b;font-weight:600">Nuevo req. publicado en WORKMATE<div style="font-weight:400;color:#64748B;font-size:.53rem">Los Pelambres actualizó requisitos</div></td><td style="padding:5px 9px;font-size:.58rem;color:#64748B">Los Pelambres / CT-45641</td><td style="padding:5px 9px"><span style="background:#f1f5f9;color:#64748b;font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:6px">Leída</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="mock-ai-guide">
            <div class="mock-ai-bubble"><div class="nm"><span class="dot"></span>Sofía · Asistente IA</div><div class="tx">Tienes <b>3 alertas críticas</b> sin leer. ¿Te ayudo a resolverlas?</div></div>
            <div class="mock-ai-avatar"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FDE9D2"/><path d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z" fill="#2448E0"/><path d="M35 95 L50 79 L65 95" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><path d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z" fill="#F2C49B"/><path d="M27 36 C24 47 26 58 33 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M73 36 C76 47 74 58 67 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="41" cy="43" r="2.6" fill="#2A1A10"/><circle cx="59" cy="43" r="2.6" fill="#2A1A10"/><path d="M41 54 Q50 60 59 54" stroke="#9a5236" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z" fill="#f2cda0"/><rect x="19" y="26" width="62" height="6" rx="3" fill="#e0b27c"/></svg></div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- FAENAS SCROLL SECTION (YC-style) -->
  <section style="background:#fff;padding:90px 6% 100px">
    <div style="max-width:1180px;margin:0 auto">
      <div style="text-align:center;margin-bottom:56px">
        <span class="sec-label">DÓNDE TRABAJAMOS</span>
        <h2 style="font-size:2.2rem;font-weight:900;color:var(--azul);margin:16px 0 12px">Faenas 100% integradas. Un solo lugar para acreditar.</h2>
        <p style="color:var(--gris);font-size:1rem;max-width:680px;margin:0 auto">En estas 9 faenas ya tenemos el flujo y las plataformas completamente mapeados: integración directa, sin pasos manuales. ¿Tu faena no está? También se puede integrar: nuestra IA lee los manuales y reglamentos, y tú mismo puedes ir agregando los requisitos específicos de cualquier otra faena.</p>
      </div>

      <div class="fsc-grid" id="fsc-grid">
        <!-- LEFT: scrolling list -->
        <div class="fsc-list" id="fsc-list">
          <div class="fsc-item active" data-faena="flp"><div class="fsc-item-name"><span class="fsc-dot"></span>Los Pelambres</div><div class="fsc-item-region">Antofagasta Minerals · Región de Coquimbo</div></div>
          <div class="fsc-item" data-faena="fcen"><div class="fsc-item-name"><span class="fsc-dot"></span>Centinela</div><div class="fsc-item-region">Antofagasta Minerals · Región de Antofagasta</div></div>
          <div class="fsc-item" data-faena="fant"><div class="fsc-item-name"><span class="fsc-dot"></span>Antucoya</div><div class="fsc-item-region">Antofagasta Minerals · Región de Antofagasta</div></div>
          <div class="fsc-item" data-faena="fzal"><div class="fsc-item-name"><span class="fsc-dot"></span>Zaldívar</div><div class="fsc-item-region">Antofagasta Minerals · Región de Antofagasta</div></div>
          <div class="fsc-item" data-faena="fcan"><div class="fsc-item-name"><span class="fsc-dot"></span>Candelaria</div><div class="fsc-item-region">Lundin Mining · Región de Atacama</div></div>
          <div class="fsc-item" data-faena="fcas"><div class="fsc-item-name"><span class="fsc-dot"></span>Caserones</div><div class="fsc-item-region">Lundin Mining · Región de Atacama</div></div>
          <div class="fsc-item" data-faena="ften"><div class="fsc-item-name"><span class="fsc-dot"></span>El Teniente</div><div class="fsc-item-region">Codelco · Región de O'Higgins</div></div>
          <div class="fsc-item" data-faena="fand"><div class="fsc-item-name"><span class="fsc-dot"></span>Andina</div><div class="fsc-item-region">Codelco · Región de Valparaíso</div></div>
          <div class="fsc-item" data-faena="feol"><div class="fsc-item-name"><span class="fsc-dot"></span>Parque Eólico Antofagasta I</div><div class="fsc-item-region">Energía renovable · Región de Antofagasta</div></div>
        </div>

        <!-- RIGHT: sticky visual -->
        <div class="fsc-sticky">
          <div class="fsc-visual-wrap" id="fsc-visual">
            <div class="fsc-card active" data-faena="flp" style="background:linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url('/los_pelambres.jpeg') center/cover no-repeat">
              <div class="fsc-card-top"><div class="fsc-card-badge"><img src="/logo_amsa.png" alt="AMSA"><span>AMSA</span></div><span class="fsc-card-tag">SIGA</span></div>
              <div class="fsc-card-bottom"><h3>Los Pelambres</h3><p>Región de Coquimbo — una de las minas de cobre más grandes de Chile.</p></div>
            </div>
            <div class="fsc-card" data-faena="fcen" style="background:linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url('/centinela.jpg') center/cover no-repeat">
              <div class="fsc-card-top"><div class="fsc-card-badge"><img src="/logo_amsa.png" alt="AMSA"><span>AMSA</span></div><span class="fsc-card-tag">SIGA</span></div>
              <div class="fsc-card-bottom"><h3>Centinela</h3><p>Región de Antofagasta — operación de cobre y oro a gran escala.</p></div>
            </div>
            <div class="fsc-card" data-faena="fant" style="background:linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url('/antucoya.jpg') center/cover no-repeat">
              <div class="fsc-card-top"><div class="fsc-card-badge"><img src="/logo_amsa.png" alt="AMSA"><span>AMSA</span></div><span class="fsc-card-tag">SIGA</span></div>
              <div class="fsc-card-bottom"><h3>Antucoya</h3><p>Región de Antofagasta — yacimiento de cobre de baja ley con lixiviación.</p></div>
            </div>
            <div class="fsc-card" data-faena="fzal" style="background:linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url('/zaldivar.png') center/cover no-repeat">
              <div class="fsc-card-top"><div class="fsc-card-badge"><img src="/logo_amsa.png" alt="AMSA"><span>AMSA</span></div><span class="fsc-card-tag">SIGA</span></div>
              <div class="fsc-card-bottom"><h3>Zaldívar</h3><p>Región de Antofagasta — mina de cobre operada en conjunto con Barrick.</p></div>
            </div>
            <div class="fsc-card" data-faena="fcan" style="background:linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url('/candelaria.jpg') center/cover no-repeat">
              <div class="fsc-card-top"><div class="fsc-card-badge"><img src="/logo_lundinmining_icon.png" alt="Lundin Mining"><span>LUNDIN MINING</span></div><span class="fsc-card-tag">WEBCONTROL</span></div>
              <div class="fsc-card-bottom"><h3>Candelaria</h3><p>Región de Atacama — operación de cobre subterránea y a rajo abierto.</p></div>
            </div>
            <div class="fsc-card" data-faena="fcas" style="background:linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url('/caserones.jpeg') center/cover no-repeat">
              <div class="fsc-card-top"><div class="fsc-card-badge"><img src="/logo_lundinmining_icon.png" alt="Lundin Mining"><span>LUNDIN MINING</span></div><span class="fsc-card-tag">WEBCONTROL</span></div>
              <div class="fsc-card-bottom"><h3>Caserones</h3><p>Región de Atacama — yacimiento de cobre y molibdeno.</p></div>
            </div>
            <div class="fsc-card" data-faena="ften" style="background:linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url('/el_teniente.jpg') center/cover no-repeat">
              <div class="fsc-card-top"><div class="fsc-card-badge"><img src="/logo_codelco.webp" alt="Codelco"><span>CODELCO</span></div><span class="fsc-card-tag">SUCALC</span></div>
              <div class="fsc-card-bottom"><h3>El Teniente</h3><p>Región de O'Higgins — la mina subterránea de cobre más grande del mundo.</p></div>
            </div>
            <div class="fsc-card" data-faena="fand" style="background:linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url('/andina.jpg') center/cover no-repeat">
              <div class="fsc-card-top"><div class="fsc-card-badge"><img src="/logo_codelco.webp" alt="Codelco"><span>CODELCO</span></div><span class="fsc-card-tag">SUCALC</span></div>
              <div class="fsc-card-bottom"><h3>Andina</h3><p>Región de Valparaíso — una de las operaciones de cobre más altas del mundo.</p></div>
            </div>
            <div class="fsc-card" data-faena="feol" style="background:linear-gradient(180deg,rgba(11,22,40,.05) 0%,rgba(11,22,40,.92) 100%),url('/antofagastaI.jpg') center/cover no-repeat">
              <div class="fsc-card-top"><div class="fsc-card-badge"><span>ENERGÍA RENOVABLE</span></div><span class="fsc-card-tag">INTEGRADA</span></div>
              <div class="fsc-card-bottom"><h3>Parque Eólico Antofagasta I</h3><p>Región de Antofagasta — parque eólico en el desierto, acreditación de personal en terreno.</p></div>
            </div>
          </div>
        </div>
      </div>

      <p style="text-align:center;color:var(--gris);font-size:.88rem;margin-top:36px;max-width:680px;margin-left:auto;margin-right:auto">Estas 9 faenas están <strong style="color:var(--azul)">100% integradas</strong> (flujo y plataformas mapeados). Cualquier otra faena también puede sumarse: nuestra IA lee sus manuales y tú agregas los requisitos que falten.</p>
    </div>
  </section>
  <script>
  (function(){
    function initFsc(){
      var list = document.getElementById('fsc-list');
      if(!list) return;
      var items = Array.prototype.slice.call(list.querySelectorAll('.fsc-item'));
      var cards = Array.prototype.slice.call(document.querySelectorAll('.fsc-card'));
      if(!items.length || !cards.length) return;
      var ticking = false;
      function setActive(fid){
        items.forEach(function(it){ it.classList.toggle('active', it.getAttribute('data-faena')===fid); });
        cards.forEach(function(c){ c.classList.toggle('active', c.getAttribute('data-faena')===fid); });
      }
      function update(){
        ticking = false;
        var viewportCenter = window.innerHeight * 0.4;
        var closest = null, closestDist = Infinity;
        items.forEach(function(it){
          var r = it.getBoundingClientRect();
          var mid = r.top + r.height/2;
          var dist = Math.abs(mid - viewportCenter);
          if(dist < closestDist){ closestDist = dist; closest = it; }
        });
        if(closest) setActive(closest.getAttribute('data-faena'));
      }
      window.addEventListener('scroll', function(){
        if(!ticking){ ticking = true; requestAnimationFrame(update); }
      }, {passive:true});
      items.forEach(function(it){
        it.addEventListener('click', function(){ setActive(it.getAttribute('data-faena')); });
      });
      update();
    }
    if(document.readyState === 'complete' || document.readyState === 'interactive'){ setTimeout(initFsc, 0); }
    else { document.addEventListener('DOMContentLoaded', initFsc); }
  })();
  </script>


  <!-- HUB & SPOKE: 3-RING ECOSYSTEM -->
  <section class="hs-sect-pad" style="background:linear-gradient(180deg,#fff 0%,#EEF2FF 50%,#fff 100%);padding:80px 6%;text-align:center;overflow:hidden">
    <div style="max-width:1200px;margin:0 auto">
      <span class="sec-label">ECOSISTEMA DE ACREDITACIÓN</span>
      <h2 style="font-size:2.2rem;font-weight:900;color:var(--azul);margin:16px 0 12px">ACREDITTIA: el centro que conecta<br>mandantes y plataformas</h2>
      <p style="color:var(--gris);font-size:1rem;max-width:640px;margin:0 auto 52px">Tu empresa acredita en las principales faenas de Chile. Cada faena usa su plataforma de acreditación. ACREDITTIA los conecta todos desde una sola pantalla.</p>

      <svg viewBox="0 0 800 800" class="hs-hub-svg" style="width:min(700px,90vw);overflow:visible" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="hsCG" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#3D62F5"/>
            <stop offset="100%" stop-color="#080E1C"/>
          </radialGradient>
          <filter id="hsGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="hsSh" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="3" stdDeviation="8" flood-color="rgba(0,0,0,.13)"/>
          </filter>
        </defs>

        <!-- ORBITAL RINGS -->
        <circle cx="400" cy="400" r="185" fill="none" stroke="rgba(61,98,245,.1)" stroke-width="1" stroke-dasharray="3 7"/>
        <circle cx="400" cy="400" r="332" fill="none" stroke="rgba(61,98,245,.07)" stroke-width="1" stroke-dasharray="3 7"/>

        <!-- RING BADGE LABELS -->
        <rect x="295" y="148" width="210" height="24" rx="12" fill="rgba(61,98,245,.07)"/>
        <text x="400" y="164" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" letter-spacing="1.5" fill="#64748B">FAENAS MANDANTE</text>
        <rect x="266" y="40" width="268" height="24" rx="12" fill="rgba(61,98,245,.05)"/>
        <text x="400" y="56" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" letter-spacing="1.5" fill="#94A3B8">PLATAFORMAS DE ACREDITACIÓN</text>

        <!-- ===== CENTER→INNER LINES (blue) ===== -->
        <line x1="400" y1="325" x2="400" y2="261" stroke="#3D62F5" stroke-width="2" stroke-dasharray="5 4" stroke-linecap="round" opacity="0.55"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="1.7s" repeatCount="indefinite"/></line>
        <line x1="471" y1="377" x2="533" y2="358" stroke="#3D62F5" stroke-width="2" stroke-dasharray="5 4" stroke-linecap="round" opacity="0.55"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="2.1s" repeatCount="indefinite"/></line>
        <line x1="442" y1="458" x2="484" y2="514" stroke="#3D62F5" stroke-width="2" stroke-dasharray="5 4" stroke-linecap="round" opacity="0.55"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="1.9s" repeatCount="indefinite"/></line>
        <line x1="358" y1="458" x2="317" y2="514" stroke="#3D62F5" stroke-width="2" stroke-dasharray="5 4" stroke-linecap="round" opacity="0.55"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="2.3s" repeatCount="indefinite"/></line>
        <line x1="330" y1="377" x2="268" y2="358" stroke="#3D62F5" stroke-width="2" stroke-dasharray="5 4" stroke-linecap="round" opacity="0.55"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="2.0s" repeatCount="indefinite"/></line>

        <!-- ===== INNER→OUTER LINES ===== -->
        <!-- CODELCO→SIGA (green) -->
        <line x1="439" y1="206" x2="587" y2="174" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.4"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="2.5s" repeatCount="indefinite"/></line>
        <!-- BHP→SIGA (green) -->
        <line x1="590" y1="302" x2="618" y2="213" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.4"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="2.2s" repeatCount="indefinite"/></line>
        <!-- BHP→WORKMATE (blue) -->
        <line x1="585" y1="387" x2="624" y2="587" stroke="#1D4ED8" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.4"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="2.9s" repeatCount="indefinite"/></line>
        <!-- COLLAHUASI→WORKMATE (blue) -->
        <line x1="546" y1="573" x2="594" y2="608" stroke="#1D4ED8" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.4"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="1.8s" repeatCount="indefinite"/></line>
        <!-- COLLAHUASI→METACONTRATAS (purple) -->
        <line x1="466" y1="561" x2="214" y2="622" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.4"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="3.1s" repeatCount="indefinite"/></line>
        <!-- AMSA→METACONTRATAS (purple) -->
        <line x1="254" y1="573" x2="206" y2="608" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.4"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="2.4s" repeatCount="indefinite"/></line>
        <!-- LUNDIN→WEBCONTROL (orange) -->
        <line x1="210" y1="302" x2="181" y2="213" stroke="#EA580C" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.4"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="2.6s" repeatCount="indefinite"/></line>
        <!-- CODELCO→WEBCONTROL (orange) -->
        <line x1="361" y1="206" x2="213" y2="174" stroke="#EA580C" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.4"><animate attributeName="stroke-dashoffset" from="0" to="-90" dur="2.1s" repeatCount="indefinite"/></line>

        <!-- ===== TRAVELING DOTS: CENTER→INNER ===== -->
        <circle r="5" fill="#3D62F5" opacity="0.9"><animateMotion dur="1.7s" repeatCount="indefinite" path="M400,325 L400,261"/></circle>
        <circle r="5" fill="#3D62F5" opacity="0.9"><animateMotion dur="2.1s" repeatCount="indefinite" begin="0.8s" path="M471,377 L533,358"/></circle>
        <circle r="5" fill="#3D62F5" opacity="0.9"><animateMotion dur="1.9s" repeatCount="indefinite" begin="0.3s" path="M442,458 L484,514"/></circle>
        <circle r="5" fill="#3D62F5" opacity="0.9"><animateMotion dur="2.3s" repeatCount="indefinite" begin="1.2s" path="M358,458 L317,514"/></circle>
        <circle r="5" fill="#3D62F5" opacity="0.9"><animateMotion dur="2.0s" repeatCount="indefinite" begin="0.5s" path="M330,377 L268,358"/></circle>

        <!-- ===== TRAVELING DOTS: INNER→OUTER ===== -->
        <circle r="4" fill="#16A34A" opacity="0.85"><animateMotion dur="2.5s" repeatCount="indefinite" begin="0.4s" path="M439,206 L587,174"/></circle>
        <circle r="4" fill="#16A34A" opacity="0.85"><animateMotion dur="2.2s" repeatCount="indefinite" begin="1.3s" path="M590,302 L618,213"/></circle>
        <circle r="4" fill="#1D4ED8" opacity="0.85"><animateMotion dur="2.9s" repeatCount="indefinite" begin="1.0s" path="M585,387 L624,587"/></circle>
        <circle r="4" fill="#1D4ED8" opacity="0.85"><animateMotion dur="1.8s" repeatCount="indefinite" begin="0.2s" path="M546,573 L594,608"/></circle>
        <circle r="4" fill="#7C3AED" opacity="0.85"><animateMotion dur="3.1s" repeatCount="indefinite" begin="0.7s" path="M466,561 L214,622"/></circle>
        <circle r="4" fill="#7C3AED" opacity="0.85"><animateMotion dur="2.4s" repeatCount="indefinite" begin="1.5s" path="M254,573 L206,608"/></circle>
        <circle r="4" fill="#EA580C" opacity="0.85"><animateMotion dur="2.6s" repeatCount="indefinite" begin="0.9s" path="M210,302 L181,213"/></circle>
        <circle r="4" fill="#EA580C" opacity="0.85"><animateMotion dur="2.1s" repeatCount="indefinite" begin="1.7s" path="M361,206 L213,174"/></circle>

        <!-- ===== CENTER: ACREDITTIA ===== -->
        <circle cx="400" cy="400" r="78" fill="url(#hsCG)" filter="url(#hsGlow)"/>
        <circle cx="400" cy="400" r="78" fill="none" stroke="rgba(139,170,255,.25)" stroke-width="2"/>
        <polygon points="400,362 428,400 372,400" fill="none" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
        <line x1="374" y1="400" x2="426" y2="400" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <text x="400" y="418" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="900" letter-spacing="0.5" fill="white">ACREDITTIA</text>
        <text x="400" y="432" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" letter-spacing="1.5" fill="rgba(255,255,255,.5)">CENTRAL HUB</text>

        <!-- ===== INNER RING: FAENAS MANDANTE ===== -->
        <!-- CODELCO (400,215) -->
        <circle cx="400" cy="215" r="46" fill="#FFFBEB" stroke="#F59E0B" stroke-width="2.5" filter="url(#hsSh)"/>
        <text x="400" y="210" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#78350F">CODELCO</text>
        <text x="400" y="226" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#B45309">Gran Minería</text>

        <!-- BHP (576,343) -->
        <circle cx="576" cy="343" r="46" fill="#ECFDF5" stroke="#059669" stroke-width="2.5" filter="url(#hsSh)"/>
        <text x="576" y="337" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="900" fill="#065F46">BHP</text>
        <text x="576" y="354" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#059669">Escondida</text>

        <!-- COLLAHUASI (509,550) -->
        <circle cx="509" cy="550" r="46" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5" filter="url(#hsSh)"/>
        <text x="509" y="543" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#991B1B">COLLA</text>
        <text x="509" y="558" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#991B1B">HUASI</text>

        <!-- AMSA (291,550) -->
        <circle cx="291" cy="550" r="46" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5" filter="url(#hsSh)"/>
        <text x="291" y="543" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="900" fill="#1E3A8A">AMSA</text>
        <text x="291" y="560" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#2563EB">Antofagasta</text>

        <!-- LUNDIN (224,343) -->
        <circle cx="224" cy="343" r="46" fill="#F5F3FF" stroke="#7C3AED" stroke-width="2.5" filter="url(#hsSh)"/>
        <text x="224" y="337" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#4C1D95">LUNDIN</text>
        <text x="224" y="353" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#6D28D9">Mining</text>

        <!-- ===== OUTER RING: PLATAFORMAS ===== -->
        <!-- SIGA (635,165) -->
        <circle cx="635" cy="165" r="50" fill="white" stroke="#16A34A" stroke-width="2.5" filter="url(#hsSh)"/>
        <text x="635" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="20" fill="#16A34A" font-weight="700">✓</text>
        <text x="635" y="175" text-anchor="middle" font-family="system-ui,sans-serif" font-size="15" font-weight="900" fill="#15803D">SIGA</text>

        <!-- WORKMATE (635,635) -->
        <circle cx="635" cy="635" r="50" fill="white" stroke="#1D4ED8" stroke-width="2.5" filter="url(#hsSh)"/>
        <text x="635" y="626" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="900" fill="#1D4ED8">W</text>
        <text x="635" y="645" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1E40AF">WORKMATE</text>

        <!-- METACONTRATAS (165,635) -->
        <circle cx="165" cy="635" r="50" fill="white" stroke="#7C3AED" stroke-width="2.5" filter="url(#hsSh)"/>
        <text x="165" y="625" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="900" fill="#7C3AED">M</text>
        <text x="165" y="641" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#6D28D9">META</text>
        <text x="165" y="654" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#6D28D9">CONTRATAS</text>

        <!-- WEBCONTROL (165,165) -->
        <circle cx="165" cy="165" r="50" fill="white" stroke="#EA580C" stroke-width="2.5" filter="url(#hsSh)"/>
        <text x="165" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="15" font-weight="900" fill="#EA580C">WC</text>
        <text x="165" y="172" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#C2410C">WEB</text>
        <text x="165" y="185" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#C2410C">CONTROL</text>

      </svg>

      <!-- MOBILE FALLBACK: card-based layout shown only on small screens -->
      <div class="hs-hub-mobile">
        <!-- Plataformas row -->
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:16px">
          <div style="display:flex;align-items:center;gap:8px;background:white;border:2px solid #16A34A;border-radius:12px;padding:8px 14px">
            <span style="font-size:1rem;font-weight:900;color:#16A34A">✓</span>
            <span style="font-size:.82rem;font-weight:800;color:#15803D">SIGA</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;background:white;border:2px solid #1D4ED8;border-radius:12px;padding:8px 14px">
            <span style="font-size:.9rem;font-weight:900;color:#1D4ED8">W</span>
            <span style="font-size:.82rem;font-weight:800;color:#1E40AF">WORKMATE</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;background:white;border:2px solid #7C3AED;border-radius:12px;padding:8px 14px">
            <span style="font-size:.9rem;font-weight:900;color:#7C3AED">M</span>
            <span style="font-size:.82rem;font-weight:800;color:#6D28D9">METACONTRATAS</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;background:white;border:2px solid #EA580C;border-radius:12px;padding:8px 14px">
            <span style="font-size:.82rem;font-weight:900;color:#EA580C">WC</span>
            <span style="font-size:.82rem;font-weight:800;color:#C2410C">WEBCONTROL</span>
          </div>
        </div>
        <!-- Arrow -->
        <div style="font-size:1.4rem;color:#3D62F5;opacity:.5;line-height:1;margin-bottom:8px">↕</div>
        <!-- Center badge -->
        <div style="background:linear-gradient(135deg,#3D62F5,#080E1C);border-radius:20px;padding:20px 32px;text-align:center;margin-bottom:8px">
          <div style="font-size:1.1rem;font-weight:900;color:white;letter-spacing:.05em">ACREDITTIA</div>
          <div style="font-size:.72rem;color:rgba(255,255,255,.5);letter-spacing:.1em;margin-top:3px">CENTRAL HUB</div>
        </div>
        <!-- Arrow -->
        <div style="font-size:1.4rem;color:#3D62F5;opacity:.5;line-height:1;margin-bottom:8px">↕</div>
        <!-- Faenas row -->
        <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
          <div style="background:#FFFBEB;border:2px solid #F59E0B;border-radius:12px;padding:6px 12px;font-size:.78rem;font-weight:800;color:#78350F">CODELCO</div>
          <div style="background:#ECFDF5;border:2px solid #059669;border-radius:12px;padding:6px 12px;font-size:.78rem;font-weight:800;color:#065F46">BHP</div>
          <div style="background:#FEF2F2;border:2px solid #DC2626;border-radius:12px;padding:6px 12px;font-size:.78rem;font-weight:800;color:#991B1B">COLLAHUASI</div>
          <div style="background:#EFF6FF;border:2px solid #2563EB;border-radius:12px;padding:6px 12px;font-size:.78rem;font-weight:800;color:#1E3A8A">AMSA</div>
          <div style="background:#F5F3FF;border:2px solid #7C3AED;border-radius:12px;padding:6px 12px;font-size:.78rem;font-weight:800;color:#4C1D95">LUNDIN</div>
        </div>
      </div>

      <!-- Legend -->
      <div style="display:flex;gap:28px;justify-content:center;margin-top:44px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:8px"><div style="width:14px;height:14px;border-radius:50%;background:#FFFBEB;border:2.5px solid #F59E0B"></div><span style="font-size:.82rem;color:var(--gris);font-weight:600">Faena / Mandante</span></div>
        <div style="display:flex;align-items:center;gap:8px"><div style="width:14px;height:14px;border-radius:50%;background:white;border:2.5px solid #3D62F5"></div><span style="font-size:.82rem;color:var(--gris);font-weight:600">Plataforma de Acreditación</span></div>
        <div style="display:flex;align-items:center;gap:8px"><div style="width:26px;height:2px;background:linear-gradient(90deg,#3D62F5,#8BAAFF);border-radius:1px"></div><span style="font-size:.82rem;color:var(--gris);font-weight:600">Flujo de datos en tiempo real</span></div>
      </div>
      <p style="margin-top:20px;color:var(--gris);font-size:.88rem;max-width:600px;margin-left:auto;margin-right:auto">Y más: <strong style="color:var(--azul)">El Teniente, Los Bronces, Anglo American, Teck, Antapaccay</strong> y cualquier otra faena — todas conectadas desde ACREDITTIA.</p>
    </div>
  </section>

  <!-- STATS BAND -->
  <section class="stats-band2">
    <div class="sb-inner">
      <div>
        <span class="sec-label">POR QUÉ ACREDITTIA</span>
        <h2>No somos una IA que lee un manual.<br>Integramos la faena al 100%.</h2>
        <p>Trabajamos con profesionales del rubro para integrar cada faena de forma completa: plataformas, procesos, formularios, formatos, contactos y correos del mandante. Entendemos el flujo de principio a fin — y eso es lo que le da a nuestra IA el contexto real para guiarte en cada acreditación. El resultado: menos equipo, más velocidad, menos errores.</p>
      </div>
      <div class="stats-nums">
        <div class="snum"><b>100%</b><span>Integración completa de cada faena: procesos, plataformas, formularios y contactos</span></div>
        <div class="snum"><b>-80%</b><span>Reducción del equipo de acreditación gracias a la IA</span></div>
        <div class="snum"><b>1 sola</b><span>Plataforma donde gestionas todas tus faenas activas</span></div>
        <div class="snum"><b>24/7</b><span>Monitoreo automático de vencimientos y estados</span></div>
      </div>
    </div>
  </section>

  <!-- VIDEO TRABAJADORES 2 FULL WIDTH -->
  <section style="background:#000;overflow:hidden;line-height:0">
    <video autoplay muted loop playsinline style="width:100%;display:block;max-height:640px;object-fit:cover">
      <source src="/trabajadores2.mp4" type="video/mp4">
    </video>
  </section>

  <!-- VIDEO PITCH YOUTUBE -->
  <section style="background:linear-gradient(135deg,#080E1C 0%,#0F172A 100%);padding:80px 6%">
    <div style="max-width:900px;margin:0 auto;text-align:center">
      <span style="font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#06B6D4;display:block;margin-bottom:14px">VIDEO PITCH</span>
      <h2 style="font-size:2rem;font-weight:900;color:#F1F5F9;margin-bottom:12px">Conoce ACREDITTIA en 2 minutos</h2>
      <p style="color:#64748B;font-size:.95rem;margin:0 auto 36px;max-width:520px">Cómo integramos cada faena al 100% y por qué las empresas proveedoras con múltiples contratos eligen nuestra plataforma.</p>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.5)">
        <iframe
          src="https://www.youtube.com/embed/fHSQWgqCy_k?autoplay=1&mute=1&loop=1&playlist=fHSQWgqCy_k&rel=0&modestbranding=1&showinfo=0"
          style="position:absolute;top:0;left:0;width:100%;height:100%;border:none"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>
    </div>
  </section>

  <!-- COMO FUNCIONA 4 PASOS (RendaloMaq style) -->
  <section class="steps-section hs-sect-pad" id="como-funciona">
    <div class="ss-head">
      <span class="sec-label">CÓMO FUNCIONA</span>
      <h2>Tu departamento de acreditación,<br>potenciado por IA.</h2>
      <p>Integración directa con las plataformas de cada faena, validación documental automática y seguimiento continuo — todo desde un solo panel. Lo que antes requería un equipo dedicado, ahora lo centraliza ACREDITTIA.</p>
    </div>
    <div class="steps-grid">
      <div class="step2">
        <div class="snum2">1</div>
        <span class="sico">📋</span>
        <h3>Integración directa con cada faena</h3>
        <p>Nos conectamos a las plataformas del mandante — Workmate, SIGA, Metacontratas y más — y gestionamos tus acreditaciones desde adentro. Sin accesos paralelos, sin doble trabajo.</p>
        <span class="step2-arrow">›</span>
      </div>
      <div class="step2">
        <div class="snum2">2</div>
        <span class="sico">📄</span>
        <h3>Asesoría documental con IA</h3>
        <p>La IA valida cada documento — legal, técnico y de seguridad — antes de enviarlo. Detecta inconsistencias, vencimientos y requisitos faltantes que los especialistas humanos suelen pasar por alto.</p>
        <span class="step2-arrow">›</span>
      </div>
      <div class="step2">
        <div class="snum2">3</div>
        <span class="sico">🚨</span>
        <h3>Visibilidad total de todas tus faenas</h3>
        <p>Ve el estado de cada acreditación activa —en cada faena— desde un único panel. Personal, equipos y documentos en tiempo real, con alertas automáticas antes de que algo venza.</p>
        <span class="step2-arrow">›</span>
      </div>
      <div class="step2">
        <div class="snum2">4</div>
        <span class="sico">🪪</span>
        <h3>Reduce tu equipo con IA</h3>
        <p>La IA hace la revisión documental, detecta errores, gestiona plataformas y mantiene vencimientos al día. Lo que antes requería 3 o 4 personas especializadas, ahora lo maneja ACREDITTIA sola.</p>
      </div>
    </div>
  </section>

  <!-- LO QUE LA IA DETECTA -->
  <section class="hs-sect-pad" style="background:#F8FAFF;padding:80px 6%">
    <div style="max-width:1200px;margin:0 auto">
      <div style="text-align:center;margin-bottom:52px">
        <span class="sec-label">UNA DE LAS FUNCIONES DE LA PLATAFORMA</span>
        <h2 style="font-size:2.2rem;font-weight:900;color:var(--azul);margin:12px 0 16px">Todos tus documentos revisados<br>con IA — al instante</h2>
        <p style="color:var(--gris);max-width:660px;margin:0 auto;font-size:1rem">Porque integramos la faena al 100% — procesos, plataformas, formularios, formatos y contactos — nuestra IA sabe exactamente qué revisar en cada documento. No lee un manual: conoce el flujo completo, igual que un especialista interno de esa faena.</p>
      </div>
      <div class="hs-feat-grid" style="gap:16px">
        <div style="background:white;border:1px solid var(--linea);border-radius:16px;padding:22px 24px;display:flex;gap:16px;align-items:flex-start">
          <div style="font-size:1.8rem;flex-shrink:0;line-height:1;width:44px;height:44px;background:#FEF3C7;border-radius:10px;display:flex;align-items:center;justify-content:center">🩺</div>
          <div>
            <h4 style="font-size:.95rem;font-weight:800;color:var(--azul);margin:0 0 5px">Exámenes Ocupacionales</h4>
            <p style="font-size:.82rem;color:var(--gris);margin:0;line-height:1.5">Vigencia, firma del médico, datos del trabajador y legibilidad del documento. Detecta si está vencido o próximo a vencer.</p>
          </div>
        </div>
        <div style="background:white;border:1px solid var(--linea);border-radius:16px;padding:22px 24px;display:flex;gap:16px;align-items:flex-start">
          <div style="font-size:1.8rem;flex-shrink:0;line-height:1;width:44px;height:44px;background:#DCFCE7;border-radius:10px;display:flex;align-items:center;justify-content:center">🚗</div>
          <div>
            <h4 style="font-size:.95rem;font-weight:800;color:var(--azul);margin:0 0 5px">Revisiones Técnicas</h4>
            <p style="font-size:.82rem;color:var(--gris);margin:0;line-height:1.5">Vigencia, patente, firma y sello del taller. Verifica que el documento corresponde al vehículo o equipo declarado.</p>
          </div>
        </div>
        <div style="background:white;border:1px solid var(--linea);border-radius:16px;padding:22px 24px;display:flex;gap:16px;align-items:flex-start">
          <div style="font-size:1.8rem;flex-shrink:0;line-height:1;width:44px;height:44px;background:#EDE9FE;border-radius:10px;display:flex;align-items:center;justify-content:center">🪪</div>
          <div>
            <h4 style="font-size:.95rem;font-weight:800;color:var(--azul);margin:0 0 5px">Identidad y RUT</h4>
            <p style="font-size:.82rem;color:var(--gris);margin:0;line-height:1.5">Cruza el RUT del trabajador en todos los documentos. Si hay inconsistencia entre un certificado y otro, la IA la detecta al instante.</p>
          </div>
        </div>
        <div style="background:white;border:1px solid var(--linea);border-radius:16px;padding:22px 24px;display:flex;gap:16px;align-items:flex-start">
          <div style="font-size:1.8rem;flex-shrink:0;line-height:1;width:44px;height:44px;background:#FEE2E2;border-radius:10px;display:flex;align-items:center;justify-content:center">✍️</div>
          <div>
            <h4 style="font-size:.95rem;font-weight:800;color:var(--azul);margin:0 0 5px">Firmas y Sellos</h4>
            <p style="font-size:.82rem;color:var(--gris);margin:0;line-height:1.5">Detecta documentos sin firma o sello del responsable — una de las causas más frecuentes de rechazo en garita que ningún humano a contrarreloj siempre ve.</p>
          </div>
        </div>
        <div style="background:white;border:1px solid var(--linea);border-radius:16px;padding:22px 24px;display:flex;gap:16px;align-items:flex-start">
          <div style="font-size:1.8rem;flex-shrink:0;line-height:1;width:44px;height:44px;background:#DBEAFE;border-radius:10px;display:flex;align-items:center;justify-content:center">📋</div>
          <div>
            <h4 style="font-size:.95rem;font-weight:800;color:var(--azul);margin:0 0 5px">Certificados e Inducciones</h4>
            <p style="font-size:.82rem;color:var(--gris);margin:0;line-height:1.5">Vigencia, nombre del trabajador, faena correspondiente. Revisa que la inducción sea la correcta para el mandante al que ingresa.</p>
          </div>
        </div>
        <div style="background:white;border:1px solid var(--linea);border-radius:16px;padding:22px 24px;display:flex;gap:16px;align-items:flex-start">
          <div style="font-size:1.8rem;flex-shrink:0;line-height:1;width:44px;height:44px;background:#FFF7ED;border-radius:10px;display:flex;align-items:center;justify-content:center">🚜</div>
          <div>
            <h4 style="font-size:.95rem;font-weight:800;color:var(--azul);margin:0 0 5px">Estándar de Equipos</h4>
            <p style="font-size:.82rem;color:var(--gris);margin:0;line-height:1.5">Verifica que la maquinaria cumple el estándar exigido por la faena: dispositivos de seguridad, revisiones periódicas y documentos del operador.</p>
          </div>
        </div>
        <div style="background:white;border:1px solid var(--linea);border-radius:16px;padding:22px 24px;display:flex;gap:16px;align-items:flex-start">
          <div style="font-size:1.8rem;flex-shrink:0;line-height:1;width:44px;height:44px;background:#F0FDF4;border-radius:10px;display:flex;align-items:center;justify-content:center">🛡️</div>
          <div>
            <h4 style="font-size:.95rem;font-weight:800;color:var(--azul);margin:0 0 5px">Pólizas y Seguros</h4>
            <p style="font-size:.82rem;color:var(--gris);margin:0;line-height:1.5">Vigencia, montos mínimos de cobertura y que el asegurado corresponda. Detecta pólizas vencidas o con cobertura insuficiente para el mandante.</p>
          </div>
        </div>
        <div style="background:white;border:1px solid var(--linea);border-radius:16px;padding:22px 24px;display:flex;gap:16px;align-items:flex-start">
          <div style="font-size:1.8rem;flex-shrink:0;line-height:1;width:44px;height:44px;background:#F1F5F9;border-radius:10px;display:flex;align-items:center;justify-content:center">⚠️</div>
          <div>
            <h4 style="font-size:.95rem;font-weight:800;color:var(--azul);margin:0 0 5px">Documentos Ilegibles o Incompletos</h4>
            <p style="font-size:.82rem;color:var(--gris);margin:0;line-height:1.5">Detecta archivos de baja calidad, fotos torcidas, PDFs corruptos o páginas que faltan — antes de que el mandante los rechace.</p>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#0F172A,#1E3A5F);border:1px solid rgba(139,170,255,.2);border-radius:16px;padding:22px 24px;display:flex;gap:16px;align-items:flex-start">
          <div style="font-size:1.8rem;flex-shrink:0;line-height:1;width:44px;height:44px;background:rgba(61,98,245,.2);border-radius:10px;display:flex;align-items:center;justify-content:center">🔗</div>
          <div>
            <h4 style="font-size:.95rem;font-weight:800;color:#F1F5F9;margin:0 0 5px">Consistencia entre Documentos</h4>
            <p style="font-size:.82rem;color:#94A3B8;margin:0;line-height:1.5">Si el nombre en el carnet no calza con el del examen, o la patente del documento no es la del vehículo declarado — la IA lo detecta cruzando todos los archivos de la carpeta entre sí.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RIESGOS: Una carpeta rechazada cuesta más que una bien hecha -->
  <section class="hs-sect-pad" style="background:linear-gradient(135deg,#080E1C 0%,#0F172A 100%);padding:80px 6%">
    <div style="max-width:1200px;margin:0 auto">
      <div style="text-align:center;margin-bottom:52px">
        <span class="sec-label" style="color:#8BAAFF">RIESGOS</span>
        <h2 style="font-size:2.2rem;font-weight:900;color:#F1F5F9;margin:12px 0 16px">Una carpeta rechazada cuesta más<br>que una bien hecha desde el inicio.</h2>
        <p style="color:#94A3B8;max-width:620px;margin:0 auto;font-size:1rem">Los errores de acreditación no son solo administrativos. Detienen operaciones, generan multas y dañan la relación con el mandante. La IA de ACREDITTIA los elimina antes de que ocurran.</p>
      </div>
      <div class="hs-risk-grid">
        <div style="background:rgba(30,58,95,.35);border:1px solid rgba(139,170,255,.15);border-radius:18px;padding:28px 32px;display:flex;gap:20px;align-items:flex-start">
          <div style="font-size:2.2rem;flex-shrink:0;line-height:1">🚧</div>
          <div>
            <h4 style="color:#F1F5F9;font-size:1.05rem;font-weight:800;margin:0 0 8px">Trabajador devuelto en garita</h4>
            <p style="color:#94A3B8;font-size:.88rem;line-height:1.6;margin:0">Un examen vencido o un dato que no calza y tu personal vuelve sin entrar. Día perdido, traslado pagado a pérdida y una desmovilización que nadie presupuestó. ACREDITTIA detecta el problema antes de que el trabajador llegue a garita.</p>
          </div>
        </div>
        <div style="background:rgba(30,58,95,.35);border:1px solid rgba(139,170,255,.15);border-radius:18px;padding:28px 32px;display:flex;gap:20px;align-items:flex-start">
          <div style="font-size:2.2rem;flex-shrink:0;line-height:1">📋</div>
          <div>
            <h4 style="color:#F1F5F9;font-size:1.05rem;font-weight:800;margin:0 0 8px">Inicio de faena retrasado</h4>
            <p style="color:#94A3B8;font-size:.88rem;line-height:1.6;margin:0">La carpeta de arranque rebota y el contrato no parte. Cada día de atraso es facturación que no entra y un mandante mirando el reloj. La IA estructura tu carpeta al estándar exacto del mandante antes de enviarla.</p>
          </div>
        </div>
        <div style="background:rgba(30,58,95,.35);border:1px solid rgba(139,170,255,.15);border-radius:18px;padding:28px 32px;display:flex;gap:20px;align-items:flex-start">
          <div style="font-size:2.2rem;flex-shrink:0;line-height:1">⚠️</div>
          <div>
            <h4 style="color:#F1F5F9;font-size:1.05rem;font-weight:800;margin:0 0 8px">Multas y no conformidades HSEC</h4>
            <p style="color:#94A3B8;font-size:.88rem;line-height:1.6;margin:0">Documentación incompleta o vencida detectada en faena genera multas, paralizaciones y no conformidades que golpean directo tu margen. ACREDITTIA monitorea el 100% de los documentos activos, 24/7.</p>
          </div>
        </div>
        <div style="background:rgba(30,58,95,.35);border:1px solid rgba(139,170,255,.15);border-radius:18px;padding:28px 32px;display:flex;gap:20px;align-items:flex-start">
          <div style="font-size:2.2rem;flex-shrink:0;line-height:1">🧑‍💼</div>
          <div>
            <h4 style="color:#F1F5F9;font-size:1.05rem;font-weight:800;margin:0 0 8px">Departamento de acreditación sobrecargado</h4>
            <p style="color:#94A3B8;font-size:.88rem;line-height:1.6;margin:0">Cuando tienes 3 o 4 faenas activas en simultáneo, el equipo revisa carpetas en múltiples plataformas a la vez, a mano y bajo presión. ACREDITTIA centraliza todo y reduce hasta un 80% ese trabajo — sin contratar más personas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FUNCIONALIDADES DIFERENCIADORAS -->
  <section class="hs-sect-pad" style="background:#fff;padding:80px 6%">
    <div style="max-width:1200px;margin:0 auto">
      <div style="text-align:center;margin-bottom:52px">
        <span class="sec-label">INTELIGENCIA APLICADA</span>
        <h2 style="font-size:2.2rem;font-weight:900;color:var(--azul);margin:12px 0 16px">Todo lo que necesita un departamento<br>de acreditación — en una sola plataforma.</h2>
        <p style="color:var(--gris);max-width:660px;margin:0 auto;font-size:1rem">Diseñado para empresas proveedoras que operan en varias faenas simultáneas y que necesitan visibilidad, control y automatización — sin aumentar el equipo.</p>
      </div>
      <div class="hs-feat-grid">

        <!-- PANEL MULTI-FAENA -->
        <div style="background:linear-gradient(135deg,#0F172A,#1E3A5F);border:1px solid rgba(139,170,255,.2);border-radius:20px;padding:28px;transition:.15s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(61,98,245,.2)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
          <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#8BAAFF,#3D62F5);display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin-bottom:18px">🗂️</div>
          <h3 style="font-size:1.05rem;font-weight:800;color:#F1F5F9;margin:0 0 10px">Un panel para todas tus faenas</h3>
          <p style="color:#94A3B8;font-size:.88rem;line-height:1.65;margin:0">¿Tienes contratos activos en Los Pelambres, Candelaria y El Teniente al mismo tiempo? ACREDITTIA centraliza cada proyecto en un único panel con visibilidad total — estado por faena, personas, equipos y vencimientos, todo en tiempo real.</p>
        </div>

        <!-- MANUALES -->
        <div style="background:var(--bg);border:1px solid var(--linea);border-radius:20px;padding:28px;transition:.15s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(61,98,245,.1)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
          <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#3D62F5,#2448E0);display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin-bottom:18px">📚</div>
          <h3 style="font-size:1.05rem;font-weight:800;color:var(--azul);margin:0 0 10px">Integración completa de cada faena</h3>
          <p style="color:var(--gris);font-size:.88rem;line-height:1.65;margin:0">No solo nos conectamos a las plataformas — conocemos cada proceso: formularios, formatos de documentos, correos del mandante, flujos de aprobación y contactos. Trabajamos con profesionales del rubro para integrar cada faena de principio a fin, para que la IA sepa exactamente qué hacer en cada paso.</p>
        </div>

        <!-- LABORATORIOS -->
        <div style="background:var(--bg);border:1px solid var(--linea);border-radius:20px;padding:28px;transition:.15s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(61,98,245,.1)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
          <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#059669,#047857);display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin-bottom:18px">🔬</div>
          <h3 style="font-size:1.05rem;font-weight:800;color:var(--azul);margin:0 0 10px">Laboratorios autorizados por faena</h3>
          <p style="color:var(--gris);font-size:.88rem;line-height:1.65;margin:0">Cada faena tiene laboratorios autorizados para exámenes ocupacionales. ACREDITTIA te muestra cuáles son — Mutual, ACHS u otros — y te conecta directamente con ellos para agendar y obtener los certificados que la faena acepta. Sin buscar, sin llamadas.</p>
        </div>

        <!-- TIPS DE APROBACIÓN -->
        <div style="background:var(--bg);border:1px solid var(--linea);border-radius:20px;padding:28px;transition:.15s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(61,98,245,.1)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
          <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#F59E0B,#D97706);display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin-bottom:18px">💡</div>
          <h3 style="font-size:1.05rem;font-weight:800;color:var(--azul);margin:0 0 10px">Ejemplos y tips por requisito</h3>
          <p style="color:var(--gris);font-size:.88rem;line-height:1.65;margin:0">Para cada requisito de la faena, la IA te entrega ejemplos reales de documentos aprobados, indicaciones precisas de formato y los errores más comunes que generan observaciones. Sube el documento correcto a la primera, sin idas y vueltas con el mandante.</p>
        </div>

        <!-- TALLERES AUTORIZADOS -->
        <div style="background:var(--bg);border:1px solid var(--linea);border-radius:20px;padding:28px;transition:.15s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(61,98,245,.1)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
          <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#7C3AED,#6D28D9);display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin-bottom:18px">🔧</div>
          <h3 style="font-size:1.05rem;font-weight:800;color:var(--azul);margin:0 0 10px">Talleres autorizados para inspección visual</h3>
          <p style="color:var(--gris);font-size:.88rem;line-height:1.65;margin:0">Cuando un equipo necesita inspección visual para su estándar, te mostramos los talleres autorizados por esa faena y te conectamos con ellos directamente desde la plataforma para coordinar la revisión y obtener la documentación que el mandante requiere.</p>
        </div>

        <!-- EMPRESAS DE ESTÁNDAR -->
        <div style="background:var(--bg);border:1px solid var(--linea);border-radius:20px;padding:28px;transition:.15s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(61,98,245,.1)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
          <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#DC2626,#B91C1C);display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin-bottom:18px">🏗️</div>
          <h3 style="font-size:1.05rem;font-weight:800;color:var(--azul);margin:0 0 10px">Conexión con empresas de estándar de equipos</h3>
          <p style="color:var(--gris);font-size:.88rem;line-height:1.65;margin:0">¿Tu excavadora, grúa o alzahombre necesita adaptaciones para cumplir el estándar de la faena? Te conectamos con empresas especializadas en poner a estándar los equipos según los requerimientos del mandante — para que tu maquinaria pueda entrar sin observaciones.</p>
        </div>

        <!-- SEGUIMIENTO CONTINUO -->
        <div style="background:linear-gradient(135deg,#0F172A,#1E3A5F);border:1px solid rgba(139,170,255,.2);border-radius:20px;padding:28px;transition:.15s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(61,98,245,.2)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
          <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#8BAAFF,#3D62F5);display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin-bottom:18px">🔔</div>
          <h3 style="font-size:1.05rem;font-weight:800;color:#F1F5F9;margin:0 0 10px">Seguimiento inteligente, siempre activo</h3>
          <p style="color:#94A3B8;font-size:.88rem;line-height:1.65;margin:0">Una vez acreditado, la IA no para. Monitorea vencimientos de documentos, cambios en estándares del mandante y nuevas exigencias de plataforma. Te avisa con tiempo para que nunca pierdas la vigencia de un contrato activo.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- ACREDITTIA VS EMPRESAS ACREDITADORAS -->
  <section class="hs-sect-pad" style="background:linear-gradient(135deg,#F8FAFF 0%,#EEF2FF 100%);padding:80px 6%">
    <div style="max-width:1100px;margin:0 auto">
      <div style="text-align:center;margin-bottom:52px">
        <span class="sec-label">COMPARATIVA</span>
        <h2 style="font-size:2.2rem;font-weight:900;color:var(--azul);margin:12px 0 16px">Las empresas acreditadoras cobran por proceso<br>y te dejan solo cuando termina.</h2>
        <p style="color:var(--gris);max-width:660px;margin:0 auto;font-size:1rem">ACREDITTIA no es un servicio puntual — es la plataforma donde tu departamento de acreditación opera permanentemente. Integración directa con cada faena, visibilidad en tiempo real y IA que trabaja 24/7 para que tu equipo se enfoque en lo que importa.</p>
      </div>
      <div class="hs-compare-grid">

        <!-- EMPRESA ACREDITADORA -->
        <div style="background:#fff;border:2px solid #E2E8F0;border-radius:24px;padding:36px;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#EF4444,#F97316)"></div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
            <div style="width:44px;height:44px;border-radius:50%;background:#FEF2F2;display:flex;align-items:center;justify-content:center;font-size:1.4rem">🏢</div>
            <div>
              <div style="font-weight:900;color:#1E293B;font-size:1rem">Empresa Acreditadora Tradicional</div>
              <div style="font-size:.78rem;color:#94A3B8">El modelo que usan hoy miles de contratistas</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px">
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">❌</span><span style="font-size:.88rem;color:#64748B;line-height:1.5">Cobro millonario por cada proceso de acreditación, sin precio fijo ni transparencia</span></div>
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">❌</span><span style="font-size:.88rem;color:#64748B;line-height:1.5">Sin seguimiento una vez terminado el proceso — quedas solo con documentos que vencen</span></div>
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">❌</span><span style="font-size:.88rem;color:#64748B;line-height:1.5">No te avisan cuando un estándar cambia o el mandante agrega una nueva exigencia</span></div>
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">❌</span><span style="font-size:.88rem;color:#64748B;line-height:1.5">Si agregas una faena nueva, pagas otro proceso completo desde cero</span></div>
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">❌</span><span style="font-size:.88rem;color:#64748B;line-height:1.5">Sin visibilidad en tiempo real del estado de cada acreditación</span></div>
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">❌</span><span style="font-size:.88rem;color:#64748B;line-height:1.5">Dependes de una persona que puede renunciar, olvidar o cometer errores</span></div>
          </div>
          <div style="margin-top:28px;padding:16px;background:#FEF2F2;border-radius:12px;text-align:center">
            <div style="font-size:1.5rem;font-weight:900;color:#EF4444">\$\$\$\$ por proceso</div>
            <div style="font-size:.8rem;color:#94A3B8;margin-top:4px">Sin seguimiento, sin actualizaciones, sin plataforma</div>
          </div>
        </div>

        <!-- ACREDITTIA -->
        <div style="background:linear-gradient(135deg,#0F172A,#1E293B);border:2px solid rgba(139,170,255,.3);border-radius:24px;padding:36px;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#3D62F5,#8BAAFF)"></div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
            <div style="width:44px;height:44px;border-radius:50%;background:rgba(61,98,245,.2);display:flex;align-items:center;justify-content:center;font-size:1.4rem">🤖</div>
            <div>
              <div style="font-weight:900;color:#F1F5F9;font-size:1rem">ACREDITTIA</div>
              <div style="font-size:.78rem;color:#64748B">Suscripción mensual, inteligencia permanente</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px">
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">✅</span><span style="font-size:.88rem;color:#94A3B8;line-height:1.5">Suscripción mensual fija — acredita cuantas faenas y cuanto personal necesites, sin cobros extra</span></div>
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">✅</span><span style="font-size:.88rem;color:#94A3B8;line-height:1.5">Seguimiento 24/7 de cada acreditación activa — alertas automáticas de vencimientos y cambios</span></div>
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">✅</span><span style="font-size:.88rem;color:#94A3B8;line-height:1.5">La IA detecta cuando el mandante actualiza estándares y te avisa qué cambió y qué debes actualizar</span></div>
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">✅</span><span style="font-size:.88rem;color:#94A3B8;line-height:1.5">Agrega nuevas faenas en cualquier momento — los requisitos se generan automáticamente desde los manuales</span></div>
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">✅</span><span style="font-size:.88rem;color:#94A3B8;line-height:1.5">Dashboard en tiempo real: ves el estado de cada persona, equipo y empresa al instante</span></div>
            <div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:1rem;flex-shrink:0;margin-top:1px">✅</span><span style="font-size:.88rem;color:#94A3B8;line-height:1.5">La IA nunca renuncia, nunca olvida y nunca comete el mismo error dos veces</span></div>
          </div>
          <div style="margin-top:28px;padding:16px;background:rgba(61,98,245,.15);border:1px solid rgba(139,170,255,.2);border-radius:12px;text-align:center">
            <div style="font-size:1.5rem;font-weight:900;color:#8BAAFF">Suscripción mensual</div>
            <div style="font-size:.8rem;color:#64748B;margin-top:4px">Acreditaciones ilimitadas + seguimiento permanente + IA siempre activa</div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- INDUSTRIAS -->
  <section style="background:#fff;padding:72px 6%">
    <div style="max-width:1200px;margin:0 auto">
      <div style="text-align:center;margin-bottom:48px">
        <span class="sec-label">INDUSTRIAS</span>
        <h2 style="font-size:2.2rem;font-weight:900;color:var(--azul);margin-bottom:12px">Diseñado para las industrias más exigentes de Chile</h2>
        <p style="color:var(--gris);max-width:580px;margin:0 auto;font-size:1rem">Cada industria tiene sus propios estándares y plataformas. ACREDITTIA los conoce todos.</p>
      </div>
      <div class="industrias-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1100px;margin:0 auto">

        <!-- MINERÍA -->
        <div style="background:var(--bg);border:1px solid var(--linea);border-radius:20px;overflow:hidden;transition:.15s;cursor:pointer" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(61,98,245,.12)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
          <div class="ind-card-img" style="height:180px;background:linear-gradient(135deg,#0F172A,#1E3A8A);position:relative;overflow:hidden">
            <img src="/foto1.jpeg" style="width:100%;height:100%;object-fit:cover;object-position:center;opacity:.7" onerror="this.style.display='none'">
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,16,32,.8) 0%,transparent 60%)"></div>
            <div style="position:absolute;bottom:14px;left:18px;color:#fff">
              <div style="font-size:2rem;margin-bottom:4px">⛏️</div>
              <div style="font-size:1.3rem;font-weight:900;font-family:var(--display)">MINERÍA</div>
            </div>
          </div>
          <div style="padding:22px">
            <p style="color:var(--gris);font-size:.9rem;line-height:1.6;margin-bottom:16px">Faenas de gran minería, minería mediana y proyectos de exploración. Workmate, SIGA, Metacontratas y más de 30 faenas integradas.</p>
            <div style="display:flex;flex-direction:column;gap:7px">
              <div style="display:flex;gap:8px;font-size:.82rem;color:var(--gris)"><span style="color:var(--cyan);font-weight:700">→</span>Codelco, BHP, Antofagasta Minerals, Teck</div>
              <div style="display:flex;gap:8px;font-size:.82rem;color:var(--gris)"><span style="color:var(--cyan);font-weight:700">→</span>Workmate, SIGA, Metacontratas</div>
              <div style="display:flex;gap:8px;font-size:.82rem;color:var(--gris)"><span style="color:var(--cyan);font-weight:700">→</span>Requisitos de terreno: Pértiga, Radio, GPS</div>
            </div>
          </div>
        </div>

        <!-- ENERGÍA -->
        <div style="background:var(--bg);border:1px solid var(--linea);border-radius:20px;overflow:hidden;transition:.15s;cursor:pointer" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(61,98,245,.12)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
          <div class="ind-card-img" style="height:180px;background:linear-gradient(135deg,#0F2D1A,#1a4a2a);position:relative;overflow:hidden">
            <img src="https://images.unsplash.com/photo-1452179535021-368bb0edc3a8?auto=format&fit=crop&w=800&q=80" style="width:100%;height:100%;object-fit:cover;opacity:.7" onerror="this.style.display='none'">
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,30,16,.8) 0%,transparent 60%)"></div>
            <div style="position:absolute;bottom:14px;left:18px;color:#fff">
              <div style="font-size:2rem;margin-bottom:4px">⚡</div>
              <div style="font-size:1.3rem;font-weight:900;font-family:var(--display)">ENERGÍA</div>
            </div>
          </div>
          <div style="padding:22px">
            <p style="color:var(--gris);font-size:.9rem;line-height:1.6;margin-bottom:16px">Parques eólicos, plantas fotovoltaicas y proyectos de energía renovable. Requisitos específicos de trabajo en altura y riesgo eléctrico.</p>
            <div style="display:flex;flex-direction:column;gap:7px">
              <div style="display:flex;gap:8px;font-size:.82rem;color:var(--gris)"><span style="color:var(--cyan);font-weight:700">→</span>Nordex, Acciona, Enel Green Power, EDF</div>
              <div style="display:flex;gap:8px;font-size:.82rem;color:var(--gris)"><span style="color:var(--cyan);font-weight:700">→</span>Parques eólicos y plantas solares en Chile</div>
              <div style="display:flex;gap:8px;font-size:.82rem;color:var(--gris)"><span style="color:var(--cyan);font-weight:700">→</span>Trabajo en altura, riesgo eléctrico, ISO 45001</div>
            </div>
          </div>
        </div>

        <!-- CONSTRUCCIÓN -->
        <div style="background:var(--bg);border:1px solid var(--linea);border-radius:20px;overflow:hidden;transition:.15s;cursor:pointer" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 16px 40px rgba(61,98,245,.12)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
          <div class="ind-card-img" style="height:180px;background:linear-gradient(135deg,#1a1000,#2a1e00);position:relative;overflow:hidden">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" style="width:100%;height:100%;object-fit:cover;opacity:.7" onerror="this.style.display='none'">
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(26,16,0,.8) 0%,transparent 60%)"></div>
            <div style="position:absolute;bottom:14px;left:18px;color:#fff">
              <div style="font-size:2rem;margin-bottom:4px">🏗️</div>
              <div style="font-size:1.3rem;font-weight:900;font-family:var(--display)">CONSTRUCCIÓN</div>
            </div>
          </div>
          <div style="padding:22px">
            <p style="color:var(--gris);font-size:.9rem;line-height:1.6;margin-bottom:16px">Obras civiles, montajes industriales y construcción en proyectos mineros y energéticos. Alzahombres, grúas y maquinaria pesada.</p>
            <div style="display:flex;flex-direction:column;gap:7px">
              <div style="display:flex;gap:8px;font-size:.82rem;color:var(--gris)"><span style="color:var(--cyan);font-weight:700">→</span>Obras en faenas mineras y proyectos de energía</div>
              <div style="display:flex;gap:8px;font-size:.82rem;color:var(--gris)"><span style="color:var(--cyan);font-weight:700">→</span>Alzahombres, grúas, maquinaria especializada</div>
              <div style="display:flex;gap:8px;font-size:.82rem;color:var(--gris)"><span style="color:var(--cyan);font-weight:700">→</span>Certificaciones, planes de emergencia, seguros</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


    <!-- PLATAFORMAS CONNECTIONS -->
  <section class="plat-section" id="plataformas">
    <div class="ps-head">
      <span class="sec-label">MÚLTIPLES PLATAFORMAS</span>
      <h2>Una sola plataforma que conecta todas las acreditaciones</h2>
      <p>Cada faena usa su propio sistema. Con ACREDITTIA, tú solo usas uno — el nuestro. Nos encargamos del resto.</p>
    </div>
    <div class="plat-cards">
      <div class="plat-card">
        <div class="pc-top"><div class="pc-ico" style="background:#e3f2fd;color:#1565c0;font-size:1rem">W</div><div><h3>Workmate</h3><span class="pc-tag">Gran Minería</span></div></div>
        <div class="pc-items">
          <div class="pc-item">Carga automática de requisitos</div>
          <div class="pc-item">Seguimiento de documentos</div>
          <div class="pc-item">Alertas de vencimiento</div>
          <div class="pc-item">Estado en tiempo real</div>
        </div>
      </div>
      <div class="plat-card">
        <div class="pc-top"><div class="pc-ico" style="background:#e8f5e9;color:#2e7d32;font-size:1.1rem">✓</div><div><h3>SIGA</h3><span class="pc-tag">Codelco · Antofagasta</span></div></div>
        <div class="pc-items">
          <div class="pc-item">Requisitos por área de trabajo</div>
          <div class="pc-item">Gestión de vencimientos</div>
          <div class="pc-item">Control de documentos</div>
          <div class="pc-item">Notificaciones automáticas</div>
        </div>
      </div>
      <div class="plat-card">
        <div class="pc-top"><div class="pc-ico" style="background:#f3e5f5;color:#6a1b9a;font-size:1rem">M</div><div><h3>Metacontratas</h3><span class="pc-tag">BHP · Collahuasi</span></div></div>
        <div class="pc-items">
          <div class="pc-item">Mapeo completo de requisitos</div>
          <div class="pc-item">Carga y revisión de documentos</div>
          <div class="pc-item">Historial de acreditaciones</div>
          <div class="pc-item">Alertas anticipadas</div>
        </div>
      </div>
      <div class="plat-card">
        <div class="pc-top"><div class="pc-ico" style="background:#fff3e0;color:#e65100">⚡</div><div><h3>Otras plataformas</h3><span class="pc-tag">Energía · Construcción</span></div></div>
        <div class="pc-items">
          <div class="pc-item">Proyectos solares y eólicos</div>
          <div class="pc-item">Obras de construcción</div>
          <div class="pc-item">Plataformas propias de faenas</div>
          <div class="pc-item">Integración personalizada</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES 5 ICONOS (RendaloMaq style) -->
  <section class="features5">
    <div class="f5-inner">
      <h2>GESTIONA TODO, DESDE UN SOLO LUGAR</h2>
      <div class="f5-grid">
        <div class="f5item"><div class="f5ico">👁️</div><h4>Todo unificado</h4><p>Workmate, SIGA, Metacontratas y más — todo en un solo panel.</p></div>
        <div class="f5item"><div class="f5ico">📋</div><h4>Seguimiento centralizado</h4><p>Estados, documentos y vencimientos en tiempo real.</p></div>
        <div class="f5item"><div class="f5ico">🔔</div><h4>Alertas inteligentes</h4><p>Notificaciones anticipadas antes de que algo venza.</p></div>
        <div class="f5item"><div class="f5ico">📊</div><h4>Reportes y dashboards</h4><p>Indicadores para tomar mejores decisiones.</p></div>
        <div class="f5item"><div class="f5ico">🤖</div><h4>IA que lee documentos</h4><p>Sube el archivo y la IA extrae fechas, datos y detecta anomalías.</p></div>
        <div class="f5item"><div class="f5ico" style="overflow:hidden;padding:0;background:#FDE9D2"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><circle cx="50" cy="50" r="50" fill="#FDE9D2"/><path d="M14 102 C14 78 28 61 50 61 C72 61 86 78 86 102 Z" fill="#2448E0"/><path d="M35 95 L50 79 L65 95" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><path d="M30 40 C30 57 34 69 50 69 C66 69 70 57 70 40 C70 25 61 19 50 19 C39 19 30 25 30 40 Z" fill="#F2C49B"/><path d="M27 36 C24 47 26 58 33 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M73 36 C76 47 74 58 67 64" stroke="#3B2415" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="41" cy="43" r="2.6" fill="#2A1A10"/><circle cx="59" cy="43" r="2.6" fill="#2A1A10"/><path d="M41 54 Q50 60 59 54" stroke="#9a5236" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M21 30 C21 11 79 11 79 30 L79 24 C79 9 21 9 21 24 Z" fill="#f2cda0"/><rect x="19" y="26" width="62" height="6" rx="3" fill="#e0b27c"/></svg></div><h4>Sofía, tu asistente IA</h4><p>Te recuerda qué falta y te enseña a acreditar paso a paso en cualquier faena integrada.</p></div>
      </div>
    </div>
  </section>


  <!-- PLATAFORMAS LOGOS BAND -->
  <section class="plat-band">
    <p class="pb-title">Tengas acreditaciones en Workmate, SIGA, Metacontratas o cualquier otra plataforma — en ACREDITTIA las ves todas juntas</p>
    <div class="plat-logos-row">
      <div class="plat-logo-item"><span class="pico" style="background:#e3f2fd;color:#1565c0">W</span>WORKMATE</div>
      <div class="plat-logo-item"><span class="pico" style="background:#f3e5f5;color:#6a1b9a">M</span>METACONTRATAS</div>
      <div class="plat-logo-item"><span class="pico" style="background:#e8f5e9;color:#2e7d32">✓</span>SIGA</div>
      <div class="plat-logo-item"><span class="pico" style="background:#fff3e0;color:#e65100">⛰</span>COLLAHUASI</div>
      <div class="plat-logo-item"><span class="pico" style="background:#e3f2fd;color:#1565c0">A</span>ANTOFAGASTA</div>
      <div class="plat-logo-item"><span class="pico" style="background:#fce4ec;color:#c62828">B</span>ESCONDIDA · BHP</div>
      <div class="plat-logo-item"><span class="pico" style="background:#fff8e1;color:#f57f17">C</span>CODELCO</div>
      <span class="plat-and-more">+ muchas más...</span>
    </div>
  </section>

  <!-- IA SECTION OSCURA -->
  

<section class="ia-dark" id="sectores">
    <div class="iad-inner">
      <div>
        <span class="sec-label" style="color:#6B8FFF">INTELIGENCIA ARTIFICIAL APLICADA</span>
        <h2>Menos plataformas.<br>Menos caos.<br><span class="hl">Más control.</span></h2>
        <p style="color:#94A3B8;font-size:1.02rem;line-height:1.65;margin-bottom:28px">La IA de ACREDITTIA estudia todos los manuales y estándares de cada faena. Cuando subes un documento, lo lee automáticamente — extrae vencimientos, detecta antigüedades y te levanta alertas sin que tengas que hacer nada.</p>
        <div style="background:rgba(61,98,245,.1);border:1px solid rgba(61,98,245,.25);border-radius:14px;padding:20px;margin-bottom:20px">
          <div style="font-size:.72rem;font-weight:700;letter-spacing:.1em;color:#6B8FFF;text-transform:uppercase;margin-bottom:12px">Ejemplo real — La IA lee el Padrón de un vehículo</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="display:flex;gap:10px;font-size:.85rem;color:#E2E8F0"><span style="color:#10B981;font-weight:700">→</span> Subes el Padrón de un tracto-camión</div>
            <div style="display:flex;gap:10px;font-size:.85rem;color:#E2E8F0"><span style="color:#10B981;font-weight:700">→</span> La IA lee el año de fabricación automáticamente</div>
            <div style="display:flex;gap:10px;font-size:.85rem;color:#E2E8F0"><span style="color:#F59E0B;font-weight:700">⚠</span> Detecta que supera la antigüedad máxima de 15 años que exige Centinela</div>
            <div style="display:flex;gap:10px;font-size:.85rem;color:#E2E8F0"><span style="color:#EF4444;font-weight:700">🚨</span> Te levanta alerta antes de que llegues a portería</div>
          </div>
        </div>
        <button class="btn-hero-main" onclick="enterApp()" style="margin-top:8px">Empezar gratis →</button>
      </div>
      <div>
        <div class="ia-feats">
          <div class="ia-feat2">
            <span class="if2ico">📖</span>
            <div><b>Estudia todos los manuales y estándares</b><span>Lee los manuales de cada faena y mapea 100% de los requisitos — de plataforma y de terreno.</span></div>
          </div>
          <div class="ia-feat2">
            <span class="if2ico">📄</span>
            <div><b>Lee cada documento que subes</b><span>Extrae vencimientos, fechas, RUTs y datos clave. Tú solo subes el archivo — la IA hace el resto.</span></div>
          </div>
          <div class="ia-feat2">
            <span class="if2ico">🚗</span>
            <div><b>Detecta antigüedad máxima de vehículos</b><span>Lee el Padrón y verifica si el equipo cumple la antigüedad máxima que exige cada faena.</span></div>
          </div>
          <div class="ia-feat2">
            <span class="if2ico">📡</span>
            <div><b>Requisitos de terreno: Pértiga, Radio y más</b><span>Conoce los estándares físicos de cada faena — no solo para acreditar en plataforma, sino para entrar en terreno.</span></div>
          </div>
          <div class="ia-feat2">
            <span class="if2ico">🔔</span>
            <div><b>Alertas automáticas de vencimiento</b><span>Lee la fecha de vencimiento de cada certificado y te avisa con anticipación — sin que tengas que rastrear nada.</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TIPOS EQUIPOS EN CIRCULOS (RendaloMaq style) -->
  <section class="tipos-section">
    <div class="ts-head">
      <span class="sec-label">EQUIPOS QUE ACREDITO</span>
      <h2>Desde alzahombres hasta tracto-camiones.</h2>
      <p>Conozco los requisitos de acreditación de cada tipo de vehículo y maquinaria.</p>
    </div>
    <div class="tipos-grid">
      <div class="tipo-circle"><div class="tc">🚛</div><span>Tracto-Camión</span></div>
      <div class="tipo-circle"><div class="tc">🚚</div><span>Camión</span></div>
      <div class="tipo-circle"><div class="tc">🏗️</div><span>Camión Pluma</span></div>
      <div class="tipo-circle"><div class="tc">🚰</div><span>Camión Aljibe</span></div>
      <div class="tipo-circle"><div class="tc">🚛</div><span>Cama Baja</span></div>
      <div class="tipo-circle"><div class="tc">🚛</div><span>Semirremolque</span></div>
      <div class="tipo-circle"><div class="tc">🚙</div><span>Camioneta</span></div>
      <div class="tipo-circle"><div class="tc">🚌</div><span>Bus</span></div>
      <div class="tipo-circle"><div class="tc">🚐</div><span>MINIBUS</span></div>
      <div class="tipo-circle"><div class="tc">🏗️</div><span>Alzahombre</span></div>
      <div class="tipo-circle"><div class="tc">🏗️</div><span>Grúa</span></div>
      <div class="tipo-circle"><div class="tc">🏗️</div><span>Grúa Horquilla</span></div>
      <div class="tipo-circle"><div class="tc">🚜</div><span>Retroexcavadora</span></div>
      <div class="tipo-circle"><div class="tc">🚜</div><span>Motoniveladora</span></div>
      <div class="tipo-circle"><div class="tc">🚗</div><span>Automóvil</span></div>
      <div class="tipo-circle"><div class="tc">🔧</div><span>Otro</span></div>
    </div>
    <div style="text-align:center;margin-top:32px;display:flex;justify-content:center">
      <button class="btn btn-primary" style="padding:14px 32px;font-size:1rem" onclick="enterApp()">Ver todos los tipos de equipos →</button>
    </div>
  </section>

  <!-- DIFERENCIADOR PRINCIPAL -->
  <section style="background:linear-gradient(135deg,#080E1C 0%,#0F172A 60%,#162240 100%);padding:72px 6%">
    <div style="max-width:960px;margin:0 auto;text-align:center">
      <span style="font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#06B6D4;display:block;margin-bottom:16px">LO QUE NOS DIFERENCIA</span>
      <h2 style="font-size:2.4rem;font-weight:900;color:#F1F5F9;line-height:1.1;margin-bottom:20px">No somos una IA que lee un manual.<br><span style="color:#06B6D4">Integramos la faena al 100%.</span></h2>
      <p style="color:#94A3B8;font-size:1.05rem;line-height:1.7;max-width:720px;margin:0 auto 48px">Trabajamos con profesionales del área para entender el flujo completo de cada faena: las plataformas, los procesos internos, los formularios, los formatos de documentos, los correos y contactos del mandante. Eso es lo que le da a nuestra IA el contexto real — y por eso puedes acreditar de verdad, no solo subir archivos a un sistema.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;text-align:left">
        <div style="background:rgba(255,255,255,.05);border:1px solid rgba(139,170,255,.15);border-radius:16px;padding:22px 24px">
          <div style="font-size:1.5rem;margin-bottom:12px">🏗️</div>
          <h4 style="color:#F1F5F9;font-size:.95rem;font-weight:700;margin:0 0 8px">Procesos completos</h4>
          <p style="color:#64748B;font-size:.82rem;line-height:1.6;margin:0">Conocemos el flujo de principio a fin — cómo se inicia, quién aprueba, qué formulario va en qué etapa.</p>
        </div>
        <div style="background:rgba(255,255,255,.05);border:1px solid rgba(139,170,255,.15);border-radius:16px;padding:22px 24px">
          <div style="font-size:1.5rem;margin-bottom:12px">📋</div>
          <h4 style="color:#F1F5F9;font-size:.95rem;font-weight:700;margin:0 0 8px">Formatos y formularios</h4>
          <p style="color:#64748B;font-size:.82rem;line-height:1.6;margin:0">Sabemos exactamente qué formato acepta cada faena, qué campos son obligatorios y cómo deben venir los documentos.</p>
        </div>
        <div style="background:rgba(255,255,255,.05);border:1px solid rgba(139,170,255,.15);border-radius:16px;padding:22px 24px">
          <div style="font-size:1.5rem;margin-bottom:12px">📧</div>
          <h4 style="color:#F1F5F9;font-size:.95rem;font-weight:700;margin:0 0 8px">Contactos y correos</h4>
          <p style="color:#64748B;font-size:.82rem;line-height:1.6;margin:0">Tenemos los contactos reales del mandante para gestionar observaciones, correcciones y aprobaciones directamente.</p>
        </div>
        <div style="background:rgba(255,255,255,.05);border:1px solid rgba(139,170,255,.15);border-radius:16px;padding:22px 24px">
          <div style="font-size:1.5rem;margin-bottom:12px">🤖</div>
          <h4 style="color:#F1F5F9;font-size:.95rem;font-weight:700;margin:0 0 8px">IA con contexto real</h4>
          <p style="color:#64748B;font-size:.82rem;line-height:1.6;margin:0">La IA no adivina — tiene el conocimiento de un especialista que trabajó dentro de la faena. Por eso es precisa, no genérica.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- VIDEO SEQUENCE FULL WIDTH (plays one video, then the other, on loop) -->
  <section style="background:#000;overflow:hidden;line-height:0">
    <video id="vidSeq1" autoplay muted playsinline style="width:100%;display:block;max-height:640px;object-fit:cover">
      <source src="/crealo_ahora.mp4" type="video/mp4">
    </video>
  </section>
  <script>
  (function(){
    function initVidSeq(){
      var v = document.getElementById('vidSeq1');
      if(!v) return;
      var sources = ['crealo_ahora.mp4','crea_un_video_de_TRABAJADORES.mp4'];
      var idx = 0;
      v.addEventListener('ended', function(){
        idx = (idx + 1) % sources.length;
        v.src = sources[idx];
        v.play().catch(function(){});
      });
    }
    if(document.readyState === 'complete' || document.readyState === 'interactive'){ setTimeout(initVidSeq, 0); }
    else { document.addEventListener('DOMContentLoaded', initVidSeq); }
  })();
  </script>

  <!-- FAQ -->
  <section class="hs-sect-pad" style="background:#fff;padding:80px 6%">
    <div style="max-width:820px;margin:0 auto">
      <div style="text-align:center;margin-bottom:52px">
        <span class="sec-label">PREGUNTAS FRECUENTES</span>
        <h2 style="font-size:2.2rem;font-weight:900;color:var(--azul);margin:12px 0">Todo lo que necesitas saber sobre ACREDITTIA</h2>
      </div>
      <div style="display:flex;flex-direction:column;gap:0">

        <details style="border-bottom:1px solid var(--linea);padding:0" open>
          <summary style="display:flex;justify-content:space-between;align-items:center;padding:22px 4px;cursor:pointer;list-style:none;font-weight:700;font-size:1rem;color:var(--azul)">
            ¿Para qué tipo de empresa es ACREDITTIA?
            <span style="font-size:1.4rem;color:var(--cyan);flex-shrink:0;margin-left:12px">+</span>
          </summary>
          <p style="color:var(--gris);font-size:.92rem;line-height:1.7;padding:0 4px 22px;margin:0">ACREDITTIA está diseñado para empresas proveedoras que trabajan en una o más faenas mineras y que necesitan gestionar acreditaciones de forma continua. Es especialmente útil para empresas con un departamento de acreditación propio que maneja múltiples contratos activos al mismo tiempo — y que busca centralizar, automatizar y reducir la carga de trabajo con IA.</p>
        </details>

        <details style="border-bottom:1px solid var(--linea);padding:0">
          <summary style="display:flex;justify-content:space-between;align-items:center;padding:22px 4px;cursor:pointer;list-style:none;font-weight:700;font-size:1rem;color:var(--azul)">
            ¿Cómo se integra ACREDITTIA a las plataformas de cada faena?
            <span style="font-size:1.4rem;color:var(--cyan);flex-shrink:0;margin-left:12px">+</span>
          </summary>
          <p style="color:var(--gris);font-size:.92rem;line-height:1.7;padding:0 4px 22px;margin:0">Nos conectamos directamente a las plataformas que usa cada mandante — SIGA, Workmate, Metacontratas, Webcontrol y otras. Gestionamos el proceso desde adentro: subimos documentos, respondemos observaciones y actualizamos estados. Tu equipo no necesita ingresar a cada sistema por separado — todo pasa por ACREDITTIA.</p>
        </details>

        <details style="border-bottom:1px solid var(--linea);padding:0">
          <summary style="display:flex;justify-content:space-between;align-items:center;padding:22px 4px;cursor:pointer;list-style:none;font-weight:700;font-size:1rem;color:var(--azul)">
            ¿En cuánto reduce ACREDITTIA el equipo de acreditación?
            <span style="font-size:1.4rem;color:var(--cyan);flex-shrink:0;margin-left:12px">+</span>
          </summary>
          <p style="color:var(--gris);font-size:.92rem;line-height:1.7;padding:0 4px 22px;margin:0">Las empresas que usan ACREDITTIA reducen hasta un 80% las horas-hombre dedicadas a acreditación. La IA hace la revisión documental, detecta errores, gestiona plataformas y monitorea vencimientos de forma autónoma. Lo que antes requería 3 o 4 personas trabajando en paralelo, ahora lo maneja la plataforma — y tu equipo solo valida y toma decisiones.</p>
        </details>

        <details style="border-bottom:1px solid var(--linea);padding:0">
          <summary style="display:flex;justify-content:space-between;align-items:center;padding:22px 4px;cursor:pointer;list-style:none;font-weight:700;font-size:1rem;color:var(--azul)">
            ¿Puedo gestionar varias faenas al mismo tiempo?
            <span style="font-size:1.4rem;color:var(--cyan);flex-shrink:0;margin-left:12px">+</span>
          </summary>
          <p style="color:var(--gris);font-size:.92rem;line-height:1.7;padding:0 4px 22px;margin:0">Sí — y eso es exactamente para lo que está hecho. Puedes tener contratos activos en Los Pelambres, Candelaria y El Teniente al mismo tiempo, cada uno con su propia carpeta de personal, equipos y documentos. El panel central te da visibilidad de todos desde un solo lugar: qué está vigente, qué está por vencer y qué necesita acción.</p>
        </details>

        <details style="border-bottom:1px solid var(--linea);padding:0">
          <summary style="display:flex;justify-content:space-between;align-items:center;padding:22px 4px;cursor:pointer;list-style:none;font-weight:700;font-size:1rem;color:var(--azul)">
            ¿Qué pasa con los vencimientos una vez que ya estoy acreditado?
            <span style="font-size:1.4rem;color:var(--cyan);flex-shrink:0;margin-left:12px">+</span>
          </summary>
          <p style="color:var(--gris);font-size:.92rem;line-height:1.7;padding:0 4px 22px;margin:0">ACREDITTIA monitorea 24/7 la vigencia de cada acreditación activa — persona por persona, equipo por equipo, faena por faena. Te alerta con anticipación cuando algo está por vencer y gestiona la renovación directamente en la plataforma del mandante. No es un servicio puntual: es la herramienta con la que tu departamento opera permanentemente.</p>
        </details>

        <details style="border-bottom:1px solid var(--linea);padding:0">
          <summary style="display:flex;justify-content:space-between;align-items:center;padding:22px 4px;cursor:pointer;list-style:none;font-weight:700;font-size:1rem;color:var(--azul)">
            ¿Sirve para cualquier mandante o solo algunos?
            <span style="font-size:1.4rem;color:var(--cyan);flex-shrink:0;margin-left:12px">+</span>
          </summary>
          <p style="color:var(--gris);font-size:.92rem;line-height:1.7;padding:0 4px 22px;margin:0">Actualmente estamos integrados a faenas de AMSA (Los Pelambres, Centinela, Zaldívar, Antucoya), Lundin Mining (Candelaria, Caserones) y Codelco (Andina, El Teniente), con más faenas incorporándose continuamente. Cada integración incluye los estándares, plataformas y requisitos específicos de ese mandante — cargados y actualizados directamente desde sus documentos oficiales.</p>
        </details>

        <details style="padding:0">
          <summary style="display:flex;justify-content:space-between;align-items:center;padding:22px 4px;cursor:pointer;list-style:none;font-weight:700;font-size:1rem;color:var(--azul)">
            ¿Cuánto cuesta y cómo funciona el precio?
            <span style="font-size:1.4rem;color:var(--cyan);flex-shrink:0;margin-left:12px">+</span>
          </summary>
          <p style="color:var(--gris);font-size:.92rem;line-height:1.7;padding:0 4px 22px;margin:0">ACREDITTIA funciona con suscripción mensual fija. Gestiona todos los contratos, faenas, personas y equipos que necesites, sin cobro extra por proceso. A diferencia de las empresas acreditadoras que cobran por cada acreditación y luego desaparecen, nosotros somos la plataforma donde tu equipo opera todos los días — con seguimiento continuo, alertas automáticas y soporte permanente.</p>
        </details>

      </div>
    </div>
  </section>

  <!-- CTA FINAL BANNER (RendaloMaq style) -->
  <section class="cta-banner">
    <h2>CENTRALIZA TODAS TUS FAENAS<br>EN UNA SOLA PLATAFORMA.</h2>
    <p>La IA gestiona, valida y mantiene vigentes todas tus acreditaciones — mientras tu equipo se enfoca en lo que realmente importa. Ideal para empresas proveedoras con múltiples contratos activos.</p>
    <button class="btn-cta-white" onclick="enterApp()">Solicitar acceso a ACREDITTIA →</button>
  </section>

  <!-- FOOTER -->
  <footer class="footer2">
    <div class="f2-inner">
      <div class="f2-top">
        <div class="f2-brand">
          <div class="f2logo">
            <svg style="width:26px;height:24px;flex-shrink:0" viewBox="0 0 100 92" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="lg-ftr1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6B8FFF"/><stop offset=".5" stop-color="#3D62F5"/><stop offset="1" stop-color="#2448E0"/></linearGradient><linearGradient id="lg-ftr2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8BAAFF"/><stop offset="1" stop-color="#3D62F5"/></linearGradient></defs><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="url(#lg-ftr1)"/><path d="M50 6 L66 36 L50 44 Z" fill="url(#lg-ftr2)"/><path d="M50 6 L92 80 L80 80 L50 24 Z" fill="#1E293B" opacity=".22"/></svg>
            ACREDIT<span style="color:var(--cyan);margin-left:-.1em">TIA</span>
          </div>
          <p>La plataforma inteligente que conecta todas tus acreditaciones mineras, energéticas y de construcción en un solo lugar.</p>
          <p style="margin-top:10px;font-size:.8rem">📧 contacto@acredittia.cl<br>🌐 www.acredittia.cl</p>
        </div>
        <div class="f2-col">
          <h4>Plataforma</h4>
          <a onclick="document.getElementById('como-funciona').scrollIntoView({behavior:'smooth'})">Cómo Funciona</a>
          <a onclick="document.getElementById('plataformas').scrollIntoView({behavior:'smooth'})">Plataformas</a>
          <a onclick="enterApp()">Iniciar sesión</a>
          <a onclick="enterApp()">Registrar empresa</a>
        </div>
        <div class="f2-col">
          <h4>Sectores</h4>
          <a>Gran Minería</a>
          <a>Energía Solar</a>
          <a>Energía Eólica</a>
          <a>Construcción</a>
        </div>
        <div class="f2-col">
          <h4>Empresa</h4>
          <a>Sobre nosotros</a>
          <a>Contacto</a>
          <a>Términos de uso</a>
          <a>Privacidad</a>
        </div>
      </div>
      <div class="f2-bottom">
        <span>© 2026 ACREDITTIA SpA · Todos los derechos reservados</span>
        <span>Hecho en Chile 🇨🇱 · IA + Minería + Energía</span>
      </div>
    </div>
  </footer>

</div>

` }} 
    />
  );
}
