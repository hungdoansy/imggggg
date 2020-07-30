import {
  addNewCategory,
  getCategories as syncGetCategories,
} from "../../mocks";

export const createCategory = ({ name, imageUrl, description }) => {
  return new Promise((resolve) => {
    addNewCategory({ name, imageUrl, description });

    setTimeout(resolve, 1000);
  });
};

export const getCategories = (page = 1) => {
  const offset = (page - 1) * 10;
  const limit = 10;

  return new Promise((resolve) => {
    const categories = syncGetCategories({ offset, limit });

    setTimeout(() => {
      resolve(categories);
    }, 1000);
  });
};
