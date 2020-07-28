import React from "react";

import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth";

export const Home = (props) => {
  const auth = useAuth();
  console.log("tokens", auth.authTokens);
  return (
    <>
      <Header />
      <p>Home</p>
    </>
  );
};
