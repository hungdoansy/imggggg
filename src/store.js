import { createStore, applyMiddleware } from "redux";
import { requestRegex, pendingRegex } from "./constants/action.types";
import { rootReducer } from "./reducers";

const isAsyncAction = (action) => {
  return (
    requestRegex.test(action.type) &&
    action.promise &&
    typeof action.promise.then === "function"
  );
};

const getPendingType = (action) => {
  return action.type.replace(requestRegex, "_PENDING");
};

const getSuccessType = (action) => {
  return action.type.replace(pendingRegex, "_SUCCESS");
};

const getFailureType = (action) => {
  return action.type.replace(pendingRegex, "_FAILURE");
};

const asyncHandler = (store) => (next) => (action) => {
  if (isAsyncAction(action)) {
    next({ type: getPendingType(action) });

    action.promise
      .then((data) => {
        next({
          type: getSuccessType(action),
          data,
        });
      })
      .catch((error) => {
        next({
          type: getFailureType(action),
          error,
        });
      });
  } else {
    next(action);
  }
};

export const configuredStore = createStore(
  rootReducer,
  applyMiddleware(asyncHandler)
);
