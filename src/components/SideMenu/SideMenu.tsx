import { useState } from "react";
import Order from "./filters/Order";
import SearchFilter from "./filters/SearchFilter";

export default function SideMenu() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  return (
    <aside className="md:col-span-1 pt-20 md:pt-0">
      <div className="bg-white dark:bg-black border border-border dark:border-border-dark w-full p-4 h-fit sticky top-24 shadow-lg rounded-lg">
        <h3 className=" text-2xl font-semibold py-1">Filters</h3>

        <SearchFilter />

        <Order />

      </div>
    </aside>
  );
}
