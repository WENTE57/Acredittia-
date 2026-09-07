
"use client";
export default function CalendarioPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="view-head">
    <div><h2>Calendario</h2><p>Visualiza y gestiona los vencimientos y eventos importantes de acreditaciones, requisitos y mantenciones.</p></div>
    <div class="view-head-actions">
      <button class="btn-outline" onclick="toast('Exportar calendario — próximamente')">↓ Exportar calendario</button>
      <button class="btn-primary" onclick="toast('Nuevo evento — próximamente')">+ Nuevo evento</button>
    </div>
  </div>
  <div class="dkpis5" style="grid-template-columns:repeat(4,1fr)">
    <div class="dkpi5"><div class="ic5">📅</div><div><div class="kt">Vencimientos próximos</div><div class="kn">30</div><div class="ks warn">en los próximos 30 días</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(239,68,68,.15)">⚠️</div><div><div class="kt">Eventos críticos</div><div class="kn">24</div><div class="ks bad">requieren atención</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(61,98,245,.15)">📌</div><div><div class="kt">Eventos programados</div><div class="kn">12</div><div class="ks">este mes</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(16,185,129,.15)">✅</div><div><div class="kt">Eventos completados</div><div class="kn">864</div><div class="ks ok">este mes</div></div></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 280px;gap:16px;align-items:start">
    <div>
      <div class="cal-grid">
        <div class="cal-head">
          <div style="display:flex;align-items:center;gap:10px">
            <button class="cal-head-btn">←</button>
            <button style="padding:6px 14px;border-radius:8px;border:1px solid var(--linea);background:#fff;font-weight:600;font-size:.88rem;color:var(--azul)">Hoy</button>
            <button class="cal-head-btn">→</button>
            <span style="font-size:1rem;font-weight:700;color:var(--azul);margin-left:8px">Septiembre 2026</span>
          </div>
          <div style="display:flex;gap:4px">
            <button class="cal-head-btn" style="padding:6px 10px;width:auto">Mes</button>
            <button class="cal-head-btn" style="padding:6px 10px;width:auto">Semana</button>
            <button class="cal-head-btn" style="padding:6px 10px;width:auto">Día</button>
            <button class="cal-head-btn" style="padding:6px 10px;width:auto">Agenda</button>
          </div>
        </div>
        <div class="cal-weekdays"><div class="cal-weekday">Lun</div><div class="cal-weekday">Mar</div><div class="cal-weekday">Mié</div><div class="cal-weekday">Jue</div><div class="cal-weekday">Vie</div><div class="cal-weekday">Sáb</div><div class="cal-weekday">Dom</div></div>
        <div class="cal-days"><div class="cal-day" style="background:#fafafa"></div><div class="cal-day"><div class="dn">1</div></div><div class="cal-day"><div class="dn">2</div></div><div class="cal-day"><div class="dn">3</div></div><div class="cal-day"><div class="dn">4</div></div><div class="cal-day"><div class="dn">5</div><div class="cal-ev ev-cap">Inducción de faena</div></div><div class="cal-day"><div class="dn">6</div></div><div class="cal-day today"><div class="dn">7</div></div><div class="cal-day"><div class="dn">8</div></div><div class="cal-day"><div class="dn">9</div></div><div class="cal-day"><div class="dn">10</div></div><div class="cal-day"><div class="dn">11</div></div><div class="cal-day"><div class="dn">12</div></div><div class="cal-day"><div class="dn">13</div></div><div class="cal-day"><div class="dn">14</div><div class="cal-ev ev-otro">Entrega EPP</div></div><div class="cal-day"><div class="dn">15</div></div><div class="cal-day"><div class="dn">16</div></div><div class="cal-day"><div class="dn">17</div></div><div class="cal-day"><div class="dn">18</div></div><div class="cal-day"><div class="dn">19</div></div><div class="cal-day"><div class="dn">20</div><div class="cal-ev ev-cap">Capacitación SSMA</div></div><div class="cal-day"><div class="dn">21</div></div><div class="cal-day"><div class="dn">22</div></div><div class="cal-day"><div class="dn">23</div></div><div class="cal-day"><div class="dn">24</div></div><div class="cal-day"><div class="dn">25</div></div><div class="cal-day"><div class="dn">26</div></div><div class="cal-day"><div class="dn">27</div></div><div class="cal-day"><div class="dn">28</div></div><div class="cal-day"><div class="dn">29</div></div><div class="cal-day"><div class="dn">30</div></div></div>
      </div>
      <div style="display:flex;gap:16px;margin-top:12px;flex-wrap:wrap;font-size:.78rem;color:var(--gris);background:var(--dpanel);padding:10px 16px;border-radius:12px;border:1px solid var(--dline)">
        <span><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#fee2e2;margin-right:4px"></span>Vencimiento</span>
        <span><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#dbeafe;margin-right:4px"></span>Mantención</span>
        <span><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#fef3c7;margin-right:4px"></span>Capacitación</span>
        <span><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#e9d5ff;margin-right:4px"></span>Administrativo</span>
        <span><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#dcfce7;margin-right:4px"></span>Entrega / Otro</span>
      </div>
    </div>
    <div class="dpanel" style="padding:0;overflow:hidden">
      <div style="padding:16px 18px;border-bottom:1px solid var(--linea);display:flex;justify-content:space-between;align-items:center">
        <span style="font-weight:700;font-size:.95rem;color:var(--txt)">Próximos eventos</span>
        <span class="linkbtn" style="font-size:.78rem">Ver calendario completo →</span>
      </div>
      <div style="padding:0 16px"><div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--linea);align-items:flex-start">
      <div style="background:#fee2e2;border-radius:10px;padding:8px 12px;text-align:center;flex-shrink:0;min-width:50px">
        <div style="font-size:1.3rem;font-weight:900;color:#b91c1c">28</div>
        <div style="font-size:.6rem;font-weight:700;color:#b91c1c">MAY</div>
      </div>
      <div style="flex:1"><div style="font-size:.82rem;font-weight:600;color:var(--txt)">Cédula de Identidad</div>
        <div style="font-size:.75rem;color:var(--gris)">Castro Vera Marcelo</div>
        <div style="font-size:.75rem;color:var(--gris)">Los Pelambres</div>
        <span class="chip vencido" style="font-size:.65rem;margin-top:4px;display:inline-block">Vencido</span>
      </div>
    </div><div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--linea);align-items:flex-start">
      <div style="background:#fee2e2;border-radius:10px;padding:8px 12px;text-align:center;flex-shrink:0;min-width:50px">
        <div style="font-size:1.3rem;font-weight:900;color:#b91c1c">18</div>
        <div style="font-size:.6rem;font-weight:700;color:#b91c1c">MAY</div>
      </div>
      <div style="flex:1"><div style="font-size:.82rem;font-weight:600;color:var(--txt)">Anexo Contrato</div>
        <div style="font-size:.75rem;color:var(--gris)">Castro Vera Marcelo</div>
        <div style="font-size:.75rem;color:var(--gris)">Los Pelambres</div>
        <span class="chip vencido" style="font-size:.65rem;margin-top:4px;display:inline-block">Vencido</span>
      </div>
    </div><div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--linea);align-items:flex-start">
      <div style="background:#fee2e2;border-radius:10px;padding:8px 12px;text-align:center;flex-shrink:0;min-width:50px">
        <div style="font-size:1.3rem;font-weight:900;color:#b91c1c">28</div>
        <div style="font-size:.6rem;font-weight:700;color:#b91c1c">MAY</div>
      </div>
      <div style="flex:1"><div style="font-size:.82rem;font-weight:600;color:var(--txt)">Autorización del Trabajador/a para Uso y Almacenamiento de Datos Personales</div>
        <div style="font-size:.75rem;color:var(--gris)">Rojas Fuentes Matías</div>
        <div style="font-size:.75rem;color:var(--gris)">Andina</div>
        <span class="chip vencido" style="font-size:.65rem;margin-top:4px;display:inline-block">Vencido</span>
      </div>
    </div><div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--linea);align-items:flex-start">
      <div style="background:#fee2e2;border-radius:10px;padding:8px 12px;text-align:center;flex-shrink:0;min-width:50px">
        <div style="font-size:1.3rem;font-weight:900;color:#b91c1c">18</div>
        <div style="font-size:.6rem;font-weight:700;color:#b91c1c">MAY</div>
      </div>
      <div style="flex:1"><div style="font-size:.82rem;font-weight:600;color:var(--txt)">Registro de la Charla de Inducción Persona Nueva</div>
        <div style="font-size:.75rem;color:var(--gris)">Rojas Fuentes Matías</div>
        <div style="font-size:.75rem;color:var(--gris)">Andina</div>
        <span class="chip vencido" style="font-size:.65rem;margin-top:4px;display:inline-block">Vencido</span>
      </div>
    </div><div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--linea);align-items:flex-start">
      <div style="background:#fee2e2;border-radius:10px;padding:8px 12px;text-align:center;flex-shrink:0;min-width:50px">
        <div style="font-size:1.3rem;font-weight:900;color:#b91c1c">28</div>
        <div style="font-size:.6rem;font-weight:700;color:#b91c1c">MAY</div>
      </div>
      <div style="flex:1"><div style="font-size:.82rem;font-weight:600;color:var(--txt)">Autorización del Trabajador/a para Uso y Almacenamiento de Datos Personales</div>
        <div style="font-size:.75rem;color:var(--gris)">Leiva Campos Andrés</div>
        <div style="font-size:.75rem;color:var(--gris)">El Teniente</div>
        <span class="chip vencido" style="font-size:.65rem;margin-top:4px;display:inline-block">Vencido</span>
      </div>
    </div></div>
    </div>
  </div>` }} />
  );
}
