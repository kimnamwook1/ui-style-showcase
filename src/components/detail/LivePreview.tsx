"use client";

import { useEffect, useState, type ComponentType } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

export function LivePreview({
  slug,
  implemented,
}: {
  slug: string;
  implemented: boolean;
}) {
  const [DemoComponent, setDemoComponent] = useState<ComponentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!implemented) return;

    setLoading(true);
    import(`@/demos/_registry`)
      .then((mod) => mod.loadDemo(slug))
      .then((m: { default: ComponentType }) => {
        setDemoComponent(() => m.default);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug, implemented]);

  if (!implemented) {
    return (
      <div className="flex h-96 flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="text-4xl">🚧</div>
        <p className="mt-3 text-lg font-medium text-zinc-400 dark:text-zinc-600">
          Demo coming soon
        </p>
        <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-600">
          This style demo is being prepared
        </p>
      </div>
    );
  }

  if (loading || !DemoComponent) {
    return (
      <div className="flex h-96 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800">
        <Skeleton className="h-full w-full" />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
      <div className="bg-zinc-100 px-4 py-2 dark:bg-zinc-900">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400">
            Live Preview
          </span>
        </div>
      </div>
      <div className="min-h-[400px] bg-white dark:bg-zinc-950">
        <DemoComponent />
      </div>
    </div>
  );
}
