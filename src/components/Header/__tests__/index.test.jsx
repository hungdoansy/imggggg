import React from "react";
import { render } from "@testing-library/react";

import Header from "..";
import { BrowserRouter } from "react-router-dom";

const FromAuth = require("../../../context/auth");
FromAuth.useAuthContext = jest.fn().mockImplementation(() => {
  return { authTokens: "", setAuthTokens: () => {} };
});

const FromTabBar = require("../components/TabBar");
FromTabBar.default = jest.fn().mockImplementation(() => {
  return <p id="tab-bar">TabBar</p>;
});

describe("Header", () => {
  let getByText;

  beforeEach(() => {
    ({ getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    ));
  });

  it("should render a logo", () => {
    expect(document.querySelector("img").getAttribute("alt")).toBe("Got It");
  });

  it("should render a tab bar", () => {
    expect(getByText("TabBar")).toBeInTheDocument();
  });

  it("should render a login button", () => {
    expect(getByText("Login", { selector: "button" })).toBeInTheDocument();
  });

  it("should render a sign up button", () => {
    expect(getByText("Sign up", { selector: "button" })).toBeInTheDocument();
  });
});
