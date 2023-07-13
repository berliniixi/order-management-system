import React from "react";
import { useDispatch } from "react-redux";
import { categoryActions } from "../store/category";
import classes from "./SubNav.module.css";
import { PRODUCTS } from "../Data/products";

function SubNav() {
  const dispatch = useDispatch();

  const selectedCategoryHandler = (category) => {
    dispatch(categoryActions.setSelectedCategory(category));
  };

  return (
    <>
      {PRODUCTS[0].categories.map((item) => {
        return (
          <li className={classes["product-list"]} key={item.category}>
            <button onClick={() => selectedCategoryHandler(item.items)}>
              {item.category}
            </button>
          </li>
        );
      })}
    </>
  );
}

export default SubNav;
