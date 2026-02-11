"use client";

import { useState } from "react";

export default function CollageMixedMediaDemo() {
  const [activeBlock, setActiveBlock] = useState<number | null>(null);
  const [liked, setLiked] = useState<boolean[]>([false, false, false, false]);

  const toggleLike = (i: number) => {
    const next = [...liked];
    next[i] = !next[i];
    setLiked(next);
  };

  return (
    <div
      className="min-h-[400px] relative overflow-hidden p-6"
      style={{
        backgroundColor: "#f5f0eb",
        backgroundImage:
          "radial-gradient(circle at 20% 80%, rgba(220,80,60,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(40,60,150,0.08) 0%, transparent 50%)",
      }}
    >
      {/* Pattern overlay strip */}
      <div
        className="absolute top-0 right-0 w-32 h-full opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 8px)",
        }}
      />

      {/* Editorial header */}
      <div className="relative z-10 mb-6">
        <span
          className="text-xs uppercase tracking-[0.3em] block mb-1"
          style={{ color: "#dc503c" }}
        >
          Issue No. 47
        </span>
        <h1
          className="text-4xl font-bold leading-none"
          style={{
            fontFamily: "Georgia, serif",
            color: "#1a1a2e",
            mixBlendMode: "multiply",
          }}
        >
          Mixed Media
        </h1>
        <div
          className="w-24 h-1 mt-2"
          style={{ backgroundColor: "#dc503c" }}
        />
      </div>

      {/* Collage grid */}
      <div className="relative z-10 flex gap-4 flex-wrap">
        {/* Block 1 - Large photo block */}
        <div
          className="relative w-56 h-52 cursor-pointer transition-transform duration-300"
          style={{
            transform: `rotate(-3deg) ${activeBlock === 0 ? "scale(1.05)" : "scale(1)"}`,
          }}
          onClick={() => setActiveBlock(activeBlock === 0 ? null : 0)}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #2d3561 0%, #1a1a2e 100%)",
            }}
          />
          {/* Halftone pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "6px 6px",
            }}
          />
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            <span className="text-white text-xs uppercase tracking-wider opacity-70">
              Photograph 01
            </span>
            <p className="text-white text-lg font-bold mt-1" style={{ fontFamily: "Georgia, serif" }}>
              Urban Layers
            </p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); toggleLike(0); }}
            className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
            style={{
              backgroundColor: liked[0] ? "#dc503c" : "rgba(255,255,255,0.2)",
            }}
          >
            <span className="text-white text-xs">{liked[0] ? "\u2665" : "\u2661"}</span>
          </button>
        </div>

        {/* Block 2 - Pattern block */}
        <div
          className="w-40 h-40 relative cursor-pointer transition-transform duration-300"
          style={{
            transform: `rotate(2deg) translateY(20px) ${activeBlock === 1 ? "scale(1.05)" : "scale(1)"}`,
            background:
              "repeating-conic-gradient(#dc503c 0% 25%, #f5f0eb 0% 50%) 0 0 / 20px 20px",
          }}
          onClick={() => setActiveBlock(activeBlock === 1 ? null : 1)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-2xl font-bold px-2 py-1"
              style={{
                backgroundColor: "#f5f0eb",
                color: "#1a1a2e",
                fontFamily: "Georgia, serif",
                mixBlendMode: "multiply",
              }}
            >
              ART
            </span>
          </div>
        </div>

        {/* Block 3 - Text cutout */}
        <div
          className="w-44 h-48 p-4 flex flex-col justify-between cursor-pointer transition-transform duration-300"
          style={{
            backgroundColor: "#ffd166",
            transform: `rotate(-1deg) translateY(-10px) ${activeBlock === 2 ? "scale(1.05)" : "scale(1)"}`,
            boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
          }}
          onClick={() => setActiveBlock(activeBlock === 2 ? null : 2)}
        >
          <p
            className="text-sm leading-snug"
            style={{
              fontFamily: "Georgia, serif",
              color: "#1a1a2e",
            }}
          >
            &ldquo;Art is not what you see, but what you make others see.&rdquo;
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: "#1a1a2e", opacity: 0.6 }}>
              &mdash; Degas
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); toggleLike(2); }}
              className="text-xs"
              style={{ color: liked[2] ? "#dc503c" : "#1a1a2e" }}
            >
              {liked[2] ? "\u2665" : "\u2661"}
            </button>
          </div>
        </div>

        {/* Block 4 - Dark photo block overlapping */}
        <div
          className="w-36 h-44 relative cursor-pointer transition-transform duration-300"
          style={{
            transform: `rotate(4deg) translate(-30px, 10px) ${activeBlock === 3 ? "scale(1.05)" : "scale(1)"}`,
            background: "linear-gradient(180deg, #81b29a 0%, #3d405b 100%)",
          }}
          onClick={() => setActiveBlock(activeBlock === 3 ? null : 3)}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.3) 4px, rgba(255,255,255,0.3) 5px)",
            }}
          />
          <div className="absolute bottom-3 left-3 right-3">
            <span className="text-white text-xs tracking-wider">No. 03</span>
            <p className="text-white text-sm font-bold mt-1" style={{ fontFamily: "Georgia, serif" }}>
              Texture Study
            </p>
          </div>
        </div>

        {/* Tape decoration */}
        <div
          className="absolute top-16 left-48 w-20 h-6 opacity-40 z-20"
          style={{
            backgroundColor: "rgba(200,180,140,0.7)",
            transform: "rotate(45deg)",
          }}
        />
      </div>

      {/* Bottom editorial bar */}
      <div
        className="relative z-10 mt-8 flex items-center justify-between py-4"
        style={{ borderTop: "2px solid #1a1a2e" }}
      >
        <div className="flex gap-4">
          {["All", "Photos", "Patterns", "Type"].map((tab, i) => (
            <button
              key={tab}
              className="text-xs uppercase tracking-wider transition-colors duration-200 pb-1"
              style={{
                color: i === 0 ? "#dc503c" : "#1a1a2e",
                borderBottom: i === 0 ? "1px solid #dc503c" : "1px solid transparent",
                fontFamily: "Georgia, serif",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#dc503c" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffd166" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#81b29a" }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#3d405b" }} />
        </div>
      </div>

      {/* Scattered stamps/stickers */}
      <div
        className="absolute bottom-4 right-6 w-16 h-16 rounded-full border-2 flex items-center justify-center z-10"
        style={{
          borderColor: "#dc503c",
          transform: "rotate(-15deg)",
        }}
      >
        <span
          className="text-xs text-center uppercase leading-tight font-bold"
          style={{ color: "#dc503c" }}
        >
          Mixed<br />Media
        </span>
      </div>
    </div>
  );
}
