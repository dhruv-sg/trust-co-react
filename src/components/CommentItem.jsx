import React from 'react';

const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <div className="comment-avatar">
        <img src={comment.avatar || `https://i.pravatar.cc/150?u=${comment.name}`} alt={comment.name} />
      </div>
      <div className="comment-content">
        <div className="comment-header">
          <div className="comment-user">
            <h4 className="comment-name">{comment.name}</h4>
            <span className="comment-role">{comment.role || "User"}</span>
          </div>
          <button className="reply-btn">Reply</button>
        </div>
        <p className="comment-text">{comment.text}</p>
        <div className="comment-footer">
          <button className="like-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            {comment.likes || 0}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
