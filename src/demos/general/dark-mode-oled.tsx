"use client";

export default function DarkModeOLEDDemo() {
  return (
    <div className="min-h-[400px] p-8" style={{ background: "#000000", color: "#e5e5e5" }}>
      <div className="mx-auto max-w-sm space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold" style={{ color: "#ffffff" }}>
            Dark Mode (OLED)
          </h2>
          <p className="mt-1 text-sm" style={{ color: "#737373" }}>
            True black for perfect contrast
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Battery", value: "94%", color: "#22c55e" },
            { label: "Storage", value: "128G", color: "#3b82f6" },
            { label: "Memory", value: "6.2G", color: "#a855f7" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-3 text-center"
              style={{ background: "#0a0a0a", border: "1px solid #1a1a1a" }}
            >
              <p className="text-lg font-bold" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-[10px]" style={{ color: "#525252" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* List */}
        <div className="space-y-1">
          {[
            { icon: "♪", title: "Now Playing", sub: "Midnight Dream" },
            { icon: "◐", title: "Display", sub: "Always-on display" },
            { icon: "◉", title: "Focus Mode", sub: "Active" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors"
              style={{ background: "transparent" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#111111")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <span className="text-lg">{item.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium" style={{ color: "#e5e5e5" }}>
                  {item.title}
                </p>
                <p className="text-xs" style={{ color: "#525252" }}>
                  {item.sub}
                </p>
              </div>
              <span style={{ color: "#404040" }}>›</span>
            </div>
          ))}
        </div>

        {/* Toggle row */}
        <div
          className="flex items-center justify-between rounded-xl px-4 py-3"
          style={{ background: "#0a0a0a", border: "1px solid #1a1a1a" }}
        >
          <span className="text-sm" style={{ color: "#a3a3a3" }}>
            Night Mode
          </span>
          <div
            className="flex h-7 w-12 items-center rounded-full p-0.5"
            style={{ background: "#22c55e" }}
          >
            <div className="ml-auto h-6 w-6 rounded-full bg-white" />
          </div>
        </div>

        {/* Action button */}
        <button
          className="w-full rounded-xl py-3 text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ background: "#1d4ed8", color: "#ffffff" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
