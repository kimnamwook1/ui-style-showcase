"use client";

export default function PastelSoftDemo() {
  return (
    <div className="min-h-[400px] p-8" style={{ background: "#fef7f0" }}>
      <div className="mx-auto max-w-lg space-y-5">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold" style={{ color: "#7c6a8a" }}>
            Pastel & Soft
          </h2>
          <p className="text-sm" style={{ color: "#b8a9c2" }}>
            Warm, friendly, and approachable design
          </p>
        </div>

        {/* Color dots */}
        <div className="flex justify-center gap-3">
          {["#ffb5b5", "#ffd4a8", "#fff3a8", "#b5e8c3", "#b5d4ff", "#d4b5ff"].map((c) => (
            <div key={c} className="w-8 h-8 rounded-full" style={{ background: c }} />
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Wellness", icon: "🌿", bg: "#e8f5e9", color: "#66bb6a" },
            { title: "Journal", icon: "📝", bg: "#fce4ec", color: "#ef9a9a" },
            { title: "Photos", icon: "📸", bg: "#e3f2fd", color: "#90caf9" },
            { title: "Music", icon: "🎵", bg: "#fff3e0", color: "#ffcc80" },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-5 text-center"
              style={{ background: card.bg }}
            >
              <div className="text-3xl">{card.icon}</div>
              <p className="mt-2 text-sm font-medium" style={{ color: card.color }}>
                {card.title}
              </p>
            </div>
          ))}
        </div>

        {/* Input */}
        <div
          className="rounded-2xl px-4 py-3 flex items-center gap-3"
          style={{ background: "#fff", border: "2px solid #f0e4f7" }}
        >
          <span style={{ color: "#d4b5ff" }}>&#9829;</span>
          <input
            type="text"
            placeholder="How are you feeling today?"
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: "#7c6a8a" }}
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-3">
          <button
            className="px-6 py-2.5 rounded-full text-sm font-medium"
            style={{ background: "linear-gradient(135deg, #ffb5b5, #d4b5ff)", color: "#fff" }}
          >
            Get Started
          </button>
          <button
            className="px-6 py-2.5 rounded-full text-sm font-medium"
            style={{ border: "2px solid #d4b5ff", color: "#7c6a8a", background: "transparent" }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
