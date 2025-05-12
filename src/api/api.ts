import { ResponseGetBooks, BookType, searchFiltersType } from "../types/types";

interface getBooksResponse {
  error: boolean;
  message: string;
  data: ResponseGetBooks | null;
}

export async function getBooks(
  filters: searchFiltersType
): Promise<getBooksResponse> {
  const startIndex = filters.page ? (filters.page - 1) * 40 : 0;
  const searchQuery = filters.search ? `&q=${filters.search}` : "&q=a";
  const orderQuery =
    filters.order && filters.order !== "relevance" ? "newest" : "relevance";

  const URL = `https://www.googleapis.com/books/v1/volumes?${searchQuery}&startIndex=${startIndex}&maxResults=40&orderBy=${orderQuery}&filter=paid-ebooks`;
  console.log(URL);

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      error: false,
      message: "success",
      data: data,
    };
  } catch (error) {
    console.error("Error fetching books:", error);
    return {
      error: true,
      message: "error fetching data",
      data: null,
    };
  }
}

interface getBookResponse {
  error: boolean;
  message: string;
  data: BookType | null;
}

export async function getBook(bookId: string): Promise<getBookResponse> {
  const URL = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      error: false,
      message: "success",
      data: data,
    };
  } catch (error) {
    console.error("Error fetching books:", error);
    return {
      error: true,
      message: "error fetching data",
      data: null,
    };
  }
}
