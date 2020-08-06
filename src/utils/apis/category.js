import { CATEGORIES_PER_PAGE } from "../../constants/settings";

const API_HOST = process.env.REACT_APP_API_HOST;

export const createCategory = (
  { name, imageUrl: image_url, description },
  tokens
) => {
  let status = null;

  return fetch(`${API_HOST}/categories`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokens}`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ name, image_url, description }),
  })
    .then((response) => {
      status = response.status;

      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => ({ status, data: e })); // TODO: network failure
};

export const getCategories = (page) => {
  const offset = (page - 1) * CATEGORIES_PER_PAGE;
  const limit = CATEGORIES_PER_PAGE;

  let status = null;

  return fetch(`${API_HOST}/categories?offset=${offset}&limit=${limit}`)
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => ({ status, data: e })); // TODO: network failure
};

export const getCategoryDetail = (categoryId) => {
  let status = null;

  return fetch(`${API_HOST}/categories/${categoryId}`)
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => ({ status, data: e })); // TODO: network failure
};
