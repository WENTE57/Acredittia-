
"use client";
export default function PlantillasPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="view-head">
    <div><h2>Plantillas de requisitos</h2><p>Documentos exigidos por Los Pelambres para empresa, personal, equipos y conductores (EMSIPOR).</p></div>
    <div class="view-head-actions">
      <button class="btn-outline" onclick="toast('Exportar — próximamente')">↓ Exportar</button>
      <button class="btn-primary" onclick="toast('Nueva plantilla — próximamente')">+ Nueva plantilla</button>
    </div>
  </div>
  <div class="dkpis5" style="grid-template-columns:repeat(4,1fr)">
    <div class="dkpi5"><div class="ic5">📐</div><div><div class="kt">Plantillas</div><div class="kn">4</div><div class="ks">activas — Los Pelambres</div></div></div>
    <div class="dkpi5"><div class="ic5">📑</div><div><div class="kt">Documentos totales</div><div class="kn">42</div><div class="ks">entre las 4 plantillas</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(239,68,68,.15)">❗</div><div><div class="kt">Obligatorios</div><div class="kn">38</div><div class="ks bad">90% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(148,163,184,.15)">🧩</div><div><div class="kt">Opcionales</div><div class="kn">4</div><div class="ks">10% del total</div></div></div>
  </div>
  <div class="wcard" style="margin-bottom:16px">
      <div class="ph" style="align-items:center">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="background:#dbeafe;color:#1e40af;font-size:.78rem;font-weight:700;padding:6px 14px;border-radius:8px">🏢 Empresa</span>
          <span style="font-size:.78rem;color:var(--gris)">Por contrato</span>
          <span style="font-size:.72rem;color:#0369a1;background:#e0f2fe;padding:3px 9px;border-radius:8px;font-weight:600">📡 Plataforma SIGA</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:.8rem;color:var(--gris)">10 documentos · 9 obligatorios</span>
          <button class="btn-outline" style="padding:7px 12px;font-size:.76rem" onclick="toast('Editar plantilla — próximamente')">✎ Editar</button>
        </div>
      </div>
      <div style="padding:4px 4px 0"><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Contrato de Servicio</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Estrategias de Control de Seguridad y Salud Ocupacional</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Declaración del Representante Legal</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Reunión de Arranque</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Programa de Trabajo SSO</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Copia Carta Inicio Actividades SERNAGEOMIN</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Matriz de Riesgo</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Procedimiento de Emergencia</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Certificado Ley 16.744</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Jornada Excepcional de Trabajo</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip inactivo" style="font-size:.65rem">Opcional</span>
        </div>
      </div></div>
    </div>
    <details class="fold-wrap">
      <summary class="fold-btn">▼ Ver las 3 plantillas adicionales (Personal, Equipos, EMSIPOR)...</summary>
      <div style="margin-top:12px">
      <div class="wcard" style="margin-bottom:16px">
      <div class="ph" style="align-items:center">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="background:#dcfce7;color:#166534;font-size:.78rem;font-weight:700;padding:6px 14px;border-radius:8px">👤 Personal</span>
          <span style="font-size:.78rem;color:var(--gris)">Por trabajador</span>
          <span style="font-size:.72rem;color:#0369a1;background:#e0f2fe;padding:3px 9px;border-radius:8px;font-weight:600">📡 Plataforma SIGA</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:.8rem;color:var(--gris)">13 documentos · 11 obligatorios</span>
          <button class="btn-outline" style="padding:7px 12px;font-size:.76rem" onclick="toast('Editar plantilla — próximamente')">✎ Editar</button>
        </div>
      </div>
      <div style="padding:4px 4px 0"><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Cédula de Identidad</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Contrato de Trabajo</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Anexo Contrato</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Certificado de Salud y Examen de Altura</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Inducción Hombre Nuevo</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Reglamento Interno</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Certificado de Estudios</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Finiquito Anterior</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip inactivo" style="font-size:.65rem">Opcional</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Consentimiento Alcohol y Drogas</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">ODI Curso COVID</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Certificado de Residencia</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip inactivo" style="font-size:.65rem">Opcional</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">IRL Mina y Chancado</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Manejo Defensivo</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div></div>
    </div><div class="wcard" style="margin-bottom:16px">
      <div class="ph" style="align-items:center">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="background:#fef3c7;color:#92400e;font-size:.78rem;font-weight:700;padding:6px 14px;border-radius:8px">🚛 Equipo / Vehículo</span>
          <span style="font-size:.78rem;color:var(--gris)">Por unidad</span>
          <span style="font-size:.72rem;color:#0369a1;background:#e0f2fe;padding:3px 9px;border-radius:8px;font-weight:600">📡 Plataforma SIGA</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:.8rem;color:var(--gris)">10 documentos · 9 obligatorios</span>
          <button class="btn-outline" style="padding:7px 12px;font-size:.76rem" onclick="toast('Editar plantilla — próximamente')">✎ Editar</button>
        </div>
      </div>
      <div style="padding:4px 4px 0"><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Permiso de Circulación</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">SOAP</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Revisión Técnica</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">GPS</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Certificado Incorporación Multiflota GPS MLP</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Certificado de Láminas</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Inspección Visual</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Certificado de Mantenciones</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Certificado de Operatividad</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Certificado Barra Antivuelcos (solo camionetas)</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 SIGA</span>
          <span class="chip inactivo" style="font-size:.65rem">Opcional</span>
        </div>
      </div></div>
    </div>
    <div style="text-align:center;margin:16px 0">
      <button class="fold-btn" onclick="toggleFold('plan-extra', this, '▼ Mostrar plantilla adicional (EMSIPOR Conductores)...', '▲ Mostrar menos')">▼ Mostrar plantilla adicional (EMSIPOR Conductores)...</button>
    </div>
    <div id="plan-extra" style="display:none">
    <div class="wcard" style="margin-bottom:16px">
      <div class="ph" style="align-items:center">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="background:#ede9fe;color:#5b21b6;font-size:.78rem;font-weight:700;padding:6px 14px;border-radius:8px">🪪 EMSIPOR conductores</span>
          <span style="font-size:.78rem;color:var(--gris)">Licencia interna de mina</span>
          <span style="font-size:.72rem;color:#0369a1;background:#e0f2fe;padding:3px 9px;border-radius:8px;font-weight:600">📡 Plataforma EMSIPOR</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:.8rem;color:var(--gris)">9 documentos · 9 obligatorios</span>
          <button class="btn-outline" style="padding:7px 12px;font-size:.76rem" onclick="toast('Editar plantilla — próximamente')">✎ Editar</button>
        </div>
      </div>
      <div style="padding:4px 4px 0"><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Solicitud AIC Mina</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 EMSIPOR</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Fotografía Trabajador</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 EMSIPOR</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Licencia Municipal de Conducir</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 EMSIPOR</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Hoja de Vida del Conductor</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 EMSIPOR</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Psicosensométrico Riguroso</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 EMSIPOR</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Curso Manejo Defensivo y Alta Montaña</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 EMSIPOR</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Examen Práctico Mina</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 EMSIPOR</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Anexo Faena</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 EMSIPOR</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div><div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.83rem;color:var(--txt)">Anexo Mina</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="chip" style="background:#e0f2fe;color:#0369a1;font-size:.62rem">📡 EMSIPOR</span>
          <span class="chip vencido" style="font-size:.65rem">Obligatorio</span>
        </div>
      </div></div>
    </div>
    </div>` }} />
  );
}
