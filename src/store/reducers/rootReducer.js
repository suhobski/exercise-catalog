import { combineReducers } from "redux";
import catalogReducer from './catalog'
import favoritesReducer from "./favorites";
import filterReducer from "./filter";

export default combineReducers({
  catalog: catalogReducer,
  filter: filterReducer,
  favorites: favoritesReducer,
})