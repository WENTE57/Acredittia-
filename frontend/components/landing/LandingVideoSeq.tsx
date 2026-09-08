"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LandingVideoSeq() {
  const router = useRouter();
  return (
    <>
      {/* VIDEO SEQUENCE FULL WIDTH (plays one video, then the other, on loop) */}
      <section
        style={{ background: "#000", overflow: "hidden", lineHeight: 0 } as any}
      >
        <video
          id="vidSeq1"
          autoPlay
          muted
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
          <source src="/crealo_ahora.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}
