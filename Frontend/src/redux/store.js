import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home";
import trainingReducer from "./slices/Training";
import accountReducer from "./slices/Account";

export default configureStore({
  reducer: {
    name: homeReducer,
    weight: homeReducer,
    idealWeight: homeReducer,
    training: homeReducer,
    Training: trainingReducer,
    Account: accountReducer,
  },
});
