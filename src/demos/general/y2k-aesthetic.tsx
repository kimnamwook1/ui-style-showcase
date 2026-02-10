"use client";

export default function Y2KAestheticDemo() {
  return (
    <div
      className="min-h-[400px] p-8"
      style={{
        background: "linear-gradient(180deg, #ff9ff3 0%, #c7ecee 50%, #dff9fb 100%)",
        fontFamily: "'Comic Sans MS', 'Chalkboard SE', sans-serif",
      }}
    >
      <div className="mx-auto max-w-sm space-y-5">
        {/* Header with metallic text */}
        <div className="text-center">
          <h2
            className="text-3xl font-black"
            style={{
              background: "linear-gradient(180deg, #fff 0%, #c0c0c0 40%, #fff 50%, #808080 60%, #c0c0c0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
              filter: "drop-shadow(1px 1px 0px #999)",
            }}
          >
            Y2K Vibes ✿
          </h2>
          <p className="mt-1 text-xs font-bold" style={{ color: "#ff6b81" }}>
            ★ Welcome to the future ★
          </p>
        </div>

        {/* Bubble card */}
        <div
          className="rounded-3xl p-5"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(199,236,238,0.6))",
            border: "2px solid rgba(255,255,255,0.9)",
            boxShadow: "0 4px 20px rgba(255,159,243,0.3)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-xl"
              style={{
                background: "linear-gradient(135deg, #fd79a8, #a29bfe)",
              }}
            >
              💖
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "#6c5ce7" }}>
                My Profile
              </p>
              <p className="text-[10px]" style={{ color: "#a29bfe" }}>
                ✧ Online Now ✧
              </p>
            </div>
          </div>

          <div className="mt-3 flex gap-2">
            {["🌸 Mood", "💫 Status", "🎵 Music"].map((item) => (
              <span
                key={item}
                className="rounded-full px-2 py-1 text-[10px] font-bold"
                style={{
                  background: "linear-gradient(135deg, #fdcb6e, #e17055)",
                  color: "#fff",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Star buttons */}
        <div className="flex justify-center gap-3">
          <button
            className="rounded-full px-5 py-2 text-xs font-bold text-white transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #a29bfe, #fd79a8)",
              boxShadow: "0 4px 12px rgba(162,155,254,0.4)",
            }}
          >
            ✦ Enter ✦
          </button>
          <button
            className="rounded-full px-5 py-2 text-xs font-bold transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
              color: "#e17055",
              boxShadow: "0 4px 12px rgba(253,203,110,0.4)",
            }}
          >
            ♡ Guest ♡
          </button>
        </div>

        {/* Visitor counter */}
        <div className="text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px dashed #a29bfe",
            }}
          >
            <span className="text-[10px]" style={{ color: "#6c5ce7" }}>
              ✿ Visitors: 00,048,291 ✿
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
