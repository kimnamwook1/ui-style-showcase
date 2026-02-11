"use client";

export default function FrostedGlassDemo() {
  return (
    <div
      className="min-h-[400px] p-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2, #f093fb)",
      }}
    >
      {/* Background shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full" style={{ background: "#ff6b6b", opacity: 0.4 }} />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full" style={{ background: "#feca57", opacity: 0.3 }} />
      <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: "#48dbfb", opacity: 0.3 }} />

      <div className="relative z-10 mx-auto max-w-lg space-y-4">
        {/* Title bar */}
        <div
          className="rounded-xl p-4 flex items-center justify-between"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
              <span className="text-white text-sm">{"\u25C6"}</span>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Frosted Glass</h2>
              <p className="text-xs text-white/60">System-level blur effect</p>
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
          </div>
        </div>

        {/* Content cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Notifications", count: "3 new", icon: "\u2709" },
            { title: "Settings", count: "System", icon: "\u2699" },
            { title: "Storage", count: "64% used", icon: "\u25A1" },
            { title: "Network", count: "Connected", icon: "\u26A1" },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span className="text-2xl text-white/80">{card.icon}</span>
              <h3 className="text-sm font-semibold text-white mt-2">{card.title}</h3>
              <p className="text-xs text-white/50 mt-0.5">{card.count}</p>
            </div>
          ))}
        </div>

        {/* Bottom panel */}
        <div
          className="rounded-xl p-4"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
            <div className="flex-1">
              <div className="h-2 rounded-full w-3/4" style={{ background: "rgba(255,255,255,0.2)" }} />
              <div className="h-2 rounded-full w-1/2 mt-2" style={{ background: "rgba(255,255,255,0.1)" }} />
            </div>
            <button
              className="px-4 py-2 rounded-lg text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
