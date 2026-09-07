"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import * as Api from "@/lib/cliente";

export default function AppHeader({ onToggleMenu }: { onToggleMenu: () => void }) {
  const router = useRouter();
  const path = usePathname();
  const [impersonando] = useState(() => typeof window !== "undefined" ? sessionStorage.getItem("impersonar_nombre") : null);
  
  // Título dinámico
  const getTitulo = () => {
    if (path.includes('/contratos')) return { title: "Contratos", sub: "Administración de contratos" };
    if (path.includes('/faenas')) return { title: "Faenas", sub: "Proyectos activos" };
    if (path.includes('/mandantes')) return { title: "Mandantes", sub: "Empresas mandantes y grupos mineros" };
    if (path.includes('/personal')) return { title: "Personal", sub: "Trabajadores y credenciales" };
    if (path.includes('/equipos')) return { title: "Equipos", sub: "Vehículos y maquinaria" };
    if (path.includes('/cargos')) return { title: "Cargos", sub: "Catálogo de cargos operativos" };
    if (path.includes('/requisitos')) return { title: "Requisitos", sub: "Matriz documental" };
    if (path.includes('/plantillas')) return { title: "Plantillas", sub: "Plantillas de requisitos" };
    if (path.includes('/reportes')) return { title: "Reportes", sub: "Métricas y descargas" };
    if (path.includes('/alertas')) return { title: "Alertas", sub: "Notificaciones y vencimientos" };
    if (path.includes('/calendario')) return { title: "Calendario", sub: "Vista mensual" };
    if (path.includes('/integraciones')) return { title: "Integraciones", sub: "Conexiones externas" };
    if (path.includes('/config')) return { title: "Configuración", sub: "Ajustes de cuenta" };
    return { title: "Inicio", sub: "Resumen de la plataforma" };
  };
  
  const { title, sub } = getTitulo();
  const user = typeof window !== "undefined" ? Api.currentUser() : null;
  const name = user?.nombre ?? "Usuario";
  const initial = name.charAt(0).toUpperCase();

  return (
    <header className="apphead">
      <button className="mob-menu-btn" onClick={onToggleMenu}>☰</button>
      <div className="hleft">
        <h1 className="pagetitle">{title}</h1>
        <p className="pagesub">{sub}</p>
      </div>
      <div className="hright">
        <button className="hico-btn" onClick={() => alert('Centro de ayuda — próximamente')}>?</button>
        <button className="bell" onClick={() => router.push('/alertas')}>🔔<span className="bdot"></span></button>
        <div className="uchip">
          <div className="uav">{initial}</div>
          <div className="uinfo">
            <b>{name}</b>
            <small>{user?.email ?? ""}</small>
          </div>
          <span className="chev">⌄</span>
        </div>
      </div>
    </header>
  );
}
