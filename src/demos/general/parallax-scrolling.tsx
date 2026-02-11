"use client";

import { useState } from "react";

export default function ParallaxScrollingDemo() {
  const [scrollHint, setScrollHint] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="min-h-[400px] relative overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
      {/* Sky layer (background) */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a1628 0%, #1a2a4a 30%, #2d4a7a 60%, #e8956b 85%, #f4c27a 100%)",
        }}
      />

      {/* Stars layer */}
      <div className="absolute inset-0">
        {[
          { x: 10, y: 8, s: 2 },
          { x: 25, y: 15, s: 1.5 },
          { x: 45, y: 5, s: 2.5 },
          { x: 60, y: 12, s: 1 },
          { x: 75, y: 8, s: 2 },
          { x: 85, y: 18, s: 1.5 },
          { x: 35, y: 22, s: 1 },
          { x: 55, y: 25, s: 2 },
          { x: 15, y: 28, s: 1.5 },
          { x: 90, y: 5, s: 1 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.s}px`,
              height: `${star.s}px`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Distant mountains (back layer) */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        style={{ height: "65%", opacity: 0.5 }}
      >
        <path
          d="M0,300 L0,180 Q100,100 200,160 Q300,80 400,140 Q500,60 600,120 Q700,50 800,130 Q900,70 1000,150 Q1100,90 1200,170 L1200,300 Z"
          fill="#1a2a4a"
        />
      </svg>

      {/* Mid mountains */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        style={{ height: "55%", opacity: 0.7 }}
      >
        <path
          d="M0,300 L0,200 Q80,140 160,180 Q250,100 350,160 Q450,80 550,150 Q650,90 750,140 Q850,70 950,160 Q1050,100 1150,170 L1200,190 L1200,300 Z"
          fill="#2a3a5a"
        />
      </svg>

      {/* Near mountains (front layer) */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        style={{ height: "45%" }}
      >
        <path
          d="M0,300 L0,220 Q100,170 200,210 Q300,150 400,200 Q500,160 600,190 Q700,140 800,200 Q900,170 1000,210 Q1100,180 1200,220 L1200,300 Z"
          fill="#1a2535"
        />
      </svg>

      {/* Ground layer */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: "25%",
          background: "linear-gradient(180deg, #1a2535 0%, #0d1520 100%)",
        }}
      />

      {/* Trees silhouette */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        style={{ height: "30%" }}
      >
        {[80, 180, 320, 500, 650, 780, 900, 1050, 1150].map((x, i) => {
          const h = 60 + (i % 3) * 25;
          return (
            <path
              key={i}
              d={`M${x},200 L${x},${200 - h} L${x - 12},${200 - h + 20} L${x - 6},${200 - h + 15} L${x - 18},${200 - h + 40} L${x - 10},${200 - h + 35} L${x - 22},${200 - h + 60} L${x + 22},${200 - h + 60} L${x + 10},${200 - h + 35} L${x + 18},${200 - h + 40} L${x + 6},${200 - h + 15} L${x + 12},${200 - h + 20} L${x},${200 - h} Z`}
              fill="#0d1520"
            />
          );
        })}
      </svg>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] text-center px-6">
        <span className="text-xs uppercase tracking-[0.4em] text-amber-300/60 mb-3">
          Parallax Experience
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
          Depth & Motion
        </h1>
        <p className="text-sm text-white/60 max-w-md mb-8">
          Layered landscapes create a sense of depth. As you scroll, each layer moves at a different speed.
        </p>

        {/* Navigation dots */}
        <div className="flex gap-3 mb-6">
          {["Summit", "Valley", "Forest"].map((name, i) => (
            <button
              key={name}
              onClick={() => setActiveSection(i)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-all duration-300"
              style={{
                backgroundColor: activeSection === i ? "rgba(255,255,255,0.2)" : "transparent",
                color: activeSection === i ? "#f4c27a" : "rgba(255,255,255,0.4)",
                border: `1px solid ${activeSection === i ? "rgba(244,194,122,0.4)" : "rgba(255,255,255,0.1)"}`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full transition-colors"
                style={{
                  backgroundColor: activeSection === i ? "#f4c27a" : "rgba(255,255,255,0.3)",
                }}
              />
              {name}
            </button>
          ))}
        </div>

        {/* Depth info */}
        <div className="flex gap-8">
          {[
            { label: "Layers", value: "5" },
            { label: "Depth", value: "3D" },
            { label: "Speed", value: "0.5x" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-lg font-bold" style={{ color: "#f4c27a" }}>
                {item.value}
              </p>
              <p className="text-xs text-white/40 uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      {scrollHint && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
          onClick={() => setScrollHint(false)}
        >
          <span className="text-xs text-white/40 uppercase tracking-wider">Scroll</span>
          <div
            className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1"
          >
            <div
              className="w-1 h-2 rounded-full bg-white/60"
              style={{
                animation: "parallaxBounce 1.5s infinite",
              }}
            />
          </div>
          <style>{`
            @keyframes parallaxBounce {
              0%, 100% { transform: translateY(0); opacity: 1; }
              50% { transform: translateY(6px); opacity: 0.3; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
