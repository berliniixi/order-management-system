import { createSlice } from "@reduxjs/toolkit";

let initialTableOrderID = null;

const initialTestState = {
  table: {
    tableName: null,
    tableID: null,
    hasOrdered: false,
    tableCartItems: {
      tableOrderID: localStorage.getItem("tableCartItems")
        ? JSON.parse(localStorage.getItem("tableCartItems"))
        : [],
    },
    tableTotalAmount: 0,
  },
};

const testSlice = createSlice({
  name: "test",
  initialState: initialTestState,
  reducers: {
    setTable(state, action) {
      const newTableOrderID = action.payload.id;

      initialTableOrderID = newTableOrderID;

      const prevCartItems = localStorage.getItem(
        `tableCartItems ${action.payload.id}`
      );
      const parseData = JSON.parse(prevCartItems);

      state.table = {
        ...state.table,
        tableName: action.payload.name,
        tableID: action.payload.id,
        hasOrdered: parseData ? true : false,
        tableCartItems: {
          [initialTableOrderID]: [],
          ...parseData,
        },
      };
    },

    addItemToTable: (state, action) => {
      const product = action.payload;

      console.log("product", product);
      const updatedTableCartItems = {
        ...state.table.tableCartItems,
        [initialTableOrderID]: [
          ...state.table.tableCartItems[initialTableOrderID],
          product,
        ],
      };

      state.table = {
        ...state.table,
        hasOrdered: true,
        tableCartItems: updatedTableCartItems,
      };

      localStorage.setItem(
        `tableCartItems ${state.table.tableID}`,
        JSON.stringify(updatedTableCartItems)
      );
    },
  },
});

export const testActions = testSlice.actions;

export default testSlice.reducer;
