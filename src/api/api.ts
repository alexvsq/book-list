import { ResponseGetBooks, BookType, searchFiltersType } from "../types/types";

const URL_BASE = "https://www.googleapis.com/books/v1/volumes";

export async function getBooks(page = 1, search = "", orderQuery = "") {
  try {
    const url = new URL(URL_BASE);
    url.searchParams.set("filter", "paid-ebooks");
    url.searchParams.set("startIndex", ((page - 1) * 40).toString());
    url.searchParams.set("maxResults", "40");
    url.searchParams.set("q", search ? search : "a");
    if (orderQuery) url.searchParams.set("orderBy", orderQuery || "relevance");

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ResponseGetBooks = await response.json();

    return data;
  } catch (error) {
    throw new Error("Server error");
  }
}

export async function getBookById(bookId: string | undefined) {
  if (!bookId) throw new Error("BookId is undefined");

  try {
    const url = new URL("volumes/" + bookId, URL_BASE);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BookType = await response.json();

    return data;
  } catch (error) {
    throw new Error("Server error");
  }
}
