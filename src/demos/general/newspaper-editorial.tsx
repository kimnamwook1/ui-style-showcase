"use client";

export default function NewspaperEditorialDemo() {
  return (
    <div className="min-h-[400px] p-8" style={{ background: "#faf8f3", fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <div className="mx-auto max-w-lg space-y-4">
        {/* Masthead */}
        <div className="text-center space-y-1" style={{ borderBottom: "3px double #1a1a1a", paddingBottom: "12px" }}>
          <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#999" }}>
            Wednesday, February 11, 2026
          </p>
          <h1 className="text-4xl font-bold tracking-tight" style={{ color: "#1a1a1a" }}>
            The Daily Showcase
          </h1>
          <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "#999" }}>
            &ldquo;All the Design That&apos;s Fit to Print&rdquo;
          </p>
        </div>

        {/* Headline */}
        <div style={{ borderBottom: "1px solid #ddd", paddingBottom: "12px" }}>
          <h2 className="text-2xl font-bold leading-tight" style={{ color: "#1a1a1a" }}>
            Editorial Design Returns to Web: A New Era of Content-First Layout
          </h2>
          <p className="text-xs mt-1 italic" style={{ color: "#888" }}>
            By Staff Reporter
          </p>
        </div>

        {/* Two-column article */}
        <div className="flex gap-4" style={{ columns: 2 }}>
          <div className="flex-1 space-y-2">
            <p
              className="text-xs leading-relaxed"
              style={{ color: "#333" }}
            >
              <span className="text-3xl font-bold float-left mr-1 leading-none" style={{ color: "#1a1a1a" }}>T</span>
              he timeless principles of newspaper layout are finding new life in modern web design.
              Column grids, serif typefaces, and clear hierarchies bring order and elegance.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "#333" }}>
              Designers are rediscovering that content-first approaches create more readable,
              more engaging digital experiences.
            </p>
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-xs leading-relaxed" style={{ color: "#333" }}>
              The editorial style prioritizes information architecture and typographic hierarchy.
              Every element serves the reader&apos;s journey through the content.
            </p>
            <div
              className="p-3 my-2"
              style={{ borderLeft: "3px solid #1a1a1a", background: "#f0ede6" }}
            >
              <p className="text-xs italic" style={{ color: "#555" }}>
                &ldquo;Good typography is invisible. Bad typography is everywhere.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid #ddd" }}
        >
          <span className="text-[10px] tracking-wider uppercase" style={{ color: "#999" }}>
            Section A &bull; Page 1
          </span>
          <span className="text-[10px] tracking-wider uppercase" style={{ color: "#999" }}>
            Vol. CXII &bull; No. 42
          </span>
        </div>
      </div>
    </div>
  );
}
