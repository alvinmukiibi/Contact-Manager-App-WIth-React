import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

//the key used here i.e. contact is used to access the props
const rootReducer = combineReducers({
  contact: contactReducer
});

export default rootReducer;
