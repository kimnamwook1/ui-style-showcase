"use client";

import { useState } from "react";

export default function SwissInternationalDemo() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [gridVisible, setGridVisible] = useState(true);

  return (
    <div
      className="min-h-[400px] relative font-sans"
      style={{
        background: "#fff",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {/* Grid overlay */}
      {gridVisible && (
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      )}

      <div className="relative z-10 flex h-full">
        {/* Left column - red accent sidebar */}
        <div className="w-16 bg-[#e20613] flex flex-col items-center py-6 gap-4">
          <div className="w-6 h-6 bg-white" />
          <div className="w-px flex-1 bg-white/30" />
          <button
            onClick={() => setGridVisible(!gridVisible)}
            className="text-white text-xs font-bold"
            style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
          >
            {gridVisible ? "GRID ON" : "GRID OFF"}
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8 flex flex-col gap-6">
          {/* Header - asymmetric */}
          <div className="flex items-end gap-8">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">International Style</p>
              <h1 className="text-5xl font-bold text-black tracking-tight leading-none mt-1">
                Swiss<br />Typography
              </h1>
            </div>
            <div className="text-right">
              <p className="text-[120px] font-bold leading-none text-gray-100">Ty</p>
            </div>
          </div>

          {/* Thick red line */}
          <div className="h-1 bg-[#e20613] w-20" />

          {/* Grid content layout */}
          <div className="flex gap-8 flex-1">
            {/* Left content */}
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                The Swiss International Typographic Style emphasizes cleanness, readability, and objectivity.
                Asymmetric layouts, grids, and sans-serif typefaces create clarity and order.
              </p>

              {/* List items */}
              <div className="flex flex-col gap-0 mt-2">
                {[
                  { num: "01", title: "Grid System", desc: "Mathematical precision" },
                  { num: "02", title: "Sans-Serif", desc: "Clean and neutral" },
                  { num: "03", title: "Asymmetry", desc: "Dynamic composition" },
                  { num: "04", title: "White Space", desc: "Purposeful emptiness" },
                ].map((item, i) => (
                  <button
                    key={item.num}
                    onClick={() => setSelectedItem(i)}
                    className="flex items-center gap-4 py-3 text-left transition-colors"
                    style={{
                      borderTop: "1px solid #eee",
                      background: selectedItem === i ? "#f5f5f5" : "transparent",
                    }}
                  >
                    <span
                      className="text-xs font-bold w-8"
                      style={{ color: selectedItem === i ? "#e20613" : "#ccc" }}
                    >
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <span className="text-sm font-bold text-black">{item.title}</span>
                      <span className="text-xs text-gray-400 ml-3">{item.desc}</span>
                    </div>
                    <span className="text-xs text-gray-300">{selectedItem === i ? "→" : ""}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right column - visual hierarchy demo */}
            <div className="w-64 flex flex-col gap-4">
              {/* Type scale */}
              <div className="flex flex-col gap-1">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Type Scale</p>
                {[
                  { size: 32, weight: 700, label: "Display" },
                  { size: 20, weight: 700, label: "Heading" },
                  { size: 14, weight: 400, label: "Body" },
                  { size: 11, weight: 400, label: "Caption" },
                ].map((t) => (
                  <div key={t.label} className="flex items-baseline gap-3 py-1" style={{ borderBottom: "1px solid #f0f0f0" }}>
                    <span style={{ fontSize: t.size, fontWeight: t.weight, lineHeight: 1.2, color: "#000" }}>
                      Aa
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">
                      {t.label} — {t.size}px
                    </span>
                  </div>
                ))}
              </div>

              {/* Color blocks */}
              <div className="flex gap-2 mt-2">
                <div className="flex-1 h-16 bg-black flex items-end p-2">
                  <span className="text-[9px] text-white font-bold">#000</span>
                </div>
                <div className="flex-1 h-16 bg-[#e20613] flex items-end p-2">
                  <span className="text-[9px] text-white font-bold">#E20613</span>
                </div>
                <div className="flex-1 h-16 bg-gray-200 flex items-end p-2">
                  <span className="text-[9px] text-gray-600 font-bold">#E5E5E5</span>
                </div>
              </div>

              <button
                className="mt-auto py-3 text-xs uppercase tracking-widest font-bold text-white bg-black hover:bg-[#e20613] transition-colors"
              >
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
