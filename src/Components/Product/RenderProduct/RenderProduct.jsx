import React from "react";
import { GetProductImage } from "../../../Gobal/Images";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import "./RenderProduct.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function RenderProduct(props) {
  const image = props.prod.image;
  const id = props.prod.id;
  const path = GetProductImage(image);
  console.log("This is path", path);
  const [isHome, setisHome] = useState(false);
  const homeUrl = "http://localhost:3000/";
  let currentPageUrl;

  useEffect(() => {
    currentPageUrl = window.location.href;
    homeUrl === currentPageUrl ? setisHome(true) : setisHome(false);
  });

  return (
    <NavLink
      to={`/product-details/${id}`}
      style={({ isActive }) => ({
        color: "#545e6f",

        textDecoration: "none",
      })}
    >
      <div data-testid="rendered-product" className="main-container">
        <div className={isHome ? "home-container" : "container"}>
          <img src={path} height={250} width={300} alt={image} />
          <div className="details">
            <h5>{props.prod.prodName}</h5>
            <p
              style={{
                display: isHome ? "none" : "block",
              }}
            >
              {props.prod.desc}
            </p>
            <h4
              style={{
                display: isHome ? "none" : "block",
              }}
            >
              ₹ {props.prod.price}
            </h4>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default RenderProduct;
