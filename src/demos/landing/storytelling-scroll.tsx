"use client";

import { useState } from "react";

const sections = [
  {
    title: "Once upon a digital age...",
    text: "In a world driven by pixels and imagination, a new story begins.",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    color: "#e0e0ff",
    accent: "#7f5af0",
  },
  {
    title: "The Challenge",
    text: "Users demanded beauty AND function. Could both coexist?",
    bg: "linear-gradient(135deg, #0f3460 0%, #1a1a4e 100%)",
    color: "#c8d6e5",
    accent: "#e94560",
  },
  {
    title: "The Discovery",
    text: "Through iteration and empathy, a design language emerged.",
    bg: "linear-gradient(135deg, #533483 0%, #0b0b2b 100%)",
    color: "#f0e6ff",
    accent: "#2ee59d",
  },
  {
    title: "The Result",
    text: "A seamless experience that feels like home.",
    bg: "linear-gradient(135deg, #1b1b3a 0%, #2d132c 100%)",
    color: "#ffe6f0",
    accent: "#ff6b6b",
  },
];

export default function StorytellingScroll() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="min-h-[400px] relative overflow-hidden rounded-xl" style={{ background: "#0d0d1a" }}>
      {/* Progress indicator */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
        {sections.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveSection(i)}
            className="transition-all duration-300"
            style={{
              width: activeSection === i ? 14 : 8,
              height: activeSection === i ? 14 : 8,
              borderRadius: "50%",
              background: activeSection === i ? s.accent : "rgba(255,255,255,0.25)",
              border: activeSection === i ? `2px solid ${s.accent}` : "2px solid transparent",
              cursor: "pointer",
            }}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
        <div
          className="mt-1 text-[10px] font-mono"
          style={{ color: "rgba(255,255,255,0.4)", writingMode: "vertical-rl" }}
        >
          {activeSection + 1}/{sections.length}
        </div>
      </div>

      {/* Main content area */}
      <div
        className="min-h-[400px] flex flex-col justify-center items-center text-center px-16 py-10 transition-all duration-700 ease-in-out"
        style={{ background: sections[activeSection].bg }}
      >
        {/* Chapter label */}
        <div
          className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4 transition-all duration-500"
          style={{ color: sections[activeSection].accent }}
        >
          Chapter {activeSection + 1}
        </div>

        {/* Title */}
        <h2
          className="text-3xl font-bold mb-3 transition-all duration-500"
          style={{ color: sections[activeSection].color }}
        >
          {sections[activeSection].title}
        </h2>

        {/* Divider */}
        <div
          className="w-16 h-[2px] mb-4 transition-all duration-500"
          style={{ background: sections[activeSection].accent }}
        />

        {/* Body text */}
        <p
          className="text-base max-w-md leading-relaxed mb-8 transition-all duration-500"
          style={{ color: `${sections[activeSection].color}99` }}
        >
          {sections[activeSection].text}
        </p>

        {/* Visual element - floating shapes */}
        <div className="relative w-full max-w-xs h-16 mb-6">
          {[0, 1, 2].map((j) => (
            <div
              key={j}
              className="absolute rounded-full"
              style={{
                width: 30 + j * 10,
                height: 30 + j * 10,
                background: `${sections[activeSection].accent}${j === 0 ? "33" : j === 1 ? "22" : "11"}`,
                left: `${20 + j * 25}%`,
                top: `${10 + j * 10}%`,
                animation: `float${j} 3s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
            disabled={activeSection === 0}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: activeSection === 0 ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.1)",
              color: activeSection === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.7)",
              cursor: activeSection === 0 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>
          <button
            onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
            disabled={activeSection === sections.length - 1}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background:
                activeSection === sections.length - 1
                  ? "rgba(255,255,255,0.05)"
                  : sections[activeSection].accent,
              color:
                activeSection === sections.length - 1 ? "rgba(255,255,255,0.2)" : "#fff",
              cursor: activeSection === sections.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            Continue
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs mt-6 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${((activeSection + 1) / sections.length) * 100}%`,
              background: sections[activeSection].accent,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float0 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes float1 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes float2 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
      `}</style>
    </div>
  );
}
