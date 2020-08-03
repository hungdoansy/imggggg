import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "@gotitinc/design-system";

import { Header } from "./components/Header";

import { CategoryContainer } from "./components/CategoryContainer";
import { HomeContainer } from "./components/HomeContainer";
import { PhotoContainer } from "./components/PhotoContainer";

import { AuthContext } from "./context/auth";
import { ProfileContext } from "./context/profile";

import { getUserProfile } from "./utils/apis/user";
import { fetchCategories } from "./actions/category";

// TODO: at startup, check for validity of the tokens
// /me endpoint

const useAuthTokens = () => {
  // TODO: do I need parse/stringify?
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

  const dispatch = useDispatch();

  useEffect(() => {
    if (authTokens !== null) {
      getUserProfile(authTokens)
        .then((response) => {
          storeProfile(response.data);
        })
        .catch((e) => {
          setAuthTokens("");
        });
    }
  }, [authTokens]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  // TODO: merge 2 contexts into one and expose SignOut func
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

            <Route path="/categories" exact component={CategoryContainer} />

            <Route path="/" exact component={HomeContainer} />

            {/* TODO: Show a error page instead of redirecting to home */}
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
