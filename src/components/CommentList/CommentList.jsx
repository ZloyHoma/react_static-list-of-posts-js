import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  return comments.map(filteredComment => {
    return (
      <div className="CommentList">
        <CommentInfo key={filteredComment.id} comment={filteredComment} />
      </div>
    );
  });
};
