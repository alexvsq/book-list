import React, { useContext } from 'react';
import { DataContext } from '../contexts/contexts';
import CardBook from './CardBook';

export default function Home() {
    const { listLibros, textInput, genreSearch, yearSort, numPages } = useContext(DataContext);

    let arrayLibros = [...listLibros];

    //filtros 
    if (genreSearch.length > 1) {
        arrayLibros = arrayLibros.filter(current => current.book.genre === genreSearch);
    } else if (textInput.length > 1) {
        arrayLibros = arrayLibros.filter(
            current =>
                current.book.title.toLowerCase().includes(textInput.toLowerCase()) ||
                current.book.author.name.toLowerCase().includes(textInput.toLowerCase())
        );
    } else if (yearSort) {
        yearSort === 'asc'
            ? (arrayLibros = arrayLibros.sort((a, b) => a.book.year - b.book.year))
            : yearSort === 'dsc'
                ? (arrayLibros = arrayLibros.sort((a, b) => b.book.year - a.book.year))
                : (arrayLibros = [...listLibros]);
    } else if (numPages > 0) {
        arrayLibros = arrayLibros.filter(x => x.book.pages > numPages)
    }

    return (
        <>
            {arrayLibros.length > 0 ? (
                arrayLibros.map((item, index) => {
                    return (
                        <CardBook
                            key={index}
                            item={item}
                        />
                    );
                })
            ) : (
                <p className="text-white text-center my-8">No hay libros en esta lista</p>
            )}
        </>
    );
}
