import React from "react";
import { Header } from "./components/Header";
import { ImageGrid } from "./components/ImageGrid";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./screens/Auth/Login";

const Home = () => {
  return (
    <>
      <Header />
      {/* <ImageGrid /> */}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
