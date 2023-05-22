import React, { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../Gobal/Api";
import CartProduct from "./CartProduct/CartProduct";

function Cart() {
  const [cart, setcart] = useState([]);
  const [error, seterror] = useState();

  useEffect(() => {
    axios
      .get(Api.GET_CART)
      .then((res) => {
        setcart(res?.data);
      })
      .catch((error) => {
        seterror(error);
      });
  }, []);

  console.log(cart.Products);
  return cart?.Products?.map((product) => {
    return <CartProduct product={product} />;
  });
}

export default Cart;
