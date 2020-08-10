import { combineReducers } from "redux";

import * as fromCategory from "./category";
import * as fromPhoto from "./photo";

const rootReducer = combineReducers({
  category: fromCategory.category,
  photo: fromPhoto.photo,
});

const selectors = {
  ...fromCategory.selectors,
  ...fromPhoto.selectors,
};

export { rootReducer, selectors };
