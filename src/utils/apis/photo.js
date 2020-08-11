import { PHOTOS_PER_PAGE } from "constants/settings";

import {
  generateGetRequest,
  generatePostRequest,
  generatePutRequest,
  generateDeleteRequest,
} from "./generateRequest";

const API_HOST = process.env.REACT_APP_API_HOST;

const getPhotos = (categoryId, page = 1) => {
  const offset = (page - 1) * PHOTOS_PER_PAGE;
  const limit = PHOTOS_PER_PAGE;

  return generateGetRequest(
    `${API_HOST}/categories/${categoryId}/items?offset=${offset}&limit=${limit}`
  );
};

const submitPhoto = (categoryId, { description, imageUrl: image_url }) =>
  generatePostRequest(`${API_HOST}/categories/${categoryId}/items`, {
    description,
    image_url,
  });

const editPhoto = (categoryId, { id, description, imageUrl: image_url }) =>
  generatePutRequest(`${API_HOST}/categories/${categoryId}/items/${id}`, {
    image_url,
    description,
  });

const removePhoto = (categoryId, photoId) =>
  generateDeleteRequest(
    `${API_HOST}/categories/${categoryId}/items/${photoId}`
  );

const getPhotoDetail = (categoryId, photoId) =>
  generateGetRequest(`${API_HOST}/categories/${categoryId}/items/${photoId}`);

export { getPhotos, submitPhoto, editPhoto, removePhoto, getPhotoDetail };
