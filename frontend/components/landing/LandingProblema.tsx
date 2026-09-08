"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingProblema() {
  const router = useRouter();
  return (
    <>
      {/* EL PROBLEMA */}
      <section
        style={
          {
            background:
              "linear-gradient(135deg,#080E1C 0%,#0F172A 60%,#162240 100%)",
            padding: "80px 6%",
            position: "relative",
            overflow: "hidden",
          } as any
        }
      >
        <img
          src="/los_pelambres.jpeg"
          alt=""
          style={
            {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: ".24",
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
            data-i18n="prob.label"
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
            EL PROBLEMA
          </span>
          <h2
            data-i18n="prob.h2"
            style={
              {
                fontSize: "2.4rem",
                fontWeight: 900,
                color: "#F1F5F9",
                lineHeight: "1.15",
                marginBottom: 20,
              } as any
            }
          >
            Atrapados entre el Excel y un equipo de 3 a 4 personas.
          </h2>
          <p
            data-i18n="prob.p"
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
            Cada faena exige un proceso de acreditación distinto, en una
            plataforma distinta, con requisitos que cambian sin aviso. Una
            empresa proveedora con varios contratos activos no tiene alternativa
            real: o arma un equipo interno que solo persigue papeles, o paga por
            proceso a una acreditadora tradicional que desaparece apenas termina
            el trámite.
          </p>
          <div
            style={
              {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                gap: 20,
                textAlign: "left",
                maxWidth: 920,
                margin: "0 auto",
              } as any
            }
          >
            <div
              style={
                {
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 16,
                  padding: "24px 22px",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    color: "#fff",
                    marginBottom: 8,
                  } as any
                }
              >
                240.000+
              </div>
              <p
                data-i18n="prob.s1"
                style={
                  {
                    color: "#64748B",
                    fontSize: ".82rem",
                    lineHeight: "1.6",
                    margin: 0,
                  } as any
                }
              >
                Trabajadores contratistas en faenas mineras chilenas — más de 3x
                la dotación propia de las mineras (SERNAGEOMIN)
              </p>
            </div>
            <div
              style={
                {
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 16,
                  padding: "24px 22px",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    color: "#fff",
                    marginBottom: 8,
                  } as any
                }
              >
                8.000+
              </div>
              <p
                data-i18n="prob.s2"
                style={
                  {
                    color: "#64748B",
                    fontSize: ".82rem",
                    lineHeight: "1.6",
                    margin: 0,
                  } as any
                }
              >
                Empresas proveedoras activas en la minería chilena que enfrentan
                este mismo problema (APRIMIN / Consejo Minero)
              </p>
            </div>
            <div
              style={
                {
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 16,
                  padding: "24px 22px",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    color: "#fff",
                    marginBottom: 8,
                  } as any
                }
              >
                3-4
              </div>
              <p
                data-i18n="prob.s3"
                style={
                  {
                    color: "#64748B",
                    fontSize: ".82rem",
                    lineHeight: "1.6",
                    margin: 0,
                  } as any
                }
              >
                Personas dedicadas solo a gestionar acreditación en una
                contratista con varios contratos activos
              </p>
            </div>
            <div
              style={
                {
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(139,170,255,.15)",
                  borderRadius: 16,
                  padding: "24px 22px",
                } as any
              }
            >
              <div
                style={
                  {
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    color: "#fff",
                    marginBottom: 8,
                  } as any
                }
              >
                CLP 1,2-1,8M
              </div>
              <p
                data-i18n="prob.s4"
                style={
                  {
                    color: "#64748B",
                    fontSize: ".82rem",
                    lineHeight: "1.6",
                    margin: 0,
                  } as any
                }
              >
                Cuesta cada encargado de acreditación al mes — sin garantía de
                que no se le escape un documento
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
