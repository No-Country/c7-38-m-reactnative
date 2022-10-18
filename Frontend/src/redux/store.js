import { configureStore } from "@reduxjs/toolkit";
import trainingReducer from "./slices/Training";
import accountReducer from "./slices/Account";
import singReducer from "./slices/Singup";
import progressReducer from "./slices/Progress";
export default configureStore({
  reducer: {
    Training: trainingReducer,
    Account: accountReducer,
    SingUp: singReducer,
    Progress: progressReducer,
  },
});
