import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import app from "./reducer/app";
import user from "./reducer/user";

const rootReducer = combineReducers({
  user,
  app,
});

// Creating store and apply thunk redux middleware
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
