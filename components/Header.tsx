
import React from 'react';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={onHomeClick}
        >
          <img 
            src="https://images.unsplash.com/photo-1590779233252-a8c8a183e87d?w=100&h=100&fit=crop&q=80" 
            alt="Logo de Emporio Vive Vegano" 
            className="h-10 w-10 rounded-full object-cover"
          />
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
