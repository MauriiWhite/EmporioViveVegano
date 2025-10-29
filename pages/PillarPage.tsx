import React, { useState } from 'react';
import { clusterPages } from '../data/content';
import type { ClusterPageData } from '../types';

interface PillarPageProps {
  onNavigate: (pageId: string) => void;
}

const PillarSection: React.FC<{
  title: string;
  ctaText: string;
  ctaPageId: string;
  onNavigate: (pageId: string) => void;
  children: React.ReactNode;
}> = ({ title, ctaText, ctaPageId, onNavigate, children }) => (
  <section className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center">
    <h2 className="text-3xl font-bold font-serif text-brand-green-dark mb-4">{title}</h2>
    <div className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
      {children}
    </div>
    <button
      onClick={() => onNavigate(ctaPageId)}
      className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
    >
      {ctaText}
    </button>
  </section>
);


const PillarPage: React.FC<PillarPageProps> = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="animate-fade-in bg-gray-50/50">
      <section 
        className="relative text-center p-8 md:p-16 rounded-lg shadow-lg mb-12 bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4 drop-shadow-md">Guía completa para llevar un estilo de vida vegano</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200 leading-relaxed drop-shadow-md">
            Bienvenido a tu centro de recursos para todo lo relacionado con el veganismo. Ya seas un veterano a base de plantas o simplemente curioso, aquí encontrarás guías detalladas, recetas deliciosas y consejos práctácticos para prosperar con una dieta vegana.
          </p>
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-flex items-center w-full sm:w-auto justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descarga E-book aquí
              </button>
              <button
                onClick={() => onNavigate('top-10-meals')}
                className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-flex items-center w-full sm:w-auto justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Ver Recetas Rápidas
              </button>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto space-y-12 px-4 py-8">
        <PillarSection title="Introducción al Veganismo" ctaText="Descubre por qué cada elección cuenta" ctaPageId="health-benefits" onNavigate={onNavigate}>
          <p>Comprende los valores y fundamentos detrás del veganismo. Una filosofía de vida que busca el respeto por los animales, la protección del planeta y el cuidado de nuestra salud.</p>
        </PillarSection>

        <PillarSection title="Alimentación Vegana Balanceada" ctaText="Comienza tu plan nutricional vegano hoy" ctaPageId="vegan-substitutes" onNavigate={onNavigate}>
          <p>Aprende a construir un plato vegano completo y nutritivo. Te damos las claves sobre proteínas, vitaminas y minerales esenciales, y cómo reemplazar fácilmente los productos tradicionales.</p>
        </PillarSection>
        
        <div className="my-8 py-4">
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" alt="Variedad de alimentos veganos frescos y coloridos" className="rounded-xl shadow-xl mx-auto w-full max-w-3xl object-cover h-64" />
        </div>

        <PillarSection title="Recetas Veganas Fáciles y Rápidas" ctaText="Prueba nuestra colección de recetas" ctaPageId="top-10-meals" onNavigate={onNavigate}>
          <p>¡Comer vegano es delicioso y sencillo! Explora nuestra selección de recetas rápidas para el día a día que te demostrarán que no necesitas ser un chef experto para disfrutar.</p>
        </PillarSection>

        <PillarSection title="Comunidad y Experiencias en Chile" ctaText="Participa en nuestra próxima actividad" ctaPageId="chilean-community" onNavigate={onNavigate}>
          <p>No estás solo en este viaje. Conecta con la vibrante comunidad vegana de Chile, descubre eventos, ferias y los mejores restaurantes para compartir y disfrutar.</p>
        </PillarSection>
        
        <div className="my-8 py-4">
          <img src="https://images.unsplash.com/photo-1571503336903-86c8db28e77a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" alt="Estantería con una selección de productos veganos del emporio, incluyendo leches vegetales y conservas" className="rounded-xl shadow-xl mx-auto w-full max-w-3xl object-cover h-64" />
        </div>

        <PillarSection title="Productos Destacados del Emporio" ctaText="Explora nuestros productos recomendados" ctaPageId="vegan-substitutes" onNavigate={onNavigate}>
          <p>Te ayudamos a llenar tu despensa. Conoce nuestros productos estrella, desde quesos que se derriten hasta carnes vegetales que te sorprenderán. Calidad y sabor garantizados.</p>
        </PillarSection>
        
        <PillarSection title="Impacto Positivo: Salud y Sostenibilidad" ctaText="Conoce cómo puedes cambiar el planeta" ctaPageId="health-benefits" onNavigate={onNavigate}>
          <p>Cada comida cuenta. Entiende cómo tus decisiones diarias como consumidor tienen un impacto tangible y positivo en tu bienestar, el de los animales y la salud del medio ambiente.</p>
        </PillarSection>

      </article>

      <section className="mt-16 pb-16 px-4">
        <h2 className="text-3xl font-bold text-center text-brand-text font-serif mb-8">Tips para una vida vegana</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {clusterPages.map((page) => (
              <ClusterCard key={page.id} page={page} onNavigate={onNavigate} />
            ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold font-serif text-brand-green-dark">Guía Rápida: Tu Inicio en el Veganismo</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-800 text-3xl leading-none">&times;</button>
              </div>
              <div className="prose max-w-none text-gray-700">
                <h4>¡Felicidades por dar el primer paso!</h4>
                <p>Esta guía está diseñada para que tu transición al veganismo sea sencilla, deliciosa y sostenible. No se trata de restricciones, sino de descubrir un mundo de nuevos sabores.</p>
                
                <h5>1. ¿Por qué Vegano? Revisa tus Motivos</h5>
                <p>Ya sea por los animales, el planeta o tu salud, tener claros tus motivos te ayudará a mantenerte enfocado. ¡Cada razón es válida!</p>

                <h5>2. La Despensa Básica Vegana</h5>
                <ul>
                  <li><strong>Legumbres:</strong> Lentejas, garbanzos, frijoles. Son tu fuente principal de proteína y fibra.</li>
                  <li><strong>Granos Enteros:</strong> Quinoa, arroz integral, avena. Te darán energía sostenida.</li>
                  <li><strong>Frutos Secos y Semillas:</strong> Almendras, nueces, chía, linaza. Llenos de grasas saludables.</li>
                  <li><strong>Leches Vegetales:</strong> De almendra, soya o avena. Perfectas para tu café o batidos.</li>
                  <li><strong>Tofu o Tempeh:</strong> Increíblemente versátiles para reemplazar la carne.</li>
                </ul>

                <h5>3. No te Compliques: Veganiza tus Platos Favoritos</h5>
                <p>¿Amas la lasaña? Prepárala con lentejas en vez de carne y queso vegano. ¿Fan de las hamburguesas? Prueba una de frijoles negros. Empezar con lo que ya conoces hace el cambio mucho más fácil.</p>
                
                <h5>4. Nutrientes Clave a Considerar</h5>
                <p>Una dieta vegana bien planificada es muy saludable, pero presta atención a:</p>
                <ul>
                  <li><strong>Vitamina B12:</strong> Esencial. Debes suplementarla, ya que no se encuentra en alimentos vegetales de forma fiable.</li>
                  <li><strong>Hierro:</strong> Combina fuentes de hierro (lentejas, espinacas) con Vitamina C (pimientos, naranjas) para mejorar su absorción.</li>
                  <li><strong>Calcio:</strong> Lo encuentras en leches vegetales fortificadas, tofu, brócoli y almendras.</li>
                </ul>
                
                <h5>5. Sé Amable Contigo Mismo</h5>
                <p>La transición es un proceso. Si cometes un error, no te castigues. Lo importante es la intención y el progreso, no la perfección. ¡Disfruta el viaje y explora todos los nuevos y deliciosos alimentos que el mundo vegetal tiene para ofrecer!</p>
              </div>
            </div>
          </div>
        </div>
      )}
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
      <img src={page.imageUrl} alt={page.title} className="w-full h-48 object-cover flex-shrink-0" />
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