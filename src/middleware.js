import { requestRegex } from "./constants/action.types";

const isAsyncAction = (action) =>
  requestRegex.test(action.type) &&
  !!action.promise &&
  typeof action.promise.then === "function";

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

export { asyncHandler };
