import { createSlice } from "@reduxjs/toolkit";

let initialTableOrderID = null;

const initialTestState = {
  table: {
    tableName: null,
    tableID: null,
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

      const prevCartItems = localStorage.getItem("tableCartItems")
        ? JSON.parse(localStorage.getItem("tableCartItems"))
        : [];

      state.table = {
        ...state.table,
        tableName: action.payload.name,
        tableID: action.payload.id,
        tableCartItems: {
          [initialTableOrderID]: prevCartItems,
        },
      };
    },
    addItemToTable: (state, action) => {
      const prevCartItems = localStorage.getItem("tableCartItems")
        ? JSON.parse(localStorage.getItem("tableCartItems"))
        : [];

      const updatedTableCartItems = {
        ...state.table.tableCartItems,
        [initialTableOrderID]: [
          ...state.table.tableCartItems[initialTableOrderID],
          action.payload,
        ],
      };

      state.table = {
        ...state.table,
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
