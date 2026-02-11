"use client";

import { useState } from "react";

export default function MicroInteractionsDemo() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [checks, setChecks] = useState([false, true, false]);
  const [progress, setProgress] = useState(65);
  const [rating, setRating] = useState(3);
  const [hoverRating, setHoverRating] = useState(0);
  const [count, setCount] = useState(0);
  const [activeRadio, setActiveRadio] = useState(0);
  const [sliderVal, setSliderVal] = useState(50);
  const [rippleBtn, setRippleBtn] = useState<{ x: number; y: number } | null>(null);

  const toggleCheck = (i: number) => {
    const n = [...checks];
    n[i] = !n[i];
    setChecks(n);
  };

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRippleBtn({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(() => setRippleBtn(null), 600);
  };

  return (
    <div className="min-h-[400px] p-8 font-sans" style={{ backgroundColor: "#f8f9fc" }}>
      <style>{`
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes checkPop {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes progressFill {
          from { width: 0%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes slideIn {
          from { transform: translateY(4px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Micro Interactions</h1>
        <p className="text-sm text-gray-500 mt-1">
          Delightful details that bring UI to life
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Toggle switches */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            Toggles
          </p>
          <div className="flex flex-col gap-4">
            {[
              { label: "Wi-Fi", val: toggle1, set: setToggle1, color: "#6366f1" },
              { label: "Bluetooth", val: toggle2, set: setToggle2, color: "#0ea5e9" },
            ].map((t) => (
              <div key={t.label} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{t.label}</span>
                <button
                  onClick={() => t.set(!t.val)}
                  className="w-11 h-6 rounded-full relative transition-colors duration-300"
                  style={{ backgroundColor: t.val ? t.color : "#d1d5db" }}
                >
                  <div
                    className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-300"
                    style={{
                      left: t.val ? "22px" : "2px",
                      boxShadow: t.val ? `0 0 8px ${t.color}66` : "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Checkboxes */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            Checkboxes
          </p>
          <div className="flex flex-col gap-3">
            {["Email alerts", "Push notifications", "SMS updates"].map((label, i) => (
              <button
                key={label}
                onClick={() => toggleCheck(i)}
                className="flex items-center gap-3 text-left group"
              >
                <div
                  className="w-5 h-5 rounded flex items-center justify-center transition-all duration-200"
                  style={{
                    backgroundColor: checks[i] ? "#6366f1" : "transparent",
                    border: checks[i] ? "2px solid #6366f1" : "2px solid #d1d5db",
                    transform: checks[i] ? "scale(1)" : "scale(1)",
                  }}
                >
                  {checks[i] && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      style={{ animation: "checkPop 0.3s ease" }}
                    >
                      <path d="M2,6 L5,9 L10,3" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            Progress
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Upload</span>
              <span className="font-mono text-gray-500">{progress}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #6366f1, #a855f7)",
                  animation: "progressFill 1s ease-out",
                }}
              />
            </div>
            <div className="flex gap-2 mt-1">
              <button
                onClick={() => setProgress(Math.max(0, progress - 15))}
                className="flex-1 py-1 text-xs rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                - 15
              </button>
              <button
                onClick={() => setProgress(Math.min(100, progress + 15))}
                className="flex-1 py-1 text-xs rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                + 15
              </button>
            </div>
          </div>
        </div>

        {/* Star rating */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            Rating
          </p>
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform duration-150 hover:scale-125"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12,2 L14.5,9 L22,9 L16,13.5 L18.5,21 L12,16.5 L5.5,21 L8,13.5 L2,9 L9.5,9 Z"
                    fill={star <= (hoverRating || rating) ? "#f59e0b" : "#e5e7eb"}
                    stroke={star <= (hoverRating || rating) ? "#f59e0b" : "#d1d5db"}
                    strokeWidth="1"
                    style={{
                      transition: "fill 0.2s, stroke 0.2s",
                    }}
                  />
                </svg>
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500" style={{ animation: "slideIn 0.3s ease" }}>
            {rating === 5 ? "Excellent!" : rating === 4 ? "Great!" : rating === 3 ? "Good" : rating === 2 ? "Fair" : "Poor"}
          </p>
        </div>

        {/* Counter */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            Counter
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-150 active:scale-90"
              style={{ backgroundColor: "#f3f4f6", color: "#6366f1" }}
            >
              -
            </button>
            <span
              className="text-2xl font-bold text-gray-900 w-12 text-center tabular-nums"
              style={{ animation: "pulse 0.3s ease" }}
              key={count}
            >
              {count}
            </span>
            <button
              onClick={() => setCount(count + 1)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-150 active:scale-90"
              style={{ backgroundColor: "#6366f1", color: "#fff" }}
            >
              +
            </button>
          </div>
        </div>

        {/* Ripple button + radio */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            Buttons & Radio
          </p>
          <button
            onClick={handleRipple}
            className="relative overflow-hidden w-full py-2.5 rounded-lg text-sm font-medium text-white mb-4"
            style={{ backgroundColor: "#6366f1" }}
          >
            Click for Ripple
            {rippleBtn && (
              <span
                className="absolute rounded-full bg-white/30 pointer-events-none"
                style={{
                  left: rippleBtn.x - 10,
                  top: rippleBtn.y - 10,
                  width: 20,
                  height: 20,
                  animation: "ripple 0.6s linear",
                }}
              />
            )}
          </button>
          <div className="flex gap-3">
            {["S", "M", "L"].map((size, i) => (
              <button
                key={size}
                onClick={() => setActiveRadio(i)}
                className="flex-1 py-1.5 rounded text-xs font-medium transition-all duration-200"
                style={{
                  backgroundColor: activeRadio === i ? "#6366f1" : "#f3f4f6",
                  color: activeRadio === i ? "#fff" : "#6b7280",
                  transform: activeRadio === i ? "scale(1.05)" : "scale(1)",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
