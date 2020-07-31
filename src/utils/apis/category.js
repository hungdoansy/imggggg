import {
  addNewCategory,
  getCategories as syncGetCategories,
} from "../../mocks";

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

export const getCategories = (page = 1) => {
  const offset = (page - 1) * 10;
  const limit = 10;

  return new Promise((resolve) => {
    const data = syncGetCategories({ offset, limit });

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
