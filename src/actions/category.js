import {
  FETCH_CATEGORIES,
  FETCH_CATEGORY_DETAIL,
  FETCH_CATEGORIES_FOR_TABBAR,
} from "../constants/action.types";
import {
  getCategoriesByPageNumber,
  getCategoryDetail,
  getCategoriesByOffsetAndLimit,
} from "../utils/apis/category";

export const fetchCategoriesByPageNumber = (page = 1) => {
  return {
    type: FETCH_CATEGORIES,
    promise: getCategoriesByPageNumber(page),
    extra: {
      page,
    },
  };
};

export const fetchCategoriesForTabBar = () => {
  return {
    type: FETCH_CATEGORIES_FOR_TABBAR,
    promise: getCategoriesByOffsetAndLimit(0, 20),
  };
};

export const fetchCategoryDetail = (categoryId) => {
  return {
    type: FETCH_CATEGORY_DETAIL,
    promise: getCategoryDetail(categoryId),
    extra: {
      categoryId,
    },
  };
};
