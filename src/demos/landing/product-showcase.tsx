"use client";

import { useState } from "react";

const features = [
  { label: "Ultra-fast rendering", icon: "lightning", position: "top-left" },
  { label: "Pixel-perfect design", icon: "grid", position: "top-right" },
  { label: "Responsive layout", icon: "screen", position: "bottom-left" },
  { label: "Dark mode ready", icon: "moon", position: "bottom-right" },
];

export default function ProductShowcase() {
  const [rotation, setRotation] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div
      className="min-h-[400px] relative overflow-hidden rounded-xl flex flex-col"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #141432 50%, #0a0a1a 100%)" }}
    >
      {/* Header */}
      <div className="text-center pt-6 pb-2 px-4 z-10">
        <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-violet-400 mb-1">
          Introducing
        </div>
        <h2 className="text-2xl font-bold text-white mb-1">ProDesign Studio</h2>
        <p className="text-sm text-gray-400 max-w-sm mx-auto">
          The next-generation design tool built for speed and precision
        </p>
      </div>

      {/* Central product area */}
      <div className="flex-1 relative flex items-center justify-center py-4">
        {/* Glow ring behind product */}
        <div
          className="absolute w-52 h-52 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(127,90,240,0.15) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        {/* Product shape */}
        <div
          className="relative w-40 h-40 cursor-pointer transition-transform duration-500"
          style={{ transform: `rotateY(${rotation}deg) rotateX(${rotation * 0.3}deg)` }}
          onClick={() => setRotation(rotation + 90)}
        >
          <div
            className="w-full h-full rounded-2xl shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #7f5af0 0%, #2ee59d 50%, #e94560 100%)",
              boxShadow: "0 20px 60px rgba(127,90,240,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          />
          {/* Inner detail */}
          <div
            className="absolute inset-4 rounded-xl"
            style={{
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="text-white text-center">
              <div className="text-2xl font-bold">PD</div>
              <div className="text-[9px] tracking-widest opacity-60 mt-1">STUDIO</div>
            </div>
          </div>

          {/* 360 hint */}
          <div
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] text-gray-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" />
              <path d="M22 12l-3-3m3 3l-3 3" />
            </svg>
            Click to rotate
          </div>
        </div>

        {/* Feature bullets */}
        {features.map((f, i) => {
          const positions: Record<string, React.CSSProperties> = {
            "top-left": { top: "10%", left: "6%" },
            "top-right": { top: "10%", right: "6%" },
            "bottom-left": { bottom: "18%", left: "6%" },
            "bottom-right": { bottom: "18%", right: "6%" },
          };
          return (
            <div
              key={i}
              className="absolute flex items-center gap-2 cursor-pointer transition-all duration-200"
              style={{
                ...positions[f.position],
                opacity: hoveredFeature === i ? 1 : 0.7,
                transform: hoveredFeature === i ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{
                  background: hoveredFeature === i ? "rgba(127,90,240,0.3)" : "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: hoveredFeature === i ? "#7f5af0" : "#888",
                }}
              >
                {f.icon === "lightning" && "⚡"}
                {f.icon === "grid" && "▦"}
                {f.icon === "screen" && "◻"}
                {f.icon === "moon" && "◑"}
              </div>
              <span
                className="text-xs font-medium"
                style={{ color: hoveredFeature === i ? "#fff" : "#888" }}
              >
                {f.label}
              </span>
            </div>
          );
        })}

        {/* Connector lines (decorative) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
          <line x1="25%" y1="25%" x2="40%" y2="40%" stroke="#7f5af0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="75%" y1="25%" x2="60%" y2="40%" stroke="#7f5af0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="25%" y1="70%" x2="40%" y2="60%" stroke="#7f5af0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="75%" y1="70%" x2="60%" y2="60%" stroke="#7f5af0" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* CTA */}
      <div className="text-center pb-6 px-4 z-10">
        <button
          className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #7f5af0, #2ee59d)",
            boxShadow: "0 4px 20px rgba(127,90,240,0.4)",
          }}
        >
          Get Started Free
        </button>
        <div className="mt-2 text-[11px] text-gray-500">No credit card required</div>
      </div>
    </div>
  );
}
