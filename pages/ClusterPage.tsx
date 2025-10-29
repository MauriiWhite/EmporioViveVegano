import React from 'react';
import type { ClusterPageData } from '../types';

interface ClusterPageProps {
  data: ClusterPageData;
  onBack: () => void;
}

const ClusterPage: React.FC<ClusterPageProps> = ({ data, onBack }) => {
  return (
    <article className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto animate-fade-in">
      <button 
        onClick={onBack}
        className="text-brand-green font-semibold mb-6 hover:underline transition-all duration-300 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Volver a la Guía Principal
      </button>

      <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark font-serif mb-4">{data.title}</h1>
      
      <img src={data.imageUrl} alt={data.title} className="w-full h-64 md:h-96 object-cover rounded-lg my-8" />
      
      <div className="prose prose-lg max-w-none text-brand-text">
        {data.content}
      </div>

      <div className="text-center mt-12 border-t pt-8">
        <button
          onClick={onBack}
          className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          aria-label="Volver a la guía completa de estilo de vida vegano"
        >
          &larr; Volver a la Guía Completa
        </button>
      </div>
    </article>
  );
};

export default ClusterPage;