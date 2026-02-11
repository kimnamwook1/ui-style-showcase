"use client";

import { useState } from "react";

const metrics = [
  { label: "Revenue", value: "$284,520", change: "+14.2%", up: true, icon: "$", color: "#2ee59d" },
  { label: "Expenses", value: "$142,380", change: "+3.8%", up: true, icon: "↗", color: "#e94560" },
  { label: "Net Profit", value: "$142,140", change: "+24.6%", up: true, icon: "◎", color: "#7f5af0" },
  { label: "Cash Flow", value: "$89,200", change: "-2.1%", up: false, icon: "↺", color: "#f59e0b" },
];

const candlestickData = [
  { o: 55, h: 75, l: 45, c: 70 },
  { o: 70, h: 80, l: 60, c: 62 },
  { o: 62, h: 72, l: 50, c: 68 },
  { o: 68, h: 85, l: 65, c: 82 },
  { o: 82, h: 90, l: 70, c: 74 },
  { o: 74, h: 78, l: 55, c: 58 },
  { o: 58, h: 70, l: 52, c: 66 },
  { o: 66, h: 88, l: 64, c: 85 },
  { o: 85, h: 95, l: 78, c: 92 },
  { o: 92, h: 98, l: 80, c: 88 },
  { o: 88, h: 92, l: 76, c: 78 },
  { o: 78, h: 90, l: 75, c: 86 },
];

const budgetItems = [
  { label: "Marketing", spent: 42000, budget: 50000, color: "#7f5af0" },
  { label: "Engineering", spent: 68000, budget: 75000, color: "#3b82f6" },
  { label: "Operations", spent: 23000, budget: 30000, color: "#2ee59d" },
  { label: "Sales", spent: 35000, budget: 40000, color: "#f59e0b" },
  { label: "HR", spent: 12000, budget: 15000, color: "#e94560" },
];

export default function FinancialDashboard() {
  const [period, setPeriod] = useState("MTD");

  return (
    <div className="min-h-[400px] rounded-xl overflow-hidden flex flex-col" style={{ background: "#f8f9fb" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
        <div>
          <h2 className="text-sm font-bold text-gray-900">Financial Overview</h2>
          <p className="text-[10px] text-gray-400">Fiscal Year 2025</p>
        </div>
        <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-0.5">
          {["MTD", "QTD", "YTD"].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className="px-2.5 py-1 rounded-md text-[10px] font-medium transition-all"
              style={{
                background: period === p ? "#fff" : "transparent",
                color: period === p ? "#7f5af0" : "#888",
                boxShadow: period === p ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-4 gap-2 px-4 py-3">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white rounded-lg p-3 border border-gray-100 hover:shadow-sm transition-shadow cursor-pointer">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] text-gray-400">{m.label}</span>
              <div
                className="w-5 h-5 rounded flex items-center justify-center text-[10px]"
                style={{ background: `${m.color}15`, color: m.color }}
              >
                {m.icon}
              </div>
            </div>
            <div className="text-base font-bold text-gray-900">{m.value}</div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[10px] font-medium" style={{ color: m.up ? "#2ee59d" : "#e94560" }}>
                {m.up ? "▲" : "▼"} {m.change}
              </span>
              <span className="text-[8px] text-gray-400">vs last period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts area */}
      <div className="flex-1 flex gap-3 px-4 pb-3 overflow-hidden">
        {/* Candlestick chart */}
        <div className="flex-1 bg-white rounded-lg p-3 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-gray-700">Revenue Trend</span>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[8px] text-gray-400">
                <span className="w-2 h-2 rounded-sm" style={{ background: "#2ee59d" }} /> Gain
              </span>
              <span className="flex items-center gap-1 text-[8px] text-gray-400">
                <span className="w-2 h-2 rounded-sm" style={{ background: "#e94560" }} /> Loss
              </span>
            </div>
          </div>

          <svg width="100%" height="120" viewBox="0 0 300 120" preserveAspectRatio="none">
            {/* Grid */}
            {[0, 30, 60, 90, 120].map((y) => (
              <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#f3f4f6" strokeWidth="0.5" />
            ))}
            {/* Candlesticks */}
            {candlestickData.map((d, i) => {
              const x = 15 + i * 23;
              const bullish = d.c > d.o;
              const color = bullish ? "#2ee59d" : "#e94560";
              const bodyTop = Math.min(120 - d.o, 120 - d.c);
              const bodyHeight = Math.abs(d.c - d.o);
              return (
                <g key={i}>
                  {/* Wick */}
                  <line x1={x} y1={120 - d.h} x2={x} y2={120 - d.l} stroke={color} strokeWidth="1" />
                  {/* Body */}
                  <rect
                    x={x - 5}
                    y={bodyTop}
                    width="10"
                    height={Math.max(bodyHeight, 2)}
                    fill={color}
                    rx="1"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </g>
              );
            })}
          </svg>

          {/* X axis labels */}
          <div className="flex justify-between mt-1">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => (
              <span key={i} className="text-[7px] text-gray-300">{m}</span>
            ))}
          </div>
        </div>

        {/* Budget progress */}
        <div className="w-48 bg-white rounded-lg p-3 border border-gray-100 flex flex-col">
          <div className="text-[10px] font-semibold text-gray-700 mb-3">Budget Allocation</div>
          <div className="space-y-3 flex-1">
            {budgetItems.map((b, i) => {
              const pct = Math.round((b.spent / b.budget) * 100);
              return (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-medium text-gray-600">{b.label}</span>
                    <span className="text-[9px] font-mono text-gray-400">{pct}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${pct}%`,
                        background: pct > 90 ? "#e94560" : b.color,
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[7px] text-gray-300">${(b.spent / 1000).toFixed(0)}K spent</span>
                    <span className="text-[7px] text-gray-300">${(b.budget / 1000).toFixed(0)}K budget</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total */}
          <div className="pt-2 mt-2" style={{ borderTop: "1px solid #f3f4f6" }}>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold text-gray-600">Total Spent</span>
              <span className="text-[10px] font-bold text-gray-900">$180K / $210K</span>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-100 mt-1">
              <div
                className="h-full rounded-full"
                style={{ width: "85.7%", background: "linear-gradient(90deg, #7f5af0, #2ee59d)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
