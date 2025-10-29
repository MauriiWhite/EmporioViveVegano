
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green-dark mt-16">
      <div className="container mx-auto px-4 py-6 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Emporio vive vegano. Todos los derechos reservados.</p>
        <p className="text-sm text-green-200 mt-1">Una guía para una vida basada en plantas.</p>
      </div>
    </footer>
  );
};

export default Footer;