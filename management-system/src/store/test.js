import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
    tableTotalAmount: localStorage.getItem("TableTotalAmount")
      ? JSON.parse(localStorage.getItem("TableTotalAmount"))
      : 0,
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

      const totalAmount = localStorage.getItem(
        `TableTotalAmount ${action.payload.id}`
      );

      const parseTotalAmount = JSON.parse(totalAmount);

      state.table = {
        ...state.table,
        tableName: action.payload.name,
        tableID: action.payload.id,
        hasOrdered: parseData ? true : false,
        tableCartItems: {
          [initialTableOrderID]: [],
          ...parseData,
        },
        tableTotalAmount: parseTotalAmount,
      };
    },

    addItemToTable(state, action) {
      const product = action.payload;

      const productPrice = action.payload.price;
      const updatedTableTotalAmount = (state.table.tableTotalAmount +=
        productPrice);

      console.log("updatedTableTotalAmount", updatedTableTotalAmount);

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
        tableTotalAmount: updatedTableTotalAmount,
      };

      localStorage.setItem(
        `TableTotalAmount ${state.table.tableID}`,
        JSON.stringify(updatedTableTotalAmount)
      );

      localStorage.setItem(
        `tableCartItems ${state.table.tableID}`,
        JSON.stringify(updatedTableCartItems)
      );

      toast.success(`${product.title} added to ${state.table.tableName}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },

    deleteProduct(state, action) {
      const productToRemoveID = action.payload;

      const updatedTableCartItems = {
        ...state.table.tableCartItems,
        [initialTableOrderID]: state.table.tableCartItems[
          initialTableOrderID
        ].filter((product) => product.id !== productToRemoveID.id),
      };

      const updatedTableTotalAmount = (state.table.tableTotalAmount -=
        productToRemoveID.price);

      state.table = {
        ...state.table,
        tableCartItems: updatedTableCartItems,
        tableTotalAmount: updatedTableTotalAmount,
      };

      if (updatedTableTotalAmount === 0) {
        state.table = {
          ...state.table,
          hasOrdered: false,
          tableCartItems: updatedTableCartItems,
          tableTotalAmount: updatedTableTotalAmount,
        };

        localStorage.removeItem(`tableCartItems ${state.table.tableID}`);
        localStorage.removeItem(`TableTotalAmount ${state.table.tableID}`);
      }

      localStorage.setItem(
        `tableCartItems ${state.table.tableID}`,
        JSON.stringify(updatedTableCartItems)
      );

      localStorage.setItem(
        `TableTotalAmount ${state.table.tableID}`,
        JSON.stringify(updatedTableTotalAmount)
      );

      console.log("updatedTableCartItems", updatedTableCartItems);
      console.log("productToRemoveID", productToRemoveID);

      toast.error(
        `${productToRemoveID.title} removed from ${state.table.tableName}`,
        {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    },
  },
});

export const testActions = testSlice.actions;

export default testSlice.reducer;
