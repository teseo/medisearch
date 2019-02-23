import { combineReducers } from "redux";
import search from "./search";
import autocomplete from "./autocomplete";
export default combineReducers({
  search: search,
  autocomplete: autocomplete
});
