import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  GetProductImage,
  GetProductImageComponent,
} from "../../../Gobal/Images";
import "./ProductDetails.css";
import Api from "../../../Gobal/Api";
import CONSTANTS from "../../../Gobal/Constant";
import SelectQuantity from "./ProductDetailsComponents/SelectQuantity";

function ProductDetails() {
  var path;
  const params = useParams();
  const prodId = params.product;
  const [products, setproducts] = useState();
  const [error, seterror] = useState(true);
  const api = Api.GET_PRODUCT_BY_ID.concat(prodId);

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setproducts(res.data);
        console.log(res?.data);
        seterror(false);
      })
      .catch((err) => {
        console.log(err);
        seterror(true);
      });
  }, []);
  path = GetProductImage(products?.image);

  console.log(path);
  return error ? (
    <div>⚠ Something went wrong</div>
  ) : (
    <div className="prod-details" data-testid="prod-details">
      {<GetProductImageComponent imageName={path} />}
      <div className="prod-name-desc">
        <div className="prod-name"> {products?.prodName}</div>
        <div className="prod-price">₹{products?.price}</div>

        <p className="prod-desc">{products?.desc}</p>
        <div className="buttons">
          <div>
            <button type="button" class="btn btn-outline-success">
              {CONSTANTS.BUY_NOW}
            </button>
          </div>
          <div>
            <button type="button" class="btn btn-danger">
              {CONSTANTS.ADD_TO_CART}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
