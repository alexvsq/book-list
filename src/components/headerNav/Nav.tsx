import { BookOpen, Library, Sparkles, SunMoon } from "lucide-react";
import { darkModeToggle } from "../../lib/darkModeToggle";
import { Link } from "react-router";
import { useReadingListStore } from "../../store/storeReadingList";

export default function Nav() {
  const { readingList, setShowSheet } = useReadingListStore()

  return (
    <header className="fixed  w-full z-20 border-b border-border dark:border-border-dark bg-white/70 dark:bg-black/70 backdrop-blur-xl">
      <div className="container-principal flex justify-between items-center py-3">
        <Link
          to="/"
          className="text-sky-500 flex items-center gap-1">
          <BookOpen className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">Books</h1>
        </Link>

        <aside className="flex gap-4">

          <button
            onClick={() => setShowSheet(true)}
            className="border border-border dark:border-border-dark p-2 rounded-xl hover:bg-border hover:dark:bg-border-dark flex items-center gap-3 cursor-pointer"
          >
            <Library />
            <p>My List</p>
            <div className="bg-sky-500 px-2 rounded-full text-white">
              <p>{readingList.length}</p>
            </div>
          </button>

          <button
            onClick={darkModeToggle}
            className="border border-border dark:border-border-dark p-2 rounded-xl hover:bg-border hover:dark:bg-border-dark cursor-pointer"
          >
            <SunMoon />
          </button>
        </aside>
      </div>
    </header>
  );
}
