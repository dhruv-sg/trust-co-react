import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import ArticleDetail from './pages/ArticleDetail';
import Solutions from './pages/Solutions';
import Features from './pages/Features';
import Company from './pages/Company';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ArticleDetail />} />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
