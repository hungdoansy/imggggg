import {
  FETCH_CATEGORIES,
  FETCH_CATEGORY_DETAIL,
} from "../constants/action.types";
import { getCategories, getCategoryDetail } from "../utils/apis/category";

export const fetchCategories = (page = 1) => {
  return {
    type: FETCH_CATEGORIES,
    promise: getCategories(page),
    extra: {
      page,
    },
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
