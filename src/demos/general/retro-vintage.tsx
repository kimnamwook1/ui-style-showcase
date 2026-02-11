"use client";

import { useState } from "react";

export default function RetroVintageDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [stampRotation, setStampRotation] = useState(-12);

  return (
    <div
      className="min-h-[400px] p-8 flex flex-col gap-6"
      style={{
        background: "linear-gradient(180deg, #f5e6c8, #e8d5a3)",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        color: "#5c3d2e",
      }}
    >
      {/* Ornamental Header */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.5em]" style={{ color: "#8b7355" }}>
          ✦ Established MMXXIV ✦
        </p>
        <h1
          className="text-4xl font-bold mt-2 tracking-wide"
          style={{ color: "#3d2b1f", textShadow: "1px 1px 0 rgba(255,255,255,0.3)" }}
        >
          Retro & Vintage
        </h1>
        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-px w-16" style={{ background: "#8b7355" }} />
          <span style={{ color: "#8b7355" }}>❧</span>
          <div className="h-px w-16" style={{ background: "#8b7355" }} />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-1">
        {["Emporium", "Gazette", "Parlour"].map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className="px-5 py-2 text-sm uppercase tracking-wider transition-all"
            style={{
              backgroundColor: activeTab === i ? "#3d2b1f" : "transparent",
              color: activeTab === i ? "#f5e6c8" : "#5c3d2e",
              border: "1px solid #8b7355",
              borderBottom: activeTab === i ? "1px solid #3d2b1f" : "1px solid #8b7355",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-6 flex-1">
        {/* Main Content Card */}
        <div
          className="flex-1 p-6 flex flex-col gap-4"
          style={{
            background: "#faf0dc",
            border: "2px solid #8b7355",
            boxShadow: "4px 4px 0 #8b7355",
          }}
        >
          {/* Inner ornamental border */}
          <div
            className="p-5 flex flex-col gap-3 flex-1"
            style={{
              border: "1px solid #c9b88c",
              borderImage: "repeating-linear-gradient(45deg, #c9b88c, #c9b88c 2px, transparent 2px, transparent 6px) 10",
            }}
          >
            <h2 className="text-xl font-bold" style={{ color: "#3d2b1f" }}>The Art of Timelessness</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#6b5344" }}>
              In the grand tradition of fine craftsmanship, vintage design speaks to an era of meticulous attention to detail.
              Every ornament tells a story; every serif carries weight and meaning.
            </p>
            <div className="flex gap-3 mt-2">
              <button
                className="px-4 py-2 text-xs uppercase tracking-wider font-bold"
                style={{
                  background: "#3d2b1f",
                  color: "#f5e6c8",
                  border: "1px solid #5c3d2e",
                }}
              >
                Read More
              </button>
              <button
                className="px-4 py-2 text-xs uppercase tracking-wider font-bold"
                style={{
                  background: "transparent",
                  color: "#3d2b1f",
                  border: "1px solid #3d2b1f",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Vintage input */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your correspondence..."
              className="flex-1 px-4 py-2 text-sm outline-none"
              style={{
                background: "#fff8e7",
                border: "1px solid #c9b88c",
                color: "#3d2b1f",
                fontFamily: "inherit",
              }}
            />
            <button
              className="px-4 text-xs uppercase tracking-wider font-bold"
              style={{ background: "#8b4513", color: "#f5e6c8", border: "1px solid #6b3410" }}
            >
              Send
            </button>
          </div>
        </div>

        {/* Right Column: Badge + Stamp */}
        <div className="w-60 flex flex-col gap-4">
          {/* Vintage Badge */}
          <div
            className="p-6 flex flex-col items-center gap-2 text-center"
            style={{
              background: "#3d2b1f",
              border: "3px double #8b7355",
              color: "#f5e6c8",
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.4em]">Premium Quality</p>
            <div className="text-3xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>
              ★ A+ ★
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em]">Guaranteed Excellence</p>
            <div className="w-full h-px mt-2" style={{ background: "#8b7355" }} />
            <p className="text-[9px] uppercase tracking-widest mt-1" style={{ color: "#b8a07e" }}>Since 1924</p>
          </div>

          {/* Stamp */}
          <button
            onClick={() => setStampRotation(stampRotation === -12 ? -8 : -12)}
            className="p-5 flex flex-col items-center gap-1 cursor-pointer"
            style={{
              border: `3px solid #8b4513`,
              borderRadius: "50%",
              color: "#8b4513",
              transform: `rotate(${stampRotation}deg)`,
              transition: "transform 0.3s ease",
              background: "transparent",
            }}
          >
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold">Approved</p>
            <p className="text-lg font-bold">VINTAGE</p>
            <p className="text-[9px] uppercase tracking-[0.3em]">Authentic</p>
          </button>

          {/* Price tag */}
          <div
            className="p-4 text-center"
            style={{
              background: "#fff8e7",
              border: "1px dashed #8b7355",
              transform: "rotate(1deg)",
            }}
          >
            <p className="text-[10px] uppercase tracking-wider" style={{ color: "#8b7355" }}>Special Offer</p>
            <p className="text-2xl font-bold mt-1" style={{ color: "#8b4513" }}>$19.99</p>
            <p className="text-[10px] line-through" style={{ color: "#aaa" }}>$49.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
