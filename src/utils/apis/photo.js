import { PHOTOS_PER_PAGE } from "constants/settings";

import { generateRequest } from "./generateRequest";

const API_HOST = process.env.REACT_APP_API_HOST;

const getPhotos = (categoryId, page = 1) => {
  const offset = (page - 1) * PHOTOS_PER_PAGE;
  const limit = PHOTOS_PER_PAGE;

  return generateRequest(
    "GET",
    `${API_HOST}/categories/${categoryId}/items?offset=${offset}&limit=${limit}`
  );
};

const submitPhoto = (
  categoryId,
  { description, imageUrl: image_url },
  tokens
) => {
  const stringifiedBody = JSON.stringify({ description, image_url });

  return generateRequest(
    "POST",
    `${API_HOST}/categories/${categoryId}/items`,
    tokens,
    stringifiedBody
  );
};

const editPhoto = (
  categoryId,
  { id, description, imageUrl: image_url },
  tokens
) => {
  const stringifiedBody = JSON.stringify({ image_url, description });

  return generateRequest(
    "PUT",
    `${API_HOST}/categories/${categoryId}/items/${id}`,
    tokens,
    stringifiedBody
  );
};

const removePhoto = (categoryId, photoId, tokens) => {
  return generateRequest(
    "DELETE",
    `${API_HOST}/categories/${categoryId}/items/${photoId}`,
    tokens
  );
};

const getPhotoDetail = (categoryId, photoId) => {
  return generateRequest(
    "GET",
    `${API_HOST}/categories/${categoryId}/items/${photoId}`
  );
};

export { getPhotos, submitPhoto, editPhoto, removePhoto, getPhotoDetail };
