import { useBookList } from '../store/booksSlice'
import { useStoreSearch } from '../store/searchSlice'
import CardBook from './CardBook';

export default function ShowBooksContent() {
    const { bookList } = useBookList();
    const { genre, minPages, search, showListReading, year } = useStoreSearch();

    const filteredBooks = bookList?.filter((book) => {
        const matchesSearch = search
            ? book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.synopsis.toLowerCase().includes(search.toLowerCase())
            : true;

        const matchesGenre = genre
            ? Array.isArray(book.genre)
                ? book.genre.includes(genre)
                : book.genre === genre
            : true;

        const matchesYear = [...bookList].sort((a, b) => {
            if (year === "ascendente") {
                return a.year - b.year;
            } else if (year === "descendente") {
                return b.year - a.year;
            }
            return 0;
        });

        const matchesMinPages = minPages ? book.pages >= parseInt(minPages) : true;

        const matchesReadingList = showListReading ? book.readList === true : true;

        return matchesSearch && matchesGenre && matchesYear && matchesMinPages && matchesReadingList;
    });

    const sortedBooks =
        filteredBooks ?
            [...filteredBooks].sort((a, b) => {
                if (year === "ascendente") {
                    return a.year - b.year;
                } else if (year === "descendente") {
                    return b.year - a.year;
                }
                return 0; // Si no se selecciona orden, mantener el orden original
            })
            : bookList


    return (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-1 ">
            {
                sortedBooks && sortedBooks?.length > 0 ?
                    sortedBooks?.map((book, index) => (
                        <CardBook key={index} Book={book} />
                    ))
                    : <div className=' h-full w-full flex justify-center items-center'>
                        <p>No hay libros en esta lista</p>
                    </div>
            }
        </div>
    );
}
