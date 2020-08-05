import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTO_DETAIL_REQUEST,
} from "../constants/action.types";
import { getPhotos, getPhotoDetail } from "../utils/apis/photo";

export const fetchPhotos = (categoryId, page = 1) => {
  return {
    type: FETCH_PHOTOS_REQUEST,
    promise: getPhotos(categoryId, page),
    extra: {
      page,
      categoryId,
    },
  };
};

export const fetchPhotoDetail = (categoryId, photoId) => {
  return {
    type: FETCH_PHOTO_DETAIL_REQUEST,
    promise: getPhotoDetail(categoryId, photoId),
    extra: {
      photoId,
      categoryId,
    },
  };
};
