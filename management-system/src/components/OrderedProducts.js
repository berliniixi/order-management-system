import React from "react";

function OrderedProducts({ products }) {
  const productItems = Object.values(products);

  console.log("productItems: ", productItems);
  return (
    <>
      {productItems.map((product) => (
        <React.Fragment key={product[0]}>
          {product.map((productDetails) => {
            return (
              <li key={productDetails.id}>
                <span>{productDetails.title}</span>
                <span>{`$${productDetails.price}`}</span>
              </li>
            );
          })}
        </React.Fragment>
      ))}
    </>
  );
}

export default OrderedProducts;
