"use client";

import { useState } from "react";

export default function FullscreenVideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(35);
  const [showControls, setShowControls] = useState(true);

  return (
    <div
      className="min-h-[400px] relative overflow-hidden cursor-pointer"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #1a1a3e 0%, #0a0a1a 50%, #000 100%)",
      }}
      onClick={() => setShowControls(!showControls)}
    >
      {/* Cinematic bars */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-black z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-black z-20" />

      {/* Simulated video gradient layers */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 60%, rgba(99,102,241,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 40%, rgba(244,63,94,0.3) 0%, transparent 40%)",
        }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] z-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] px-6">
        {/* Play button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(!isPlaying);
          }}
          className="mb-8 transition-all duration-300 hover:scale-110"
          style={{
            opacity: showControls || !isPlaying ? 1 : 0,
          }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            {isPlaying ? (
              <div className="flex gap-1.5">
                <div className="w-2 h-6 bg-white rounded-sm" />
                <div className="w-2 h-6 bg-white rounded-sm" />
              </div>
            ) : (
              <svg width="28" height="32" viewBox="0 0 28 32" className="ml-1">
                <path d="M2,0 L26,16 L2,32 Z" fill="white" />
              </svg>
            )}
          </div>
        </button>

        {/* Title */}
        <div className="text-center mb-2">
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 block mb-2">
            Now {isPlaying ? "Playing" : "Showing"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Cinematic Vision
          </h1>
          <p className="text-white/50 text-sm mt-3 max-w-md mx-auto">
            A full-screen immersive video experience. Let the story unfold in breathtaking detail.
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4">
          {["4K Ultra HD", "Dolby Atmos", "HDR10+"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom controls */}
      <div
        className="absolute bottom-10 left-0 right-0 z-30 px-8 transition-opacity duration-300"
        style={{ opacity: showControls ? 1 : 0 }}
      >
        {/* Progress bar */}
        <div
          className="w-full h-1 rounded-full mb-4 cursor-pointer group relative"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          onClick={(e) => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = ((e.clientX - rect.left) / rect.width) * 100;
            setProgress(Math.max(0, Math.min(100, pct)));
          }}
        >
          <div
            className="h-full rounded-full relative transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #6366f1, #f43f5e)",
            }}
          >
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: "0 0 6px rgba(255,255,255,0.5)" }}
            />
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play/pause */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(!isPlaying);
              }}
              className="text-white hover:text-white/80 transition-colors"
            >
              {isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <rect x="2" y="1" width="4" height="14" rx="1" fill="currentColor" />
                  <rect x="10" y="1" width="4" height="14" rx="1" fill="currentColor" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path d="M3,1 L14,8 L3,15 Z" fill="currentColor" />
                </svg>
              )}
            </button>

            {/* Skip */}
            <button
              onClick={(e) => e.stopPropagation()}
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M1,1 L8,8 L1,15 Z M8,1 L15,8 L8,15 Z" fill="currentColor" />
              </svg>
            </button>

            {/* Volume */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M1,6 L4,6 L8,2 L8,14 L4,10 L1,10 Z" fill="currentColor" />
                {!isMuted && (
                  <>
                    <path d="M10,5 Q13,8 10,11" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M11,3 Q15,8 11,13" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </>
                )}
                {isMuted && (
                  <path d="M10,5 L15,11 M15,5 L10,11" stroke="currentColor" strokeWidth="1.5" />
                )}
              </svg>
            </button>

            <span className="text-xs text-white/40 font-mono">
              01:{Math.floor(progress * 0.6).toString().padStart(2, "0")} / 03:24
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* CC */}
            <button
              onClick={(e) => e.stopPropagation()}
              className="text-xs px-2 py-0.5 border border-white/30 text-white/60 hover:text-white hover:border-white/60 transition-colors rounded"
            >
              CC
            </button>
            {/* Fullscreen */}
            <button
              onClick={(e) => e.stopPropagation()}
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M1,5 L1,1 L5,1 M11,1 L15,1 L15,5 M15,11 L15,15 L11,15 M5,15 L1,15 L1,11" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
