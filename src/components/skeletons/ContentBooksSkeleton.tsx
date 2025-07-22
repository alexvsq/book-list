import Skeleton from "react-loading-skeleton";
import { skeletonColors } from "../../lib/skeletonColor";


export function SkeletonBook() {
  return (
    <Skeleton
      baseColor={skeletonColors.baseColor}
      highlightColor={skeletonColors.highlightColor}
      width={'100%'}
      height={280}
      borderRadius={10}
    />
  );
}

export function SkeletonBookSelected() {
  return (
    <div>
      <Skeleton
        baseColor={skeletonColors.baseColor}
        highlightColor={skeletonColors.highlightColor}
        width={'100%'}
        height={1000}
      />
    </div>
  )
}