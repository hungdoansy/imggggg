import React from "react";

import { Header } from "../../components/Header";
import { ImageGrid } from "../../components/ImageGrid";
import { useAuth } from "../../context/auth";

export const Home = (props) => {
  const auth = useAuth();
  console.log("tokens", auth.authTokens);
  return (
    <>
      <Header />
      <ImageGrid />
    </>
  );
};
