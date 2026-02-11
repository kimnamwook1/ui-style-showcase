"use client";

export default function IsometricDemo() {
  return (
    <div className="min-h-[400px] p-8 flex items-center justify-center" style={{ background: "#f0f4f8" }}>
      <div className="w-full max-w-lg space-y-6">
        <h2 className="text-center text-lg font-bold" style={{ color: "#2d3748" }}>Isometric Dashboard</h2>

        {/* Isometric grid */}
        <div className="flex justify-center">
          <svg viewBox="0 0 400 250" className="w-full">
            {/* Floor grid */}
            <defs>
              <linearGradient id="isoGrad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#764ba2" />
              </linearGradient>
              <linearGradient id="isoGrad2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f093fb" />
                <stop offset="100%" stopColor="#f5576c" />
              </linearGradient>
              <linearGradient id="isoGrad3" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4facfe" />
                <stop offset="100%" stopColor="#00f2fe" />
              </linearGradient>
            </defs>

            {/* Building 1 - tall */}
            <g transform="translate(80, 60)">
              <polygon points="50,0 100,25 50,50 0,25" fill="#667eea" opacity="0.9" />
              <polygon points="100,25 100,145 50,170 50,50" fill="#5a67d8" />
              <polygon points="0,25 50,50 50,170 0,145" fill="#7c85eb" />
              {/* Windows */}
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <rect x="55" y={60 + i * 28} width="12" height="8" fill="#ffd700" opacity="0.8" transform="skewY(26.5)" />
                  <rect x="75" y={60 + i * 28} width="12" height="8" fill="#ffd700" opacity="0.6" transform="skewY(26.5)" />
                </g>
              ))}
            </g>

            {/* Building 2 - medium */}
            <g transform="translate(180, 100)">
              <polygon points="40,0 80,20 40,40 0,20" fill="url(#isoGrad2)" />
              <polygon points="80,20 80,110 40,130 40,40" fill="#e8457a" />
              <polygon points="0,20 40,40 40,130 0,110" fill="#f7829b" />
              {[0, 1, 2].map((i) => (
                <rect key={i} x="45" y={50 + i * 25} width="10" height="7" fill="#fff" opacity="0.5" transform="skewY(26.5)" />
              ))}
            </g>

            {/* Building 3 - short wide */}
            <g transform="translate(260, 130)">
              <polygon points="50,0 100,25 50,50 0,25" fill="url(#isoGrad3)" />
              <polygon points="100,25 100,85 50,110 50,50" fill="#0bbfdb" />
              <polygon points="0,25 50,50 50,110 0,85" fill="#4fd1e8" />
              {[0, 1].map((i) => (
                <rect key={i} x="56" y={58 + i * 22} width="14" height="7" fill="#fff" opacity="0.4" transform="skewY(26.5)" />
              ))}
            </g>

            {/* Ground plane */}
            <polygon points="50,220 200,140 350,220 200,250" fill="#e2e8f0" opacity="0.5" />

            {/* Trees */}
            {[{ x: 40, y: 200 }, { x: 340, y: 210 }].map((t, i) => (
              <g key={i} transform={`translate(${t.x}, ${t.y})`}>
                <rect x="3" y="0" width="3" height="12" fill="#8B6914" />
                <polygon points="5,-20 15,-5 -5,-5" fill="#48bb78" />
                <polygon points="5,-12 12,-2 -2,-2" fill="#38a169" />
              </g>
            ))}
          </svg>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Buildings", value: "3", color: "#667eea" },
            { label: "Floors", value: "12", color: "#f5576c" },
            { label: "Units", value: "48", color: "#00f2fe" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-3 text-center"
              style={{ background: "#fff", border: "1px solid #e2e8f0" }}
            >
              <p className="text-2xl font-bold" style={{ color: item.color }}>{item.value}</p>
              <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
