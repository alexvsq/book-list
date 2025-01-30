import { Book } from "../types/types";
import { create } from "zustand";

interface bookList {
  bookList: Book[] | null;
  setBookList: (books: Book[]) => void;
  bookListReading: Book[] | null;
  setBookListReading: (books: Book[]) => void;
}

interface bookSelected {
  bookSelected: Book | null;
  setBookSelected: (BookSelected: Book | null) => void;
}

export const useBookList = create<bookList>((set) => ({
  bookList: null,
  setBookList: (bookList: Book[]) => set({ bookList }),
  bookListReading: null,
  setBookListReading: (bookListReading: Book[]) => set({ bookListReading }),
}));

export const useBookSelected = create<bookSelected>((set) => ({
  bookSelected: null,
  setBookSelected: (bookSelected: Book | null) => set({ bookSelected }),
}));
