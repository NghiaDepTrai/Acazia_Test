import { combineReducers } from "redux";
import listFavorite from "screens/dashboard/redux/reducer";
export default combineReducers({
  dashboard: listFavorite,
});
