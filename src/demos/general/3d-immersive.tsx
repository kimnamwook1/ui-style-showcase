"use client";

import { useState } from "react";

export default function ThreeDImmersiveDemo() {
  const [rotateX, setRotateX] = useState(-15);
  const [rotateY, setRotateY] = useState(25);

  return (
    <div
      className="min-h-[400px] flex flex-col items-center justify-center gap-6 p-8 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0c0c1d, #1a1a3e, #0c0c1d)", perspective: "1000px" }}
    >
      <h2
        className="text-xl font-bold tracking-wider uppercase"
        style={{ color: "#a78bfa", textShadow: "0 0 20px #a78bfa40" }}
      >
        3D Immersive
      </h2>

      {/* 3D rotating cube */}
      <div
        className="relative transition-transform duration-300"
        style={{
          width: 160,
          height: 160,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {[
          { transform: "translateZ(80px)", bg: "rgba(167,139,250,0.3)", border: "#a78bfa" },
          { transform: "rotateY(180deg) translateZ(80px)", bg: "rgba(139,92,246,0.3)", border: "#8b5cf6" },
          { transform: "rotateY(90deg) translateZ(80px)", bg: "rgba(196,181,253,0.3)", border: "#c4b5fd" },
          { transform: "rotateY(-90deg) translateZ(80px)", bg: "rgba(109,40,217,0.3)", border: "#6d28d9" },
          { transform: "rotateX(90deg) translateZ(80px)", bg: "rgba(124,58,237,0.3)", border: "#7c3aed" },
          { transform: "rotateX(-90deg) translateZ(80px)", bg: "rgba(139,92,246,0.2)", border: "#8b5cf680" },
        ].map((face, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-lg"
            style={{
              transform: face.transform,
              background: face.bg,
              border: `1px solid ${face.border}`,
              backdropFilter: "blur(4px)",
              boxShadow: `inset 0 0 30px ${face.border}20`,
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-1">
          <label className="text-[10px] uppercase tracking-wider" style={{ color: "#a78bfa" }}>Rotate X</label>
          <input
            type="range"
            min="-90"
            max="90"
            value={rotateX}
            onChange={(e) => setRotateX(Number(e.target.value))}
            className="w-32 accent-purple-500"
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <label className="text-[10px] uppercase tracking-wider" style={{ color: "#a78bfa" }}>Rotate Y</label>
          <input
            type="range"
            min="-180"
            max="180"
            value={rotateY}
            onChange={(e) => setRotateY(Number(e.target.value))}
            className="w-32 accent-purple-500"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex gap-4">
        {["WebGL", "Three.js", "Interactive"].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs"
            style={{ border: "1px solid #a78bfa40", color: "#a78bfa" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
