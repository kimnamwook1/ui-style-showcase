"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 9,
    annualPrice: 7,
    description: "Perfect for individuals",
    features: [
      { text: "5 projects", included: true },
      { text: "Basic analytics", included: true },
      { text: "Email support", included: true },
      { text: "Custom domains", included: false },
      { text: "Team collaboration", included: false },
      { text: "API access", included: false },
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: "linear-gradient(135deg, #6366f1, #818cf8)",
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    annualPrice: 24,
    description: "Best for growing teams",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority support", included: true },
      { text: "Custom domains", included: true },
      { text: "Team collaboration", included: true },
      { text: "API access", included: false },
    ],
    cta: "Get Started",
    popular: true,
    gradient: "linear-gradient(135deg, #7f5af0, #a78bfa)",
  },
  {
    name: "Enterprise",
    monthlyPrice: 79,
    annualPrice: 66,
    description: "For large organizations",
    features: [
      { text: "Unlimited everything", included: true },
      { text: "Custom analytics", included: true },
      { text: "Dedicated support", included: true },
      { text: "Custom domains", included: true },
      { text: "Team collaboration", included: true },
      { text: "Full API access", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "linear-gradient(135deg, #e94560, #f472b6)",
  },
];

export default function ComparisonPricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div
      className="min-h-[400px] rounded-xl overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(180deg, #fafbff 0%, #f5f3ff 100%)" }}
    >
      {/* Header */}
      <div className="text-center pt-5 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Simple, transparent pricing</h2>
        <p className="text-sm text-gray-500 mb-4">Choose the plan that fits your needs</p>

        {/* Toggle */}
        <div className="inline-flex items-center gap-3 bg-white rounded-full px-1 py-1 shadow-sm border border-gray-100">
          <button
            onClick={() => setIsAnnual(false)}
            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
            style={{
              background: !isAnnual ? "#7f5af0" : "transparent",
              color: !isAnnual ? "#fff" : "#666",
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1"
            style={{
              background: isAnnual ? "#7f5af0" : "transparent",
              color: isAnnual ? "#fff" : "#666",
            }}
          >
            Annual
            <span
              className="px-1.5 py-0.5 rounded-full text-[9px] font-bold"
              style={{
                background: isAnnual ? "rgba(255,255,255,0.2)" : "rgba(127,90,240,0.1)",
                color: isAnnual ? "#fff" : "#7f5af0",
              }}
            >
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="flex-1 flex items-start justify-center gap-3 px-4 py-4">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="flex-1 max-w-[200px] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            style={{
              background: "#fff",
              border: plan.popular ? "2px solid #7f5af0" : "1px solid #e5e7eb",
              transform: plan.popular ? "scale(1.04)" : "scale(1)",
              boxShadow: plan.popular ? "0 8px 30px rgba(127,90,240,0.15)" : "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div
                className="text-center py-1 text-[10px] font-bold text-white uppercase tracking-wider"
                style={{ background: plan.gradient }}
              >
                Most Popular
              </div>
            )}

            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900">{plan.name}</h3>
              <p className="text-[10px] text-gray-400 mb-3">{plan.description}</p>

              {/* Price */}
              <div className="flex items-baseline gap-0.5 mb-3">
                <span className="text-2xl font-bold text-gray-900">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-xs text-gray-400">/mo</span>
              </div>
              {isAnnual && (
                <div className="text-[10px] text-green-600 -mt-2 mb-3">
                  Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                </div>
              )}

              {/* CTA */}
              <button
                className="w-full py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90 mb-3"
                style={{
                  background: plan.popular ? plan.gradient : "transparent",
                  color: plan.popular ? "#fff" : "#7f5af0",
                  border: plan.popular ? "none" : "1.5px solid #7f5af0",
                }}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div className="space-y-1.5">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2">
                    {f.included ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ee59d" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                    <span
                      className="text-[11px]"
                      style={{ color: f.included ? "#374151" : "#d1d5db" }}
                    >
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pb-4 px-4">
        <p className="text-[11px] text-gray-400">
          All plans include 14-day free trial. No credit card required.
        </p>
      </div>
    </div>
  );
}
