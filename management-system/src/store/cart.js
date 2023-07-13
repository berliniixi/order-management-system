import { createSlice } from "@reduxjs/toolkit";

// const initialCartState = {
//   table: localStorage.getItem("table")
//     ? JSON.parse(localStorage.getItem("table"))
//     : null,
//   cartItems: localStorage.getItem("cartItem")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// };

const initialCartState = {
  table: null,
  cartItems: [],
  tableCartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    setTableName(state, action) {
      // state.tables = state.tables.map((table) => {
      //   return {
      //     ...table,
      //     table: {
      //       ...table.table,
      //       tableId: action.payload,
      //     },
      //   };
      // });
      const { tableId } = action.payload;
      // state[tableId] = {
      //   table: tableId,
      //   cartItems: [],
      //   tableCartTotalAmount: 0,
      //}
      state.table = tableId;
    },
    addToCart(state, action) {
      // const itemIndex = state.cartItems.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // if (itemIndex >= 0) {
      //   state.cartItems[itemIndex].cartQuantity += 1;
      //   state.cartItems[itemIndex].productQuantity += 1;
      // } else {
      //   const tempProduct = {
      //     ...action.payload,
      //     itemTotalAmount: action.payload.price,
      //     productQuantity: 1,
      //     cartQuantity: 1,
      //   };
      //   state.cartItems.push(tempProduct);
      // }
      // state.cartTotalQuantity += 1;
      // state.cartTotalAmount += action.payload.price;
      // localStorage.setItem("table", JSON.stringify(state.table));
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // const currTable = state.table.find((table) => table === table);

      const { tableId, item } = action.payload;

      if (state.table === tableId) {
        // state.table = tableId;
        console.log("tableId: ", tableId);
        console.log("table: ", state.table);

        // console.log("item: ", item);

        // const updatedCartState = {
        //   ...action.payload,
        // };

        const updateCartItems = state.cartItems.push(item);

        state = {
          ...action.payload,
          cartItems: updateCartItems,
        };
        // state.cartItems.push(item);
      } else {
        state = {
          ...action.payload,
          cartItems: [],
        };
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
