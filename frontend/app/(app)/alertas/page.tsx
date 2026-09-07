
"use client";
export default function AlertasPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="view-head">
    <div><h2>Alertas</h2><p>Supervisa y gestiona las alertas críticas y preventivas que requieren atención.</p></div>
    <div class="view-head-actions">
      <button class="btn-outline" onclick="toast('Configurar notificaciones — próximamente')">⚙ Configurar notificaciones</button>
    </div>
  </div>
  <div class="dkpis5" style="grid-template-columns:repeat(4,1fr)">
    <div class="dkpi5"><div class="ic5" style="background:rgba(239,68,68,.15)">🔴</div><div><div class="kt">Críticas</div><div class="kn" style="color:#f87171">24</div><div class="ks bad">requieren atención</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(245,158,11,.15)">⚠️</div><div><div class="kt">Advertencias</div><div class="kn" style="color:#fbbf24">1</div><div class="ks warn">requieren atención</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(61,98,245,.15)">ℹ️</div><div><div class="kt">Informativas</div><div class="kn">3</div><div class="ks">nuevas</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(16,185,129,.15)">✅</div><div><div class="kt">Resueltas (30 días)</div><div class="kn">50</div><div class="ks ok">en los últimos 30 días</div></div></div>
  </div>
  <div class="atabs">
    <span class="atab active" onclick="setAlertTab(this,'all')">Todas</span>
    <span class="atab" onclick="setAlertTab(this,'critica')">Críticas <span style="background:#fee2e2;color:#b91c1c;border-radius:10px;padding:1px 6px;font-size:.7rem">24</span></span>
    <span class="atab" onclick="setAlertTab(this,'advertencia')">Advertencias</span>
    <span class="atab" onclick="setAlertTab(this,'informativa')">Informativas</span>
    <span class="atab" onclick="setAlertTab(this,'leida')">Resueltas</span>
  </div>
  <div class="view-filters">
    <input class="view-search" placeholder="Buscar alerta por palabra clave..." oninput="filterTable(this.value,'al-tbl')">
    <select class="view-select"><option>Estado: Todas</option></select>
    <select class="view-select"><option>Tipo: Todos</option></select>
    <select class="view-select"><option>Ámbito: Todos</option></select>
    <select class="view-select"><option>Faena: Todas</option></select>
  </div>
  <div class="vtable-wrap">
    <table class="vtable" id="al-tbl">
      <thead><tr><th>Prioridad</th><th>Alerta</th><th>Tipo</th><th>Ámbito</th><th>Relacionado con</th><th>Faena / Contrato</th><th>Fecha</th><th>Estado</th><th>Acciones</th></tr></thead>
      <tbody id="al-tbody"><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Anexo Contrato</div><div class="sub">Castro Vera Marcelo — RUT 16.789.123-4</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">C</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Castro Vera Marcelo</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Los Pelambres / Transporte y Operaciones MLP</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Registro de la Charla de Inducción Persona Nueva</div><div class="sub">Rojas Fuentes Matías — RUT 13.456.789-4</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">R</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Rojas Fuentes Matías</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Andina / Servicios Mina Andina</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Registro de la Charla de Inducción Persona Nueva</div><div class="sub">Leiva Campos Andrés — RUT 13.777.888-9</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">L</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Leiva Campos Andrés</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">El Teniente / Mantención Minera El Teniente</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Anexo Contrato</div><div class="sub">Peña Castillo Diego — RUT 13.890.777-8</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">P</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Peña Castillo Diego</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Candelaria / Servicios Candelaria</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Anexo Contrato</div><div class="sub">Donoso Araya Francisca — RUT 13.987.777-6</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">D</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Donoso Araya Francisca</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Caserones / Servicios Caserones</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Curso Teórico/Práctico Manejo a la Defensiva y Conducción 4x4 en Alta Montaña</div><div class="sub">Gallardo Meza Sebastián — RUT 13.777.999-1</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">G</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Gallardo Meza Sebastián</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Parque Eólico Antofagasta I / Servicios Parque Eólico Antofagasta I</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Revisión Técnica</div><div class="sub">Mitsubishi L200 4x4 — RUT UVWX-61</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">M</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Mitsubishi L200 4x4</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Los Pelambres / Transporte y Operaciones MLP</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Seguro Obligatorio</div><div class="sub">Toyota Hilux 4x4 — RUT ANDF-06</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">T</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Toyota Hilux 4x4</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Andina / Servicios Mina Andina</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Seguro Obligatorio</div><div class="sub">Manitou MT-1440 — RUT TENF-06</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">M</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Manitou MT-1440</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">El Teniente / Mantención Minera El Teniente</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Revisión Técnica</div><div class="sub">Toyota Hilux — RUT CANF-06</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">T</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Toyota Hilux</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Candelaria / Servicios Candelaria</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Revisión Técnica</div><div class="sub">JLG Alzahombre — RUT CASF-06</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">J</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">JLG Alzahombre</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Caserones / Servicios Caserones</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Padrón o Contrato de Arrendamiento</div><div class="sub">Caterpillar 140M — RUT EOLF-06</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">C</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Caterpillar 140M</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Parque Eólico Antofagasta I / Servicios Parque Eólico Antofagasta I</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 14 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Cédula de Identidad</div><div class="sub">Castro Vera Marcelo — RUT 16.789.123-4</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">C</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Castro Vera Marcelo</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Los Pelambres / Transporte y Operaciones MLP</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Autorización del Trabajador/a para Uso y Almacenamiento de Datos Personales</div><div class="sub">Rojas Fuentes Matías — RUT 13.456.789-4</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">R</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Rojas Fuentes Matías</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Andina / Servicios Mina Andina</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Autorización del Trabajador/a para Uso y Almacenamiento de Datos Personales</div><div class="sub">Leiva Campos Andrés — RUT 13.777.888-9</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">L</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Leiva Campos Andrés</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">El Teniente / Mantención Minera El Teniente</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Cédula de Identidad</div><div class="sub">Peña Castillo Diego — RUT 13.890.777-8</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">P</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Peña Castillo Diego</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Candelaria / Servicios Candelaria</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Cédula de Identidad</div><div class="sub">Donoso Araya Francisca — RUT 13.987.777-6</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">D</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Donoso Araya Francisca</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Caserones / Servicios Caserones</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Certificado de Competencia</div><div class="sub">Gallardo Meza Sebastián — RUT 13.777.999-1</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">G</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Gallardo Meza Sebastián</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Parque Eólico Antofagasta I / Servicios Parque Eólico Antofagasta I</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Permiso de Circulación</div><div class="sub">Mitsubishi L200 4x4 — RUT UVWX-61</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">M</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Mitsubishi L200 4x4</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Los Pelambres / Transporte y Operaciones MLP</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Copia del Certificado de Revisión Técnica o Certificado de Homologación</div><div class="sub">Toyota Hilux 4x4 — RUT ANDF-06</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">T</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Toyota Hilux 4x4</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Andina / Servicios Mina Andina</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Copia del Certificado de Revisión Técnica o Certificado de Homologación</div><div class="sub">Manitou MT-1440 — RUT TENF-06</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">M</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Manitou MT-1440</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">El Teniente / Mantención Minera El Teniente</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Permiso de Circulación</div><div class="sub">Toyota Hilux — RUT CANF-06</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">T</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Toyota Hilux</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Candelaria / Servicios Candelaria</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Permiso de Circulación</div><div class="sub">JLG Alzahombre — RUT CASF-06</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">J</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">JLG Alzahombre</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Caserones / Servicios Caserones</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip critica" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⊗ Crítica</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Vencimiento: Última Revisión y Mantención (Certificado de Revisión Técnica)</div><div class="sub">Caterpillar 140M — RUT EOLF-06</div></td>
    <td><span class="chip critica" style="font-size:.65rem">Crítica</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">C</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Caterpillar 140M</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Parque Eólico Antofagasta I / Servicios Parque Eólico Antofagasta I</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 días</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip advertencia" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">⚠ Advertencia</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Certificado próximo a vencer: Permiso de Circulación</div><div class="sub">Vence en 27 días</div></td>
    <td><span class="chip advertencia" style="font-size:.65rem">Advertencia</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">M</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Mercedes Actros 2653</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Los Pelambres / Transporte y Operaciones MLP</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 4 horas</td>
    <td><span class="chip vencido" style="font-size:.65rem">No leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip informativa" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">ℹ Informativa</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Documento actualizado</div><div class="sub">Política de Seguridad y Salud — REQ-009</div></td>
    <td><span class="chip informativa" style="font-size:.65rem">Informativa</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">T</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Todas las faenas</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Todas las faenas</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 1 día</td>
    <td><span class="chip activo" style="font-size:.65rem">Leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><span class="chip informativa" style="font-size:.65rem;display:inline-flex;align-items:center;gap:4px">ℹ Informativa</span></td>
    <td><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Reporte generado</div><div class="sub">Cumplimiento de requisitos — todas las faenas</div></td>
    <td><span class="chip informativa" style="font-size:.65rem">Informativa</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#3D62F5,#6B8FFF);color:#fff;display:grid;place-items:center;font-size:.7rem;font-weight:700;flex-shrink:0">S</div><div><div style="font-size:.8rem;font-weight:600;color:var(--txt)">Sistema</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Todas las faenas</td>
    <td style="font-size:.78rem;color:var(--gris)">Hace 1 día</td>
    <td><span class="chip activo" style="font-size:.65rem">Leída</span></td>
    <td><span class="act-ico" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr></tbody>
    </table>
    <div class="tfoot"><span>Mostrando 1 a 27 de 27 alertas</span></div>
  </div>` }} />
  );
}
