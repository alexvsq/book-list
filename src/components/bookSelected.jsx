import React, { useState, useContext, useEffect } from 'react'
import IconClose from '../assets/icon-close'
import { DataContext } from '../contexts/contexts';

export default function bookSelected({ bookSelected, setBookSelected }) {

    const { listLibros, setListLibros, listaLectura, setListaLectura } = useContext(DataContext)

    function addBook(book) {
        setListaLectura([...listaLectura.concat(book)])
        setListLibros((prevList) => (prevList.filter((item) => item.book.title !== book.book.title)))

    }

    function DeleteBook(book) {
        setListaLectura(listaLectura.filter((item) => item.book.title !== bookSelected.book.title))
        setListLibros(listLibros.concat(book))

    }
  
    function guardar() {
    
         localStorage.setItem('listLibrosStorage', JSON.stringify(listLibros));
        localStorage.setItem('listaLecturaStorage', JSON.stringify(listaLectura));        
    }

    useEffect(() => {
        if (bookSelected.length === 0) {
        }else{
             guardar();
        }
        
      }, [listLibros, listaLectura]);
    


    return (
        <aside className={` absolute z-40 md:static m-4 md:m-0  max-h-screen md:max-w-[320px] md:py-5 overflow-y-scroll scrollerStyle  ${Object.values(bookSelected).length > 0 ? '' : 'hidden'}`}>
            <div
                onClick={() => setBookSelected([])}
                className='absolute ' >
                <IconClose />
            </div>
            <section className='bg-gray p-4 rounded-[14px] md:mr-4 '>
                <div className=''>

                    <img src={bookSelected.book && bookSelected.book.cover} alt="" />

                    <h1 className=' text-xl font-semibold my-2'>{bookSelected.book && bookSelected.book.title}</h1>
                    <ul className='text-[14px] flex flex-col gap-2 text-colortext'>

                        <li className=''>Descripción: <span className='text-white'>{bookSelected.book && bookSelected.book.synopsis}</span></li>
                        <li >Autor: <span className='text-white'>{bookSelected.book ? bookSelected.book.author.name : ''} </span></li>
                        <li >Año: <span className='text-white'>{bookSelected.book && bookSelected.book.year}</span></li>
                        <li >Páginas: <span className='text-white'>{bookSelected.book && bookSelected.book.pages}</span></li>
                        <li >ISBN: <span className='text-white'>{bookSelected.book && bookSelected.book.ISBN}</span></li>
                        <li >Más del autor: <span className='text-white'>{bookSelected.book ? bookSelected.book.author.otherBooks : ''}</span></li>

                    </ul>
                </div>

                {
                    listaLectura.includes(bookSelected) ?
                        <button
                            onClick={() => {
                                 DeleteBook(bookSelected)  }}
                            className='  bg-red py-2 px-4 rounded-[10px] my-4 hover:scale-105 transition  font-semibold '>
                            Eliminar de la Lista de Lectura
                        </button> :

                        <button
                            onClick={() => { addBook(bookSelected) }}
                            className='  bg-skyblueP py-2 px-4 rounded-[10px] my-4 hover:scale-105 transition  font-semibold '>
                            Agregar a la Lista de Lectura
                        </button>

                }





            </section>
        </aside>
    )
}
