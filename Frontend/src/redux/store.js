import { configureStore } from "@reduxjs/toolkit";
import trainingReducer from "./slices/Training";
import accountReducer from "./slices/Account";

export default configureStore({
  reducer: {
    Training: trainingReducer,
    Account: accountReducer,
  },
});
