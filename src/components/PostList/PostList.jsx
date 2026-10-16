import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const author = users.find(userId => userId.id === post.userId);
      const postComments = comments.filter(
        comment => comment.postId === post.id,
      );

      return (
        <PostInfo
          post={post}
          author={author}
          comments={postComments}
          users={users}
        />
      );
    })}
  </div>
);
