import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "@gotitinc/design-system";

import Header from "./components/Header";

import CategoryContainer from "./components/CategoryContainer";
import HomeContainer from "./components/HomeContainer";
import PhotoContainer from "./components/PhotoContainer";

import { AuthContext } from "./context/auth";

import { getUserInfo } from "./utils/apis/user";
import { FETCH_USER_INFO_SUCCESS } from "constants/action.types";
import { removeUserInfo } from "actions/app";
import { getLocalTokens } from "utils/getLocalTokens";

const useAuthTokens = () => {
  const [authTokens, setTokens] = useState(() => getLocalTokens());

  const setAuthTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setTokens(data);
  };

  const hasSignedIn = !!authTokens && authTokens !== "";

  return [hasSignedIn, authTokens, setAuthTokens];
};

function App() {
  const [hasSignedIn, authTokens, setAuthTokens] = useAuthTokens();
  const dispatch = useDispatch();

  useEffect(() => {
    if (authTokens) {
      getUserInfo(authTokens)
        .then((response) => {
          if (response.status === 200) {
            dispatch({ type: FETCH_USER_INFO_SUCCESS, data: response.data });
          } else {
            setAuthTokens("");
          }
        })
        .catch((e) => {
          setAuthTokens("");
        });
    }
  }, [authTokens, dispatch, setAuthTokens]);

  const signOut = () => {
    setAuthTokens("");
    dispatch(removeUserInfo());
  };

  const data = {
    hasSignedIn,
    authTokens,
    signIn: setAuthTokens,
    signOut,
  };

  return (
    <AuthContext.Provider value={data}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/categories/:categoryId/photos"
            exact
            component={PhotoContainer}
          />

          <Redirect
            exact
            from="/categories/:categoryId"
            to="/categories/:categoryId/photos"
          />

          <Route path="/categories" exact component={CategoryContainer} />

          <Route path="/" exact component={HomeContainer} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>

      <ToastContainer autoDismiss={3000} />
    </AuthContext.Provider>
  );
}

export default App;
