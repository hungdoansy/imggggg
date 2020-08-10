import { CATEGORIES_PER_PAGE } from "constants/settings";
import { generateRequest } from "./generateRequest";

const API_HOST = process.env.REACT_APP_API_HOST;

const createCategory = ({ name, imageUrl: image_url, description }, tokens) => {
  const stringifiedBody = JSON.stringify({ name, image_url, description });

  return generateRequest(
    "POST",
    `${API_HOST}/categories`,
    tokens,
    stringifiedBody
  );
};

const getCategoriesByPageNumber = (page) => {
  const offset = (page - 1) * CATEGORIES_PER_PAGE;
  const limit = CATEGORIES_PER_PAGE;

  return generateRequest(
    "GET",
    `${API_HOST}/categories?offset=${offset}&limit=${limit}`
  );
};

const getCategoriesByOffsetAndLimit = (offset, limit) => {
  return generateRequest(
    "GET",
    `${API_HOST}/categories?offset=${offset}&limit=${limit}`
  );
};

const getCategoryDetail = (categoryId) => {
  return generateRequest("GET", `${API_HOST}/categories/${categoryId}`);
};

export {
  createCategory,
  getCategoriesByPageNumber,
  getCategoriesByOffsetAndLimit,
  getCategoryDetail,
};
