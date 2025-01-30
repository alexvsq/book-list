import { useBookList } from '../store/booksSlice'
import { useStoreSearch } from '../store/searchSlice'


export default function NavContentBooks() {

    const { bookListReading } = useBookList()
    const { showListReading, setShowListReading } = useStoreSearch()

    return (
        <header className=' flex gap-4 pb-2'>
            <p
                onClick={() => setShowListReading(false)}
                className={` ${showListReading ? 'bg-gray' : 'bg-skyblue-p'} cursor-pointer py-2 px-4 rounded-xl`}>Libros</p>
            <p
                onClick={() => setShowListReading(true)}
                className={` ${showListReading ? 'bg-skyblue-p' : ' bg-gray'} cursor-pointer py-2 px-4 rounded-xl`}>Lista de Lectura ({bookListReading ? bookListReading.length : '0'})</p>
        </header>
    )
}
