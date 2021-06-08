import { createActions } from "redux-actions";
const actions = createActions({
  SET_LIST_FAVORITE_ACTION: (data) => data,
});
export const { setListFavoriteAction } = actions;
