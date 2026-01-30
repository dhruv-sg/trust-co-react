import React from 'react';

const ArticleContent = ({ sections }) => {
  if (!sections || sections.length === 0) {
    return (
      <div className="article-body">
        <p>No content available for this article yet.</p>
      </div>
    );
  }

  return (
    <div className="article-body">
      {sections.map((section, index) => (
        <section key={index} className="article-section">
          {section.heading && <h2 className="section-heading">{section.heading}</h2>}
          <div className="section-content">
            <p>{section.content}</p>
          </div>
          {section.image && (
            <div className="section-image">
              <img src={section.image} alt={section.heading || "Article image"} />
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default ArticleContent;
