import { getPhotosWithParams as syncGetPhotosWithParams } from "../../mocks";
import { submitPhoto as syncSubmitPhoto } from "../../mocks";

export const getPhotos = (categoryId, page) => {
  return new Promise((resolve) => {
    const photos = syncGetPhotosWithParams(categoryId, page);

    setTimeout(() => {
      resolve(photos);
    }, 1000);
  });
};

export const submitPhoto = ({ categoryId, userId, description, imageUrl }) => {
  return new Promise((resolve) => {
    const submittedPhoto = syncSubmitPhoto({
      categoryId,
      userId,
      description,
      imageUrl,
    });

    setTimeout(() => {
      resolve(submittedPhoto);
    }, 1000);
  });
};
