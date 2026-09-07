
"use client";
export default function DashboardPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="dkpis5">
    <div class="dkpi5"><div class="ic5">📋</div><div><div class="kt">Contratos activos</div><div class="kn">6</div><div class="ks">de 6 contratos totales</div></div></div>
    <div class="dkpi5"><div class="ic5">🏔️</div><div><div class="kt">Faenas activas</div><div class="kn">6</div><div class="ks">de 6 faenas totales</div></div></div>
    <div class="dkpi5"><div class="ic5">👥</div><div><div class="kt">Personal acreditado</div><div class="kn">44</div><div class="ks ok">de 58 trabajadores</div></div></div>
    <div class="dkpi5"><div class="ic5">🚛</div><div><div class="kt">Equipos acreditados</div><div class="kn">30</div><div class="ks ok">de 45 equipos</div></div></div>
    <div class="dkpi5"><div class="donut-kpi"><svg width="52" height="52" viewBox="0 0 52 52"><circle cx="26" cy="26" r="22" fill="none" stroke="rgba(15,23,42,.08)" stroke-width="5"></circle><circle cx="26" cy="26" r="22" fill="none" stroke="#10B981" stroke-width="5" stroke-dasharray="102.29025680088365 138.23007675795088" stroke-linecap="round"></circle></svg><span class="pct-label">74%</span></div><div><div class="kt">Cumplimiento general</div><div class="kn">74%</div><div class="ks ok">+6% vs. semana anterior</div></div></div>
  </div>
  <div style="display:flex;align-items:center;gap:10px;background:#F0FDF4;border:1px solid #86efac;border-radius:12px;padding:10px 16px;margin-bottom:20px">
    <span style="font-size:1.1rem">🛡️</span>
    <div style="font-size:.8rem;color:#166534"><b>Vigía IA activo</b> — cada documento que se sube en cualquier contrato se revisa al instante, sin cola de validación manual.</div>
  </div>
  <div class="dpanel" style="padding:0;overflow:hidden;margin-bottom:20px">
    <div class="ph" style="padding:16px 20px 14px;border-bottom:1px solid var(--linea);display:flex;align-items:center;justify-content:space-between">
      <div><h3 style="font-size:1rem">Acciones pendientes</h3><p style="font-size:.78rem;color:var(--gris);margin:2px 0 0">Documentos que faltan por cargar — resuélvelos desde aquí.</p></div>
      <span class="chip vencido" style="font-size:.72rem">270 pendientes</span>
    </div>
    <div style="display:flex;align-items:center;gap:12px;padding:12px 20px;border-bottom:1px solid var(--linea)">
      <span class="chip vencido" style="font-size:.65rem;flex-shrink:0">Alta</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:.85rem;font-weight:700;color:var(--txt)">Contreras Sepúlveda Diego</div>
        <div style="font-size:.76rem;color:var(--gris)">Contrato de Trabajo · sin cargar · <span style="color:var(--azul)">Los Pelambres</span></div>
      </div>
      <button class="btn-outline" style="font-size:.74rem;padding:6px 14px;flex-shrink:0" onclick="openSubject('lp1','personal','dp1')">Solucionar</button>
    </div><div style="display:flex;align-items:center;gap:12px;padding:12px 20px;border-bottom:1px solid var(--linea)">
      <span class="chip vencido" style="font-size:.65rem;flex-shrink:0">Alta</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:.85rem;font-weight:700;color:var(--txt)">Contreras Sepúlveda Diego</div>
        <div style="font-size:.76rem;color:var(--gris)">Anexo Contrato · sin cargar · <span style="color:var(--azul)">Los Pelambres</span></div>
      </div>
      <button class="btn-outline" style="font-size:.74rem;padding:6px 14px;flex-shrink:0" onclick="openSubject('lp1','personal','dp1')">Solucionar</button>
    </div><div style="display:flex;align-items:center;gap:12px;padding:12px 20px;border-bottom:1px solid var(--linea)">
      <span class="chip vencido" style="font-size:.65rem;flex-shrink:0">Alta</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:.85rem;font-weight:700;color:var(--txt)">Contreras Sepúlveda Diego</div>
        <div style="font-size:.76rem;color:var(--gris)">Certificado de Salud y Examen de Altura · sin cargar · <span style="color:var(--azul)">Los Pelambres</span></div>
      </div>
      <button class="btn-outline" style="font-size:.74rem;padding:6px 14px;flex-shrink:0" onclick="openSubject('lp1','personal','dp1')">Solucionar</button>
    </div><div style="display:flex;align-items:center;gap:12px;padding:12px 20px;border-bottom:1px solid var(--linea)">
      <span class="chip vencido" style="font-size:.65rem;flex-shrink:0">Alta</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:.85rem;font-weight:700;color:var(--txt)">Contreras Sepúlveda Diego</div>
        <div style="font-size:.76rem;color:var(--gris)">Inducción Hombre Nuevo · sin cargar · <span style="color:var(--azul)">Los Pelambres</span></div>
      </div>
      <button class="btn-outline" style="font-size:.74rem;padding:6px 14px;flex-shrink:0" onclick="openSubject('lp1','personal','dp1')">Solucionar</button>
    </div><div style="display:flex;align-items:center;gap:12px;padding:12px 20px;border-bottom:1px solid var(--linea)">
      <span class="chip vencido" style="font-size:.65rem;flex-shrink:0">Alta</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:.85rem;font-weight:700;color:var(--txt)">Contreras Sepúlveda Diego</div>
        <div style="font-size:.76rem;color:var(--gris)">Reglamento Interno · sin cargar · <span style="color:var(--azul)">Los Pelambres</span></div>
      </div>
      <button class="btn-outline" style="font-size:.74rem;padding:6px 14px;flex-shrink:0" onclick="openSubject('lp1','personal','dp1')">Solucionar</button>
    </div>
    <div style="padding:12px 20px;text-align:center"><span class="linkbtn" style="font-size:.8rem" onclick="navTo('alertas')">Ver los 270 pendientes →</span></div>
  </div>
  <div class="dash-2col">
    <!-- Cumplimiento por contrato -->
    <div class="dpanel" style="padding:0;overflow:hidden">
      <div class="ph" style="padding:16px 20px 14px;border-bottom:1px solid var(--linea)">
        <h3 style="font-size:1rem">Cumplimiento por contrato</h3>
        <span class="linkbtn" style="font-size:.8rem" onclick="navTo('contratos')">Ver todos los contratos →</span>
      </div>
      <table class="vtable" style="background:transparent">
        <thead><tr>
          <th>Contrato / Faena</th><th>Estado</th><th>Cumplimiento</th>
          <th>Personal</th><th>Equipos</th><th>Alertas</th><th></th>
        </tr></thead>
        <tbody><tr>
      <td><div class="ct-link" onclick="openProj('lp1')">Transporte y Operaciones MLP</div><div class="sub">Los Pelambres</div></td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:77%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">77%</span></div></td>
      <td style="font-size:.8rem">18 / 18 <div class="sub">77%</div></td>
      <td style="font-size:.8rem">15 / 15 <div class="sub">77%</div></td>
      <td><span class="chip por-vencer">5</span></td>
      <td><span class="act-ico" onclick="openProj('lp1')" title="Ver">👁</span></td>
    </tr><tr>
      <td><div class="ct-link" onclick="openProj('and1')">Servicios Mina Andina</div><div class="sub">Andina</div></td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:71%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">71%</span></div></td>
      <td style="font-size:.8rem">8 / 8 <div class="sub">71%</div></td>
      <td style="font-size:.8rem">6 / 6 <div class="sub">71%</div></td>
      <td><span class="chip por-vencer">4</span></td>
      <td><span class="act-ico" onclick="openProj('and1')" title="Ver">👁</span></td>
    </tr><tr>
      <td><div class="ct-link" onclick="openProj('ten1')">Mantención Minera El Teniente</div><div class="sub">El Teniente</div></td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:72%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">72%</span></div></td>
      <td style="font-size:.8rem">8 / 8 <div class="sub">72%</div></td>
      <td style="font-size:.8rem">6 / 6 <div class="sub">72%</div></td>
      <td><span class="chip por-vencer">4</span></td>
      <td><span class="act-ico" onclick="openProj('ten1')" title="Ver">👁</span></td>
    </tr><tr>
      <td><div class="ct-link" onclick="openProj('can2')">Servicios Candelaria</div><div class="sub">Candelaria</div></td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:72%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">72%</span></div></td>
      <td style="font-size:.8rem">8 / 8 <div class="sub">72%</div></td>
      <td style="font-size:.8rem">6 / 6 <div class="sub">72%</div></td>
      <td><span class="chip por-vencer">4</span></td>
      <td><span class="act-ico" onclick="openProj('can2')" title="Ver">👁</span></td>
    </tr><tr>
      <td><div class="ct-link" onclick="openProj('cas1')">Servicios Caserones</div><div class="sub">Caserones</div></td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:72%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">72%</span></div></td>
      <td style="font-size:.8rem">8 / 8 <div class="sub">72%</div></td>
      <td style="font-size:.8rem">6 / 6 <div class="sub">72%</div></td>
      <td><span class="chip por-vencer">4</span></td>
      <td><span class="act-ico" onclick="openProj('cas1')" title="Ver">👁</span></td>
    </tr><tr>
      <td><div class="ct-link" onclick="openProj('eol1')">Servicios Parque Eólico Antofagasta I</div><div class="sub">Parque Eólico Antofagasta I</div></td>
      <td><span class="chip activo">Activo</span></td>
      <td><div style="display:flex;align-items:center;gap:6px"><div class="tbar"><i style="width:74%;background:#10B981"></i></div><span style="font-size:.78rem;font-weight:600;color:#10B981">74%</span></div></td>
      <td style="font-size:.8rem">8 / 8 <div class="sub">74%</div></td>
      <td style="font-size:.8rem">6 / 6 <div class="sub">74%</div></td>
      <td><span class="chip por-vencer">4</span></td>
      <td><span class="act-ico" onclick="openProj('eol1')" title="Ver">👁</span></td>
    </tr></tbody>
      </table>
    </div>
    <!-- Alertas importantes -->
    <div class="acard" style="padding:0;overflow:hidden">
      <div class="ph" style="padding:16px 20px 14px;border-bottom:1px solid var(--linea)">
        <h3 style="font-size:1rem">Alertas importantes</h3>
        <span class="linkbtn" style="font-size:.8rem" onclick="navTo('alertas')">Ver todas (30) →</span>
      </div>
      <div style="padding:0 16px">
        <div class="arow r" style="cursor:pointer" onclick="navTo('alertas')">
      <div class="ai2">⚠️</div>
      <div class="at" style="flex:1;min-width:0"><b>Anexo Contrato</b><small>Castro Vera Marcelo · Los Pelambres</small></div>
      <span class="ago" style="color:#f87171">Vencido</span>
    </div><div class="arow r" style="cursor:pointer" onclick="navTo('alertas')">
      <div class="ai2">⚠️</div>
      <div class="at" style="flex:1;min-width:0"><b>Registro de la Charla de Inducción Persona Nueva</b><small>Rojas Fuentes Matías · Andina</small></div>
      <span class="ago" style="color:#f87171">Vencido</span>
    </div><div class="arow r" style="cursor:pointer" onclick="navTo('alertas')">
      <div class="ai2">⚠️</div>
      <div class="at" style="flex:1;min-width:0"><b>Registro de la Charla de Inducción Persona Nueva</b><small>Leiva Campos Andrés · El Teniente</small></div>
      <span class="ago" style="color:#f87171">Vencido</span>
    </div><div class="arow r" style="cursor:pointer" onclick="navTo('alertas')">
      <div class="ai2">⚠️</div>
      <div class="at" style="flex:1;min-width:0"><b>Anexo Contrato</b><small>Peña Castillo Diego · Candelaria</small></div>
      <span class="ago" style="color:#f87171">Vencido</span>
    </div><div class="arow r" style="cursor:pointer" onclick="navTo('alertas')">
      <div class="ai2">⚠️</div>
      <div class="at" style="flex:1;min-width:0"><b>Anexo Contrato</b><small>Donoso Araya Francisca · Caserones</small></div>
      <span class="ago" style="color:#f87171">Vencido</span>
    </div>
      </div>
    </div>
  </div>

  <div class="dash-3bot">
    <!-- Acreditaciones por estado -->
    <div class="dpanel" style="padding:18px">
      <h3 style="font-size:.95rem;margin-bottom:14px">Acreditaciones por estado</h3>
      <div style="display:flex;gap:16px;align-items:center">
        <div class="donut"><svg width="170" height="170" viewBox="0 0 170 170"><circle cx="85" cy="85" r="52" fill="none" stroke="#eee5da" stroke-width="18"></circle><circle cx="85" cy="85" r="52" fill="none" stroke="#3f8f5b" stroke-width="18" stroke-dasharray="315.7616884574547 10.96394751588383" stroke-dashoffset="0" transform="rotate(-90 85 85)"></circle><circle cx="85" cy="85" r="52" fill="none" stroke="#d68a2e" stroke-width="18" stroke-dasharray="2.1927895031767686 324.53284647016176" stroke-dashoffset="-315.7616884574547" transform="rotate(-90 85 85)"></circle><circle cx="85" cy="85" r="52" fill="none" stroke="#c0392b" stroke-width="18" stroke-dasharray="8.771158012707074 317.95447796063144" stroke-dashoffset="-317.95447796063144" transform="rotate(-90 85 85)"></circle></svg><div class="ctr"><div><b>894</b><small>Total</small></div></div></div>
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;font-size:.8rem;padding:5px 0"><span style="display:flex;align-items:center;gap:6px"><span style="width:8px;height:8px;border-radius:50%;background:#3f8f5b;display:inline-block"></span>Acreditado</span><span style="font-weight:700">864 <span style="color:#94A3B8;font-weight:400">97%</span></span></div>
          <div style="display:flex;justify-content:space-between;font-size:.8rem;padding:5px 0"><span style="display:flex;align-items:center;gap:6px"><span style="width:8px;height:8px;border-radius:50%;background:#d68a2e;display:inline-block"></span>Pendiente</span><span style="font-weight:700">6 <span style="color:#94A3B8;font-weight:400">1%</span></span></div>
          <div style="display:flex;justify-content:space-between;font-size:.8rem;padding:5px 0"><span style="display:flex;align-items:center;gap:6px"><span style="width:8px;height:8px;border-radius:50%;background:#c0392b;display:inline-block"></span>Vencido</span><span style="font-weight:700">24 <span style="color:#94A3B8;font-weight:400">3%</span></span></div>
        </div>
      </div>
    </div>
    <!-- Actividad reciente -->
    <div class="dpanel" style="padding:18px">
      <div class="ph" style="margin-bottom:2px"><h3 style="font-size:.95rem">Actividad reciente</h3><span class="linkbtn" style="font-size:.78rem" onclick="navTo('alertas')">Ver toda →</span></div>
      <div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--linea)">
    <div style="width:30px;height:30px;border-radius:8px;background:#f1f5f9;display:grid;place-items:center;flex-shrink:0">✅</div>
    <div style="flex:1;min-width:0"><div style="font-size:.82rem;font-weight:600;color:var(--txt)">Personal acreditado en flp</div><div style="font-size:.72rem;color:var(--gris)">CT-lp1</div></div>
    <div style="font-size:.7rem;color:var(--gris);white-space:nowrap">Hoy, 10:15</div>
  </div><div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--linea)">
    <div style="width:30px;height:30px;border-radius:8px;background:#f1f5f9;display:grid;place-items:center;flex-shrink:0">⚠️</div>
    <div style="flex:1;min-width:0"><div style="font-size:.82rem;font-weight:600;color:var(--txt)">Documento por vencer próximamente</div><div style="font-size:.72rem;color:var(--gris)">Revisar alertas</div></div>
    <div style="font-size:.7rem;color:var(--gris);white-space:nowrap">Ayer</div>
  </div><div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--linea)">
    <div style="width:30px;height:30px;border-radius:8px;background:#f1f5f9;display:grid;place-items:center;flex-shrink:0">📋</div>
    <div style="flex:1;min-width:0"><div style="font-size:.82rem;font-weight:600;color:var(--txt)">Nuevo requisito: Inducción de Faena</div><div style="font-size:.72rem;color:var(--gris)">Todas las faenas</div></div>
    <div style="font-size:.7rem;color:var(--gris);white-space:nowrap">Ayer</div>
  </div>
    </div>
    <!-- Próximos vencimientos -->
    <div class="dpanel" style="padding:18px">
      <div class="ph" style="margin-bottom:2px"><h3 style="font-size:.95rem">Próximos vencimientos</h3><span class="linkbtn" style="font-size:.78rem" onclick="navTo('calendario')">Ver calendario →</span></div>
      <div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--linea);align-items:center">
      <div style="width:44px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--azul)">24-AGO</div><div style="font-size:.62rem;color:var(--gris)"></div></div>
      <div style="flex:1;min-width:0"><div style="font-size:.82rem;font-weight:600;color:var(--txt)">Anexo Contrato</div><div style="font-size:.72rem;color:var(--gris)">Castro Vera Marcelo</div></div>
      <span class="chip vencido" style="font-size:.65rem">Vencido</span>
    </div><div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--linea);align-items:center">
      <div style="width:44px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--azul)">24-AGO</div><div style="font-size:.62rem;color:var(--gris)"></div></div>
      <div style="flex:1;min-width:0"><div style="font-size:.82rem;font-weight:600;color:var(--txt)">Registro de la Charla de Inducción Persona Nueva</div><div style="font-size:.72rem;color:var(--gris)">Rojas Fuentes Matías</div></div>
      <span class="chip vencido" style="font-size:.65rem">Vencido</span>
    </div><div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--linea);align-items:center">
      <div style="width:44px;text-align:center;flex-shrink:0"><div style="font-size:1.1rem;font-weight:800;color:var(--azul)">24-AGO</div><div style="font-size:.62rem;color:var(--gris)"></div></div>
      <div style="flex:1;min-width:0"><div style="font-size:.82rem;font-weight:600;color:var(--txt)">Registro de la Charla de Inducción Persona Nueva</div><div style="font-size:.72rem;color:var(--gris)">Leiva Campos Andrés</div></div>
      <span class="chip vencido" style="font-size:.65rem">Vencido</span>
    </div>
    </div>
  </div>` }} />
  );
}
