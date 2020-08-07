import React from "react";

import { useAuthContext } from "../../context/auth";
import Container from "../common/Container";

const HomeContainer = (props) => {
  const auth = useAuthContext();
  console.log("tokens", auth.authTokens);
  return (
    <Container>
      <div className="u-textCenter">
        Welcome to <b>Imggggg</b> !
      </div>
    </Container>
  );
};

export default HomeContainer;
