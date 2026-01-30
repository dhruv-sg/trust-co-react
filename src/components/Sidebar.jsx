import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const recentPosts = [
    { id: 1, slug: "business-more-prominent-2023", title: "What Makes an Authentic Employee Profile?", date: "23 Nov 2022" },
    { id: 2, slug: "sales-techniques-for-startups", title: "How to blow through capital at an incredible rate?", date: "15 Nov 2022" },
    { id: 3, slug: "new-launch-analytics-2", title: "How to run your company without CEO?", date: "20 Sep 2022" },
    { id: 4, slug: "seo-2024-beyond-keywords", title: "Why do we need to get outsource CEO?", date: "11 Sep 2022" },
    { id: 5, slug: "future-of-product-design-ai", title: "Do we need learn any language to be better CEO?", date: "30 Aug 2022" }
  ];

  const popularPosts = [
    { id: 1, slug: "business-more-prominent-2023", title: "How to show your business more prominent in 2023", date: "23 Nov 2022" },
    { id: 2, slug: "seo-2024-beyond-keywords", title: "Why do we need to get outsource CEO?", date: "30 Aug 2022" },
    { id: 3, slug: "sales-techniques-for-startups", title: "How to blow through capital at an incredible rate?", date: "16 Aug 2022" },
    { id: 4, slug: "new-launch-analytics-2", title: "How to run your company without CEO?", date: "Jan 23, 2022" }
  ];

  return (
    <aside className="resources-sidebar">
      <div className="sidebar-card">
        <h3 className="sidebar-title">Recent Post</h3>
        <div className="sidebar-list">
          {recentPosts.map(post => (
            <Link key={post.id} to={`/resources/${post.slug}`} className="sidebar-item">
              <h4 className="sidebar-item-title">{post.title}</h4>
              <span className="sidebar-item-date">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="sidebar-card">
        <h3 className="sidebar-title">Popular Post</h3>
        <div className="sidebar-list">
          {popularPosts.map(post => (
            <Link key={post.id} to={`/resources/${post.slug}`} className="sidebar-item">
              <h4 className="sidebar-item-title">{post.title}</h4>
              <span className="sidebar-item-date">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
