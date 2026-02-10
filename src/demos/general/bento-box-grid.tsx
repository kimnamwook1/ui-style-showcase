"use client";

export default function BentoBoxGridDemo() {
  return (
    <div className="min-h-[400px] p-8" style={{ background: "#f8f9fa" }}>
      <div className="mx-auto max-w-xl">
        <h2 className="mb-6 text-xl font-bold text-zinc-900">
          Bento Box Grid
        </h2>

        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(3, 100px)",
          }}
        >
          {/* Large feature card */}
          <div
            className="flex flex-col justify-between rounded-2xl p-4"
            style={{
              gridColumn: "span 2",
              gridRow: "span 2",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
            }}
          >
            <span className="text-3xl">✦</span>
            <div>
              <p className="text-lg font-bold text-white">Smart Layout</p>
              <p className="text-xs text-white/60">Adaptive grid system</p>
            </div>
          </div>

          {/* Top right cards */}
          <div
            className="flex items-center justify-center rounded-2xl"
            style={{ background: "#000", gridColumn: "span 1" }}
          >
            <p className="text-2xl font-black text-white">4K</p>
          </div>

          <div
            className="flex flex-col items-center justify-center rounded-2xl"
            style={{ background: "#e8f5e9" }}
          >
            <span className="text-xl">📊</span>
            <p className="mt-1 text-[10px] font-medium text-emerald-700">Analytics</p>
          </div>

          {/* Middle right */}
          <div
            className="flex items-center gap-2 rounded-2xl px-3"
            style={{ gridColumn: "span 2", background: "#fff3e0" }}
          >
            <span className="text-xl">⚡</span>
            <div>
              <p className="text-xs font-bold text-amber-800">Performance</p>
              <p className="text-[10px] text-amber-600">99.9% uptime</p>
            </div>
          </div>

          {/* Bottom row */}
          <div
            className="flex items-center justify-center rounded-2xl"
            style={{ background: "#fce4ec" }}
          >
            <span className="text-xl">♥</span>
          </div>

          <div
            className="flex items-center gap-2 rounded-2xl px-3"
            style={{ gridColumn: "span 2", background: "#e3f2fd" }}
          >
            <div className="flex -space-x-1">
              {["#f44336", "#2196f3", "#4caf50"].map((c) => (
                <div
                  key={c}
                  className="h-6 w-6 rounded-full border-2 border-white"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-xs font-medium text-blue-800">3 team members</p>
          </div>

          <div
            className="flex items-center justify-center rounded-2xl"
            style={{ background: "#f3e5f5" }}
          >
            <p className="text-xs font-bold text-purple-700">NEW</p>
          </div>
        </div>
      </div>
    </div>
  );
}
