import React from "react";
import { Fashion, GetCategoryImage } from "../../../Gobal/Images";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Product from "../../Product/Product";

function Category(props) {
  const imageName = props.categoryComponent.Image;
  const category = props.categoryComponent.name;
  const catId = props.categoryComponent.id;

  return (
    <div>
      <div
        className="card"
        style={{
          height: "10rem",
          border: "none",
        }}
      >
        <NavLink to={`/products/${catId}`}>
          <GetCategoryImage imageName={imageName} />
          <div className="card-body">
            <p className="card-text ">{category}</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Category;
