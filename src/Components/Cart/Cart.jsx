import React, { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../Gobal/Api";
import CartProduct from "./CartProduct/CartProduct";

function Cart() {
  const [rawCart, setRawCart] = useState([]);
  const [error, seterror] = useState(true);

  useEffect(() => {
    axios
      .get(Api.GET_CART)
      .then((res) => {
        setRawCart(res?.data);
        seterror(false);
      })
      .catch((error) => {
        seterror(true);
      });
  }, [rawCart.product]);

  console.log("This is cart", rawCart);
  return !error ? (
    rawCart?.map((product, index) => {
      if (product !== undefined)
        return (
          <div data-testid="cart-component">
            <CartProduct
              key={index}
              index={index}
              product={product}
              rawCart={rawCart}
              setRawCart={setRawCart}
            />
          </div>
        );
    })
  ) : (
    <div data-testid="error-page">Error Page</div>
  );
}

export default Cart;
