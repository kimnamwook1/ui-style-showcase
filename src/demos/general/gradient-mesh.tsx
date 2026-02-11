"use client";

import { useState } from "react";

export default function GradientMeshDemo() {
  const [activeBlob, setActiveBlob] = useState<number | null>(null);
  const [hue, setHue] = useState(0);

  const blobs = [
    { color: "#ff6b6b", x: "10%", y: "10%", size: 350 },
    { color: "#4ecdc4", x: "50%", y: "5%", size: 300 },
    { color: "#a855f7", x: "70%", y: "40%", size: 400 },
    { color: "#fbbf24", x: "20%", y: "50%", size: 280 },
    { color: "#60a5fa", x: "40%", y: "60%", size: 350 },
    { color: "#f472b6", x: "75%", y: "70%", size: 300 },
  ];

  return (
    <div className="min-h-[400px] relative overflow-hidden font-sans" style={{ background: "#f5f0ff" }}>
      {/* Gradient blobs */}
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${blob.color}90, ${blob.color}20, transparent 70%)`,
            width: blob.size + (activeBlob === i ? 60 : 0),
            height: blob.size + (activeBlob === i ? 60 : 0),
            left: blob.x,
            top: blob.y,
            transform: "translate(-50%, -50%)",
            filter: `blur(40px) hue-rotate(${hue}deg)`,
            mixBlendMode: "multiply",
          }}
        />
      ))}

      {/* Background noise overlay for texture */}
      <div className="absolute inset-0 opacity-50" style={{ background: "rgba(255,255,255,0.3)" }} />

      {/* Content layer */}
      <div className="relative z-10 p-8 flex flex-col gap-6 h-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800/90">Gradient Mesh</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Hue Shift</span>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(Number(e.target.value))}
              className="w-32 accent-purple-500"
            />
          </div>
        </div>

        {/* Blob controls */}
        <div className="flex gap-3">
          {blobs.map((blob, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveBlob(i)}
              onMouseLeave={() => setActiveBlob(null)}
              className="w-10 h-10 rounded-full border-2 border-white/80 transition-transform hover:scale-110"
              style={{
                background: blob.color,
                boxShadow: activeBlob === i ? `0 0 20px ${blob.color}` : "0 2px 8px rgba(0,0,0,0.1)",
                filter: `hue-rotate(${hue}deg)`,
              }}
            />
          ))}
        </div>

        {/* Cards */}
        <div className="flex gap-4 flex-1">
          <div
            className="flex-1 rounded-2xl p-6 flex flex-col justify-between"
            style={{
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.8)",
            }}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800/80">Complex Transitions</h3>
              <p className="text-sm text-gray-600/80 mt-2 leading-relaxed">
                Multiple overlapping gradient blobs create organic, flowing color transitions that feel alive and dynamic.
              </p>
            </div>
            <div className="flex gap-3 mt-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="flex-1 h-16 rounded-xl"
                  style={{
                    background: `linear-gradient(${n * 45}deg, ${blobs[n % blobs.length].color}60, ${blobs[(n + 2) % blobs.length].color}60)`,
                    filter: `hue-rotate(${hue}deg)`,
                    backdropFilter: "blur(10px)",
                  }}
                />
              ))}
            </div>
          </div>

          <div
            className="w-72 rounded-2xl p-6 flex flex-col gap-4"
            style={{
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.7)",
            }}
          >
            <h3 className="text-sm font-semibold text-gray-700/80">Color Palette</h3>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {blobs.map((blob, i) => (
                <div
                  key={i}
                  className="rounded-xl flex items-end p-3 cursor-pointer transition-transform hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${blob.color}80, ${blob.color}30)`,
                    filter: `hue-rotate(${hue}deg)`,
                  }}
                >
                  <span className="text-[10px] font-mono text-white/80 bg-black/20 px-1.5 py-0.5 rounded">
                    {blob.color}
                  </span>
                </div>
              ))}
            </div>
            <button
              className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
              style={{
                background: `linear-gradient(135deg, ${blobs[0].color}, ${blobs[2].color})`,
                filter: `hue-rotate(${hue}deg)`,
              }}
            >
              Apply Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
