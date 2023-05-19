import React from "react";
import Header from "../Header/Header";
import Categories from "../Category/Categories/Categories";
import { CustomCarousel } from "../Carousel/CustomCarousel";

function Home() {
  return (
    <>
      <Categories />
      <CustomCarousel />
    </>
  );
}

export default Home;
