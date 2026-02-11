"use client";

import { useState } from "react";

export default function AsymmetricLayoutDemo() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="min-h-[400px] relative overflow-hidden"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      {/* Large background accent circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          top: "-200px",
          right: "-150px",
          background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Asymmetric grid */}
      <div className="relative z-10 p-8">
        {/* Header - intentionally off-center */}
        <div className="ml-[15%] mb-8">
          <span className="text-xs uppercase tracking-[0.4em] text-orange-400">
            Creative Studio
          </span>
          <h1
            className="text-5xl font-black leading-none mt-2"
            style={{ color: "#fff", maxWidth: "300px" }}
          >
            Break
            <br />
            The Grid
          </h1>
        </div>

        {/* Overlapping card cluster */}
        <div className="relative h-[280px]">
          {/* Card 1 - Large, left aligned */}
          <div
            className="absolute top-0 left-0 w-64 p-6 cursor-pointer transition-all duration-500"
            style={{
              backgroundColor: hoveredCard === 0 ? "#ff6b35" : "#1a1a1a",
              transform: `rotate(-2deg) ${hoveredCard === 0 ? "scale(1.03) translateY(-4px)" : ""}`,
              zIndex: hoveredCard === 0 ? 20 : 10,
            }}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <span className="text-xs uppercase tracking-wider" style={{ color: hoveredCard === 0 ? "#fff" : "#ff6b35" }}>
              01 / Project
            </span>
            <h2 className="text-xl font-bold text-white mt-2">Asymmetric Thinking</h2>
            <p className="text-sm mt-2" style={{ color: hoveredCard === 0 ? "rgba(255,255,255,0.8)" : "#666" }}>
              Balance is overrated. Tension creates visual interest and guides the eye naturally.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 text-xs border" style={{ borderColor: hoveredCard === 0 ? "#fff" : "#333", color: hoveredCard === 0 ? "#fff" : "#888" }}>
                Design
              </span>
              <span className="px-2 py-1 text-xs border" style={{ borderColor: hoveredCard === 0 ? "#fff" : "#333", color: hoveredCard === 0 ? "#fff" : "#888" }}>
                Layout
              </span>
            </div>
          </div>

          {/* Card 2 - Smaller, overlapping */}
          <div
            className="absolute top-8 left-52 w-48 p-5 cursor-pointer transition-all duration-500"
            style={{
              backgroundColor: hoveredCard === 1 ? "#2dd4bf" : "#111",
              transform: `rotate(3deg) ${hoveredCard === 1 ? "scale(1.05) translateY(-4px)" : ""}`,
              zIndex: hoveredCard === 1 ? 20 : 15,
              border: "1px solid #222",
            }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className="w-full h-20 mb-3"
              style={{
                background: hoveredCard === 1
                  ? "linear-gradient(135deg, #0d9488, #2dd4bf)"
                  : "linear-gradient(135deg, #1a1a2e, #2d3561)",
              }}
            />
            <span className="text-xs font-bold" style={{ color: hoveredCard === 1 ? "#0d0d0d" : "#2dd4bf" }}>
              Offset Harmony
            </span>
          </div>

          {/* Card 3 - Far right, dropped down */}
          <div
            className="absolute top-20 right-4 w-52 p-5 cursor-pointer transition-all duration-500"
            style={{
              backgroundColor: hoveredCard === 2 ? "#a855f7" : "#0d0d0d",
              border: "1px solid #222",
              transform: `rotate(-1deg) ${hoveredCard === 2 ? "scale(1.03) translateY(-4px)" : ""}`,
              zIndex: hoveredCard === 2 ? 20 : 10,
            }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full" style={{ backgroundColor: hoveredCard === 2 ? "#fff" : "#a855f7", opacity: 0.8 }} />
              <div>
                <p className="text-xs font-bold text-white">Visual Tension</p>
                <p className="text-xs" style={{ color: hoveredCard === 2 ? "rgba(255,255,255,0.7)" : "#555" }}>
                  Dynamic space
                </p>
              </div>
            </div>
            <div className="w-full h-px mb-3" style={{ backgroundColor: "#333" }} />
            <p className="text-xs" style={{ color: hoveredCard === 2 ? "rgba(255,255,255,0.8)" : "#555" }}>
              Let elements breathe in unexpected places.
            </p>
          </div>

          {/* Floating accent element */}
          <div
            className="absolute bottom-4 left-[40%] cursor-pointer transition-all duration-300"
            onClick={() => setExpanded(!expanded)}
            style={{
              width: expanded ? "180px" : "48px",
              height: "48px",
              backgroundColor: "#ff6b35",
              display: "flex",
              alignItems: "center",
              justifyContent: expanded ? "flex-start" : "center",
              paddingLeft: expanded ? "16px" : "0",
              gap: "8px",
              overflow: "hidden",
              transform: "rotate(6deg)",
            }}
          >
            <span className="text-white text-lg font-bold flex-shrink-0">+</span>
            {expanded && (
              <span className="text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                Add Element
              </span>
            )}
          </div>
        </div>

        {/* Bottom stats - asymmetrically placed */}
        <div className="flex items-end gap-8 mt-4 ml-[10%]">
          <div>
            <p className="text-3xl font-black text-white">147</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Compositions</p>
          </div>
          <div className="pb-1">
            <p className="text-lg font-bold" style={{ color: "#ff6b35" }}>
              23\u00b0
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Max Tilt</p>
          </div>
          <div className="ml-auto mr-[20%] pb-1">
            <p className="text-lg font-bold" style={{ color: "#2dd4bf" }}>\u221e</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Possibilities</p>
          </div>
        </div>
      </div>
    </div>
  );
}
