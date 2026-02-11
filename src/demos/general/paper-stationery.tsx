"use client";

export default function PaperStationeryDemo() {
  return (
    <div className="min-h-[400px] p-8" style={{ background: "#f5f0e8" }}>
      <div className="mx-auto max-w-md space-y-5">
        {/* Notebook page */}
        <div
          className="rounded-lg p-6 relative"
          style={{
            background: "#fffef9",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.08)",
            backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #e8e4dc 27px, #e8e4dc 28px)",
            backgroundPositionY: "42px",
          }}
        >
          {/* Red margin line */}
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{ left: "48px", background: "#ffb3b3" }}
          />

          <div className="pl-10">
            <h2
              className="text-xl font-semibold leading-relaxed"
              style={{ color: "#3d3429", fontFamily: "Georgia, serif" }}
            >
              Paper & Stationery
            </h2>
            <p
              className="text-sm leading-[28px] mt-1"
              style={{ color: "#6b5d4f", fontFamily: "Georgia, serif" }}
            >
              Bringing the charm of physical notebooks to digital interfaces.
            </p>
          </div>
        </div>

        {/* Sticky notes */}
        <div className="flex gap-3">
          {[
            { text: "Buy milk", bg: "#fff9a3", rotate: "-2deg" },
            { text: "Call Mom", bg: "#ffb3d1", rotate: "1deg" },
            { text: "Read book", bg: "#b3e0ff", rotate: "-1deg" },
          ].map((note) => (
            <div
              key={note.text}
              className="flex-1 p-3 text-center"
              style={{
                background: note.bg,
                transform: `rotate(${note.rotate})`,
                boxShadow: "1px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <p className="text-xs font-medium" style={{ color: "#4a4035", fontFamily: "Georgia, serif" }}>
                {note.text}
              </p>
            </div>
          ))}
        </div>

        {/* Washi tape decoration */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-4 opacity-40" style={{ background: "repeating-linear-gradient(45deg, #ffb3b3, #ffb3b3 4px, #ffd1d1 4px, #ffd1d1 8px)" }} />
          <span className="text-xs" style={{ color: "#a08b6e", fontFamily: "Georgia, serif" }}>Today&apos;s Tasks</span>
          <div className="flex-1 h-4 opacity-40" style={{ background: "repeating-linear-gradient(45deg, #b3d1ff, #b3d1ff 4px, #d1e4ff 4px, #d1e4ff 8px)" }} />
        </div>

        {/* Checklist */}
        <div
          className="rounded-lg p-4 space-y-3"
          style={{ background: "#fffef9", boxShadow: "1px 2px 6px rgba(0,0,0,0.06)" }}
        >
          {[
            { text: "Design the landing page", done: true },
            { text: "Write weekly newsletter", done: true },
            { text: "Prepare presentation slides", done: false },
            { text: "Review pull requests", done: false },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded border-2 flex items-center justify-center"
                style={{ borderColor: "#c9b99a" }}
              >
                {item.done && <span className="text-xs" style={{ color: "#8b7355" }}>&#10003;</span>}
              </div>
              <span
                className="text-sm"
                style={{
                  color: item.done ? "#b8a88c" : "#4a4035",
                  textDecoration: item.done ? "line-through" : "none",
                  fontFamily: "Georgia, serif",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
