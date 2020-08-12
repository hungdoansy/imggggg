import produce from "immer";

import {
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTO_DETAIL_SUCCESS,
} from "constants/action.types";

import * as selectors from "./selector";

const initialState = {
  allCategoryIds: [],
  allPageNumbersByCategoryIds: {},
  allPhotoIdsByCatgoryIdsAndPageNumbers: {},
  byPhotoId: {},
};

/** util functions */
const nextStateOnFetchPhotosSuccess = (currentState, data, extra) => {
  return produce(currentState, (draftState) => {
    const categoryId = extra.categoryId;
    const page = extra.page;
    const photoIds = data["items"].map((p) => p.id);

    // update allCategoryIds
    const categoryIndex = draftState.allCategoryIds.indexOf(categoryId);
    if (categoryIndex === -1) {
      draftState.allCategoryIds.push(categoryId);
      draftState.allCategoryIds.sort((a, b) => a - b);

      draftState.allPageNumbersByCategoryIds[categoryId] = [];
      draftState.allPhotoIdsByCatgoryIdsAndPageNumbers[categoryId] = {};
    }

    // update allPageNumbersByCategoryIds
    const pageIndex = draftState.allPageNumbersByCategoryIds[
      categoryId
    ].indexOf(page);
    if (pageIndex === -1) {
      draftState.allPageNumbersByCategoryIds[categoryId].push(page);
      draftState.allPageNumbersByCategoryIds[categoryId].sort((a, b) => a - b);
    }

    // update allPhotoIdsByCatgoryIdsAndPageNumbers
    draftState.allPhotoIdsByCatgoryIdsAndPageNumbers[categoryId][
      page
    ] = photoIds;

    // update byPhotoId
    data["items"].forEach((p) => {
      draftState.byPhotoId[p.id] = {
        id: p.id,
        description: p.description,
        src: p.image_url,
        author: p.author,
      };
    });
  });
};

const nextStateOnFetchPhotoDetailSuccess = (currentState, data) => {
  return produce(currentState, (draftState) => {
    const id = data.id;

    if (!draftState.byPhotoId[id]) {
      draftState.byPhotoId[id] = {};
    }

    draftState.byPhotoId[id] = {
      id,
      description: data.description,
      src: data.image_url,
      author: data.author,
      categoryId: data.category_id,
    };
  });
};

/** reducer */
const photo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS: {
      return nextStateOnFetchPhotosSuccess(state, action.data, action.extra);
    }

    case FETCH_PHOTO_DETAIL_SUCCESS: {
      return nextStateOnFetchPhotoDetailSuccess(state, action.data);
    }

    default: {
      return state;
    }
  }
};

export {
  /** reducer */
  photo,
  /** util functions */
  nextStateOnFetchPhotosSuccess,
  nextStateOnFetchPhotoDetailSuccess,
  /** selectors */
  selectors,
};
