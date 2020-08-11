export const getPhotos = (wholeState, categoryId, page) => {
  const { photo } = wholeState;

  const categoryIndex = photo.allCategoryIds.indexOf(categoryId);
  if (categoryIndex === -1) {
    return [];
  }

  const pageIndex = photo.allPageNumbersByCategoryIds[categoryId].indexOf(page);
  if (pageIndex === -1) {
    return [];
  }

  const photoIds =
    photo.allPhotoIdsByCatgoryIdsAndPageNumbers[categoryId][page];

  return photoIds.map((id) => photo.byPhotoId[id]);
};

export const getPhotoDetail = (wholeState, id) => {
  const { photo } = wholeState;

  return photo.byPhotoId[id];
};
