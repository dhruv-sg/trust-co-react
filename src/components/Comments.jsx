import React from 'react';
import CommentItem from './CommentItem';
import ReplyForm from './ReplyForm';

const Comments = ({ comments, onAddComment }) => {
  return (
    <section className="article-comments">
      <h2 className="comments-heading">
        Comments ({comments.length})
      </h2>
      
      <div className="comments-list">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      <div className="reply-form-section">
        <h3 className="reply-heading">Post a Reply</h3>
        <p className="reply-subtitle">
          Your email address will not be published. Required fields are marked *
        </p>
        <ReplyForm onAddComment={onAddComment} />
      </div>
    </section>
  );
};

export default Comments;
