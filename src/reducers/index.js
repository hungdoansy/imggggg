import { combineReducers } from "redux";
import * as fromCategory2 from "./category";

const rootReducer = combineReducers({
  category: fromCategory2.category,
});

const selectors = {
  ...fromCategory2.selectors,
};

export { rootReducer, selectors };
