import Carousel from "react-bootstrap/Carousel";
import ProductDetails from "../Product/ProductDetails/ProductDetails";
import { Link } from "react-router-dom";

export const CustomCarousel = () => {
  const prod = "Tushar";
  const clicked = (clickedCarsole) => {
    {
      <ProductDetails product={clickedCarsole} />;
    }
  };

  return (
    <Carousel>
      <Carousel.Item>
        <Link to={`/product-details/${12}`}>
          <img
            className="d-block w-100 h-280px"
            src="AppImages/Carsoul/mobilecarsoule.JPG"
            alt="First slide"
          />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={`/product-details/${8}`}>
          <img
            className="d-block w-100 h-280px"
            src="AppImages/Carsoul/offercarsoule.jpg"
            alt="Second slide"
            onClick={() => {
              console.log("Offer");
            }}
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={`/product-details/${9}`}>
          <img
            className="d-block w-100 h-280px"
            src="AppImages/Carsoul/carsoul.jpg"
            alt="Third slide"
            onClick={() => {
              console.log("Realme");
            }}
          />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};
