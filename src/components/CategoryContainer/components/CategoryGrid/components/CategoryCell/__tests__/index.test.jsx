import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import CategoryCell from "..";

describe("CategoryCell", () => {
  let getByText;

  beforeEach(() => {
    ({ getByText } = render(
      <BrowserRouter>
        <CategoryCell
          id={1}
          name={"Something"}
          imageUrl="http://somewhere.com"
          description="random text"
        />
      </BrowserRouter>
    ));
  });

  it("should render a <a> and a <img> inside it", () => {
    expect(document.querySelector("a")).toBeDefined();

    expect(document.querySelector("a").getAttribute("href")).toBe(
      "/categories/1/photos"
    );

    expect(document.querySelector("a > img")).toBeDefined();

    expect(document.querySelector("a > img").getAttribute("src")).toBe(
      "http://somewhere.com"
    );
  });
});
