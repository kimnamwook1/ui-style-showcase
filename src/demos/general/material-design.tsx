"use client";

import { useState } from "react";

export default function MaterialDesignDemo() {
  const [fabClicked, setFabClicked] = useState(false);
  const [selectedChip, setSelectedChip] = useState("All");
  const [checked, setChecked] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);

  const chips = ["All", "Design", "Code", "Music"];

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top, id: Date.now() });
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <div className="min-h-[400px] bg-[#fafafa] font-sans flex flex-col">
      {/* App Bar - elevation 4 */}
      <div
        className="px-6 py-4 flex items-center justify-between text-white"
        style={{
          backgroundColor: "#6200ee",
          boxShadow: "0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)",
        }}
      >
        <div className="flex items-center gap-4">
          <span className="text-xl">☰</span>
          <h1 className="text-xl font-medium">Material Design</h1>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-xl cursor-pointer">🔍</span>
          <span className="text-xl cursor-pointer">⋮</span>
        </div>
      </div>

      {/* Chips */}
      <div className="px-6 py-3 flex gap-2">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => setSelectedChip(chip)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
            style={{
              backgroundColor: selectedChip === chip ? "#6200ee" : "#e0e0e0",
              color: selectedChip === chip ? "#fff" : "#333",
            }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex gap-4">
        {/* Card 1 - Elevation 1 */}
        <div
          className="flex-1 bg-white rounded-lg overflow-hidden"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }}
        >
          <div className="h-32 bg-gradient-to-br from-[#6200ee] to-[#bb86fc]" />
          <div className="p-4">
            <h3 className="text-lg font-medium text-[#1d1d1d]">Elevation System</h3>
            <p className="text-sm text-[#757575] mt-1 leading-relaxed">
              Material uses shadow to indicate elevation. Higher elements cast larger shadows.
            </p>
            <div className="flex gap-2 mt-4">
              <button
                className="px-4 py-2 text-[#6200ee] font-medium text-sm rounded hover:bg-[#f3e8ff] transition-colors relative overflow-hidden"
                onClick={handleRipple}
              >
                LEARN MORE
                {ripple && (
                  <span
                    key={ripple.id}
                    className="absolute rounded-full bg-[#6200ee] opacity-20 animate-ping"
                    style={{
                      left: ripple.x - 10,
                      top: ripple.y - 10,
                      width: 20,
                      height: 20,
                    }}
                  />
                )}
              </button>
              <button className="px-4 py-2 text-[#6200ee] font-medium text-sm rounded hover:bg-[#f3e8ff] transition-colors">
                SHARE
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Elevation 2 */}
        <div
          className="flex-1 bg-white rounded-lg p-5 flex flex-col gap-4"
          style={{ boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }}
        >
          <h3 className="text-lg font-medium text-[#1d1d1d]">Components</h3>

          {/* Text Field */}
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              className="peer w-full border-b-2 border-[#9e9e9e] focus:border-[#6200ee] py-2 text-sm outline-none bg-transparent transition-colors"
            />
            <label className="absolute left-0 top-2 text-[#9e9e9e] text-sm transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#6200ee] peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-xs">
              Email address
            </label>
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer">
            <button
              onClick={() => setChecked(!checked)}
              className="w-5 h-5 rounded-sm flex items-center justify-center transition-colors"
              style={{
                backgroundColor: checked ? "#6200ee" : "transparent",
                border: checked ? "none" : "2px solid #757575",
              }}
            >
              {checked && <span className="text-white text-xs">✓</span>}
            </button>
            <span className="text-sm text-[#424242]">Accept terms and conditions</span>
          </label>

          {/* List items */}
          <div className="flex flex-col">
            {["Inbox", "Starred", "Drafts"].map((item, i) => (
              <div key={item} className="flex items-center gap-3 px-2 py-3 rounded hover:bg-[#f5f5f5] cursor-pointer transition-colors">
                <span className="text-[#757575]">{["📥", "⭐", "📝"][i]}</span>
                <span className="text-sm text-[#212121]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setFabClicked(!fabClicked)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-200"
        style={{
          backgroundColor: fabClicked ? "#03dac6" : "#6200ee",
          boxShadow: "0 6px 10px rgba(0,0,0,0.2), 0 1px 18px rgba(0,0,0,0.12)",
          transform: fabClicked ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        +
      </button>
    </div>
  );
}
