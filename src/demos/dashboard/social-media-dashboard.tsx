"use client";

export default function SocialMediaDashboardDemo() {
  return (
    <div className="min-h-[400px] p-6" style={{ background: "#f8fafc" }}>
      <div className="mx-auto max-w-xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold" style={{ color: "#0f172a" }}>Social Dashboard</h2>
            <p className="text-xs" style={{ color: "#94a3b8" }}>Overview for February 2026</p>
          </div>
          <div className="flex gap-2">
            {[
              { label: "T", color: "#1da1f2" },
              { label: "I", color: "#e1306c" },
              { label: "Y", color: "#ff0000" },
            ].map((social) => (
              <div
                key={social.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ background: social.color }}
              >
                {social.label}
              </div>
            ))}
          </div>
        </div>

        {/* Follower stats */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { platform: "Twitter", followers: "24.5K", change: "+1.2K", color: "#1da1f2" },
            { platform: "Instagram", followers: "18.3K", change: "+890", color: "#e1306c" },
            { platform: "YouTube", followers: "9.7K", change: "+340", color: "#ff0000" },
            { platform: "LinkedIn", followers: "5.1K", change: "+210", color: "#0077b5" },
          ].map((p) => (
            <div
              key={p.platform}
              className="rounded-xl p-3 text-center"
              style={{ background: "#fff", border: "1px solid #e2e8f0" }}
            >
              <p className="text-[10px] font-medium" style={{ color: "#94a3b8" }}>{p.platform}</p>
              <p className="text-lg font-bold mt-1" style={{ color: "#0f172a" }}>{p.followers}</p>
              <p className="text-[10px] font-medium" style={{ color: "#22c55e" }}>{p.change}</p>
            </div>
          ))}
        </div>

        {/* Engagement chart */}
        <div className="rounded-xl p-4" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium" style={{ color: "#0f172a" }}>Engagement Rate</p>
            <span className="text-xs px-2 py-0.5 rounded" style={{ background: "#f0fdf4", color: "#22c55e" }}>+15%</span>
          </div>
          <div className="flex items-end gap-2 h-24">
            {[35, 55, 40, 65, 80, 60, 75, 90, 70, 85, 68, 78].map((h, i) => (
              <div key={i} className="flex-1 rounded-t transition-all" style={{ height: `${h}%`, background: "linear-gradient(180deg, #6366f1, #a78bfa)" }} />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
              <span key={m} className="text-[8px] flex-1 text-center" style={{ color: "#94a3b8" }}>{m}</span>
            ))}
          </div>
        </div>

        {/* Recent posts */}
        <div className="rounded-xl p-4" style={{ background: "#fff", border: "1px solid #e2e8f0" }}>
          <p className="text-sm font-medium" style={{ color: "#0f172a" }}>Top Posts</p>
          <div className="mt-3 space-y-2">
            {[
              { title: "Product launch announcement", likes: "2.4K", comments: "186" },
              { title: "Behind the scenes video", likes: "1.8K", comments: "94" },
              { title: "Customer success story", likes: "1.2K", comments: "67" },
            ].map((post) => (
              <div key={post.title} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid #f1f5f9" }}>
                <p className="text-xs font-medium" style={{ color: "#334155" }}>{post.title}</p>
                <div className="flex gap-3">
                  <span className="text-[10px]" style={{ color: "#ef4444" }}>{"\u2665"} {post.likes}</span>
                  <span className="text-[10px]" style={{ color: "#94a3b8" }}>{"\u2709"} {post.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
