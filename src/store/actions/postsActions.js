import * as actionTypes from "../actionTypes";
const POSTS_URL =
  process.env.POSTS_URL || "https://jsonplaceholder.typicode.com/posts";

export const setPosts = (posts) => ({
  type: actionTypes.SET_POSTS,
  posts,
});

export const removePost = (id) => ({
  type: actionTypes.REMOVE_POST,
  id,
});

export const setReady = (isReady) => ({
  type: actionTypes.SET_READY,
  isReady,
});

export function fetchPosts() {
  return function (dispatch) {
    dispatch(setReady(false));

    const headers = {
      headers: {
        Accept: "application/json",
      },
    };

    fetch(POSTS_URL, headers)
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json())
      .then((res) => {
        dispatch(setPosts(res));
      })
      .finally(() => {
        dispatch(setReady(true));
      })
      .catch((error) => {
        console.error(`Error fetching GET to =${POSTS_URL} error =`);
        console.error(error);
      });
  };
}
