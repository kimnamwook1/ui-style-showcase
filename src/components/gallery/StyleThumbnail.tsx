/**
 * CSS-only mini previews that capture the visual essence of each UI/UX style.
 * Each thumbnail is a self-contained React component using inline styles.
 */

const thumbnails: Record<string, () => React.ReactNode> = {
  // ═══════════════════════════════════════════
  // GENERAL
  // ═══════════════════════════════════════════
  neumorphism: () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#e0e5ec" }}>
      <div className="flex flex-col items-center gap-3">
        <div
          className="h-16 w-28 rounded-xl"
          style={{ background: "#e0e5ec", boxShadow: "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff" }}
        />
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-lg" style={{ background: "#e0e5ec", boxShadow: "4px 4px 8px #b8bec7, -4px -4px 8px #ffffff" }} />
          <div className="h-8 w-14 rounded-lg" style={{ background: "#e0e5ec", boxShadow: "inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #ffffff" }} />
        </div>
      </div>
    </div>
  ),

  glassmorphism: () => (
    <div className="relative flex h-full items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #667eea, #764ba2, #f093fb)" }}>
      <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full opacity-60" style={{ background: "#ff6b6b", filter: "blur(20px)" }} />
      <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full opacity-60" style={{ background: "#4ecdc4", filter: "blur(20px)" }} />
      <div className="h-20 w-32 rounded-xl border" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", borderColor: "rgba(255,255,255,0.25)" }}>
        <div className="p-3">
          <div className="h-2 w-12 rounded bg-white/40" />
          <div className="mt-2 h-1.5 w-20 rounded bg-white/20" />
          <div className="mt-1 h-1.5 w-16 rounded bg-white/20" />
        </div>
      </div>
    </div>
  ),

  brutalism: () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#fffbe6" }}>
      <div className="flex flex-col items-center gap-2">
        <div className="border-3 border-black px-4 py-2" style={{ background: "#ff6b6b", borderWidth: 3, boxShadow: "3px 3px 0 #000" }}>
          <span className="text-xs font-black uppercase text-black">BRUTALISM</span>
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-12 border-2 border-black" style={{ background: "#4ecdc4" }} />
          <div className="h-8 w-12 border-2 border-black" style={{ background: "#ffe66d" }} />
        </div>
        <div className="h-2 w-28 bg-black" />
      </div>
    </div>
  ),

  "dark-mode-oled": () => (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-4" style={{ background: "#000000" }}>
      <div className="flex w-full max-w-[8rem] gap-1.5">
        {[{ c: "#22c55e", w: "40%" }, { c: "#3b82f6", w: "60%" }, { c: "#a855f7", w: "50%" }].map((b, i) => (
          <div key={i} className="flex-1 rounded-md p-1.5" style={{ background: "#0a0a0a", border: "1px solid #1a1a1a" }}>
            <div className="h-1 rounded" style={{ background: b.c, width: b.w }} />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[8rem] space-y-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-1.5 rounded px-1.5 py-1" style={{ background: i === 1 ? "#111" : "transparent" }}>
            <div className="h-1 w-1 rounded-full" style={{ background: "#525252" }} />
            <div className="h-1 rounded" style={{ background: "#333", width: `${60 + i * 10}%` }} />
          </div>
        ))}
      </div>
    </div>
  ),

  "bento-box-grid": () => (
    <div className="flex h-full items-center justify-center p-3" style={{ background: "#f8f9fa" }}>
      <div className="grid w-full max-w-[9rem] grid-cols-4 grid-rows-3 gap-1" style={{ aspectRatio: "4/3" }}>
        <div className="col-span-2 row-span-2 rounded-lg" style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }} />
        <div className="rounded-lg" style={{ background: "#000" }} />
        <div className="rounded-lg" style={{ background: "#e8f5e9" }} />
        <div className="col-span-2 rounded-lg" style={{ background: "#fff3e0" }} />
        <div className="rounded-lg" style={{ background: "#fce4ec" }} />
        <div className="col-span-2 rounded-lg" style={{ background: "#e3f2fd" }} />
        <div className="rounded-lg" style={{ background: "#f3e5f5" }} />
      </div>
    </div>
  ),

  "y2k-aesthetic": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "linear-gradient(180deg, #ff9ff3, #c7ecee, #dff9fb)" }}>
      <div className="flex flex-col items-center gap-2">
        <span className="text-lg font-black" style={{ background: "linear-gradient(180deg, #fff, #c0c0c0, #fff, #808080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>✿ Y2K ✿</span>
        <div className="flex gap-1.5">
          <div className="rounded-full px-2 py-0.5 text-[8px] font-bold text-white" style={{ background: "linear-gradient(135deg, #a29bfe, #fd79a8)" }}>★ vibe</div>
          <div className="rounded-full px-2 py-0.5 text-[8px] font-bold" style={{ background: "linear-gradient(135deg, #ffeaa7, #fdcb6e)", color: "#e17055" }}>♡ cute</div>
        </div>
        <div className="rounded-full border border-dashed px-3 py-0.5 text-[7px]" style={{ borderColor: "#a29bfe", color: "#6c5ce7", background: "rgba(255,255,255,0.5)" }}>visitors: 048,291</div>
      </div>
    </div>
  ),

  "pixel-art": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#1a1c2c", imageRendering: "pixelated" as React.CSSProperties["imageRendering"] }}>
      <div className="flex flex-col items-center gap-2">
        <div className="grid grid-cols-5 gap-px">
          {[0,0,1,0,0, 0,1,1,1,0, 1,1,2,1,1, 0,1,1,1,0, 0,1,0,1,0].map((v, i) => (
            <div key={i} className="h-2 w-2" style={{ background: v === 0 ? "transparent" : v === 1 ? "#f4f4f4" : "#ef7d57" }} />
          ))}
        </div>
        <div className="flex gap-1">
          {["#ef7d57", "#ffcd75", "#a7f070", "#38b764", "#29adff"].map((c) => (
            <div key={c} className="h-2 w-2" style={{ background: c }} />
          ))}
        </div>
        <div className="h-2 w-20" style={{ background: "#333c57", border: "2px solid #566c86" }}>
          <div className="h-full" style={{ width: "65%", background: "#a7f070" }} />
        </div>
      </div>
    </div>
  ),

  minimalism: () => (
    <div className="flex h-full flex-col items-center justify-center gap-3" style={{ background: "#fafafa" }}>
      <div className="h-1.5 w-20 rounded bg-zinc-900" />
      <div className="space-y-1">
        <div className="h-1 w-24 rounded bg-zinc-200" />
        <div className="h-1 w-20 rounded bg-zinc-200" />
      </div>
      <div className="h-6 w-16 rounded-md bg-zinc-900" />
    </div>
  ),

  "flat-design": () => (
    <div className="flex h-full items-center justify-center gap-2 p-4" style={{ background: "#fff" }}>
      <div className="flex flex-col gap-1.5">
        <div className="h-10 w-10 rounded-lg" style={{ background: "#2196f3" }} />
        <div className="h-10 w-10 rounded-lg" style={{ background: "#4caf50" }} />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-10 w-10 rounded-lg" style={{ background: "#ff9800" }} />
        <div className="h-10 w-10 rounded-lg" style={{ background: "#e91e63" }} />
      </div>
    </div>
  ),

  "material-design": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#fafafa" }}>
      <div className="w-28 rounded-md bg-white" style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)" }}>
        <div className="h-8 rounded-t-md" style={{ background: "#6200ea" }} />
        <div className="space-y-1 p-2">
          <div className="h-1 w-16 rounded bg-zinc-200" />
          <div className="h-1 w-12 rounded bg-zinc-200" />
        </div>
        <div className="flex justify-end p-2">
          <div className="h-6 w-6 rounded-full" style={{ background: "#6200ea", boxShadow: "0 2px 8px rgba(98,0,234,0.3)" }} />
        </div>
      </div>
    </div>
  ),

  skeuomorphism: () => (
    <div className="flex h-full items-center justify-center" style={{ background: "linear-gradient(180deg, #c9ccd3, #a8abb3)" }}>
      <div className="w-28 rounded-lg p-2" style={{ background: "linear-gradient(180deg, #e8e8e8, #d0d0d0)", boxShadow: "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)" }}>
        <div className="rounded p-1.5" style={{ background: "linear-gradient(180deg, #f5f5dc, #e8dcc8)", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)" }}>
          <div className="h-1 w-14 rounded bg-zinc-500/30" />
          <div className="mt-1 h-1 w-10 rounded bg-zinc-500/30" />
        </div>
        <div className="mt-2 flex justify-center">
          <div className="h-5 w-16 rounded-md" style={{ background: "linear-gradient(180deg, #5b9bd5, #3a7cb8)", boxShadow: "0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)" }} />
        </div>
      </div>
    </div>
  ),

  claymorphism: () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#f0e6ff" }}>
      <div className="flex flex-col items-center gap-2">
        <div className="h-14 w-24 rounded-2xl" style={{ background: "#c4b5fd", boxShadow: "8px 8px 16px #b4a3ef, inset -4px -4px 8px rgba(0,0,0,0.05), inset 4px 4px 8px rgba(255,255,255,0.5)" }} />
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-xl" style={{ background: "#fca5a5", boxShadow: "4px 4px 8px rgba(0,0,0,0.1), inset -2px -2px 4px rgba(0,0,0,0.05), inset 2px 2px 4px rgba(255,255,255,0.5)" }} />
          <div className="h-8 w-8 rounded-xl" style={{ background: "#86efac", boxShadow: "4px 4px 8px rgba(0,0,0,0.1), inset -2px -2px 4px rgba(0,0,0,0.05), inset 2px 2px 4px rgba(255,255,255,0.5)" }} />
        </div>
      </div>
    </div>
  ),

  "aurora-ui": () => (
    <div className="relative flex h-full items-center justify-center overflow-hidden" style={{ background: "#0f0f23" }}>
      <div className="absolute h-32 w-32 rounded-full opacity-40" style={{ background: "#22d3ee", filter: "blur(30px)", top: "10%", left: "20%" }} />
      <div className="absolute h-24 w-24 rounded-full opacity-30" style={{ background: "#a78bfa", filter: "blur(25px)", bottom: "10%", right: "15%" }} />
      <div className="absolute h-20 w-20 rounded-full opacity-30" style={{ background: "#34d399", filter: "blur(25px)", top: "40%", right: "30%" }} />
      <div className="relative z-10 h-1.5 w-16 rounded bg-white/30" />
    </div>
  ),

  "gradient-mesh": () => (
    <div className="relative h-full overflow-hidden" style={{ background: "#fef3c7" }}>
      <div className="absolute h-24 w-24 rounded-full" style={{ background: "#f472b6", filter: "blur(30px)", top: "-10%", left: "-10%" }} />
      <div className="absolute h-28 w-28 rounded-full" style={{ background: "#818cf8", filter: "blur(35px)", bottom: "-10%", right: "-10%" }} />
      <div className="absolute h-20 w-20 rounded-full" style={{ background: "#34d399", filter: "blur(25px)", top: "30%", left: "40%" }} />
      <div className="absolute h-16 w-16 rounded-full" style={{ background: "#fb923c", filter: "blur(20px)", bottom: "20%", left: "10%" }} />
    </div>
  ),

  "neon-glow": () => (
    <div className="flex h-full flex-col items-center justify-center gap-3" style={{ background: "#0a0a0a" }}>
      <div className="text-sm font-bold" style={{ color: "#0ff", textShadow: "0 0 7px #0ff, 0 0 20px #0ff, 0 0 40px #0ff" }}>NEON</div>
      <div className="h-px w-20" style={{ background: "#f0f", boxShadow: "0 0 5px #f0f, 0 0 15px #f0f" }} />
      <div className="h-6 w-16 rounded border" style={{ borderColor: "#0f0", boxShadow: "0 0 5px #0f0, inset 0 0 5px #0f0" }} />
    </div>
  ),

  "retro-vintage": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#f5e6d3" }}>
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#8b4513", fontFamily: "serif" }}>EST. 1952</div>
        <div className="h-px w-20" style={{ background: "#8b4513" }} />
        <div className="text-lg font-bold" style={{ color: "#5c3317", fontFamily: "serif" }}>Vintage</div>
        <div className="h-px w-20" style={{ background: "#8b4513" }} />
        <div className="text-[7px] tracking-[0.15em] uppercase" style={{ color: "#a0724a" }}>quality · craft · style</div>
      </div>
    </div>
  ),

  "memphis-design": () => (
    <div className="relative flex h-full items-center justify-center overflow-hidden" style={{ background: "#fff" }}>
      <div className="absolute h-12 w-12 rounded-full" style={{ background: "#ff6b6b", top: "15%", left: "10%" }} />
      <div className="absolute h-8 w-8" style={{ background: "#ffd93d", transform: "rotate(45deg)", top: "20%", right: "20%" }} />
      <div className="absolute" style={{ width: 0, height: 0, borderLeft: "15px solid transparent", borderRight: "15px solid transparent", borderBottom: "26px solid #6c5ce7", bottom: "15%", left: "25%" }} />
      <div className="absolute h-20 w-3" style={{ background: "repeating-linear-gradient(0deg, #000 0px, #000 3px, transparent 3px, transparent 6px)", right: "15%", top: "30%" }} />
      <div className="absolute bottom-3 h-3 w-20" style={{ background: "repeating-linear-gradient(90deg, #ff6b6b 0px, #ff6b6b 4px, transparent 4px, transparent 8px)" }} />
    </div>
  ),

  "art-deco": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#1a1a2e" }}>
      <div className="flex flex-col items-center gap-1">
        <div className="flex gap-px">
          {[...Array(5)].map((_, i) => <div key={i} style={{ width: 2, height: 12 + Math.abs(i - 2) * 6, background: "#d4af37" }} />)}
        </div>
        <div className="text-[10px] font-bold tracking-[0.3em]" style={{ color: "#d4af37" }}>ART DECO</div>
        <div className="h-px w-16" style={{ background: "#d4af37" }} />
        <div className="flex gap-1">
          <div className="h-2 w-2 rotate-45 border" style={{ borderColor: "#d4af37" }} />
          <div className="h-2 w-2 rotate-45 border" style={{ borderColor: "#d4af37" }} />
          <div className="h-2 w-2 rotate-45 border" style={{ borderColor: "#d4af37" }} />
        </div>
      </div>
    </div>
  ),

  "swiss-international": () => (
    <div className="flex h-full items-center justify-center p-3" style={{ background: "#fff" }}>
      <div className="w-full max-w-[8rem]">
        <div className="text-[10px] font-bold uppercase tracking-wider text-black">Helvetica</div>
        <div className="mt-1 h-px w-full bg-black" />
        <div className="mt-2 grid grid-cols-3 gap-1">
          <div className="h-6 bg-red-600" />
          <div className="col-span-2 space-y-0.5 py-0.5">
            <div className="h-1 w-full bg-zinc-300" />
            <div className="h-1 w-4/5 bg-zinc-300" />
            <div className="h-1 w-3/5 bg-zinc-300" />
          </div>
        </div>
      </div>
    </div>
  ),

  bauhaus: () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#f5f5dc" }}>
      <div className="flex items-end gap-2">
        <div className="h-12 w-12 rounded-full" style={{ background: "#dc2626" }} />
        <div className="h-10 w-10" style={{ background: "#2563eb" }} />
        <div style={{ width: 0, height: 0, borderLeft: "20px solid transparent", borderRight: "20px solid transparent", borderBottom: "35px solid #eab308" }} />
      </div>
    </div>
  ),

  vaporwave: () => (
    <div className="flex h-full items-center justify-center" style={{ background: "linear-gradient(180deg, #e040fb, #7c4dff, #00bcd4)" }}>
      <div className="flex flex-col items-center gap-1">
        <div className="text-sm font-bold" style={{ color: "rgba(255,255,255,0.9)" }}>ア エ ス</div>
        <div className="grid grid-cols-6 gap-px" style={{ perspective: "50px" }}>
          {[...Array(18)].map((_, i) => <div key={i} className="h-2 w-3" style={{ border: "0.5px solid rgba(255,255,255,0.3)" }} />)}
        </div>
      </div>
    </div>
  ),

  cyberpunk: () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#0d0221" }}>
      <div className="flex flex-col items-center gap-2">
        <div className="text-sm font-black tracking-wider" style={{ color: "#f72585", textShadow: "0 0 10px #f72585" }}>CYBER</div>
        <div className="flex gap-1">
          <div className="h-3 w-8" style={{ background: "#7209b7", clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }} />
          <div className="h-3 w-8" style={{ background: "#4cc9f0", clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }} />
        </div>
        <div className="h-px w-24" style={{ background: "linear-gradient(90deg, transparent, #f72585, transparent)" }} />
      </div>
    </div>
  ),

  "organic-biomorphic": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#f0fdf4" }}>
      <div className="flex gap-2">
        <div className="h-14 w-10" style={{ background: "#86efac", borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }} />
        <div className="h-12 w-12" style={{ background: "#bbf7d0", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }} />
        <div className="h-10 w-8" style={{ background: "#dcfce7", borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%" }} />
      </div>
    </div>
  ),

  isometric: () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#f8fafc" }}>
      <svg viewBox="0 0 80 60" className="w-24">
        <polygon points="40,5 70,20 40,35 10,20" fill="#818cf8" />
        <polygon points="10,20 40,35 40,55 10,40" fill="#6366f1" />
        <polygon points="40,35 70,20 70,40 40,55" fill="#4f46e5" />
      </svg>
    </div>
  ),

  "3d-immersive": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#111827" }}>
      <div style={{ perspective: "120px" }}>
        <div className="h-14 w-14 rounded-md" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", transform: "rotateY(-15deg) rotateX(10deg)", boxShadow: "0 10px 30px rgba(99,102,241,0.3)" }} />
      </div>
    </div>
  ),

  monochrome: () => (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-4" style={{ background: "#fff" }}>
      <div className="flex gap-1">
        {["#000", "#333", "#666", "#999", "#ccc"].map((c) => <div key={c} className="h-6 w-4 rounded-sm" style={{ background: c }} />)}
      </div>
      <div className="h-px w-20 bg-black" />
      <div className="space-y-0.5">
        <div className="h-1 w-16 rounded bg-zinc-900" />
        <div className="h-1 w-12 rounded bg-zinc-400" />
      </div>
    </div>
  ),

  "pastel-soft": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#fef7ff" }}>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1.5">
          <div className="h-10 w-10 rounded-2xl" style={{ background: "#fbcfe8" }} />
          <div className="h-10 w-10 rounded-2xl" style={{ background: "#c7d2fe" }} />
          <div className="h-10 w-10 rounded-2xl" style={{ background: "#a7f3d0" }} />
        </div>
        <div className="h-5 w-20 rounded-full" style={{ background: "#fde68a" }} />
      </div>
    </div>
  ),

  "bold-typography": () => (
    <div className="flex h-full flex-col items-center justify-center" style={{ background: "#fff" }}>
      <div className="text-center">
        <div className="text-2xl font-black leading-none tracking-tighter text-black">BIG</div>
        <div className="text-[10px] font-light tracking-[0.3em] text-zinc-400">typography</div>
        <div className="text-lg font-black leading-none" style={{ color: "#6366f1" }}>BOLD</div>
      </div>
    </div>
  ),

  "illustrated-hand-drawn": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#fffbeb" }}>
      <div className="flex flex-col items-center gap-2">
        <svg viewBox="0 0 60 40" className="w-20">
          <path d="M5,35 Q15,5 30,20 Q45,35 55,10" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2" />
          <circle cx="20" cy="15" r="6" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="40" y="20" width="10" height="10" fill="none" stroke="#3b82f6" strokeWidth="1.5" rx="1" transform="rotate(10,45,25)" />
        </svg>
        <div className="h-1 w-16 rounded" style={{ background: "#d4a373" }} />
      </div>
    </div>
  ),

  "collage-mixed-media": () => (
    <div className="relative flex h-full items-center justify-center overflow-hidden" style={{ background: "#faf5f0" }}>
      <div className="absolute h-16 w-12 rotate-6 rounded" style={{ background: "#e76f51", top: "10%", left: "15%" }} />
      <div className="absolute h-10 w-14 -rotate-3" style={{ background: "#264653", top: "25%", right: "10%" }} />
      <div className="absolute h-8 w-8 rounded-full" style={{ background: "#e9c46a", bottom: "15%", left: "30%", border: "2px solid #fff" }} />
      <div className="absolute h-12 w-10 rotate-3 border-2 border-white" style={{ background: "repeating-linear-gradient(45deg, transparent, transparent 3px, #2a9d8f 3px, #2a9d8f 4px)", bottom: "20%", right: "25%" }} />
    </div>
  ),

  "geometric-patterns": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#f1f5f9" }}>
      <div className="grid grid-cols-4 grid-rows-4 gap-0.5">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="h-5 w-5" style={{ background: (i + Math.floor(i / 4)) % 3 === 0 ? "#6366f1" : (i + Math.floor(i / 4)) % 3 === 1 ? "#f59e0b" : "#e5e7eb" }} />
        ))}
      </div>
    </div>
  ),

  "asymmetric-layout": () => (
    <div className="flex h-full items-center justify-center p-3" style={{ background: "#fff" }}>
      <div className="flex w-full max-w-[8rem] gap-1.5">
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="h-16 rounded bg-zinc-900" />
          <div className="h-6 rounded bg-zinc-200" />
        </div>
        <div className="flex w-8 flex-col gap-1.5">
          <div className="h-6 rounded bg-zinc-300" />
          <div className="h-16 rounded" style={{ background: "#6366f1" }} />
        </div>
      </div>
    </div>
  ),

  "card-based": () => (
    <div className="flex h-full items-center justify-center p-3" style={{ background: "#f1f5f9" }}>
      <div className="grid w-full max-w-[8rem] grid-cols-2 gap-1.5">
        {[{ c: "#dbeafe" }, { c: "#fef3c7" }, { c: "#dcfce7" }, { c: "#fce7f3" }].map((card, i) => (
          <div key={i} className="rounded-lg bg-white p-1.5" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
            <div className="h-5 rounded" style={{ background: card.c }} />
            <div className="mt-1 h-1 w-3/4 rounded bg-zinc-200" />
          </div>
        ))}
      </div>
    </div>
  ),

  "parallax-scrolling": () => (
    <div className="relative flex h-full items-center justify-center overflow-hidden" style={{ background: "#0c4a6e" }}>
      <div className="absolute bottom-0 h-8 w-full" style={{ background: "#134e4a" }} />
      <div className="absolute bottom-6 h-10 w-full opacity-60" style={{ background: "#065f46" }} />
      <div className="absolute top-4 h-6 w-6 rounded-full" style={{ background: "#fbbf24" }} />
      <div className="absolute bottom-3 left-1/4 h-12 w-2" style={{ background: "#166534" }} />
      <div className="absolute bottom-3 right-1/3 h-10 w-2" style={{ background: "#166534" }} />
      <div className="relative z-10 text-center">
        <div className="text-[8px] text-white/40">↕ scroll</div>
        <div className="text-[8px] font-bold text-white/70">PARALLAX</div>
      </div>
    </div>
  ),

  "split-screen": () => (
    <div className="flex h-full" style={{ background: "#fff" }}>
      <div className="flex flex-1 items-center justify-center" style={{ background: "#1e293b" }}>
        <div className="space-y-1 text-center">
          <div className="text-xs font-bold text-white">Left</div>
          <div className="h-1 w-10 rounded bg-white/30" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center" style={{ background: "#f8fafc" }}>
        <div className="space-y-1 text-center">
          <div className="text-xs font-bold text-zinc-800">Right</div>
          <div className="h-1 w-10 rounded bg-zinc-300" />
        </div>
      </div>
    </div>
  ),

  "fullscreen-video": () => (
    <div className="relative flex h-full items-center justify-center" style={{ background: "linear-gradient(135deg, #1e3a5f, #0a1628)" }}>
      <div className="absolute inset-0 opacity-20" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 4px)" }} />
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/50">
          <div style={{ width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "8px solid rgba(255,255,255,0.8)", marginLeft: 2 }} />
        </div>
        <div className="text-[8px] text-white/50">PLAY VIDEO</div>
      </div>
    </div>
  ),

  "micro-interactions": () => (
    <div className="flex h-full flex-col items-center justify-center gap-3" style={{ background: "#f8fafc" }}>
      <div className="flex gap-2">
        <div className="h-6 w-12 rounded-full" style={{ background: "#6366f1" }}>
          <div className="ml-auto mr-0.5 mt-0.5 h-5 w-5 rounded-full bg-white" />
        </div>
        <div className="h-6 w-6 rounded-md bg-zinc-200" style={{ boxShadow: "inset 0 0 0 2px #6366f1" }}>
          <svg viewBox="0 0 24 24" className="p-1 text-indigo-600"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
      </div>
      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-zinc-200">
        <div className="h-full w-3/4 rounded-full" style={{ background: "#6366f1" }} />
      </div>
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => <div key={i} className="h-1 w-1 rounded-full" style={{ background: i === 1 ? "#6366f1" : "#d1d5db" }} />)}
      </div>
    </div>
  ),

  "kinetic-typography": () => (
    <div className="flex h-full flex-col items-center justify-center" style={{ background: "#000" }}>
      <div className="space-y-0">
        <div className="text-xs font-light tracking-[0.4em] text-white/40">MOVE</div>
        <div className="text-xl font-black leading-none text-white">TYPE</div>
        <div className="text-xs font-light italic tracking-wider text-white/40">in motion</div>
      </div>
    </div>
  ),

  "data-visualization": () => (
    <div className="flex h-full items-center justify-center p-3" style={{ background: "#f8fafc" }}>
      <div className="flex items-end gap-1">
        {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
          <div key={i} className="w-3 rounded-t" style={{ height: `${h}%`, background: i === 6 ? "#6366f1" : "#c7d2fe" }} />
        ))}
      </div>
    </div>
  ),

  "accessible-inclusive": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#fff" }}>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1 rounded border-2 border-blue-600 px-3 py-1">
          <span className="text-xs font-bold text-blue-600">Aa</span>
        </div>
        <div className="flex gap-1">
          <div className="h-5 w-5 rounded border-2 border-black bg-black text-center text-[8px] font-bold text-white">A</div>
          <div className="h-5 w-5 rounded border-2 border-black text-center text-[8px] font-bold text-black">A</div>
        </div>
        <div className="text-[8px] font-bold text-zinc-500">WCAG AAA</div>
      </div>
    </div>
  ),

  "high-contrast": () => (
    <div className="flex h-full flex-col items-center justify-center gap-2" style={{ background: "#000" }}>
      <div className="text-sm font-black text-white">HIGH</div>
      <div className="h-0.5 w-16 bg-yellow-400" />
      <div className="text-sm font-black text-yellow-400">CONTRAST</div>
    </div>
  ),

  "low-fi-wireframe": () => (
    <div className="flex h-full items-center justify-center p-3" style={{ background: "#fff" }}>
      <div className="w-full max-w-[8rem] space-y-1.5">
        <div className="h-3 w-20 rounded border border-zinc-300" />
        <div className="h-12 rounded border border-dashed border-zinc-300 flex items-center justify-center">
          <span className="text-[8px] text-zinc-400">image</span>
        </div>
        <div className="h-1 w-full rounded bg-zinc-200" />
        <div className="h-1 w-3/4 rounded bg-zinc-200" />
        <div className="h-4 w-12 rounded border border-zinc-300 flex items-center justify-center">
          <span className="text-[7px] text-zinc-400">CTA</span>
        </div>
      </div>
    </div>
  ),

  duotone: () => (
    <div className="flex h-full items-center justify-center" style={{ background: "linear-gradient(135deg, #1db954, #191414)" }}>
      <div className="flex flex-col items-center gap-2">
        <div className="h-10 w-10 rounded-full" style={{ background: "linear-gradient(180deg, #1db954, #191414)" }} />
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => <div key={i} className="w-1 rounded-full" style={{ height: 4 + Math.random() * 12, background: "#1db954" }} />)}
        </div>
      </div>
    </div>
  ),

  "grained-textured": () => (
    <div className="relative flex h-full items-center justify-center" style={{ background: "#e8dcc8" }}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      <div className="relative z-10 text-sm font-bold" style={{ color: "#5c4033" }}>Textured</div>
    </div>
  ),

  "paper-stationery": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#fef9ef", backgroundImage: "repeating-linear-gradient(transparent, transparent 19px, #e8ddd3 19px, #e8ddd3 20px)" }}>
      <div className="flex flex-col items-center gap-1">
        <div className="h-1 w-16 rounded" style={{ background: "#c9b99a" }} />
        <div className="h-1 w-12 rounded" style={{ background: "#d4c5a9" }} />
        <div className="mt-1 text-[8px]" style={{ color: "#b0a18c" }}>✉ memo</div>
      </div>
    </div>
  ),

  "terminal-cli": () => (
    <div className="flex h-full flex-col justify-center p-3" style={{ background: "#0c0c0c", fontFamily: "monospace" }}>
      <div className="space-y-1">
        <div className="text-[9px]" style={{ color: "#22c55e" }}>$ ls -la</div>
        <div className="text-[9px]" style={{ color: "#9ca3af" }}>drwxr-xr-x  5 user</div>
        <div className="text-[9px]" style={{ color: "#9ca3af" }}>-rw-r--r--  1 user</div>
        <div className="flex items-center gap-1">
          <span className="text-[9px]" style={{ color: "#22c55e" }}>$ _</span>
          <div className="h-2.5 w-1.5 animate-pulse" style={{ background: "#22c55e" }} />
        </div>
      </div>
    </div>
  ),

  "newspaper-editorial": () => (
    <div className="flex h-full items-center justify-center p-3" style={{ background: "#faf8f5" }}>
      <div className="w-full max-w-[8rem]">
        <div className="text-center text-[10px] font-bold" style={{ fontFamily: "serif", borderBottom: "2px solid #000", paddingBottom: 2 }}>THE DAILY</div>
        <div className="mt-1 flex gap-1">
          <div className="flex-1 space-y-0.5">
            <div className="h-0.5 w-full bg-zinc-700" />
            <div className="h-0.5 w-full bg-zinc-400" />
            <div className="h-0.5 w-4/5 bg-zinc-400" />
          </div>
          <div className="flex-1 space-y-0.5">
            <div className="h-0.5 w-full bg-zinc-400" />
            <div className="h-0.5 w-full bg-zinc-400" />
            <div className="h-0.5 w-3/5 bg-zinc-400" />
          </div>
        </div>
      </div>
    </div>
  ),

  "sci-fi-hud": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#020617" }}>
      <div className="flex flex-col items-center gap-1.5">
        <svg viewBox="0 0 60 60" className="w-14">
          <circle cx="30" cy="30" r="25" fill="none" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3" />
          <circle cx="30" cy="30" r="18" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="5" y1="30" x2="55" y2="30" stroke="#22d3ee" strokeWidth="0.3" opacity="0.3" />
          <line x1="30" y1="5" x2="30" y2="55" stroke="#22d3ee" strokeWidth="0.3" opacity="0.3" />
          <circle cx="30" cy="30" r="2" fill="#22d3ee" />
        </svg>
        <div className="text-[7px] tracking-widest" style={{ color: "#22d3ee" }}>SYSTEM ONLINE</div>
      </div>
    </div>
  ),

  "frosted-glass": () => (
    <div className="relative flex h-full items-center justify-center" style={{ background: "linear-gradient(135deg, #e0e7ff, #f0abfc, #fef3c7)" }}>
      <div className="h-16 w-28 rounded-xl" style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)" }}>
        <div className="p-3">
          <div className="h-1.5 w-12 rounded bg-black/20" />
          <div className="mt-1.5 h-1 w-16 rounded bg-black/10" />
        </div>
      </div>
    </div>
  ),

  // ═══════════════════════════════════════════
  // LANDING
  // ═══════════════════════════════════════════
  "hero-centric-design": () => (
    <div className="flex h-full flex-col items-center justify-center" style={{ background: "#0f172a" }}>
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)" }} />
      <div className="text-center">
        <div className="text-xs font-bold text-white/90">Build Faster</div>
        <div className="text-[10px]" style={{ color: "#818cf8" }}>with modern tools</div>
        <div className="mx-auto mt-2 h-4 w-14 rounded-md" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }} />
      </div>
    </div>
  ),

  "minimal-direct": () => (
    <div className="flex h-full flex-col items-center justify-center gap-2" style={{ background: "#fafafa" }}>
      <div className="h-4 w-4 rounded bg-zinc-900" />
      <div className="text-xs font-semibold text-zinc-900">Write better.</div>
      <div className="flex gap-1">
        <div className="h-4 w-14 rounded border border-zinc-200 bg-white" />
        <div className="h-4 w-10 rounded bg-zinc-900" />
      </div>
    </div>
  ),

  "storytelling-scroll": () => (
    <div className="flex h-full flex-col items-stretch" style={{ background: "#fff" }}>
      {[{ c: "#1e293b" }, { c: "#334155" }, { c: "#475569" }, { c: "#64748b" }].map((s, i) => (
        <div key={i} className="flex flex-1 items-center px-4" style={{ background: s.c }}>
          <div className="h-1 rounded bg-white/30" style={{ width: `${50 + i * 10}%` }} />
        </div>
      ))}
    </div>
  ),

  "product-showcase": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#f8fafc" }}>
      <div className="flex flex-col items-center gap-2">
        <div className="h-14 w-10 rounded-xl" style={{ background: "linear-gradient(180deg, #e2e8f0, #cbd5e1)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
        <div className="flex gap-3">
          {[...Array(3)].map((_, i) => <div key={i} className="h-1 w-1 rounded-full" style={{ background: i === 1 ? "#6366f1" : "#cbd5e1" }} />)}
        </div>
      </div>
    </div>
  ),

  "social-proof-heavy": () => (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-3" style={{ background: "#fff" }}>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => <div key={i} className="text-[10px]" style={{ color: "#fbbf24" }}>★</div>)}
      </div>
      <div className="flex -space-x-1.5">
        {["#6366f1", "#ec4899", "#f59e0b", "#22c55e"].map((c) => <div key={c} className="h-4 w-4 rounded-full border border-white" style={{ background: c }} />)}
      </div>
      <div className="text-[8px] text-zinc-500">2,400+ reviews</div>
    </div>
  ),

  "interactive-animated": () => (
    <div className="flex h-full items-center justify-center" style={{ background: "#f8fafc" }}>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-10 w-10 rounded-lg" style={{ background: `hsl(${230 + i * 20}, 80%, ${60 + i * 10}%)`, transform: `rotate(${i * 8}deg)`, opacity: 1 - i * 0.2 }} />
        ))}
      </div>
    </div>
  ),

  "video-background": () => (
    <div className="relative flex h-full items-center justify-center" style={{ background: "linear-gradient(135deg, #1a365d, #2d3748)" }}>
      <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 30% 50%, #fff 0%, transparent 50%)" }} />
      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40">
        <div style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "7px solid rgba(255,255,255,0.7)", marginLeft: 2 }} />
      </div>
    </div>
  ),

  "comparison-pricing": () => (
    <div className="flex h-full items-center justify-center gap-1.5 p-3" style={{ background: "#f8fafc" }}>
      {[{ name: "Basic", h: 14 }, { name: "Pro", h: 18 }, { name: "Biz", h: 14 }].map((plan, i) => (
        <div key={plan.name} className="flex flex-col items-center rounded-md p-1.5" style={{ background: "#fff", border: i === 1 ? "2px solid #6366f1" : "1px solid #e2e8f0", height: `${plan.h * 4}px` }}>
          <div className="text-[7px] font-bold" style={{ color: i === 1 ? "#6366f1" : "#64748b" }}>{plan.name}</div>
          <div className="text-[9px] font-bold text-zinc-900">${[9, 29, 99][i]}</div>
        </div>
      ))}
    </div>
  ),

  // ═══════════════════════════════════════════
  // DASHBOARD
  // ═══════════════════════════════════════════
  "executive-dashboard": () => (
    <div className="flex h-full flex-col p-2.5" style={{ background: "#f8fafc" }}>
      <div className="flex gap-1">
        {[{ c: "#6366f1" }, { c: "#22c55e" }, { c: "#f59e0b" }, { c: "#ef4444" }].map((kpi, i) => (
          <div key={i} className="flex-1 rounded p-1" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
            <div className="h-0.5 w-3 rounded" style={{ background: kpi.c }} />
            <div className="mt-0.5 h-1 w-5 rounded bg-zinc-800" />
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex-1 rounded p-1" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
        <svg viewBox="0 0 100 30" className="w-full">
          <path d="M0,25 L15,20 L30,18 L45,22 L60,12 L75,15 L100,5" fill="none" stroke="#6366f1" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  ),

  "analytics-dashboard": () => (
    <div className="flex h-full p-2" style={{ background: "#f1f5f9" }}>
      <div className="mr-1.5 w-5 space-y-1 rounded bg-white p-0.5" style={{ border: "1px solid #e2e8f0" }}>
        {[...Array(4)].map((_, i) => <div key={i} className="h-1.5 w-full rounded-sm" style={{ background: i === 0 ? "#6366f1" : "#e2e8f0" }} />)}
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex gap-1">
          <div className="flex-1 rounded bg-white p-1" style={{ border: "1px solid #e2e8f0" }}>
            <div className="flex items-end gap-0.5">
              {[40, 60, 45, 80, 55].map((h, i) => <div key={i} className="flex-1 rounded-t" style={{ height: h * 0.2, background: "#818cf8" }} />)}
            </div>
          </div>
          <div className="flex-1 rounded bg-white p-1" style={{ border: "1px solid #e2e8f0" }}>
            <svg viewBox="0 0 40 40" className="w-full">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#e2e8f0" strokeWidth="5" />
              <circle cx="20" cy="20" r="15" fill="none" stroke="#6366f1" strokeWidth="5" strokeDasharray="60 95" transform="rotate(-90 20 20)" />
            </svg>
          </div>
        </div>
        <div className="flex-1 rounded bg-white p-1" style={{ border: "1px solid #e2e8f0" }}>
          {[...Array(3)].map((_, i) => <div key={i} className="mt-0.5 flex items-center gap-1"><div className="h-1 w-1 rounded-full bg-zinc-300" /><div className="h-0.5 flex-1 rounded bg-zinc-200" /></div>)}
        </div>
      </div>
    </div>
  ),

  "realtime-monitor": () => (
    <div className="flex h-full flex-col items-center justify-center gap-2" style={{ background: "#0f172a" }}>
      <div className="flex gap-1.5">
        {[{ c: "#22c55e", l: "OK" }, { c: "#22c55e", l: "OK" }, { c: "#f59e0b", l: "WARN" }].map((s, i) => (
          <div key={i} className="flex items-center gap-1 rounded px-1.5 py-0.5" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: s.c }} />
            <span className="text-[7px] font-bold" style={{ color: s.c }}>{s.l}</span>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 80 20" className="w-20">
        <path d="M0,15 L10,12 L20,14 L25,5 L30,13 L40,11 L50,13 L55,3 L60,12 L70,10 L80,12" fill="none" stroke="#22c55e" strokeWidth="1" />
      </svg>
    </div>
  ),

  "admin-panel": () => (
    <div className="flex h-full" style={{ background: "#f1f5f9" }}>
      <div className="w-8 space-y-1 p-1" style={{ background: "#1e293b" }}>
        {[...Array(5)].map((_, i) => <div key={i} className="h-1.5 rounded-sm" style={{ background: i === 0 ? "#6366f1" : "rgba(255,255,255,0.1)" }} />)}
      </div>
      <div className="flex-1 p-1.5">
        <div className="h-3 w-12 rounded bg-white" style={{ border: "1px solid #e2e8f0" }} />
        <div className="mt-1 space-y-0.5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-1 rounded bg-white px-1 py-0.5" style={{ border: "1px solid #e2e8f0" }}>
              <div className="h-1 w-4 rounded bg-zinc-300" />
              <div className="h-1 flex-1 rounded bg-zinc-200" />
              <div className="h-1 w-3 rounded bg-zinc-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  "crm-dashboard": () => (
    <div className="flex h-full flex-col p-2" style={{ background: "#f8fafc" }}>
      <div className="flex gap-1">
        {["Lead", "Contact", "Deal", "Won"].map((stage, i) => (
          <div key={stage} className="flex-1 rounded p-1 text-center" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
            <div className="text-[6px] font-bold" style={{ color: "#64748b" }}>{stage}</div>
            <div className="mx-auto mt-0.5 h-1 rounded" style={{ width: `${80 - i * 15}%`, background: `hsl(${230 + i * 30}, 70%, 60%)` }} />
          </div>
        ))}
      </div>
      <div className="mt-1 flex-1 space-y-0.5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-1 rounded bg-white px-1 py-0.5" style={{ border: "1px solid #e2e8f0" }}>
            <div className="h-2.5 w-2.5 rounded-full" style={{ background: `hsl(${200 + i * 40}, 60%, 70%)` }} />
            <div className="h-0.5 flex-1 rounded bg-zinc-200" />
          </div>
        ))}
      </div>
    </div>
  ),

  "financial-dashboard": () => (
    <div className="flex h-full flex-col p-2" style={{ background: "#f8fafc" }}>
      <div className="flex gap-1">
        <div className="flex-1 rounded bg-white p-1" style={{ border: "1px solid #e2e8f0" }}>
          <div className="text-[7px] font-bold text-emerald-600">+$24K</div>
          <div className="text-[6px] text-zinc-400">Revenue</div>
        </div>
        <div className="flex-1 rounded bg-white p-1" style={{ border: "1px solid #e2e8f0" }}>
          <div className="text-[7px] font-bold text-red-500">-$8K</div>
          <div className="text-[6px] text-zinc-400">Expense</div>
        </div>
      </div>
      <div className="mt-1 flex-1 rounded bg-white p-1" style={{ border: "1px solid #e2e8f0" }}>
        <svg viewBox="0 0 80 30" className="w-full">
          <rect x="5" y="10" width="8" height="20" fill="#22c55e" rx="1" />
          <rect x="18" y="15" width="8" height="15" fill="#ef4444" rx="1" />
          <rect x="31" y="5" width="8" height="25" fill="#22c55e" rx="1" />
          <rect x="44" y="12" width="8" height="18" fill="#22c55e" rx="1" />
          <rect x="57" y="18" width="8" height="12" fill="#ef4444" rx="1" />
          <rect x="70" y="8" width="8" height="22" fill="#22c55e" rx="1" />
        </svg>
      </div>
    </div>
  ),

  "project-management": () => (
    <div className="flex h-full flex-col p-2" style={{ background: "#f8fafc" }}>
      <div className="text-[7px] font-bold text-zinc-700">Sprint 12</div>
      <div className="mt-1 flex-1 space-y-0.5">
        {[{ c: "#22c55e", w: "100%" }, { c: "#6366f1", w: "60%" }, { c: "#f59e0b", w: "30%" }, { c: "#e2e8f0", w: "0%" }].map((task, i) => (
          <div key={i} className="flex items-center gap-1 rounded bg-white px-1 py-0.5" style={{ border: "1px solid #e2e8f0" }}>
            <div className="h-1.5 w-1.5 rounded-sm" style={{ background: task.c }} />
            <div className="h-0.5 flex-1 rounded bg-zinc-200">
              <div className="h-full rounded" style={{ width: task.w, background: task.c }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  "iot-dashboard": () => (
    <div className="flex h-full items-center justify-center gap-2 p-2" style={{ background: "#0f172a" }}>
      <div className="space-y-1">
        {[{ v: "23°C", c: "#f59e0b" }, { v: "65%", c: "#3b82f6" }].map((s) => (
          <div key={s.v} className="rounded px-1.5 py-0.5" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div className="text-[7px] font-bold" style={{ color: s.c }}>{s.v}</div>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 40 40" className="w-10">
        <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
        <circle cx="20" cy="20" r="17" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="75 107" transform="rotate(-90 20 20)" />
        <text x="20" y="22" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">70%</text>
      </svg>
    </div>
  ),

  "social-media-dashboard": () => (
    <div className="flex h-full flex-col items-center justify-center gap-1.5 p-2" style={{ background: "#f8fafc" }}>
      <div className="flex gap-1">
        {[{ c: "#1da1f2", n: "1.2K" }, { c: "#e1306c", n: "3.4K" }, { c: "#0077b5", n: "890" }].map((s) => (
          <div key={s.c} className="rounded px-1.5 py-0.5 text-center" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
            <div className="h-1.5 w-1.5 rounded-full mx-auto" style={{ background: s.c }} />
            <div className="text-[7px] font-bold text-zinc-800">{s.n}</div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-0.5">
        {[30, 45, 35, 60, 50, 75, 55].map((h, i) => <div key={i} className="w-2 rounded-t" style={{ height: h * 0.4, background: i === 5 ? "#e1306c" : "#e2e8f0" }} />)}
      </div>
    </div>
  ),

  "healthcare-dashboard": () => (
    <div className="flex h-full flex-col p-2" style={{ background: "#f0fdf4" }}>
      <div className="flex gap-1">
        <div className="flex-1 rounded bg-white p-1" style={{ border: "1px solid #dcfce7" }}>
          <div className="text-[7px]" style={{ color: "#dc2626" }}>❤ 72 bpm</div>
        </div>
        <div className="flex-1 rounded bg-white p-1" style={{ border: "1px solid #dcfce7" }}>
          <div className="text-[7px]" style={{ color: "#2563eb" }}>🫁 98%</div>
        </div>
      </div>
      <div className="mt-1 flex-1 rounded bg-white p-1" style={{ border: "1px solid #dcfce7" }}>
        <svg viewBox="0 0 80 25" className="w-full">
          <path d="M0,15 L8,15 L12,5 L16,20 L20,15 L28,15 L32,5 L36,20 L40,15 L48,15 L52,5 L56,20 L60,15 L68,15 L72,5 L76,20 L80,15" fill="none" stroke="#dc2626" strokeWidth="1" />
        </svg>
      </div>
    </div>
  ),
};

export function StyleThumbnail({ slug }: { slug: string }) {
  const render = thumbnails[slug];
  if (!render) {
    return (
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
        <span className="text-3xl font-bold text-zinc-200 dark:text-zinc-800">?</span>
      </div>
    );
  }
  return <>{render()}</>;
}
