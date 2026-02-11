"use client";

import { useState, useEffect } from "react";

export default function SciFiHudDemo() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 60);
    return () => clearInterval(interval);
  }, []);

  const cyan = "#00e5ff";
  const amber = "#ffab00";

  return (
    <div className="min-h-[400px] p-6 font-mono relative overflow-hidden" style={{ background: "#050a0f" }}>
      {/* Scan lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-lg space-y-4">
        {/* Header HUD */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: cyan, boxShadow: `0 0 8px ${cyan}` }} />
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: cyan }}>
              HUD ACTIVE
            </span>
          </div>
          <span className="text-[10px]" style={{ color: `${cyan}60` }}>
            SYS.TIME: {String(Math.floor(tick / 60) % 24).padStart(2, "0")}:{String(tick % 60).padStart(2, "0")}
          </span>
        </div>

        {/* Circular gauge */}
        <div className="flex items-center gap-6">
          <div className="relative w-36 h-36">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              <circle cx="60" cy="60" r="52" fill="none" stroke={`${cyan}15`} strokeWidth="2" />
              <circle
                cx="60" cy="60" r="52"
                fill="none" stroke={cyan} strokeWidth="2"
                strokeDasharray={`${(75 + Math.sin(tick / 20) * 5) * 3.27} 327`}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
                style={{ filter: `drop-shadow(0 0 4px ${cyan})` }}
              />
              <circle cx="60" cy="60" r="40" fill="none" stroke={`${cyan}10`} strokeWidth="1" />
              <text x="60" y="55" textAnchor="middle" fontSize="18" fontWeight="bold" fill={cyan}>
                {Math.round(75 + Math.sin(tick / 20) * 5)}%
              </text>
              <text x="60" y="72" textAnchor="middle" fontSize="8" fill={`${cyan}80`} letterSpacing="2">
                POWER
              </text>
            </svg>
          </div>

          {/* Stats panel */}
          <div className="flex-1 space-y-3">
            {[
              { label: "SHIELD", value: 92, color: cyan },
              { label: "HULL", value: 78, color: amber },
              { label: "FUEL", value: 64, color: "#ff4444" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-[10px] tracking-wider" style={{ color: stat.color }}>{stat.label}</span>
                  <span className="text-[10px]" style={{ color: `${stat.color}80` }}>{stat.value}%</span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: `${stat.color}15` }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${stat.value}%`,
                      background: stat.color,
                      boxShadow: `0 0 6px ${stat.color}60`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom panels */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "NAV", items: ["Sector 7-G", "Bearing 045", "ETA 2.4h"] },
            { label: "COMMS", items: ["Ch.1 Active", "Signal 98%", "Encrypted"] },
            { label: "SCAN", items: ["3 Targets", "Range 12km", "Threat: Low"] },
          ].map((panel) => (
            <div
              key={panel.label}
              className="p-3 rounded"
              style={{ border: `1px solid ${cyan}20`, background: `${cyan}05` }}
            >
              <p className="text-[10px] tracking-wider mb-2" style={{ color: cyan }}>{panel.label}</p>
              {panel.items.map((item) => (
                <p key={item} className="text-[10px] leading-relaxed" style={{ color: `${cyan}60` }}>
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
