import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_CATEGORY_DETAIL_SUCCESS,
  FETCH_CATEGORY_DETAIL_FAILURE,
  FETCH_PHOTOS_FAILURE,
} from "../constants/action.types";
import { CATEGORIES_PER_PAGE } from "../constants/settings";

// TODO: merge photoCountById into byId
const initialState = {
  allPageNumbers: [],
  idsByPageNumber: {},
  byId: {},
  totalRemoteCount: 0,
  totalNumberOfRemotePages: 0,
};

const updateOnFetchCategoriesSuccess = (state, data, extra) => {
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
    state.byId[c.id] = {
      ...state.byId[c.id],
      exist: true,
      id: c.id,
      name: c.name,
      description: c.description,
      imageUrl: c.image_url,
    };
  });
};

const updateOnFetchPhotosSuccess = (state, data, extra) => {
  const categoryId = extra.categoryId;

  const thatCategory = state.byId[categoryId];

  if (!thatCategory) {
    state.byId[categoryId] = {};
  }

  state.byId[categoryId] = {
    ...thatCategory,
    totalPhotos: data["total_items"],
  };
};

const updateOnFetchCategoryDetailSuccess = (state, data, extra) => {
  const categoryId = extra.categoryId;

  const thatCategory = state.byId[categoryId];

  if (!thatCategory) {
    state.byId[categoryId] = {};
  }

  state.byId[categoryId] = {
    ...thatCategory,
    exist: true,
    id: data.id,
    name: data.name,
    description: data.description,
    imageUrl: data.image_url,
  };
};

const updateOnFetchCategoryDetailFailure = (state, data, extra) => {
  const categoryId = extra.categoryId;

  state.byId[categoryId] = {
    exist: false,
  };
};

const updateOnFetchPhotosFailure = (state, data, extra) => {
  const categoryId = extra.categoryId;

  state.byId[categoryId] = {
    exist: false,
  };
};

// category reducer
const category = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      const nextState = JSON.parse(JSON.stringify(state));

      updateOnFetchCategoriesSuccess(nextState, action.data, action.extra);

      return nextState;
    }

    case FETCH_PHOTOS_SUCCESS: {
      const nextState = JSON.parse(JSON.stringify(state));

      updateOnFetchPhotosSuccess(nextState, action.data, action.extra);

      return nextState;
    }

    case FETCH_PHOTOS_FAILURE: {
      const nextState = JSON.parse(JSON.stringify(state));

      updateOnFetchPhotosFailure(nextState, action.data, action.extra);

      return nextState;
    }

    case FETCH_CATEGORY_DETAIL_SUCCESS: {
      const nextState = JSON.parse(JSON.stringify(state));

      updateOnFetchCategoryDetailSuccess(nextState, action.data, action.extra);

      return nextState;
    }

    case FETCH_CATEGORY_DETAIL_FAILURE: {
      const nextState = JSON.parse(JSON.stringify(state));

      updateOnFetchCategoryDetailFailure(nextState, action.data, action.extra);

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

const getSomeFirstCategories = (wholeState) => {
  const { category } = wholeState;

  const ids = [1, 2, 3].reduce((acc, page) => {
    if (!category.idsByPageNumber[page]) {
      return acc;
    } else {
      return [...acc, ...category.idsByPageNumber[page]];
    }
  }, []);

  return ids.map((id) => category.byId[id]);
};

const getTotalNumberOfRemotePages = (wholeState) =>
  wholeState.category.totalNumberOfRemotePages;

const getTotalNumberOfCategories = (wholeState) =>
  wholeState.category.totalRemoteCount;

const getTotalNumberOfPhotosByCategoryId = (wholeState, categoryId) => {
  const result = wholeState.category.photoCountById[categoryId];

  return result ? result : 0;
};

const getCategoryInfo = (wholeState, categoryId) =>
  wholeState.category.byId[categoryId];

const selectors = {
  getCategoriesByPageNumber,
  getTotalNumberOfRemotePages,
  getTotalNumberOfCategories,
  getTotalNumberOfPhotosByCategoryId,
  getCategoryInfo,
  getSomeFirstCategories,
};

export {
  // export for testing only
  updateOnFetchCategoriesSuccess,
  updateOnFetchPhotosSuccess,
  updateOnFetchCategoryDetailSuccess,
  // export for use
  category,
  selectors,
};
