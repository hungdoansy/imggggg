import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "../reducers";
import { asyncHandler } from "./middleware";

const createConfiguredStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(asyncHandler))
  );
};

export { createConfiguredStore };
