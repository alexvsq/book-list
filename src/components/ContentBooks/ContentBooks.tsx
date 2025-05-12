import CardBook from "./book/CardBook";
import BookSelected from "./book/BookSelected";
import Pagination from "./Pagination";
import { ResponseGetBooks } from "../../types/types";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { getBooks } from "../../api/api";
import ContentBooksSkeleton from "../skeletons/ContentBooksSkeleton";

export default function ContentBooks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState<ResponseGetBooks | null>(null);

  const page = searchParams.get("page");
  const search = searchParams.get("search");

  useEffect(() => {
    setBooks(null);
    getBooks(Number(page), search).then((res) => {
      if (res.error || res.data == null) return;
      setBooks(res.data);
    });
  }, [page, search]);

  return (
    <>
      {books ? (
        <div className="flex-1 md:h-screen md:w-full overflow-y-scroll grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-3 md:gap-5 p-3 ">
          {books.items?.map((book, index) => (
            <CardBook key={index} Book={book} />
          ))}
        </div>
      ) : (
        <ContentBooksSkeleton />
      )}
      <BookSelected />

      {books && <Pagination BooksNumFound={books.totalItems} />}
    </>
  );
}
