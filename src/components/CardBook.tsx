import { Book } from '../types/types'
import { useBookSelected } from '../store/booksSlice'

export default function CardBook({ Book }: { Book: Book }) {

    const { setBookSelected } = useBookSelected()

    const titleSmall = Book.title.length > 16 ? Book.title.slice(0, 16) + '...' : Book.title

    const selectBook = (bookProp: Book) => {
        setBookSelected(bookProp)
    }

    return (
        <article
            onClick={() => selectBook(Book)}
            className={`relative flex flex-col gap-2 bg-gray hover:bg-skyblue-p/10 hover:scale-105 cursor-pointer transition  p-2 m-2 max-w-[250px] rounded-lg animate-fade animate-duration-500`}>

            {
                Book.readList
                && <div className=' absolute -right-0 text-sm bg-skyblue-p rounded-lg py-1 px-2 text-white'>Leyendo</div>
            }

            <img
                className=' rounded-md aspect-[6/9] object-cover'
                src={Book.cover}
                alt={Book.title}
            />

            <p className=' font-bold'>{titleSmall}</p>
            <div className=' text-sm text-colortext flex justify-between items-center'>
                <p className=' '>{Book.author.name}</p>
                <p className=''>{Book.year}</p>
            </div>

            <p className=' py-1 px-2 bg-graydark rounded-lg w-fit text-colortext text-sm'>{Book.genre}</p>

        </article>
    )
}
