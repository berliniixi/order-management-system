import React from "react";

import classes from "./Table.module.css";

function Table(props) {
  return (
    <div className={classes.container}>
      <div className={classes.table}>
        <span>
          <button onClick={props.onClick}>{props.tableNumber}</button>
        </span>
      </div>
    </div>
  );
}

export default Table;
