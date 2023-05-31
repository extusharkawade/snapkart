import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { GetProductImage, GetProductImageForCart } from "../../../Gobal/Images";
import SelectQuantity from "../../Product/ProductDetails/ProductDetailsComponents/SelectQuantity";
import { action, observable } from "mobx";
import QuantityStore from "../../../Store2/QuantityStore";
import { RootStore, useStore } from "../../../Store2/RootStore/RootStore";
import axios from "axios";
import Api from "../../../Gobal/Api";
import "./CartProduct.css";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import CONSTANTS from "../../../Gobal/Constant";

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
  const getApi = Api.GET_PRODUCT_BY_ID.concat(props.product.prodId);
  const deleteApi = Api.DELETE_PRODUCT_FROM_CART.concat(props.product.id);
  const [removeBtn, setremoveBtn] = useState("REMOVE");
  const [path, setpath] = useState("");
  const [quantity, setQuantity] = useState(props.product.quantity);
  const [price, setprice] = useState(0);
  const [prodName, setprodName] = useState("");

  let quantityStore;
  quantityStore = new QuantityStore(price, quantity);

  quantityStore.calculatePrice();

  const getProductDetails = () => {
    axios
      .get(getApi)
      .then((res) => {
        const product = res.data;
        setpath(GetProductImage(product.image));
        setprice(product.price);
        setprodName(product.prodName);
        console.log("This is data", path);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const deleteProduct = () => {
    console.log("Removing product", deleteApi);
    axios
      .delete(deleteApi)
      .then((res) => {
        console.log("Product removed from cart");
        delete props.rawCart[props.index];
        toast.error(CONSTANTS.ITEM_REMOVED_FROM_CART, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        props.setRawCart([...props.rawCart]);
      })
      .catch((error) => {
        console.log("Error while deleting product", error);
      });
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <div className="main-class">
        <div className="img-class">
          <div>{<GetProductImageForCart imageName={path} />}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <div
            style={{ marginTop: "-80px", fontWeight: "bold", width: "100%" }}
          >
            {prodName}
          </div>
          <div style={{}}> {props.product.price}</div>
          {quantity === 1 ? (
            <h3> ₹ {price}</h3>
          ) : (
            <h3> ₹ {quantityStore.price.get()}</h3>
          )}
        </div>
      </div>
      <div className="select">
        <div>
          <SelectQuantity
            className="select-quantity"
            setQuantity={setQuantity}
            quantity={quantity}
          />
        </div>
        <div className="removeBtn" onClick={deleteProduct}>
          {removeBtn}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
});

export default CartProduct;
