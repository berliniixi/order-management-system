import React from "react";

import classes from "./Table.module.css";

function Table({ onClick, tableNumber }) {
  // const tableClasses = hasOrdered ? classes.orderedClass : classes.table;

  return (
    <div className={classes.container}>
      <div className={classes.table}>
        <span>
          <button onClick={onClick}>{tableNumber}</button>
        </span>
      </div>
    </div>
  );
}

export default Table;
