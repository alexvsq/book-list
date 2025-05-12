import { ResponseGetBooks, BookType } from "../types/types";

interface getBooksResponse {
  error: boolean;
  message: string;
  data: ResponseGetBooks | null;
}

export async function getBooks(
  page: number | null,
  search: string | null
): Promise<getBooksResponse> {
  const startIndex = page ? (page - 1) * 40 : 0;
  const searchQuery = search ? `&q=${search}` : "&q=a";

  const URL = `https://www.googleapis.com/books/v1/volumes?${searchQuery}&startIndex=${startIndex}&maxResults=40&filter=paid-ebooks`;

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
