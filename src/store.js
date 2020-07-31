import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { requestRegex } from "./constants/action.types";
import { rootReducer } from "./reducers";

const isAsyncAction = (action) => {
  // && typeof action.promise.then === "function"
  // TODO: check then function

  return requestRegex.test(action.type) && !!action.promise;
};

const getPendingType = (action) => {
  return action.type.replace(requestRegex, "_PENDING");
};

const getSuccessType = (action) => {
  return action.type.replace(requestRegex, "_SUCCESS");
};

const getFailureType = (action) => {
  return action.type.replace(requestRegex, "_FAILURE");
};

const asyncHandler = (store) => (next) => (action) => {
  if (isAsyncAction(action)) {
    // There would be like {type, promise, extra}
    const { type, promise, ...rest } = action;

    next({ type: getPendingType(action), ...rest });

    action.promise
      .then((data) => {
        next({
          type: getSuccessType(action),
          data,
          ...rest,
        });
      })
      .catch((error) => {
        next({
          type: getFailureType(action),
          error,
          ...rest,
        });
      });
  } else {
    next(action);
  }
};

const devStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(asyncHandler))
);

const prodStore = createStore(rootReducer, applyMiddleware(asyncHandler));

export const configuredStore =
  process.env.NODE_ENV === "development" ? devStore : prodStore;
