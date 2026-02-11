"use client";

import { useState } from "react";

export default function NeonGlowDemo() {
  const [activeNeon, setActiveNeon] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [powerOn, setPowerOn] = useState(true);

  const neonColors = [
    { name: "Cyan", color: "#00fff5", shadow: "0 0 10px #00fff5, 0 0 40px #00fff5, 0 0 80px #00fff540" },
    { name: "Pink", color: "#ff00ff", shadow: "0 0 10px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff40" },
    { name: "Green", color: "#39ff14", shadow: "0 0 10px #39ff14, 0 0 40px #39ff14, 0 0 80px #39ff1440" },
    { name: "Orange", color: "#ff6600", shadow: "0 0 10px #ff6600, 0 0 40px #ff6600, 0 0 80px #ff660040" },
  ];

  const active = neonColors[activeNeon];
  const glowOpacity = powerOn ? 1 : 0.2;

  return (
    <div
      className="min-h-[400px] p-8 flex flex-col gap-6 font-sans"
      style={{ background: "linear-gradient(180deg, #0a0a0a, #1a0a2e)" }}
    >
      {/* Neon title */}
      <div className="flex items-center justify-between">
        <h1
          className="text-4xl font-bold tracking-wider uppercase transition-all duration-500"
          style={{
            color: active.color,
            textShadow: powerOn ? active.shadow : "none",
            opacity: glowOpacity,
          }}
        >
          Neon Glow
        </h1>
        <button
          onClick={() => setPowerOn(!powerOn)}
          className="px-4 py-2 text-sm uppercase tracking-wider font-bold rounded transition-all"
          style={{
            color: powerOn ? active.color : "#555",
            border: `1px solid ${powerOn ? active.color : "#333"}`,
            boxShadow: powerOn ? `0 0 10px ${active.color}40` : "none",
            background: "transparent",
          }}
        >
          {powerOn ? "⚡ ON" : "○ OFF"}
        </button>
      </div>

      {/* Color switcher */}
      <div className="flex gap-3">
        {neonColors.map((neon, i) => (
          <button
            key={neon.name}
            onClick={() => setActiveNeon(i)}
            className="px-4 py-2 text-xs uppercase tracking-widest font-bold rounded transition-all"
            style={{
              color: activeNeon === i ? "#000" : neon.color,
              backgroundColor: activeNeon === i ? neon.color : "transparent",
              border: `1px solid ${neon.color}`,
              boxShadow: activeNeon === i ? neon.shadow : "none",
              opacity: powerOn ? 1 : 0.3,
            }}
          >
            {neon.name}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="flex gap-6 flex-1">
        {/* Neon card */}
        <div
          className="flex-1 rounded-xl p-6 flex flex-col gap-4 transition-all duration-500"
          style={{
            border: `1px solid ${powerOn ? active.color + "60" : "#333"}`,
            boxShadow: powerOn ? `inset 0 0 30px ${active.color}10, 0 0 20px ${active.color}15` : "none",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <p className="text-xs uppercase tracking-widest" style={{ color: active.color, opacity: glowOpacity }}>
            Dashboard
          </p>

          {/* Neon bar chart */}
          <div className="flex items-end gap-3 h-32">
            {[60, 80, 45, 90, 70, 55, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t transition-all duration-500"
                style={{
                  height: `${h}%`,
                  backgroundColor: `${active.color}30`,
                  borderTop: `2px solid ${active.color}`,
                  boxShadow: powerOn ? `0 0 10px ${active.color}30, inset 0 0 10px ${active.color}10` : "none",
                  opacity: glowOpacity,
                }}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-4 mt-2">
            {[
              { label: "Visitors", val: "8.2K" },
              { label: "Clicks", val: "1.4K" },
              { label: "Converts", val: "342" },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 text-center">
                <p
                  className="text-xl font-bold transition-all duration-500"
                  style={{
                    color: active.color,
                    textShadow: powerOn ? `0 0 10px ${active.color}60` : "none",
                    opacity: glowOpacity,
                  }}
                >
                  {stat.val}
                </p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Side panel */}
        <div className="w-64 flex flex-col gap-4">
          {/* Input */}
          <div
            className="rounded-xl p-4 transition-all duration-500"
            style={{
              border: `1px solid ${powerOn ? active.color + "40" : "#333"}`,
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <label className="text-xs uppercase tracking-wider block mb-2" style={{ color: active.color, opacity: glowOpacity }}>
              Neon Input
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type here..."
              className="w-full bg-transparent py-2 text-sm outline-none transition-all"
              style={{
                color: active.color,
                borderBottom: `1px solid ${active.color}60`,
                caretColor: active.color,
              }}
            />
          </div>

          {/* Neon bordered items */}
          <div className="flex flex-col gap-2 flex-1">
            {["◈ Reactive", "◇ Dynamic", "◆ Electric", "◈ Vibrant"].map((item) => (
              <div
                key={item}
                className="px-4 py-3 rounded-lg text-sm cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                style={{
                  color: `${active.color}cc`,
                  border: `1px solid ${active.color}20`,
                  background: `${active.color}05`,
                  opacity: glowOpacity,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            className="w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all"
            style={{
              color: "#000",
              backgroundColor: active.color,
              boxShadow: powerOn ? active.shadow : "none",
              opacity: glowOpacity,
            }}
          >
            Activate
          </button>
        </div>
      </div>
    </div>
  );
}
