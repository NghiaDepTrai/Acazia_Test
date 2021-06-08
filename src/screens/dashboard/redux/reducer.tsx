import { handleActions } from "redux-actions";
import { setListFavoriteAction } from "./action";

export default handleActions<any>(
  {
    [setListFavoriteAction.toString()]: (state, action) => ({ ...state, listFavorite: action.payload }),
  },
  {
    listFavorite: [],
  }
);
