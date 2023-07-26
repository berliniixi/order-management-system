import React from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { testActions } from "../store/test";

function ProductList() {
  const dispatch = useDispatch();

  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  const addToCartHandler = (item) => {
    const randomID = Math.random();
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    item = {
      ...item,
      id: `${randomID}${item.id}`,
      time: `${hours}:${minutes}:${seconds}`,
    };
    dispatch(testActions.addItemToTable(item));
  };

  return (
    <>
      {selectedCategory ? (
        selectedCategory.map((item) => {
          console.log(item.time);
          return (
            <li key={item.id}>
              <Product
                title={item.title}
                desc={item.desc}
                image={item.image}
                itemPrice={item.price}
                onAdd={() => addToCartHandler(item)}
              />
            </li>
          );
        })
      ) : (
        <p style={{ textAlign: "center" }}>Select Category</p>
      )}
    </>
  );
}

export default ProductList;
