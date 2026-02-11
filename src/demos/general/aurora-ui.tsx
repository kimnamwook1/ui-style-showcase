"use client";

import { useState } from "react";

export default function AuroraUIDemo() {
  const [activeSection, setActiveSection] = useState(0);
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className="min-h-[400px] relative overflow-hidden font-sans" style={{ background: "#0a0a1a" }}>
      {/* Aurora blob 1 */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #00ff87 0%, transparent 70%)",
          top: "-100px",
          left: "-100px",
          animation: "aurora1 8s ease-in-out infinite alternate",
        }}
      />
      {/* Aurora blob 2 */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-25 blur-[80px]"
        style={{
          background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
          top: "50px",
          right: "-50px",
          animation: "aurora2 10s ease-in-out infinite alternate",
        }}
      />
      {/* Aurora blob 3 */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-20 blur-[90px]"
        style={{
          background: "radial-gradient(circle, #c084fc 0%, transparent 70%)",
          bottom: "-50px",
          left: "30%",
          animation: "aurora3 12s ease-in-out infinite alternate",
        }}
      />

      <style>{`
        @keyframes aurora1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(80px, 40px) scale(1.2); }
        }
        @keyframes aurora2 {
          0% { transform: translate(0, 0) scale(1.1); }
          100% { transform: translate(-60px, 60px) scale(0.9); }
        }
        @keyframes aurora3 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(40px, -30px) scale(1.3); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col gap-6 h-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1
            className="text-3xl font-bold"
            style={{
              background: "linear-gradient(135deg, #00ff87, #60a5fa, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Aurora UI
          </h1>
          <div className="flex gap-3">
            {["Dashboard", "Analytics", "Settings"].map((item, i) => (
              <button
                key={item}
                onClick={() => setActiveSection(i)}
                className="px-4 py-2 text-sm rounded-lg transition-all duration-300"
                style={{
                  color: activeSection === i ? "#fff" : "rgba(255,255,255,0.5)",
                  backgroundColor: activeSection === i ? "rgba(255,255,255,0.1)" : "transparent",
                  backdropFilter: activeSection === i ? "blur(10px)" : "none",
                  border: activeSection === i ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex gap-4">
          {[
            { label: "Active Users", value: "12,847", glow: "#00ff87" },
            { label: "Revenue", value: "$84.2K", glow: "#60a5fa" },
            { label: "Growth", value: "+23.5%", glow: "#c084fc" },
          ].map((card) => (
            <div
              key={card.label}
              className="flex-1 p-5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: `0 0 30px ${card.glow}15`,
              }}
            >
              <p className="text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
                {card.label}
              </p>
              <p className="text-2xl font-bold mt-1" style={{ color: card.glow }}>
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Main content area */}
        <div className="flex gap-4 flex-1">
          {/* Chart area placeholder */}
          <div
            className="flex-1 rounded-xl p-6 flex flex-col justify-between"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-sm text-white/40">Performance Overview</p>
            {/* Faux chart bars */}
            <div className="flex items-end gap-2 h-32">
              {[40, 65, 50, 80, 60, 90, 55, 75, 85, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md transition-all duration-300"
                  style={{
                    height: `${h}%`,
                    background: `linear-gradient(180deg, #00ff8750, #60a5fa30)`,
                    boxShadow: "0 0 10px rgba(0,255,135,0.1)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Side panel */}
          <div
            className="w-64 rounded-xl p-5 flex flex-col gap-4"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-sm text-white/40">Quick Search</p>
            <input
              type="text"
              placeholder="Search..."
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder:text-white/20 outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: inputFocused ? "1px solid rgba(0,255,135,0.4)" : "1px solid rgba(255,255,255,0.1)",
                boxShadow: inputFocused ? "0 0 20px rgba(0,255,135,0.1)" : "none",
              }}
            />
            <div className="flex flex-col gap-2 mt-2">
              {["Recent Activity", "Notifications", "Messages"].map((item, i) => (
                <div
                  key={item}
                  className="px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white/90 cursor-pointer transition-all hover:bg-white/5"
                >
                  {["⚡", "🔔", "💬"][i]} {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
