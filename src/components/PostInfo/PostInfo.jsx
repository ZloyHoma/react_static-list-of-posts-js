import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by '}
        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    {comments.length > 0 ? (
      <CommentList comments={comments} />
    ) : (
      <p className="NoCommentsMessage">No comments yet</p>
    )}
  </div>
);
