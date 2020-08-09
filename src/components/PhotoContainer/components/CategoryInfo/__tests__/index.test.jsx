import React from "react";
import { render } from "@testing-library/react";

import CategoryInfo from "..";

const props = {
  name: "CategoryName",
  description: "CategoryDescription",
  totalPhotos: 100,
};

describe("CategoryInfo", () => {
  let getByText;

  it("should render the category's name", () => {
    ({ getByText } = render(<CategoryInfo {...props} />));
    expect(getByText(/CategoryName/)).toBeInTheDocument();
  });

  it("should render the category's description", () => {
    ({ getByText } = render(<CategoryInfo {...props} />));
    expect(getByText(/CategoryDescription/)).toBeInTheDocument();
  });

  it("should render the category's total photos when it's a number", () => {
    ({ getByText } = render(<CategoryInfo {...props} />));
    const matcher = (content, node) => {
      const hasText = (node) =>
        node.textContent === "A total of 100 contributions by awesome people !";

      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    };
    expect(getByText(matcher)).toBeInTheDocument();
  });

  it("should NOT render the category's total photos when it's NOT a number", () => {
    const customProps = {
      ...props,
      totalPhotos: undefined,
    };

    const rendered = render(<CategoryInfo {...customProps} />);

    const matcher = (content, node) => {
      const hasText = (node) =>
        node.textContent === "A total of 100 contributions by awesome people !";

      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    };

    expect(rendered.queryByText(matcher)).toBeNull();
  });
});
