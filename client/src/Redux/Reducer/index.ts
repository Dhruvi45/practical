import { combineReducers } from "redux";
import { UserReducer } from "./auth";

const newRootReducer = combineReducers({
  UserReducer,
});

export { newRootReducer as allReducer };
