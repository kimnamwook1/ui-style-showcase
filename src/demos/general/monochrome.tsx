"use client";

export default function MonochromeDemo() {
  return (
    <div className="min-h-[400px] p-8" style={{ background: "#fafafa" }}>
      <div className="mx-auto max-w-lg space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl font-light tracking-tight" style={{ color: "#111" }}>
            Monochrome
          </h2>
          <div className="h-px w-16" style={{ background: "#111" }} />
          <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
            Elegance through restraint. A single color spectrum creates sophistication.
          </p>
        </div>

        {/* Image placeholder */}
        <div className="aspect-[16/9] rounded-lg overflow-hidden" style={{ background: "#e5e5e5" }}>
          <div className="h-full flex items-center justify-center">
            <div className="space-y-2 text-center">
              <div className="text-4xl" style={{ color: "#999" }}>&#9634;</div>
              <p className="text-xs tracking-widest uppercase" style={{ color: "#999" }}>Photography</p>
            </div>
          </div>
        </div>

        {/* Grayscale palette */}
        <div className="flex gap-1 h-8 rounded overflow-hidden">
          {["#000", "#1a1a1a", "#333", "#4d4d4d", "#666", "#808080", "#999", "#b3b3b3", "#ccc", "#e6e6e6", "#f5f5f5"].map((c) => (
            <div key={c} className="flex-1" style={{ background: c }} />
          ))}
        </div>

        {/* Content cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Editorial", desc: "Clean typography with purposeful hierarchy" },
            { title: "Gallery", desc: "Visual stories told in shades of grey" },
          ].map((card) => (
            <div
              key={card.title}
              className="p-4 rounded-lg"
              style={{ border: "1px solid #e5e5e5" }}
            >
              <h3 className="text-sm font-semibold" style={{ color: "#111" }}>{card.title}</h3>
              <p className="text-xs mt-2 leading-relaxed" style={{ color: "#888" }}>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex gap-3">
          <button
            className="px-6 py-2.5 rounded text-xs font-medium tracking-wider uppercase"
            style={{ background: "#111", color: "#fff" }}
          >
            Explore
          </button>
          <button
            className="px-6 py-2.5 rounded text-xs font-medium tracking-wider uppercase"
            style={{ border: "1px solid #111", color: "#111", background: "transparent" }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
