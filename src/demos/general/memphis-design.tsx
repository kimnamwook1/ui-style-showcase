"use client";

import { useState } from "react";

export default function MemphisDesignDemo() {
  const [activeShape, setActiveShape] = useState<number | null>(null);
  const [bgColor, setBgColor] = useState("#ffe66d");

  const colors = ["#ffe66d", "#ff6b6b", "#4ecdc4", "#6c5ce7", "#ff9ff3"];

  return (
    <div
      className="min-h-[400px] relative overflow-hidden font-sans p-8"
      style={{ background: bgColor, transition: "background 0.5s ease" }}
    >
      {/* Scattered geometric shapes */}
      {/* Triangle top-right */}
      <div
        className="absolute"
        style={{
          width: 0,
          height: 0,
          borderLeft: "40px solid transparent",
          borderRight: "40px solid transparent",
          borderBottom: "70px solid #ff6b6b",
          top: "30px",
          right: "80px",
          transform: "rotate(15deg)",
        }}
      />
      {/* Circle */}
      <div
        className="absolute w-20 h-20 rounded-full"
        style={{
          background: "none",
          border: "4px solid #6c5ce7",
          top: "60px",
          right: "200px",
        }}
      />
      {/* Squiggle SVG */}
      <svg className="absolute" style={{ top: "20px", left: "300px", opacity: 0.6 }} width="100" height="40">
        <path d="M0 20 Q 15 0, 30 20 Q 45 40, 60 20 Q 75 0, 90 20" stroke="#ff6b6b" fill="none" strokeWidth="3" />
      </svg>
      {/* Dots pattern */}
      <div className="absolute" style={{ bottom: "40px", left: "60px" }}>
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex gap-2 mb-2">
            {[0, 1, 2, 3].map((col) => (
              <div key={col} className="w-2 h-2 rounded-full" style={{ background: "#6c5ce7" }} />
            ))}
          </div>
        ))}
      </div>
      {/* Zigzag */}
      <svg className="absolute" style={{ bottom: "80px", right: "40px", opacity: 0.5 }} width="80" height="40">
        <polyline points="0,30 15,10 30,30 45,10 60,30 75,10" stroke="#4ecdc4" fill="none" strokeWidth="3" />
      </svg>
      {/* Small square */}
      <div
        className="absolute w-10 h-10"
        style={{ background: "#4ecdc4", bottom: "120px", left: "200px", transform: "rotate(45deg)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1
            className="text-5xl font-black uppercase"
            style={{
              color: "#1a1a2e",
              textShadow: "3px 3px 0 #ff6b6b, 6px 6px 0 #4ecdc4",
            }}
          >
            Memphis
          </h1>
          {/* Color palette */}
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setBgColor(c)}
                className="w-8 h-8 rounded-full border-2 border-black transition-transform hover:scale-125"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>

        {/* Bold shapes row */}
        <div className="flex gap-4">
          {[
            { shape: "circle", color: "#ff6b6b", label: "Play" },
            { shape: "triangle", color: "#4ecdc4", label: "Create" },
            { shape: "square", color: "#6c5ce7", label: "Build" },
            { shape: "diamond", color: "#ff9ff3", label: "Dream" },
          ].map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActiveShape(activeShape === i ? null : i)}
              className="flex-1 flex flex-col items-center gap-3 p-5 transition-transform"
              style={{
                background: "#fff",
                border: `3px solid ${item.color}`,
                transform: activeShape === i ? "scale(1.08) rotate(-2deg)" : "scale(1)",
                boxShadow: activeShape === i ? `4px 4px 0 ${item.color}` : "none",
              }}
            >
              {item.shape === "circle" && (
                <div className="w-12 h-12 rounded-full" style={{ background: item.color }} />
              )}
              {item.shape === "triangle" && (
                <div
                  style={{
                    width: 0, height: 0,
                    borderLeft: "24px solid transparent",
                    borderRight: "24px solid transparent",
                    borderBottom: `42px solid ${item.color}`,
                  }}
                />
              )}
              {item.shape === "square" && (
                <div className="w-12 h-12" style={{ background: item.color }} />
              )}
              {item.shape === "diamond" && (
                <div className="w-10 h-10" style={{ background: item.color, transform: "rotate(45deg)" }} />
              )}
              <span className="text-sm font-black uppercase" style={{ color: "#1a1a2e" }}>
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom cards */}
        <div className="flex gap-4">
          <div
            className="flex-1 p-5"
            style={{ background: "#1a1a2e", border: "3px solid #ff6b6b" }}
          >
            <h3 className="text-lg font-black uppercase text-white">
              Bold & Playful
            </h3>
            <p className="text-sm mt-2" style={{ color: "#aaa" }}>
              Memphis design broke all the rules of modernism with clashing colors, geometric shapes, and pure fun.
            </p>
            <div className="flex gap-2 mt-3">
              <span className="px-3 py-1 text-xs font-bold bg-[#ff6b6b] text-white">80s</span>
              <span className="px-3 py-1 text-xs font-bold bg-[#4ecdc4] text-white">POP</span>
              <span className="px-3 py-1 text-xs font-bold bg-[#6c5ce7] text-white">FUN</span>
            </div>
          </div>
          <div
            className="w-48 p-5 flex flex-col items-center justify-center gap-2"
            style={{ background: "#fff", border: "3px solid #1a1a2e" }}
          >
            <div className="text-4xl font-black" style={{ color: "#ff6b6b" }}>!!</div>
            <input
              type="text"
              placeholder="Go wild..."
              className="w-full px-3 py-2 text-sm font-bold text-center outline-none"
              style={{ border: "2px dashed #6c5ce7", background: "#ffe66d40" }}
            />
            <button
              className="w-full py-2 text-xs font-black uppercase text-white"
              style={{ background: "#6c5ce7", border: "2px solid #1a1a2e" }}
            >
              Submit!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
