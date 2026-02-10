"use client";

export default function MinimalDirectDemo() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center px-8" style={{ background: "#fafafa" }}>
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div
          className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white"
          style={{ background: "#18181b" }}
        >
          M
        </div>

        {/* Headline */}
        <h1
          className="mt-6 text-3xl font-semibold leading-tight tracking-tight"
          style={{ color: "#18181b" }}
        >
          Write better, faster.
        </h1>

        <p className="mt-3 text-base" style={{ color: "#71717a" }}>
          A minimal writing tool that gets out of your way.
          <br />
          Just you and your words.
        </p>

        {/* Email signup */}
        <div className="mt-8 flex gap-2">
          <input
            type="email"
            placeholder="you@email.com"
            className="flex-1 rounded-lg px-4 py-3 text-sm outline-none"
            style={{
              border: "1px solid #e4e4e7",
              color: "#18181b",
              background: "#ffffff",
            }}
          />
          <button
            className="rounded-lg px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: "#18181b" }}
          >
            Start Free
          </button>
        </div>

        <p className="mt-3 text-xs" style={{ color: "#a1a1aa" }}>
          No credit card required. Free for personal use.
        </p>

        {/* Social proof */}
        <div
          className="mt-8 flex items-center justify-center gap-4"
          style={{ borderTop: "1px solid #f4f4f5", paddingTop: "1.5rem" }}
        >
          <div className="flex -space-x-2">
            {["#3b82f6", "#ef4444", "#22c55e", "#f59e0b"].map((c) => (
              <div
                key={c}
                className="h-7 w-7 rounded-full border-2"
                style={{ background: c, borderColor: "#fafafa" }}
              />
            ))}
          </div>
          <p className="text-sm" style={{ color: "#71717a" }}>
            <span className="font-medium" style={{ color: "#18181b" }}>
              2,400+
            </span>{" "}
            writers already joined
          </p>
        </div>
      </div>
    </div>
  );
}
