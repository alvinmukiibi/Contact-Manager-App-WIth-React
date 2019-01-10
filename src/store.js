import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;

//after creating this file, you import it into the app.js
