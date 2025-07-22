import { BookOpen, Library, Sparkles, SunMoon } from "lucide-react";
import { darkModeToggle } from "../../lib/darkModeToggle";
import { Link } from "react-router";

export default function Nav() {
  return (
    <header className="fixed  w-full z-20 border-b border-border dark:border-border-dark bg-white/70 dark:bg-black/70 backdrop-blur-xl">
      <div className="container-principal flex justify-between items-center py-3">
        <Link
          to="/"
          className="text-sky-500 flex items-center gap-1">
          <BookOpen className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">Books</h1>
        </Link>

        <aside>
          <button
            onClick={darkModeToggle}
            className="border border-border dark:border-border-dark p-2 rounded-xl hover:bg-border hover:dark:bg-border-dark"
          >
            <SunMoon />
          </button>
        </aside>
      </div>
    </header>
  );
}
