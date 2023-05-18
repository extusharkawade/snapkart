import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  GetProductImage,
  GetProductImageComponent,
} from "../../../Gobal/Images";
import "./ProductDetails.css";

function ProductDetails() {
  var path;
  const params = useParams();
  const prodId = params.product;
  const [products, setproducts] = useState();
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
  path = GetProductImage(products?.image);

  console.log(path);
  return (
    <div className="prod-details">
      {<GetProductImageComponent imageName={path} />}
      <div className="prod-name-desc">
        <div className="prod-name"> {products?.prodName}</div>
        <div className="prod-price">₹{products?.price}</div>
        <p className="prod-desc">{products?.desc}</p>
        <div className="buttons">
          {" "}
          <button type="button" class="btn btn-outline-success">
            Buy now
          </button>
          {"    "}
          {"     "}
          <button type="button" class="btn btn-danger">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
