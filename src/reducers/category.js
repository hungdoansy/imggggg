import { FETCH_CATEGORIES_SUCCESS } from "../constants/action.types";
import { CATEGORIES_PER_PAGE } from "../constants/settings";

const initialState = {
  allPageNumbers: [],
  idsByPageNumber: {},
  byId: {},
  totalRemoteCount: 0,
  totalNumberOfRemotePages: 0,
};

const updateState = (state, data, extra) => {
  const totalRemoteCount = data["total_categories"];
  const totalPages = Math.ceil(totalRemoteCount / CATEGORIES_PER_PAGE);
  const page = extra["page"];
  const pageIndex = state.allPageNumbers.indexOf(page);

  // Update the total number of remote pages
  state.totalNumberOfRemotePages = totalPages;

  // Update the total count from remote
  state.totalRemoteCount = totalRemoteCount;

  // Update allPageNumbers
  if (pageIndex === -1) {
    state.allPageNumbers.push(page);
    state.allPageNumbers.sort((a, b) => a - b);
  }

  // Update idsByPageNumber
  state.idsByPageNumber[page] = data["categories"].map((c) => c.id);

  // Update byId
  data["categories"].forEach((c) => {
    state.byId[c.id] = c;
  });
};

// category reducer
const category = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      const nextState = JSON.parse(JSON.stringify(state));

      updateState(nextState, action.data, action.extra);

      return nextState;
    }

    default: {
      return state;
    }
  }
};

const getCategoriesByPageNumber = (wholeState, page = 1) => {
  const state = wholeState.category;

  const doesNotExistOrBeTheLastPage = (page) => {
    const index = state.allPageNumbers.indexOf(page);

    return (
      index === -1
      // ||
      // index === state.allPageNumbers.length - 1 ||
      // page === state.totalNumberOfRemotePages
    );
  };

  if (doesNotExistOrBeTheLastPage(page)) {
    return [];
  } else {
    const ids = state.idsByPageNumber[page];

    return ids.map((id) => state.byId[id]);
  }
};

const getTotalNumberOfRemotePages = (wholeState) =>
  wholeState.category.totalNumberOfRemotePages;

const getTotalNumberOfCategories = (wholeState) =>
  wholeState.category.totalRemoteCount;

const selectors = {
  getCategoriesByPageNumber,
  getTotalNumberOfRemotePages,
  getTotalNumberOfCategories,
};

export { category, selectors };
