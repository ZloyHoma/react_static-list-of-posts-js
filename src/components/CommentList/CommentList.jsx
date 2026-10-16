import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments, postId }) => {
  const postComments = comments.filter(comment => comment.postId === postId);

  return postComments.map(filteredComment => {
    if (!filteredComment) {
      return null;
    }

    return (
      <div className="CommentList">
        <CommentInfo comment={filteredComment} />
      </div>
    );
  });
};
