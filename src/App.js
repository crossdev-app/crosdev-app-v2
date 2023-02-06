import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Product from "./pages/Product";
import ProductLP from "./pages/ProductLP";
import ProductCP from "./pages/ProductCP";
import ProductERP from "./pages/ProductERP";
import Users from "./pages/Users";
import Login from "./pages/Login";

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
            path='users'
            element={<Users />}
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
            <Route
              path='company-profile'
              element={<ProductCP />}
            />
            <Route
              path='erp'
              element={<ProductERP />}
            />
          </Route>
          <Route
            path='*'
            element={<Notfound />}
          />
        </Route>
        <Route
          path='/login'
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}
