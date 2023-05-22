import "./App.css";
import { CustomCarousel } from "./Components/Carousel/CustomCarousel";
import Categories from "./Components/Category/Categories/Categories";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Product from "./Components/Product/Product";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Product/ProductDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/:catId" element={<Product />} />
          <Route
            path="/product-details/:product"
            element={<ProductDetails />}
          />
          <Route path="/cart/:id" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
