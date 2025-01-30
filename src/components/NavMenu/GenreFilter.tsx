import { useStoreSearch } from '../../store/searchSlice'
import DataBooksJson from '../../data/books.json'

export default function GenreFilter() {
    const { genre, setGenre } = useStoreSearch()

    const genres = DataBooksJson.map((book) => book.book.genre)
    const genresUnique = [...new Set(genres)]

    return (
        <form action="" className=' flex flex-col'>

            <label htmlFor="" className='my-2'>Género</label>

            <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className=' bg-graydark rounded-lg py-1 px-3 '>

                <option value="">Todos</option>

                {
                    genresUnique.map((genre: string, index) => {
                        return (
                            <option key={index + genre} value={genre} >{genre}</option>
                        )
                    })
                }

            </select>
        </form>
    )
}
