import React from 'react';
import { clusterPages } from '../data/content';
import type { ClusterPageData } from '../types';

interface PillarPageProps {
  onNavigate: (pageId: string) => void;
}

const PillarPage: React.FC<PillarPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      <section className="text-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark font-serif mb-4">Guía completa para llevar un estilo de vida vegano</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Bienvenido a tu centro de recursos para todo lo relacionado con el veganismo. Ya seas un veterano a base de plantas o simplemente curioso, aquí encontrarás guías detalladas, recetas deliciosas y consejos prácticos para prosperar con una dieta vegana.
        </p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('ebook-guide');
          }}
          className="mt-6 inline-block bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          aria-label="Descargar el e-book gratuito sobre la guía de comida vegana"
        >
          Descarga E-book Aquí
        </a>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-brand-text font-serif mb-8">Explora Nuestros Temas Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clusterPages
            .filter((page) => page.id !== 'ebook-guide')
            .map((page) => (
              <ClusterCard key={page.id} page={page} onNavigate={onNavigate} />
            ))}
        </div>
      </section>
    </div>
  );
};

interface ClusterCardProps {
  page: ClusterPageData;
  onNavigate: (pageId: string) => void;
}

const ClusterCard: React.FC<ClusterCardProps> = ({ page, onNavigate }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col"
      onClick={() => onNavigate(page.id)}
    >
      <img src={page.imageUrl} alt={page.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-serif text-brand-green-dark mb-2">{page.title}</h3>
        <p className="text-gray-600 flex-grow">{page.shortDescription}</p>
        <span className="text-brand-green font-semibold mt-4 inline-block hover:underline">
          Leer más &rarr;
        </span>
      </div>
    </div>
  );
}

export default PillarPage;