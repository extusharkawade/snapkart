import React from "react";
import { GetProductImage } from "../../../Gobal/Images";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import "./RenderProduct.css";

function RenderProduct(props) {
  const image = props.prod.image;
  const path = GetProductImage(image);
  console.log("This is path", path);

  return (
    <>
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={path} />
        <Card.Body>
          <Card.Title>{props.prod.prodName}</Card.Title>
          <Card.Text>{props.prod.desc}</Card.Text>
        </Card.Body>
      </Card> */}

      <div className="container">
        <img src={path} height={250} width={300} />
        <div className="details">
          <h5>{props.prod.prodName}</h5>
          <p>{props.prod.desc}</p>
        </div>
      </div>
    </>
  );
}

export default RenderProduct;
