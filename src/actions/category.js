import {
  FETCH_CATEGORIES_REQUEST,
  CREATE_CATEGORY_SUCCESS,
} from "../constants/action.types";
import { getCategories } from "../utils/apis/category";

export const fetchCategories = (page = 1) => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
    promise: getCategories(page),
    extra: {
      page,
    },
  };
};

export const createCategorySuccess = (data) => {
  return {
    type: CREATE_CATEGORY_SUCCESS,
    data,
  };
};
