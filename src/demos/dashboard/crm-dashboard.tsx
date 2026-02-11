"use client";

import { useState } from "react";

const pipelineStages = [
  { name: "Lead", count: 24, value: "$48K", color: "#818cf8" },
  { name: "Contact", count: 18, value: "$92K", color: "#7f5af0" },
  { name: "Deal", count: 12, value: "$156K", color: "#2ee59d" },
  { name: "Won", count: 8, value: "$240K", color: "#f59e0b" },
];

const contacts = [
  { name: "Alex Morgan", company: "TechCorp", deal: "$24,000", stage: "Deal", avatar: "#7f5af0", lastContact: "2h ago" },
  { name: "Priya Patel", company: "DataFlow", deal: "$18,500", stage: "Contact", avatar: "#2ee59d", lastContact: "4h ago" },
  { name: "James Wilson", company: "CloudNine", deal: "$32,000", stage: "Won", avatar: "#e94560", lastContact: "1d ago" },
  { name: "Maria Garcia", company: "Innovate.io", deal: "$15,000", stage: "Lead", avatar: "#f59e0b", lastContact: "30m ago" },
];

const activities = [
  { action: "Call completed", contact: "Alex Morgan", time: "10:30 AM", type: "call" },
  { action: "Email sent", contact: "Priya Patel", time: "9:45 AM", type: "email" },
  { action: "Deal closed", contact: "James Wilson", time: "9:00 AM", type: "deal" },
  { action: "Meeting scheduled", contact: "Maria Garcia", time: "Yesterday", type: "meeting" },
  { action: "Note added", contact: "Alex Morgan", time: "Yesterday", type: "note" },
];

export default function CrmDashboard() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <div className="min-h-[400px] rounded-xl overflow-hidden flex flex-col" style={{ background: "#f8f9fb" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
        <div>
          <h2 className="text-sm font-bold text-gray-900">Sales Pipeline</h2>
          <p className="text-[10px] text-gray-400">Q4 2025 Overview</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {["#7f5af0", "#2ee59d", "#e94560"].map((c, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[8px] text-white font-bold"
                style={{ background: c }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <button className="px-2.5 py-1.5 rounded-lg text-[10px] font-semibold text-white" style={{ background: "#7f5af0" }}>
            + New Deal
          </button>
        </div>
      </div>

      {/* Pipeline stages */}
      <div className="px-4 py-3">
        <div className="flex gap-2">
          {pipelineStages.map((stage, i) => (
            <button
              key={i}
              className="flex-1 rounded-lg p-3 transition-all duration-200 cursor-pointer text-left"
              style={{
                background: activeStage === stage.name ? `${stage.color}15` : "#fff",
                border: `1.5px solid ${activeStage === stage.name ? stage.color : "#e5e7eb"}`,
                transform: activeStage === stage.name ? "translateY(-2px)" : "none",
                boxShadow: activeStage === stage.name ? `0 4px 12px ${stage.color}20` : "none",
              }}
              onClick={() => setActiveStage(activeStage === stage.name ? null : stage.name)}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold text-gray-700">{stage.name}</span>
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ background: stage.color }}
                >
                  {stage.count}
                </span>
              </div>
              <div className="text-sm font-bold text-gray-900">{stage.value}</div>
              {/* Arrow connector */}
              {i < pipelineStages.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-gray-300 text-xs">
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Pipeline flow indicator */}
        <div className="flex items-center mt-2 gap-0">
          {pipelineStages.map((stage, i) => (
            <div key={i} className="flex-1 flex items-center">
              <div className="flex-1 h-1 rounded-full" style={{ background: `${stage.color}30` }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${(stage.count / 24) * 100}%`, background: stage.color }}
                />
              </div>
              {i < pipelineStages.length - 1 && (
                <svg width="12" height="8" viewBox="0 0 12 8" className="flex-shrink-0 mx-0.5">
                  <path d="M0 4h8M6 1l3 3-3 3" fill="none" stroke="#d1d5db" strokeWidth="1" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex gap-3 px-4 pb-3 overflow-hidden">
        {/* Contact cards */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="text-[10px] font-semibold text-gray-500 mb-2">Recent Contacts</div>
          <div className="flex-1 space-y-1.5 overflow-auto">
            {contacts
              .filter((c) => !activeStage || c.stage === activeStage)
              .map((contact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-2.5 bg-white rounded-lg border border-gray-100 cursor-pointer hover:shadow-sm transition-all"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                    style={{ background: contact.avatar }}
                  >
                    {contact.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-gray-800 truncate">{contact.name}</span>
                      <span className="text-[9px] font-bold text-gray-900">{contact.deal}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-gray-400">{contact.company}</span>
                      <span
                        className="text-[8px] px-1.5 py-0.5 rounded-full font-medium"
                        style={{
                          background: `${pipelineStages.find((s) => s.name === contact.stage)?.color}15`,
                          color: pipelineStages.find((s) => s.name === contact.stage)?.color,
                        }}
                      >
                        {contact.stage}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Activity timeline */}
        <div className="w-48 flex-shrink-0">
          <div className="text-[10px] font-semibold text-gray-500 mb-2">Activity Timeline</div>
          <div className="space-y-0">
            {activities.map((a, i) => (
              <div key={i} className="flex gap-2">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background:
                        a.type === "call" ? "#7f5af0" :
                        a.type === "email" ? "#3b82f6" :
                        a.type === "deal" ? "#2ee59d" :
                        a.type === "meeting" ? "#f59e0b" :
                        "#9ca3af",
                    }}
                  />
                  {i < activities.length - 1 && (
                    <div className="w-[1px] flex-1 min-h-[20px]" style={{ background: "#e5e7eb" }} />
                  )}
                </div>
                {/* Content */}
                <div className="pb-3">
                  <div className="text-[10px] font-medium text-gray-700">{a.action}</div>
                  <div className="text-[9px] text-gray-400">{a.contact}</div>
                  <div className="text-[8px] text-gray-300 mt-0.5">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
