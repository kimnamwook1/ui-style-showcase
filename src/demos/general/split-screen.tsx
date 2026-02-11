"use client";

import { useState } from "react";

export default function SplitScreenDemo() {
  const [activeTab, setActiveTab] = useState<"dark" | "light">("dark");
  const [email, setEmail] = useState("");
  const [toggled, setToggled] = useState(false);
  const [hoverSide, setHoverSide] = useState<string | null>(null);

  return (
    <div className="min-h-[400px] flex relative overflow-hidden">
      {/* Left half - Dark */}
      <div
        className="flex-1 p-8 flex flex-col justify-between relative transition-all duration-500"
        style={{
          backgroundColor: "#0a0a0a",
          flex: hoverSide === "left" ? "1.1" : hoverSide === "right" ? "0.9" : "1",
        }}
        onMouseEnter={() => setHoverSide("left")}
        onMouseLeave={() => setHoverSide(null)}
      >
        {/* Accent gradient */}
        <div
          className="absolute top-0 right-0 w-32 h-full opacity-30"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3))",
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-violet-500" />
            <span className="text-xs uppercase tracking-widest text-violet-400">Dark Mode</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Create</h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Embrace the darkness. Built for night owls and focused creators who thrive in low-light environments.
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-4">
          {/* Stats */}
          <div className="flex gap-6">
            <div>
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="text-xs text-gray-600">Eye comfort</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-violet-400">12h</p>
              <p className="text-xs text-gray-600">Avg. session</p>
            </div>
          </div>

          {/* Dark theme card */}
          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: "#141414", border: "1px solid #222" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#1f1f3a" }}>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M9,2 A7,7 0 1,0 9,16 A5,5 0 1,1 9,2" fill="#8b5cf6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Night Shift</p>
                <p className="text-xs text-gray-500">Reduces blue light</p>
              </div>
              <button
                onClick={() => setToggled(!toggled)}
                className="ml-auto w-10 h-5 rounded-full relative transition-colors duration-300"
                style={{ backgroundColor: toggled ? "#8b5cf6" : "#333" }}
              >
                <div
                  className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300"
                  style={{ left: toggled ? "22px" : "2px" }}
                />
              </button>
            </div>
          </div>

          <button
            className="py-2.5 text-sm font-medium text-white rounded-lg transition-colors"
            style={{ backgroundColor: "#8b5cf6" }}
          >
            Enter Dark Side
          </button>
        </div>
      </div>

      {/* Center divider */}
      <div className="w-px relative z-20 flex items-center">
        <div className="absolute inset-y-0 w-px" style={{ background: "linear-gradient(180deg, #0a0a0a, #8b5cf6 30%, #f59e0b 70%, #fafafa)" }} />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-30"
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #f59e0b)",
            boxShadow: "0 0 20px rgba(139,92,246,0.3)",
          }}
        >
          <span className="text-white text-xs font-bold">VS</span>
        </div>
      </div>

      {/* Right half - Light */}
      <div
        className="flex-1 p-8 flex flex-col justify-between relative transition-all duration-500"
        style={{
          backgroundColor: "#fafafa",
          flex: hoverSide === "right" ? "1.1" : hoverSide === "left" ? "0.9" : "1",
        }}
        onMouseEnter={() => setHoverSide("right")}
        onMouseLeave={() => setHoverSide(null)}
      >
        {/* Accent gradient */}
        <div
          className="absolute top-0 left-0 w-32 h-full opacity-20"
          style={{
            background: "linear-gradient(270deg, transparent, rgba(245,158,11,0.3))",
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-xs uppercase tracking-widest text-amber-600">Light Mode</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore</h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Let the light in. Designed for clarity, readability, and the natural warmth of a sunlit workspace.
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-4">
          {/* Stats */}
          <div className="flex gap-6">
            <div>
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-xs text-gray-400">Readability</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-500">A+</p>
              <p className="text-xs text-gray-400">Contrast</p>
            </div>
          </div>

          {/* Email input */}
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-lg text-sm outline-none transition-colors"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e5e5e5",
                color: "#333",
              }}
            />
            <button
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#f59e0b" }}
            >
              Join
            </button>
          </div>

          {/* Light theme card */}
          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#fef3c7" }}>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <circle cx="9" cy="9" r="4" fill="#f59e0b" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                    <line
                      key={a}
                      x1={9 + 6 * Math.cos((a * Math.PI) / 180)}
                      y1={9 + 6 * Math.sin((a * Math.PI) / 180)}
                      x2={9 + 8 * Math.cos((a * Math.PI) / 180)}
                      y2={9 + 8 * Math.sin((a * Math.PI) / 180)}
                      stroke="#f59e0b"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  ))}
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Daylight Mode</p>
                <p className="text-xs text-gray-400">Optimized for bright</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
