"use client";

import { useState, useEffect } from "react";

export default function TerminalCLIDemo() {
  const [lines, setLines] = useState<string[]>([]);
  const fullLines = [
    "$ whoami",
    "developer@localhost",
    "$ uname -a",
    "Linux showcase 6.1.0 x86_64 GNU/Linux",
    "$ cat /etc/motd",
    "╔══════════════════════════════════╗",
    "║   Welcome to Terminal / CLI UI   ║",
    "║   Type 'help' for commands       ║",
    "╚══════════════════════════════════╝",
    "$ top -n 1 | head -5",
    "  PID  USER   CPU%  MEM%  COMMAND",
    "  142  root   12.3   4.2  node",
    "  389  dev     8.7   2.1  nginx",
    "  412  dev     3.2   1.8  postgres",
    "$ echo 'Ready.'",
    "Ready.",
    "$ _",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullLines.length) {
        setLines((prev) => [...prev, fullLines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-[400px] p-6 font-mono" style={{ background: "#0c0c0c" }}>
      <div className="mx-auto max-w-lg space-y-4">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-t-lg" style={{ background: "#1a1a1a" }}>
          <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#27ca3f" }} />
          <span className="ml-2 text-xs" style={{ color: "#666" }}>bash — 80x24</span>
        </div>

        {/* Terminal body */}
        <div
          className="rounded-b-lg p-4 text-xs leading-5 min-h-[280px]"
          style={{ background: "#0c0c0c", border: "1px solid #222" }}
        >
          {lines.map((line, i) => (
            <div key={i}>
              {line.startsWith("$") ? (
                <span>
                  <span style={{ color: "#27ca3f" }}>{">"} </span>
                  <span style={{ color: "#e5e5e5" }}>{line.slice(2)}</span>
                </span>
              ) : line.startsWith("╔") || line.startsWith("║") || line.startsWith("╚") ? (
                <span style={{ color: "#ffbd2e" }}>{line}</span>
              ) : line.includes("PID") ? (
                <span style={{ color: "#5fafff" }}>{line}</span>
              ) : (
                <span style={{ color: "#aaa" }}>{line}</span>
              )}
            </div>
          ))}
          <span
            className="inline-block w-2 h-4 ml-px animate-pulse"
            style={{ background: "#27ca3f" }}
          />
        </div>

        {/* Status bar */}
        <div
          className="flex items-center justify-between px-3 py-1 rounded text-[10px]"
          style={{ background: "#1a1a1a", color: "#666" }}
        >
          <span>UTF-8</span>
          <span>LF</span>
          <span>bash 5.2.21</span>
          <span>Ln 17, Col 1</span>
        </div>
      </div>
    </div>
  );
}
