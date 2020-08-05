import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "@gotitinc/design-system";

import { Header } from "./components/Header";

import { CategoryContainer } from "./components/CategoryContainer";
import { HomeContainer } from "./components/HomeContainer";
import { PhotoContainer } from "./components/PhotoContainer";

import { AuthContext } from "./context/auth";
import { ProfileContext } from "./context/profile";

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
  const [profile, setProfile] = useState(() => {
    try {
      const serializedProfile = JSON.parse(localStorage.getItem("profile"));

      return serializedProfile ? serializedProfile : null;
    } catch (e) {
      localStorage.removeItem("profile");
      return null;
    }
  });

  const storeProfile = (data) => {
    localStorage.setItem("profile", JSON.stringify(data));
    setProfile(data);
  };

  return [profile, storeProfile];
};

function App() {
  const [hasSignedIn, authTokens, setAuthTokens] = useAuthTokens();
  const [profile, storeProfile] = useProfile();

  // TODO: fix re-rendering too much when using suggested dependency list
  useEffect(() => {
    if (authTokens !== null) {
      getUserProfile(authTokens)
        .then((response) => {
          storeProfile(response.data);
        })
        .catch((e) => {
          setAuthTokens("");
        });
    } else {
      storeProfile("");
    }
  }, [authTokens]);

  // TODO: merge 2 contexts into one and expose SignOut func
  // TODO: use const/memorize { hasSignedIn, authTokens, setAuthTokens } ?
  return (
    <AuthContext.Provider value={{ hasSignedIn, authTokens, setAuthTokens }}>
      <ProfileContext.Provider value={{ profile, storeProfile }}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              path="/categories/:categoryId/items"
              exact
              component={PhotoContainer}
            />

            <Redirect
              exact
              from="/categories/:categoryId"
              to="/categories/:categoryId/items"
            />

            <Route path="/categories" exact component={CategoryContainer} />

            <Route path="/" exact component={HomeContainer} />

            <Redirect to="/" />
          </Switch>
        </BrowserRouter>

        <ToastContainer
          autoDismiss={3000}
          // hideProgressBar={true}
        />
      </ProfileContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
