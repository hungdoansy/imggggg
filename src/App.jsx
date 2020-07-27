import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./screens/Home";
import { AuthContext } from "./context/auth";
import { validate } from "./utils/actions/validate";

// TODO: at startup, check for validity of the tokens
// /me endpoint

const useAuthTokens = () => {
  // TODO: do I need parse/stringify?
  const [authTokens, setTokens] = useState(() => {
    const storedTokens = localStorage.getItem("tokens");

    return storedTokens ? storedTokens : null;
  });

  validate({ token: authTokens }).then((result) => {
    if (!result) {
      setAuthTokens("");
    }
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
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
