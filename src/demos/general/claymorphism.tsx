"use client";

import { useState } from "react";

export default function ClaymorphismDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [likes, setLikes] = useState(42);
  const [liked, setLiked] = useState(false);
  const [toggled, setToggled] = useState(false);

  const clayStyle = (color: string) => ({
    background: color,
    borderRadius: "24px",
    boxShadow: `inset -4px -4px 8px rgba(0,0,0,0.15), inset 4px 4px 8px rgba(255,255,255,0.4), 8px 8px 20px rgba(0,0,0,0.1)`,
    border: "1px solid rgba(255,255,255,0.3)",
  });

  return (
    <div
      className="min-h-[400px] p-8 flex flex-col gap-6 font-sans"
      style={{ background: "linear-gradient(135deg, #fce4ec, #e8eaf6, #e0f7fa)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 flex items-center justify-center text-2xl"
            style={clayStyle("#ff9eb5")}
          >
            🧸
          </div>
          <h1 className="text-2xl font-bold text-[#5c5470]">Claymorphism</h1>
        </div>
        {/* Tab pills */}
        <div className="flex gap-2 p-1.5" style={clayStyle("#e8eaf6")}>
          {["Home", "Cards", "Forms"].map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="px-4 py-2 text-sm font-semibold transition-all"
              style={
                activeTab === i
                  ? { ...clayStyle("#c5cae9"), color: "#3949ab" }
                  : { borderRadius: "20px", color: "#9e9e9e" }
              }
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex gap-6 flex-1">
        {/* Profile card */}
        <div className="flex flex-col items-center gap-4 p-6" style={clayStyle("#fff3e0")}>
          <div
            className="w-20 h-20 flex items-center justify-center text-4xl"
            style={clayStyle("#ffcc80")}
          >
            😊
          </div>
          <h3 className="font-bold text-[#5c5470]">Clay User</h3>
          <p className="text-sm text-[#9e9e9e] text-center">Soft, touchable, and 3D</p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setLiked(!liked);
                setLikes(liked ? likes - 1 : likes + 1);
              }}
              className="px-4 py-2 text-sm font-bold flex items-center gap-2 transition-all"
              style={clayStyle(liked ? "#ef9a9a" : "#f8bbd0")}
            >
              {liked ? "♥" : "♡"} {likes}
            </button>
            <button
              className="px-4 py-2 text-sm font-bold"
              style={clayStyle("#b39ddb")}
            >
              Follow
            </button>
          </div>
        </div>

        {/* Stats grid */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              { emoji: "🎨", label: "Design", value: "98", bg: "#c8e6c9" },
              { emoji: "📊", label: "Stats", value: "2.4k", bg: "#bbdefb" },
              { emoji: "⚡", label: "Speed", value: "Fast", bg: "#ffe0b2" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 flex flex-col items-center gap-2"
                style={clayStyle(item.bg)}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-xs font-medium text-[#9e9e9e]">{item.label}</span>
                <span className="text-lg font-bold text-[#5c5470]">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Form area */}
          <div className="p-5 flex flex-col gap-4 flex-1" style={clayStyle("#f3e5f5")}>
            <h3 className="font-bold text-[#5c5470]">Quick Input</h3>
            <input
              type="text"
              placeholder="Type something soft..."
              className="w-full px-4 py-3 text-sm outline-none text-[#5c5470] placeholder:text-[#bbb]"
              style={{
                ...clayStyle("#ffffff"),
                boxShadow: "inset 2px 2px 6px rgba(0,0,0,0.08), inset -2px -2px 6px rgba(255,255,255,0.8)",
              }}
            />
            <div className="flex items-center justify-between">
              {/* Toggle */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#9e9e9e]">Squishy mode</span>
                <button
                  onClick={() => setToggled(!toggled)}
                  className="w-14 h-8 relative"
                  style={clayStyle(toggled ? "#a5d6a7" : "#e0e0e0")}
                >
                  <div
                    className="absolute top-1 w-6 h-6 transition-all duration-300"
                    style={{
                      ...clayStyle(toggled ? "#66bb6a" : "#bdbdbd"),
                      left: toggled ? "28px" : "4px",
                    }}
                  />
                </button>
              </div>
              <button
                className="px-6 py-2.5 text-sm font-bold text-white"
                style={clayStyle("#7986cb")}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
