
"use client";
export default function AcreditacionesPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<div class="ppg">
    <div style="display:flex;justify-content:flex-end;gap:10px;margin-bottom:14px">
      <button class="btn-edit" onclick="toast('Exportar — demo')">⤓ Exportar</button>
      <button class="btn btn-orange" style="color:#fff;padding:11px 18px" onclick="goFaenas()">+ Nueva faena</button>
    </div>
    <div class="ptkpis" style="grid-template-columns:repeat(4,1fr)">
    <div class="ptk"><div class="top"><div class="ic">🏔️</div><div class="lbl">Faenas activas</div></div><div class="big">6</div><div class="sub link" onclick="navTo('proyectos')">Ver todas →</div></div>
    <div class="ptk"><div class="top"><div class="ic">👥</div><div class="lbl">Personas + equipos</div></div><div class="big">103</div><div class="sub up" style="color:var(--verde)">en acreditación</div></div>
    <div class="ptk"><div class="top"><div class="ic">🛡️</div><div class="lbl">Documentos vigentes</div></div><div class="big">864</div><div class="sub">97% del total</div></div>
    <div class="ptk amber"><div class="top"><div class="ic">📅</div><div class="lbl">Próximos por vencer (7 días)</div></div><div class="big">0</div><div class="sub link" onclick="navTo('alertas')">Ver vencimientos →</div></div>
  </div>
    <div class="wcard" style="margin-top:8px">
      <div class="toolrow"><input class="sinp" placeholder="🔍 Buscar faena..." oninput="filterFaenaTable(this.value)"><select class="sel"><option>Estado: Todos</option></select><select class="sel"><option>Proyecto: Todos</option></select><select class="sel"><option>Ubicación: Todas</option></select></div>
      <table class="ptable" id="ftable"><thead><tr><th>Faena</th><th>Proyecto</th><th>Ubicación</th><th>Personas</th><th>Acreditaciones</th><th>Estado</th><th>Próx. por vencer</th><th></th></tr></thead><tbody><tr style="cursor:pointer" onclick="openProj('lp1')">
      <td><div class="pj"><div class="pic" style="background:linear-gradient(135deg,#2448E0,#0F172A);width:38px;height:38px;border-radius:10px"><svg width="20" height="18" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"></path></svg></div><div><b>Los Pelambres</b><small>Coquimbo</small></div></div></td>
      <td>Transporte y Operaciones MLP</td><td>Coquimbo</td><td>33</td>
      <td><b>303</b> / 309 <span class="pbar"><i style="width:98%"></i></span> <small style="color:var(--gris)">98%</small></td>
      <td><span class="estado vigente" style="">Activa</span></td>
      <td><b style="color:var(--naranja-d)">2</b></td>
      <td class="dots">⋯</td></tr><tr style="cursor:pointer" onclick="openProj('and1')">
      <td><div class="pj"><div class="pic" style="background:linear-gradient(135deg,#dc2626,#0F172A);width:38px;height:38px;border-radius:10px"><svg width="20" height="18" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"></path></svg></div><div><b>Andina</b><small>Valparaíso</small></div></div></td>
      <td>Servicios Mina Andina</td><td>Valparaíso</td><td>14</td>
      <td><b>91</b> / 96 <span class="pbar"><i style="width:95%"></i></span> <small style="color:var(--gris)">95%</small></td>
      <td><span class="estado vigente" style="">Activa</span></td>
      <td><b style="color:var(--naranja-d)">1</b></td>
      <td class="dots">⋯</td></tr><tr style="cursor:pointer" onclick="openProj('ten1')">
      <td><div class="pj"><div class="pic" style="background:linear-gradient(135deg,#b91c1c,#0F172A);width:38px;height:38px;border-radius:10px"><svg width="20" height="18" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"></path></svg></div><div><b>El Teniente</b><small>O'Higgins</small></div></div></td>
      <td>Mantención Minera El Teniente</td><td>O'Higgins</td><td>14</td>
      <td><b>92</b> / 96 <span class="pbar"><i style="width:96%"></i></span> <small style="color:var(--gris)">96%</small></td>
      <td><span class="estado vigente" style="">Activa</span></td>
      <td><b style="color:var(--gris)">0</b></td>
      <td class="dots">⋯</td></tr><tr style="cursor:pointer" onclick="openProj('can2')">
      <td><div class="pj"><div class="pic" style="background:linear-gradient(135deg,#b45309,#0F172A);width:38px;height:38px;border-radius:10px"><svg width="20" height="18" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"></path></svg></div><div><b>Candelaria</b><small>Atacama</small></div></div></td>
      <td>Servicios Candelaria</td><td>Atacama</td><td>14</td>
      <td><b>125</b> / 130 <span class="pbar"><i style="width:96%"></i></span> <small style="color:var(--gris)">96%</small></td>
      <td><span class="estado vigente" style="">Activa</span></td>
      <td><b style="color:var(--naranja-d)">1</b></td>
      <td class="dots">⋯</td></tr><tr style="cursor:pointer" onclick="openProj('cas1')">
      <td><div class="pj"><div class="pic" style="background:linear-gradient(135deg,#d97706,#0F172A);width:38px;height:38px;border-radius:10px"><svg width="20" height="18" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"></path></svg></div><div><b>Caserones</b><small>Atacama</small></div></div></td>
      <td>Servicios Caserones</td><td>Atacama</td><td>14</td>
      <td><b>126</b> / 131 <span class="pbar"><i style="width:96%"></i></span> <small style="color:var(--gris)">96%</small></td>
      <td><span class="estado vigente" style="">Activa</span></td>
      <td><b style="color:var(--naranja-d)">1</b></td>
      <td class="dots">⋯</td></tr><tr style="cursor:pointer" onclick="openProj('eol1')">
      <td><div class="pj"><div class="pic" style="background:linear-gradient(135deg,#0EA5E9,#0F172A);width:38px;height:38px;border-radius:10px"><svg width="20" height="18" viewBox="0 0 100 92"><path d="M50 6 L92 80 L66 80 L50 42 L34 80 L8 80 Z" fill="#f2cda0"></path></svg></div><div><b>Parque Eólico Antofagasta I</b><small>Antofagasta</small></div></div></td>
      <td>Servicios Parque Eólico Antofagasta I</td><td>Antofagasta</td><td>14</td>
      <td><b>127</b> / 132 <span class="pbar"><i style="width:96%"></i></span> <small style="color:var(--gris)">96%</small></td>
      <td><span class="estado vigente" style="">Activa</span></td>
      <td><b style="color:var(--naranja-d)">1</b></td>
      <td class="dots">⋯</td></tr></tbody></table>
    </div>
    <div class="fbottom">
      <div class="wcard"><div class="ph"><h3>Acreditaciones por estado</h3></div>
        <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap"><div class="donut"><svg width="170" height="170" viewBox="0 0 170 170"><circle cx="85" cy="85" r="52" fill="none" stroke="#eee5da" stroke-width="18"></circle><circle cx="85" cy="85" r="52" fill="none" stroke="#3f8f5b" stroke-width="18" stroke-dasharray="315.7616884574547 10.96394751588383" stroke-dashoffset="0" transform="rotate(-90 85 85)"></circle><circle cx="85" cy="85" r="52" fill="none" stroke="#d68a2e" stroke-width="18" stroke-dasharray="2.1927895031767686 324.53284647016176" stroke-dashoffset="-315.7616884574547" transform="rotate(-90 85 85)"></circle><circle cx="85" cy="85" r="52" fill="none" stroke="#c0392b" stroke-width="18" stroke-dasharray="8.771158012707074 317.95447796063144" stroke-dashoffset="-317.95447796063144" transform="rotate(-90 85 85)"></circle></svg><div class="ctr"><div><b>894</b><small>Total</small></div></div></div>
          <div class="leg" style="flex:1;min-width:160px">
            <div class="lr"><span class="d" style="background:#3f8f5b"></span>Vigentes <span class="v">864 (97%)</span></div>
            <div class="lr"><span class="d" style="background:#d68a2e"></span>Por vencer <span class="v">6 (1%)</span></div>
            <div class="lr"><span class="d" style="background:#c0392b"></span>Vencidas <span class="v">24 (3%)</span></div>
          </div></div></div>
      <div class="wcard"><div class="ph"><h3>Vencimientos próximos (7 días)</h3><span class="linkbtn" onclick="navTo('alertas')">Ver calendario →</span></div><div class="venc-it" onclick="openSubject('lp1','equipo','de1')"><div class="vdate"><b>28</b><small>JUN</small></div><div class="vinfo"><b>Los Pelambres</b><small>Permiso de Circulación · Mercedes Actros 2653</small></div><span class="vchev">›</span></div></div>
      <div class="wcard"><div class="ph"><h3>Faenas por ubicación</h3></div><div class="ubilist"><div class="ubi-it"><span class="ubi-d"></span><span style="flex:1">Atacama</span><span class="ubi-n">2</span></div><div class="ubi-it"><span class="ubi-d"></span><span style="flex:1">Coquimbo</span><span class="ubi-n">1</span></div><div class="ubi-it"><span class="ubi-d"></span><span style="flex:1">Valparaíso</span><span class="ubi-n">1</span></div><div class="ubi-it"><span class="ubi-d"></span><span style="flex:1">O'Higgins</span><span class="ubi-n">1</span></div><div class="ubi-it"><span class="ubi-d"></span><span style="flex:1">Antofagasta</span><span class="ubi-n">1</span></div></div></div>
    </div>
  </div>` }} />
  );
}
