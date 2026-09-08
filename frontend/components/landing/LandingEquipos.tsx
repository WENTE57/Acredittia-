"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingEquipos() {
  const router = useRouter();
  return (
    <>
      {/* TIPOS EQUIPOS EN CIRCULOS (RendaloMaq style) */}
      <section className="tipos-section">
        <div className="ts-head">
          <span data-i18n="tip.label" className="sec-label">
            EQUIPOS QUE ACREDITO
          </span>
          <h2 data-i18n="tip.h2">Desde alzahombres hasta tracto-camiones.</h2>
          <p data-i18n="tip.p">
            Conozco los requisitos de acreditación de cada tipo de vehículo y
            maquinaria.
          </p>
        </div>
        <div className="tipos-grid">
          <div data-i18n="tip.c1" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_tractocamion.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Tracto-Camión</span>
          </div>
          <div data-i18n="tip.c2" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_camion.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Camión</span>
          </div>
          <div data-i18n="tip.c3" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_camionpluma.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Camión Pluma</span>
          </div>
          <div data-i18n="tip.c4" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_aljibe.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Camión Aljibe</span>
          </div>
          <div data-i18n="tip.c5" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_camabaja.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Cama Baja</span>
          </div>
          <div data-i18n="tip.c6" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_semirremolque.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Semirremolque</span>
          </div>
          <div data-i18n="tip.c7" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_camioneta.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Camioneta</span>
          </div>
          <div data-i18n="tip.c8" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_bus.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Bus</span>
          </div>
          <div data-i18n="tip.c9" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_minibus.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>MINIBUS</span>
          </div>
          <div data-i18n="tip.c10" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_alzahombre.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Alzahombre</span>
          </div>
          <div data-i18n="tip.c11" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_grua.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Grúa</span>
          </div>
          <div data-i18n="tip.c12" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_horquilla.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Grúa Horquilla</span>
          </div>
          <div data-i18n="tip.c13" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_retroexcavadora.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Retroexcavadora</span>
          </div>
          <div data-i18n="tip.c14" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_motoniveladora.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Motoniveladora</span>
          </div>
          <div data-i18n="tip.c15" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_automovil.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Automóvil</span>
          </div>
          <div data-i18n="tip.c16" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_otro.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Otro</span>
          </div>
          <div data-i18n="tip.c17" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_tractoragricola.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Tractor Agrícola</span>
          </div>
          <div data-i18n="tip.c18" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_cosechadora.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Cosechadora</span>
          </div>
          <div data-i18n="tip.c19" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_pulverizador.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Pulverizador</span>
          </div>
          <div data-i18n="tip.c20" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_camionjaula.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Camión Jaula (Ganado)</span>
          </div>
          <div data-i18n="tip.c21" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_embarcacion.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Embarcación / Lancha</span>
          </div>
          <div data-i18n="tip.c22" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_buceo.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Equipo de Buceo</span>
          </div>
          <div data-i18n="tip.c23" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_fotovoltaica.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Planta Fotovoltaica</span>
          </div>
          <div data-i18n="tip.c24" className="tipo-circle">
            <div className="tc">
              <img
                className="tc-photo"
                src="/tipo_aerogenerador.jpeg"
                alt=""
                onError={() => {}}
              />
            </div>
            <span>Aerogenerador</span>
          </div>
        </div>
        <div className="tipos-trust">
          <div>
            <span className="chk">✓</span>
            <span data-i18n="tip.chk1">Detección automática de requisitos</span>
          </div>
          <div>
            <span className="chk">✓</span>
            <span data-i18n="tip.chk2">Cobertura de cualquier faena</span>
          </div>
          <div>
            <span className="chk">✓</span>
            <span data-i18n="tip.chk3">Soporte especializado</span>
          </div>
          <div>
            <span className="chk">✓</span>
            <span data-i18n="tip.chk4">+40 tipos de equipo cubiertos</span>
          </div>
        </div>
        <div
          style={
            {
              textAlign: "center",
              marginTop: 32,
              display: "flex",
              justifyContent: "center",
            } as any
          }
        >
          <button
            data-i18n="tip.cta"
            className="btn btn-primary"
            style={{ padding: "14px 32px", fontSize: "1rem" } as any}
            onClick={() => router.push("/login")}
          >
            Ver todos los tipos de equipos →
          </button>
        </div>
      </section>
    </>
  );
}
