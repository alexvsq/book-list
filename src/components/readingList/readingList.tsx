import { Link } from 'react-router'
import { useReadingList } from '../../hooks/useReadingList'
import { X } from 'lucide-react';

export default function readingList() {

    const { showSheet, setShowSheet, readingList, removeFromList } = useReadingList()

    if (!showSheet) return null

    return (
        <div className='fixed inset-0 bg-black/50 z-20'>

            <aside className='h-screen w-[400px] max-w-screen bg-white dark:bg-black right-0 absolute border border-border dark:border-border-dark shadow-lg'>
                {
                    readingList.length > 0 ?
                        <div className="flex flex-col gap-4 p-4 h-full">
                            <h3 className="text-xl font-semibold">My Reading List</h3>
                            <div className='flex flex-col h-full overflow-y-scroll'>
                                {
                                    readingList.map((book, index) => (
                                        <div key={index} className="flex gap-2 my-1">
                                            <Link to={`/book/${book.id}`}>
                                                <img
                                                    className="aspect-[2/3] max-w-[80px] cursor-pointer"
                                                    src={book.volumeInfo.imageLinks?.smallThumbnail}
                                                    alt={book.volumeInfo.title}
                                                />
                                            </Link>
                                            <aside className='flex flex-col gap-1 p-2'>
                                                <p className="">{book.volumeInfo.title}</p>
                                                <p className='text-sm text-text-secondary'>{book.volumeInfo.authors?.[0]}</p>
                                            </aside>
                                            <X className='ml-auto min-w-6 cursor-pointer' onClick={() => removeFromList(book.id)} />
                                        </div>
                                    ))
                                }
                            </div>
                            <button
                                onClick={() => setShowSheet(false)}
                                className='bg-sky-600 text-white rounded-xl flex justify-center items-center py-2 w-full cursor-pointer'>
                                Close
                            </button>
                        </div>
                        : <div className="flex flex-col gap-4 p-4 text-center">
                            <h3 className="text-2xl font-semibold">Reading List</h3>
                            <p>You don't have any book in your reading list</p>
                        </div>
                }
            </aside>

        </div>
    )
}
