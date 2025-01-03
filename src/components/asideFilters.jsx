import React, { useContext, useState } from 'react';
import { DataContext } from '../contexts/contexts';
import booksJson from '../data/books.json'
import IconFilter from '../assets/icon-filters'
export default function asideFilters() {

    const { textInput, setTextInput, SetGenreSearch, SetYearSort, numPages, setNumPages } = useContext(DataContext)

    const genresSet = new Set(booksJson.map(x => x.book.genre));
    const genresArray = [...genresSet]
    genresArray.unshift('Todos');

    const [menuMobile, setMenuMobile] = useState(false)

    return (
        <aside className={` bg-gray px-4 absolute z-30 ${menuMobile ? "" : "h-16"}  overflow-hidden w-full md:static  md:h-screen md:w-[200px] transition-all   `}>
            <div className='flex justify-between'>
                <h2 className=' text-3xl font-bold py-4 md:py-10'>Books</h2>

                <button
                    className=' md:hidden'
                    onClick={() => setMenuMobile(!menuMobile)}
                >
                    <IconFilter />
                </button>

            </div>
            <h3 className=' text-skyblueP text-2xl font-bold py-2'>Filtros</h3>

            <div className=' flex flex-col gap-4'>

                <section>
                    <p className='  my-2'>Buscar</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            className=' bg-graydark rounded-[10px] py-1 px-2 w-full'
                            placeholder='Titulo o Autor'
                            onChange={(e) => setTextInput(e.target.value)}
                            value={textInput}
                        />
                    </form>
                </section>

                <section className=' flex flex-col'>
                    <label className='  my-2' >Género</label>

                    <select
                        onChange={(e) =>
                            e.target.value === "Todos" ?
                                SetGenreSearch("") :
                                SetGenreSearch(e.target.value)
                        }
                        id="cars"
                        className=' text-white bg-graydark rounded-[10px] py-1 px-2 w-full text-[14px]'

                    >
                        {
                            genresArray.map((genre, i) => {
                                return (
                                    <option
                                        key={i}
                                        value={genre}
                                    >{genre}</option>
                                )
                            })
                        }

                    </select>
                </section>

                <section className=' flex flex-col'>
                    <label className='  my-2'>Año</label>

                    <select
                        onChange={(e) => {
                            e.target.value === "Todos" ?
                                SetYearSort("") :
                                SetYearSort(e.target.value)
                        }}
                        id="cars"
                        className=' text-white bg-graydark rounded-[10px] py-1 px-2 w-full text-[14px]'>
                        <option value="all">Todos</option>
                        <option value="asc">Ascendente</option>
                        <option value="dsc">Descendente</option>
                    </select>
                </section>

                <section>
                    <p className='  my-2'>Número de Páginas</p>

                    <div className="">
                        <input
                            className=' w-full'
                            type="range"
                            id="volume"
                            name="volume"
                            min="0" max="1000"
                            onChange={(e) =>
                                setNumPages(e.target.value)}
                            value={numPages}
                        />
                        <p className=' flex flex-col p-2 text-colortext'>Mínimo número de páginas: ({numPages}) </p>

                    </div>

                </section>
            </div>
        </aside >
    )
}
