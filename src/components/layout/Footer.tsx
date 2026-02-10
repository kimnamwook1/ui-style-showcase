export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            UI/UX Style Showcase — 67 styles for design reference
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-600">
            Built with Next.js 15 + Tailwind CSS v4
          </p>
        </div>
      </div>
    </footer>
  );
}
