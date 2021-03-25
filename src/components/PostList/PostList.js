// Custom components
import Post from "../Post";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts?.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostList;
