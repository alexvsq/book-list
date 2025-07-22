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
  }, 800);

  return (
    <article className="border border-border dark:border-border-dark rounded-lg py-2 px-3">
      <input
        className="w-full focus:outline-none"
        type="text"
        placeholder="Search..."
        onChange={(e) => setUrlSearch(e.target.value)}
      />
    </article>
  );
}
