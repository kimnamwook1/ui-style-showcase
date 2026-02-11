"use client";

import { useState } from "react";

export default function OrganicBiomorphicDemo() {
  const [activeLeaf, setActiveLeaf] = useState(0);
  const [waterLevel, setWaterLevel] = useState(65);

  const greens = ["#2d6a4f", "#40916c", "#52b788", "#74c69d", "#95d5b2", "#b7e4c7"];

  return (
    <div
      className="min-h-[400px] relative overflow-hidden font-sans"
      style={{ background: "linear-gradient(180deg, #fefae0, #d4e09b 50%, #f0f7da)" }}
    >
      {/* Background blob shapes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="none">
        <path
          d="M-50,200 C100,100 200,300 350,200 C500,100 600,250 850,150 L850,500 L-50,500 Z"
          fill="#95d5b240"
        />
        <path
          d="M-50,280 C150,200 250,350 400,280 C550,210 650,320 850,250 L850,500 L-50,500 Z"
          fill="#74c69d30"
        />
        <ellipse cx="650" cy="100" rx="120" ry="100" fill="#b7e4c720" />
        <ellipse cx="100" cy="80" rx="80" ry="60" fill="#52b78815" />
      </svg>

      <div className="relative z-10 p-8 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path
                d="M20,2 C28,8 38,15 35,25 C32,35 25,38 20,38 C15,38 8,35 5,25 C2,15 12,8 20,2"
                fill="#52b788"
                stroke="#2d6a4f"
                strokeWidth="1"
              />
              <path d="M20,10 Q22,20 20,35" fill="none" stroke="#2d6a4f" strokeWidth="0.8" />
              <path d="M12,18 Q20,22 28,18" fill="none" stroke="#2d6a4f" strokeWidth="0.5" />
            </svg>
            <h1 className="text-2xl font-semibold" style={{ color: "#2d6a4f" }}>
              Organic & Biomorphic
            </h1>
          </div>
          <div className="flex gap-2">
            {greens.slice(0, 4).map((c, i) => (
              <button
                key={c}
                onClick={() => setActiveLeaf(i)}
                className="w-8 h-8 transition-transform"
                style={{
                  background: c,
                  borderRadius: activeLeaf === i ? "50% 0 50% 50%" : "50%",
                  transform: activeLeaf === i ? "scale(1.2)" : "scale(1)",
                  border: activeLeaf === i ? "2px solid #2d6a4f" : "2px solid transparent",
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-6 flex-1">
          {/* Left: flowing content */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Blob card */}
            <div
              className="p-6 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.7)",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(45,106,79,0.1)",
              }}
            >
              <h3 className="text-lg font-semibold" style={{ color: "#2d6a4f" }}>
                Natural Flow
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#588157" }}>
                Biomorphic design draws from the irregular, flowing shapes found in nature.
                No straight lines, no sharp corners, just organic harmony.
              </p>
              <div className="flex gap-2 mt-1">
                <button
                  className="px-5 py-2 text-sm font-medium text-white"
                  style={{
                    background: "#40916c",
                    borderRadius: "0 20px 20px 20px",
                  }}
                >
                  Explore
                </button>
                <button
                  className="px-5 py-2 text-sm font-medium"
                  style={{
                    color: "#40916c",
                    border: "1px solid #40916c",
                    borderRadius: "20px 0 20px 20px",
                  }}
                >
                  Learn
                </button>
              </div>
            </div>

            {/* Nature stats */}
            <div className="flex gap-3">
              {[
                { icon: "🌿", label: "Species", value: "340K" },
                { icon: "🌊", label: "Oceans", value: "71%" },
                { icon: "🌱", label: "Growth", value: "+12%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 p-4 flex flex-col items-center gap-1"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    borderRadius: "20px",
                    border: "1px solid rgba(116,198,157,0.3)",
                  }}
                >
                  <span className="text-xl">{stat.icon}</span>
                  <span className="text-xs" style={{ color: "#588157" }}>{stat.label}</span>
                  <span className="text-lg font-bold" style={{ color: "#2d6a4f" }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="w-60 flex flex-col gap-4">
            {/* Water level */}
            <div
              className="p-5 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.6)",
                borderRadius: "24px",
                border: "1px solid rgba(116,198,157,0.3)",
              }}
            >
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "#588157" }}>
                Water Level
              </p>
              <div
                className="w-full h-24 relative overflow-hidden"
                style={{ borderRadius: "16px", background: "#d8f3dc" }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 transition-all duration-500"
                  style={{
                    height: `${waterLevel}%`,
                    background: "linear-gradient(180deg, #74c69d80, #52b788)",
                    borderRadius: "60% 60% 0 0 / 20% 20% 0 0",
                  }}
                />
                <span
                  className="absolute inset-0 flex items-center justify-center text-lg font-bold"
                  style={{ color: "#2d6a4f" }}
                >
                  {waterLevel}%
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={waterLevel}
                onChange={(e) => setWaterLevel(Number(e.target.value))}
                className="w-full accent-[#40916c]"
              />
            </div>

            {/* Input */}
            <div
              className="p-5 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.5)",
                borderRadius: "24px",
                border: "1px solid rgba(116,198,157,0.3)",
              }}
            >
              <input
                type="text"
                placeholder="Plant a thought..."
                className="w-full px-4 py-2.5 text-sm outline-none"
                style={{
                  background: "rgba(183,228,199,0.3)",
                  borderRadius: "16px",
                  border: "1px solid rgba(116,198,157,0.3)",
                  color: "#2d6a4f",
                }}
              />
              <button
                className="w-full py-2.5 text-sm font-medium text-white"
                style={{
                  background: "linear-gradient(135deg, #40916c, #52b788)",
                  borderRadius: "16px",
                }}
              >
                🌱 Grow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
