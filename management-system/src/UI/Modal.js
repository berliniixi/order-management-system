import React from "react";
import classes from "./Modal.module.css";
import { FaEuroSign } from "react-icons/fa";

function Modal(props) {
  return (
    <div className={classes.content}>
      <div className={classes.menu}>
        <div className={classes["menu-header"]}>
          <h1>Menu</h1>
        </div>
        <div className={classes["sub-nav"]}>{props.nav}</div>
        <div className={classes.products}>
          <ul>{props.children}</ul>
        </div>
        <div className={classes.actions}>
          <div className={classes.cancel}>
            <button onClick={props.onCancel}>Cancel</button>
          </div>
          <div className={classes["get-bill"]}>
            <button>Get Bill</button>
          </div>
        </div>
      </div>
      <div className={classes["current-table"]}>
        <div className={classes["table-header"]}>
          <h1>{props.table}</h1>
        </div>
        <div className={classes["ordered-products"]}>
          <ul>{props.orderedProducts}</ul>
        </div>
        <div className={classes["table-total"]}>
          <span>
            <p>Total</p>
          </span>
          <span>
            <FaEuroSign />
            <p>{props.total}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
