import { handleActions } from "redux-actions";
import { offLoadingAction, onLoadingAction } from "./action";

export default handleActions<any>(
  {
    [onLoadingAction.toString()]: (state) => ({ ...state, isLoading: true }),
    [offLoadingAction.toString()]: (state) => ({ ...state, isLoading: false }),
  },
  {
    isLoading: false,
    isOpenSidebar: true,
  }
);
