import { BookType } from "../../../types/types";
import { useSearchParams } from "react-router";

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
    <article
      onClick={setUrlBook}
      className={`relative flex flex-col gap-2 p-2 bg-gray hover:bg-skyblue-p/10 hover:scale-105 cursor-pointer transition max-w-[250px] rounded-lg animate-fade animate-duration-500 group`}
    >
      {/*  {Book.readList && (
        <div className=" absolute -right-0 text-sm bg-skyblue-p rounded-lg py-1 px-2 text-white">
          Leyendo
        </div>
      )} */}
      <div className="rounded-md aspect-[6/9] overflow-hidden">
        <img
          className=" w-full h-full object-cover "
          src={Book.volumeInfo.imageLinks?.smallThumbnail}
          alt={Book.volumeInfo.title}
        />
      </div>

      <p className=" font-bold">{titleSmall}</p>
      <div className=" text-sm text-colortext">
        <p className=" ">{authotSmall}</p>
        <p className="">{Book.volumeInfo.publishedDate}</p>
      </div>
      <p className=" py-1 px-2 bg-graydark rounded-lg w-fit text-colortext text-xs">
        {Book.volumeInfo.categories?.[0]}
      </p>
    </article>
  );
}
