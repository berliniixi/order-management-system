import React from "react";

import { FaEuroSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { testActions } from "../store/test";

function OrderedProducts({ products }) {
  const dispatch = useDispatch();
  const productItems = Object.values(products);

  const deleteProductHandler = (productID) => {
    dispatch(testActions.deleteProduct(productID));
  };

  return (
    <>
      {productItems.map((product) => (
        <React.Fragment key={product[0]}>
          {product.map((productDetails) => {
            const randomID = Math.random();
            return (
              <li key={productDetails.id}>
                <span>{productDetails.title}</span>
                <span>
                  <FaEuroSign /> {`${productDetails.price}`}
                </span>
                <span>
                  <button onClick={() => deleteProductHandler(productDetails)}>
                    X
                  </button>
                </span>
              </li>
            );
          })}
        </React.Fragment>
      ))}
    </>
  );
}

export default OrderedProducts;
