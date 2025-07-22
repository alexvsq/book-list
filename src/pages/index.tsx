import SideMenu from "../components/SideMenu/SideMenu";
import ContentBooks from "../components/ContentBooks/ContentBooks";

function App() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-5 gap-8 container-principal">
      <SideMenu />
      <ContentBooks />
    </main>
  );
}

export default App;
