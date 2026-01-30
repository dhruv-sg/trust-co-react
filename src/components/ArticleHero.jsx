import React from 'react';

const ArticleHero = ({ article }) => {
  return (
    <section className="article-hero">
      <div className="article-hero-image">
        <img src={article.heroImage} alt={article.title} />
      </div>
      <div className="article-hero-content">
        <span className="article-hero-category">{article.category}</span>
        <h1 className="article-hero-title">{article.title}</h1>
        <div className="article-hero-meta">
          <span className="article-author">{article.author}</span>
          <span className="meta-dot">•</span>
          <span className="article-date">{article.date}</span>
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;
