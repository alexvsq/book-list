import { useState } from "react";
import Order from "./filters/Order";
import SearchFilter from "./filters/SearchFilter";

export default function Nav() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  return (
    <aside className="bg-gray h-[60px] md:h-screen w-full md:w-[250px] p-3">
      <header className=" flex justify-between md:py-5">
        <h2 className=" text-white font-bold text-3xl">Books</h2>
        <div
          onClick={() => setShowMenuMobile(!showMenuMobile)}
          className=" md:hidden bg-skyblue-p cursor-pointer rounded-lg py-1 px-2 w-fit"
        >
          <p>Filtros</p>
        </div>
      </header>

      <footer className=" hidden md:block">
        <header className="my-3">
          <h3 className=" text-2xl font-semibold text-skyblue-p">Filtros</h3>
        </header>

        <div className="flex flex-col gap-3">
          <SearchFilter />

          <Order />
        </div>
      </footer>
      {showMenuMobile && (
        <div className="fixed inset-0 z-10 bg-[#000000]/20  md:hidden flex justify-center items-center">
          <div className=" bg-gray p-4 rounded-lg flex flex-col gap-3">
            <header className=" flex justify-end">
              <p
                onClick={() => setShowMenuMobile(!showMenuMobile)}
                className="bg-red cursor-pointer rounded-lg py-1 px-2 w-fit"
              >
                Cerrar
              </p>
            </header>
            <SearchFilter />

            <Order />
          </div>
        </div>
      )}
    </aside>
  );
}
