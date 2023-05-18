import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RenderProduct from "./RenderProduct/RenderProduct";
import "./Product.css";
function Product(props) {
  const params = useParams();
  const [products, setproducts] = useState([]);
  const [error, setError] = useState(true);
  const api =
    "https://6464b8bd043c103502c101f4.mockapi.io/Products?catId=".concat(
      params.catId
    );
  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setproducts(res?.data);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, []);

  return (
    <div className="product-card">
      {products.map((prod) => {
        return <RenderProduct prod={prod} />;
      })}
    </div>
  );
}

export default Product;
