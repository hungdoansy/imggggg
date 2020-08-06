import React from "react";
import { render } from "@testing-library/react";

import { Container } from "./Container";

describe("Container", () => {
  it("should render a <div> with class='Container'", () => {
    render(<Container />);

    expect(document.querySelector("div.Container")).toBeDefined();
  });
});
