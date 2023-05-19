import React from "react";
import { GetProductImage } from "../../../Gobal/Images";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import "./RenderProduct.css";
import { NavLink } from "react-router-dom";

function RenderProduct(props) {
  const image = props.prod.image;
  const id = props.prod.id;
  const path = GetProductImage(image);
  console.log("This is path", path);

  return (
    <NavLink to={`/product-details/${id}`}>
      <div data-testid="rendered-product">
        <div className="container">
          <img src={path} height={250} width={300} alt={image} />
          <div className="details">
            <h5>{props.prod.prodName}</h5>
            <p>{props.prod.desc}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default RenderProduct;
