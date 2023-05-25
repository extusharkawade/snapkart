import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RenderProduct from "../RenderProduct/RenderProduct";
import "./Product.css";
import Api from "../../../Gobal/Api";
function Product(props) {
  const params = useParams();
  const [products, setproducts] = useState([]);
  const [error, setError] = useState(true);
  var api;
  if (params.catId === undefined) {
    api = Api.GET_ALL_PRODUCTS;
  } else {
    api = Api.GET_PRODUCT_BY_CAT_ID.concat(params?.catId);
  }
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
    <>
      {error === false && products.length > 0 ? (
        <div className="product-card" data-testid="products">
          {products.map((prod) => {
            return <RenderProduct prod={prod} />;
          })}
        </div>
      ) : (
        <div> ⚠ No Products in this category</div>
      )}
    </>
  );
}

export default Product;
