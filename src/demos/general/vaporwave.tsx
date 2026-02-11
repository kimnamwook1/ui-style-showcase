"use client";

import { useState } from "react";

export default function VaporwaveDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

  return (
    <div
      className="min-h-[400px] relative overflow-hidden font-sans"
      style={{
        background: "linear-gradient(180deg, #ff71ce 0%, #7b2ff7 40%, #0d0221 100%)",
      }}
    >
      {/* Grid floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: "linear-gradient(180deg, transparent 0%, #0d022180 30%)",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 30px",
            transform: "perspective(200px) rotateX(40deg)",
            transformOrigin: "bottom",
          }}
        />
      </div>

      {/* Sun */}
      <div
        className="absolute w-40 h-40 rounded-full"
        style={{
          background: "linear-gradient(180deg, #ff71ce, #ff9de2, #ffe66d)",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          boxShadow: "0 0 60px rgba(255,113,206,0.5)",
          clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 40%, 0 45%, 100% 45%, 100% 55%, 0 55%, 0 60%, 100% 60%, 100% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col gap-5 h-full">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm" style={{ color: "#00ffff" }}>
            ア エ ス テ テ ィ ッ ク
          </p>
          <h1
            className="text-5xl font-bold uppercase tracking-wider"
            style={{
              background: "linear-gradient(180deg, #00ffff, #ff71ce)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: glitchActive ? "3px 0 #ff00ff, -3px 0 #00ffff" : "none",
              fontFamily: "serif",
            }}
          >
            Vaporwave
          </h1>
          <p className="text-xs mt-1" style={{ color: "#ff9de2" }}>
            夢 ・ Dream ・ 夢
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-0">
          {["リラックス", "美学", "音楽"].map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="px-6 py-2 text-sm uppercase tracking-wider transition-all"
              style={{
                background: activeTab === i ? "rgba(0,255,255,0.15)" : "transparent",
                color: activeTab === i ? "#00ffff" : "#ff9de2",
                borderBottom: activeTab === i ? "2px solid #00ffff" : "2px solid transparent",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards row */}
        <div className="flex gap-4 flex-1">
          {/* Statue card */}
          <div
            className="flex-1 p-5 flex flex-col items-center justify-center gap-3"
            style={{
              background: "rgba(13,2,33,0.6)",
              border: "1px solid rgba(0,255,255,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="text-6xl">🏛️</span>
            <p className="text-lg font-bold" style={{ color: "#ff71ce" }}>Aesthetic</p>
            <p className="text-xs text-center" style={{ color: "#7b68ee" }}>
              It is not real. It was never real. That is why it is beautiful.
            </p>
            <button
              onClick={() => {
                setGlitchActive(true);
                setTimeout(() => setGlitchActive(false), 500);
              }}
              className="px-5 py-2 text-xs uppercase tracking-wider font-bold mt-2"
              style={{
                background: "linear-gradient(90deg, #ff71ce, #7b2ff7)",
                color: "#fff",
                border: "none",
              }}
            >
              ▶ Experience
            </button>
          </div>

          {/* Track list */}
          <div
            className="w-64 p-5 flex flex-col gap-3"
            style={{
              background: "rgba(13,2,33,0.7)",
              border: "1px solid rgba(255,113,206,0.2)",
            }}
          >
            <p className="text-xs uppercase tracking-wider font-bold" style={{ color: "#00ffff" }}>
              ♫ Now Playing
            </p>
            {[
              { title: "Macintosh Plus", time: "4:20" },
              { title: "Floral Shoppe", time: "3:15" },
              { title: "リサフランク420", time: "5:02" },
              { title: "Blank Banshee", time: "3:48" },
            ].map((track, i) => (
              <div
                key={track.title}
                className="flex items-center justify-between py-2 cursor-pointer"
                style={{ borderBottom: "1px solid rgba(0,255,255,0.1)" }}
              >
                <div className="flex items-center gap-2">
                  <span style={{ color: i === 0 ? "#00ffff" : "#7b68ee" }}>{i === 0 ? "▶" : "○"}</span>
                  <span className="text-sm" style={{ color: i === 0 ? "#ff71ce" : "#b388ff" }}>
                    {track.title}
                  </span>
                </div>
                <span className="text-xs" style={{ color: "#7b68ee" }}>{track.time}</span>
              </div>
            ))}

            {/* Volume slider look */}
            <div className="mt-auto">
              <div className="flex items-center gap-2">
                <span className="text-xs" style={{ color: "#00ffff" }}>♪</span>
                <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "#1a0a4e" }}>
                  <div className="h-full w-3/4 rounded-full" style={{ background: "linear-gradient(90deg, #00ffff, #ff71ce)" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Windows */}
          <div className="w-48 flex flex-col gap-3">
            <div
              className="p-4 text-center"
              style={{
                background: "rgba(0,255,255,0.05)",
                border: "1px solid rgba(0,255,255,0.3)",
              }}
            >
              <p className="text-3xl">🌴</p>
              <p className="text-xs mt-2" style={{ color: "#00ffff" }}>PARADISE</p>
            </div>
            <div
              className="p-4 flex flex-col items-center gap-2 flex-1"
              style={{
                background: "rgba(255,113,206,0.05)",
                border: "1px solid rgba(255,113,206,0.3)",
              }}
            >
              <p className="text-2xl">🗿</p>
              <p className="text-[10px] text-center" style={{ color: "#ff9de2" }}>
                古典的な美 Classical beauty transcends time
              </p>
              <input
                type="text"
                placeholder="Search the void..."
                className="w-full px-3 py-1.5 text-xs outline-none mt-auto"
                style={{
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid rgba(0,255,255,0.3)",
                  color: "#00ffff",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
