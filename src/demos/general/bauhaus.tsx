"use client";

import { useState } from "react";

export default function BauhausDemo() {
  const [activeShape, setActiveShape] = useState<"circle" | "triangle" | "square">("circle");
  const [rotation, setRotation] = useState(0);

  const colors = {
    red: "#e63946",
    blue: "#1d3557",
    yellow: "#f4d35e",
    black: "#1a1a1a",
    white: "#fafaf0",
  };

  return (
    <div
      className="min-h-[400px] p-8 flex flex-col gap-6 font-sans"
      style={{ background: colors.white, fontFamily: "'Helvetica Neue', Helvetica, sans-serif" }}
    >
      {/* Header with primary shapes */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Circle */}
          <button
            onClick={() => setActiveShape("circle")}
            className="w-10 h-10 rounded-full transition-transform"
            style={{
              background: colors.red,
              transform: activeShape === "circle" ? "scale(1.2)" : "scale(1)",
              outline: activeShape === "circle" ? `3px solid ${colors.black}` : "none",
              outlineOffset: "3px",
            }}
          />
          {/* Triangle */}
          <button
            onClick={() => setActiveShape("triangle")}
            style={{
              width: 0, height: 0,
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderBottom: `35px solid ${colors.yellow}`,
              transform: activeShape === "triangle" ? "scale(1.2)" : "scale(1)",
              transition: "transform 0.2s",
            }}
          />
          {/* Square */}
          <button
            onClick={() => setActiveShape("square")}
            className="w-10 h-10 transition-transform"
            style={{
              background: colors.blue,
              transform: activeShape === "square" ? "scale(1.2)" : "scale(1)",
              outline: activeShape === "square" ? `3px solid ${colors.black}` : "none",
              outlineOffset: "3px",
            }}
          />
        </div>
        <h1
          className="text-3xl font-bold uppercase tracking-widest"
          style={{ color: colors.black }}
        >
          Bauhaus
        </h1>
      </div>

      {/* Thick black line */}
      <div className="h-1" style={{ background: colors.black }} />

      {/* Functional layout grid */}
      <div className="flex gap-6 flex-1">
        {/* Left: Composition */}
        <div className="flex-1 relative flex items-center justify-center" style={{ background: "#f0ede4" }}>
          {/* Geometric composition */}
          <div
            className="relative w-48 h-48"
            style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.5s ease" }}
          >
            {/* Large circle */}
            <div
              className="absolute w-32 h-32 rounded-full"
              style={{ background: colors.red, top: 0, left: 0, opacity: 0.9 }}
            />
            {/* Square overlapping */}
            <div
              className="absolute w-24 h-24"
              style={{ background: colors.blue, top: "50px", left: "50px", opacity: 0.85 }}
            />
            {/* Triangle on top */}
            <div
              className="absolute"
              style={{
                width: 0, height: 0,
                borderLeft: "40px solid transparent",
                borderRight: "40px solid transparent",
                borderBottom: `70px solid ${colors.yellow}`,
                top: "20px",
                left: "60px",
                opacity: 0.9,
              }}
            />
            {/* Small accent circle */}
            <div
              className="absolute w-6 h-6 rounded-full"
              style={{ background: colors.black, bottom: "10px", right: "10px" }}
            />
          </div>
          <button
            onClick={() => setRotation(rotation + 90)}
            className="absolute bottom-4 right-4 px-4 py-2 text-xs uppercase tracking-wider font-bold"
            style={{ background: colors.black, color: colors.white }}
          >
            Rotate
          </button>
        </div>

        {/* Right: Functional content */}
        <div className="w-72 flex flex-col gap-4">
          {/* Shape info card */}
          <div
            className="p-5 flex flex-col gap-3"
            style={{
              background: activeShape === "circle" ? colors.red :
                activeShape === "triangle" ? colors.yellow : colors.blue,
              color: activeShape === "triangle" ? colors.black : colors.white,
              transition: "background 0.3s",
            }}
          >
            <p className="text-xs uppercase tracking-widest font-bold opacity-80">
              Selected: {activeShape}
            </p>
            <p className="text-sm leading-relaxed">
              {activeShape === "circle" && "The circle represents the infinite, the cosmic, and movement. In Bauhaus, it is paired with blue — but here, with red for vitality."}
              {activeShape === "triangle" && "The triangle is the most dynamic shape. It suggests direction, energy, and the active mind. Yellow amplifies its brightness."}
              {activeShape === "square" && "The square is stability, order, and rationality. Blue deepens its sense of calm logic and functional purpose."}
            </p>
          </div>

          {/* Form as functional element */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest font-bold" style={{ color: colors.black }}>
              Workshop Registration
            </p>
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2.5 text-sm outline-none"
              style={{
                background: "transparent",
                border: `2px solid ${colors.black}`,
                color: colors.black,
              }}
            />
            <div className="flex gap-3">
              <select
                className="flex-1 px-3 py-2.5 text-sm outline-none appearance-none cursor-pointer"
                style={{
                  background: "transparent",
                  border: `2px solid ${colors.black}`,
                  color: colors.black,
                }}
              >
                <option>Typography</option>
                <option>Form</option>
                <option>Color</option>
              </select>
              <button
                className="px-6 py-2.5 text-sm font-bold uppercase tracking-wider"
                style={{ background: colors.black, color: colors.white }}
              >
                Go
              </button>
            </div>
          </div>

          {/* Color palette display */}
          <div className="flex gap-0 mt-auto">
            {[colors.red, colors.yellow, colors.blue, colors.black].map((c) => (
              <div key={c} className="flex-1 h-8" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
