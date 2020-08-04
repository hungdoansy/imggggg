import { FETCH_PHOTOS_REQUEST } from "../constants/action.types";
import { getPhotos } from "../utils/apis/photo";

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
