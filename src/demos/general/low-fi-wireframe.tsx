"use client";

export default function LoFiWireframeDemo() {
  return (
    <div className="min-h-[400px] p-8" style={{ background: "#fff" }}>
      <div className="mx-auto max-w-md space-y-5">
        {/* Header sketch */}
        <div className="flex items-center justify-between pb-3" style={{ borderBottom: "2px dashed #ccc" }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded flex items-center justify-center" style={{ border: "2px solid #333", background: "#f0f0f0" }}>
              <span className="text-xs">{"\u2605"}</span>
            </div>
            <span className="text-sm font-bold" style={{ color: "#333" }}>Lo-Fi UI</span>
          </div>
          <div className="flex gap-3">
            {["Home", "About", "Blog"].map((link) => (
              <span key={link} className="text-xs" style={{ color: "#666", textDecoration: "underline" }}>
                {link}
              </span>
            ))}
          </div>
        </div>

        {/* Hero wireframe */}
        <div
          className="p-6 rounded text-center"
          style={{ border: "2px dashed #aaa", background: "#fafafa" }}
        >
          <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ border: "2px solid #999" }}>
            <span style={{ color: "#999", fontSize: "24px" }}>?</span>
          </div>
          <h2 className="text-lg mt-3" style={{ color: "#333" }}>[ Hero Section ]</h2>
          <p className="text-xs mt-1" style={{ color: "#999" }}>
            {"\u2014\u2014\u2014"} placeholder text goes here {"\u2014\u2014\u2014"}
          </p>
          <button
            className="mt-3 px-4 py-2 rounded text-xs"
            style={{ border: "2px solid #333", background: "#fff", color: "#333" }}
          >
            [ CTA Button ]
          </button>
        </div>

        {/* Content blocks */}
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="p-3 rounded text-center"
              style={{ border: "1px dashed #ccc" }}
            >
              <div
                className="w-full h-12 rounded flex items-center justify-center text-xs"
                style={{ background: "#f0f0f0", border: "1px solid #ddd", color: "#aaa" }}
              >
                img
              </div>
              <div className="mt-2 space-y-1">
                <div className="h-2 rounded" style={{ background: "#ddd" }} />
                <div className="h-2 rounded w-3/4 mx-auto" style={{ background: "#eee" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Annotations */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: "#ff6b6b", color: "#fff" }}>!</div>
          <span className="text-xs italic" style={{ color: "#ff6b6b" }}>
            {"\u2190"} This needs review before shipping
          </span>
        </div>

        {/* Footer sketch */}
        <div className="text-center pt-3" style={{ borderTop: "1px dashed #ccc" }}>
          <p className="text-[10px]" style={{ color: "#bbb" }}>
            --- footer content here ---
          </p>
        </div>
      </div>
    </div>
  );
}
