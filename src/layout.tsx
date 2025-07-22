import { Outlet } from "react-router";
import Nav from "./components/headerNav/Nav";

export default function Layout() {
    return (
        <div className="flex flex-col w-full h-screen max-h-screen">
            <Nav />
            <Outlet />
        </div>
    );
}
