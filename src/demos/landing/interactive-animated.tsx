"use client";

import { useState, useEffect } from "react";

export default function InteractiveAnimated() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [gradientAngle, setGradientAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle((a) => (a + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const cards = [
    { title: "Design", desc: "Create beautiful interfaces", gradient: "linear-gradient(135deg, #7f5af0, #a78bfa)" },
    { title: "Develop", desc: "Build with modern tools", gradient: "linear-gradient(135deg, #2ee59d, #34d399)" },
    { title: "Deploy", desc: "Ship with confidence", gradient: "linear-gradient(135deg, #e94560, #f472b6)" },
  ];

  return (
    <div
      className="min-h-[400px] rounded-xl overflow-hidden relative cursor-crosshair"
      onMouseMove={handleMouseMove}
      style={{
        background: `linear-gradient(${gradientAngle}deg, #0a0a1a 0%, #1a0a2e 30%, #0a1a2e 60%, #0a0a1a 100%)`,
      }}
    >
      {/* Mouse-following gradient spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 200px at ${mousePos.x}% ${mousePos.y}%, rgba(127,90,240,0.12) 0%, transparent 100%)`,
        }}
      />

      {/* Floating shapes */}
      {[
        { size: 60, color: "#7f5af0", x: 15, y: 20, delay: 0, duration: 6 },
        { size: 40, color: "#2ee59d", x: 80, y: 15, delay: 1, duration: 5 },
        { size: 30, color: "#e94560", x: 70, y: 70, delay: 2, duration: 7 },
        { size: 50, color: "#f59e0b", x: 20, y: 75, delay: 0.5, duration: 4 },
        { size: 25, color: "#3b82f6", x: 50, y: 10, delay: 1.5, duration: 8 },
      ].map((shape, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            background: `${shape.color}15`,
            border: `1px solid ${shape.color}30`,
            animation: `floatShape ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
          }}
        />
      ))}

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(127,90,240,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(127,90,240,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center pt-8 px-4">
        <h2
          className="text-3xl font-bold mb-2"
          style={{
            background: `linear-gradient(${gradientAngle}deg, #7f5af0, #2ee59d, #e94560)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Interactive Experience
        </h2>
        <p className="text-sm text-gray-400">Move your cursor and interact with the elements</p>
      </div>

      {/* Hoverable cards */}
      <div className="relative z-10 flex justify-center gap-4 px-6 py-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative flex-1 max-w-[180px] p-4 rounded-xl cursor-pointer transition-all duration-300"
            style={{
              background: activeCard === i ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${activeCard === i ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)"}`,
              transform: activeCard === i ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)",
              boxShadow: activeCard === i ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
            }}
            onMouseEnter={() => setActiveCard(i)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div
              className="w-10 h-10 rounded-lg mb-3 flex items-center justify-center text-white font-bold text-sm"
              style={{
                background: card.gradient,
                boxShadow: activeCard === i ? `0 4px 15px ${card.gradient.includes("#7f5af0") ? "rgba(127,90,240,0.4)" : card.gradient.includes("#2ee59d") ? "rgba(46,229,157,0.4)" : "rgba(233,69,96,0.4)"}` : "none",
              }}
            >
              {i + 1}
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">{card.title}</h3>
            <p className="text-[11px] text-gray-400">{card.desc}</p>

            {/* Animated border on hover */}
            {activeCard === i && (
              <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: `linear-gradient(${gradientAngle}deg, rgba(127,90,240,0.2), transparent, rgba(46,229,157,0.2))`,
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: 1,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Animated wave/pulse line */}
      <div className="relative z-10 flex justify-center px-8 pb-4">
        <svg width="100%" height="40" viewBox="0 0 400 40" className="max-w-md">
          <path
            d="M0 20 Q50 5 100 20 Q150 35 200 20 Q250 5 300 20 Q350 35 400 20"
            fill="none"
            stroke="url(#waveGrad)"
            strokeWidth="2"
            strokeDasharray="8 4"
            style={{ animation: "dashMove 3s linear infinite" }}
          />
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7f5af0" />
              <stop offset="50%" stopColor="#2ee59d" />
              <stop offset="100%" stopColor="#e94560" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Interactive button */}
      <div className="relative z-10 text-center pb-8">
        <button
          className="group relative px-6 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
          style={{
            background: `linear-gradient(${gradientAngle}deg, #7f5af0, #2ee59d)`,
            boxShadow: "0 4px 20px rgba(127,90,240,0.3)",
          }}
        >
          <span className="relative z-10">Explore More</span>
        </button>
      </div>

      <style>{`
        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(-5px) rotate(-3deg); }
          75% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes dashMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -24; }
        }
      `}</style>
    </div>
  );
}
