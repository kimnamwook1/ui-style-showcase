"use client";

export default function BoldTypographyDemo() {
  return (
    <div className="min-h-[400px] p-8 flex flex-col justify-center" style={{ background: "#fafafa" }}>
      <div className="mx-auto max-w-lg space-y-6">
        {/* Hero text */}
        <div className="space-y-1">
          <h1
            className="text-6xl font-black uppercase leading-none tracking-tighter"
            style={{ color: "#0a0a0a" }}
          >
            Make it
          </h1>
          <h1
            className="text-6xl font-black uppercase leading-none tracking-tighter"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #0a0a0a",
            }}
          >
            Bold.
          </h1>
        </div>

        <div className="h-1 w-20" style={{ background: "#ff3366" }} />

        <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#666" }}>
          Typography is the backbone of great design. When words speak louder than images,
          let them take center stage.
        </p>

        {/* Type specimens */}
        <div className="space-y-3">
          {[
            { text: "Aa", weight: "font-thin", label: "Thin 100" },
            { text: "Aa", weight: "font-normal", label: "Regular 400" },
            { text: "Aa", weight: "font-bold", label: "Bold 700" },
            { text: "Aa", weight: "font-black", label: "Black 900" },
          ].map((spec) => (
            <div key={spec.label} className="flex items-baseline gap-4">
              <span className={`text-3xl ${spec.weight}`} style={{ color: "#0a0a0a" }}>
                {spec.text}
              </span>
              <span className="text-xs tracking-wider uppercase" style={{ color: "#999" }}>
                {spec.label}
              </span>
              <div className="flex-1 h-px" style={{ background: "#e5e5e5" }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="px-8 py-3 text-sm font-black uppercase tracking-widest"
          style={{ background: "#0a0a0a", color: "#fff" }}
        >
          Explore Fonts
        </button>
      </div>
    </div>
  );
}
