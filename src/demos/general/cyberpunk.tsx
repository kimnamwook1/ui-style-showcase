"use client";

import { useState, useEffect, useCallback } from "react";

export default function CyberpunkDemo() {
  const [glitch, setGlitch] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  const [activePanel, setActivePanel] = useState(0);

  const triggerGlitch = useCallback(() => {
    setGlitch(true);
    setTimeout(() => setGlitch(false), 200);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const neonMagenta = "#ff00ff";
  const neonCyan = "#00ffff";

  return (
    <div
      className="min-h-[400px] relative overflow-hidden font-mono"
      style={{ background: "#0a0a0f" }}
    >
      {/* Scan line effect */}
      <div
        className="absolute inset-x-0 h-px z-20 pointer-events-none opacity-30"
        style={{
          top: `${scanLine}%`,
          background: `linear-gradient(90deg, transparent, ${neonCyan}50, transparent)`,
        }}
      />

      {/* Diagonal accent lines */}
      <div
        className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${neonMagenta}, ${neonMagenta} 1px, transparent 1px, transparent 20px)`,
        }}
      />

      <div className="relative z-10 p-6 flex flex-col gap-4 h-full">
        {/* Header with glitch */}
        <div className="flex items-center justify-between">
          <div className="relative">
            <h1
              className="text-4xl font-bold uppercase tracking-wider"
              style={{
                color: neonMagenta,
                textShadow: glitch
                  ? `3px 0 ${neonCyan}, -3px 0 ${neonMagenta}, 0 3px ${neonCyan}`
                  : `0 0 10px ${neonMagenta}80`,
              }}
            >
              Cyberpunk
            </h1>
            {glitch && (
              <h1
                className="text-4xl font-bold uppercase tracking-wider absolute top-0 left-0"
                style={{
                  color: neonCyan,
                  clipPath: "polygon(0 30%, 100% 30%, 100% 60%, 0 60%)",
                  transform: "translateX(4px)",
                }}
              >
                Cyberpunk
              </h1>
            )}
          </div>
          <button
            onClick={triggerGlitch}
            className="px-4 py-2 text-xs uppercase tracking-wider font-bold"
            style={{
              border: `1px solid ${neonCyan}`,
              color: neonCyan,
              background: "transparent",
              clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
              textShadow: `0 0 10px ${neonCyan}`,
            }}
          >
            ⟁ Glitch
          </button>
        </div>

        {/* Panel tabs */}
        <div className="flex gap-px">
          {["SYSTEM", "NEURAL", "COMBAT", "CYBERWARE"].map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActivePanel(i)}
              className="flex-1 py-2 text-[10px] uppercase tracking-wider font-bold transition-all"
              style={{
                background: activePanel === i ? `${neonMagenta}20` : "rgba(255,255,255,0.02)",
                color: activePanel === i ? neonMagenta : "#555",
                borderBottom: activePanel === i ? `2px solid ${neonMagenta}` : "2px solid #222",
                clipPath: i === 0
                  ? "polygon(0 0, calc(100% - 6px) 0, 100% 100%, 0 100%)"
                  : i === 3
                    ? "polygon(6px 0, 100% 0, 100% 100%, 0 100%)"
                    : undefined,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex gap-4 flex-1">
          {/* Left panel */}
          <div
            className="flex-1 p-5 flex flex-col gap-4"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${neonMagenta}30`,
              clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
            }}
          >
            {/* Stats bars */}
            <p className="text-[10px] uppercase tracking-wider" style={{ color: neonCyan }}>
              ◈ System Status
            </p>
            {[
              { label: "CPU", pct: 78, color: neonMagenta },
              { label: "RAM", pct: 62, color: neonCyan },
              { label: "NET", pct: 91, color: "#ff6b35" },
              { label: "GPU", pct: 45, color: "#39ff14" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-[10px] w-8 font-bold" style={{ color: stat.color }}>{stat.label}</span>
                <div className="flex-1 h-3 bg-gray-900 relative overflow-hidden">
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${stat.pct}%`,
                      background: `linear-gradient(90deg, ${stat.color}80, ${stat.color})`,
                      boxShadow: `0 0 10px ${stat.color}40`,
                    }}
                  />
                  {/* Segment lines */}
                  {[20, 40, 60, 80].map((p) => (
                    <div
                      key={p}
                      className="absolute top-0 bottom-0 w-px"
                      style={{ left: `${p}%`, background: "rgba(0,0,0,0.5)" }}
                    />
                  ))}
                </div>
                <span className="text-[10px] w-8 text-right" style={{ color: stat.color }}>
                  {stat.pct}%
                </span>
              </div>
            ))}

            {/* Alert box */}
            <div
              className="p-3 mt-auto"
              style={{
                background: `${neonMagenta}08`,
                borderLeft: `2px solid ${neonMagenta}`,
              }}
            >
              <p className="text-[10px] uppercase tracking-wider" style={{ color: neonMagenta }}>
                ⚠ WARNING: Neural link unstable
              </p>
              <p className="text-[10px] mt-1" style={{ color: "#666" }}>
                Cyberpsychosis risk: moderate. Recommend maintenance cycle.
              </p>
            </div>
          </div>

          {/* Right panel */}
          <div className="w-64 flex flex-col gap-3">
            {/* Terminal-like input */}
            <div
              className="p-4"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: `1px solid ${neonCyan}30`,
              }}
            >
              <p className="text-[10px] mb-2" style={{ color: neonCyan }}>
                {">"} TERMINAL v4.2.1
              </p>
              <input
                type="text"
                placeholder="Enter command..."
                className="w-full bg-transparent text-xs outline-none"
                style={{
                  color: neonCyan,
                  borderBottom: `1px solid ${neonCyan}30`,
                  paddingBottom: "4px",
                  caretColor: neonCyan,
                }}
              />
            </div>

            {/* Quick actions */}
            <div className="flex flex-col gap-2 flex-1">
              {[
                { icon: "⟐", label: "Jack In", color: neonCyan },
                { icon: "⟁", label: "Breach Protocol", color: neonMagenta },
                { icon: "◈", label: "Scan Area", color: "#39ff14" },
                { icon: "⟟", label: "Quick Hack", color: "#ff6b35" },
              ].map((action) => (
                <button
                  key={action.label}
                  className="flex items-center gap-3 px-4 py-2.5 text-left transition-all text-xs"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${action.color}20`,
                    color: action.color,
                    clipPath: "polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)",
                  }}
                >
                  <span>{action.icon}</span>
                  <span className="uppercase tracking-wider">{action.label}</span>
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={triggerGlitch}
              className="py-3 text-xs uppercase tracking-widest font-bold"
              style={{
                background: `linear-gradient(90deg, ${neonMagenta}, ${neonCyan})`,
                color: "#000",
                clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
              }}
            >
              Initialize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
