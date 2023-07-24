import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import categoryReducer from "./category";
import testReducer from "./test";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    category: categoryReducer,
    test: testReducer,
  },
});

export default store;
