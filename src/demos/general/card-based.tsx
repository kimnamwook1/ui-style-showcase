"use client";

import { useState } from "react";

const cards = [
  { title: "Mountain Retreat", category: "Travel", color: "#2d6a4f", likes: 234, height: 180 },
  { title: "Urban Architecture", category: "Design", color: "#264653", likes: 189, height: 220 },
  { title: "Sunset Palette", category: "Color", color: "#e76f51", likes: 412, height: 160 },
  { title: "Minimal Kitchen", category: "Interior", color: "#6b705c", likes: 167, height: 200 },
  { title: "Abstract Forms", category: "Art", color: "#7209b7", likes: 345, height: 170 },
  { title: "Ocean Waves", category: "Nature", color: "#0077b6", likes: 298, height: 210 },
  { title: "Typography Set", category: "Design", color: "#d62828", likes: 156, height: 150 },
  { title: "Botanical Garden", category: "Nature", color: "#588157", likes: 223, height: 190 },
];

export default function CardBasedDemo() {
  const [likedCards, setLikedCards] = useState<Set<number>>(new Set());
  const [filter, setFilter] = useState("All");
  const [saved, setSaved] = useState<Set<number>>(new Set());

  const categories = ["All", ...new Set(cards.map((c) => c.category))];

  const filteredCards = filter === "All" ? cards : cards.filter((c) => c.category === filter);

  const toggleLike = (i: number) => {
    const next = new Set(likedCards);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setLikedCards(next);
  };

  const toggleSave = (i: number) => {
    const next = new Set(saved);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setSaved(next);
  };

  return (
    <div className="min-h-[400px] p-6" style={{ backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Discover</h1>
          <p className="text-sm text-gray-500">Curated collections for you</p>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{ backgroundColor: "#e76f51" }}
          >
            {saved.size}
          </div>
          <span className="text-xs text-gray-500">Saved</span>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200"
            style={{
              backgroundColor: filter === cat ? "#1a1a1a" : "#fff",
              color: filter === cat ? "#fff" : "#666",
              border: `1px solid ${filter === cat ? "#1a1a1a" : "#ddd"}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {filteredCards.map((card, i) => {
          const originalIndex = cards.indexOf(card);
          return (
            <div
              key={originalIndex}
              className="break-inside-avoid rounded-xl overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
              style={{ backgroundColor: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
            >
              {/* Image placeholder */}
              <div
                className="w-full relative"
                style={{
                  height: `${card.height}px`,
                  background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}cc 100%)`,
                }}
              >
                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.6) 0%, transparent 50%)",
                  }}
                />
                {/* Save button */}
                <button
                  onClick={() => toggleSave(originalIndex)}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: saved.has(originalIndex)
                      ? "#e76f51"
                      : "rgba(0,0,0,0.3)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 1.5h8a1 1 0 011 1v10L7 9.5 2 12.5v-10a1 1 0 011-1z"
                      fill={saved.has(originalIndex) ? "#fff" : "none"}
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
                {/* Category badge */}
                <span
                  className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    color: card.color,
                  }}
                >
                  {card.category}
                </span>
              </div>

              {/* Card content */}
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900">{card.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <button
                    onClick={() => toggleLike(originalIndex)}
                    className="flex items-center gap-1 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14">
                      <path
                        d="M7 12.5s-5.5-3.5-5.5-7A3 3 0 017 3a3 3 0 015.5 2.5c0 3.5-5.5 7-5.5 7z"
                        fill={likedCards.has(originalIndex) ? "#e76f51" : "none"}
                        stroke={likedCards.has(originalIndex) ? "#e76f51" : "#999"}
                        strokeWidth="1.2"
                      />
                    </svg>
                    <span
                      className="text-xs"
                      style={{
                        color: likedCards.has(originalIndex) ? "#e76f51" : "#999",
                      }}
                    >
                      {card.likes + (likedCards.has(originalIndex) ? 1 : 0)}
                    </span>
                  </button>
                  <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
