import * as actionTypes from "../actionTypes";

export const setPosts = (posts) => ({
  type: actionTypes.SET_POSTS,
  posts,
});

export const removePost = (postId) => ({
  type: actionTypes.REMOVE_POST,
  postId,
});

export const setLoading = (isLoading) => ({
  type: actionTypes.SET_LOADING,
  isLoading,
});

export function fetchPosts() {
  return function (dispatch) {
    dispatch(setLoading(true));

    const url = "https://jsonplaceholder.typicode.com/posts";
    const headers = {
      headers: {
        Accept: "application/json",
      },
    };

    fetch(url, headers)
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json())
      .then((res) => {
        dispatch(setPosts(res));
      })
      .finally(() => {
        dispatch(setLoading(false));
      })
      .catch((error) => {
        console.error(`Error fetching GET to =${url} error =${error}`);
      });
  };
}
