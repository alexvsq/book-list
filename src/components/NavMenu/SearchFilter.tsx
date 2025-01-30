import { useState } from "react"
import { useStoreSearch } from '../../store/searchSlice'

export default function SearchFilter() {
    const { setSearch } = useStoreSearch()

    const [searchInput, setSearchInput] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch(searchInput)
    }

    return (
        <form action="" onSubmit={handleSubmit} className=' flex flex-col'>
            <label htmlFor="" className='my-2'>Buscar</label>
            <input
                className=' bg-graydark rounded-lg py-1 px-3 w-full '
                type="text"
                placeholder='Titulo o Autor'
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
            />
        </form>
    )
}
