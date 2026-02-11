"use client";

import { useState } from "react";

export default function GeometricPatternsDemo() {
  const [activePattern, setActivePattern] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);

  const patterns = [
    {
      name: "Triangles",
      bg: "conic-gradient(from 0deg at 50% 100%, #2d3561 0deg 60deg, #f5f0eb 60deg 120deg, #2d3561 120deg 180deg, #f5f0eb 180deg 240deg, #2d3561 240deg 300deg, #f5f0eb 300deg 360deg)",
      size: "40px 35px",
    },
    {
      name: "Hexagons",
      bg: `radial-gradient(circle farthest-side at 0% 50%, #415a77 23.5%, transparent 0) 21px 30px,
           radial-gradient(circle farthest-side at 0% 50%, #e0e1dd 24%, transparent 0) 19px 30px,
           linear-gradient(#415a77 14%, transparent 0, transparent 85%, #415a77 0) 0 0,
           linear-gradient(150deg, #415a77 24%, #778da9 0, #778da9 26%, transparent 0, transparent 74%, #778da9 0, #778da9 76%, #415a77 0) 0 0,
           linear-gradient(30deg, #415a77 24%, #778da9 0, #778da9 26%, transparent 0, transparent 74%, #778da9 0, #778da9 76%, #415a77 0) 0 0,
           linear-gradient(#778da9 2%, #415a77 0, #415a77 98%, #778da9 0%) 0 0`,
      size: "40px 60px",
    },
    {
      name: "Diamonds",
      bg: `linear-gradient(45deg, #e07a5f 25%, transparent 25%), linear-gradient(-45deg, #e07a5f 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e07a5f 75%), linear-gradient(-45deg, transparent 75%, #e07a5f 75%)`,
      size: "40px 40px",
    },
  ];

  return (
    <div className="min-h-[400px] bg-white text-gray-900 font-sans">
      {/* Header with pattern background */}
      <div
        className="p-6 relative overflow-hidden"
        style={{
          background: patterns[activePattern].bg,
          backgroundSize: patterns[activePattern].size,
          minHeight: "100px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40" />
        <div className="relative z-10">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: "#1a1a2e" }}>
            Geometric Patterns
          </h1>
          <p className="text-sm mt-1" style={{ color: "#555" }}>
            Mathematical precision in visual design
          </p>
        </div>
      </div>

      <div className="p-6 flex gap-6 flex-wrap">
        {/* Pattern selector */}
        <div className="flex-1 min-w-[260px]">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
            Select Pattern
          </p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {patterns.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActivePattern(i)}
                className="flex flex-col items-center gap-2 p-3 transition-all duration-200 border-2"
                style={{
                  borderColor: activePattern === i ? "#2d3561" : "#e5e5e5",
                  backgroundColor: activePattern === i ? "#f8f9fa" : "#fff",
                }}
              >
                <div
                  className="w-full h-16 rounded"
                  style={{
                    background: p.bg,
                    backgroundSize: p.size,
                  }}
                />
                <span className="text-xs font-medium">{p.name}</span>
              </button>
            ))}
          </div>

          {/* Scale control */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-xs uppercase tracking-widest text-gray-500">
                Scale
              </span>
              <span className="text-xs font-mono text-gray-700">{sliderValue}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full accent-gray-900"
            />
          </div>

          {/* Grid info cards */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Vertices", value: "6" },
              { label: "Symmetry", value: "D6" },
              { label: "Tile Size", value: `${sliderValue}px` },
              { label: "Rotation", value: "60\u00b0" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-3 border border-gray-200 flex flex-col"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-lg font-bold mt-1" style={{ color: "#2d3561" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SVG geometric illustration */}
        <div className="w-56 flex flex-col gap-4">
          <svg viewBox="0 0 200 200" className="w-full">
            {/* Grid lines */}
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={`h${i}`}
                x1="0"
                y1={i * 25}
                x2="200"
                y2={i * 25}
                stroke="#e5e5e5"
                strokeWidth="0.5"
              />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={`v${i}`}
                x1={i * 25}
                y1="0"
                x2={i * 25}
                y2="200"
                stroke="#e5e5e5"
                strokeWidth="0.5"
              />
            ))}
            {/* Geometric shapes */}
            <polygon
              points="100,20 170,70 145,150 55,150 30,70"
              fill="none"
              stroke="#2d3561"
              strokeWidth="2"
            />
            <polygon
              points="100,50 140,80 125,130 75,130 60,80"
              fill="#2d3561"
              opacity="0.1"
              stroke="#2d3561"
              strokeWidth="1"
            />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#e07a5f" strokeWidth="1.5" strokeDasharray="4,4" />
            <circle cx="100" cy="100" r="3" fill="#e07a5f" />
            {/* Vertices */}
            {[
              [100, 20],
              [170, 70],
              [145, 150],
              [55, 150],
              [30, 70],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="4" fill="#2d3561" />
            ))}
            {/* Labels */}
            <text x="100" y="185" textAnchor="middle" fontSize="10" fill="#999">
              Regular Pentagon
            </text>
          </svg>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              className="flex-1 py-2 text-xs uppercase tracking-wider font-medium text-white transition-colors"
              style={{ backgroundColor: "#2d3561" }}
            >
              Export SVG
            </button>
            <button
              className="flex-1 py-2 text-xs uppercase tracking-wider font-medium border-2 transition-colors"
              style={{ borderColor: "#2d3561", color: "#2d3561" }}
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
