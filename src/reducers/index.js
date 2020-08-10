import { combineReducers } from "redux";

import * as fromCategory from "./category";
import * as fromPhoto from "./photo";
import * as fromApp from "./app";

const rootReducer = combineReducers({
  category: fromCategory.category,
  photo: fromPhoto.photo,
  app: fromApp.app,
});

const selectors = {
  ...fromCategory.selectors,
  ...fromPhoto.selectors,
  ...fromApp.selectors,
};

export { rootReducer, selectors };
