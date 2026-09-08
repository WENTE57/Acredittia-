"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingDiferenciador() {
  const router = useRouter();
  return (
    <>
      {/* DIFERENCIADOR PRINCIPAL */}
      <section
        style={
          {
            background:
              "linear-gradient(135deg,#080E1C 0%,#0F172A 60%,#162240 100%)",
            padding: "72px 6%",
            position: "relative",
            overflow: "hidden",
          } as any
        }
      >
        <img
          src="/candelaria.jpg"
          alt=""
          style={
            {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: ".2",
            } as any
          }
          onError={() => {}}
        />
        <div
          style={
            {
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg,rgba(8,14,28,.94) 0%,rgba(15,23,42,.9) 55%,rgba(22,34,64,.94) 100%)",
            } as any
          }
        />
        <div
          style={
            {
              maxWidth: 960,
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            } as any
          }
        >
          <span
            data-i18n="dp.label"
            style={
              {
                fontSize: ".7rem",
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#06B6D4",
                display: "block",
                marginBottom: 16,
              } as any
            }
          >
            LO QUE NOS DIFERENCIA
          </span>
          <h2
            data-i18n="dp.h2"
            style={
              {
                fontSize: "2.4rem",
                fontWeight: 900,
                color: "#F1F5F9",
                lineHeight: "1.1",
                marginBottom: 20,
              } as any
            }
          >
            No somos una IA que lee un manual.
            <br />
            <span style={{ color: "#06B6D4" } as any}>
              Integramos la faena al 100%.
            </span>
          </h2>
          <p
            data-i18n="dp.p"
            style={
              {
                color: "#94A3B8",
                fontSize: "1.05rem",
                lineHeight: "1.7",
                maxWidth: 720,
                margin: "0 auto 48px",
              } as any
            }
          >
            Trabajamos con profesionales del área para entender el flujo
            completo de cada faena: las plataformas, los procesos internos, los
            formularios, los formatos de documentos, los correos y contactos del
            mandante. Eso es lo que le da a nuestra IA el contexto real — y por
            eso puedes acreditar de verdad, no solo subir archivos a un sistema.
          </p>
          <div
            style={
              {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                gap: 20,
                textAlign: "left",
              } as any
            }
          >
            <div
              style={
                {
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 16,
                  padding: "22px 24px",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    color: "rgba(6,182,212,.4)",
                    marginBottom: 10,
                    fontFamily: "var(--display)",
                  } as any
                }
              >
                01
              </div>
              <h4
                data-i18n="dp.t1"
                style={
                  {
                    color: "#F1F5F9",
                    fontSize: ".95rem",
                    fontWeight: 700,
                    margin: "0 0 8px",
                  } as any
                }
              >
                Procesos completos
              </h4>
              <p
                data-i18n="dp.d1"
                style={
                  {
                    color: "#64748B",
                    fontSize: ".82rem",
                    lineHeight: "1.6",
                    margin: 0,
                  } as any
                }
              >
                Conocemos el flujo de principio a fin — cómo se inicia, quién
                aprueba, qué formulario va en qué etapa.
              </p>
            </div>
            <div
              style={
                {
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 16,
                  padding: "22px 24px",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    color: "rgba(6,182,212,.4)",
                    marginBottom: 10,
                    fontFamily: "var(--display)",
                  } as any
                }
              >
                02
              </div>
              <h4
                data-i18n="dp.t2"
                style={
                  {
                    color: "#F1F5F9",
                    fontSize: ".95rem",
                    fontWeight: 700,
                    margin: "0 0 8px",
                  } as any
                }
              >
                Formatos y formularios
              </h4>
              <p
                data-i18n="dp.d2"
                style={
                  {
                    color: "#64748B",
                    fontSize: ".82rem",
                    lineHeight: "1.6",
                    margin: 0,
                  } as any
                }
              >
                Sabemos exactamente qué formato acepta cada faena, qué campos
                son obligatorios y cómo deben venir los documentos.
              </p>
            </div>
            <div
              style={
                {
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 16,
                  padding: "22px 24px",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    color: "rgba(6,182,212,.4)",
                    marginBottom: 10,
                    fontFamily: "var(--display)",
                  } as any
                }
              >
                03
              </div>
              <h4
                data-i18n="dp.t3"
                style={
                  {
                    color: "#F1F5F9",
                    fontSize: ".95rem",
                    fontWeight: 700,
                    margin: "0 0 8px",
                  } as any
                }
              >
                Contactos y correos
              </h4>
              <p
                data-i18n="dp.d3"
                style={
                  {
                    color: "#64748B",
                    fontSize: ".82rem",
                    lineHeight: "1.6",
                    margin: 0,
                  } as any
                }
              >
                Tenemos los contactos reales del mandante para gestionar
                observaciones, correcciones y aprobaciones directamente.
              </p>
            </div>
            <div
              style={
                {
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 16,
                  padding: "22px 24px",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    color: "rgba(6,182,212,.4)",
                    marginBottom: 10,
                    fontFamily: "var(--display)",
                  } as any
                }
              >
                04
              </div>
              <h4
                data-i18n="dp.t4"
                style={
                  {
                    color: "#F1F5F9",
                    fontSize: ".95rem",
                    fontWeight: 700,
                    margin: "0 0 8px",
                  } as any
                }
              >
                IA con contexto real
              </h4>
              <p
                data-i18n="dp.d4"
                style={
                  {
                    color: "#64748B",
                    fontSize: ".82rem",
                    lineHeight: "1.6",
                    margin: 0,
                  } as any
                }
              >
                La IA no adivina — tiene el conocimiento de un especialista que
                trabajó dentro de la faena. Por eso es precisa, no genérica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
