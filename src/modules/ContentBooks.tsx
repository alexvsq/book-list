import { useEffect } from 'react'
import { useBookList } from '../store/booksSlice'
import NavContentBooks from '../components/NavContentBooks'
import DATABOOKSJSON from '../data/books.json'
import ShowBooksContent from '../components/ShowBooksContent'
import { GetStorageListReading } from '../functions/storage'

export default function ContentBooks() {

    const { bookList, setBookList, bookListReading, setBookListReading } = useBookList()

    useEffect(() => {
        const toBookList = DATABOOKSJSON.map((book) => book.book)
        const readingListStorage = GetStorageListReading()
        if (readingListStorage) {
            setBookListReading(readingListStorage)
        }
        setBookList(toBookList)
    }, [])

    useEffect(() => {
        const newBookList = bookList?.map((bookList) => {
            if (bookListReading?.some((bookReading) => bookList.ISBN == bookReading.ISBN)) {
                return {
                    ...bookList,
                    readList: true
                }
            } else {
                return {
                    ...bookList,
                    readList: null
                }
            }
        })
        newBookList && setBookList(newBookList)

    }, [bookListReading])

    return (
        <div className=' h-full w-full overflow-y-scroll p-4'>
            <NavContentBooks
            />

            <ShowBooksContent />
        </div>
    )
}
