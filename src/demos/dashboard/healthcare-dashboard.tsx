"use client";

import { useState, useEffect } from "react";

export default function HealthcareDashboardDemo() {
  const [bpm, setBpm] = useState(72);

  useEffect(() => {
    const interval = setInterval(() => {
      setBpm((b) => Math.min(100, Math.max(60, b + Math.round((Math.random() - 0.5) * 4))));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[400px] p-6" style={{ background: "#f0f5f9" }}>
      <div className="mx-auto max-w-xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold" style={{ color: "#1e293b" }}>Patient Monitor</h2>
            <p className="text-xs" style={{ color: "#94a3b8" }}>Ward 3B {"\u2022"} Bed 12</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "#dcfce7", border: "1px solid #bbf7d0" }}>
            <div className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
            <span className="text-xs font-medium" style={{ color: "#16a34a" }}>Stable</span>
          </div>
        </div>

        {/* Vital signs */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Heart Rate", value: `${bpm}`, unit: "bpm", color: "#ef4444", icon: "\u2665" },
            { label: "Blood Pressure", value: "120/80", unit: "mmHg", color: "#3b82f6", icon: "\u2195" },
            { label: "SpO2", value: "98", unit: "%", color: "#8b5cf6", icon: "\u25C9" },
            { label: "Temp", value: "36.6", unit: "\u00B0C", color: "#f59e0b", icon: "\uD83C\uDF21" },
          ].map((vital) => (
            <div
              key={vital.label}
              className="rounded-xl p-3"
              style={{ background: "#fff", border: "1px solid #e2e8f0" }}
            >
              <div className="flex items-center gap-1">
                <span className="text-xs" style={{ color: vital.color }}>{vital.icon}</span>
                <p className="text-[10px]" style={{ color: "#94a3b8" }}>{vital.label}</p>
              </div>
              <p className="text-xl font-bold mt-1" style={{ color: "#1e293b" }}>
                {vital.value}
                <span className="text-xs font-normal ml-1" style={{ color: "#94a3b8" }}>{vital.unit}</span>
              </p>
            </div>
          ))}
        </div>

        {/* ECG-like waveform */}
        <div className="rounded-xl p-4" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium" style={{ color: "#1e293b" }}>ECG Monitor</p>
            <span className="text-xs" style={{ color: "#ef4444" }}>{"\u2665"} {bpm} bpm</span>
          </div>
          <svg viewBox="0 0 400 80" className="w-full">
            <path
              d="M0,40 L30,40 L40,40 L50,38 L55,42 L60,40 L70,40 L75,10 L80,65 L85,30 L90,40 L120,40 L130,40 L140,38 L145,42 L150,40 L160,40 L165,10 L170,65 L175,30 L180,40 L210,40 L220,40 L230,38 L235,42 L240,40 L250,40 L255,10 L260,65 L265,30 L270,40 L300,40 L310,40 L320,38 L325,42 L330,40 L340,40 L345,10 L350,65 L355,30 L360,40 L400,40"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Medication & Schedule */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl p-4" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
            <p className="text-sm font-medium" style={{ color: "#1e293b" }}>Medications</p>
            <div className="mt-3 space-y-2">
              {[
                { name: "Lisinopril 10mg", time: "08:00", done: true },
                { name: "Metformin 500mg", time: "12:00", done: true },
                { name: "Aspirin 81mg", time: "20:00", done: false },
              ].map((med) => (
                <div key={med.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full border-2"
                    style={{
                      borderColor: med.done ? "#22c55e" : "#d1d5db",
                      background: med.done ? "#22c55e" : "transparent",
                    }}
                  />
                  <div className="flex-1">
                    <p className="text-xs" style={{ color: med.done ? "#94a3b8" : "#334155", textDecoration: med.done ? "line-through" : "none" }}>
                      {med.name}
                    </p>
                  </div>
                  <span className="text-[10px]" style={{ color: "#94a3b8" }}>{med.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-4" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
            <p className="text-sm font-medium" style={{ color: "#1e293b" }}>Upcoming</p>
            <div className="mt-3 space-y-2">
              {[
                { event: "Blood Test", time: "10:30 AM" },
                { event: "Dr. Kim Visit", time: "2:00 PM" },
                { event: "Physical Therapy", time: "4:30 PM" },
              ].map((appt) => (
                <div key={appt.event} className="flex items-center justify-between py-1">
                  <p className="text-xs" style={{ color: "#334155" }}>{appt.event}</p>
                  <span className="text-[10px] px-2 py-0.5 rounded" style={{ background: "#eff6ff", color: "#3b82f6" }}>
                    {appt.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
