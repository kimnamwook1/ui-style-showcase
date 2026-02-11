"use client";

import { useState } from "react";

export default function MinimalismDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [toggled, setToggled] = useState(false);

  const tabs = ["Overview", "Details", "Settings"];

  return (
    <div className="min-h-[400px] bg-white text-gray-900 p-12 flex flex-col gap-10 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-light tracking-tight">Minimalism</h1>
        <div className="w-8 h-8 rounded-full bg-black" />
      </div>

      {/* Thin divider */}
      <div className="h-px bg-gray-200 w-full" />

      {/* Tabs */}
      <div className="flex gap-8">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className="pb-2 text-sm tracking-widest uppercase transition-colors duration-200"
            style={{
              color: activeTab === i ? "#000" : "#aaa",
              borderBottom: activeTab === i ? "1px solid #000" : "1px solid transparent",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="flex gap-12 flex-1">
        {/* Left: card */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="border border-gray-100 p-8 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-gray-400">Featured</p>
            <h2 className="text-xl font-light">Less is more</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              The essence of minimalism is clarity. Every element serves a purpose.
              White space is not empty — it is full of possibility.
            </p>
            <button
              className="self-start mt-2 px-6 py-2 text-xs uppercase tracking-widest border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              Explore
            </button>
          </div>
        </div>

        {/* Right: form + toggle */}
        <div className="w-64 flex flex-col gap-6">
          {/* Input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400">Search</label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type here..."
              className="border-b border-gray-300 bg-transparent py-2 text-sm outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300"
            />
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-gray-400">Notifications</span>
            <button
              onClick={() => setToggled(!toggled)}
              className="w-10 h-5 rounded-full relative transition-colors duration-300"
              style={{ backgroundColor: toggled ? "#000" : "#e5e5e5" }}
            >
              <div
                className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300"
                style={{ left: toggled ? "22px" : "2px" }}
              />
            </button>
          </div>

          {/* Metric */}
          <div className="mt-4">
            <p className="text-4xl font-extralight">97%</p>
            <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Simplicity score</p>
          </div>
        </div>
      </div>

      {/* Footer accent line */}
      <div className="h-px bg-black w-16" />
    </div>
  );
}
