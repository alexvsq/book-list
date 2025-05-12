import NavMenu from "../components/NavMenu/NavMenu";
import ContentBooks from "../components/ContentBooks/ContentBooks";

function App() {
  return (
    <main className="flex flex-col md:flex-row h-screen w-screen">
      <NavMenu />
      <ContentBooks />
    </main>
  );
}

export default App;
