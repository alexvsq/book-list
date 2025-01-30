import { useState } from "react"
import GenreFilter from "../components/NavMenu/GenreFilter"
import Year from "../components/NavMenu/Year"
import NumberMinPages from "../components/NavMenu/NumberMinPages"
import SearchFilter from "../components/NavMenu/SearchFilter"

export default function Nav() {

    const [showMenuMobile, setShowMenuMobile] = useState(false)

    return (
        <aside className=' bg-gray w-full md:h-full p-3  '>
            <header className=' flex justify-between md:py-5'>
                <h2 className=' text-white font-bold text-3xl'>Books</h2>
                <div onClick={() => setShowMenuMobile(!showMenuMobile)} className=" md:hidden bg-skyblue-p cursor-pointer rounded-lg py-1 px-2 w-fit">
                    <p>Filtros</p>
                </div>
            </header>

            <footer className=' hidden md:block'>
                <header className='my-3'>
                    <h3 className=' text-2xl font-semibold text-skyblue-p'>Filtros</h3>
                </header>

                <div className='flex flex-col gap-3'>

                    <SearchFilter />

                    <GenreFilter />

                    <Year />

                    <NumberMinPages />

                </div>
            </footer>
            {
                showMenuMobile &&
                <div className='fixed inset-0 z-10 bg-[#000000]/20  md:hidden flex justify-center items-center'>
                    <div className=" bg-gray p-4 rounded-lg flex flex-col gap-3">
                        <header className=" flex justify-end">
                            <p onClick={() => setShowMenuMobile(!showMenuMobile)} className="bg-skyblue-p cursor-pointer rounded-lg py-1 px-2 w-fit">Cerrar</p>
                        </header>
                        <SearchFilter />

                        <GenreFilter />

                        <Year />

                        <NumberMinPages />
                    </div>

                </div>
            }
        </aside >
    )
}
