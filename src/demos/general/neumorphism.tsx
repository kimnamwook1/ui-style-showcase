"use client";

export default function NeumorphismDemo() {
  return (
    <div className="flex min-h-[400px] items-center justify-center p-8" style={{ background: "#e0e5ec" }}>
      <div className="w-full max-w-sm space-y-6">
        {/* Card */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "#e0e5ec",
            boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff",
          }}
        >
          <h3 className="text-lg font-semibold" style={{ color: "#6b7280" }}>
            Neumorphism
          </h3>
          <p className="mt-2 text-sm" style={{ color: "#9ca3af" }}>
            Soft UI with subtle shadows creating depth
          </p>
        </div>

        {/* Button Row */}
        <div className="flex items-center justify-center gap-4">
          <button
            className="rounded-xl px-6 py-3 text-sm font-medium transition-all active:scale-95"
            style={{
              background: "#e0e5ec",
              boxShadow: "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff",
              color: "#6b7280",
            }}
          >
            Button
          </button>
          <button
            className="rounded-xl px-6 py-3 text-sm font-medium"
            style={{
              background: "#e0e5ec",
              boxShadow: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff",
              color: "#6b7280",
            }}
          >
            Pressed
          </button>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center">
          <div
            className="flex h-10 w-20 items-center rounded-full p-1"
            style={{
              background: "#e0e5ec",
              boxShadow: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff",
            }}
          >
            <div
              className="h-8 w-8 rounded-full"
              style={{
                background: "#e0e5ec",
                boxShadow: "4px 4px 8px #b8bec7, -4px -4px 8px #ffffff",
              }}
            />
          </div>
        </div>

        {/* Input */}
        <div
          className="rounded-xl px-4 py-3"
          style={{
            background: "#e0e5ec",
            boxShadow: "inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #ffffff",
          }}
        >
          <input
            type="text"
            placeholder="Type something..."
            className="w-full bg-transparent text-sm outline-none"
            style={{ color: "#6b7280" }}
          />
        </div>

        {/* Progress bar */}
        <div
          className="h-4 overflow-hidden rounded-full"
          style={{
            background: "#e0e5ec",
            boxShadow: "inset 2px 2px 4px #b8bec7, inset -2px -2px 4px #ffffff",
          }}
        >
          <div
            className="h-full w-3/5 rounded-full"
            style={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              boxShadow: "2px 2px 4px #b8bec7",
            }}
          />
        </div>
      </div>
    </div>
  );
}
