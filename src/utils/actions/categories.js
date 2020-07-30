const { addNewCategory } = require("../../mocks");

export const createCategory = ({ name, imageUrl, description }) => {
  return new Promise((resolve) => {
    addNewCategory({ name, imageUrl, description });

    setTimeout(resolve, 1000);
  });
};
