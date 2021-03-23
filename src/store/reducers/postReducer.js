import * as actionTypes from "../actionTypes";

export function postReducer(state = null, action) {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {};

    case actionTypes.REMOVE_POST:
      return {};

    case actionTypes.SET_LOADING:
      return {};

    default:
      return state;
  }
}
