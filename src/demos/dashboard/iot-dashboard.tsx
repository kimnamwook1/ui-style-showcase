"use client";

import { useState, useEffect } from "react";

export default function IoTDashboardDemo() {
  const [temp, setTemp] = useState(23);
  const [humidity, setHumidity] = useState(65);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp((t) => Math.round((t + (Math.random() - 0.5) * 0.6) * 10) / 10);
      setHumidity((h) => Math.min(100, Math.max(30, Math.round(h + (Math.random() - 0.5) * 2))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[400px] p-6" style={{ background: "#0f1923" }}>
      <div className="mx-auto max-w-xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold" style={{ color: "#e2e8f0" }}>IoT Hub</h2>
            <p className="text-xs" style={{ color: "#64748b" }}>5 devices connected</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
            <span className="text-xs" style={{ color: "#22c55e" }}>Online</span>
          </div>
        </div>

        {/* Device cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: "Living Room", icon: "\uD83C\uDF21", value: `${temp}\u00B0C`, status: "active", color: "#f59e0b" },
            { name: "Humidity", icon: "\uD83D\uDCA7", value: `${humidity}%`, status: "active", color: "#3b82f6" },
            { name: "Door Lock", icon: "\uD83D\uDD12", value: "Locked", status: "secure", color: "#22c55e" },
          ].map((device) => (
            <div
              key={device.name}
              className="rounded-xl p-4"
              style={{ background: "#1a2735", border: `1px solid ${device.color}20` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">{device.icon}</span>
                <div className="w-2 h-2 rounded-full" style={{ background: device.color }} />
              </div>
              <p className="text-xl font-bold mt-3" style={{ color: device.color }}>{device.value}</p>
              <p className="text-xs mt-1" style={{ color: "#64748b" }}>{device.name}</p>
            </div>
          ))}
        </div>

        {/* Sensor graph */}
        <div className="rounded-xl p-4" style={{ background: "#1a2735", border: "1px solid #1e3a4f" }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium" style={{ color: "#e2e8f0" }}>Temperature (24h)</p>
            <span className="text-xs px-2 py-0.5 rounded" style={{ background: "#f59e0b20", color: "#f59e0b" }}>Live</span>
          </div>
          <svg viewBox="0 0 400 80" className="w-full">
            <defs>
              <linearGradient id="iotGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,50 L40,45 L80,48 L120,35 L160,40 L200,30 L240,38 L280,25 L320,32 L360,20 L400,28" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <path d="M0,50 L40,45 L80,48 L120,35 L160,40 L200,30 L240,38 L280,25 L320,32 L360,20 L400,28 L400,80 L0,80Z" fill="url(#iotGrad)" />
          </svg>
        </div>

        {/* Device list */}
        <div className="rounded-xl p-4 space-y-3" style={{ background: "#1a2735", border: "1px solid #1e3a4f" }}>
          <p className="text-sm font-medium" style={{ color: "#e2e8f0" }}>All Devices</p>
          {[
            { name: "Smart Light", room: "Bedroom", status: "On", color: "#fbbf24" },
            { name: "AC Unit", room: "Living Room", status: "22\u00B0C", color: "#3b82f6" },
            { name: "Camera", room: "Front Door", status: "Recording", color: "#ef4444" },
          ].map((d) => (
            <div key={d.name} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid #1e3a4f" }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                <div>
                  <p className="text-xs font-medium" style={{ color: "#e2e8f0" }}>{d.name}</p>
                  <p className="text-[10px]" style={{ color: "#64748b" }}>{d.room}</p>
                </div>
              </div>
              <span className="text-xs" style={{ color: d.color }}>{d.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
