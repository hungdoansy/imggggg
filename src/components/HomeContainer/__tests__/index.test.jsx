import React from "react";
import { render } from "@testing-library/react";

import HomeContainer from "..";

describe("HomeContainer", () => {
  it("should render a welcome text", () => {
    const { getByText } = render(<HomeContainer />);
    expect(getByText(/Welcome/)).toBeInTheDocument();
  });
});
