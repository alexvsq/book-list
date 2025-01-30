import NavMenu from './modules/NavMenu'
import ContentBooks from './modules/ContentBooks'
import BookSelected from './components/BookSelected'

function App() {


  return (
    <main className="grid  md:grid-cols-12  h-screen w-screen">

      <div className=" md:col-span-2   ">
        <NavMenu />
      </div>

      <div className=" md:col-span-10 overflow-y-auto">
        <ContentBooks />
      </div>

      <BookSelected />
    </main>
  )
}

export default App
