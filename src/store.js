import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { requestRegex } from "./constants/action.types";
import { rootReducer } from "./reducers";

const isAsyncAction = (action) => {
  return (
    requestRegex.test(action.type) &&
    !!action.promise &&
    typeof action.promise.then === "function"
  );
};

const getSuccessType = (action) => {
  return action.type.replace(requestRegex, "_SUCCESS");
};

const getFailureType = (action) => {
  return action.type.replace(requestRegex, "_FAILURE");
};

// TODO: move this to a separate file
const asyncHandler = (store) => (next) => (action) => {
  if (isAsyncAction(action)) {
    // There would be like {type, promise, extra}
    const { type, promise, ...rest } = action;

    // don't forward the promise
    next({ type, ...rest });

    // TODO: need return or not?
    // If using return, we can use const result = dispatch(someAction());
    action.promise
      .then((data) => {
        // return
        next({
          type: getSuccessType(action),
          data,
          ...rest,
        });
      })
      .catch((error) => {
        // return
        next({
          type: getFailureType(action),
          error,
          ...rest,
        });
      });
  } else {
    // return
    next(action);
  }
};

const devStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(asyncHandler))
);

const prodStore = createStore(rootReducer, applyMiddleware(asyncHandler));

// TODO: config for REACT_APP_ENV
export const configuredStore =
  process.env.NODE_ENV === "development" ? devStore : prodStore;
