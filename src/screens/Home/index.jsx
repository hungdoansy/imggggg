import React from "react";
import { useAuthContext } from "../../context/auth";

export const Home = (props) => {
  const auth = useAuthContext();
  console.log("tokens", auth.authTokens);
  return (
    <>
      <p>Home</p>
    </>
  );
};
