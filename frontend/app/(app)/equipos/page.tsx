
"use client";
export default function EquiposPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="view-head">
    <div><h2>Equipos / Vehículos</h2><p>Administra todos los equipos y vehículos acreditados de tu empresa.</p></div>
    <div class="view-head-actions">
      <button class="btn-outline" onclick="toast('Exportar — próximamente')">↓ Exportar</button>
      <button class="btn-primary" onclick="goFaenas()">+ Agregar equipo / vehículo</button>
    </div>
  </div>
  <div class="dkpis5">
    <div class="dkpi5"><div class="ic5">🚛</div><div><div class="kt">Total equipos / vehículos</div><div class="kn">45</div><div class="ks">en tu empresa</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(16,185,129,.15)">✅</div><div><div class="kt">Acreditados</div><div class="kn">30</div><div class="ks ok">67% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(245,158,11,.15)">⏳</div><div><div class="kt">Por vencer (próx. 30 días)</div><div class="kn">1</div><div class="ks warn">2% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(239,68,68,.15)">❌</div><div><div class="kt">Vencidos</div><div class="kn">6</div><div class="ks bad">13% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(148,163,184,.15)">📋</div><div><div class="kt">Sin asignación a faena</div><div class="kn">8</div><div class="ks">18% del total</div></div></div>
  </div>
  <div class="view-filters">
    <input class="view-search" placeholder="Buscar por patente, código interno o tipo..." oninput="filterTable(this.value,'eq-tbl')">
    <select class="view-select"><option>Estado: Todos</option><option>Acreditado</option><option>Por vencer</option><option>Vencido</option></select>
    <select class="view-select"><option>Faena: Todas</option></select>
    <select class="view-select"><option>Tipo: Todos</option></select>
  </div>
  <div class="vtable-wrap">
    <table class="vtable" id="eq-tbl">
      <thead><tr><th>Equipo / Vehículo</th><th>Patente / ID</th><th>Tipo</th><th>Modelo / Marca</th><th>Faenas asignadas</th><th>Estado</th><th>Vencimiento próximo</th><th>Certificaciones principales</th><th>Acciones</th></tr></thead>
      <tbody><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚛</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de0')">Volvo FH 500 6x4</div><div class="sub">Código: DE0</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">ABCD-11</td>
      <td style="font-size:.8rem;color:var(--gris)">Tracto-Camión</td>
      <td style="font-size:.8rem">Tracto-Camión</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de0')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚛</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de1')">Mercedes Actros 2653</div><div class="sub">Código: DE1</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">EFGH-22</td>
      <td style="font-size:.8rem;color:var(--gris)">Tracto-Camión</td>
      <td style="font-size:.8rem">Tracto-Camión</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip por-vencer">Por vencer</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#fbbf24">28 jun 2026</div><div class="sub">en 27 días</div></td>
      <td><span style="color:#94A3B8;font-size:.78rem">—</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de1')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚛</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de2')">Scania R500 6x4</div><div class="sub">Código: DE2</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">GHIJ-33</td>
      <td style="font-size:.8rem;color:var(--gris)">Tracto-Camión</td>
      <td style="font-size:.8rem">Tracto-Camión</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de2')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de3')">Randon SR PT CS 0230</div><div class="sub">Código: DE3</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">IJKL-31</td>
      <td style="font-size:.8rem;color:var(--gris)">Semirremolque</td>
      <td style="font-size:.8rem">Semirremolque</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de3')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de4')">Randon SR AL CS 0335</div><div class="sub">Código: DE4</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">MNOP-42</td>
      <td style="font-size:.8rem;color:var(--gris)">Semirremolque</td>
      <td style="font-size:.8rem">Semirremolque</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de4')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de5')">Cometto 31 MS Plataforma</div><div class="sub">Código: DE5</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">KLMN-51</td>
      <td style="font-size:.8rem;color:var(--gris)">Semirremolque</td>
      <td style="font-size:.8rem">Semirremolque</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">en 199 días</div></td>
      <td><span class="cert-tag">Permiso de C</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de5')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚙</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de6')">Toyota Hilux 4x4 DX</div><div class="sub">Código: DE6</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">QRST-51</td>
      <td style="font-size:.8rem;color:var(--gris)">Camioneta</td>
      <td style="font-size:.8rem">Camioneta</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de6')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚙</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de7')">Mitsubishi L200 4x4</div><div class="sub">Código: DE7</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">UVWX-61</td>
      <td style="font-size:.8rem;color:var(--gris)">Camioneta</td>
      <td style="font-size:.8rem">Camioneta</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">SOAP</span><span class="cert-tag">GPS</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de7')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚙</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de8')">Ford Ranger XLT 4x4</div><div class="sub">Código: DE8</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">WXYZ-71</td>
      <td style="font-size:.8rem;color:var(--gris)">Camioneta</td>
      <td style="font-size:.8rem">Camioneta</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de8')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚙</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de9')">Chevrolet S10 4x4</div><div class="sub">Código: DE9</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">YZAB-81</td>
      <td style="font-size:.8rem;color:var(--gris)">Camioneta</td>
      <td style="font-size:.8rem">Camioneta</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de9')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de10')">JLG 1930 ES Alzahombre</div><div class="sub">Código: DE10</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CDEF-81</td>
      <td style="font-size:.8rem;color:var(--gris)">Alzahombre</td>
      <td style="font-size:.8rem">Alzahombre</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de10')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de11')">Genie GS-2032 Tijera</div><div class="sub">Código: DE11</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">DEFG-82</td>
      <td style="font-size:.8rem;color:var(--gris)">Alzahombre</td>
      <td style="font-size:.8rem">Alzahombre</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">20 jul 2026</div><div class="sub">en 49 días</div></td>
      <td><span class="cert-tag">Permiso de C</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de11')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚜</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de12')">Komatsu PC300LC-11</div><div class="sub">Código: DE12</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">HIJK-91</td>
      <td style="font-size:.8rem;color:var(--gris)">Retroexcavadora</td>
      <td style="font-size:.8rem">Retroexcavadora</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">en 199 días</div></td>
      <td><span class="cert-tag">Permiso de C</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de12')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚌</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de13')">Bus Mercedes Benz OF1721</div><div class="sub">Código: DE13</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">JKLM-01</td>
      <td style="font-size:.8rem;color:var(--gris)">Bus</td>
      <td style="font-size:.8rem">Bus</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de13')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('lp1','equipo','de14')">Camión Aljibe Volvo FMX</div><div class="sub">Código: DE14</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">LMNO-11</td>
      <td style="font-size:.8rem;color:var(--gris)">Camión Aljibe</td>
      <td style="font-size:.8rem">Camión Aljibe</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Los Pelambres</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('lp1','equipo','de14')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚛</div>
        <div><div class="ct-link" onclick="openSubject('and1','equipo','de15')">Volvo FMX 500</div><div class="sub">Código: DE15</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">ANDA-01</td>
      <td style="font-size:.8rem;color:var(--gris)">Tracto-Camión</td>
      <td style="font-size:.8rem">Tracto-Camión</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Copia del Ce</span><span class="cert-tag">Copia Permis</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','equipo','de15')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚙</div>
        <div><div class="ct-link" onclick="openSubject('and1','equipo','de16')">Ford Ranger 4x4</div><div class="sub">Código: DE16</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">ANDB-02</td>
      <td style="font-size:.8rem;color:var(--gris)">Camioneta</td>
      <td style="font-size:.8rem">Camioneta</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Copia del Ce</span><span class="cert-tag">Copia Permis</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','equipo','de16')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('and1','equipo','de17')">Komatsu PC200</div><div class="sub">Código: DE17</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">ANDC-03</td>
      <td style="font-size:.8rem;color:var(--gris)">Excavadora</td>
      <td style="font-size:.8rem">Excavadora</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">25 jul 2026</div><div class="sub">en 54 días</div></td>
      <td><span class="cert-tag">Copia del Ce</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','equipo','de17')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('and1','equipo','de18')">Genie GS-1930</div><div class="sub">Código: DE18</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">ANDD-04</td>
      <td style="font-size:.8rem;color:var(--gris)">Alzahombre</td>
      <td style="font-size:.8rem">Alzahombre</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">en 199 días</div></td>
      <td><span class="cert-tag">Copia del Ce</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','equipo','de18')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚛</div>
        <div><div class="ct-link" onclick="openSubject('and1','equipo','de19')">Mercedes Actros 2653</div><div class="sub">Código: DE19</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">ANDE-05</td>
      <td style="font-size:.8rem;color:var(--gris)">Tracto-Camión</td>
      <td style="font-size:.8rem">Tracto-Camión</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Copia del Ce</span><span class="cert-tag">Copia Permis</span></td>
      <td><span class="act-ico" onclick="openSubject('and1','equipo','de19')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚙</div>
        <div><div class="ct-link" onclick="openSubject('and1','equipo','de20')">Toyota Hilux 4x4</div><div class="sub">Código: DE20</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">ANDF-06</td>
      <td style="font-size:.8rem;color:var(--gris)">Camioneta</td>
      <td style="font-size:.8rem">Camioneta</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Andina</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">Copia Permis</span><span class="cert-tag">Certificado </span></td>
      <td><span class="act-ico" onclick="openSubject('and1','equipo','de20')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚛</div>
        <div><div class="ct-link" onclick="openSubject('ten1','equipo','de21')">Scania R500</div><div class="sub">Código: DE21</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">TENA-01</td>
      <td style="font-size:.8rem;color:var(--gris)">Tracto-Camión</td>
      <td style="font-size:.8rem">Tracto-Camión</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Copia del Ce</span><span class="cert-tag">Copia Permis</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','equipo','de21')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('ten1','equipo','de22')">Randon Semirremolque</div><div class="sub">Código: DE22</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">TENB-02</td>
      <td style="font-size:.8rem;color:var(--gris)">Semirremolque</td>
      <td style="font-size:.8rem">Semirremolque</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Copia del Ce</span><span class="cert-tag">Copia Permis</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','equipo','de22')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚙</div>
        <div><div class="ct-link" onclick="openSubject('ten1','equipo','de23')">Chevrolet S10</div><div class="sub">Código: DE23</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">TENC-03</td>
      <td style="font-size:.8rem;color:var(--gris)">Camioneta</td>
      <td style="font-size:.8rem">Camioneta</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">en 199 días</div></td>
      <td><span class="cert-tag">Copia del Ce</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','equipo','de23')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚜</div>
        <div><div class="ct-link" onclick="openSubject('ten1','equipo','de24')">JCB 3CX Retroexcavadora</div><div class="sub">Código: DE24</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">TEND-04</td>
      <td style="font-size:.8rem;color:var(--gris)">Retroexcavadora</td>
      <td style="font-size:.8rem">Retroexcavadora</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">30 jul 2026</div><div class="sub">en 59 días</div></td>
      <td><span class="cert-tag">Copia del Ce</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','equipo','de24')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚌</div>
        <div><div class="ct-link" onclick="openSubject('ten1','equipo','de25')">Bus Mercedes Benz OF1721</div><div class="sub">Código: DE25</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">TENE-05</td>
      <td style="font-size:.8rem;color:var(--gris)">Bus</td>
      <td style="font-size:.8rem">Bus</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Copia del Ce</span><span class="cert-tag">Copia Permis</span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','equipo','de25')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('ten1','equipo','de26')">Manitou MT-1440</div><div class="sub">Código: DE26</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">TENF-06</td>
      <td style="font-size:.8rem;color:var(--gris)">Manipulador Telescópico</td>
      <td style="font-size:.8rem">Manipulador Telescópico</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">El Teniente</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">Copia Permis</span><span class="cert-tag">Certificado </span></td>
      <td><span class="act-ico" onclick="openSubject('ten1','equipo','de26')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚛</div>
        <div><div class="ct-link" onclick="openSubject('can2','equipo','de27')">Volvo FH 460</div><div class="sub">Código: DE27</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CANA-01</td>
      <td style="font-size:.8rem;color:var(--gris)">Tracto-Camión</td>
      <td style="font-size:.8rem">Tracto-Camión</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','equipo','de27')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚙</div>
        <div><div class="ct-link" onclick="openSubject('can2','equipo','de28')">Ford Ranger</div><div class="sub">Código: DE28</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CANB-02</td>
      <td style="font-size:.8rem;color:var(--gris)">Camioneta</td>
      <td style="font-size:.8rem">Camioneta</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','equipo','de28')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('can2','equipo','de29')">Caterpillar 320</div><div class="sub">Código: DE29</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CANC-03</td>
      <td style="font-size:.8rem;color:var(--gris)">Excavadora</td>
      <td style="font-size:.8rem">Excavadora</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">en 199 días</div></td>
      <td><span class="cert-tag">Permiso de C</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','equipo','de29')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('can2','equipo','de30')">Genie GS-2032</div><div class="sub">Código: DE30</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CAND-04</td>
      <td style="font-size:.8rem;color:var(--gris)">Alzahombre</td>
      <td style="font-size:.8rem">Alzahombre</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">18 jul 2026</div><div class="sub">en 47 días</div></td>
      <td><span class="cert-tag">Permiso de C</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','equipo','de30')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚛</div>
        <div><div class="ct-link" onclick="openSubject('can2','equipo','de31')">Mercedes Actros</div><div class="sub">Código: DE31</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CANE-05</td>
      <td style="font-size:.8rem;color:var(--gris)">Tracto-Camión</td>
      <td style="font-size:.8rem">Tracto-Camión</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','equipo','de31')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚙</div>
        <div><div class="ct-link" onclick="openSubject('can2','equipo','de32')">Toyota Hilux</div><div class="sub">Código: DE32</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CANF-06</td>
      <td style="font-size:.8rem;color:var(--gris)">Camioneta</td>
      <td style="font-size:.8rem">Camioneta</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Candelaria</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">SOAP</span><span class="cert-tag">GPS</span></td>
      <td><span class="act-ico" onclick="openSubject('can2','equipo','de32')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚛</div>
        <div><div class="ct-link" onclick="openSubject('cas1','equipo','de33')">Scania G410</div><div class="sub">Código: DE33</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CASA-01</td>
      <td style="font-size:.8rem;color:var(--gris)">Tracto-Camión</td>
      <td style="font-size:.8rem">Tracto-Camión</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','equipo','de33')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('cas1','equipo','de34')">Randon Semirremolque</div><div class="sub">Código: DE34</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CASB-02</td>
      <td style="font-size:.8rem;color:var(--gris)">Semirremolque</td>
      <td style="font-size:.8rem">Semirremolque</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','equipo','de34')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚙</div>
        <div><div class="ct-link" onclick="openSubject('cas1','equipo','de35')">Chevrolet S10</div><div class="sub">Código: DE35</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CASC-03</td>
      <td style="font-size:.8rem;color:var(--gris)">Camioneta</td>
      <td style="font-size:.8rem">Camioneta</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">en 199 días</div></td>
      <td><span class="cert-tag">Permiso de C</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','equipo','de35')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('cas1','equipo','de36')">Komatsu PC300</div><div class="sub">Código: DE36</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CASD-04</td>
      <td style="font-size:.8rem;color:var(--gris)">Excavadora</td>
      <td style="font-size:.8rem">Excavadora</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">22 jul 2026</div><div class="sub">en 51 días</div></td>
      <td><span class="cert-tag">Permiso de C</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','equipo','de36')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚌</div>
        <div><div class="ct-link" onclick="openSubject('cas1','equipo','de37')">Bus Yutong</div><div class="sub">Código: DE37</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CASE-05</td>
      <td style="font-size:.8rem;color:var(--gris)">Bus</td>
      <td style="font-size:.8rem">Bus</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Permiso de C</span><span class="cert-tag">SOAP</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','equipo','de37')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('cas1','equipo','de38')">JLG Alzahombre</div><div class="sub">Código: DE38</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">CASF-06</td>
      <td style="font-size:.8rem;color:var(--gris)">Alzahombre</td>
      <td style="font-size:.8rem">Alzahombre</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Caserones</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">SOAP</span><span class="cert-tag">GPS</span></td>
      <td><span class="act-ico" onclick="openSubject('cas1','equipo','de38')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🏗️</div>
        <div><div class="ct-link" onclick="openSubject('eol1','equipo','de39')">Liebherr LTM 1090</div><div class="sub">Código: DE39</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">EOLA-01</td>
      <td style="font-size:.8rem;color:var(--gris)">Grúa</td>
      <td style="font-size:.8rem">Grúa</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Última Revis</span><span class="cert-tag">Seguro Oblig</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','equipo','de39')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🚙</div>
        <div><div class="ct-link" onclick="openSubject('eol1','equipo','de40')">Toyota Hilux 4x4 SRX</div><div class="sub">Código: DE40</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">EOLB-02</td>
      <td style="font-size:.8rem;color:var(--gris)">Camioneta</td>
      <td style="font-size:.8rem">Camioneta</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Última Revis</span><span class="cert-tag">Seguro Oblig</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','equipo','de40')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('eol1','equipo','de41')">Genie GS-3232 Tijera</div><div class="sub">Código: DE41</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">EOLC-03</td>
      <td style="font-size:.8rem;color:var(--gris)">Alzahombre</td>
      <td style="font-size:.8rem">Alzahombre</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">11 ago 2026</div><div class="sub">en 71 días</div></td>
      <td><span class="cert-tag">Última Revis</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','equipo','de41')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('eol1','equipo','de42')">Mercedes Actros Pluma</div><div class="sub">Código: DE42</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">EOLD-04</td>
      <td style="font-size:.8rem;color:var(--gris)">Camión Pluma</td>
      <td style="font-size:.8rem">Camión Pluma</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">17 dic 2026</div><div class="sub">en 199 días</div></td>
      <td><span class="cert-tag">Última Revis</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','equipo','de42')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('eol1','equipo','de43')">Sennebogen 683 Horquilla</div><div class="sub">Código: DE43</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">EOLE-05</td>
      <td style="font-size:.8rem;color:var(--gris)">Grúa Horquilla</td>
      <td style="font-size:.8rem">Grúa Horquilla</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Acreditado</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:var(--txt)">28 oct 2026</div><div class="sub">en 149 días</div></td>
      <td><span class="cert-tag">Última Revis</span><span class="cert-tag">Seguro Oblig</span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','equipo','de43')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:#EEF2FF;display:grid;place-items:center;font-size:1.1rem;flex-shrink:0">🔧</div>
        <div><div class="ct-link" onclick="openSubject('eol1','equipo','de44')">Caterpillar 140M</div><div class="sub">Código: DE44</div></div>
      </div></td>
      <td style="font-size:.82rem;font-weight:600;color:var(--cyan-d)">EOLF-06</td>
      <td style="font-size:.8rem;color:var(--gris)">Motoniveladora</td>
      <td style="font-size:.8rem">Motoniveladora</td>
      <td style="font-size:.8rem">1 faena<div class="sub" style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip vencido">Vencido</span></td>
      <td><div style="font-size:.75rem;font-weight:600;color:#f87171">18 may 2026</div><div class="sub">hace 14 días</div></td>
      <td><span class="cert-tag">Seguro Oblig</span><span class="cert-tag">Certificado </span></td>
      <td><span class="act-ico" onclick="openSubject('eol1','equipo','de44')" title="Ver">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
    </tr></tbody>
    </table>
    <div class="tfoot"><span>Mostrando 1 a 45 de 45 equipos</span><span style="color:var(--azul)">10 por página</span></div>
  </div>` }} />
  );
}
