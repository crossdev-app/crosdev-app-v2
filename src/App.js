import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Product from "./pages/Product";
import ProductLP from "./pages/ProductLP";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='product'
            element={<Product />}>
            <Route
              index
              element={<Product />}
            />
            <Route
              path='landing-page'
              element={<ProductLP />}
            />
          </Route>
          <Route
            path='*'
            element={<Notfound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
