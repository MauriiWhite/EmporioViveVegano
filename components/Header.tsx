
import React from 'react';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={onHomeClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.536a.5.5 0 01.707 0L10 12.707l2.828-2.829a.5.5 0 11.708.708L10.707 13.414a.5.5 0 01-.707 0L6.757 10.243a.5.5 0 010-.707z" clipRule="evenodd" />
          </svg>
          <h1 className="text-2xl font-bold text-brand-green-dark font-serif">Emporio vive vegano</h1>
        </div>
        <nav>
          <button 
            onClick={onHomeClick}
            className="text-brand-text hover:text-brand-green transition-colors duration-300 font-semibold"
          >
            Guía Principal
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;