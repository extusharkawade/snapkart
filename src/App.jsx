import "./App.css";
import { CustomCarousel } from "./Components/Carousel/CustomCarousel";
import Categories from "./Components/Category/Categories";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Product from "./Components/Product/Product";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Product/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/:catId" element={<Product />} />
          <Route
            path="/product-details/:product"
            element={<ProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
