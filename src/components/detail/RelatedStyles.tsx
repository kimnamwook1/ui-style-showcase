import Link from "next/link";
import { styles } from "@/data/styles";
import { Badge } from "@/components/ui/Badge";

export function RelatedStyles({ slugs }: { slugs: string[] }) {
  const related = slugs
    .map((slug) => styles.find((s) => s.slug === slug))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Related Styles
      </h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {related.map((s) => (
          <Link
            key={s!.slug}
            href={`/styles/${s!.slug}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-zinc-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/30"
          >
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              {s!.name}
            </span>
            {s!.implemented && (
              <Badge variant="success" className="text-[10px]">
                Demo
              </Badge>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
