
"use client";
export default function RequisitosPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="view-head">
    <div><h2>Requisitos</h2><p>Administra y controla los requisitos exigidos en contratos y faenas.</p></div>
    <div class="view-head-actions">
      <button class="btn-outline" onclick="toast('Exportar — próximamente')">↓ Exportar</button>
      <button class="btn-primary" onclick="toast('Nuevo requisito — próximamente')">+ Nuevo requisito</button>
    </div>
  </div>
  <div class="dkpis5">
    <div class="dkpi5"><div class="ic5">📑</div><div><div class="kt">Total requisitos</div><div class="kn">1122</div><div class="ks">en tu empresa</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(16,185,129,.15)">✅</div><div><div class="kt">Activos</div><div class="kn">827</div><div class="ks ok">74% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(245,158,11,.15)">⏳</div><div><div class="kt">Por vencer (próx. 30 días)</div><div class="kn">1</div><div class="ks warn">0% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(239,68,68,.15)">❌</div><div><div class="kt">Vencidos</div><div class="kn">24</div><div class="ks bad">2% del total</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(148,163,184,.15)">⏸️</div><div><div class="kt">Inactivos / Pendientes</div><div class="kn">270</div><div class="ks">24% del total</div></div></div>
  </div>
  <div class="view-filters">
    <input class="view-search" placeholder="Buscar requisito por nombre, código o tipo..." oninput="filterTable(this.value,'req-tbl')">
    <select class="view-select"><option>Tipo: Todos</option><option>Legal</option><option>Médico</option><option>Técnico</option><option>Capacitación</option></select>
    <select class="view-select"><option>Ámbito: Todos</option><option>Personal</option><option>Equipos / Vehículos</option><option>Empresa</option></select>
    <select class="view-select"><option>Estado: Todos</option><option>Activo</option><option>Por vencer</option><option>Vencido</option><option>Inactivo</option></select>
  </div>
  <div class="vtable-wrap">
    <table class="vtable" id="req-tbl">
      <thead><tr><th>Requisito</th><th>Código</th><th>Tipo</th><th>Ámbito</th><th>Obligatorio</th><th>Aplicable a</th><th>Estado</th><th>Vencimiento</th><th>Documentos asociados</th><th>Acciones</th></tr></thead>
      <tbody><tr>
    <td>
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">📋</div>
        <div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Licencia de Conducir Clase A4</div><div class="sub">Licencia de Conducir Clase A4...</div></div>
      </div>
    </td>
    <td style="font-size:.8rem;font-weight:600;color:var(--gris)">REQ-001</td>
    <td><span class="chip activo" style="font-size:.65rem">Legal</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td style="font-size:.8rem;text-align:center">Sí</td>
    <td style="font-size:.8rem;color:var(--gris)">Conductores</td>
    <td><span class="chip activo">Activo</span></td>
    <td style="font-size:.78rem;color:var(--gris)"><div>2025-06-20</div></td>
    <td style="font-size:.82rem;font-weight:600;color:var(--azul)">128</td>
    <td><span class="act-ico" title="Ver" onclick="toast('Ver requisito REQ-001')">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td>
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">📋</div>
        <div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Examen Psicológico</div><div class="sub">Examen Psicológico...</div></div>
      </div>
    </td>
    <td style="font-size:.8rem;font-weight:600;color:var(--gris)">REQ-002</td>
    <td><span class="chip activo" style="font-size:.65rem">Médico</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td style="font-size:.8rem;text-align:center">Sí</td>
    <td style="font-size:.8rem;color:var(--gris)">Todos los cargos</td>
    <td><span class="chip activo">Activo</span></td>
    <td style="font-size:.78rem;color:var(--gris)"><div>2025-07-15</div></td>
    <td style="font-size:.82rem;font-weight:600;color:var(--azul)">1122</td>
    <td><span class="act-ico" title="Ver" onclick="toast('Ver requisito REQ-002')">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td>
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">📋</div>
        <div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Inducción de Faena</div><div class="sub">Inducción de Faena...</div></div>
      </div>
    </td>
    <td style="font-size:.8rem;font-weight:600;color:var(--gris)">REQ-003</td>
    <td><span class="chip activo" style="font-size:.65rem">Capacitación</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td style="font-size:.8rem;text-align:center">Sí</td>
    <td style="font-size:.8rem;color:var(--gris)">Todos los cargos</td>
    <td><span class="chip activo">Activo</span></td>
    <td style="font-size:.78rem;color:var(--gris)">—</td>
    <td style="font-size:.82rem;font-weight:600;color:var(--azul)">897</td>
    <td><span class="act-ico" title="Ver" onclick="toast('Ver requisito REQ-003')">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr></tbody>
  <tbody id="req-extra" style="display:none"><tr>
    <td>
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">📋</div>
        <div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Seguro Complementario</div><div class="sub">Seguro Complementario...</div></div>
      </div>
    </td>
    <td style="font-size:.8rem;font-weight:600;color:var(--gris)">REQ-004</td>
    <td><span class="chip activo" style="font-size:.65rem">Legal</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td style="font-size:.8rem;text-align:center">No</td>
    <td style="font-size:.8rem;color:var(--gris)">Todos los cargos</td>
    <td><span class="chip activo">Activo</span></td>
    <td style="font-size:.78rem;color:var(--gris)"><div>2025-08-30</div></td>
    <td style="font-size:.82rem;font-weight:600;color:var(--azul)">578</td>
    <td><span class="act-ico" title="Ver" onclick="toast('Ver requisito REQ-004')">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td>
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">📋</div>
        <div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Certificado de Competencia Laboral SENCE</div><div class="sub">Certificado de Competencia Lab...</div></div>
      </div>
    </td>
    <td style="font-size:.8rem;font-weight:600;color:var(--gris)">REQ-005</td>
    <td><span class="chip activo" style="font-size:.65rem">Certificación</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal</td>
    <td style="font-size:.8rem;text-align:center">No</td>
    <td style="font-size:.8rem;color:var(--gris)">Operadores</td>
    <td><span class="chip activo">Activo</span></td>
    <td style="font-size:.78rem;color:var(--gris)"><div>2025-10-09</div></td>
    <td style="font-size:.82rem;font-weight:600;color:var(--azul)">64</td>
    <td><span class="act-ico" title="Ver" onclick="toast('Ver requisito REQ-005')">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td>
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">📋</div>
        <div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Permiso de Circulación</div><div class="sub">Permiso de Circulación...</div></div>
      </div>
    </td>
    <td style="font-size:.8rem;font-weight:600;color:var(--gris)">REQ-006</td>
    <td><span class="chip activo" style="font-size:.65rem">Legal</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Equipos / Vehículos</td>
    <td style="font-size:.8rem;text-align:center">Sí</td>
    <td style="font-size:.8rem;color:var(--gris)">Vehículos</td>
    <td><span class="chip por-vencer">Por vencer</span></td>
    <td style="font-size:.78rem;color:#fbbf24"><div>2025-06-05</div></td>
    <td style="font-size:.82rem;font-weight:600;color:var(--azul)">24</td>
    <td><span class="act-ico" title="Ver" onclick="toast('Ver requisito REQ-006')">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td>
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">📋</div>
        <div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Mantención Preventiva</div><div class="sub">Mantención Preventiva...</div></div>
      </div>
    </td>
    <td style="font-size:.8rem;font-weight:600;color:var(--gris)">REQ-007</td>
    <td><span class="chip activo" style="font-size:.65rem">Técnico</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Equipos / Vehículos</td>
    <td style="font-size:.8rem;text-align:center">Sí</td>
    <td style="font-size:.8rem;color:var(--gris)">Equipos</td>
    <td><span class="chip vencido">Vencido</span></td>
    <td style="font-size:.78rem;color:#f87171"><div>2025-05-12</div></td>
    <td style="font-size:.82rem;font-weight:600;color:var(--azul)">17</td>
    <td><span class="act-ico" title="Ver" onclick="toast('Ver requisito REQ-007')">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td>
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">📋</div>
        <div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">DS 148 - Plan de Gestión de Residuos</div><div class="sub">DS 148 - Plan de Gestión de Re...</div></div>
      </div>
    </td>
    <td style="font-size:.8rem;font-weight:600;color:var(--gris)">REQ-008</td>
    <td><span class="chip activo" style="font-size:.65rem">Medioambiental</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Empresa</td>
    <td style="font-size:.8rem;text-align:center">No</td>
    <td style="font-size:.8rem;color:var(--gris)">Todos</td>
    <td><span class="chip activo">Activo</span></td>
    <td style="font-size:.78rem;color:var(--gris)"><div>2025-10-01</div></td>
    <td style="font-size:.82rem;font-weight:600;color:var(--azul)">8</td>
    <td><span class="act-ico" title="Ver" onclick="toast('Ver requisito REQ-008')">👁</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr></tbody>
  <tfoot>
    <tr>
      <td colspan="10" style="text-align:center;padding:12px;border-top:1px solid var(--linea)">
        <button class="fold-btn" onclick="toggleFold('req-extra', this, '▼ Mostrar los 5 requisitos restantes...', '▲ Mostrar menos')">▼ Mostrar los 5 requisitos restantes...</button>
      </td>
    </tr>
  </tfoot>
  </table>
  <div class="tfoot"><span>Mostrando 1 a 8 de 8 requisitos</span><span style="color:var(--azul)">8 requisitos totales</span></div>
  </div>` }} />
  );
}
