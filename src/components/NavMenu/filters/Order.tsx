import { useSearchParams } from "react-router";

export default function Order() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setUrlOrder = (order: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", order);
    setSearchParams(newParams);
  };

  return (
    <article className=" flex flex-col">
      <label htmlFor="order-select" className="my-2">
        Order By
      </label>

      <select
        onChange={(e) => setUrlOrder(e.target.value)}
        id="order-select"
        className=" bg-graydark rounded-lg py-1 px-3 "
      >
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
      </select>
    </article>
  );
}
