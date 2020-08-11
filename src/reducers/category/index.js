import produce from "immer";

import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_CATEGORY_DETAIL_SUCCESS,
  FETCH_CATEGORY_DETAIL_FAILURE,
  FETCH_PHOTOS_FAILURE,
  FETCH_CATEGORIES_FOR_TABBAR_SUCCESS,
} from "constants/action.types";
import { CATEGORIES_PER_PAGE } from "constants/settings";

import * as selectors from "./selector";

const initialState = {
  allPageNumbers: [],
  idsByPageNumber: {},
  byId: {},
  totalRemoteCount: 0,
  totalNumberOfRemotePages: 0,
  forTabBar: [],
};

const newStateOnFetchCategoriesSuccess = (currentState, data, extra) => {
  return produce(currentState, (draftState) => {
    const totalRemoteCount = data["total_categories"];
    const totalPages = Math.ceil(totalRemoteCount / CATEGORIES_PER_PAGE);
    const page = extra["page"];
    const pageIndex = draftState.allPageNumbers.indexOf(page);

    // Update the total number of remote pages
    draftState.totalNumberOfRemotePages = totalPages;

    // Update the total count from remote
    draftState.totalRemoteCount = totalRemoteCount;

    // Update allPageNumbers
    if (pageIndex === -1) {
      draftState.allPageNumbers.push(page);
      draftState.allPageNumbers.sort((a, b) => a - b);
    }

    // Update idsByPageNumber
    draftState.idsByPageNumber[page] = data["categories"].map((c) => c.id);

    // Update byId
    data["categories"].forEach((c) => {
      draftState.byId[c.id] = {
        ...draftState.byId[c.id],
        exist: true,
        id: c.id,
        name: c.name,
        description: c.description,
        imageUrl: c.image_url,
      };
    });
  });
};

const newStateOnFetchPhotosSuccess = (currentState, data, extra) => {
  return produce(currentState, (draftState) => {
    const categoryId = extra.categoryId;

    const thatCategory = draftState.byId[categoryId];

    if (!thatCategory) {
      draftState.byId[categoryId] = {};
    }

    draftState.byId[categoryId] = {
      ...thatCategory,
      totalPhotos: data["total_items"],
    };
  });
};

const newStateOnFetchCategoryDetailSuccess = (currentState, data, extra) => {
  return produce(currentState, (draftState) => {
    const categoryId = extra.categoryId;

    const thatCategory = draftState.byId[categoryId];

    if (!thatCategory) {
      draftState.byId[categoryId] = {};
    }

    draftState.byId[categoryId] = {
      ...thatCategory,
      exist: true,
      id: data.id,
      name: data.name,
      description: data.description,
      imageUrl: data.image_url,
    };
  });
};

const newStateOnFetchCategoryDetailFailure = (currentState, data, extra) => {
  return produce(currentState, (draftState) => {
    const categoryId = extra.categoryId;

    draftState.byId[categoryId] = {
      exist: false,
    };
  });
};

const newStateOnFetchPhotosFailure = (currentState, data, extra) => {
  return produce(currentState, (draftState) => {
    const categoryId = extra.categoryId;

    draftState.byId[categoryId] = {
      exist: false,
    };
  });
};

const newStateOnFetchCategoriesForTabBar = (currentState, data) => {
  return produce(currentState, (draftState) => {
    draftState.forTabBar = [...data.categories];

    const totalPages = Math.ceil(data.total_categories / CATEGORIES_PER_PAGE);
    draftState.totalNumberOfRemotePages = totalPages;
  });
};

// category reducer
const category = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      return newStateOnFetchCategoriesSuccess(state, action.data, action.extra);
    }

    case FETCH_CATEGORIES_FOR_TABBAR_SUCCESS: {
      return newStateOnFetchCategoriesForTabBar(state, action.data);
    }

    case FETCH_PHOTOS_SUCCESS: {
      return newStateOnFetchPhotosSuccess(state, action.data, action.extra);
    }

    case FETCH_PHOTOS_FAILURE: {
      return newStateOnFetchPhotosFailure(state, action.data, action.extra);
    }

    case FETCH_CATEGORY_DETAIL_SUCCESS: {
      return newStateOnFetchCategoryDetailSuccess(
        state,
        action.data,
        action.extra
      );
    }

    case FETCH_CATEGORY_DETAIL_FAILURE: {
      return newStateOnFetchCategoryDetailFailure(
        state,
        action.data,
        action.extra
      );
    }

    default: {
      return state;
    }
  }
};

export {
  // export for testing only
  newStateOnFetchCategoriesSuccess,
  newStateOnFetchPhotosSuccess,
  newStateOnFetchCategoryDetailSuccess,
  // export for use
  category,
  selectors,
};
