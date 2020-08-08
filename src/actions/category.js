import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORY_DETAIL_REQUEST,
} from "../constants/action.types";
import { getCategories, getCategoryDetail } from "../utils/apis/category";

export const fetchCategories = (page = 1) => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
    promise: getCategories(page),
    extra: {
      page,
    },
  };
};

export const fetchCategoryDetail = (categoryId) => {
  return {
    type: FETCH_CATEGORY_DETAIL_REQUEST,
    promise: getCategoryDetail(categoryId),
    extra: {
      categoryId,
    },
  };
};
