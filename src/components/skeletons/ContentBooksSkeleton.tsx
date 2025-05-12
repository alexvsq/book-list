import Skeleton from "react-loading-skeleton";
import { skeletonColors } from "../../lib/skeletonColor";

export default function contentBooksSkeleton() {
  return (
    <div className=" p-3 md:h-screen md:w-full overflow-y-scroll flex flex-wrap gap-3">
      {Array.from({ length: 15 }).map((_, index) => (
        <SkeletonBook key={index} />
      ))}
    </div>
  );
}

function SkeletonBook() {
  return (
    <Skeleton
      baseColor={skeletonColors.baseColor}
      highlightColor={skeletonColors.highlightColor}
      width={220}
      height={280}
      borderRadius={10}
    />
  );
}
