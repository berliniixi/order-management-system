import React from "react";

function OrderedProducts({ products }) {
  return (
    <>
      {products.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.title}</span>
            <span>{item.desc}</span>
            <span>{item.price}</span>
          </li>
        );
      })}
    </>
  );
}

export default OrderedProducts;
