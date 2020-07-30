import React from "react";

import { Header } from "../../components/Header";
import { useAuthContext } from "../../context/auth";

export const Home = (props) => {
  const auth = useAuthContext();
  console.log("tokens", auth.authTokens);
  return (
    <>
      <Header />
      <p>Home</p>
    </>
  );
};
