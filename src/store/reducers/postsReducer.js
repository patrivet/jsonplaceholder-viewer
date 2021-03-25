import * as actionTypes from "../actionTypes";

const initialState = {
  posts: [],
  loading: false,
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        list: action.posts,
      };

    case actionTypes.REMOVE_POST:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.postId),
      };

    // TO-DO: possibly break set_loading into seperate reducer for SoC.
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.isLoading,
      };

    default:
      return state;
  }
};
