"use client";

import { useState } from "react";

type Task = {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  assignee: string;
  assigneeColor: string;
  tags: string[];
};

type Column = {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
};

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color: "#818cf8",
    tasks: [
      { id: "1", title: "Design new onboarding flow", priority: "high", assignee: "AJ", assigneeColor: "#7f5af0", tags: ["Design"] },
      { id: "2", title: "Update API documentation", priority: "medium", assignee: "BS", assigneeColor: "#2ee59d", tags: ["Docs"] },
      { id: "3", title: "Fix responsive layout bug", priority: "high", assignee: "CW", assigneeColor: "#e94560", tags: ["Bug"] },
    ],
  },
  {
    id: "progress",
    title: "In Progress",
    color: "#f59e0b",
    tasks: [
      { id: "4", title: "Implement auth middleware", priority: "high", assignee: "DB", assigneeColor: "#f59e0b", tags: ["Backend"] },
      { id: "5", title: "Create component library", priority: "medium", assignee: "AJ", assigneeColor: "#7f5af0", tags: ["Frontend"] },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "#2ee59d",
    tasks: [
      { id: "6", title: "Set up CI/CD pipeline", priority: "low", assignee: "DB", assigneeColor: "#f59e0b", tags: ["DevOps"] },
      { id: "7", title: "Database schema migration", priority: "medium", assignee: "BS", assigneeColor: "#2ee59d", tags: ["Backend"] },
    ],
  },
];

const priorityColors = {
  high: "#e94560",
  medium: "#f59e0b",
  low: "#2ee59d",
};

export default function ProjectManagement() {
  const [columns] = useState(initialColumns);
  const [draggedTask, setDraggedTask] = useState<string | null>(null);

  const totalTasks = columns.reduce((sum, col) => sum + col.tasks.length, 0);
  const doneTasks = columns.find((c) => c.id === "done")?.tasks.length ?? 0;

  return (
    <div className="min-h-[400px] rounded-xl overflow-hidden flex flex-col" style={{ background: "#f5f3ff" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
        <div>
          <h2 className="text-sm font-bold text-gray-900">Project Board</h2>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-[10px] text-gray-400">Sprint 12</span>
            <span className="text-[10px] text-gray-300">|</span>
            <span className="text-[10px] text-gray-400">Oct 14 - Oct 28</span>
            <span className="text-[10px] text-gray-300">|</span>
            <span className="text-[10px] font-medium" style={{ color: "#7f5af0" }}>
              {doneTasks}/{totalTasks} completed
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Team avatars */}
          <div className="flex -space-x-1.5">
            {[
              { initials: "AJ", color: "#7f5af0" },
              { initials: "BS", color: "#2ee59d" },
              { initials: "CW", color: "#e94560" },
              { initials: "DB", color: "#f59e0b" },
            ].map((member, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[7px] font-bold text-white"
                style={{ background: member.color }}
                title={member.initials}
              >
                {member.initials}
              </div>
            ))}
          </div>
          <button className="px-2.5 py-1.5 rounded-lg text-[10px] font-semibold text-white" style={{ background: "#7f5af0" }}>
            + Task
          </button>
        </div>
      </div>

      {/* Sprint progress */}
      <div className="px-4 py-2 flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full bg-white">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${(doneTasks / totalTasks) * 100}%`,
              background: "linear-gradient(90deg, #7f5af0, #2ee59d)",
            }}
          />
        </div>
        <span className="text-[10px] font-medium text-gray-500">
          {Math.round((doneTasks / totalTasks) * 100)}%
        </span>
      </div>

      {/* Kanban columns */}
      <div className="flex-1 flex gap-3 px-4 pb-3 overflow-x-auto">
        {columns.map((col) => (
          <div key={col.id} className="flex-1 min-w-[180px] flex flex-col">
            {/* Column header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: col.color }} />
                <span className="text-[11px] font-semibold text-gray-700">{col.title}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white text-gray-400 font-medium">
                  {col.tasks.length}
                </span>
              </div>
              <button className="text-gray-300 hover:text-gray-500 text-sm">+</button>
            </div>

            {/* Task cards */}
            <div className="flex-1 space-y-2 overflow-auto">
              {col.tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white rounded-lg p-2.5 border border-gray-100 cursor-grab active:cursor-grabbing transition-all duration-150 hover:shadow-md hover:-translate-y-0.5"
                  style={{
                    opacity: draggedTask === task.id ? 0.5 : 1,
                    borderLeft: `3px solid ${priorityColors[task.priority]}`,
                  }}
                  draggable
                  onDragStart={() => setDraggedTask(task.id)}
                  onDragEnd={() => setDraggedTask(null)}
                >
                  {/* Tags */}
                  <div className="flex gap-1 mb-1.5">
                    {task.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[8px] px-1.5 py-0.5 rounded font-medium"
                        style={{
                          background: "rgba(127,90,240,0.08)",
                          color: "#7f5af0",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <div className="text-[10px] font-medium text-gray-800 mb-2 leading-relaxed">
                    {task.title}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold text-white"
                      style={{ background: task.assigneeColor }}
                    >
                      {task.assignee}
                    </div>
                    <div className="flex items-center gap-1">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: priorityColors[task.priority] }}
                      />
                      <span className="text-[8px] text-gray-400 capitalize">{task.priority}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
