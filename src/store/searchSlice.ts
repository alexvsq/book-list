import { create } from "zustand";

interface SearchSlice {
  search: string;
  setSearch: (search: string) => void;
  genre: string;
  setGenre: (genre: string) => void;
  year: string;
  setYear: (year: string) => void;
  minPages: string;
  setMinPages: (minPages: string) => void;
  showListReading: boolean;
  setShowListReading: (showListReading: boolean) => void;
}

export const useStoreSearch = create<SearchSlice>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),

  genre: "",
  setGenre: (genre: string) => set({ genre }),

  year: "",
  setYear: (year: string) => set({ year }),

  minPages: "0",
  setMinPages: (minPages: string) => set({ minPages }),

  showListReading: false,
  setShowListReading: (showListReading: boolean) => set({ showListReading }),
}));
