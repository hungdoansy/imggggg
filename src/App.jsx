import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "@gotitinc/design-system";

import { Home } from "./screens/Home";
import { AuthContext } from "./context/auth";
import { me as validate } from "./utils/apis/me";
import { Photos } from "./screens/Photos";
import { CategoryContainer } from "./components/CategoryContainer";
import { fetchCategories } from "./actions/category";
import { Header } from "./components/Header";

// TODO: at startup, check for validity of the tokens
// /me endpoint

const useAuthTokens = () => {
  // TODO: do I need parse/stringify?
  const [authTokens, setTokens] = useState(() => {
    const storedTokens = localStorage.getItem("tokens");

    return storedTokens ? storedTokens : null;
  });

  validate({ tokens: authTokens })
    .then((result) => {
      // TODO: what to do when it's valid?
    })
    .catch((e) => {
      // TODO: handle message when the token is not valid
      setAuthTokens("");
    });

  const setAuthTokens = (data) => {
    localStorage.setItem("tokens", data);
    setTokens(data);
  };

  const hasSignedIn = !!authTokens && authTokens !== "";

  return [hasSignedIn, authTokens, setAuthTokens];
};

function App() {
  const [hasSignedIn, authTokens, setAuthTokens] = useAuthTokens();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <AuthContext.Provider value={{ hasSignedIn, authTokens, setAuthTokens }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/categories/:categoryId/items"
            exact
            component={Photos}
          />

          <Route path="/categories" exact component={CategoryContainer} />

          <Route path="/" exact component={Home} />

          {/* TODO: Show a error page instead of redirecting to home */}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>

      <ToastContainer
        autoDismiss={3000}
        // hideProgressBar={true}
      />
    </AuthContext.Provider>
  );
}

export default App;
