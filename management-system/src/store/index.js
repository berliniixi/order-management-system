import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import categoryReducer from "./category";
import cartReducer from "./cart";
import testReducer from "./test";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    category: categoryReducer,
    // cart: cartReducer,
    test: testReducer,
  },
});

export default store;
