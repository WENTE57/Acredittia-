"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingVideoTrabajadores() {
  const router = useRouter();
  return (
    <>
      {/* VIDEO TRABAJADORES 2 FULL WIDTH */}
      <section
        style={{ background: "#000", overflow: "hidden", lineHeight: 0 } as any}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={
            {
              width: "100%",
              display: "block",
              maxHeight: 640,
              objectFit: "cover",
            } as any
          }
        >
          <source src="/trabajadores2.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}
