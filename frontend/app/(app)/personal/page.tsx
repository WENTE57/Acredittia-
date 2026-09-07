
"use client";
export default function PersonasPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="view-head">
    <div><h2>Personal</h2><p>Gestiona y supervisa a todo el personal acreditado de tu empresa en sus diferentes faenas.</p></div>
    <div class="view-head-actions">
      <button class="btn-outline" onclick="toast('Exportar — próximamente')">↓ Exportar</button>
      <button class="btn-primary" onclick="goFaenas()">+ Agregar personal</button>
    </div>
  </div>
  <div class="dkpis5">
    <div class="dkpi5"><div class="ic5">👥</div><div><div class="kt">Total personal</div><div class="kn">58</div><div class="ks">en tu empresa</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(16,185,129,.15)">✅</div><div><div class="kt">Acreditados</div><div class="kn">44</div><div class="ks ok">76% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(245,158,11,.15)">⏳</div><div><div class="kt">Por vencer (próx. 30 días)</div><div class="kn">0</div><div class="ks warn">0% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(239,68,68,.15)">❌</div><div><div class="kt">Vencidos</div><div class="kn">6</div><div class="ks bad">10% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(148,163,184,.15)">📋</div><div><div class="kt">Sin asignación a faena</div><div class="kn">8</div><div class="ks">14% del total</div></div></div>
  </div>
  <div class="view-filters">
    <input class="view-search" placeholder="Buscar por nombre, RUT o cargo..." oninput="filterTable(this.value,'pers-tbl')">
    <select class="view-select"><option>Estado: Todos</option><option>Acreditado</option><option>Por vencer</option><option>Vencido</option></select>
    <select class="view-select"><option>Faena: Todas</option></select>
    <select class="view-select"><option>Cargo: Todos</option></select>
  </div>
  <div class="vtable-wrap">
    <table class="vtable" id="pers-tbl">
      <thead><tr><th>Trabajador</th><th>RUT</th><th>Cargo</th><th>Faenas asignadas</th><th>Estado</th><th>Vencimiento próximo</th><th>Certificaciones principales</th><th>Acciones</th></tr></thead>
      <tbody><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#2448E0">RM</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp0')">Ramírez Mondaca Carlos</div><div class="sub">15.234.678-9</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">15.234.678-9</td>
      <td style="font-size:.8rem">Conductor Nacional</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp0')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#3D62F5">CS</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp1')">Contreras Sepúlveda Diego</div><div class="sub">14.123.456-K</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">14.123.456-K</td>
      <td style="font-size:.8rem">Conductor Nacional</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">08 jul 2026</div><div class="sub">37 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp1')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1a3db8">GP</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp2')">González Pizarro Roberto</div><div class="sub">12.111.222-3</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">12.111.222-3</td>
      <td style="font-size:.8rem">Conductor Nacional</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp2')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#4F75FF">HC</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp3')">Herrera Cáceres Rodrigo</div><div class="sub">13.890.234-5</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">13.890.234-5</td>
      <td style="font-size:.8rem">Conductor Nacional</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">199 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp3')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1E3A8A">PL</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp4')">Pinto Leiva Mauricio</div><div class="sub">16.450.789-2</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">16.450.789-2</td>
      <td style="font-size:.8rem">Conductor Pesado</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp4')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#163278">AF</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp5')">Araya Fuenzalida Gonzalo</div><div class="sub">17.891.234-6</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">17.891.234-6</td>
      <td style="font-size:.8rem">Conductor Pesado</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp5')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#2448E0">FG</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp6')">Fuentes Gutiérrez Ana María</div><div class="sub">16.345.789-0</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">16.345.789-0</td>
      <td style="font-size:.8rem">Supervisora HSE</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp6')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#3D62F5">VM</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp7')">Valenzuela Mora Patricia</div><div class="sub">17.456.890-1</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">17.456.890-1</td>
      <td style="font-size:.8rem">Prevencionista</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp7')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1a3db8">SJ</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp8')">Soto Jiménez Claudia</div><div class="sub">19.012.456-7</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">19.012.456-7</td>
      <td style="font-size:.8rem">Administradora Contrato</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp8')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#4F75FF">CV</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp9')">Castro Vera Marcelo</div><div class="sub">16.789.123-4</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">16.789.123-4</td>
      <td style="font-size:.8rem">Mecánico Industrial</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">Contrato de Tr</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp9')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1E3A8A">MC</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp10')">Muñoz Carrasco Felipe</div><div class="sub">18.567.901-2</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">18.567.901-2</td>
      <td style="font-size:.8rem">Operador de Módulo</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp10')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#163278">LA</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp11')">Lagos Arenas Valentina</div><div class="sub">18.222.333-4</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">18.222.333-4</td>
      <td style="font-size:.8rem">Supervisora de Turno</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp11')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#2448E0">ER</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp12')">Espinoza Rojas Hernán</div><div class="sub">15.678.901-3</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">15.678.901-3</td>
      <td style="font-size:.8rem">Mecánico Diesel</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp12')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#3D62F5">MC</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp13')">Morales Candia Javiera</div><div class="sub">17.123.456-8</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">17.123.456-8</td>
      <td style="font-size:.8rem">Enfermera Faena</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp13')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1a3db8">RB</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp14')">Reyes Bustamante Jorge</div><div class="sub">14.567.890-5</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">14.567.890-5</td>
      <td style="font-size:.8rem">Operador Cargador Frontal</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">15 ago 2026</div><div class="sub">75 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp14')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#4F75FF">NP</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp15')">Núñez Paredes Francisca</div><div class="sub">19.345.678-1</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">19.345.678-1</td>
      <td style="font-size:.8rem">Supervisora Operaciones</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp15')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1E3A8A">IT</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp16')">Ibáñez Tapia Cristóbal</div><div class="sub">16.901.234-7</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">16.901.234-7</td>
      <td style="font-size:.8rem">Técnico Electromecánico</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp16')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#163278">VS</div>
        <div><div class="ct-link" onclick="openSubject('lp1','personal','dp17')">Vera Salinas Amanda</div><div class="sub">15.456.789-0</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">15.456.789-0</td>
      <td style="font-size:.8rem">Coordinadora Logística</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">199 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','personal','dp17')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#2448E0">BC</div>
        <div><div class="ct-link" onclick="openSubject('and1','personal','dp18')">Bravo Contreras Manuel</div><div class="sub">14.567.123-8</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">14.567.123-8</td>
      <td style="font-size:.8rem">Supervisor de Terreno</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Autorización d</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','personal','dp18')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#3D62F5">SM</div>
        <div><div class="ct-link" onclick="openSubject('and1','personal','dp19')">Salazar Muñoz Pamela</div><div class="sub">15.678.234-9</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">15.678.234-9</td>
      <td style="font-size:.8rem">Prevencionista de Riesgos</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Autorización d</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','personal','dp19')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1a3db8">TI</div>
        <div><div class="ct-link" onclick="openSubject('and1','personal','dp20')">Toledo Ibarra Cristian</div><div class="sub">16.789.345-0</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">16.789.345-0</td>
      <td style="font-size:.8rem">Mecánico Industrial</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">05 ago 2026</div><div class="sub">65 días</div></td>
      <td><span class="cert-tag">Autorización d</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','personal','dp20')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#4F75FF">PL</div>
        <div><div class="ct-link" onclick="openSubject('and1','personal','dp21')">Pizarro León Fernanda</div><div class="sub">17.890.456-1</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">17.890.456-1</td>
      <td style="font-size:.8rem">Administradora de Contrato</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Autorización d</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','personal','dp21')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1E3A8A">VC</div>
        <div><div class="ct-link" onclick="openSubject('and1','personal','dp22')">Vargas Cortés Ignacio</div><div class="sub">18.901.567-2</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">18.901.567-2</td>
      <td style="font-size:.8rem">Operador de Equipos</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">199 días</div></td>
      <td><span class="cert-tag">Autorización d</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','personal','dp22')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#163278">SM</div>
        <div><div class="ct-link" onclick="openSubject('and1','personal','dp23')">Sáez Molina Daniela</div><div class="sub">19.012.678-3</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">19.012.678-3</td>
      <td style="font-size:.8rem">Enfermera de Faena</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Autorización d</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','personal','dp23')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#2448E0">RF</div>
        <div><div class="ct-link" onclick="openSubject('and1','personal','dp24')">Rojas Fuentes Matías</div><div class="sub">13.456.789-4</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">13.456.789-4</td>
      <td style="font-size:.8rem">Técnico Eléctrico</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">Certificado de</span><span class="cert-tag">Anexo de Exclu</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','personal','dp24')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#3D62F5">CS</div>
        <div><div class="ct-link" onclick="openSubject('and1','personal','dp25')">Cárdenas Silva Josefa</div><div class="sub">12.345.678-5</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">12.345.678-5</td>
      <td style="font-size:.8rem">Supervisora HSE</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Autorización d</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','personal','dp25')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1a3db8">FR</div>
        <div><div class="ct-link" onclick="openSubject('ten1','personal','dp26')">Fuentealba Rojas Ricardo</div><div class="sub">14.111.222-3</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">14.111.222-3</td>
      <td style="font-size:.8rem">Supervisor de Mantención</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Autorización d</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','personal','dp26')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#4F75FF">CB</div>
        <div><div class="ct-link" onclick="openSubject('ten1','personal','dp27')">Cifuentes Bravo Carla</div><div class="sub">15.222.333-4</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">15.222.333-4</td>
      <td style="font-size:.8rem">Prevencionista</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Autorización d</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','personal','dp27')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1E3A8A">AT</div>
        <div><div class="ct-link" onclick="openSubject('ten1','personal','dp28')">Aravena Torres Nicolás</div><div class="sub">16.333.444-5</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">16.333.444-5</td>
      <td style="font-size:.8rem">Operador de Grúa</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">12 ago 2026</div><div class="sub">72 días</div></td>
      <td><span class="cert-tag">Autorización d</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','personal','dp28')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#163278">BH</div>
        <div><div class="ct-link" onclick="openSubject('ten1','personal','dp29')">Bustos Herrera Camila</div><div class="sub">17.444.555-6</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">17.444.555-6</td>
      <td style="font-size:.8rem">Administrativa de Contrato</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Autorización d</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','personal','dp29')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#2448E0">SR</div>
        <div><div class="ct-link" onclick="openSubject('ten1','personal','dp30')">Sandoval Reyes Patricio</div><div class="sub">18.555.666-7</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">18.555.666-7</td>
      <td style="font-size:.8rem">Mecánico Diesel</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">199 días</div></td>
      <td><span class="cert-tag">Autorización d</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','personal','dp30')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#3D62F5">GE</div>
        <div><div class="ct-link" onclick="openSubject('ten1','personal','dp31')">Godoy Espinoza Valentina</div><div class="sub">19.666.777-8</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">19.666.777-8</td>
      <td style="font-size:.8rem">Supervisora de Turno</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Autorización d</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','personal','dp31')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1a3db8">LC</div>
        <div><div class="ct-link" onclick="openSubject('ten1','personal','dp32')">Leiva Campos Andrés</div><div class="sub">13.777.888-9</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">13.777.888-9</td>
      <td style="font-size:.8rem">Técnico Electromecánico</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">Certificado de</span><span class="cert-tag">Anexo de Exclu</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','personal','dp32')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#4F75FF">PV</div>
        <div><div class="ct-link" onclick="openSubject('ten1','personal','dp33')">Paredes Vidal Consuelo</div><div class="sub">12.888.999-0</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">12.888.999-0</td>
      <td style="font-size:.8rem">Enfermera de Faena</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Autorización d</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','personal','dp33')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1E3A8A">EM</div>
        <div><div class="ct-link" onclick="openSubject('can2','personal','dp34')">Escobar Muñoz Waldo</div><div class="sub">14.234.111-2</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">14.234.111-2</td>
      <td style="font-size:.8rem">Supervisor de Operaciones</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','personal','dp34')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#163278">FR</div>
        <div><div class="ct-link" onclick="openSubject('can2','personal','dp35')">Fernández Rojas Bárbara</div><div class="sub">15.345.222-3</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">15.345.222-3</td>
      <td style="font-size:.8rem">Prevencionista de Riesgos</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','personal','dp35')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#2448E0">CV</div>
        <div><div class="ct-link" onclick="openSubject('can2','personal','dp36')">Contreras Vega Sebastián</div><div class="sub">16.456.333-4</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">16.456.333-4</td>
      <td style="font-size:.8rem">Operador de Equipos</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">02 ago 2026</div><div class="sub">62 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','personal','dp36')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#3D62F5">MA</div>
        <div><div class="ct-link" onclick="openSubject('can2','personal','dp37')">Mora Aguilera Javiera</div><div class="sub">17.567.444-5</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">17.567.444-5</td>
      <td style="font-size:.8rem">Administradora de Contrato</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','personal','dp37')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1a3db8">RS</div>
        <div><div class="ct-link" onclick="openSubject('can2','personal','dp38')">Riquelme Soto Álvaro</div><div class="sub">18.678.555-6</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">18.678.555-6</td>
      <td style="font-size:.8rem">Mecánico Industrial</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">199 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','personal','dp38')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#4F75FF">VB</div>
        <div><div class="ct-link" onclick="openSubject('can2','personal','dp39')">Valdés Bravo Constanza</div><div class="sub">19.789.666-7</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">19.789.666-7</td>
      <td style="font-size:.8rem">Supervisora HSE</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','personal','dp39')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1E3A8A">PC</div>
        <div><div class="ct-link" onclick="openSubject('can2','personal','dp40')">Peña Castillo Diego</div><div class="sub">13.890.777-8</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">13.890.777-8</td>
      <td style="font-size:.8rem">Técnico Eléctrico</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">Contrato de Tr</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','personal','dp40')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#163278">GL</div>
        <div><div class="ct-link" onclick="openSubject('can2','personal','dp41')">Guzmán Lara Fernanda</div><div class="sub">12.901.888-9</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">12.901.888-9</td>
      <td style="font-size:.8rem">Enfermera de Faena</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','personal','dp41')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#2448E0">MT</div>
        <div><div class="ct-link" onclick="openSubject('cas1','personal','dp42')">Muñoz Torres Ignacia</div><div class="sub">14.321.111-K</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">14.321.111-K</td>
      <td style="font-size:.8rem">Supervisora de Terreno</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','personal','dp42')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#3D62F5">SP</div>
        <div><div class="ct-link" onclick="openSubject('cas1','personal','dp43')">Salinas Ponce Rodrigo</div><div class="sub">15.432.222-1</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">15.432.222-1</td>
      <td style="font-size:.8rem">Prevencionista</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','personal','dp43')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1a3db8">HD</div>
        <div><div class="ct-link" onclick="openSubject('cas1','personal','dp44')">Herrera Díaz Josefina</div><div class="sub">16.543.333-2</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">16.543.333-2</td>
      <td style="font-size:.8rem">Operadora de Equipos</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">09 ago 2026</div><div class="sub">69 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','personal','dp44')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#4F75FF">CR</div>
        <div><div class="ct-link" onclick="openSubject('cas1','personal','dp45')">Campos Rivas Matías</div><div class="sub">17.654.444-3</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">17.654.444-3</td>
      <td style="font-size:.8rem">Administrativo de Contrato</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','personal','dp45')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1E3A8A">VC</div>
        <div><div class="ct-link" onclick="openSubject('cas1','personal','dp46')">Vera Contreras Nicole</div><div class="sub">18.765.555-4</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">18.765.555-4</td>
      <td style="font-size:.8rem">Mecánica Diesel</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">199 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','personal','dp46')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#163278">AF</div>
        <div><div class="ct-link" onclick="openSubject('cas1','personal','dp47')">Alarcón Fuentes Pablo</div><div class="sub">19.876.666-5</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">19.876.666-5</td>
      <td style="font-size:.8rem">Supervisor HSE</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','personal','dp47')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#2448E0">DA</div>
        <div><div class="ct-link" onclick="openSubject('cas1','personal','dp48')">Donoso Araya Francisca</div><div class="sub">13.987.777-6</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">13.987.777-6</td>
      <td style="font-size:.8rem">Técnica Electromecánica</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">Contrato de Tr</span><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','personal','dp48')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#3D62F5">RM</div>
        <div><div class="ct-link" onclick="openSubject('cas1','personal','dp49')">Rivas Molina Tomás</div><div class="sub">12.098.888-7</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">12.098.888-7</td>
      <td style="font-size:.8rem">Enfermero de Faena</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Cédula de Iden</span><span class="cert-tag">Contrato de Tr</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','personal','dp49')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1a3db8">VM</div>
        <div><div class="ct-link" onclick="openSubject('eol1','personal','dp50')">Vergara Muñoz Ignacio</div><div class="sub">14.111.333-5</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">14.111.333-5</td>
      <td style="font-size:.8rem">Técnico de Turbinas Eólicas</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Certificado de</span><span class="cert-tag">Contrato Indiv</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','personal','dp50')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#4F75FF">TA</div>
        <div><div class="ct-link" onclick="openSubject('eol1','personal','dp51')">Torres Aliaga Marcela</div><div class="sub">15.222.444-6</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">15.222.444-6</td>
      <td style="font-size:.8rem">Supervisora HSE</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Certificado de</span><span class="cert-tag">Contrato Indiv</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','personal','dp51')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1E3A8A">BR</div>
        <div><div class="ct-link" onclick="openSubject('eol1','personal','dp52')">Bahamóndez Ruiz Esteban</div><div class="sub">16.333.555-7</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">16.333.555-7</td>
      <td style="font-size:.8rem">Operador de Grúa Telescópica</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">06 ago 2026</div><div class="sub">66 días</div></td>
      <td><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','personal','dp52')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#163278">CR</div>
        <div><div class="ct-link" onclick="openSubject('eol1','personal','dp53')">Concha Rivas Yasna</div><div class="sub">17.444.666-8</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">17.444.666-8</td>
      <td style="font-size:.8rem">Electricista Industrial</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Certificado de</span><span class="cert-tag">Contrato Indiv</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','personal','dp53')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#2448E0">OP</div>
        <div><div class="ct-link" onclick="openSubject('eol1','personal','dp54')">Olivares Prieto Ricardo</div><div class="sub">18.555.777-9</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">18.555.777-9</td>
      <td style="font-size:.8rem">Administrador de Contrato</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Certificado de</span><span class="cert-tag">Contrato Indiv</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','personal','dp54')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#3D62F5">FC</div>
        <div><div class="ct-link" onclick="openSubject('eol1','personal','dp55')">Farías Contreras Camila</div><div class="sub">19.666.888-0</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">19.666.888-0</td>
      <td style="font-size:.8rem">Prevencionista de Riesgos</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">199 días</div></td>
      <td><span class="cert-tag">Certificado de</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','personal','dp55')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#1a3db8">GM</div>
        <div><div class="ct-link" onclick="openSubject('eol1','personal','dp56')">Gallardo Meza Sebastián</div><div class="sub">13.777.999-1</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">13.777.999-1</td>
      <td style="font-size:.8rem">Técnico en Instrumentación y Control</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">Contrato Indiv</span><span class="cert-tag">Examen de Alco</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','personal','dp56')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="p-row-av" style="background:#4F75FF">RC</div>
        <div><div class="ct-link" onclick="openSubject('eol1','personal','dp57')">Riveros Campos Antonia</div><div class="sub">12.888.111-2</div></div>
      </div></td>
      <td style="font-size:.8rem;color:var(--gris)">12.888.111-2</td>
      <td style="font-size:.8rem">Jefa de Terreno</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">149 días</div></td>
      <td><span class="cert-tag">Certificado de</span><span class="cert-tag">Contrato Indiv</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','personal','dp57')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr></tbody>
    </table>
    <div class="tfoot"><span>Mostrando 1 a 58 de 58 trabajadores</span><span style="color:var(--azul)">10 por página</span></div>
  </div>` }} />
  );
}
