"use client";

export default function GlassmorphismDemo() {
  return (
    <div
      className="relative flex min-h-[400px] items-center justify-center overflow-hidden p-8"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      }}
    >
      {/* Floating blobs */}
      <div
        className="absolute -left-10 -top-10 h-40 w-40 rounded-full opacity-60"
        style={{ background: "#ff6b6b", filter: "blur(40px)" }}
      />
      <div
        className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full opacity-60"
        style={{ background: "#4ecdc4", filter: "blur(40px)" }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{ background: "#ffe66d", filter: "blur(30px)" }}
      />

      <div className="relative z-10 w-full max-w-sm space-y-4">
        {/* Glass card */}
        <div
          className="rounded-2xl border p-6"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <h3 className="text-lg font-semibold text-white">Glassmorphism</h3>
          <p className="mt-2 text-sm text-white/70">
            Frosted glass effect with background blur
          </p>

          <div className="mt-4 flex gap-3">
            <button
              className="rounded-lg border px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20"
              style={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
            >
              Action
            </button>
            <button
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/90"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              Secondary
            </button>
          </div>
        </div>

        {/* Small glass cards row */}
        <div className="grid grid-cols-2 gap-4">
          {["Users", "Revenue"].map((label) => (
            <div
              key={label}
              className="rounded-xl border p-4 text-center"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderColor: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <p className="text-2xl font-bold text-white">
                {label === "Users" ? "2.4K" : "$18K"}
              </p>
              <p className="text-xs text-white/60">{label}</p>
            </div>
          ))}
        </div>

        {/* Glass input */}
        <div
          className="flex items-center gap-2 rounded-xl border px-4 py-3"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(8px)",
            borderColor: "rgba(255, 255, 255, 0.15)",
          }}
        >
          <svg className="h-4 w-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
