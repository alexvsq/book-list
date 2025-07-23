import { useReadingListStore } from "../store/storeReadingList";
import { BookType } from "../types/types";

export function useReadingList() {
  const { readingList, setReadingList, setShowSheet, showSheet } =
    useReadingListStore();

  const addToList = (newBook: BookType) => {
    const filteredBooks = readingList.filter((book) => newBook.id !== book.id);
    setReadingList([newBook, ...filteredBooks]);
  };

  const removeFromList = (bookId: string) => {
    const filteredBooks = readingList.filter((book) => book.id !== bookId);
    setReadingList(filteredBooks);
  };

  return { readingList, addToList, removeFromList, showSheet, setShowSheet };
}
