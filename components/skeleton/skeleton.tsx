import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonTitle = () => {
  return <Skeleton className="h-4 w-20" />;
};

export const SkeletonLabel = () => {
  return <Skeleton className="h-4 w-8" />;
};

export const SkeletonInput = () => {
  return <Skeleton className="h-9 w-full" />;
};

export const SkeletonButton = () => {
  return (
    <Skeleton className="h-8 w-full flex items-center justify-center">
      <Skeleton className="h-4 w-16 bg-gray-300" />
    </Skeleton>
  );
};
