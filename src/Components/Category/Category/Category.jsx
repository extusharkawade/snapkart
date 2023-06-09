import React from "react";
import { Fashion, GetCategoryImage } from "../../../Gobal/Images";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
// import Product from "../../Product/Product";
import Product from "../../Product/ProductComponent/Product";

function Category(props) {
  const imageName = props.categoryComponent.Image;
  const category = props.categoryComponent.name;
  const catId = props.categoryComponent.id;

  return (
    <div data-testid="single-category">
      <div
        className="card"
        style={{
          height: "10rem",
          border: "none",
        }}
      >
        <NavLink to={`/products/${catId}`}>
          <div data-testid="card">
            <GetCategoryImage imageName={imageName} />
            <div className="card-body">
              <p className="card-text ">{category}</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Category;
