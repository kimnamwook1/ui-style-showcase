"use client";

import { useState } from "react";

export default function FlatDesignDemo() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState("#3498db");
  const [progress, setProgress] = useState(65);

  const cards = [
    { icon: "◆", title: "Analytics", count: "2,847", color: "#3498db" },
    { icon: "●", title: "Users", count: "1,024", color: "#2ecc71" },
    { icon: "■", title: "Revenue", count: "$48K", color: "#e74c3c" },
    { icon: "▲", title: "Growth", count: "+12%", color: "#f39c12" },
  ];

  const colors = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6", "#1abc9c"];

  return (
    <div className="min-h-[400px] bg-[#ecf0f1] p-8 flex flex-col gap-6 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: selectedColor }}>
            F
          </div>
          <h1 className="text-2xl font-bold text-[#2c3e50]">Flat Design</h1>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#3498db] text-white rounded font-semibold text-sm hover:bg-[#2980b9] transition-colors">
            Dashboard
          </button>
          <button className="px-4 py-2 bg-[#2c3e50] text-white rounded font-semibold text-sm hover:bg-[#34495e] transition-colors">
            Settings
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <button
            key={card.title}
            onClick={() => setActiveCard(activeCard === i ? null : i)}
            className="p-5 rounded-lg text-left transition-transform"
            style={{
              backgroundColor: card.color,
              transform: activeCard === i ? "scale(1.05)" : "scale(1)",
            }}
          >
            <span className="text-3xl text-white opacity-80">{card.icon}</span>
            <p className="text-white text-sm mt-2 font-medium opacity-90">{card.title}</p>
            <p className="text-white text-2xl font-bold mt-1">{card.count}</p>
          </button>
        ))}
      </div>

      {/* Content Row */}
      <div className="flex gap-4 flex-1">
        {/* Progress Section */}
        <div className="flex-1 bg-white rounded-lg p-6">
          <h3 className="font-bold text-[#2c3e50] mb-4">Project Progress</h3>
          <div className="flex flex-col gap-3">
            {[
              { label: "Design", pct: 85, color: "#3498db" },
              { label: "Development", pct: progress, color: "#2ecc71" },
              { label: "Testing", pct: 30, color: "#e74c3c" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <div className="flex justify-between text-sm">
                  <span className="text-[#7f8c8d] font-medium">{item.label}</span>
                  <span className="font-bold" style={{ color: item.color }}>{item.pct}%</span>
                </div>
                <div className="w-full h-3 bg-[#ecf0f1] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setProgress(Math.min(100, progress + 5))}
            className="mt-4 px-4 py-2 bg-[#2ecc71] text-white rounded font-semibold text-sm"
          >
            + Increment Dev
          </button>
        </div>

        {/* Color Picker & Icons */}
        <div className="w-56 flex flex-col gap-4">
          <div className="bg-white rounded-lg p-5">
            <h3 className="font-bold text-[#2c3e50] mb-3 text-sm">Theme Color</h3>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className="w-full aspect-square rounded-lg transition-transform"
                  style={{
                    backgroundColor: c,
                    transform: selectedColor === c ? "scale(1.15)" : "scale(1)",
                    outline: selectedColor === c ? "3px solid #2c3e50" : "none",
                    outlineOffset: "2px",
                  }}
                />
              ))}
            </div>
          </div>
          {/* 2D Icon Grid */}
          <div className="bg-white rounded-lg p-5 flex-1">
            <h3 className="font-bold text-[#2c3e50] mb-3 text-sm">2D Icons</h3>
            <div className="grid grid-cols-3 gap-3">
              {["☰", "⚙", "✉", "♥", "★", "⚑"].map((icon, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg flex items-center justify-center text-xl text-white font-bold"
                  style={{ backgroundColor: colors[i] }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
