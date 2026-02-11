"use client";

import { useState, useEffect } from "react";

const services = [
  { name: "API Gateway", status: "healthy", latency: "12ms", uptime: "99.99%" },
  { name: "Auth Service", status: "healthy", latency: "8ms", uptime: "99.98%" },
  { name: "Database", status: "warning", latency: "45ms", uptime: "99.95%" },
  { name: "CDN", status: "healthy", latency: "3ms", uptime: "100%" },
  { name: "Queue Worker", status: "critical", latency: "120ms", uptime: "98.2%" },
  { name: "Cache Layer", status: "healthy", latency: "2ms", uptime: "99.99%" },
];

const alerts = [
  { time: "2 min ago", message: "Queue Worker response time exceeded 100ms", severity: "critical" },
  { time: "8 min ago", message: "Database connection pool at 85% capacity", severity: "warning" },
  { time: "24 min ago", message: "CDN cache invalidation completed", severity: "info" },
];

export default function RealtimeMonitor() {
  const [heartbeat, setHeartbeat] = useState<number[]>([]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
      setHeartbeat((prev) => {
        const next = [...prev, 20 + Math.random() * 60];
        return next.slice(-30);
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const statusColor = (s: string) =>
    s === "healthy" ? "#2ee59d" : s === "warning" ? "#f59e0b" : "#e94560";

  const heartbeatPath = heartbeat
    .map((v, i) => `${i === 0 ? "M" : "L"} ${(i / 29) * 100},${100 - v}`)
    .join(" ");

  return (
    <div className="min-h-[400px] rounded-xl overflow-hidden flex flex-col" style={{ background: "#0d0f1a" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: "#2ee59d",
              boxShadow: "0 0 8px rgba(46,229,157,0.5)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <h2 className="text-sm font-bold text-white">System Monitor</h2>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: "rgba(46,229,157,0.1)", color: "#2ee59d" }}>
            LIVE
          </span>
        </div>
        <div className="text-[10px] font-mono text-gray-500">
          Last update: {tick}s ago
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex gap-3 p-3 overflow-hidden">
        {/* Left - Heartbeat and stats */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Heartbeat chart */}
          <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-gray-400">Heartbeat Monitor</span>
              <span className="text-[10px] font-mono" style={{ color: "#2ee59d" }}>
                {heartbeat.length > 0 ? `${Math.round(heartbeat[heartbeat.length - 1])}ms` : "--"}
              </span>
            </div>
            <svg width="100%" height="60" viewBox="0 0 100 100" preserveAspectRatio="none" className="rounded">
              {/* Grid lines */}
              {[25, 50, 75].map((y) => (
                <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              ))}
              {/* Line chart */}
              {heartbeat.length > 1 && (
                <>
                  <path d={heartbeatPath} fill="none" stroke="#2ee59d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Glow effect */}
                  <path d={heartbeatPath} fill="none" stroke="#2ee59d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
                  {/* Area fill */}
                  <path
                    d={`${heartbeatPath} L 100,100 L 0,100 Z`}
                    fill="url(#heartGrad)"
                    opacity="0.1"
                  />
                </>
              )}
              <defs>
                <linearGradient id="heartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2ee59d" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Requests/sec", value: `${(1200 + Math.floor(Math.random() * 200)).toLocaleString()}`, color: "#7f5af0" },
              { label: "Error Rate", value: "0.02%", color: "#2ee59d" },
              { label: "Active Users", value: `${342 + Math.floor(Math.random() * 20)}`, color: "#3b82f6" },
            ].map((m, i) => (
              <div
                key={i}
                className="rounded-lg p-2 text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="text-[9px] text-gray-500 mb-0.5">{m.label}</div>
                <div className="text-sm font-bold font-mono" style={{ color: m.color }}>{m.value}</div>
              </div>
            ))}
          </div>

          {/* Alerts */}
          <div className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="text-[10px] font-semibold text-gray-400 mb-1.5 px-1">Recent Alerts</div>
            <div className="space-y-1">
              {alerts.map((a, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 px-2 py-1.5 rounded"
                  style={{ background: a.severity === "critical" ? "rgba(233,69,96,0.08)" : a.severity === "warning" ? "rgba(245,158,11,0.06)" : "rgba(59,130,246,0.06)" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0"
                    style={{
                      background: a.severity === "critical" ? "#e94560" : a.severity === "warning" ? "#f59e0b" : "#3b82f6",
                      boxShadow: `0 0 4px ${a.severity === "critical" ? "rgba(233,69,96,0.5)" : a.severity === "warning" ? "rgba(245,158,11,0.5)" : "rgba(59,130,246,0.5)"}`,
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-gray-300 truncate">{a.message}</div>
                    <div className="text-[8px] text-gray-500 mt-0.5">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Service status */}
        <div className="w-44 flex-shrink-0 rounded-lg p-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-[10px] font-semibold text-gray-400 mb-2 px-1">Service Status</div>
          <div className="space-y-1.5">
            {services.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer transition-colors hover:bg-white/5"
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background: statusColor(s.status),
                    boxShadow: `0 0 6px ${statusColor(s.status)}60`,
                    animation: s.status !== "healthy" ? "pulse 1.5s ease-in-out infinite" : "none",
                  }}
                />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-medium text-gray-300 truncate">{s.name}</div>
                  <div className="flex items-center gap-2 text-[8px] text-gray-500">
                    <span>{s.latency}</span>
                    <span>{s.uptime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall status */}
          <div className="mt-3 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-gray-400">Overall</span>
              <span className="font-medium" style={{ color: "#f59e0b" }}>Degraded</span>
            </div>
            <div className="w-full h-1 rounded-full mt-1" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="h-full rounded-full" style={{ width: "83%", background: "linear-gradient(90deg, #2ee59d, #f59e0b)" }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
