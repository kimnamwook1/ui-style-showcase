import type { StyleMeta } from "@/lib/types";
import { StyleCard } from "./StyleCard";

export function StyleGrid({ styles }: { styles: StyleMeta[] }) {
  if (styles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-medium text-zinc-400 dark:text-zinc-600">
          No styles found
        </p>
        <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-600">
          Try adjusting your search or filter
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {styles.map((style) => (
        <StyleCard key={style.slug} style={style} />
      ))}
    </div>
  );
}
