
"use client";
export default function IntegracionesPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <div class="view-head">
    <div><h2>Integraciones</h2><p>Conecta ACREDITTIA con otras herramientas y sistemas que utilizas en tu empresa.</p></div>
    <div class="view-head-actions">
      <button class="btn-primary" onclick="toast('Nueva integración — próximamente')">+ Nueva integración</button>
    </div>
  </div>
  <div class="dkpis5" style="grid-template-columns:repeat(4,1fr)">
    <div class="dkpi5"><div class="ic5">🔌</div><div><div class="kt">Integraciones activas</div><div class="kn">4</div><div class="ks ok">conectadas</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(16,185,129,.15)">🔄</div><div><div class="kt">Sincronizaciones exitosas</div><div class="kn">128</div><div class="ks ok">↑ 18% vs mes anterior</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(61,98,245,.15)">⏱️</div><div><div class="kt">Última sincronización</div><div class="kn" style="font-size:1.1rem">Hoy 09:15</div><div class="ks ok">Todas las integraciones</div></div></div>
    <div class="dkpi5"><div class="ic5" style="background:rgba(245,158,11,.15)">☁️</div><div><div class="kt">Transferencia de datos</div><div class="kn">2.4 GB</div><div class="ks ok">↑ 12% vs mes anterior</div></div></div>
  </div>
  <div class="vtable-wrap" style="margin-bottom:20px">
    <table class="vtable">
      <thead><tr><th>Integración</th><th>Descripción</th><th>Estado</th><th>Última sincronización</th><th>Datos sincronizados</th><th>Acciones</th></tr></thead>
      <tbody><tr>
    <td><div style="display:flex;align-items:center;gap:12px">
      <div style="width:36px;height:36px;border-radius:10px;background:#e8f5e9;display:grid;place-items:center;font-size:.85rem;font-weight:700;color:var(--azul);flex-shrink:0">✓</div>
      <span style="font-weight:600;font-size:.88rem;color:var(--txt)">SIGA</span>
    </div></td>
    <td style="font-size:.8rem;color:var(--gris);max-width:280px">Sincroniza requisitos y estados de acreditación con la plataforma SIGA (Codelco / Antofagasta Minerals).</td>
    <td><span class="chip activo">Activa</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Hoy 09:15<div class="sub">Automática</div></td>
    <td style="font-size:.8rem;color:var(--gris)">450 MB<div class="sub">Este mes</div></td>
    <td><span class="ct-link" style="font-size:.8rem" onclick="toast('Ver detalles SIGA — próximamente')">Ver detalles</span>&nbsp;<span class="act-ico">⋮</span></td>
  </tr><tr>
    <td><div style="display:flex;align-items:center;gap:12px">
      <div style="width:36px;height:36px;border-radius:10px;background:#e3f2fd;display:grid;place-items:center;font-size:.85rem;font-weight:700;color:var(--azul);flex-shrink:0">W</div>
      <span style="font-weight:600;font-size:.88rem;color:var(--txt)">Workmate</span>
    </div></td>
    <td style="font-size:.8rem;color:var(--gris);max-width:280px">Conexión directa con Workmate para sincronización de personal y documentación de gran minería.</td>
    <td><span class="chip activo">Activa</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Hoy 08:50<div class="sub">Automática</div></td>
    <td style="font-size:.8rem;color:var(--gris)">12 MB<div class="sub">Este mes</div></td>
    <td><span class="ct-link" style="font-size:.8rem" onclick="toast('Ver detalles Workmate — próximamente')">Ver detalles</span>&nbsp;<span class="act-ico">⋮</span></td>
  </tr><tr>
    <td><div style="display:flex;align-items:center;gap:12px">
      <div style="width:36px;height:36px;border-radius:10px;background:#f3e5f5;display:grid;place-items:center;font-size:.85rem;font-weight:700;color:var(--azul);flex-shrink:0">M</div>
      <span style="font-weight:600;font-size:.88rem;color:var(--txt)">Metacontratas</span>
    </div></td>
    <td style="font-size:.8rem;color:var(--gris);max-width:280px">Sincroniza trabajadores, equipos y documentos con la plataforma Metacontratas (BHP / Collahuasi).</td>
    <td><span class="chip activo">Activa</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Ayer 18:30<div class="sub">Automática</div></td>
    <td style="font-size:.8rem;color:var(--gris)">230 MB<div class="sub">Este mes</div></td>
    <td><span class="ct-link" style="font-size:.8rem" onclick="toast('Ver detalles Metacontratas — próximamente')">Ver detalles</span>&nbsp;<span class="act-ico">⋮</span></td>
  </tr><tr>
    <td><div style="display:flex;align-items:center;gap:12px">
      <div style="width:36px;height:36px;border-radius:10px;background:#fff3e0;display:grid;place-items:center;font-size:.85rem;font-weight:700;color:var(--azul);flex-shrink:0">WC</div>
      <span style="font-weight:600;font-size:.88rem;color:var(--txt)">Webcontrol</span>
    </div></td>
    <td style="font-size:.8rem;color:var(--gris);max-width:280px">Conector para la plataforma Webcontrol — acreditación en faenas de energía y construcción.</td>
    <td><span class="chip activo">Activa</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Hoy 07:45<div class="sub">Automática</div></td>
    <td style="font-size:.8rem;color:var(--gris)">1.2 GB<div class="sub">Este mes</div></td>
    <td><span class="ct-link" style="font-size:.8rem" onclick="toast('Ver detalles Webcontrol — próximamente')">Ver detalles</span>&nbsp;<span class="act-ico">⋮</span></td>
  </tr><tr>
    <td><div style="display:flex;align-items:center;gap:12px">
      <div style="width:36px;height:36px;border-radius:10px;background:#dcfce7;display:grid;place-items:center;font-size:.85rem;font-weight:700;color:var(--azul);flex-shrink:0">📱</div>
      <span style="font-weight:600;font-size:.88rem;color:var(--txt)">WhatsApp Business API</span>
    </div></td>
    <td style="font-size:.8rem;color:var(--gris);max-width:280px">Envío automático de notificaciones y alertas vía WhatsApp a los contactos de tu empresa.</td>
    <td><span class="chip vencido">Con error</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Ayer 23:10<div class="sub">Automática</div></td>
    <td style="font-size:.8rem;color:var(--gris)">5 MB<div class="sub">Este mes</div></td>
    <td><span class="ct-link" style="font-size:.8rem" onclick="toast('Ver detalles WhatsApp Business API — próximamente')">Ver detalles</span>&nbsp;<span class="act-ico">⋮</span></td>
  </tr><tr>
    <td><div style="display:flex;align-items:center;gap:12px">
      <div style="width:36px;height:36px;border-radius:10px;background:#fce4ec;display:grid;place-items:center;font-size:.85rem;font-weight:700;color:var(--azul);flex-shrink:0">📁</div>
      <span style="font-weight:600;font-size:.88rem;color:var(--txt)">Google Drive</span>
    </div></td>
    <td style="font-size:.8rem;color:var(--gris);max-width:280px">Almacenamiento y respaldo automático de documentos acreditados en Google Drive.</td>
    <td><span class="chip activo">Activa</span></td>
    <td style="font-size:.8rem;color:var(--gris)">Hoy 09:00<div class="sub">Automática</div></td>
    <td style="font-size:.8rem;color:var(--gris)">510 MB<div class="sub">Este mes</div></td>
    <td><span class="ct-link" style="font-size:.8rem" onclick="toast('Ver detalles Google Drive — próximamente')">Ver detalles</span>&nbsp;<span class="act-ico">⋮</span></td>
  </tr></tbody>
    </table>
  </div>
  <div style="display:grid;grid-template-columns:1fr 300px;gap:16px;align-items:start">
    <div class="dpanel" style="padding:20px">
      <h3 style="font-size:.95rem;margin-bottom:14px">Logs de sincronización recientes</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr auto 2fr;gap:12px;padding:8px 0;border-bottom:1px solid var(--linea)">
        <span style="font-size:.7rem;font-weight:700;color:var(--gris);text-transform:uppercase">Integración</span>
        <span style="font-size:.7rem;font-weight:700;color:var(--gris);text-transform:uppercase">Fecha y hora</span>
        <span style="font-size:.7rem;font-weight:700;color:var(--gris);text-transform:uppercase">Estado</span>
        <span style="font-size:.7rem;font-weight:700;color:var(--gris);text-transform:uppercase">Mensaje</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr auto 2fr;gap:12px;padding:10px 0;border-bottom:1px solid var(--linea);font-size:.8rem;align-items:center">
    <span style="color:var(--txt);font-weight:600">SIGA</span>
    <span style="color:var(--gris)">15/05/2025 09:15:23</span>
    <span class="chip activo" style="font-size:.65rem">Éxito</span>
    <span style="color:var(--gris)">Sincronización completada. 128 registros actualizados.</span>
  </div><div style="display:grid;grid-template-columns:1fr 1fr auto 2fr;gap:12px;padding:10px 0;border-bottom:1px solid var(--linea);font-size:.8rem;align-items:center">
    <span style="color:var(--txt);font-weight:600">Workmate</span>
    <span style="color:var(--gris)">15/05/2025 08:50:11</span>
    <span class="chip activo" style="font-size:.65rem">Éxito</span>
    <span style="color:var(--gris)">7 usuarios sincronizados.</span>
  </div><div style="display:grid;grid-template-columns:1fr 1fr auto 2fr;gap:12px;padding:10px 0;border-bottom:1px solid var(--linea);font-size:.8rem;align-items:center">
    <span style="color:var(--txt);font-weight:600">Metacontratas</span>
    <span style="color:var(--gris)">14/05/2025 18:30:45</span>
    <span class="chip activo" style="font-size:.65rem">Éxito</span>
    <span style="color:var(--gris)">45 registros actualizados.</span>
  </div><div style="display:grid;grid-template-columns:1fr 1fr auto 2fr;gap:12px;padding:10px 0;border-bottom:1px solid var(--linea);font-size:.8rem;align-items:center">
    <span style="color:var(--txt);font-weight:600">WhatsApp</span>
    <span style="color:var(--gris)">14/05/2025 23:10:05</span>
    <span class="chip vencido" style="font-size:.65rem">Error</span>
    <span style="color:var(--gris)">Error de conexión: Token expirado. Requiere reautenticación.</span>
  </div>
      <div style="text-align:center;margin-top:14px"><span class="linkbtn" onclick="toast('Ver todos los logs')">Ver todos los logs →</span></div>
    </div>
    <div class="dpanel" style="padding:20px">
      <h3 style="font-size:.95rem;margin-bottom:8px">¿Necesitas ayuda con integraciones?</h3>
      <p style="font-size:.82rem;color:var(--gris);margin-bottom:16px">Consulta nuestra documentación o contacta con tu equipo de soporte.</p>
      <button class="btn-outline" style="width:100%;margin-bottom:8px;justify-content:center" onclick="toast('Documentación — próximamente')">📖 Ver documentación</button>
      <button class="btn-outline" style="width:100%;justify-content:center" onclick="toast('Soporte — próximamente')">💬 Contactar soporte</button>
    </div>
  </div>` }} />
  );
}
