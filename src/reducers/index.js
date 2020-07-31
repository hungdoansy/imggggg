import { combineReducers } from "redux";
import * as fromCategory from "./category";
import * as fromCategory2 from "./category2";

const rootReducer = combineReducers({
  category: fromCategory2.category,
  // what: fromCategory.category,
});

const getCategoriesByPageNumber = (state, page = 1) =>
  fromCategory2.getCategoriesByPageNumber(state.category, page);

const selectors = {
  getCategoriesByPageNumber,
};

export { rootReducer, selectors };
