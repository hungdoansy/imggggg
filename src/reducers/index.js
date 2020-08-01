import { combineReducers } from "redux";
import * as fromCategory from "./category";
import * as fromCategory2 from "./category2";

const rootReducer = combineReducers({
  category: fromCategory2.category,
  // what: fromCategory.category,
});

const selectors = {
  ...fromCategory2.selectors,
};

export { rootReducer, selectors };
