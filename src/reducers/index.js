import { combineReducers } from "redux";
import * as fromCategory from "./category";

const rootReducer = combineReducers({
  category: fromCategory.category,
});

const getCategories = (state) => fromCategory.getCategories(state.category);

export { rootReducer, getCategories };
