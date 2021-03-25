import * as actionTypes from "../actionTypes";

export function postsReducer(state = null, action) {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };

    case actionTypes.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.postId !== action.postId),
      };

    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.isLoading,
      };

    default:
      return state;
  }
}
