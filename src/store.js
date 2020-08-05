import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducers";
import { asyncHandler } from "./middleware";

const devStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(asyncHandler))
);

const prodStore = createStore(rootReducer, applyMiddleware(asyncHandler));

// TODO: config for REACT_APP_ENV
export const configuredStore =
  process.env.NODE_ENV === "development" ? devStore : prodStore;
