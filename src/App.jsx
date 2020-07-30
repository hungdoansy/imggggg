import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./screens/Home";
import { AuthContext } from "./context/auth";
import { me as validate } from "./utils/apis/me";
import { Photos } from "./screens/Photos";
import { Categories } from "./screens/Categories";
import { ToastContainer } from "@gotitinc/design-system";

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

  return [authTokens, setAuthTokens];
};

function App() {
  const [authTokens, setAuthTokens] = useAuthTokens();

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens }}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/categories/:categoryId/items"
            exact
            component={Photos}
          />

          <Route path="/categories" exact component={Categories} />

          <Route path="/" exact component={Home} />

          {/* TODO: Show a error page instead of redirecting to home */}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>

      <ToastContainer autoDismiss={3000} hideProgressBar={true} />
    </AuthContext.Provider>
  );
}

export default App;
