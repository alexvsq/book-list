import { BookType } from "../../types/types";
import { useSearchParams, Link } from "react-router";
import { BookmarkPlus, BookmarkCheck } from 'lucide-react';

export default function CardBook({ Book }: { Book: BookType }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const titleSmall =
    Book.volumeInfo.title.length > 15
      ? Book.volumeInfo.title.slice(0, 15) + "..."
      : Book.volumeInfo.title;
  const authotSmall =
    Book.volumeInfo.authors?.[0] && Book.volumeInfo.authors?.[0].length > 18
      ? Book.volumeInfo.authors?.[0].slice(0, 18) + "..."
      : Book.volumeInfo.authors?.[0];
  const setUrlBook = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("bookId", Book.id.toString());
    setSearchParams(newParams);
  };

  return (
    <Link to={`/book/${Book.id}`}>
      <article
        onClick={setUrlBook}
        className={`flex flex-col  bg-white dark:bg-black border border-border dark:border-border-dark cursor-pointer transition w-full rounded-lg group shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
      >

        <img
          className=" w-full aspect-[6/9] object-cover "
          src={Book.volumeInfo.imageLinks?.smallThumbnail}
          alt={Book.volumeInfo.title}
        />

        <footer className="p-3 flex flex-col gap-2">
          <p className=" font-semibold">{titleSmall}</p>
          <p className="text-sm text-text-secondary capitalize">{authotSmall}</p>
          <button className="bg-bg-secodary dark:bg-bg-secodary-dark rounded-lg flex justify-center items-center py-1">
            <BookmarkPlus className="mr-2 h-4 w-4" />
            Add to List
          </button>
        </footer>

      </article>
    </Link>
  );
}
