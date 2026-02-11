"use client";

export default function GrainedTexturedDemo() {
  return (
    <div className="min-h-[400px] p-8 relative overflow-hidden" style={{ background: "#2c2420" }}>
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-lg space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl font-serif font-bold" style={{ color: "#e8d5b7" }}>
            Grained & Textured
          </h2>
          <p className="text-sm" style={{ color: "#a08b6e" }}>
            Film grain and noise that brings warmth and physicality
          </p>
        </div>

        {/* Image card */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ background: "#3d332a", border: "1px solid #5a4a3a" }}
        >
          <div
            className="h-40 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #4a3728, #6b5240)" }}
          >
            <span className="text-5xl opacity-50">&#128247;</span>
          </div>
          <div className="p-4">
            <h3 className="text-sm font-serif font-semibold" style={{ color: "#e8d5b7" }}>
              Analog Warmth
            </h3>
            <p className="text-xs mt-1" style={{ color: "#a08b6e" }}>
              Embracing imperfection in the digital age
            </p>
          </div>
        </div>

        {/* Texture swatches */}
        <div className="flex gap-3">
          {[
            { label: "Film", bg: "linear-gradient(135deg, #5a4a3a, #3d332a)" },
            { label: "Paper", bg: "linear-gradient(135deg, #d4c5a9, #b8a88c)" },
            { label: "Canvas", bg: "linear-gradient(135deg, #8a7a6a, #6b5d4f)" },
          ].map((swatch) => (
            <div key={swatch.label} className="flex-1 text-center">
              <div className="h-16 rounded-lg" style={{ background: swatch.bg }} />
              <p className="text-xs mt-2 font-serif" style={{ color: "#a08b6e" }}>{swatch.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="w-full py-3 rounded-lg text-sm font-serif font-semibold"
          style={{ background: "#e8d5b7", color: "#2c2420" }}
        >
          View Collection
        </button>
      </div>
    </div>
  );
}
