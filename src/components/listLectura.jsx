import React, { useContext } from 'react';
import { DataContext } from '../contexts/contexts';

export default function listaLectura({bookSelected ,setBookSelected}) {
    const { listaLectura, textInput} = useContext(DataContext)

    return (
        <>
            {listaLectura.length > 0 ? listaLectura
             .filter(current => current.book.title.toLowerCase().includes(textInput.toLowerCase()) || current.book.author.name.toLowerCase().includes(textInput.toLowerCase()))
            .map((item, i) => {

                return (
                    <article
                        onClick={() => setBookSelected(item)}
                        key={i}
                        className="max-w-[200px] bg-gray p-2 rounded-[10px] text-colortext hover:bg-skyblueP/20 hover:scale-105 cursor-pointer transition"
                    >
                        <div className="h-[276px] w-full">
                            <img className="h-full w-full object-cover" src={item.book.cover} alt={item.book.title} />
                        </div>

                        <p className="text-white mt-3 font-semibold">{item.book.title.length > 22 ? item.book.title.slice(0,22) + '...' : item.book.title}</p>

                        <div className="flex justify-between text-[14px] my-1">
                            <p>{item.book.author && item.book.author.name}</p>
                            <p>{item.book.year}</p>
                        </div>

                        <p className="inline-block px-3 py-1 text-[13px] bg-graydark rounded-[10px]">{item.book.genre}</p>
                    </article>
                )
            }) : (
                <p className='text-white text-center my-8'>No hay libros en esta lista</p>
            )
            }

        </>
    );
}
