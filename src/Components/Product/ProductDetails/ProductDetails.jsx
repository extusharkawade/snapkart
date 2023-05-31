import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  GetProductImage,
  GetProductImageComponent,
} from "../../../Gobal/Images";
import "./ProductDetails.css";
import Api from "../../../Gobal/Api";
import CONSTANTS from "../../../Gobal/Constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetails() {
  const navigate = useNavigate();
  var path;
  const params = useParams();
  const prodId = params.product;
  const [products, setproducts] = useState();
  const [error, seterror] = useState(true);
  const [cart, setcart] = useState([]);
  const [cartBtn, setcartBtn] = useState("");
  const getProductApi = Api.GET_PRODUCT_BY_ID.concat(prodId);
  const getProductsFromCart = Api.GET_CART;
  const postApi = Api.POST_PRODUCT_INTO_CART;
  const userId = 39;

  useEffect(() => {
    axios
      .get(getProductsFromCart)
      .then((res) => {
        setcart(res?.data);
        console.log("I am cartrt", cart);
        cart.filter((ele) => ele.prodId === prodId).length > 0
          ? setcartBtn(CONSTANTS.GO_TO_CART)
          : setcartBtn(CONSTANTS.ADD_TO_CART);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [products]);
  useEffect(() => {
    axios
      .get(getProductApi)
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

  const handleCart = () => {
    if (cartBtn === CONSTANTS.ADD_TO_CART) {
      const data = {
        prodId: prodId,
        quantity: 1,
      };
      axios
        .post("http://localhost:8000/Cart/", data)
        .then((res) => {
          toast.success("Product added to cart!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((error) => {
          toast.error("Carts are sleeping", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
      setcartBtn(CONSTANTS.GO_TO_CART);
    } else {
      navigate("/cart/:${100}");
    }
  };

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
            <button type="button" className="btn btn-outline-success">
              {CONSTANTS.BUY_NOW}
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleCart}
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetails;
