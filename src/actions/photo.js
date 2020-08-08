import { FETCH_PHOTOS, FETCH_PHOTO_DETAIL } from "../constants/action.types";
import { getPhotos, getPhotoDetail } from "../utils/apis/photo";

export const fetchPhotos = (categoryId, page = 1) => {
  return {
    type: FETCH_PHOTOS,
    promise: getPhotos(categoryId, page),
    extra: {
      page,
      categoryId,
    },
  };
};

export const fetchPhotoDetail = (categoryId, photoId) => {
  return {
    type: FETCH_PHOTO_DETAIL,
    promise: getPhotoDetail(categoryId, photoId),
    extra: {
      photoId,
      categoryId,
    },
  };
};
