import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post, author, comments, users }) => (
  <div key={post.id} className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}
        <UserInfo user={author} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList comments={comments} users={users} postId={post.id} />
  </div>
);
