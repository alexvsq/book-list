import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getBook } from "../../../api/api";
import { BookType } from "../../../types/types";

export default function BookSelected() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [bookSelected, setBookSelected] = useState<BookType | null>(null);
  const bookId = searchParams.get("bookId");

  const clearUrl = () => {
    setBookSelected(null);
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("bookId");
    setSearchParams(newParams);
  };

  useEffect(() => {
    if (!bookId) {
      clearUrl();
      return;
    }
    getBook(bookId).then((res) => {
      if (res.error || res.data == null) {
        console.log(res);
        return;
      }
      setBookSelected(res.data);
    });
  }, [bookId]);
  if (!bookId) return null;
  return (
    <div className=" fixed inset-0 z-20 bg-[#000000]/50 backdrop-blur-sm flex justify-center items-center">
      <article className="w-[90%] h-[90%] md:w-[920px] md:h-[470px] md:max-w-[90%] bg-gray p-3 rounded-lg overflow-y-auto animate-fade animate-duration-500">
        {bookSelected ? (
          <div className=" flex flex-col items-center md:items-stretch md:flex-row h-full relative">
            <button
              onClick={clearUrl}
              className=" bg-red w-9 h-9 p-1 rounded-full cursor-pointer absolute top-2 right-5"
            >
              <img src="icons/close.png" alt="" className="w-full h-full" />
            </button>

            <aside className=" w-[80%] md:w-auto  aspect-[6/9]  ">
              <img
                className="w-full md:h-full rounded-lg object-cover"
                src={bookSelected.volumeInfo.imageLinks?.thumbnail}
                alt=""
              />
            </aside>

            <div className=" px-1 py-2 flex flex-col  w-full h-full overflow-y-auto pt-8">
              <footer className=" h-full flex flex-col justify-around px-3">
                <header>
                  <h3 className=" text-3xl font-bold my-3">
                    {bookSelected.volumeInfo.title}
                  </h3>
                </header>
                <div className=" flex flex-col gap-2 bg-graydark px-3 py-2 rounded-lg">
                  <p className=" text-colortext text-sm">
                    Autor :{" "}
                    <span className=" text-white text-base">
                      {bookSelected.volumeInfo.authors?.[0]}
                    </span>
                  </p>
                  <p className=" text-colortext text-sm">
                    Páginas :
                    <span className=" text-white text-base">
                      {bookSelected.volumeInfo.pageCount}
                    </span>
                  </p>
                  <p className=" text-colortext text-sm">
                    Año :{" "}
                    <span className=" text-white text-base">
                      {bookSelected.volumeInfo.publishedDate}
                    </span>
                  </p>
                  <p className=" text-colortext text-sm my-1">
                    Descripción :{" "}
                    <span className=" text-white text-sm">
                      {bookSelected.volumeInfo.description}
                    </span>
                  </p>
                </div>

                <footer className=" flex flex-wrap gap-2 my-1">
                  {bookSelected.volumeInfo.categories?.map(
                    (category: string, index) => {
                      return (
                        <p
                          key={index}
                          className=" py-1 px-3 bg-graydark rounded-lg w-fit text-colortext text-sm"
                        >
                          {category}
                        </p>
                      );
                    }
                  )}
                </footer>

                {/*<footer>
                     {bookSelected.readList == true ? (
                  <button
                    onClick={removeFromReadingList}
                    className="cursor-pointer bg-red hover:scale-105 py-2 px-4 rounded-lg"
                  >
                    Eliminar a lista de Lectura
                  </button>
                ) : (
                  <button
                    onClick={addToRedingList}
                    className="cursor-pointer bg-skyblue-p hover:scale-105 py-2 px-4 rounded-lg"
                  >
                    Agregar a lista de Lectura
                  </button>
                )} 
                </footer>*/}
              </footer>
            </div>
          </div>
        ) : (
          <p className=" text-white">Cargando...</p>
        )}
      </article>
    </div>
  );
}
