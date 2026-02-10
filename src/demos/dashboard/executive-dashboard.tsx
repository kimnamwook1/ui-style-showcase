"use client";

export default function ExecutiveDashboardDemo() {
  return (
    <div className="min-h-[400px] p-6" style={{ background: "#f8fafc" }}>
      <div className="mx-auto max-w-xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold" style={{ color: "#0f172a" }}>
              Overview
            </h2>
            <p className="text-xs" style={{ color: "#94a3b8" }}>
              Q4 2025 Performance
            </p>
          </div>
          <div
            className="rounded-lg px-3 py-1.5 text-xs font-medium"
            style={{
              background: "#f0fdf4",
              color: "#16a34a",
              border: "1px solid #bbf7d0",
            }}
          >
            ↑ 12.5% vs Q3
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Revenue", value: "$2.4M", change: "+18%", up: true },
            { label: "Users", value: "48.2K", change: "+24%", up: true },
            { label: "Churn", value: "2.1%", change: "-0.3%", up: false },
            { label: "NPS", value: "72", change: "+5", up: true },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl p-3"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
              }}
            >
              <p className="text-[10px] font-medium" style={{ color: "#94a3b8" }}>
                {kpi.label}
              </p>
              <p className="mt-1 text-lg font-bold" style={{ color: "#0f172a" }}>
                {kpi.value}
              </p>
              <p
                className="text-[10px] font-medium"
                style={{ color: kpi.up ? "#16a34a" : "#dc2626" }}
              >
                {kpi.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart placeholder */}
        <div
          className="rounded-xl p-4"
          style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium" style={{ color: "#0f172a" }}>
              Revenue Trend
            </p>
            <div className="flex gap-1">
              {["1W", "1M", "3M", "1Y"].map((period) => (
                <button
                  key={period}
                  className="rounded px-2 py-0.5 text-[10px] font-medium"
                  style={{
                    background: period === "3M" ? "#0f172a" : "transparent",
                    color: period === "3M" ? "#fff" : "#94a3b8",
                  }}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          {/* Simple SVG chart */}
          <svg viewBox="0 0 400 120" className="mt-3 w-full">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,80 L50,70 L100,60 L150,65 L200,45 L250,50 L300,30 L350,35 L400,15"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2"
            />
            <path
              d="M0,80 L50,70 L100,60 L150,65 L200,45 L250,50 L300,30 L350,35 L400,15 L400,120 L0,120Z"
              fill="url(#chartGrad)"
            />
          </svg>
        </div>

        {/* Recent activity */}
        <div
          className="rounded-xl p-4"
          style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}
        >
          <p className="text-sm font-medium" style={{ color: "#0f172a" }}>
            Recent Activity
          </p>
          <div className="mt-3 space-y-2">
            {[
              { action: "New enterprise deal", amount: "+$125K", time: "2h ago" },
              { action: "Monthly report generated", amount: "", time: "5h ago" },
              { action: "User milestone reached", amount: "50K users", time: "1d ago" },
            ].map((item) => (
              <div
                key={item.action}
                className="flex items-center justify-between py-1.5"
                style={{ borderBottom: "1px solid #f1f5f9" }}
              >
                <div>
                  <p className="text-xs font-medium" style={{ color: "#334155" }}>
                    {item.action}
                  </p>
                  <p className="text-[10px]" style={{ color: "#94a3b8" }}>
                    {item.time}
                  </p>
                </div>
                {item.amount && (
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "#6366f1" }}
                  >
                    {item.amount}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
