import { useSearchParams } from "react-router";

export default function Pagination({
  BooksNumFound,
}: {
  BooksNumFound: number;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageUrl = searchParams.get("page");
  const currentPage = pageUrl ? Number(pageUrl) : 1;
  const totalPages = Math.ceil(BooksNumFound / 32);

  const nextPage = () => {
    const newPage = currentPage + 1;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
  };
  const prevPage = () => {
    if (currentPage <= 1) return;
    const newPage = currentPage - 1;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
  };

  return (
    <div className="fixed  w-full bottom-2">
      <footer className="flex justify-center">
        <div className="flex items-center bg-graydark/60 backdrop-blur-xs gap-3 py-2 px-3 rounded-2xl">
          {currentPage > 1 && (
            <div onClick={prevPage}>
              <img
                src="icons/arrow.png"
                alt=""
                className="w-8 h-8 rotate-180 cursor-pointer"
              />
            </div>
            /*  <button
              onClick={prevPage}
              className="bg-gray rounded-lg px-2 py-1 cursor-pointer"
            >
              Prev Page
            </button> */
          )}
          <p className=" bg-gray rounded-lg px-2 py-1">{currentPage}</p>
          {totalPages > 10 && (
            <div onClick={nextPage}>
              <img
                src="icons/arrow.png"
                alt=""
                className="w-8 h-8  cursor-pointer"
              />
            </div>
            /*  <button
              onClick={nextPage}
              className="bg-gray rounded-lg px-2 py-1 cursor-pointer"
            >
              Next Page
            </button> */
          )}
        </div>
      </footer>
    </div>
  );
}
