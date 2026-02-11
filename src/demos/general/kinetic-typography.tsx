"use client";

import { useState } from "react";

export default function KineticTypographyDemo() {
  const [activeEffect, setActiveEffect] = useState(0);

  const effects = ["Wave", "Bounce", "Spin", "Glitch"];

  return (
    <div
      className="min-h-[400px] p-8 flex flex-col relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <style>{`
        @keyframes waveChar {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounceChar {
          0%, 100% { transform: scaleY(1); }
          30% { transform: scaleY(0.6) scaleX(1.2); }
          50% { transform: scaleY(1.2) scaleX(0.9); }
          70% { transform: scaleY(0.95) scaleX(1.02); }
        }
        @keyframes spinChar {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes glitchChar {
          0%, 90%, 100% { transform: translate(0, 0); clip-path: none; color: #fff; }
          92% { transform: translate(-3px, 2px); color: #ff0040; }
          94% { transform: translate(3px, -2px); color: #0ff; }
          96% { transform: translate(-2px, -1px); color: #fff; }
          98% { transform: translate(2px, 1px); color: #ff0040; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blinkCaret {
          0%, 100% { border-right-color: #6366f1; }
          50% { border-right-color: transparent; }
        }
        @keyframes rotateIn {
          from { transform: rotate(-10deg) scale(0.8); opacity: 0; }
          to { transform: rotate(0deg) scale(1); opacity: 1; }
        }
        @keyframes stretchText {
          0%, 100% { letter-spacing: 0.05em; }
          50% { letter-spacing: 0.3em; }
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: "#6366f1" }}
          >
            Kinetic Typography
          </h1>
        </div>
        <div className="flex gap-2">
          {effects.map((fx, i) => (
            <button
              key={fx}
              onClick={() => setActiveEffect(i)}
              className="px-3 py-1 text-xs rounded-full transition-all duration-200"
              style={{
                backgroundColor: activeEffect === i ? "#6366f1" : "#1a1a1a",
                color: activeEffect === i ? "#fff" : "#555",
                border: `1px solid ${activeEffect === i ? "#6366f1" : "#222"}`,
              }}
            >
              {fx}
            </button>
          ))}
        </div>
      </div>

      {/* Main animated text */}
      <div className="flex-1 flex items-center justify-center" key={activeEffect}>
        <div className="text-center">
          <div className="flex justify-center flex-wrap">
            {"MOTION".split("").map((char, i) => (
              <span
                key={`${activeEffect}-${i}`}
                className="inline-block text-6xl md:text-7xl font-black text-white"
                style={{
                  animation:
                    activeEffect === 0
                      ? `waveChar 1.2s ease-in-out ${i * 0.1}s infinite`
                      : activeEffect === 1
                      ? `bounceChar 0.8s ease ${i * 0.12}s infinite`
                      : activeEffect === 2
                      ? `spinChar 1.5s ease ${i * 0.15}s infinite`
                      : `glitchChar 2s steps(1) ${i * 0.1}s infinite`,
                  display: "inline-block",
                  transformOrigin: "center bottom",
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Showcase elements */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Typewriter effect */}
        <div className="p-4 rounded-lg" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
          <p className="text-xs text-gray-500 mb-2">Typewriter</p>
          <div
            className="overflow-hidden whitespace-nowrap text-sm font-mono"
            style={{
              color: "#6366f1",
              borderRight: "2px solid #6366f1",
              animation: "typewriter 3s steps(30) infinite alternate, blinkCaret 0.8s step-end infinite",
              width: "100%",
            }}
          >
            The quick brown fox jumps...
          </div>
        </div>

        {/* Staggered reveal */}
        <div className="p-4 rounded-lg" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
          <p className="text-xs text-gray-500 mb-2">Staggered Reveal</p>
          <div className="flex gap-1 flex-wrap">
            {["Design", "in", "motion", "is", "alive"].map((word, i) => (
              <span
                key={i}
                className="text-sm font-medium"
                style={{
                  color: i % 2 === 0 ? "#fff" : "#6366f1",
                  animation: `fadeSlideUp 0.5s ease ${i * 0.15}s both`,
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Rotating words */}
        <div className="p-4 rounded-lg" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
          <p className="text-xs text-gray-500 mb-2">Elastic Stretch</p>
          <p
            className="text-lg font-bold tracking-wider text-white"
            style={{
              animation: "stretchText 3s ease-in-out infinite",
            }}
          >
            ELASTIC
          </p>
        </div>

        {/* Rotate in */}
        <div className="p-4 rounded-lg" style={{ backgroundColor: "#111", border: "1px solid #222" }}>
          <p className="text-xs text-gray-500 mb-2">Rotate In</p>
          <div className="flex gap-1">
            {"TYPE".split("").map((ch, i) => (
              <span
                key={`rot-${activeEffect}-${i}`}
                className="text-2xl font-black"
                style={{
                  color: "#f43f5e",
                  animation: `rotateIn 0.5s ease ${i * 0.1}s both`,
                  display: "inline-block",
                }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent text */}
      <div className="mt-6 flex items-center gap-4">
        <div className="h-px flex-1" style={{ backgroundColor: "#222" }} />
        <p
          className="text-xs uppercase tracking-[0.5em]"
          style={{ color: "#333" }}
        >
          Words in Motion
        </p>
        <div className="h-px flex-1" style={{ backgroundColor: "#222" }} />
      </div>
    </div>
  );
}
