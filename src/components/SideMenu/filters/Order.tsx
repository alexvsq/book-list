import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

export default function Order() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState<"relevance" | "newest">("relevance");

  useEffect(() => {
    const param = searchParams.get("order");
    if (param === "relevance" || param === "newest") {
      setOrder(param);
    } else {
      setOrder("relevance");
    }
  }, [searchParams]);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", order);
    setSearchParams(newParams);
  }, [order]);

  return (
    <article className="flex flex-col py-1">
      <p className="text-sm font-medium my-2">Sort By</p>

      <label className="flex gap-2 items-center py-1 cursor-pointer">
        <input
          type="radio"
          name="order"
          value="relevance"
          checked={order === "relevance"}
          onChange={() => setOrder("relevance")}
        />
        <span className="font-medium">Relevance</span>
      </label>

      <label className="flex gap-2 items-center py-1 cursor-pointer">
        <input
          type="radio"
          name="order"
          value="newest"
          checked={order === "newest"}
          onChange={() => setOrder("newest")}
        />
        <span className="font-medium">Newest</span>
      </label>
    </article>
  );
}
