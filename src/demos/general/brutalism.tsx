"use client";

export default function BrutalismDemo() {
  return (
    <div className="min-h-[400px] p-8" style={{ background: "#fffbe6", fontFamily: "monospace" }}>
      <div className="mx-auto max-w-lg space-y-6">
        {/* Header */}
        <div
          className="border-4 p-4"
          style={{ borderColor: "#000", background: "#ff6b6b" }}
        >
          <h2 className="text-3xl font-black uppercase tracking-tight text-black">
            BRUTALISM
          </h2>
          <p className="mt-1 text-sm font-bold text-black/70">
            Raw. Bold. Unapologetic.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-4">
          <div
            className="border-4 border-black p-4"
            style={{ background: "#4ecdc4" }}
          >
            <span className="text-3xl font-black text-black">01</span>
            <p className="mt-1 text-xs font-bold uppercase text-black">
              Design Systems
            </p>
          </div>
          <div
            className="border-4 border-black p-4"
            style={{ background: "#ffe66d" }}
          >
            <span className="text-3xl font-black text-black">02</span>
            <p className="mt-1 text-xs font-bold uppercase text-black">
              Typography
            </p>
          </div>
        </div>

        {/* Button row */}
        <div className="flex flex-wrap gap-3">
          <button
            className="border-4 border-black px-6 py-3 text-sm font-black uppercase text-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "#000",
              boxShadow: "4px 4px 0 #000",
            }}
          >
            Click Me
          </button>
          <button
            className="border-4 border-black bg-white px-6 py-3 text-sm font-black uppercase text-black transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "4px 4px 0 #000" }}
          >
            Or Me
          </button>
        </div>

        {/* Marquee-style text */}
        <div className="overflow-hidden border-y-4 border-black py-2" style={{ background: "#000" }}>
          <p className="whitespace-nowrap text-sm font-bold uppercase tracking-widest text-white">
            ★ NO RULES ★ NO POLISH ★ RAW EXPRESSION ★ FUNCTION OVER FORM ★
          </p>
        </div>

        {/* Link list */}
        <div className="space-y-2">
          {["Portfolio", "About", "Contact"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border-4 border-black bg-white p-3 transition-colors hover:bg-black hover:text-white cursor-pointer"
            >
              <span className="text-sm font-black uppercase">{item}</span>
              <span className="text-lg font-black">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
