import { SUCCESS_POSTFIX, FAILURE_POSTFIX } from "constants/action.types";

const isAsyncAction = (action) =>
  !!action.promise && typeof action.promise.then === "function";

const getSuccessActionType = (action) => {
  return action.type + SUCCESS_POSTFIX;
};

const getFailureActionType = (action) => {
  return action.type + FAILURE_POSTFIX;
};

const asyncHandler = (store) => (next) => (action) => {
  if (isAsyncAction(action)) {
    // There would be like {type, promise, extra}
    const { type, promise, ...rest } = action;

    // don't forward the promise
    next({ type, ...rest });

    action.promise
      .then((response) => {
        const status = response.status.toString();
        if (status.match(/^2/)) {
          next({
            type: getSuccessActionType(action),
            data: response.data,
            ...rest,
          });
        } else if (status.match(/^4/)) {
          next({
            type: getFailureActionType(action),
            data: response.data,
            ...rest,
          });
        }
      })
      .catch((error) => {});
  } else {
    next(action);
  }
};

export { asyncHandler };
