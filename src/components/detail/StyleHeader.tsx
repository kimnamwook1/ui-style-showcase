import Link from "next/link";
import type { StyleMeta } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

export function StyleHeader({ style }: { style: StyleMeta }) {
  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Gallery
      </Link>

      <div className="mt-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            {style.name}
          </h1>
          <Badge variant="primary">{style.category}</Badge>
          {style.implemented && <Badge variant="success">Live Demo</Badge>}
        </div>

        <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {style.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {style.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
