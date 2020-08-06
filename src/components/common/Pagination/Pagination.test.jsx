import React from "react";
import { render } from "@testing-library/react";

import { pageNumbersCreator, Pagination, BE_ELLIPSIS } from "./Pagination";

describe("Pagination", () => {
  describe("pageNumbersCreator", () => {
    it("should produce correct values", () => {
      // prettier-ignore
      expect(pageNumbersCreator(1, 10)).toEqual([1, 2, 3, 4, 5, 6, BE_ELLIPSIS, 10]);

      // prettier-ignore
      expect(pageNumbersCreator(2, 10)).toEqual([1, 2, 3, 4, 5, 6, BE_ELLIPSIS, 10]);

      // prettier-ignore
      expect(pageNumbersCreator(3, 10)).toEqual([1, 2, 3, 4, 5, 6, BE_ELLIPSIS, 10]);

      // prettier-ignore
      expect(pageNumbersCreator(4, 10)).toEqual([1, 2, 3, 4, 5, 6, BE_ELLIPSIS, 10]);

      // prettier-ignore
      expect(pageNumbersCreator(5, 10)).toEqual([1, BE_ELLIPSIS, 3, 4, 5, 6, 7, BE_ELLIPSIS, 10]);

      // prettier-ignore
      expect(pageNumbersCreator(6, 10)).toEqual([1, BE_ELLIPSIS, 4, 5, 6, 7, 8, BE_ELLIPSIS, 10]);

      // prettier-ignore
      expect(pageNumbersCreator(7, 10)).toEqual([1, BE_ELLIPSIS, 5, 6, 7, 8, 9, 10]);

      // prettier-ignore
      expect(pageNumbersCreator(8, 10)).toEqual([1, BE_ELLIPSIS, 5, 6, 7, 8, 9, 10]);

      // prettier-ignore
      expect(pageNumbersCreator(9, 10)).toEqual([1, BE_ELLIPSIS, 5, 6, 7, 8, 9, 10]);

      // prettier-ignore
      expect(pageNumbersCreator(10, 10)).toEqual([1, BE_ELLIPSIS, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe("Pagination component", () => {
    it("should render as many elements as provided", () => {
      const props = {
        currentPage: 2,
        totalNumberOfPages: 10,
        baseUrl: "/thisapp",
      };

      render(<Pagination {...props} />);

      expect(document.querySelectorAll("ul")).toHaveLength(1);
      expect(document.querySelectorAll("li")).toHaveLength(10);

      Array.from(document.querySelectorAll("a")).forEach((e) => {
        expect(e.getAttribute("href")).toMatch(/(\/thisapp|#)/);
      });
    });
  });
});
