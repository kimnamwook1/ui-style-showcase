"use client";

import { useState } from "react";

export default function IllustratedHandDrawnDemo() {
  const [activeNote, setActiveNote] = useState(0);
  const [checked, setChecked] = useState([false, true, false, true]);

  const notes = ["Welcome!", "Ideas", "To-Do"];

  const toggleCheck = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  return (
    <div
      className="min-h-[400px] p-8 font-serif relative overflow-hidden"
      style={{
        backgroundColor: "#fdf6e3",
        backgroundImage:
          "repeating-linear-gradient(transparent, transparent 31px, #e8dcc8 31px, #e8dcc8 32px)",
      }}
    >
      {/* SVG filters for hand-drawn effect */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="sketchy">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.03"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Header with wavy underline */}
      <div className="relative mb-8">
        <h1
          className="text-3xl font-bold"
          style={{ color: "#5c4033", fontFamily: "Georgia, serif" }}
        >
          My Notebook
        </h1>
        <svg
          width="200"
          height="12"
          viewBox="0 0 200 12"
          className="mt-1"
        >
          <path
            d="M0,6 Q10,0 20,6 T40,6 T60,6 T80,6 T100,6 T120,6 T140,6 T160,6 T180,6 T200,6"
            fill="none"
            stroke="#e07a5f"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        {/* Doodle star */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="absolute top-0 right-4"
        >
          <path
            d="M16,2 L19,12 L30,12 L21,18 L24,28 L16,22 L8,28 L11,18 L2,12 L13,12 Z"
            fill="none"
            stroke="#e07a5f"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Tab navigation (notebook tabs) */}
      <div className="flex gap-2 mb-6">
        {notes.map((note, i) => (
          <button
            key={note}
            onClick={() => setActiveNote(i)}
            className="px-4 py-2 text-sm transition-all duration-200 relative"
            style={{
              backgroundColor: activeNote === i ? "#fff8ee" : "transparent",
              color: "#5c4033",
              border: "2px solid #c4a882",
              borderBottom: activeNote === i ? "2px solid #fff8ee" : "2px solid #c4a882",
              borderRadius: "8px 8px 0 0",
              fontFamily: "Georgia, serif",
              filter: "url(#sketchy)",
              transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
            }}
          >
            {note}
          </button>
        ))}
      </div>

      <div className="flex gap-6 flex-wrap">
        {/* Main content card */}
        <div
          className="flex-1 min-w-[280px] p-6 relative"
          style={{
            backgroundColor: "#fff8ee",
            border: "2px solid #c4a882",
            borderRadius: "4px",
            transform: "rotate(-0.5deg)",
            boxShadow: "3px 3px 0 #e8dcc8",
          }}
        >
          {/* Doodle corner */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="absolute top-2 right-2"
          >
            <path
              d="M5,35 Q20,20 35,5"
              fill="none"
              stroke="#c4a882"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <circle cx="35" cy="5" r="3" fill="#e07a5f" />
          </svg>

          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "#5c4033", fontFamily: "Georgia, serif" }}
          >
            {activeNote === 0
              ? "Welcome to my notebook!"
              : activeNote === 1
              ? "Brilliant Ideas"
              : "Things to do"}
          </h2>

          {activeNote === 2 ? (
            <div className="flex flex-col gap-3">
              {["Buy colored pencils", "Sketch the park", "Write a letter", "Read a chapter"].map(
                (item, i) => (
                  <button
                    key={i}
                    onClick={() => toggleCheck(i)}
                    className="flex items-center gap-3 text-left group"
                  >
                    <div
                      className="w-5 h-5 flex items-center justify-center"
                      style={{
                        border: "2px solid #c4a882",
                        borderRadius: "3px",
                        backgroundColor: checked[i] ? "#e07a5f" : "transparent",
                      }}
                    >
                      {checked[i] && (
                        <svg width="12" height="12" viewBox="0 0 12 12">
                          <path
                            d="M2,6 L5,9 L10,3"
                            fill="none"
                            stroke="#fff8ee"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className="text-sm"
                      style={{
                        color: "#5c4033",
                        textDecoration: checked[i] ? "line-through" : "none",
                        opacity: checked[i] ? 0.5 : 1,
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      {item}
                    </span>
                  </button>
                )
              )}
            </div>
          ) : (
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#7a6555", fontFamily: "Georgia, serif" }}
            >
              {activeNote === 0
                ? "This is your creative space. Jot down thoughts, doodle ideas, and let your imagination wander across the pages. Every great idea starts with a single sketch."
                : "Sometimes the best ideas come when you least expect them. Keep a pencil handy and let your mind wander freely through the margins."}
            </p>
          )}

          {/* Doodle divider */}
          <svg width="100%" height="16" viewBox="0 0 300 16" className="mt-4" preserveAspectRatio="none">
            <path
              d="M0,8 Q15,2 30,8 T60,8 T90,8 T120,8 T150,8 T180,8 T210,8 T240,8 T270,8 T300,8"
              fill="none"
              stroke="#e8dcc8"
              strokeWidth="2"
            />
          </svg>

          {/* Input area */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Add a note..."
              className="w-full bg-transparent border-b-2 py-2 text-sm outline-none"
              style={{
                borderColor: "#c4a882",
                color: "#5c4033",
                fontFamily: "Georgia, serif",
              }}
            />
          </div>
        </div>

        {/* Sidebar doodle elements */}
        <div className="flex flex-col gap-4 w-48">
          {/* Sticky note */}
          <div
            className="p-4 relative"
            style={{
              backgroundColor: "#ffd166",
              transform: "rotate(2deg)",
              boxShadow: "2px 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            <p
              className="text-xs"
              style={{ color: "#5c4033", fontFamily: "Georgia, serif" }}
            >
              Remember: creativity has no rules!
            </p>
            {/* Tape decoration */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4"
              style={{
                backgroundColor: "rgba(200,180,150,0.5)",
                transform: "rotate(-3deg)",
              }}
            />
          </div>

          {/* Doodle icons */}
          <div
            className="p-4 flex flex-wrap gap-3 justify-center"
            style={{
              border: "2px dashed #c4a882",
              borderRadius: "8px",
              transform: "rotate(-1deg)",
            }}
          >
            {/* Heart */}
            <svg width="28" height="28" viewBox="0 0 28 28">
              <path
                d="M14,24 Q4,16 4,10 Q4,4 9,4 Q12,4 14,8 Q16,4 19,4 Q24,4 24,10 Q24,16 14,24"
                fill="none"
                stroke="#e07a5f"
                strokeWidth="2"
              />
            </svg>
            {/* Sun */}
            <svg width="28" height="28" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="5" fill="none" stroke="#f2a541" strokeWidth="2" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                <line
                  key={a}
                  x1={14 + 8 * Math.cos((a * Math.PI) / 180)}
                  y1={14 + 8 * Math.sin((a * Math.PI) / 180)}
                  x2={14 + 11 * Math.cos((a * Math.PI) / 180)}
                  y2={14 + 11 * Math.sin((a * Math.PI) / 180)}
                  stroke="#f2a541"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ))}
            </svg>
            {/* Cloud */}
            <svg width="32" height="24" viewBox="0 0 32 24">
              <path
                d="M8,18 Q2,18 2,14 Q2,10 7,10 Q7,5 14,5 Q20,5 21,10 Q26,9 28,13 Q30,18 24,18 Z"
                fill="none"
                stroke="#81b29a"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Color palette */}
          <div
            className="flex gap-2 justify-center p-3"
            style={{
              border: "2px solid #c4a882",
              borderRadius: "20px",
              transform: "rotate(1deg)",
            }}
          >
            {["#e07a5f", "#f2a541", "#81b29a", "#3d405b", "#c4a882"].map((c) => (
              <div
                key={c}
                className="w-6 h-6 rounded-full"
                style={{
                  backgroundColor: c,
                  border: "2px solid #fff8ee",
                  boxShadow: "1px 1px 0 #c4a882",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
