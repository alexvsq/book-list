import CardBook from "./CardBook";
import { SkeletonBook } from "../skeletons/ContentBooksSkeleton";
import { useGetBooks } from '../../hooks/useGetBooks'

export default function ContentBooks() {

  const { data, fetchNextPage, hasNextPage, error, isError, isLoading, isFetchingNextPage } =
    useGetBooks();

  if (isError) {
    return <div>Something went wrong</div>;
  }
  return (
    <div className="h-full md:col-span-4 md:pt-14">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:py-6">
        {
          isLoading ?
            (
              Array(15).fill(0).map((_, index) => (
                <SkeletonBook key={index} />
              ))
            )
            : data?.pages.flatMap((page) => page.items).map((book, index) => (
              <CardBook key={book.id + index} Book={book} />
            ))
        }
      </div>

      <div className="flex justify-center py-5">
        {isFetchingNextPage && <p>Loading...</p>}
        {!isFetchingNextPage && hasNextPage ?
          <button
            onClick={() => fetchNextPage()}
            className="bg-gray-200 dark:bg-gray-800 rounded-lg p-2 w-fit"
          >
            Load More
          </button>
          : null}
      </div>
    </div>
  );
}
