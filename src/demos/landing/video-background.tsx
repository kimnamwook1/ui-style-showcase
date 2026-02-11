"use client";

import { useState } from "react";

export default function VideoBackground() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-[400px] rounded-xl overflow-hidden relative flex flex-col">
      {/* Simulated video background - cinematic dark gradient with animated light streak */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 25%, #0a0a1a 50%, #0a1020 75%, #0a0a0a 100%)",
        }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />

      {/* Animated light streak */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[200%] h-[1px]"
          style={{
            top: "35%",
            left: "-50%",
            background: "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.06) 45%, rgba(255,200,100,0.1) 50%, rgba(255,255,255,0.06) 55%, transparent 60%, transparent 100%)",
            animation: "lightStreak 8s linear infinite",
          }}
        />
        <div
          className="absolute w-[200%] h-[1px]"
          style={{
            top: "65%",
            left: "-50%",
            background: "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.04) 35%, rgba(100,150,255,0.08) 40%, rgba(255,255,255,0.04) 45%, transparent 50%, transparent 100%)",
            animation: "lightStreak 12s linear infinite",
            animationDelay: "3s",
          }}
        />
        {/* Lens flare */}
        <div
          className="absolute w-32 h-32 rounded-full"
          style={{
            top: "20%",
            right: "25%",
            background: "radial-gradient(circle, rgba(255,180,100,0.05) 0%, transparent 70%)",
            animation: "lensFlare 6s ease-in-out infinite",
          }}
        />
      </div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Top bar - cinematic look */}
      <div className="relative z-10 flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider">
            {isPlaying ? "Now Playing" : "Preview"}
          </span>
        </div>
        <div className="text-[10px] font-mono text-gray-500">
          16:9 | 4K ULTRA HD
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Play button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="mb-6 group cursor-pointer"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              background: isPlaying
                ? "rgba(255,255,255,0.15)"
                : "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,255,255,0.2)",
              boxShadow: isPlaying
                ? "0 0 30px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.05)"
                : "0 0 20px rgba(255,255,255,0.05)",
            }}
          >
            {isPlaying ? (
              <div className="flex gap-1">
                <div className="w-1.5 h-5 rounded-sm bg-white" />
                <div className="w-1.5 h-5 rounded-sm bg-white" />
              </div>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </button>

        {/* Title */}
        <h1
          className="text-3xl font-bold mb-2 tracking-tight"
          style={{
            color: "#ffffff",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          Experience the Future
        </h1>

        <p
          className="text-sm max-w-sm leading-relaxed mb-6"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Immerse yourself in a cinematic journey through innovation and design.
          Every pixel tells a story.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <button
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-black transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ffffff, #e0e0e0)",
              boxShadow: "0 4px 20px rgba(255,255,255,0.15)",
            }}
          >
            Watch Now
          </button>
          <button
            className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom bar - timeline scrubber */}
      <div className="relative z-10 px-5 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-gray-500">0:00</span>
          <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div
              className="h-full rounded-full"
              style={{
                width: isPlaying ? "100%" : "0%",
                background: "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,180,100,0.8))",
                transition: isPlaying ? "width 15s linear" : "width 0.3s ease",
              }}
            />
          </div>
          <span className="text-[10px] font-mono text-gray-500">2:45</span>
        </div>

        {/* Subtitle area */}
        <div className="text-center mt-2">
          <span
            className="inline-block px-3 py-1 rounded text-[11px]"
            style={{
              background: "rgba(0,0,0,0.6)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {isPlaying ? "Where imagination meets reality..." : "Press play to begin"}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes lightStreak {
          0% { transform: translateX(-30%) rotate(2deg); }
          100% { transform: translateX(30%) rotate(2deg); }
        }
        @keyframes lensFlare {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
