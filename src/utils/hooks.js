import { useRef, useEffect, useReducer, useContext } from "react";
import { useLocation } from "react-router-dom";
import merge from "lodash/merge";

import { AuthContext } from "context/auth";

const useHashParams = () => {
  const hashParams = new URLSearchParams(useLocation().hash.substring(1));

  const getPage = () => {
    const page = hashParams.get("page");

    // page would never be undefined
    if (page === null) {
      // #action=signin
      return 1;
    } else if (page === "") {
      // #action=signin&page
      return 1;
    } else {
      // #action=signin&page=34
      // #action=signin&page=asdhsd

      return parseInt(page);
    }
  };

  const getAction = () => {
    const action = hashParams.get("action");

    // action will never be undefined
    if (action === null || action === "") {
      // #page=3&....
      // #action=signin&page

      return null;
    } else {
      return action;
    }
  };

  return { getPage, getAction };
};

const useSetState = (initialState) => {
  return useReducer(
    (state, newState) => merge({}, state, newState),
    initialState
  );
};

const useSafeSetState = (initialState) => {
  const [state, setState] = useSetState(initialState);

  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => (mountedRef.current = false);
  }, []);
  const safeSetState = (...args) => mountedRef.current && setState(...args);

  return [state, safeSetState];
};

const useDebounce = (func, delay) => {
  let inDebounce = useRef(null);
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce.current);
    inDebounce.current = setTimeout(() => func.apply(context, args), delay);
  };
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useHashParams, useSafeSetState, useDebounce, useAuthContext };
