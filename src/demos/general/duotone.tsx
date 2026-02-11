"use client";

import { useState } from "react";

export default function DuotoneDemo() {
  const palettes = [
    { name: "Spotify", from: "#1DB954", to: "#191414" },
    { name: "Sunset", from: "#ff6b6b", to: "#2d1b69" },
    { name: "Ocean", from: "#00d2ff", to: "#0a1628" },
    { name: "Fire", from: "#f7971e", to: "#4a0e0e" },
  ];
  const [active, setActive] = useState(0);
  const p = palettes[active];

  return (
    <div className="min-h-[400px] p-8" style={{ background: p.to }}>
      <div className="mx-auto max-w-lg space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold" style={{ color: p.from }}>
            Duotone
          </h2>
          <span className="text-xs tracking-wider uppercase" style={{ color: `${p.from}80` }}>
            Two colors. Infinite impact.
          </span>
        </div>

        {/* Palette selector */}
        <div className="flex gap-2">
          {palettes.map((pal, i) => (
            <button
              key={pal.name}
              onClick={() => setActive(i)}
              className="flex-1 py-2 rounded-lg text-xs font-bold transition-all"
              style={{
                background: active === i ? pal.from : "transparent",
                color: active === i ? pal.to : `${pal.from}80`,
                border: `1px solid ${pal.from}40`,
              }}
            >
              {pal.name}
            </button>
          ))}
        </div>

        {/* Duotone image area */}
        <div
          className="aspect-video rounded-xl overflow-hidden relative"
          style={{ background: `linear-gradient(135deg, ${p.from}30, ${p.to})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(45deg, ${p.from}20, transparent 50%, ${p.from}10)`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-black" style={{ color: p.from, opacity: 0.8 }}>DUO</div>
              <div className="text-xs tracking-[0.3em] uppercase mt-2" style={{ color: `${p.from}60` }}>
                Color System
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Plays", value: "2.4M" },
            { label: "Likes", value: "182K" },
            { label: "Shares", value: "45K" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg p-3 text-center"
              style={{ background: `${p.from}10`, border: `1px solid ${p.from}20` }}
            >
              <p className="text-lg font-bold" style={{ color: p.from }}>{stat.value}</p>
              <p className="text-xs" style={{ color: `${p.from}60` }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
