import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/actions/postsActions";
import "./App.css";

// Custom components
import Stats from "./components/Stats";
import PostList from "./components/PostList";

function App() {
  const posts = useSelector((store) => store.posts.list);
  const ready = useSelector((state) => state.posts.ready);
  const dispatch = useDispatch();

  // Fetch the posts
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="App">
      {ready ? (
        <>
          <Stats />
          <PostList posts={posts} />
        </>
      ) : (
        <div className="App__loading">Loading...</div>
      )}
    </div>
  );
}

export default App;
