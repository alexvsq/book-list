import { useStoreSearch } from '../../store/searchSlice'

export default function NumberMinPages() {

    const { minPages, setMinPages } = useStoreSearch()

    return (
        <div>
            <form className=' flex flex-col'>
                <label htmlFor="" className='my-2'>Número de Páginas</label>
                <input
                    type="range"
                    min="0" max="1000"
                    onChange={(e) => setMinPages(e.target.value)}
                    value={minPages}
                />
            </form>
            <p className=' text-colortext my-2'>Mínimo Número de Páginas ({minPages})</p>
        </div>
    )
}
