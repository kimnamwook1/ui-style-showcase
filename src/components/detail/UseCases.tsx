import type { StyleMeta } from "@/lib/types";

export function UseCases({ bestFor }: { bestFor: StyleMeta["bestFor"] }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Best For
      </h2>
      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {bestFor.map((use) => (
          <li
            key={use}
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
            {use}
          </li>
        ))}
      </ul>
    </div>
  );
}
