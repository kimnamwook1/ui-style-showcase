"use client";

import { useState } from "react";

export default function ArtDecoDemo() {
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div
      className="min-h-[400px] p-8 flex flex-col gap-6"
      style={{
        background: "linear-gradient(180deg, #0d0d0d, #1a1a2e)",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        color: "#d4af37",
      }}
    >
      {/* Geometric fan pattern header */}
      <div className="text-center relative">
        {/* Fan rays */}
        <svg className="mx-auto mb-2" width="200" height="50" viewBox="0 0 200 50">
          {[...Array(9)].map((_, i) => (
            <line
              key={i}
              x1="100" y1="50"
              x2={100 + Math.cos((-Math.PI / 2) + (i - 4) * 0.2) * 60}
              y2={50 + Math.sin((-Math.PI / 2) + (i - 4) * 0.2) * 60}
              stroke="#d4af37"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}
          <circle cx="100" cy="50" r="4" fill="#d4af37" />
        </svg>

        <h1
          className="text-4xl font-bold uppercase tracking-[0.3em]"
          style={{ textShadow: "0 0 20px rgba(212,175,55,0.3)" }}
        >
          Art Deco
        </h1>
        <p className="text-xs uppercase tracking-[0.5em] mt-2" style={{ color: "#8b7d3c" }}>
          Elegance Through Geometry
        </p>
        {/* Decorative lines */}
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #d4af37)" }} />
          <div className="w-2 h-2 rotate-45" style={{ background: "#d4af37" }} />
          <div className="h-px w-20" style={{ background: "linear-gradient(90deg, #d4af37, transparent)" }} />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-0">
        {["Gallery", "Events", "Membership"].map((item, i) => (
          <button
            key={item}
            onClick={() => setActiveSection(i)}
            className="px-6 py-2 text-xs uppercase tracking-[0.3em] transition-all"
            style={{
              border: "1px solid #d4af3740",
              borderRight: i < 2 ? "none" : "1px solid #d4af3740",
              background: activeSection === i ? "rgba(212,175,55,0.15)" : "transparent",
              color: activeSection === i ? "#d4af37" : "#8b7d3c",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex gap-6 flex-1">
        {/* Main cards with geometric borders */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 flex-1">
            {[
              { title: "The Grand Ballroom", desc: "An evening of opulence and refined taste" },
              { title: "Crystal Lounge", desc: "Where jazz meets geometric splendor" },
              { title: "Golden Hour", desc: "Sunset cocktails with panoramic views" },
              { title: "The Parlour", desc: "Intimate gatherings of distinguished company" },
            ].map((card, i) => (
              <div
                key={card.title}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="p-5 flex flex-col justify-between cursor-pointer transition-all duration-300"
                style={{
                  border: "1px solid #d4af3740",
                  background: hoveredCard === i ? "rgba(212,175,55,0.08)" : "transparent",
                  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                }}
              >
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider">{card.title}</h3>
                  <p className="text-xs mt-2 leading-relaxed" style={{ color: "#8b7d3c" }}>
                    {card.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-3 h-3 rotate-45 border" style={{ borderColor: "#d4af37" }} />
                  <span className="text-[10px] uppercase tracking-wider" style={{ color: "#d4af37" }}>
                    Discover
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div
          className="w-56 flex flex-col gap-4 p-5"
          style={{ border: "1px solid #d4af3730" }}
        >
          {/* Symmetrical ornament */}
          <div className="flex flex-col items-center gap-2">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <polygon points="30,5 55,30 30,55 5,30" fill="none" stroke="#d4af37" strokeWidth="1" />
              <polygon points="30,15 45,30 30,45 15,30" fill="none" stroke="#d4af37" strokeWidth="1" />
              <circle cx="30" cy="30" r="4" fill="#d4af37" />
            </svg>
            <span className="text-xs uppercase tracking-[0.3em]">Membership</span>
          </div>

          {/* Tier items */}
          {[
            { tier: "Gold", price: "$500" },
            { tier: "Platinum", price: "$1,200" },
            { tier: "Diamond", price: "$3,000" },
          ].map((item) => (
            <div
              key={item.tier}
              className="p-3 flex items-center justify-between"
              style={{
                borderTop: "1px solid #d4af3720",
                borderBottom: "1px solid #d4af3720",
              }}
            >
              <span className="text-xs uppercase tracking-wider">{item.tier}</span>
              <span className="text-sm font-bold">{item.price}</span>
            </div>
          ))}

          <button
            className="mt-auto py-3 text-xs uppercase tracking-[0.3em] font-bold transition-all"
            style={{
              border: "2px solid #d4af37",
              background: "transparent",
              color: "#d4af37",
              clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
            }}
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #d4af37, transparent)" }} />
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rotate-45" style={{ background: "#d4af37" }} />
          ))}
        </div>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #d4af37)" }} />
      </div>
    </div>
  );
}
