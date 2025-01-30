import { Book } from "../types/types";

export function SaveListReading(BooksToSave: Book[]) {
  localStorage.setItem("StorageListReading", JSON.stringify(BooksToSave));
}

export function GetStorageListReading(): Book[] | null {
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
