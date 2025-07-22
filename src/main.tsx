import ReactDOM from "react-dom/client";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout"
import Index from "./pages/index";
import BookView from './pages/bookView'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/book/:bookSelected" element={<BookView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
