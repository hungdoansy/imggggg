import React from "react";
import { Header, Logo, Button, SafeAnchor } from "@gotitinc/design-system";

const MyHeader = () => {
  return (
    <div className="u-shadowSmall">
      <Header fullWidth>
        <Header.Brand>
          <Logo as={SafeAnchor} name="gotit" variant="original" height={40} />
        </Header.Brand>
        <Header.Main>
          <Header.Right>
            <Button variant="primary_outline">Login</Button>
            <Button variant="primary" className="u-marginLeftSmall">
              Sign up
            </Button>
          </Header.Right>
        </Header.Main>
      </Header>
    </div>
  );
};

export { MyHeader as Header };
