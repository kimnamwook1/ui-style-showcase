"use client";

import { useState } from "react";

const navItems = [
  { label: "Overview", icon: "◫", active: true },
  { label: "Reports", icon: "◳", active: false },
  { label: "Users", icon: "◉", active: false },
  { label: "Settings", icon: "⚙", active: false },
];

const filters = ["All Channels", "Organic", "Paid", "Social", "Email"];
const barData = [40, 65, 55, 80, 70, 90, 60, 75, 85, 50, 95, 70];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const tableRows = [
  { page: "/home", views: "12,453", bounce: "32%", duration: "2:45", trend: "up" },
  { page: "/pricing", views: "8,721", bounce: "28%", duration: "3:12", trend: "up" },
  { page: "/blog", views: "6,102", bounce: "45%", duration: "1:50", trend: "down" },
  { page: "/docs", views: "4,890", bounce: "22%", duration: "4:30", trend: "up" },
];

export default function AnalyticsDashboard() {
  const [activeFilter, setActiveFilter] = useState("All Channels");
  const [dateRange, setDateRange] = useState("7d");

  return (
    <div className="min-h-[400px] rounded-xl overflow-hidden flex" style={{ background: "#f8f9fb" }}>
      {/* Sidebar */}
      <div className="w-14 flex-shrink-0 flex flex-col items-center py-3 gap-1" style={{ background: "#1a1a2e" }}>
        <div
          className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center text-white text-xs font-bold"
          style={{ background: "linear-gradient(135deg, #7f5af0, #2ee59d)" }}
        >
          A
        </div>
        {navItems.map((item, i) => (
          <button
            key={i}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all duration-150"
            style={{
              background: item.active ? "rgba(127,90,240,0.2)" : "transparent",
              color: item.active ? "#7f5af0" : "#666",
            }}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
          <div>
            <h2 className="text-sm font-bold text-gray-900">Analytics Overview</h2>
            <p className="text-[10px] text-gray-400">Track your website performance</p>
          </div>
          <div className="flex items-center gap-1">
            {["24h", "7d", "30d", "90d"].map((d) => (
              <button
                key={d}
                onClick={() => setDateRange(d)}
                className="px-2 py-1 rounded text-[10px] font-medium transition-all"
                style={{
                  background: dateRange === d ? "#7f5af0" : "transparent",
                  color: dateRange === d ? "#fff" : "#888",
                }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex gap-1.5 px-4 py-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap transition-all"
              style={{
                background: activeFilter === f ? "#7f5af0" : "#fff",
                color: activeFilter === f ? "#fff" : "#666",
                border: `1px solid ${activeFilter === f ? "#7f5af0" : "#e5e7eb"}`,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Stats and charts */}
        <div className="flex-1 px-4 py-2 overflow-auto">
          {/* KPI cards row */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { label: "Visitors", value: "24.5K", change: "+12.5%", up: true },
              { label: "Bounce Rate", value: "34.2%", change: "-2.1%", up: false },
              { label: "Avg. Duration", value: "3:24", change: "+8.3%", up: true },
            ].map((kpi, i) => (
              <div key={i} className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-[10px] text-gray-400 mb-1">{kpi.label}</div>
                <div className="text-lg font-bold text-gray-900">{kpi.value}</div>
                <div className="text-[10px] font-medium" style={{ color: kpi.up ? "#2ee59d" : "#e94560" }}>
                  {kpi.change}
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {/* Bar chart */}
            <div className="col-span-2 bg-white rounded-lg p-3 border border-gray-100">
              <div className="text-[10px] font-semibold text-gray-700 mb-2">Monthly Visitors</div>
              <div className="flex items-end gap-1 h-20">
                {barData.map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className="w-full rounded-sm transition-all duration-300 hover:opacity-80 cursor-pointer"
                      style={{
                        height: `${v}%`,
                        background: i === barData.length - 2 ? "#7f5af0" : "rgba(127,90,240,0.2)",
                      }}
                    />
                    <span className="text-[7px] text-gray-400">{months[i]?.slice(0, 1)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Donut chart */}
            <div className="bg-white rounded-lg p-3 border border-gray-100">
              <div className="text-[10px] font-semibold text-gray-700 mb-2">Traffic Sources</div>
              <div className="flex items-center justify-center">
                <svg width="70" height="70" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                  <circle
                    cx="50" cy="50" r="35" fill="none" stroke="#7f5af0" strokeWidth="12"
                    strokeDasharray="77 143" strokeDashoffset="0" strokeLinecap="round"
                  />
                  <circle
                    cx="50" cy="50" r="35" fill="none" stroke="#2ee59d" strokeWidth="12"
                    strokeDasharray="44 176" strokeDashoffset="-77" strokeLinecap="round"
                  />
                  <circle
                    cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="12"
                    strokeDasharray="33 187" strokeDashoffset="-121" strokeLinecap="round"
                  />
                  <text x="50" y="48" textAnchor="middle" className="text-[10px] font-bold" fill="#333">24.5K</text>
                  <text x="50" y="58" textAnchor="middle" className="text-[7px]" fill="#999">total</text>
                </svg>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                {[
                  { label: "Organic", color: "#7f5af0", pct: "35%" },
                  { label: "Social", color: "#2ee59d", pct: "20%" },
                  { label: "Referral", color: "#f59e0b", pct: "15%" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                    <span className="text-[8px] text-gray-500 flex-1">{s.label}</span>
                    <span className="text-[8px] font-medium text-gray-700">{s.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data table */}
          <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            <div className="text-[10px] font-semibold text-gray-700 px-3 pt-2 pb-1">Top Pages</div>
            <table className="w-full text-[10px]">
              <thead>
                <tr className="border-b border-gray-50">
                  <th className="text-left px-3 py-1.5 text-gray-400 font-medium">Page</th>
                  <th className="text-right px-3 py-1.5 text-gray-400 font-medium">Views</th>
                  <th className="text-right px-3 py-1.5 text-gray-400 font-medium">Bounce</th>
                  <th className="text-right px-3 py-1.5 text-gray-400 font-medium">Avg. Time</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
                    <td className="px-3 py-1.5 font-medium text-gray-700">{row.page}</td>
                    <td className="px-3 py-1.5 text-right text-gray-600">{row.views}</td>
                    <td className="px-3 py-1.5 text-right text-gray-600">{row.bounce}</td>
                    <td className="px-3 py-1.5 text-right">
                      <span className="inline-flex items-center gap-0.5">
                        {row.duration}
                        <span style={{ color: row.trend === "up" ? "#2ee59d" : "#e94560", fontSize: 8 }}>
                          {row.trend === "up" ? "▲" : "▼"}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
