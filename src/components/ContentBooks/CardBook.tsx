import { BookType } from "../../types/types";
import { Link } from "react-router";
import { BookmarkPlus, BookmarkCheck } from 'lucide-react';
import { useReadingList } from '../../hooks/useReadingList'

export default function CardBook({ Book }: { Book: BookType }) {
  const { addToList, removeFromList, readingList } = useReadingList();

  const titleSmall =
    Book.volumeInfo.title.length > 15
      ? Book.volumeInfo.title.slice(0, 15) + "..."
      : Book.volumeInfo.title;
  const authotSmall =
    Book.volumeInfo.authors?.[0] && Book.volumeInfo.authors?.[0].length > 18
      ? Book.volumeInfo.authors?.[0].slice(0, 18) + "..."
      : Book.volumeInfo.authors?.[0];

  const isInReadingList = readingList.find((book) => book.id === Book.id);

  return (
    <article
      className={`flex flex-col  bg-white dark:bg-black border border-border dark:border-border-dark  transition w-full rounded-lg group shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
    >

      <Link to={`/book/${Book.id}`}>
        <img
          className=" w-full aspect-[6/9] object-cover cursor-pointer overflow-hidden"
          src={Book.volumeInfo.imageLinks?.smallThumbnail}
          alt={Book.volumeInfo.title}
        />
      </Link>

      <footer className="p-3 flex flex-col gap-2">
        <p className=" font-semibold">{titleSmall}</p>
        <p className="text-sm text-text-secondary capitalize">{authotSmall}</p>
        {
          isInReadingList ? (
            <button onClick={() => removeFromList(Book.id)} className="bg-sky-600 text-white rounded-lg flex justify-center items-center py-1 cursor-pointer">
              <BookmarkCheck className="mr-2 h-4 w-4" />
              In My List
            </button>

          ) : <button onClick={() => addToList(Book)} className="bg-bg-secodary dark:bg-bg-secodary-dark rounded-lg flex justify-center items-center py-1 cursor-pointer">
            <BookmarkPlus className="mr-2 h-4 w-4" />
            Add to List
          </button>
        }


      </footer>

    </article>
  );
}
