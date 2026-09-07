
"use client";
export default function MandantesPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="view-head">
    <div><h2>Mandantes</h2><p>Empresas mandantes y grupos mineros que administran las faenas donde operas.</p></div>
    <div class="view-head-actions">
      <button class="btn-outline" onclick="toast('Exportar — próximamente')">↓ Exportar</button>
      <button class="btn-primary" onclick="goFaenas()">+ Nueva faena</button>
    </div>
  </div>
  <div class="dkpis5" style="grid-template-columns:repeat(4,1fr)">
    <div class="dkpi5"><div class="ic5">🏢</div><div><div class="kt">Mandantes</div><div class="kn">4</div><div class="ks">empresas mandantes</div></div></div>
    <div class="dkpi5"><div class="ic5">🏔️</div><div><div class="kt">Faenas asociadas</div><div class="kn">9</div><div class="ks">en todos los mandantes</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(61,98,245,.15)">📋</div><div><div class="kt">Contratos vigentes</div><div class="kn">6</div><div class="ks">activos hoy</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(16,185,129,.15)">✅</div><div><div class="kt">Cumplimiento promedio</div><div class="kn">97%</div><div class="ks ok">103 personas/equipos</div></div></div>
  </div>
  <div class="view-filters">
    <input class="view-search" placeholder="Buscar mandante o grupo..." oninput="filterTable(this.value,'mand-tbl')">
    <select class="view-select"><option>Estado: Todos</option><option>Al día</option><option>Atención</option><option>Crítico</option></select>
  </div>
  <div class="vtable-wrap">
    <table class="vtable" id="mand-tbl">
      <thead><tr><th>Mandante</th><th>Faenas</th><th>Contratos</th><th>Personal + equipos</th><th>Cumplimiento</th><th>Estado</th><th>Acciones</th></tr></thead>
      <tbody><tr>
      <td onclick="openFaena('flp')" style="cursor:pointer"><div style="display:flex;align-items:center;gap:12px"><div style="background:linear-gradient(135deg,#2448E0,#0F172A);width:38px;height:38px;border-radius:10px;display:grid;place-items:center;color:#fff;font-weight:700;font-size:1rem;flex-shrink:0">A</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Antofagasta Minerals</div><div class="sub">AMSA</div></div></div></td>
      <td style="display:flex;flex-wrap:wrap;gap:6px;max-width:320px"><span class="act-ico" style="width:auto;padding:0 8px;border-radius:20px;font-size:.72rem;font-weight:600" title="Los Pelambres" onclick="openFaena('flp')">Los Pelambres</span> <span class="act-ico" style="width:auto;padding:0 8px;border-radius:20px;font-size:.72rem;font-weight:600" title="Minera Centinela" onclick="openFaena('fcen')">Minera Centinela</span> <span class="act-ico" style="width:auto;padding:0 8px;border-radius:20px;font-size:.72rem;font-weight:600" title="Zaldívar" onclick="openFaena('fzal')">Zaldívar</span> <span class="act-ico" style="width:auto;padding:0 8px;border-radius:20px;font-size:.72rem;font-weight:600" title="Antucoya" onclick="openFaena('fant')">Antucoya</span></td>
      <td style="font-size:.85rem;font-weight:600;color:var(--azul)">1</td>
      <td style="font-size:.8rem">33</td>
      <td style="font-size:.8rem"><b>303</b> / 309 <span class="tbar"><i style="width:98%;background:#10B981"></i></span> <span style="font-size:.78rem;font-weight:600;color:var(--gris)">98%</span></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver faenas" onclick="openFaena('flp')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Opciones de mandante — próximamente')">⋮</span></td>
    </tr><tr>
      <td onclick="openFaena('fcan')" style="cursor:pointer"><div style="display:flex;align-items:center;gap:12px"><div style="background:linear-gradient(135deg,#b45309,#0F172A);width:38px;height:38px;border-radius:10px;display:grid;place-items:center;color:#fff;font-weight:700;font-size:1rem;flex-shrink:0">L</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Lundin Mining</div><div class="sub">Lundin</div></div></div></td>
      <td style="display:flex;flex-wrap:wrap;gap:6px;max-width:320px"><span class="act-ico" style="width:auto;padding:0 8px;border-radius:20px;font-size:.72rem;font-weight:600" title="Candelaria" onclick="openFaena('fcan')">Candelaria</span> <span class="act-ico" style="width:auto;padding:0 8px;border-radius:20px;font-size:.72rem;font-weight:600" title="Caserones" onclick="openFaena('fcas')">Caserones</span></td>
      <td style="font-size:.85rem;font-weight:600;color:var(--azul)">2</td>
      <td style="font-size:.8rem">28</td>
      <td style="font-size:.8rem"><b>251</b> / 261 <span class="tbar"><i style="width:96%;background:#10B981"></i></span> <span style="font-size:.78rem;font-weight:600;color:var(--gris)">96%</span></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver faenas" onclick="openFaena('fcan')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Opciones de mandante — próximamente')">⋮</span></td>
    </tr><tr>
      <td onclick="openFaena('fand')" style="cursor:pointer"><div style="display:flex;align-items:center;gap:12px"><div style="background:linear-gradient(135deg,#dc2626,#0F172A);width:38px;height:38px;border-radius:10px;display:grid;place-items:center;color:#fff;font-weight:700;font-size:1rem;flex-shrink:0">C</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Codelco</div><div class="sub">Codelco</div></div></div></td>
      <td style="display:flex;flex-wrap:wrap;gap:6px;max-width:320px"><span class="act-ico" style="width:auto;padding:0 8px;border-radius:20px;font-size:.72rem;font-weight:600" title="Andina" onclick="openFaena('fand')">Andina</span> <span class="act-ico" style="width:auto;padding:0 8px;border-radius:20px;font-size:.72rem;font-weight:600" title="El Teniente" onclick="openFaena('ften')">El Teniente</span></td>
      <td style="font-size:.85rem;font-weight:600;color:var(--azul)">2</td>
      <td style="font-size:.8rem">28</td>
      <td style="font-size:.8rem"><b>183</b> / 192 <span class="tbar"><i style="width:95%;background:#10B981"></i></span> <span style="font-size:.78rem;font-weight:600;color:var(--gris)">95%</span></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver faenas" onclick="openFaena('fand')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Opciones de mandante — próximamente')">⋮</span></td>
    </tr><tr>
      <td onclick="openFaena('feol')" style="cursor:pointer"><div style="display:flex;align-items:center;gap:12px"><div style="background:linear-gradient(135deg,#0EA5E9,#0F172A);width:38px;height:38px;border-radius:10px;display:grid;place-items:center;color:#fff;font-weight:700;font-size:1rem;flex-shrink:0">R</div><div><div style="font-size:.85rem;font-weight:600;color:var(--txt)">Repsol</div><div class="sub">Energía</div></div></div></td>
      <td style="display:flex;flex-wrap:wrap;gap:6px;max-width:320px"><span class="act-ico" style="width:auto;padding:0 8px;border-radius:20px;font-size:.72rem;font-weight:600" title="Parque Eólico Antofagasta I" onclick="openFaena('feol')">Parque Eólico Antofagasta I</span></td>
      <td style="font-size:.85rem;font-weight:600;color:var(--azul)">1</td>
      <td style="font-size:.8rem">14</td>
      <td style="font-size:.8rem"><b>127</b> / 132 <span class="tbar"><i style="width:96%;background:#10B981"></i></span> <span style="font-size:.78rem;font-weight:600;color:var(--gris)">96%</span></td>
      <td><span class="chip activo">Al día</span></td>
      <td><span class="act-ico" title="Ver faenas" onclick="openFaena('feol')">👁</span>&nbsp;<span class="act-ico" title="Opciones" onclick="toast('Opciones de mandante — próximamente')">⋮</span></td>
    </tr></tbody>
    </table>
    <div class="tfoot"><span>Mostrando 1 a 4 de 4 mandantes</span><span style="color:var(--azul)">10 por página</span></div>
  </div>` }} />
  );
}
