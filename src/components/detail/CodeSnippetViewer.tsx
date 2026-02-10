"use client";

import { useState, useEffect } from "react";
import { CopyButton } from "@/components/ui/CopyButton";

export function CodeSnippetViewer({ slug }: { slug: string }) {
  const [code, setCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/code-snippet?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setCode(data.code ?? null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="animate-pulse rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-3 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-3 w-4/6 rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    );
  }

  if (!code) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm text-zinc-400 dark:text-zinc-600">
          Source code not available for this demo
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Source Code
        </h2>
        <CopyButton text={code} />
      </div>
      <div className="mt-3 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-950 p-4 dark:border-zinc-800">
        <pre className="text-sm leading-relaxed text-zinc-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
