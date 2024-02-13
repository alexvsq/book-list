import { createContext, useEffect, useState } from "react";
import books from '../data/books.json'

export const DataContext = createContext();

function DataContextProvider(props) {

    const [listLibros, setListLibros] = useState(books)
    const [listaLectura, setListaLectura] = useState([])
    const [textInput, setTextInput] = useState('')
    const [genreSearch, SetGenreSearch] = useState('')
    const [yearSort, SetYearSort] = useState('')
    const [numPages, setNumPages] = useState(0)


    const valor = {
        listLibros, setListLibros,
        listaLectura, setListaLectura,
        textInput, setTextInput,
        genreSearch, SetGenreSearch,
        yearSort, SetYearSort,
        numPages, setNumPages
    }

    useEffect(() => {
        const listLibrosStorage = JSON.parse(localStorage.getItem('listLibrosStorage'))
        const listaLecturaStorage = JSON.parse(localStorage.getItem('listaLecturaStorage'))

        if (listLibrosStorage && listaLecturaStorage) {
            setListLibros(listLibrosStorage);
            setListaLectura(listaLecturaStorage);
        }

    }, []);

    return (
        <DataContext.Provider value={valor}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;