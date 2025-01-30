import { useBookSelected, useBookList } from '../store/booksSlice'
import { Book } from '../types/types'
import { SaveListReading } from '../functions/storage'

export default function BookSelected() {
  const { bookSelected, setBookSelected, } = useBookSelected()
  const { bookListReading, setBookListReading } = useBookList()

  if (!bookSelected) return

  const addToRedingList = () => {
    const newBook: Book = {
      ...bookSelected,
      readList: true
    }
    if (bookListReading) {
      SaveListReading([...bookListReading, newBook])
      setBookListReading([...bookListReading, newBook])
    } else {
      SaveListReading([newBook])
      setBookListReading([newBook])
    }
    setBookSelected({ ...bookSelected, readList: true })
  }
  const removeFromReadingList = () => {
    if (bookListReading) {
      const newList = bookListReading.filter((book) => book.ISBN != bookSelected.ISBN)
      SaveListReading(newList)
      setBookListReading(newList)
      setBookSelected({ ...bookSelected, readList: null })
    }
  }

  return (
    <div className=' fixed inset-0 bg-[#000000]/50 backdrop-blur-sm flex justify-center items-center'>

      <article className='w-[90%] h-[90%] md:w-[900px] md:h-[450px] md:max-w-[90%] bg-gray p-3 rounded-lg overflow-y-auto animate-fade animate-duration-500' >


        <div className=' flex flex-col items-center md:items-stretch md:flex-row h-full' >


          <aside className=' w-[80%] md:w-auto  aspect-[6/9]  '>
            <img className='w-full md:h-full rounded-lg object-cover' src={bookSelected.cover} alt="" />
          </aside>

          <div className=' p-2 flex flex-col  w-full'>
            <header className=' flex justify-end'>
              <p onClick={() => setBookSelected(null)} className=' cursor-pointer bg-skyblue-p w-8 h-8 flex justify-center items-center rounded-full'>X</p>
            </header>

            <footer className=' h-full flex flex-col justify-around px-3'>
              <header>
                <h3 className=' text-3xl font-bold'>{bookSelected?.title}</h3>
              </header>
              <div className=' flex flex-col gap-2'>
                <p className=' text-colortext text-sm'>Descripción : <span className=' text-white text-base'>{bookSelected?.synopsis}</span></p>
                <p className=' text-colortext text-sm'>Autor : <span className=' text-white text-base'>{bookSelected?.author.name}</span></p>
                <p className=' text-colortext text-sm'>Año : <span className=' text-white text-base'>{bookSelected?.year}</span></p>
                <p className=' text-colortext text-sm'>Páginas : <span className=' text-white text-base'>{bookSelected?.pages}</span></p>

                <p className=' text-colortext text-sm'>Más del Autor :
                  {
                    bookSelected.author.otherBooks.map((book: string, index) => {

                      const coma = index < bookSelected.author.otherBooks.length - 1

                      return (
                        <span key={book + index} className=' text-white text-sm'>{book}{coma ? ' - ' : ''} </span>
                      )
                    })
                  }
                </p>
                <p className=' text-colortext text-sm'>ISBN : <span className=' text-white text-base'>{bookSelected?.ISBN}</span></p>
              </div>

              <footer >
                {
                  bookSelected.readList == true
                    ? <button onClick={removeFromReadingList} className='cursor-pointer bg-red hover:scale-105 py-2 px-4 rounded-lg'>Eliminar a lista de Lectura</button>
                    : <button onClick={addToRedingList} className='cursor-pointer bg-skyblue-p hover:scale-105 py-2 px-4 rounded-lg'>Agregar a lista de Lectura</button>
                }
              </footer>
            </footer>
          </div>
        </div>
      </article>
    </div>
  )
}
