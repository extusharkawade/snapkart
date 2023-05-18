import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const params = useParams();
  const prodId = params.product;
  const [products, setproducts] = useState([]);
  const [error, seterror] = useState(true);
  const api = "https://6464b8bd043c103502c101f4.mockapi.io/Products/".concat(
    prodId
  );

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setproducts(res.data);
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
        seterror(true);
      });
  }, []);

  return <div>{products?.prodName}</div>;
}

export default ProductDetails;
