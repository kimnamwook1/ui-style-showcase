import Link from "next/link";
import type { StyleMeta } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { StyleThumbnail } from "./StyleThumbnail";

const categoryColor: Record<string, string> = {
  general: "bg-blue-500",
  landing: "bg-purple-500",
  dashboard: "bg-emerald-500",
};

export function StyleCard({ style }: { style: StyleMeta }) {
  return (
    <Link
      href={`/styles/${style.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:shadow-lg hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      {/* Thumbnail area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <StyleThumbnail slug={style.slug} />

        {/* Category dot */}
        <div
          className={cn(
            "absolute left-3 top-3 h-2 w-2 rounded-full",
            categoryColor[style.category]
          )}
        />

        {/* Implemented badge */}
        {style.implemented && (
          <div className="absolute right-3 top-3">
            <Badge variant="success" className="text-[10px]">
              Live Demo
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400">
          {style.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {style.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {style.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} className="text-[10px]">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
