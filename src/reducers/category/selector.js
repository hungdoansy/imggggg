export const getCategoriesByPageNumber = (wholeState, page = 1) => {
  const state = wholeState.category;

  const doesNotExist = (page) => {
    const index = state.allPageNumbers.indexOf(page);

    return index === -1;
  };

  if (doesNotExist(page)) {
    return [];
  } else {
    const ids = state.idsByPageNumber[page];

    return ids.map((id) => state.byId[id]);
  }
};

export const getSomeFirstCategories = (wholeState) => {
  const { category } = wholeState;

  const ids = [1, 2, 3].reduce((acc, page) => {
    if (!category.idsByPageNumber[page]) {
      return acc;
    } else {
      return [...acc, ...category.idsByPageNumber[page]];
    }
  }, []);

  return ids.map((id) => category.byId[id]);
};

export const getTotalNumberOfRemotePages = (wholeState) =>
  wholeState.category.totalNumberOfRemotePages;

export const getTotalNumberOfCategories = (wholeState) =>
  wholeState.category.totalRemoteCount;

export const getTotalNumberOfPhotosByCategoryId = (wholeState, categoryId) => {
  const result = wholeState.category.photoCountById[categoryId];

  return result ? result : 0;
};

export const getCategoryInfo = (wholeState, categoryId) =>
  wholeState.category.byId[categoryId];

export const getCategoriesForTabBar = (wholeState) =>
  wholeState.category.forTabBar;
