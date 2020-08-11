import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import TabBar from "../TabBar";

const ReactRedux = require("react-redux");
ReactRedux.useDispatch = jest.fn().mockReturnValue(() => {});
ReactRedux.useSelector = jest.fn().mockReturnValue([
  {
    id: 1,
    name: "name1",
  },
  {
    id: 2,
    name: "name2",
  },
  {
    id: 3,
    name: "name3",
  },
]);

const FromAuthContext = require("utils/hooks");
FromAuthContext.useAuthContext = jest
  .fn()
  .mockReturnValue({ hasSignedIn: true });

const showCreateModalMockFn = jest.fn();
const FromCreateCategoryModal = require("../CreateCategoryModal");
FromCreateCategoryModal.useCreateModal = jest
  .fn()
  .mockReturnValue([false, showCreateModalMockFn, jest.fn()]);

const FromCategoryActions = require("actions/category");
FromCategoryActions.fetchCategoriesForTabBar = jest.fn();

describe("Tab Bar", () => {
  describe("Create button", () => {
    let getByText;

    beforeEach(() => {
      ({ getByText } = render(
        <BrowserRouter>
          <TabBar />
        </BrowserRouter>
      ));
    });

    it("should be rendered", () => {
      expect(getByText(/Create/)).toBeInTheDocument();
    });

    it("should open CreateCategoryModal", () => {
      const createButton = getByText(/Create/);
      fireEvent.click(createButton);

      expect(showCreateModalMockFn).toHaveBeenCalled();
    });
  });

  describe("Tabs", () => {
    let getByText;

    beforeEach(() => {
      ({ getByText } = render(
        <BrowserRouter>
          <TabBar />
        </BrowserRouter>
      ));
    });

    it("should be rendered", () => {
      expect(getByText(/name1/)).toBeInTheDocument();
      expect(getByText(/name2/)).toBeInTheDocument();
      expect(getByText(/name3/)).toBeInTheDocument();
    });
  });

  describe("View all", () => {
    let getByText;

    beforeEach(() => {
      ({ getByText } = render(
        <BrowserRouter>
          <TabBar />
        </BrowserRouter>
      ));
    });

    it("should be rendered", () => {
      expect(getByText(/View all/)).toBeInTheDocument();
    });
  });
});
