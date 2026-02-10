"use client";

import { cn } from "@/lib/utils";
import { categories } from "@/data/categories";
import type { StyleCategory } from "@/lib/types";

type FilterValue = StyleCategory | "all";

export function CategoryFilter({
  value,
  onChange,
}: {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  const options: { id: FilterValue; label: string }[] = [
    { id: "all", label: "All (67)" },
    ...categories.map((c) => ({ id: c.id, label: `${c.label} (${c.count})` })),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            value === opt.id
              ? "bg-indigo-600 text-white shadow-sm"
              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
