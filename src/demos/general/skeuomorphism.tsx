"use client";

import { useState } from "react";

export default function SkeuomorphismDemo() {
  const [toggleOn, setToggleOn] = useState(false);
  const [knobAngle, setKnobAngle] = useState(0);
  const [sliderVal, setSliderVal] = useState(50);

  return (
    <div
      className="min-h-[400px] p-8 flex flex-col gap-6 font-serif"
      style={{
        background: "linear-gradient(180deg, #c9b99a 0%, #a8956e 100%)",
        backgroundImage: `linear-gradient(180deg, #c9b99a 0%, #a8956e 100%)`,
      }}
    >
      {/* Leather-textured header */}
      <div
        className="rounded-xl p-5 text-center"
        style={{
          background: "linear-gradient(145deg, #5a3d2b, #3e2a1c)",
          boxShadow: "inset 0 2px 4px rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.5), inset 0 -2px 3px rgba(0,0,0,0.3)",
          border: "1px solid #6b4c38",
        }}
      >
        <h1
          className="text-2xl font-bold tracking-wide"
          style={{
            color: "#d4a96a",
            textShadow: "0 1px 2px rgba(0,0,0,0.8), 0 0 10px rgba(212,169,106,0.2)",
          }}
        >
          Skeuomorphism
        </h1>
        <p className="text-sm mt-1" style={{ color: "#9a7e5f" }}>Realistic textures and depth</p>
      </div>

      <div className="flex gap-6 flex-1">
        {/* Metal panel with toggle and knob */}
        <div
          className="flex-1 rounded-xl p-6 flex flex-col gap-6"
          style={{
            background: "linear-gradient(180deg, #d8d8d8 0%, #b0b0b0 50%, #c0c0c0 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8), 0 4px 12px rgba(0,0,0,0.4), inset 0 -1px 0 rgba(0,0,0,0.2)",
            border: "1px solid #999",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-gray-600 font-sans font-bold">Control Panel</p>

          {/* Realistic Toggle */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-sans text-gray-700 font-medium">Power</span>
            <button
              onClick={() => setToggleOn(!toggleOn)}
              className="w-16 h-8 rounded-full relative cursor-pointer"
              style={{
                background: toggleOn
                  ? "linear-gradient(180deg, #4a9e4a, #3a7e3a)"
                  : "linear-gradient(180deg, #888, #666)",
                boxShadow: "inset 0 2px 6px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.3)",
                border: "1px solid #555",
              }}
            >
              <div
                className="absolute top-0.5 w-7 h-7 rounded-full transition-all duration-200"
                style={{
                  left: toggleOn ? "31px" : "1px",
                  background: "linear-gradient(180deg, #f5f5f5, #ccc)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8)",
                  border: "1px solid #aaa",
                }}
              />
            </button>
            <span className="text-xs font-sans" style={{ color: toggleOn ? "#3a7e3a" : "#888" }}>
              {toggleOn ? "ON" : "OFF"}
            </span>
          </div>

          {/* Knob */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-sans text-gray-700 font-medium">Volume</span>
            <button
              onClick={() => setKnobAngle((prev) => (prev + 30) % 360)}
              className="w-16 h-16 rounded-full cursor-pointer flex items-center justify-center"
              style={{
                background: "conic-gradient(from 0deg, #ddd, #999, #ddd, #999, #ddd)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.6), inset 0 -1px 2px rgba(0,0,0,0.2)",
                border: "2px solid #888",
                transform: `rotate(${knobAngle}deg)`,
                transition: "transform 0.2s ease",
              }}
            >
              <div
                className="w-1.5 h-6 rounded-full"
                style={{ background: "linear-gradient(180deg, #333, #666)", marginTop: "-8px" }}
              />
            </button>
            <span className="text-xs font-sans text-gray-600">{Math.round(knobAngle / 3.6)}%</span>
          </div>

          {/* Slider */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-sans text-gray-700 font-medium">Brightness</span>
            <div
              className="w-full h-3 rounded-full relative cursor-pointer"
              style={{
                background: "linear-gradient(180deg, #777, #999)",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4)",
                border: "1px solid #666",
              }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setSliderVal(Math.round(((e.clientX - rect.left) / rect.width) * 100));
              }}
            >
              <div
                className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
                style={{
                  left: `calc(${sliderVal}% - 12px)`,
                  background: "linear-gradient(180deg, #f0f0f0, #ccc)",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.9)",
                  border: "1px solid #aaa",
                }}
              />
            </div>
          </div>
        </div>

        {/* Wood-textured card */}
        <div
          className="w-64 rounded-xl p-6 flex flex-col gap-4"
          style={{
            background: "linear-gradient(135deg, #8B6914 0%, #A0782C 25%, #8B6914 50%, #A0782C 75%, #8B6914 100%)",
            backgroundSize: "20px 20px",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 12px rgba(0,0,0,0.5), inset 0 -2px 4px rgba(0,0,0,0.2)",
            border: "2px solid #6b4c14",
          }}
        >
          <p className="text-xs uppercase tracking-widest" style={{ color: "#d4b87a" }}>Notepad</p>

          {/* Paper note */}
          <div
            className="bg-[#fff8dc] rounded p-4 flex-1 font-sans text-sm text-gray-700"
            style={{
              boxShadow: "0 2px 8px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(0,0,0,0.05)",
              backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #e0d8c0 27px, #e0d8c0 28px)",
              lineHeight: "28px",
            }}
          >
            Skeuomorphic design mimics real-world materials and objects.
          </div>

          {/* Beveled buttons */}
          <div className="flex gap-2">
            {["Save", "Clear"].map((label) => (
              <button
                key={label}
                className="flex-1 py-2 rounded text-sm font-sans font-bold text-gray-800"
                style={{
                  background: "linear-gradient(180deg, #f5e6c8, #d4b87a)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.1)",
                  border: "1px solid #a08040",
                  textShadow: "0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
