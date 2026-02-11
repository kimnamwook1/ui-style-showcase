"use client";

import { useState } from "react";

export default function HighContrastDemo() {
  const [activeSection, setActiveSection] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [toggled, setToggled] = useState(false);

  return (
    <div className="min-h-[400px] p-8 font-sans" style={{ backgroundColor: "#000", color: "#fff" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-4 h-8" style={{ backgroundColor: "#FFD600" }} />
          <h1 className="text-3xl font-black tracking-tight">HIGH CONTRAST</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#FFD600" }}>
            WCAG AAA
          </span>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FFD600" }} />
        </div>
      </div>

      {/* Bold separator */}
      <div className="h-1 w-full mb-6" style={{ backgroundColor: "#fff" }} />

      {/* Nav tabs */}
      <div className="flex gap-0 mb-6">
        {["Overview", "Components", "Metrics"].map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveSection(i)}
            className="px-5 py-3 text-sm font-bold uppercase tracking-wider transition-colors"
            style={{
              backgroundColor: activeSection === i ? "#FFD600" : "transparent",
              color: activeSection === i ? "#000" : "#fff",
              border: "2px solid #fff",
              borderRight: i < 2 ? "none" : "2px solid #fff",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-6 flex-wrap">
        {/* Main content */}
        <div className="flex-1 min-w-[280px]">
          {activeSection === 0 && (
            <div>
              <h2 className="text-xl font-black mb-3">Maximum Readability</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#ccc" }}>
                High contrast design eliminates ambiguity. Black backgrounds with white text
                provide the clearest possible reading experience. The vivid yellow accent
                draws immediate attention to key elements.
              </p>

              {/* Feature list */}
              <div className="flex flex-col gap-3">
                {[
                  "21:1 contrast ratio for primary text",
                  "Bold visual separators between sections",
                  "Zero-ambiguity color signaling",
                  "Readable at any screen brightness",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 flex items-center justify-center flex-shrink-0 font-bold text-xs"
                      style={{ backgroundColor: "#FFD600", color: "#000" }}
                    >
                      \u2713
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 1 && (
            <div className="flex flex-col gap-4">
              {/* Input */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: "#FFD600" }}>
                  Search
                </label>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type here..."
                  className="w-full px-4 py-3 text-sm font-bold"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "2px solid #fff",
                    outline: "none",
                  }}
                />
              </div>

              {/* Toggle */}
              <div className="flex items-center justify-between py-3" style={{ borderBottom: "2px solid #333" }}>
                <span className="text-sm font-bold">Dark Mode Lock</span>
                <button
                  onClick={() => setToggled(!toggled)}
                  className="w-14 h-7 relative transition-colors"
                  style={{
                    backgroundColor: toggled ? "#FFD600" : "#333",
                    border: "2px solid #fff",
                  }}
                >
                  <div
                    className="absolute top-0.5 w-5 h-5 transition-all duration-200"
                    style={{
                      backgroundColor: toggled ? "#000" : "#fff",
                      left: toggled ? "28px" : "2px",
                    }}
                  />
                </button>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  className="flex-1 py-3 text-sm font-black uppercase tracking-wider"
                  style={{ backgroundColor: "#FFD600", color: "#000" }}
                >
                  Primary
                </button>
                <button
                  className="flex-1 py-3 text-sm font-black uppercase tracking-wider"
                  style={{ backgroundColor: "#000", color: "#fff", border: "2px solid #fff" }}
                >
                  Secondary
                </button>
              </div>
            </div>
          )}

          {activeSection === 2 && (
            <div className="flex flex-col gap-4">
              {[
                { label: "Contrast", value: "21:1", bar: 100 },
                { label: "Readability", value: "AAA", bar: 95 },
                { label: "Accessibility", value: "100%", bar: 100 },
                { label: "Eye Strain", value: "Low", bar: 20 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-bold">{m.label}</span>
                    <span className="text-sm font-bold" style={{ color: "#FFD600" }}>
                      {m.value}
                    </span>
                  </div>
                  <div className="h-2 w-full" style={{ backgroundColor: "#333" }}>
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        width: `${m.bar}%`,
                        backgroundColor: "#FFD600",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-48 flex flex-col gap-4">
          {/* Color palette */}
          <div className="p-4" style={{ border: "2px solid #fff" }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#FFD600" }}>
              Palette
            </p>
            <div className="flex flex-col gap-2">
              {[
                { color: "#000", label: "Black", hex: "#000" },
                { color: "#fff", label: "White", hex: "#FFF" },
                { color: "#FFD600", label: "Yellow", hex: "#FFD600" },
                { color: "#333", label: "Dark Gray", hex: "#333" },
              ].map((c) => (
                <div key={c.hex} className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 flex-shrink-0"
                    style={{
                      backgroundColor: c.color,
                      border: c.color === "#000" ? "1px solid #fff" : "none",
                    }}
                  />
                  <div>
                    <p className="text-xs font-bold">{c.label}</p>
                    <p className="text-xs" style={{ color: "#666" }}>{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status indicator */}
          <div className="p-4 text-center" style={{ backgroundColor: "#FFD600" }}>
            <p className="text-xs font-black uppercase tracking-wider" style={{ color: "#000" }}>
              Visibility
            </p>
            <p className="text-3xl font-black mt-1" style={{ color: "#000" }}>
              100%
            </p>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-1 w-full mt-6" style={{ backgroundColor: "#FFD600" }} />
      <p className="text-xs mt-3 text-center" style={{ color: "#666" }}>
        Designed for maximum clarity &bull; Zero compromise on readability
      </p>
    </div>
  );
}
