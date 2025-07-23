import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BookType } from "../types/types";

interface ReadingListState {
  showSheet: boolean;
  setShowSheet: (showSheet: boolean) => void;
  readingList: BookType[];
  setReadingList: (books: BookType[]) => void;
}

export const useReadingListStore = create<ReadingListState>()(
  persist(
    (set) => ({
      showSheet: false,
      setShowSheet: (showSheet) => set({ showSheet }),
      readingList: [],
      setReadingList: (readingList) => set({ readingList }),
    }),
    {
      name: "readingList",
    }
  )
);
