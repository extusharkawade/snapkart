import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { GetProductImage, GetProductImageForCart } from "../../../Gobal/Images";
import SelectQuantity from "../../Product/ProductDetails/ProductDetailsComponents/SelectQuantity";
import { action, observable } from "mobx";
import QuantityStore from "../../../Store2/QuantityStore";
import { RootStore, useStore } from "../../../Store2/RootStore/RootStore";

// class QuantityStore {
//   quantity = observable.box(1);
//   price = observable.box();

//   constructor(price, quantity) {
//     console.log("Object created");
//     this.price.set(price);
//     this.quantity.set(quantity);
//   }

//   calculatePrice = action(() => {
//     this.price.set(this.quantity.get() * this.price.get());
//     console.log("Called calculatePrice", this.price.get());
//   });
// }

const CartProduct = observer((props) => {
  // const {
  //   rootStore: { countStore },
  // } = useStore();

  const path = GetProductImage(props.product.image);
  const [quantity, setQuantity] = useState(1);
  const price = props.product.price;
  let quantityStore;
  quantityStore = new QuantityStore(price, quantity);

  quantityStore.calculatePrice();

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "2rem",
          alignItems: "center",
          gap: "2rem",
          width: "70%",
          marginLeft: "3rem",
          borderBottom: "1px solid",
        }}
      >
        {<GetProductImageForCart imageName={path} />}
        <div>
          <div style={{ fontWeight: "bold", width: "100%" }}>
            {props.product.prodName}
          </div>
          <div style={{}}> {props.product.price}</div>

          {<SelectQuantity setQuantity={setQuantity} />}
        </div>
        {quantity === 1 ? (
          <h3>{price}</h3>
        ) : (
          <h3> {quantityStore.price.get()}</h3>
        )}
      </div>
    </>
  );
});

export default CartProduct;
