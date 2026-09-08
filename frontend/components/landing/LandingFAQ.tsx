"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingFAQ() {
  const router = useRouter();
  return (
    <>
      {/* FAQ */}
      <section
        className="hs-sect-pad"
        style={{ background: "#fff", padding: "80px 6%" } as any}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" } as any}>
          <div style={{ textAlign: "center", marginBottom: 52 } as any}>
            <span data-i18n="faq.label" className="sec-label">
              PREGUNTAS FRECUENTES
            </span>
            <h2
              data-i18n="faq.h2"
              style={
                {
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "var(--azul)",
                  margin: "12px 0",
                } as any
              }
            >
              Todo lo que necesitas saber sobre ACREDIT
              <span style={{ color: "#1D4ED8" } as any}>TIA</span>
            </h2>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 0 } as any}
          >
            <details
              style={
                { borderBottom: "1px solid var(--linea)", padding: 0 } as any
              }
              open
            >
              <summary
                data-i18n="faq.q1"
                style={
                  {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 4px",
                    cursor: "pointer",
                    listStyle: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--azul)",
                  } as any
                }
              >
                ¿Para qué tipo de empresa es ACREDITTIA?
                <span
                  style={
                    {
                      fontSize: "1.4rem",
                      color: "var(--cyan)",
                      flexShrink: 0,
                      marginLeft: 12,
                    } as any
                  }
                >
                  +
                </span>
              </summary>
              <p
                data-i18n="faq.a1"
                style={
                  {
                    color: "var(--gris)",
                    fontSize: ".92rem",
                    lineHeight: "1.7",
                    padding: "0 4px 22px",
                    margin: 0,
                  } as any
                }
              >
                ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span> está
                diseñado para empresas proveedoras que trabajan en una o más
                faenas mineras y que necesitan gestionar acreditaciones de forma
                continua. Es especialmente útil para empresas con un
                departamento de acreditación propio que maneja múltiples
                contratos activos al mismo tiempo — y que busca centralizar,
                automatizar y reducir la carga de trabajo con IA.
              </p>
            </details>
            <details
              style={
                { borderBottom: "1px solid var(--linea)", padding: 0 } as any
              }
            >
              <summary
                data-i18n="faq.q2"
                style={
                  {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 4px",
                    cursor: "pointer",
                    listStyle: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--azul)",
                  } as any
                }
              >
                ¿Cómo se integra ACREDITTIA a las plataformas de cada faena?
                <span
                  style={
                    {
                      fontSize: "1.4rem",
                      color: "var(--cyan)",
                      flexShrink: 0,
                      marginLeft: 12,
                    } as any
                  }
                >
                  +
                </span>
              </summary>
              <p
                data-i18n="faq.a2"
                style={
                  {
                    color: "var(--gris)",
                    fontSize: ".92rem",
                    lineHeight: "1.7",
                    padding: "0 4px 22px",
                    margin: 0,
                  } as any
                }
              >
                Nos conectamos directamente a las plataformas que usa cada
                mandante — SIGA, Workmate, Metacontratas, Webcontrol y otras.
                Gestionamos el proceso desde adentro: subimos documentos,
                respondemos observaciones y actualizamos estados. Tu equipo no
                necesita ingresar a cada sistema por separado — todo pasa por
                ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span>.
              </p>
            </details>
            <details
              style={
                { borderBottom: "1px solid var(--linea)", padding: 0 } as any
              }
            >
              <summary
                data-i18n="faq.q3"
                style={
                  {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 4px",
                    cursor: "pointer",
                    listStyle: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--azul)",
                  } as any
                }
              >
                ¿En cuánto reduce ACREDITTIA el equipo de acreditación?
                <span
                  style={
                    {
                      fontSize: "1.4rem",
                      color: "var(--cyan)",
                      flexShrink: 0,
                      marginLeft: 12,
                    } as any
                  }
                >
                  +
                </span>
              </summary>
              <p
                data-i18n="faq.a3"
                style={
                  {
                    color: "var(--gris)",
                    fontSize: ".92rem",
                    lineHeight: "1.7",
                    padding: "0 4px 22px",
                    margin: 0,
                  } as any
                }
              >
                Las empresas que usan ACREDIT
                <span style={{ color: "#1D4ED8" } as any}>TIA</span> reducen
                hasta un 80% las horas-hombre dedicadas a acreditación. La IA
                hace la revisión documental, detecta errores, gestiona
                plataformas y monitorea vencimientos de forma autónoma. Lo que
                antes requería 3 o 4 personas trabajando en paralelo, ahora lo
                maneja la plataforma — y tu equipo solo valida y toma
                decisiones.
              </p>
            </details>
            <details
              style={
                { borderBottom: "1px solid var(--linea)", padding: 0 } as any
              }
            >
              <summary
                data-i18n="faq.q4"
                style={
                  {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 4px",
                    cursor: "pointer",
                    listStyle: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--azul)",
                  } as any
                }
              >
                ¿Puedo gestionar varias faenas al mismo tiempo?
                <span
                  style={
                    {
                      fontSize: "1.4rem",
                      color: "var(--cyan)",
                      flexShrink: 0,
                      marginLeft: 12,
                    } as any
                  }
                >
                  +
                </span>
              </summary>
              <p
                data-i18n="faq.a4"
                style={
                  {
                    color: "var(--gris)",
                    fontSize: ".92rem",
                    lineHeight: "1.7",
                    padding: "0 4px 22px",
                    margin: 0,
                  } as any
                }
              >
                Sí — y eso es exactamente para lo que está hecho. Puedes tener
                contratos activos en Los Pelambres, Candelaria y El Teniente al
                mismo tiempo, cada uno con su propia carpeta de personal,
                equipos y documentos. El panel central te da visibilidad de
                todos desde un solo lugar: qué está vigente, qué está por vencer
                y qué necesita acción.
              </p>
            </details>
            <details
              style={
                { borderBottom: "1px solid var(--linea)", padding: 0 } as any
              }
            >
              <summary
                data-i18n="faq.q5"
                style={
                  {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 4px",
                    cursor: "pointer",
                    listStyle: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--azul)",
                  } as any
                }
              >
                ¿Qué pasa con los vencimientos una vez que ya estoy acreditado?
                <span
                  style={
                    {
                      fontSize: "1.4rem",
                      color: "var(--cyan)",
                      flexShrink: 0,
                      marginLeft: 12,
                    } as any
                  }
                >
                  +
                </span>
              </summary>
              <p
                data-i18n="faq.a5"
                style={
                  {
                    color: "var(--gris)",
                    fontSize: ".92rem",
                    lineHeight: "1.7",
                    padding: "0 4px 22px",
                    margin: 0,
                  } as any
                }
              >
                ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span>{" "}
                monitorea 24/7 la vigencia de cada acreditación activa — persona
                por persona, equipo por equipo, faena por faena. Te alerta con
                anticipación cuando algo está por vencer y gestiona la
                renovación directamente en la plataforma del mandante. No es un
                servicio puntual: es la herramienta con la que tu departamento
                opera permanentemente.
              </p>
            </details>
            <details
              style={
                { borderBottom: "1px solid var(--linea)", padding: 0 } as any
              }
            >
              <summary
                data-i18n="faq.q6"
                style={
                  {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 4px",
                    cursor: "pointer",
                    listStyle: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--azul)",
                  } as any
                }
              >
                ¿Sirve para cualquier mandante o solo algunos?
                <span
                  style={
                    {
                      fontSize: "1.4rem",
                      color: "var(--cyan)",
                      flexShrink: 0,
                      marginLeft: 12,
                    } as any
                  }
                >
                  +
                </span>
              </summary>
              <p
                data-i18n="faq.a6"
                style={
                  {
                    color: "var(--gris)",
                    fontSize: ".92rem",
                    lineHeight: "1.7",
                    padding: "0 4px 22px",
                    margin: 0,
                  } as any
                }
              >
                Actualmente estamos integrados a faenas de AMSA (Los Pelambres,
                Centinela, Zaldívar, Antucoya), Lundin Mining (Candelaria,
                Caserones) y Codelco (Andina, El Teniente), con más faenas
                incorporándose continuamente. Cada integración incluye los
                estándares, plataformas y requisitos específicos de ese mandante
                — cargados y actualizados directamente desde sus documentos
                oficiales.
              </p>
            </details>
            <details style={{ padding: 0 } as any}>
              <summary
                data-i18n="faq.q7"
                style={
                  {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 4px",
                    cursor: "pointer",
                    listStyle: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--azul)",
                  } as any
                }
              >
                ¿Cuánto cuesta y cómo funciona el precio?
                <span
                  style={
                    {
                      fontSize: "1.4rem",
                      color: "var(--cyan)",
                      flexShrink: 0,
                      marginLeft: 12,
                    } as any
                  }
                >
                  +
                </span>
              </summary>
              <p
                data-i18n="faq.a7"
                style={
                  {
                    color: "var(--gris)",
                    fontSize: ".92rem",
                    lineHeight: "1.7",
                    padding: "0 4px 22px",
                    margin: 0,
                  } as any
                }
              >
                ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span>{" "}
                funciona con suscripción mensual fija. Gestiona todos los
                contratos, faenas, personas y equipos que necesites, sin cobro
                extra por proceso. A diferencia de las empresas acreditadoras
                que cobran por cada acreditación y luego desaparecen, nosotros
                somos la plataforma donde tu equipo opera todos los días — con
                seguimiento continuo, alertas automáticas y soporte permanente.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
