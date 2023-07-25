import React from "react";
import classes from "./Product.module.css";

import { FaEuroSign } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";

function Product({ title, desc, image, itemPrice, onAdd }) {
  const price = `${itemPrice.toFixed(2)}`;

  return (
    <div className={classes["product-content"]}>
      <div className={classes["product-title"]}>
        <h3>{title}</h3>
      </div>
      <div className={classes["product-info"]}>
        <div className={classes["product-desc"]}>
          <p>{desc}</p>
        </div>
        <div className={classes["product-image"]}>
          <img src={image} alt="Product" />
        </div>
      </div>
      <div className={classes["product-price"]}>
        <label>
          <span>
            <FaEuroSign />
          </span>
          <span>
            <p>{price}</p>
          </span>
        </label>
        <button onClick={onAdd}>
          <span>
            <MdShoppingCartCheckout size={25} />
          </span>
        </button>
        <hr />
      </div>
    </div>
  );
}

export default Product;
