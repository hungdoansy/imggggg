import { useState, useRef, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";

const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

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

      // TODO: handle page is NaN
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
    (state, newState) => ({ ...state, ...newState }),
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

export { useHashParams, useQueryParams, useSafeSetState };
