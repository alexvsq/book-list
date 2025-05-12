import { BookType } from "../types/types";

export function SaveListReading(BooksToSave: BookType[]) {
  localStorage.setItem("StorageListReading", JSON.stringify(BooksToSave));
}

export function GetStorageListReading(): BookType[] | null {
  try {
    const storageList = localStorage.getItem("StorageListReading");
    if (storageList) {
      return JSON.parse(storageList);
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
