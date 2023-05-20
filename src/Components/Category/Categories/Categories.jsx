import React, { useEffect, useState } from "react";
import style from "./Categories.css";
import axios from "axios";
import Category from "../Category/Category";
import CONSTANTS from "../../../Gobal/Constant";
import Api from "../../../Gobal/Api";
function Categories() {
  const [category, setcategory] = useState([]);
  const [error, seterror] = useState(false);
  useEffect(() => {
    axios
      .get(Api.GET_CATEGORIES)
      .then((res) => {
        setcategory(res?.data);
      })
      .catch((err) => {
        console.log(err);
        seterror(true);
      });
  }, []);

  return (
    <div className="categories" data-testid="categories">
      {!error ? (
        category.map((cat) => {
          return <Category categoryComponent={cat} />;
        })
      ) : (
        <div>{CONSTANTS.ERROR_MESSAGE}</div>
      )}
    </div>
  );
}

export default Categories;
