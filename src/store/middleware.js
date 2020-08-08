import { successPostfix, failurePostfix } from "../constants/action.types";

const isAsyncAction = (action) =>
  !!action.promise && typeof action.promise.then === "function";

const getSuccessActionType = (action) => {
  return action.type + successPostfix;
};

const getFailureActionType = (action) => {
  return action.type + failurePostfix;
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
      .then((response) => {
        const status = response.status.toString();
        if (status.match(/^2/)) {
          // return
          next({
            type: getSuccessActionType(action),
            data: response.data,
            ...rest,
          });
        } else if (status.match(/^4/)) {
          // return
          next({
            type: getFailureActionType(action),
            data: response.data,
            ...rest,
          });
        }
      })
      .catch((error) => {});
  } else {
    // return
    next(action);
  }
};

export { asyncHandler };
