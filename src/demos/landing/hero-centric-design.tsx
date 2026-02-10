"use client";

export default function HeroCentricDesignDemo() {
  return (
    <div className="min-h-[400px]" style={{ background: "#0f172a" }}>
      {/* Hero section */}
      <div
        className="relative flex min-h-[350px] flex-col items-center justify-center px-8 text-center"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)",
          }}
        />

        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.2)",
            color: "#818cf8",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "#818cf8" }}
          />
          Now in beta
        </div>

        <h1
          className="text-4xl font-bold leading-tight tracking-tight"
          style={{ color: "#f1f5f9" }}
        >
          Build faster with
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            modern tools
          </span>
        </h1>

        <p
          className="mt-4 max-w-md text-base leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          The all-in-one platform that helps teams ship products 10x faster
          with AI-powered workflows.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <button
            className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "0 0 20px rgba(99,102,241,0.3)",
            }}
          >
            Get Started Free
          </button>
          <button
            className="rounded-lg px-6 py-3 text-sm font-medium transition-colors"
            style={{
              border: "1px solid #334155",
              color: "#94a3b8",
            }}
          >
            Watch Demo →
          </button>
        </div>

        {/* Trusted by */}
        <div className="mt-10 flex items-center gap-6">
          <span className="text-xs" style={{ color: "#475569" }}>
            Trusted by
          </span>
          {["Acme", "Globex", "Initech", "Umbrella"].map((name) => (
            <span
              key={name}
              className="text-xs font-medium"
              style={{ color: "#475569" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
