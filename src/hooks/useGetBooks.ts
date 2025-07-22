import { useInfiniteQuery } from "@tanstack/react-query";
import { getBooks } from "../api/api";
import { useSearchParams } from "react-router";

export const useGetBooks = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchInput = searchParams.get("search") ?? "";
  const orderQuery = searchParams.get("order") ?? "";

  const getBooksFetch = async ({ pageParam }: { pageParam: number }) => {
    const data = await getBooks(pageParam, searchInput, orderQuery);
    return { ...data, currentPage: pageParam };
  };

  const queryKey = ["booksContent", searchInput, orderQuery];

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey,
    queryFn: getBooksFetch,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.totalItems) return null;
      if (lastPage.currentPage * 40 + 40 < lastPage.totalItems)
        return lastPage.currentPage + 1;
    },
  });

  return {
    fetchNextPage,
    hasNextPage,
    isLoading,
    data,
    isError,
    error,
    isFetchingNextPage,
  };
};
