import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import ResourcesHero from '../components/ResourcesHero';
import CategoryTabs from '../components/CategoryTabs';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';
import FinalCTASection from '../components/FinalCTASection';
import { articles } from '../data/articles';
import '../styles/Resources.css';

const Resources = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get values from URL or set defaults
  const activeCategory = searchParams.get('category') || 'All Articles';
  const searchTerm = searchParams.get('search') || '';
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const itemsPerPage = 4;

  const categories = ['All Articles', 'Sales', 'Marketing', 'Service', 'Product', 'News'];

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Update URL parameters
  const updateParams = (updates) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== 'All Articles') {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };

  const handleCategoryChange = (category) => {
    updateParams({ category, page: '1' });
  };

  const handleSearchChange = (search) => {
    updateParams({ search, page: '1' });
  };

  const handlePageChange = (pageNumber) => {
    updateParams({ page: pageNumber.toString() });
    // Smooth scroll to articles section
    const element = document.getElementById('articles-listing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtering Logic
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = activeCategory === 'All Articles' || article.category === activeCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  return (
    <div className="resources-page">
      <ResourcesHero />
      
      <section className="resources-list-section" id="articles-listing">
        <div className="resources-list-container">
          
          <div className="resources-filter-bar">
            <CategoryTabs 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={handleCategoryChange}
            />
            
            <div className="search-container">
              <span className="search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
          </div>

          <div className="resources-main-layout">
            <div className="articles-content">
              {currentArticles.length > 0 ? (
                <div className="articles-grid">
                  {currentArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <h3>No articles found matching your criteria.</h3>
                </div>
              )}

              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>

            <Sidebar />
          </div>

        </div>
      </section>

      <FinalCTASection />
    </div>
  );
};

export default Resources;
