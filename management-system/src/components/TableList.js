import React from "react";
import Table from "./Table";

import classes from "./TableList.module.css";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modal";
import { DUMMY_TABLES } from "../Data/tables";

//testing
import { testActions } from "../store/test";
//
function TableList() {
  const dispatch = useDispatch();

  const showTableNumberHandler = (tableId) => {
    dispatch(modalActions.toggle());
    dispatch(testActions.setTable(tableId));
  };

  return (
    <div className={classes.tables}>
      <ul>
        {DUMMY_TABLES.map((table) => {
          return (
            <li key={table.id}>
              <Table
                tableNumber={table.name}
                onClick={() => showTableNumberHandler(table)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TableList;
