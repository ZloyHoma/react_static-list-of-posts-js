import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo" key={comment.id}>
    <div className="CommentInfo__title">
      <strong>{comment.title}</strong>

      {' by '}

      <a className="CommentInfo__email" href={comment.email}>
        {comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
