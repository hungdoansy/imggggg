import { getPhotosWithParams as syncGetPhotosWithParams } from "../../mocks";

export const getPhotosWithParams = ({ categoryId, page }) => {
  return new Promise((resolve) => {
    const photos = syncGetPhotosWithParams({ categoryId, page });

    setTimeout(() => {
      resolve(photos);
    }, 1000);
  });
};
