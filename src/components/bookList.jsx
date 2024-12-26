import React, { useContext, useState } from 'react'
import { DataContext } from '../contexts/contexts';
import BookSelected from './bookSelected';
import Home from './home';
import ListLectura from './listLectura';

export default function bookList() {

    const { listLibros, listaLectura, setTextInput } = useContext(DataContext)

    const [page, setPage] = useState('home')

    return (

        <section className='flex flex-1 '>

            <ul className=' pt-20  fixed z-20 px-5 md:py-8 flex gap-3'>
                <li
                    onClick={() => {
                        setPage('home')
                        setTextInput('')
                    }}
                    className={`  px-5 py-1  rounded-[10px] hover:scale-105 transition cursor-pointer  ${page === 'home' ? "bg-skyblueP" : "bg-gray"}`}>Libros ({listLibros.length})</li>
                <li
                    onClick={() => {
                        setPage('listLectura')
                        setTextInput('')
                    }}
                    className={`  px-5 py-1  rounded-[10px] hover:scale-105 transition cursor-pointer ${page === 'listLectura' ? "bg-skyblueP" : "bg-gray"} `}>Lista de Lectura ({listaLectura.length})</li>
            </ul>
            <div className=' w-full '>

                <div className=' max-h-screen overflow-y-scroll pt-12 pb-5 md:p-5 scrollerStyle'>

                    <section className=' justify-center pt-20 grid   grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-2 md:gap-4 '>

                        {
                            page === 'home' && <Home />
                        }{
                            page === 'listLectura' && <ListLectura />
                        }

                    </section>
                </div>
            </div>

            <BookSelected />

        </section>
    )
}


/* 

               
*/