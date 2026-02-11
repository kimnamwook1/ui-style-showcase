"use client";

import { useState } from "react";

export default function DataVisualizationDemo() {
  const [activeChart, setActiveChart] = useState<"bar" | "line" | "donut">("bar");
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);

  const barData = [
    { label: "Mon", value: 65, color: "#6366f1" },
    { label: "Tue", value: 85, color: "#8b5cf6" },
    { label: "Wed", value: 45, color: "#a855f7" },
    { label: "Thu", value: 92, color: "#c084fc" },
    { label: "Fri", value: 73, color: "#d946ef" },
    { label: "Sat", value: 38, color: "#e879f9" },
    { label: "Sun", value: 56, color: "#f0abfc" },
  ];

  const linePoints = [20, 45, 35, 72, 58, 85, 65, 90, 78, 95];

  const donutData = [
    { label: "Design", value: 35, color: "#6366f1" },
    { label: "Dev", value: 28, color: "#0ea5e9" },
    { label: "Marketing", value: 20, color: "#f59e0b" },
    { label: "Research", value: 17, color: "#10b981" },
  ];

  const maxBar = Math.max(...barData.map((d) => d.value));

  // Donut arc calculations
  const donutArcs = (() => {
    const total = donutData.reduce((s, d) => s + d.value, 0);
    let cumulative = 0;
    return donutData.map((d) => {
      const start = (cumulative / total) * 360;
      cumulative += d.value;
      const end = (cumulative / total) * 360;
      const pct = ((d.value / total) * 100).toFixed(0);
      return { ...d, start, end, pct };
    });
  })();

  const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const describeArc = (cx: number, cy: number, r: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const large = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 0 ${end.x} ${end.y}`;
  };

  return (
    <div className="min-h-[400px] p-6" style={{ backgroundColor: "#0f172a" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-xs text-slate-500 mt-0.5">Week of Jan 6 - 12</p>
        </div>
        <div className="flex gap-1 p-1 rounded-lg" style={{ backgroundColor: "#1e293b" }}>
          {(["bar", "line", "donut"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveChart(t)}
              className="px-3 py-1.5 text-xs font-medium rounded transition-all duration-200 capitalize"
              style={{
                backgroundColor: activeChart === t ? "#6366f1" : "transparent",
                color: activeChart === t ? "#fff" : "#64748b",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {[
          { label: "Revenue", value: "$48.2K", change: "+12%", up: true },
          { label: "Users", value: "2,847", change: "+8%", up: true },
          { label: "Bounce", value: "32%", change: "-5%", up: false },
          { label: "Sessions", value: "12.4K", change: "+18%", up: true },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="p-3 rounded-lg"
            style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
          >
            <p className="text-xs text-slate-500">{kpi.label}</p>
            <p className="text-lg font-bold text-white mt-0.5">{kpi.value}</p>
            <span
              className="text-xs font-medium"
              style={{ color: kpi.up ? "#10b981" : "#f43f5e" }}
            >
              {kpi.change}
            </span>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div
        className="rounded-lg p-5"
        style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
      >
        {activeChart === "bar" && (
          <div>
            <p className="text-xs text-slate-500 mb-4">Weekly Activity</p>
            <div className="flex items-end gap-3 h-40">
              {barData.map((d, i) => (
                <div
                  key={d.label}
                  className="flex-1 flex flex-col items-center gap-1"
                  onMouseEnter={() => setHoveredBar(i)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  {hoveredBar === i && (
                    <span className="text-xs font-mono text-white">{d.value}</span>
                  )}
                  <div
                    className="w-full rounded-t transition-all duration-300"
                    style={{
                      height: `${(d.value / maxBar) * 120}px`,
                      backgroundColor: d.color,
                      opacity: hoveredBar === null || hoveredBar === i ? 1 : 0.4,
                      transform: hoveredBar === i ? "scaleY(1.05)" : "scaleY(1)",
                      transformOrigin: "bottom",
                    }}
                  />
                  <span className="text-xs text-slate-500">{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeChart === "line" && (
          <div>
            <p className="text-xs text-slate-500 mb-4">Trend Analysis</p>
            <svg viewBox="0 0 400 160" className="w-full h-40">
              {/* Grid lines */}
              {[0, 40, 80, 120, 160].map((y) => (
                <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#334155" strokeWidth="0.5" />
              ))}
              {/* Area fill */}
              <path
                d={`M ${linePoints.map((p, i) => `${i * (400 / (linePoints.length - 1))},${160 - p * 1.5}`).join(" L ")} L 400,160 L 0,160 Z`}
                fill="url(#lineGradient)"
                opacity="0.3"
              />
              {/* Line */}
              <path
                d={`M ${linePoints.map((p, i) => `${i * (400 / (linePoints.length - 1))},${160 - p * 1.5}`).join(" L ")}`}
                fill="none"
                stroke="#6366f1"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Dots */}
              {linePoints.map((p, i) => (
                <circle
                  key={i}
                  cx={i * (400 / (linePoints.length - 1))}
                  cy={160 - p * 1.5}
                  r="3.5"
                  fill="#0f172a"
                  stroke="#6366f1"
                  strokeWidth="2"
                />
              ))}
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}

        {activeChart === "donut" && (
          <div className="flex items-center gap-8">
            <div className="relative">
              <svg viewBox="0 0 200 200" className="w-40 h-40">
                {donutArcs.map((arc, i) => (
                  <path
                    key={arc.label}
                    d={describeArc(100, 100, 70, arc.start, arc.end - 0.5)}
                    fill="none"
                    stroke={arc.color}
                    strokeWidth={hoveredSlice === i ? "28" : "24"}
                    strokeLinecap="butt"
                    className="transition-all duration-200 cursor-pointer"
                    style={{
                      opacity: hoveredSlice === null || hoveredSlice === i ? 1 : 0.4,
                    }}
                    onMouseEnter={() => setHoveredSlice(i)}
                    onMouseLeave={() => setHoveredSlice(null)}
                  />
                ))}
                <text x="100" y="95" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">
                  {hoveredSlice !== null ? `${donutArcs[hoveredSlice].pct}%` : "100%"}
                </text>
                <text x="100" y="115" textAnchor="middle" fill="#64748b" fontSize="10">
                  {hoveredSlice !== null ? donutArcs[hoveredSlice].label : "Total"}
                </text>
              </svg>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              {donutArcs.map((arc, i) => (
                <div
                  key={arc.label}
                  className="flex items-center gap-3 cursor-pointer transition-opacity"
                  style={{ opacity: hoveredSlice === null || hoveredSlice === i ? 1 : 0.4 }}
                  onMouseEnter={() => setHoveredSlice(i)}
                  onMouseLeave={() => setHoveredSlice(null)}
                >
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: arc.color }} />
                  <span className="text-sm text-slate-300 flex-1">{arc.label}</span>
                  <span className="text-sm font-mono text-white">{arc.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
