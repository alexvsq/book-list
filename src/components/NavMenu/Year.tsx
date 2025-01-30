import { useStoreSearch } from '../../store/searchSlice'

export default function Year() {

    const { year, setYear } = useStoreSearch()

    return (
        <form action="" className=' flex flex-col'>

            <label htmlFor="" className='my-2'>Año</label>

            <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className=' bg-graydark rounded-lg py-1 px-3 '>
                <option value="">todos</option>
                <option value="ascendente">Ascendente</option>
                <option value="descendente">Descendete</option>
            </select>
        </form>
    )
}
