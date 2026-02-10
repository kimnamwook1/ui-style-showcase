import { GalleryClient } from "@/components/gallery/GalleryClient";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          UI/UX Style Showcase
        </h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          67개의 UI/UX 스타일을 탐색하고, 라이브 데모를 확인하고, 코드를 복사하세요.
        </p>
      </div>

      <GalleryClient />
    </div>
  );
}
