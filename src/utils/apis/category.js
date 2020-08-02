import {
  addNewCategory,
  getCategories as syncGetCategories,
  getCategoryDetail as syncGetCategoryDetail,
} from "../../mocks";

import { CATEGORIES_PER_PAGE } from "../../constants/settings";

export const createCategory = ({ name, imageUrl, description }) => {
  return new Promise((resolve) => {
    const image_url = imageUrl;
    const response = addNewCategory({ name, image_url, description });
    // TODO: use snake case here

    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};

export const getCategories = (page) => {
  const offset = (page - 1) * CATEGORIES_PER_PAGE;
  const limit = CATEGORIES_PER_PAGE;

  return new Promise((resolve) => {
    const data = syncGetCategories({ offset, limit });

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const getCategoryDetail = (categoryId) => {
  return new Promise((resolve) => {
    const data = syncGetCategoryDetail(categoryId);

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
