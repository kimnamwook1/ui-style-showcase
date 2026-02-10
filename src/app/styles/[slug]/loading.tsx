import { Skeleton } from "@/components/ui/Skeleton";

export default function StyleDetailLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <Skeleton className="h-4 w-32" />
          <Skeleton className="mt-4 h-10 w-64" />
          <Skeleton className="mt-3 h-20 w-full max-w-2xl" />
        </div>
        <Skeleton className="h-96 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-40" />
        </div>
      </div>
    </div>
  );
}
