import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments, postId }) => {
  const postComments = comments.filter(comment => comment.postId === postId);

  return (
    <div className="CommentList">
      {postComments.map(filteredComment => (
        <CommentInfo comment={filteredComment} />
      ))}
    </div>
  );
};
