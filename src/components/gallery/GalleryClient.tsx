"use client";

import { styles } from "@/data/styles";
import { useSearch } from "@/hooks/useSearch";
import { SearchBar } from "./SearchBar";
import { CategoryFilter } from "./CategoryFilter";
import { StyleGrid } from "./StyleGrid";

export function GalleryClient() {
  const { query, setQuery, category, setCategory, filtered } = useSearch(styles);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:max-w-md">
          <SearchBar value={query} onChange={setQuery} />
        </div>
        <CategoryFilter value={category} onChange={setCategory} />
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Showing {filtered.length} of {styles.length} styles
      </p>

      <StyleGrid styles={filtered} />
    </div>
  );
}
