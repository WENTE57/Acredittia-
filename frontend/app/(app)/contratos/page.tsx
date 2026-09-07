
"use client";
export default function ContratosPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="view-head">
    <div><h2>Contratos</h2><p>Administra todos los contratos de tu empresa en sus diferentes faenas.</p></div>
    <div class="view-head-actions">
      <button class="btn-outline" onclick="toast('Exportar — próximamente')">↓ Exportar</button>
      <button class="btn-primary" onclick="openNewContratoModal()">+ Nuevo contrato</button>
    </div>
  </div>
  <div class="dkpis5" style="grid-template-columns:repeat(4,1fr)">
    <div class="dkpi5"><div class="ic5">📋</div><div><div class="kt">Total contratos</div><div class="kn">6</div><div class="ks">de todos los contratos</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(16,185,129,.15)">✅</div><div><div class="kt">Contratos activos</div><div class="kn">6</div><div class="ks ok">100% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(245,158,11,.15)">⏳</div><div><div class="kt">Por vencer (próx. 90 días)</div><div class="kn">0</div><div class="ks warn">0% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(239,68,68,.15)">❌</div><div><div class="kt">Vencidos</div><div class="kn">0</div><div class="ks bad">0% del total</div></div></div>
  </div>
  <div class="view-filters">
    <input class="view-search" placeholder="Buscar contrato, faena o estado..." oninput="filterTable(this.value,'ct-tbl')">
    <select class="view-select"><option>Estado: Todos</option><option>Activo</option><option>Por vencer</option><option>Vencido</option></select>
    <select class="view-select"><option>Faena: Todas</option></select>
  </div>
  <div class="vtable-wrap">
    <table class="vtable" id="ct-tbl">
      <thead><tr><th>Contrato</th><th>Faena</th><th>Inicio</th><th>Término</th><th>Estado</th><th>Cumplimiento</th><th>Personal acreditado</th><th>Equipos acreditados</th><th>Alertas</th><th>Acciones</th></tr></thead>
      <tbody><tr>
      <td><div class="ct-link" onclick="openProj('lp1')" style="font-size:.88rem">• Transporte y Operaciones MLP</div><div class="sub">Los Pelambres</div></td>
      <td style="color:var(--gris);font-size:.8rem">Los Pelambres</td>
      <td style="font-size:.8rem;color:var(--gris)">01-01-2024</td>
      <td style="font-size:.8rem;color:var(--gris)">31-12-2025</td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:77%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">77%</span></div></td>
      <td style="font-size:.8rem">18 / 18<div class="sub">77%</div></td>
      <td style="font-size:.8rem">15 / 15<div class="sub">77%</div></td>
      <td><span class="chip por-vencer">2</span></td>
      <td><span class="act-ico" onclick="openProj('lp1')" title="Ver">👁</span>&nbsp;<span class="act-ico" onclick="deleteContrato('lp1')" title="Eliminar contrato" style="color:#ef4444">🗑</span></td>
    </tr><tr>
      <td><div class="ct-link" onclick="openProj('and1')" style="font-size:.88rem">• Servicios Mina Andina</div><div class="sub">Andina</div></td>
      <td style="color:var(--gris);font-size:.8rem">Andina</td>
      <td style="font-size:.8rem;color:var(--gris)">01-01-2024</td>
      <td style="font-size:.8rem;color:var(--gris)">31-12-2025</td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:71%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">71%</span></div></td>
      <td style="font-size:.8rem">8 / 8<div class="sub">71%</div></td>
      <td style="font-size:.8rem">6 / 6<div class="sub">71%</div></td>
      <td><span class="chip por-vencer">2</span></td>
      <td><span class="act-ico" onclick="openProj('and1')" title="Ver">👁</span>&nbsp;<span class="act-ico" onclick="deleteContrato('and1')" title="Eliminar contrato" style="color:#ef4444">🗑</span></td>
    </tr><tr>
      <td><div class="ct-link" onclick="openProj('ten1')" style="font-size:.88rem">• Mantención Minera El Teniente</div><div class="sub">El Teniente</div></td>
      <td style="color:var(--gris);font-size:.8rem">El Teniente</td>
      <td style="font-size:.8rem;color:var(--gris)">01-01-2024</td>
      <td style="font-size:.8rem;color:var(--gris)">31-12-2025</td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:72%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">72%</span></div></td>
      <td style="font-size:.8rem">8 / 8<div class="sub">72%</div></td>
      <td style="font-size:.8rem">6 / 6<div class="sub">72%</div></td>
      <td><span class="chip por-vencer">2</span></td>
      <td><span class="act-ico" onclick="openProj('ten1')" title="Ver">👁</span>&nbsp;<span class="act-ico" onclick="deleteContrato('ten1')" title="Eliminar contrato" style="color:#ef4444">🗑</span></td>
    </tr><tr>
      <td><div class="ct-link" onclick="openProj('can2')" style="font-size:.88rem">• Servicios Candelaria</div><div class="sub">Candelaria</div></td>
      <td style="color:var(--gris);font-size:.8rem">Candelaria</td>
      <td style="font-size:.8rem;color:var(--gris)">01-01-2024</td>
      <td style="font-size:.8rem;color:var(--gris)">31-12-2025</td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:72%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">72%</span></div></td>
      <td style="font-size:.8rem">8 / 8<div class="sub">72%</div></td>
      <td style="font-size:.8rem">6 / 6<div class="sub">72%</div></td>
      <td><span class="chip por-vencer">2</span></td>
      <td><span class="act-ico" onclick="openProj('can2')" title="Ver">👁</span>&nbsp;<span class="act-ico" onclick="deleteContrato('can2')" title="Eliminar contrato" style="color:#ef4444">🗑</span></td>
    </tr><tr>
      <td><div class="ct-link" onclick="openProj('cas1')" style="font-size:.88rem">• Servicios Caserones</div><div class="sub">Caserones</div></td>
      <td style="color:var(--gris);font-size:.8rem">Caserones</td>
      <td style="font-size:.8rem;color:var(--gris)">01-01-2024</td>
      <td style="font-size:.8rem;color:var(--gris)">31-12-2025</td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:72%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">72%</span></div></td>
      <td style="font-size:.8rem">8 / 8<div class="sub">72%</div></td>
      <td style="font-size:.8rem">6 / 6<div class="sub">72%</div></td>
      <td><span class="chip por-vencer">2</span></td>
      <td><span class="act-ico" onclick="openProj('cas1')" title="Ver">👁</span>&nbsp;<span class="act-ico" onclick="deleteContrato('cas1')" title="Eliminar contrato" style="color:#ef4444">🗑</span></td>
    </tr><tr>
      <td><div class="ct-link" onclick="openProj('eol1')" style="font-size:.88rem">• Servicios Parque Eólico Antofagasta I</div><div class="sub">Parque Eólico Antofagasta I</div></td>
      <td style="color:var(--gris);font-size:.8rem">Parque Eólico Antofagasta I</td>
      <td style="font-size:.8rem;color:var(--gris)">01-01-2024</td>
      <td style="font-size:.8rem;color:var(--gris)">31-12-2025</td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:74%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">74%</span></div></td>
      <td style="font-size:.8rem">8 / 8<div class="sub">74%</div></td>
      <td style="font-size:.8rem">6 / 6<div class="sub">74%</div></td>
      <td><span class="chip por-vencer">2</span></td>
      <td><span class="act-ico" onclick="openProj('eol1')" title="Ver">👁</span>&nbsp;<span class="act-ico" onclick="deleteContrato('eol1')" title="Eliminar contrato" style="color:#ef4444">🗑</span></td>
    </tr></tbody>
    </table>
    <div class="tfoot"><span>Mostrando 1 a 6 de 6 contratos</span><span style="color:var(--azul)">10 por página</span></div>
  </div>` }} />
  );
}
