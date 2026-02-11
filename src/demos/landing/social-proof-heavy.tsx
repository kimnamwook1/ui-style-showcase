"use client";

import { useState, useEffect } from "react";

const testimonials = [
  { name: "Sarah Chen", role: "CTO, TechFlow", text: "Absolutely transformed our workflow. We shipped 3x faster.", rating: 5, color: "#7f5af0" },
  { name: "Marcus Rivera", role: "Lead Designer, Pixel", text: "The best design tool I have used in my 10-year career.", rating: 5, color: "#2ee59d" },
  { name: "Emily Watson", role: "PM, CloudScale", text: "Our team adoption rate was 95% in the first week.", rating: 4, color: "#e94560" },
];

const logos = ["Stripe", "Vercel", "Linear", "Figma", "Notion", "Slack"];

const badges = [
  { label: "SOC 2", sub: "Certified" },
  { label: "GDPR", sub: "Compliant" },
  { label: "99.9%", sub: "Uptime" },
];

export default function SocialProofHeavy() {
  const [count, setCount] = useState(2247);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-[400px] rounded-xl overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(180deg, #fafbff 0%, #f0f2ff 100%)" }}
    >
      {/* Header */}
      <div className="text-center pt-6 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-[11px] font-semibold mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          Trusted by teams worldwide
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Join <span style={{ color: "#7f5af0" }}>{count.toLocaleString()}+</span> happy customers
        </h2>
        <p className="text-sm text-gray-500">See why teams choose us every day</p>
      </div>

      {/* Testimonial cards */}
      <div className="flex gap-3 px-4 py-4 overflow-x-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="min-w-[200px] flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              {/* Avatar */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ background: t.color }}
              >
                {t.name[0]}
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-900">{t.name}</div>
                <div className="text-[10px] text-gray-400">{t.role}</div>
              </div>
            </div>
            {/* Stars */}
            <div className="flex gap-0.5 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= t.rating ? "#f59e0b" : "#e5e7eb"}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
          </div>
        ))}
      </div>

      {/* Logo wall */}
      <div className="px-4 pb-3">
        <div className="text-[10px] text-gray-400 text-center uppercase tracking-widest mb-2">
          Powering the best teams
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="px-4 py-1.5 rounded-md text-xs font-bold tracking-wide transition-colors duration-200 cursor-default"
              style={{
                color: "#b0b5c5",
                background: "rgba(127,90,240,0.04)",
                border: "1px solid rgba(127,90,240,0.08)",
              }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="flex justify-center items-center gap-3 px-4 pb-4 mt-auto">
        {badges.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-100 shadow-sm"
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7f5af0, #2ee59d)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">{b.label}</div>
              <div className="text-[10px] text-gray-400">{b.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Social proof bar */}
      <div
        className="px-4 py-3 flex items-center justify-center gap-4 text-[11px]"
        style={{ background: "rgba(127,90,240,0.05)", borderTop: "1px solid rgba(127,90,240,0.08)" }}
      >
        <div className="flex -space-x-2">
          {["#7f5af0", "#2ee59d", "#e94560", "#f59e0b", "#3b82f6"].map((c, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full border-2 border-white"
              style={{ background: c }}
            />
          ))}
        </div>
        <span className="text-gray-500">
          <strong className="text-gray-700">4.9/5</strong> from 1,200+ reviews
        </span>
      </div>
    </div>
  );
}
