import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <Link to={`/resources/${article.slug}`} className="article-image">
        <img src={article.image} alt={article.title} />
      </Link>
      <div className="article-info">
        <div className="article-meta">
          <span className="article-date">{article.date},</span>
          <span className="article-author">by {article.author}</span>
        </div>
        <Link to={`/resources/${article.slug}`}>
          <h3 className="article-title">{article.title}</h3>
        </Link>
        <p className="article-description">{article.description}</p>
        <Link to={`/resources/${article.slug}`} className="read-story-link">
          Read Story <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
