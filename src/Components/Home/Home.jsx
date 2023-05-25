import React from "react";
import Header from "../Header/Header";
import Categories from "../Category/Categories/Categories";
import { CustomCarousel } from "../Carousel/CustomCarousel";
import { NavLink } from "react-router-dom";
import Product from "../Product/ProductComponent/Product";
import "../Product/ProductComponent/Product.css";
import "./Home.css";

function Home() {
  return (
    <>
      <Categories />
      <CustomCarousel />
      <div className="product-card" style={{ marginTop: "20px" }}>
        <Product className="product" catId={1} />
      </div>
    </>
  );
}

export default Home;
