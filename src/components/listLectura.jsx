import React, { useContext } from 'react';
import { DataContext } from '../contexts/contexts';
import CardBook from './CardBook';

export default function listaLectura() {
    const { listaLectura, textInput } = useContext(DataContext)

    return (
        <>
            {listaLectura.length > 0 ? listaLectura
                .filter(current => current.book.title.toLowerCase().includes(textInput.toLowerCase()) || current.book.author.name.toLowerCase().includes(textInput.toLowerCase()))
                .map((item, index) => {

                    return (
                        <CardBook
                            key={index}
                            item={item}
                        />
                    )
                }) : (
                <p className='text-white text-center my-8'>No hay libros en esta lista</p>
            )
            }

        </>
    );
}
