
"use client";
export default function CargosPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="view-head">
    <div><h2>Cargos</h2><p>Catálogo de cargos operativos y los requisitos documentales que exige cada uno.</p></div>
    <div class="view-head-actions">
      <button class="btn-outline" onclick="toast('Exportar — próximamente')">↓ Exportar</button>
      <button class="btn-primary" onclick="toast('Nuevo cargo — próximamente')">+ Nuevo cargo</button>
    </div>
  </div>
  <div class="dkpis5" style="grid-template-columns:repeat(4,1fr)">
    <div class="dkpi5"><div class="ic5">🪪</div><div><div class="kt">Cargos catalogados</div><div class="kn">37</div><div class="ks">en tu dotación</div></div></div>
    <div class="dkpi5"><div class="ic5">👥</div><div><div class="kt">Trabajadores asignados</div><div class="kn">58</div><div class="ks">en todos los cargos</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(91,33,182,.15)">🚗</div><div><div class="kt">Cargos con EMSIPOR</div><div class="kn">2</div><div class="ks">requieren licencia interna de mina</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(16,185,129,.15)">✅</div><div><div class="kt">Cumplimiento promedio</div><div class="kn">76%</div><div class="ks ok">por cargo</div></div></div>
  </div>
  <div class="view-filters">
    <input class="view-search" placeholder="Buscar cargo..." oninput="filterTable(this.value,'cargo-tbl')">
    <select class="view-select"><option>Categoría: Todas</option><option>Conducción</option><option>Supervisión / Prevención</option><option>Operación</option></select>
  </div>
  <div class="vtable-wrap">
    <table class="vtable" id="cargo-tbl">
      <thead><tr><th>Cargo</th><th>Categoría</th><th>Trabajadores</th><th>Requisitos aplicables</th><th>Cumplimiento</th><th>Estado</th><th>Acciones</th></tr></thead>
      <tbody><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#ede9fe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Conductor Nacional</div></div></div></td>
      <td><span class="chip" style="background:#ede9fe;color:#5b21b6;font-size:.68rem">Conducción</span></td>
      <td style="font-size:.85rem;font-weight:600">4</td>
      <td style="font-size:.8rem;color:var(--gris)">22 documentos <span style="color:#5b21b6">(+EMSIPOR)</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:54%;background:#F59E0B"></i></div><span style="font-size:.78rem;font-weight:600;color:#F59E0B">54%</span></div></td>
      <td><span class="chip por-vencer">Atención</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dbeafe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Supervisora HSE</div></div></div></td>
      <td><span class="chip" style="background:#dbeafe;color:#1e40af;font-size:.68rem">Supervisión / Prevención</span></td>
      <td style="font-size:.85rem;font-weight:600">4</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dbeafe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Prevencionista</div></div></div></td>
      <td><span class="chip" style="background:#dbeafe;color:#1e40af;font-size:.68rem">Supervisión / Prevención</span></td>
      <td style="font-size:.85rem;font-weight:600">3</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr></tbody>
    <tbody id="cargo-extra" style="display:none"><tr>
        <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Mecánico Industrial</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">3</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:37%;background:#EF4444"></i></div><span style="font-size:.78rem;font-weight:600;color:#EF4444">37%</span></div></td>
      <td><span class="chip vencido">Crítico</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dbeafe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Prevencionista de Riesgos</div></div></div></td>
      <td><span class="chip" style="background:#dbeafe;color:#1e40af;font-size:.68rem">Supervisión / Prevención</span></td>
      <td style="font-size:.85rem;font-weight:600">3</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:61%;background:#F59E0B"></i></div><span style="font-size:.78rem;font-weight:600;color:#F59E0B">61%</span></div></td>
      <td><span class="chip por-vencer">Atención</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Enfermera de Faena</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">3</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#ede9fe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Conductor Pesado</div></div></div></td>
      <td><span class="chip" style="background:#ede9fe;color:#5b21b6;font-size:.68rem">Conducción</span></td>
      <td style="font-size:.85rem;font-weight:600">2</td>
      <td style="font-size:.8rem;color:var(--gris)">22 documentos <span style="color:#5b21b6">(+EMSIPOR)</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dbeafe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Supervisora de Turno</div></div></div></td>
      <td><span class="chip" style="background:#dbeafe;color:#1e40af;font-size:.68rem">Supervisión / Prevención</span></td>
      <td style="font-size:.85rem;font-weight:600">2</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Mecánico Diesel</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">2</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:64%;background:#F59E0B"></i></div><span style="font-size:.78rem;font-weight:600;color:#F59E0B">64%</span></div></td>
      <td><span class="chip por-vencer">Atención</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Técnico Electromecánico</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">2</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:91%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">91%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Administradora de Contrato</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">2</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Operador de Equipos</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">2</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:9%;background:#EF4444"></i></div><span style="font-size:.78rem;font-weight:600;color:#EF4444">9%</span></div></td>
      <td><span class="chip vencido">Crítico</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Técnico Eléctrico</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">2</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:82%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">82%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Administradora Contrato</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Operador de Módulo</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Enfermera Faena</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Operador Cargador Frontal</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:8%;background:#EF4444"></i></div><span style="font-size:.78rem;font-weight:600;color:#EF4444">8%</span></div></td>
      <td><span class="chip vencido">Crítico</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dbeafe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Supervisora Operaciones</div></div></div></td>
      <td><span class="chip" style="background:#dbeafe;color:#1e40af;font-size:.68rem">Supervisión / Prevención</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Coordinadora Logística</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:8%;background:#EF4444"></i></div><span style="font-size:.78rem;font-weight:600;color:#EF4444">8%</span></div></td>
      <td><span class="chip vencido">Crítico</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dbeafe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Supervisor de Terreno</div></div></div></td>
      <td><span class="chip" style="background:#dbeafe;color:#1e40af;font-size:.68rem">Supervisión / Prevención</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dbeafe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Supervisor de Mantención</div></div></div></td>
      <td><span class="chip" style="background:#dbeafe;color:#1e40af;font-size:.68rem">Supervisión / Prevención</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Operador de Grúa</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:11%;background:#EF4444"></i></div><span style="font-size:.78rem;font-weight:600;color:#EF4444">11%</span></div></td>
      <td><span class="chip vencido">Crítico</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Administrativa de Contrato</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dbeafe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Supervisor de Operaciones</div></div></div></td>
      <td><span class="chip" style="background:#dbeafe;color:#1e40af;font-size:.68rem">Supervisión / Prevención</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dbeafe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Supervisora de Terreno</div></div></div></td>
      <td><span class="chip" style="background:#dbeafe;color:#1e40af;font-size:.68rem">Supervisión / Prevención</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Operadora de Equipos</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:8%;background:#EF4444"></i></div><span style="font-size:.78rem;font-weight:600;color:#EF4444">8%</span></div></td>
      <td><span class="chip vencido">Crítico</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Administrativo de Contrato</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Mecánica Diesel</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:8%;background:#EF4444"></i></div><span style="font-size:.78rem;font-weight:600;color:#EF4444">8%</span></div></td>
      <td><span class="chip vencido">Crítico</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dbeafe;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Supervisor HSE</div></div></div></td>
      <td><span class="chip" style="background:#dbeafe;color:#1e40af;font-size:.68rem">Supervisión / Prevención</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Técnica Electromecánica</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:85%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">85%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Enfermero de Faena</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Técnico de Turbinas Eólicas</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Operador de Grúa Telescópica</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:6%;background:#EF4444"></i></div><span style="font-size:.78rem;font-weight:600;color:#EF4444">6%</span></div></td>
      <td><span class="chip vencido">Crítico</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Electricista Industrial</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Administrador de Contrato</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Técnico en Instrumentación y Control</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:88%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">88%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr><tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#dcfce7;display:grid;place-items:center;font-size:.9rem;flex-shrink:0">🪪</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Jefa de Terreno</div></div></div></td>
      <td><span class="chip" style="background:#dcfce7;color:#166534;font-size:.68rem">Operación</span></td>
      <td style="font-size:.85rem;font-weight:600">1</td>
      <td style="font-size:.8rem;color:var(--gris)">13 documentos</td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:100%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">100%</span></div></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver personal" onclick="navTo('personas')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Editar plantilla de cargo — próximamente')">⋮</span></td>
    </tr></tbody>
    <tfoot>
      <tr>
        <td colspan="10" style="text-align:center;padding:12px;border-top:1px solid var(--linea)">
          <button class="fold-btn" onclick="toggleFold('cargo-extra', this, '▼ Mostrar los 34 cargos restantes...', '▲ Mostrar menos')">▼ Mostrar los 34 cargos restantes...</button>
        </td>
      </tr>
    </tfoot>
    </table>
    <div class="tfoot"><span>Mostrando 1 a 37 de 37 cargos</span><span style="color:var(--azul)">37 cargos totales</span></div>
    </div>` }} />
  );
}
