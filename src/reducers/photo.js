import {
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTO_DETAIL_SUCCESS,
} from "../constants/action.types";

const initialState = {
  allCategoryIds: [],
  allPageNumbersByCategoryIds: {},
  // allPhotoIds: [],
  allPhotoIdsByCatgoryIdsAndPageNumbers: {},
  byPhotoId: {},
};

const updateStateOnFetchPhotosSuccess = (state, data, extra) => {
  const categoryId = extra.categoryId;
  const page = extra.page;
  const photoIds = data["items"].map((p) => p.id);

  // update allCategoryIds
  const categoryIndex = state.allCategoryIds.indexOf(categoryId);
  if (categoryIndex === -1) {
    state.allCategoryIds.push(categoryId);
    state.allCategoryIds.sort((a, b) => a - b);

    state.allPageNumbersByCategoryIds[categoryId] = [];
    state.allPhotoIdsByCatgoryIdsAndPageNumbers[categoryId] = {};
  }

  // update allPageNumbersByCategoryIds
  const pageIndex = state.allPageNumbersByCategoryIds[categoryId].indexOf(page);
  if (pageIndex === -1) {
    state.allPageNumbersByCategoryIds[categoryId].push(page);
    state.allPageNumbersByCategoryIds[categoryId].sort((a, b) => a - b);
  }

  // update allPhotoIdsByCatgoryIdsAndPageNumbers
  state.allPhotoIdsByCatgoryIdsAndPageNumbers[categoryId][page] = photoIds;

  // update byPhotoId
  data["items"].forEach((p) => {
    state.byPhotoId[p.id] = {
      id: p.id,
      description: p.description,
      src: p.image_url,
      author: p.author,
    };
  });
};

const updateStateOnFetchPhotoDetailSuccess = (state, data, extra) => {
  const id = extra.photoId;

  if (!state.byPhotoId[id]) {
    state.byPhotoId[id] = {};
  }

  state.byPhotoId[data.id] = {
    id,
    description: data.description,
    src: data.image_url,
    author: data.author,
    categoryId: data.category_id,
  };
};

const photo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS: {
      const nextState = JSON.parse(JSON.stringify(state));

      updateStateOnFetchPhotosSuccess(nextState, action.data, action.extra);

      return nextState;
    }

    case FETCH_PHOTO_DETAIL_SUCCESS: {
      const nextState = JSON.parse(JSON.stringify(state));

      updateStateOnFetchPhotoDetailSuccess(
        nextState,
        action.data,
        action.extra
      );

      return nextState;
    }

    default: {
      return state;
    }
  }
};

const getPhotos = (wholeState, categoryId, page) => {
  const { photo } = wholeState;

  const categoryIndex = photo.allCategoryIds.indexOf(categoryId);
  if (categoryIndex === -1) {
    return [];
  }

  const pageIndex = photo.allPageNumbersByCategoryIds[categoryId].indexOf(page);
  if (pageIndex === -1) {
    return [];
  }

  const photoIds =
    photo.allPhotoIdsByCatgoryIdsAndPageNumbers[categoryId][page];

  return photoIds.map((id) => photo.byPhotoId[id]);
};

const getPhotoDetail = (wholeState, id) => {
  const { photo } = wholeState;

  return photo.byPhotoId[id];
};

const selectors = {
  getPhotos,
  getPhotoDetail,
};

export { photo, selectors };
