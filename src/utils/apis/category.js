import { CATEGORIES_PER_PAGE } from "constants/settings";

import { generateGetRequest, generatePostRequest } from "./generateRequest";

const API_HOST = process.env.REACT_APP_API_HOST;

const createCategory = ({ name, imageUrl: image_url, description }) =>
  generatePostRequest(`${API_HOST}/categories`, {
    name,
    image_url,
    description,
  });

const getCategories = () => generateGetRequest(`${API_HOST}/categories`);

const getCategoriesByPageNumber = (page) => {
  const offset = (page - 1) * CATEGORIES_PER_PAGE;
  const limit = CATEGORIES_PER_PAGE;

  return getCategoriesByOffsetAndLimit(offset, limit);
};

const getCategoriesByOffsetAndLimit = (offset, limit) =>
  generateGetRequest(`${API_HOST}/categories?offset=${offset}&limit=${limit}`);

const getCategoryDetail = (categoryId) =>
  generateGetRequest(`${API_HOST}/categories/${categoryId}`);

export {
  createCategory,
  getCategories,
  getCategoriesByPageNumber,
  getCategoriesByOffsetAndLimit,
  getCategoryDetail,
};
