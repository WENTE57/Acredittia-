"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingVideoPitch() {
  const router = useRouter();
  const [playing, setPlaying] = React.useState(false);
  return (
    <>
      {/* VIDEO PITCH YOUTUBE */}
      <section
        style={
          {
            background: "linear-gradient(135deg,#080E1C 0%,#0F172A 100%)",
            padding: "80px 6%",
          } as any
        }
      >
        <div
          style={
            { maxWidth: 900, margin: "0 auto", textAlign: "center" } as any
          }
        >
          <span
            data-i18n="ytvid.label"
            style={
              {
                fontSize: ".7rem",
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#06B6D4",
                display: "block",
                marginBottom: 14,
              } as any
            }
          >
            VIDEO DEMO DE LA PLATAFORMA
          </span>
          <h2
            data-i18n="ytvid.h2"
            style={
              {
                fontSize: "2rem",
                fontWeight: 900,
                color: "#F1F5F9",
                marginBottom: 12,
              } as any
            }
          >
            Conoce ACREDIT<span style={{ color: "#1D4ED8" } as any}>TIA</span>{" "}
            en 2 minutos
          </h2>
          <p
            data-i18n="ytvid.p"
            style={
              {
                color: "#64748B",
                fontSize: ".95rem",
                margin: "0 auto 36px",
                maxWidth: 520,
              } as any
            }
          >
            Cómo integramos cada faena al 100% y por qué las empresas
            proveedoras con múltiples contratos eligen nuestra plataforma.
          </p>
          <div
            id="ytPitchWrap"
            onClick={() => setPlaying(true)}
            style={
              {
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: 16,
                boxShadow: "0 24px 64px rgba(0,0,0,.5)",
                cursor: "pointer",
                background: "#000",
              } as any
            }
          >
            {playing ? (
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Acredittia Pitch Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            ) : (
              <>
                <img
                  src="/maxresdefault.jpg"
                  alt="ACREDITTIA — Video Pitch"
                  style={
                    {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    } as any
                  }
                  onError={() => {}}
                />
                <div
                  style={
                    {
                      position: "absolute",
                      inset: 0,
                      background: "rgba(8,14,28,.28)",
                    } as any
                  }
                />
                <div
                  style={
                    {
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    } as any
                  }
                >
                  <div
                    className="yt-play-btn"
                    style={
                      {
                        width: 84,
                        height: 84,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,.96)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 30px rgba(0,0,0,.45)",
                        transition: "transform .2s",
                      } as any
                    }
                  >
                    <svg
                      width={28}
                      height={32}
                      viewBox="0 0 28 32"
                      style={{ marginLeft: 4 } as any}
                    >
                      <path d="M0 0 L28 16 L0 32 Z" fill="#3D62F5" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: ".yt-play-btn:hover{transform:scale(1.08)}",
        }}
      />
    </>
  );
}
