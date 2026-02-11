"use client";

import { useState } from "react";

export default function AccessibleInclusiveDemo() {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [focusVisible, setFocusVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const bg = highContrast ? "#000" : "#fff";
  const fg = highContrast ? "#fff" : "#1a1a1a";
  const accent = highContrast ? "#ffdd00" : "#0055cc";
  const border = highContrast ? "#fff" : "#ccc";
  const mutedBg = highContrast ? "#222" : "#f5f5f5";
  const mutedFg = highContrast ? "#ddd" : "#555";

  const focusStyle = focusVisible
    ? { outline: `3px solid ${accent}`, outlineOffset: "2px" }
    : {};

  return (
    <div
      className="min-h-[400px] p-8 transition-colors duration-300"
      style={{ backgroundColor: bg, color: fg, fontSize: `${fontSize}px` }}
    >
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="absolute left-2 top-2 px-4 py-2 rounded text-sm font-bold transition-transform -translate-y-20 focus:translate-y-0 z-50"
        style={{
          backgroundColor: accent,
          color: highContrast ? "#000" : "#fff",
          ...focusStyle,
        }}
      >
        Skip to main content
      </a>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: fg }}>
            Accessible &amp; Inclusive Design
          </h1>
          <p className="text-sm mt-1" style={{ color: mutedFg }}>
            WCAG 2.1 AA compliant interface patterns
          </p>
        </div>
        {/* WCAG badges */}
        <div className="flex gap-2">
          {["AA", "2.1", "A11y"].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{
                backgroundColor: accent,
                color: highContrast ? "#000" : "#fff",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Controls panel */}
      <div
        id="main-content"
        className="p-5 rounded-lg mb-6"
        style={{ backgroundColor: mutedBg, border: `2px solid ${border}` }}
        role="region"
        aria-label="Accessibility controls"
      >
        <h2 className="text-lg font-bold mb-4" style={{ color: fg }}>
          Accessibility Controls
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Font size */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: mutedFg }}>
              Font Size: {fontSize}px
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                className="w-12 h-12 rounded-lg text-lg font-bold transition-colors"
                style={{
                  backgroundColor: accent,
                  color: highContrast ? "#000" : "#fff",
                  minWidth: "48px",
                  minHeight: "48px",
                }}
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                className="w-12 h-12 rounded-lg text-lg font-bold transition-colors"
                style={{
                  backgroundColor: accent,
                  color: highContrast ? "#000" : "#fff",
                  minWidth: "48px",
                  minHeight: "48px",
                }}
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>

          {/* High contrast toggle */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: mutedFg }}>
              High Contrast
            </label>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className="w-12 h-12 rounded-lg flex items-center justify-center font-bold transition-colors"
              style={{
                backgroundColor: highContrast ? "#ffdd00" : "#333",
                color: highContrast ? "#000" : "#fff",
                minWidth: "48px",
                minHeight: "48px",
                border: `2px solid ${border}`,
              }}
              role="switch"
              aria-checked={highContrast}
              aria-label="Toggle high contrast mode"
            >
              {highContrast ? "ON" : "OFF"}
            </button>
          </div>

          {/* Focus indicators */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: mutedFg }}>
              Focus Indicators
            </label>
            <button
              onClick={() => setFocusVisible(!focusVisible)}
              className="w-12 h-12 rounded-lg flex items-center justify-center font-bold transition-colors"
              style={{
                backgroundColor: focusVisible ? accent : mutedBg,
                color: focusVisible ? (highContrast ? "#000" : "#fff") : fg,
                minWidth: "48px",
                minHeight: "48px",
                border: `2px solid ${border}`,
              }}
              role="switch"
              aria-checked={focusVisible}
              aria-label="Toggle focus indicators"
            >
              {focusVisible ? "\u25C9" : "\u25CB"}
            </button>
          </div>

          {/* Reduced motion */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: mutedFg }}>
              Reduced Motion
            </label>
            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className="w-12 h-12 rounded-lg flex items-center justify-center font-bold transition-colors"
              style={{
                backgroundColor: reducedMotion ? accent : mutedBg,
                color: reducedMotion ? (highContrast ? "#000" : "#fff") : fg,
                minWidth: "48px",
                minHeight: "48px",
                border: `2px solid ${border}`,
              }}
              role="switch"
              aria-checked={reducedMotion}
              aria-label="Toggle reduced motion"
            >
              {reducedMotion ? "\u23F8" : "\u25B6"}
            </button>
          </div>
        </div>
      </div>

      {/* Interactive elements showcase */}
      <div className="grid grid-cols-2 gap-4">
        {/* Form example */}
        <fieldset
          className="p-5 rounded-lg"
          style={{ backgroundColor: mutedBg, border: `2px solid ${border}` }}
        >
          <legend className="text-sm font-bold px-2" style={{ color: fg }}>
            Sample Form
          </legend>
          <div className="flex flex-col gap-3 mt-2">
            <div>
              <label htmlFor="name-input" className="text-sm font-bold block mb-1" style={{ color: fg }}>
                Full Name <span style={{ color: "#d00" }}>*</span>
              </label>
              <input
                id="name-input"
                type="text"
                placeholder="Enter your name"
                required
                aria-required="true"
                className="w-full px-4 py-3 rounded-lg text-sm transition-colors"
                style={{
                  backgroundColor: bg,
                  color: fg,
                  border: `2px solid ${border}`,
                  minHeight: "48px",
                  ...(focusVisible ? {} : {}),
                }}
              />
            </div>
            <button
              className="w-full py-3 rounded-lg font-bold text-sm transition-colors"
              style={{
                backgroundColor: accent,
                color: highContrast ? "#000" : "#fff",
                minHeight: "48px",
              }}
            >
              Submit Form
            </button>
          </div>
        </fieldset>

        {/* Info cards with proper semantics */}
        <div className="flex flex-col gap-3">
          <article
            className="p-4 rounded-lg"
            style={{ backgroundColor: mutedBg, border: `2px solid ${border}` }}
            role="article"
            aria-label="Contrast ratio information"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0"
                style={{
                  backgroundColor: accent,
                  color: highContrast ? "#000" : "#fff",
                }}
                aria-hidden="true"
              >
                4.5:1
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: fg }}>
                  Contrast Ratio
                </h3>
                <p className="text-xs" style={{ color: mutedFg }}>
                  Minimum AA standard for normal text
                </p>
              </div>
            </div>
          </article>

          <article
            className="p-4 rounded-lg"
            style={{ backgroundColor: mutedBg, border: `2px solid ${border}` }}
            role="article"
            aria-label="Touch target information"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0"
                style={{
                  backgroundColor: accent,
                  color: highContrast ? "#000" : "#fff",
                }}
                aria-hidden="true"
              >
                48px
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: fg }}>
                  Touch Targets
                </h3>
                <p className="text-xs" style={{ color: mutedFg }}>
                  Minimum 48x48px tap area for all controls
                </p>
              </div>
            </div>
          </article>

          <article
            className="p-4 rounded-lg"
            style={{ backgroundColor: mutedBg, border: `2px solid ${border}` }}
            role="article"
            aria-label="Screen reader support"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0"
                style={{
                  backgroundColor: accent,
                  color: highContrast ? "#000" : "#fff",
                }}
                aria-hidden="true"
              >
                SR
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: fg }}>
                  Screen Reader
                </h3>
                <p className="text-xs" style={{ color: mutedFg }}>
                  ARIA labels and semantic HTML throughout
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
