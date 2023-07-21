import React from "react";

import { FaEuroSign } from "react-icons/fa";

function OrderedProducts({ products, onDelete }) {
  const productItems = Object.values(products);

  return (
    <>
      {productItems.map((product) => (
        <React.Fragment key={product[0]}>
          {product.map((productDetails) => {
            return (
              <li key={productDetails.id}>
                <span>{productDetails.title}</span>

                <span>
                  <FaEuroSign /> {`${productDetails.price}`}
                </span>
                <span>
                  <button onClick={onDelete}>X</button>
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
