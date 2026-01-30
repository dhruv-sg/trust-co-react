import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { articles as initialArticles } from '../data/articles';
import ArticleHero from '../components/ArticleHero';
import ArticleContent from '../components/ArticleContent';
import Comments from '../components/Comments';
import FinalCTASection from '../components/FinalCTASection';
import '../styles/ArticleDetail.css';

const ArticleDetail = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Find article by slug
    const foundArticle = initialArticles.find(a => a.slug === slug);
    if (foundArticle) {
      setArticle(foundArticle);
      setComments(foundArticle.comments || []);
    }
  }, [slug]);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleAddComment = (newComment) => {
    setComments(prev => [newComment, ...prev]);
  };

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>Article not found</h2>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <ArticleHero article={article} />
      <div className="article-detail-container">
        <ArticleContent sections={article.sections} />
        <Comments 
          comments={comments} 
          onAddComment={handleAddComment} 
        />
      </div>
      <FinalCTASection />
    </div>
  );
};

export default ArticleDetail;
