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
    dispatch(testActions.addItemToTable(item));
  };

  return (
    <>
      {selectedCategory ? (
        selectedCategory.map((item) => {
          // check if this functionality of keeping track the time after an item gets into the OrderedProducts
          //by doing it on the component is more correct of doing it in the Redux

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
