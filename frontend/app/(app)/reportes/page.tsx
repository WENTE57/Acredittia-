
"use client";
export default function ReportesPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="view-head">
    <div><h2>Reportes</h2><p>Genera reportes y análisis del estado de acreditación de tu empresa en contratos, faenas, personal y equipos.</p></div>
    <div class="view-head-actions">
      <button class="btn-primary" onclick="toast('Nuevo reporte personalizado — próximamente')">+ Nuevo reporte</button>
    </div>
  </div>
  <div class="dkpis5" style="grid-template-columns:repeat(4,1fr)">
    <div class="dkpi5"><div class="ic5">📊</div><div><div class="kt">Reportes generados</div><div class="kn">28</div><div class="ks ok">↑ 12% vs mes anterior</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(16,185,129,.15)">⚙️</div><div><div class="kt">Programados activos</div><div class="kn">6</div><div class="ks ok">informes automáticos</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(61,98,245,.15)">📈</div><div><div class="kt">Cobertura de acreditación</div><div class="kn">74%</div><div class="ks ok">promedio general</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(245,158,11,.15)">⚠️</div><div><div class="kt">Hallazgos críticos</div><div class="kn">24</div><div class="ks bad">requieren atención</div></div></div>
  </div>
  <div style="margin-bottom:22px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
      <h3 style="color:#0F172A;font-size:1rem">Reportes disponibles</h3>
      <span class="linkbtn" style="font-size:.8rem">Ver todos los tipos de reportes →</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px"><div style="background:#fff;border:1px solid var(--linea);border-radius:14px;padding:20px;cursor:pointer;transition:.15s" onmouseover="this.style.borderColor='var(--cyan)';this.style.boxShadow='0 6px 20px rgba(61,98,245,.1)'" onmouseout="this.style.borderColor='var(--linea)';this.style.boxShadow=''">
    <div style="width:38px;height:38px;border-radius:10px;background:#dbeafe;display:grid;place-items:center;font-size:1.2rem;margin-bottom:12px">📈</div>
    <div style="font-weight:700;font-size:.88rem;color:var(--azul);margin-bottom:6px">Estado de acreditación</div>
    <div style="font-size:.78rem;color:var(--gris);margin-bottom:14px;line-height:1.4">Resumen general del estado de acreditación por contrato o faena.</div>
    <button class="btn-primary" style="width:100%;padding:8px;font-size:.78rem" onclick="toast('Generando reporte: Estado de acreditación...')">Generar reporte</button>
  </div><div style="background:#fff;border:1px solid var(--linea);border-radius:14px;padding:20px;cursor:pointer;transition:.15s" onmouseover="this.style.borderColor='var(--cyan)';this.style.boxShadow='0 6px 20px rgba(61,98,245,.1)'" onmouseout="this.style.borderColor='var(--linea)';this.style.boxShadow=''">
    <div style="width:38px;height:38px;border-radius:10px;background:#dcfce7;display:grid;place-items:center;font-size:1.2rem;margin-bottom:12px">📋</div>
    <div style="font-weight:700;font-size:.88rem;color:var(--azul);margin-bottom:6px">Cumplimiento de requisitos</div>
    <div style="font-size:.78rem;color:var(--gris);margin-bottom:14px;line-height:1.4">Nivel de cumplimiento de requisitos obligatorios y no obligatorios.</div>
    <button class="btn-primary" style="width:100%;padding:8px;font-size:.78rem" onclick="toast('Generando reporte: Cumplimiento de requisitos...')">Generar reporte</button>
  </div><div style="background:#fff;border:1px solid var(--linea);border-radius:14px;padding:20px;cursor:pointer;transition:.15s" onmouseover="this.style.borderColor='var(--cyan)';this.style.boxShadow='0 6px 20px rgba(61,98,245,.1)'" onmouseout="this.style.borderColor='var(--linea)';this.style.boxShadow=''">
    <div style="width:38px;height:38px;border-radius:10px;background:#ede9fe;display:grid;place-items:center;font-size:1.2rem;margin-bottom:12px">👥</div>
    <div style="font-weight:700;font-size:.88rem;color:var(--azul);margin-bottom:6px">Personal acreditado</div>
    <div style="font-size:.78rem;color:var(--gris);margin-bottom:14px;line-height:1.4">Resumen de personal acreditado por faena, cargo o estado.</div>
    <button class="btn-primary" style="width:100%;padding:8px;font-size:.78rem" onclick="toast('Generando reporte: Personal acreditado...')">Generar reporte</button>
  </div><div style="background:#fff;border:1px solid var(--linea);border-radius:14px;padding:20px;cursor:pointer;transition:.15s" onmouseover="this.style.borderColor='var(--cyan)';this.style.boxShadow='0 6px 20px rgba(61,98,245,.1)'" onmouseout="this.style.borderColor='var(--linea)';this.style.boxShadow=''">
    <div style="width:38px;height:38px;border-radius:10px;background:#fef3c7;display:grid;place-items:center;font-size:1.2rem;margin-bottom:12px">🚛</div>
    <div style="font-weight:700;font-size:.88rem;color:var(--azul);margin-bottom:6px">Equipos y vehículos</div>
    <div style="font-size:.78rem;color:var(--gris);margin-bottom:14px;line-height:1.4">Estado de acreditación de equipos y vehículos por faena.</div>
    <button class="btn-primary" style="width:100%;padding:8px;font-size:.78rem" onclick="toast('Generando reporte: Equipos y vehículos...')">Generar reporte</button>
  </div><div style="background:#fff;border:1px solid var(--linea);border-radius:14px;padding:20px;cursor:pointer;transition:.15s" onmouseover="this.style.borderColor='var(--cyan)';this.style.boxShadow='0 6px 20px rgba(61,98,245,.1)'" onmouseout="this.style.borderColor='var(--linea)';this.style.boxShadow=''">
    <div style="width:38px;height:38px;border-radius:10px;background:#fee2e2;display:grid;place-items:center;font-size:1.2rem;margin-bottom:12px">⏰</div>
    <div style="font-weight:700;font-size:.88rem;color:var(--azul);margin-bottom:6px">Vencimientos</div>
    <div style="font-size:.78rem;color:var(--gris);margin-bottom:14px;line-height:1.4">Próximos vencimientos de acreditaciones y requisitos.</div>
    <button class="btn-primary" style="width:100%;padding:8px;font-size:.78rem" onclick="toast('Generando reporte: Vencimientos...')">Generar reporte</button>
  </div></div>
  </div>
  <div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
      <h3 style="color:#0F172A;font-size:1rem">Mis reportes recientes</h3>
      <button class="btn-outline" style="font-size:.78rem;padding:6px 12px">🔽 Filtros</button>
    </div>
    <div class="vtable-wrap">
      <table class="vtable">
        <thead><tr><th>Nombre del reporte</th><th>Tipo de reporte</th><th>Ámbito</th><th>Generado por</th><th>Fecha de generación</th><th>Formato</th><th>Acciones</th></tr></thead>
        <tbody><tr>
    <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center">📈</div><div><div style="font-size:.83rem;font-weight:600;color:var(--txt)">Estado de acreditación - Minera Los Pelambres</div><div class="sub">Estado de acreditación</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Estado de acreditación</td>
    <td style="font-size:.8rem;color:var(--gris)">Contrato</td>
    <td style="font-size:.8rem;color:var(--gris)">Luis Felipe</td>
    <td style="font-size:.78rem;color:var(--gris)">16/05/2025 10:30</td>
    <td><span class="chip vencido" style="font-size:.65rem">PDF</span></td>
    <td><span class="act-ico" title="Descargar" onclick="toast('Descargando Estado de acreditación - Minera Los Pelambres...')">↓</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center">📋</div><div><div style="font-size:.83rem;font-weight:600;color:var(--txt)">Cumplimiento de requisitos - Todas las faenas</div><div class="sub">Cumplimiento de requisitos</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Cumplimiento de requisitos</td>
    <td style="font-size:.8rem;color:var(--gris)">Empresa</td>
    <td style="font-size:.8rem;color:var(--gris)">Luis Felipe</td>
    <td style="font-size:.78rem;color:var(--gris)">15/05/2025 16:45</td>
    <td><span class="chip activo" style="font-size:.65rem">Excel</span></td>
    <td><span class="act-ico" title="Descargar" onclick="toast('Descargando Cumplimiento de requisitos - Todas las faenas...')">↓</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center">👥</div><div><div style="font-size:.83rem;font-weight:600;color:var(--txt)">Personal acreditado por faena</div><div class="sub">Personal acreditado</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Personal acreditado</td>
    <td style="font-size:.8rem;color:var(--gris)">Faenas</td>
    <td style="font-size:.8rem;color:var(--gris)">Sistema (Programado)</td>
    <td style="font-size:.78rem;color:var(--gris)">15/05/2025 08:00</td>
    <td><span class="chip activo" style="font-size:.65rem">Excel</span></td>
    <td><span class="act-ico" title="Descargar" onclick="toast('Descargando Personal acreditado por faena...')">↓</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center">🚛</div><div><div style="font-size:.83rem;font-weight:600;color:var(--txt)">Equipos y vehículos acreditados</div><div class="sub">Equipos y vehículos</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Equipos y vehículos</td>
    <td style="font-size:.8rem;color:var(--gris)">Empresa</td>
    <td style="font-size:.8rem;color:var(--gris)">Luis Felipe</td>
    <td style="font-size:.78rem;color:var(--gris)">14/05/2025 11:20</td>
    <td><span class="chip vencido" style="font-size:.65rem">PDF</span></td>
    <td><span class="act-ico" title="Descargar" onclick="toast('Descargando Equipos y vehículos acreditados...')">↓</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr><tr>
    <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:#EEF2FF;display:grid;place-items:center">⏰</div><div><div style="font-size:.83rem;font-weight:600;color:var(--txt)">Vencimientos próximos (30 días)</div><div class="sub">Vencimientos</div></div></div></td>
    <td style="font-size:.8rem;color:var(--gris)">Vencimientos</td>
    <td style="font-size:.8rem;color:var(--gris)">Empresa</td>
    <td style="font-size:.8rem;color:var(--gris)">Sistema (Programado)</td>
    <td style="font-size:.78rem;color:var(--gris)">14/05/2025 08:00</td>
    <td><span class="chip vencido" style="font-size:.65rem">PDF</span></td>
    <td><span class="act-ico" title="Descargar" onclick="toast('Descargando Vencimientos próximos (30 días)...')">↓</span>&nbsp;<span class="act-ico" title="Opciones">⋮</span></td>
  </tr></tbody>
      </table>
      <div class="tfoot"><span>Mostrando 1 a 5 de 5 reportes</span></div>
    </div>
  </div>` }} />
  );
}
