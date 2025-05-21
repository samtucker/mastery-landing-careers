import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="airbnb-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-sm text-gray-500">© {currentYear} Mastery</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://masterylearning.app/login" className="text-sm text-gray-500 hover:text-black transition-colors">Sign in</a>
            <a href="https://masterylearning.app/register" className="text-sm text-gray-500 hover:text-black transition-colors">Sign up</a>
            <button 
              onClick={scrollToTop} 
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-black transition-colors"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
