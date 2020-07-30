import { FETCH_CATEGORIES_REQUEST } from "../constants/action.types";
import { getCategories } from "../utils/apis/category";

export const fetchCategories = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
    promise: getCategories(),
  };
};
