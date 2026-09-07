"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import { currentUser } from "@/lib/api";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [listo, setListo] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    if (!currentUser()) {
      router.replace("/login");
      return;
    }
    setListo(true);

    // Polyfill for prototype navigation functions
    (window as any).navTo = (screen: string) => {
      // mapping from prototype screen names to routes
      const map: Record<string, string> = {
        'dashboard': '/dashboard',
        'contratos': '/contratos',
        'proyectos': '/contratos',
        'mandantes': '/mandantes',
        'faenas': '/faenas',
        'personas': '/personal',
        'roster': '/personal',
        'equipos_global': '/equipos',
        'cargos': '/cargos',
        'alertas': '/alertas',
        'reportes': '/reportes',
        'requisitos': '/requisitos',
        'plantillas': '/plantillas',
        'calendario': '/calendario',
        'integraciones': '/integraciones',
        'config': '/config'
      };
      if (map[screen]) router.push(map[screen]);
    };
    (window as any).openProj = () => alert("Detalle de proyecto — próximamente");
    (window as any).openP = () => alert("Detalle de personal — próximamente");
    (window as any).openE = () => alert("Detalle de equipo — próximamente");
  }, [router]);

  if (!listo) return null;
  return (
    <div id="app">
      <Sidebar isOpen={menuAbierto} onClose={() => setMenuAbierto(false)} />
      <main className="main">
        <AppHeader onToggleMenu={() => setMenuAbierto(!menuAbierto)} />
        <div className="content" id="view">
          {children}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
