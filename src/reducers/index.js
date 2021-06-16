import { combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import isLoggedReducer from "./reducers/isLogged";

const allReducers = combineReducers({
  counterReducer: counterReducer,
  isLoggedReducer: isLoggedReducer,
});

export default allReducers;
