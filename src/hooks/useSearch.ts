"use client";

import { useState, useMemo } from "react";
import type { StyleMeta, StyleCategory } from "@/lib/types";

export function useSearch(styles: StyleMeta[]) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<StyleCategory | "all">("all");

  const filtered = useMemo(() => {
    let result = styles;

    if (category !== "all") {
      result = result.filter((s) => s.category === category);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some((t) => t.includes(q))
      );
    }

    return result;
  }, [styles, query, category]);

  return { query, setQuery, category, setCategory, filtered };
}
