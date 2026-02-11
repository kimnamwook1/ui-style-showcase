"use client";

import { useState } from "react";

const sidebarItems = [
  { icon: "◫", label: "Dashboard", active: true },
  { icon: "◉", label: "Users", active: false },
  { icon: "◳", label: "Products", active: false },
  { icon: "⬡", label: "Orders", active: false },
  { icon: "◈", label: "Analytics", active: false },
  { icon: "⚙", label: "Settings", active: false },
];

const users = [
  { name: "Alice Johnson", email: "alice@example.com", status: "Active", role: "Admin", avatar: "#7f5af0" },
  { name: "Bob Smith", email: "bob@example.com", status: "Active", role: "Editor", avatar: "#2ee59d" },
  { name: "Carol White", email: "carol@example.com", status: "Inactive", role: "Viewer", avatar: "#e94560" },
  { name: "Dan Brown", email: "dan@example.com", status: "Active", role: "Editor", avatar: "#f59e0b" },
  { name: "Eve Davis", email: "eve@example.com", status: "Pending", role: "Viewer", avatar: "#3b82f6" },
  { name: "Frank Lee", email: "frank@example.com", status: "Active", role: "Admin", avatar: "#8b5cf6" },
];

export default function AdminPanel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleRow = (i: number) => {
    setSelectedRows((prev) =>
      prev.includes(i) ? prev.filter((r) => r !== i) : [...prev, i]
    );
  };

  const statusStyle = (s: string) => {
    if (s === "Active") return { bg: "rgba(46,229,157,0.1)", color: "#2ee59d" };
    if (s === "Inactive") return { bg: "rgba(233,69,96,0.1)", color: "#e94560" };
    return { bg: "rgba(245,158,11,0.1)", color: "#f59e0b" };
  };

  return (
    <div className="min-h-[400px] rounded-xl overflow-hidden flex" style={{ background: "#f8f9fb" }}>
      {/* Dark sidebar */}
      <div
        className="w-40 flex-shrink-0 flex flex-col p-3"
        style={{ background: "#1a1a2e" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
            style={{ background: "linear-gradient(135deg, #7f5af0, #2ee59d)" }}
          >
            AP
          </div>
          <span className="text-xs font-bold text-white">AdminPanel</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5 flex-1">
          {sidebarItems.map((item, i) => (
            <button
              key={i}
              className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-all text-[11px]"
              style={{
                background: item.active ? "rgba(127,90,240,0.15)" : "transparent",
                color: item.active ? "#a78bfa" : "#6b7280",
              }}
            >
              <span className="text-sm">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* User section */}
        <div className="flex items-center gap-2 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-white text-[10px] font-bold">
            A
          </div>
          <div>
            <div className="text-[10px] font-medium text-gray-300">Admin</div>
            <div className="text-[8px] text-gray-500">admin@app.com</div>
          </div>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
          <div>
            <h1 className="text-sm font-bold text-gray-900">User Management</h1>
            <p className="text-[10px] text-gray-400">{users.length} total users</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg text-[10px] border border-gray-200 outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-100 w-36"
              style={{ background: "#fafbfc" }}
            />
            <button
              className="px-3 py-1.5 rounded-lg text-[10px] font-semibold text-white"
              style={{ background: "#7f5af0" }}
            >
              + Add User
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 p-3 overflow-auto">
          <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-3 py-2 text-gray-400 font-medium w-6">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={selectedRows.length === filteredUsers.length && filteredUsers.length > 0}
                      onChange={() =>
                        setSelectedRows(
                          selectedRows.length === filteredUsers.length
                            ? []
                            : filteredUsers.map((_, i) => i)
                        )
                      }
                    />
                  </th>
                  <th className="text-left px-3 py-2 text-gray-400 font-medium">Name</th>
                  <th className="text-left px-3 py-2 text-gray-400 font-medium">Status</th>
                  <th className="text-left px-3 py-2 text-gray-400 font-medium">Role</th>
                  <th className="text-right px-3 py-2 text-gray-400 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, i) => {
                  const st = statusStyle(user.status);
                  return (
                    <tr
                      key={i}
                      className="border-b border-gray-50 hover:bg-violet-50/30 transition-colors cursor-pointer"
                      style={{
                        background: selectedRows.includes(i) ? "rgba(127,90,240,0.04)" : undefined,
                      }}
                    >
                      <td className="px-3 py-2">
                        <input
                          type="checkbox"
                          className="rounded"
                          checked={selectedRows.includes(i)}
                          onChange={() => toggleRow(i)}
                        />
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0"
                            style={{ background: user.avatar }}
                          >
                            {user.name[0]}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{user.name}</div>
                            <div className="text-[8px] text-gray-400">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2">
                        <span
                          className="px-1.5 py-0.5 rounded-full text-[9px] font-medium"
                          style={{ background: st.bg, color: st.color }}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-gray-600">{user.role}</td>
                      <td className="px-3 py-2 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="px-1.5 py-0.5 rounded text-[9px] text-violet-600 hover:bg-violet-50 transition-colors">
                            Edit
                          </button>
                          <button className="px-1.5 py-0.5 rounded text-[9px] text-red-500 hover:bg-red-50 transition-colors">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-50">
              <span className="text-[9px] text-gray-400">
                {selectedRows.length > 0 ? `${selectedRows.length} selected` : `Showing ${filteredUsers.length} of ${users.length}`}
              </span>
              <div className="flex items-center gap-1">
                <button className="px-2 py-1 rounded text-[9px] text-gray-400 hover:bg-gray-50">Prev</button>
                <button className="px-2 py-1 rounded text-[9px] font-medium" style={{ background: "#7f5af0", color: "#fff" }}>1</button>
                <button className="px-2 py-1 rounded text-[9px] text-gray-400 hover:bg-gray-50">2</button>
                <button className="px-2 py-1 rounded text-[9px] text-gray-400 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
