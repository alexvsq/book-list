import { useSearchParams } from "react-router";
import { useDebouncedCallback } from "use-debounce";

export default function SearchFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setUrlSearch = useDebouncedCallback((value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("page");
    if (value == "") {
      newParams.delete("search");
      setSearchParams(newParams);
      return;
    }
    newParams.set("search", value);
    setSearchParams(newParams);
  }, 600);

  return (
    <article className=" flex flex-col">
      <label htmlFor="" className="my-2">
        Search
      </label>
      <input
        className=" bg-graydark rounded-lg py-1 px-3 "
        type="text"
        placeholder="Search..."
        onChange={(e) => setUrlSearch(e.target.value)}
      />
    </article>
  );
}
