import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import About from "./components/About";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Promo from "./components/Promo";
import Admin from "./components/Admin";
import Newsletter from "./components/Newsletter";
import Ring from "./components/Ring";
import EditProduct from "./components/EditProduct";
import NewProduct from "./components/NewProduct";
import Fav from "./components/Fav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation
          bg="light"
          variant="light"
          sticky="top"
          expand="sm"
          collapseOnSelect
        ></Navigation>
      </div>
      <Promo></Promo>

      <Routes>
        <Route path="/products/:category" element={<Products />} />
        <Route path="/products/all/:id" element={<Detail />} />
        <Route path="/admin/edit/:id" element={<EditProduct />} />

        <Route path="/about-us" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Fav />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/new" element={<NewProduct />} />
      </Routes>
      <div>
        <Newsletter></Newsletter>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
