import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "@gotitinc/design-system";

import Header from "./components/Header";

import CategoryContainer from "./components/CategoryContainer";
import HomeContainer from "./components/HomeContainer";
import PhotoContainer from "./components/PhotoContainer";

import { AuthContext } from "./context/auth";

import { getUserProfile } from "./utils/apis/user";

const useAuthTokens = () => {
  const [authTokens, setTokens] = useState(() => {
    try {
      const serializedTokens = JSON.parse(localStorage.getItem("tokens"));
      return serializedTokens ? serializedTokens : null;
    } catch (e) {
      localStorage.removeItem("tokens");
      return null;
    }
  });

  const setAuthTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setTokens(data);
  };

  const hasSignedIn = !!authTokens && authTokens !== "";

  return [hasSignedIn, authTokens, setAuthTokens];
};

const useProfile = () => {
  const [profile, setProfile] = useState({});
  return [profile, setProfile];
};

function App() {
  const [hasSignedIn, authTokens, setAuthTokens] = useAuthTokens();
  const [profile, setProfile] = useProfile();

  useEffect(() => {
    if (authTokens !== null && !profile.id) {
      getUserProfile(authTokens)
        .then((response) => {
          if (response.status === 200) {
            setProfile(response.data);
          } else {
            setAuthTokens("");
          }
        })
        .catch((e) => {
          setAuthTokens("");
        });
    }
  }, [authTokens, profile, setAuthTokens, setProfile]);

  const signOut = () => {
    setAuthTokens("");
    setProfile("");
  };

  const data = {
    hasSignedIn,
    authTokens,
    profile,
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
