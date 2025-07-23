import { Outlet } from "react-router";
import Nav from "./components/headerNav/Nav";
import ReadingList from './components/readingList/readingList'

export default function Layout() {
    return (
        <div className="flex flex-col w-full h-screen max-h-screen">
            <Nav />
            <Outlet />
            <ReadingList />
        </div>
    );
}
