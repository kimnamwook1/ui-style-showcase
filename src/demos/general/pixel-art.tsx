"use client";

export default function PixelArtDemo() {
  return (
    <div
      className="min-h-[400px] p-8"
      style={{
        background: "#1a1c2c",
        fontFamily: "'Courier New', monospace",
        imageRendering: "pixelated",
      }}
    >
      <div className="mx-auto max-w-sm space-y-5">
        {/* Title */}
        <div className="text-center">
          <h2
            className="text-2xl font-bold tracking-wider"
            style={{
              color: "#f4f4f4",
              textShadow: "2px 2px 0px #5d275d",
            }}
          >
            PIXEL ART
          </h2>
          <div className="mt-1 flex items-center justify-center gap-1">
            {["#ef7d57", "#ffcd75", "#a7f070", "#38b764", "#257179"].map((c) => (
              <div
                key={c}
                className="h-2 w-2"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>

        {/* Pixel card */}
        <div
          className="p-4"
          style={{
            background: "#333c57",
            border: "4px solid #566c86",
            boxShadow: "4px 4px 0px #1a1c2c",
          }}
        >
          <div className="flex items-center gap-3">
            {/* Mini pixel character */}
            <div className="grid grid-cols-5 gap-px">
              {[
                0,0,1,0,0,
                0,1,1,1,0,
                1,1,2,1,1,
                0,1,1,1,0,
                0,1,0,1,0,
              ].map((v, i) => (
                <div
                  key={i}
                  className="h-2 w-2"
                  style={{
                    background:
                      v === 0 ? "transparent" : v === 1 ? "#f4f4f4" : "#ef7d57",
                  }}
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "#f4f4f4" }}>
                PLAYER ONE
              </p>
              <p className="text-[10px]" style={{ color: "#94b0c2" }}>
                LV.42 ★★★
              </p>
            </div>
          </div>

          {/* HP Bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold" style={{ color: "#ffcd75" }}>
                HP
              </span>
              <span className="text-[10px]" style={{ color: "#94b0c2" }}>
                85/100
              </span>
            </div>
            <div className="mt-1 h-3" style={{ background: "#1a1c2c", border: "2px solid #566c86" }}>
              <div
                className="h-full"
                style={{ width: "85%", background: "#a7f070" }}
              />
            </div>
          </div>

          {/* XP Bar */}
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold" style={{ color: "#ffcd75" }}>
                XP
              </span>
              <span className="text-[10px]" style={{ color: "#94b0c2" }}>
                340/500
              </span>
            </div>
            <div className="mt-1 h-3" style={{ background: "#1a1c2c", border: "2px solid #566c86" }}>
              <div
                className="h-full"
                style={{ width: "68%", background: "#29adff" }}
              />
            </div>
          </div>
        </div>

        {/* Inventory */}
        <div className="grid grid-cols-4 gap-2">
          {["⚔️", "🛡️", "🧪", "💎"].map((item) => (
            <div
              key={item}
              className="flex h-14 items-center justify-center text-xl"
              style={{
                background: "#333c57",
                border: "3px solid #566c86",
                boxShadow: "2px 2px 0px #1a1c2c",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            className="flex-1 py-2 text-xs font-bold uppercase tracking-wider"
            style={{
              background: "#38b764",
              color: "#1a1c2c",
              border: "3px solid #257179",
              boxShadow: "3px 3px 0px #1a1c2c",
            }}
          >
            ATTACK
          </button>
          <button
            className="flex-1 py-2 text-xs font-bold uppercase tracking-wider"
            style={{
              background: "#29adff",
              color: "#1a1c2c",
              border: "3px solid #1a1c2c",
              boxShadow: "3px 3px 0px #1a1c2c",
            }}
          >
            DEFEND
          </button>
        </div>
      </div>
    </div>
  );
}
