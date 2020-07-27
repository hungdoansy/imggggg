import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./screens/Home";
import { AuthContext } from "./context/auth";

const useAuthTokens = () => {
  const [authTokens, setTokens] = useState(() => {
    const storedTokens = localStorage.getItem("tokens");

    return storedTokens ? storedTokens : null;
  });

  const setAuthTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
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
