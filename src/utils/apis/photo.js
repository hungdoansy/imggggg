import { PHOTOS_PER_PAGE } from "../../constants/settings";

const API_HOST = process.env.REACT_APP_API_HOST;

// TODO: create myFetch

const getPhotos = (categoryId, page = 1) => {
  const offset = (page - 1) * PHOTOS_PER_PAGE;
  const limit = PHOTOS_PER_PAGE;

  let status = null;

  return fetch(
    `${API_HOST}/categories/${categoryId}/items?offset=${offset}&limit=${limit}`
  )
    .then((response) => {
      status = response.status;

      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => {
      console.log("Error while fetching photos", e);
      return [];
    }); // TODO: network failure
};

const submitPhoto = (
  categoryId,
  { description, imageUrl: image_url },
  tokens
) => {
  let status = null;

  return fetch(`${API_HOST}/categories/${categoryId}/items`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokens}`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ image_url, description }),
  })
    .then((response) => {
      status = response.status;

      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => ({ status, data: e })); // TODO: network failure
};

const editPhoto = (
  categoryId,
  { id, description, imageUrl: image_url },
  tokens
) => {
  let status = null;

  return fetch(`${API_HOST}/categories/${categoryId}/items/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${tokens}`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ image_url, description }),
  })
    .then((response) => {
      status = response.status;

      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => ({ status, data: e })); // TODO: network failure
};

const removePhoto = (categoryId, photoId, tokens) => {
  let status = null;

  return fetch(`${API_HOST}/categories/${categoryId}/items/${photoId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${tokens}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then((response) => {
      status = response.status;

      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => ({ status, data: e })); // TODO: network failure
};

const getPhotoDetail = (categoryId, photoId) => {
  let status = null;

  return fetch(`${API_HOST}/categories/${categoryId}/items/${photoId}`)
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => ({ status, data: e })); // TODO: network failure
};

export { getPhotos, submitPhoto, editPhoto, removePhoto, getPhotoDetail };
