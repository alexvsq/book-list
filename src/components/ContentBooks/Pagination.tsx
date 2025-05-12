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

  const setUrlPage = (page: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page);
    setSearchParams(newParams);
  };

  const isCurrentPage = (page: number) => page === currentPage;

  const createListPages = (): (number | string)[] => {
    const listPages: (number | string)[] = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) listPages.push(i);
      return listPages;
    }

    listPages.push(1);

    if (currentPage > 5) {
      listPages.push("...");
    }

    const start = Math.max(2, currentPage - 2);
    const end = Math.min(totalPages - 1, currentPage + 2);

    for (let i = start; i <= end; i++) {
      listPages.push(i);
    }

    if (currentPage < totalPages - 4) {
      listPages.push("...");
    }

    listPages.push(totalPages);

    return listPages;
  };

  const pages = createListPages();

  return (
    <div className="fixed  w-full bottom-2">
      <footer className="flex justify-center ">
        <div className="bg-graydark/60 backdrop-blur-sm flex gap-2 px-4 py-2 rounded-2xl">
          {pages.map((p, i) => (
            <p
              key={i}
              onClick={() => typeof p === "number" && setUrlPage(p.toString())}
              className={`w-fit h-fit ${
                isCurrentPage(Number(p)) ? "bg-skyblue-p" : "bg-graydark"
              } ${
                typeof p === "number" ? "cursor-pointer" : "cursor-default"
              } rounded-lg py-1 px-2 text-white`}
            >
              {p}
            </p>
          ))}
        </div>
      </footer>
    </div>
  );
}
