import React, { useContext } from 'react';
import { DataContext } from '../contexts/contexts';

export default function CardBook({ item }) {

    const { setBookSelected } = useContext(DataContext);

    return (
        <article
            onClick={() => setBookSelected(item)}
            className="min-w-[200px] max-w-[210px] bg-gray p-2 rounded-[10px] text-colortext hover:bg-skyblueP/20 hover:scale-105 cursor-pointer transition"
        >
            <div className="h-[276px] w-full">
                <img className="h-full w-full object-cover" src={item.book.cover} alt={item.book.title} />
            </div>

            <p className="text-white mt-3 font-semibold">
                {item.book.title.length > 22 ? item.book.title.slice(0, 22) + '...' : item.book.title}
            </p>

            <div className="flex justify-between text-[14px] my-1">
                <p>{item.book.author && item.book.author.name}</p>
                <p>{item.book.year}</p>
            </div>

            <p className="inline-block px-3 py-1 text-[13px] bg-graydark rounded-[10px]">{item.book.genre}</p>
        </article>
    )
}

