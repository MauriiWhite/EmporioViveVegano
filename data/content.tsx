import React from 'react';
import type { ClusterPageData } from '../types';

export const clusterPages: ClusterPageData[] = [
  {
    id: 'protein-sources',
    title: 'Guía Completa de Proteínas Veganas',
    shortDescription: 'Descubre las mejores fuentes de proteínas de origen vegetal para potenciar tu dieta.',
    imageUrl: 'https://images.unsplash.com/photo-1556191041-c2401936d851?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Una de las preguntas más comunes sobre el veganismo es: "¿De dónde obtienes tus proteínas?". Afortunadamente, el reino vegetal está lleno de excelentes fuentes de proteínas. Incorporar una variedad de estas en tu dieta asegura que obtengas todos los aminoácidos esenciales que tu cuerpo necesita.
        </p>
        <h3 className="text-2xl font-serif font-semibold text-brand-green-dark">Fuentes Principales de Proteínas</h3>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li><strong>Lentejas:</strong> Versátiles y económicas, las lentejas contienen alrededor de 18 gramos de proteína por taza cocida. Son excelentes en sopas, guisos y ensaladas.</li>
          <li><strong>Garbanzos y Frijoles:</strong> Un pilar en muchas cocinas, los frijoles y garbanzos ofrecen alrededor de 15 gramos de proteína por taza. Úsalos en chilis, hummus o como base para hamburguesas vegetales.</li>
          <li><strong>Tofu, Tempeh y Edamame:</strong> Derivados de la soja, estos alimentos son fuentes completas de proteínas. El tofu es increíblemente versátil, el tempeh tiene una textura más firme y un sabor a nuez, y el edamame es un snack delicioso y nutritivo.</li>
          <li><strong>Seitan:</strong> Hecho de gluten de trigo, el seitan tiene una textura sorprendentemente similar a la carne y contiene unos 25 gramos de proteína por cada 100 gramos.</li>
          <li><strong>Quinoa:</strong> A menudo llamada un "superalimento", la quinoa es una proteína completa que contiene alrededor de 8 gramos por taza cocida.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'breakfast-recipes',
    title: 'Recetas Fáciles de Desayunos Veganos',
    shortDescription: 'Comienza tu día con energía con estas deliciosas y sencillas ideas para el desayuno.',
    imageUrl: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          El desayuno es la comida más importante del día, y ser vegano no significa que tengas que renunciar a tus favoritos. Aquí tienes algunas recetas fáciles y deliciosas para empezar bien la mañana.
        </p>
        
        <div className="my-8 p-6 bg-brand-cream rounded-lg text-center shadow-inner">
            <h4 className="font-bold text-xl mb-3 text-brand-green-dark font-serif">¡Mira esta receta en acción!</h4>
            <p className="mb-4 text-brand-text">
                Descubre cómo preparar un desayuno vegano rápido y saludable con este video corto.
            </p>
            <a 
                href="https://www.youtube.com/shorts/kxjhc-LSw1s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-brand-green hover:bg-brand-green-dark text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                aria-label="Ver video de receta de desayuno vegano en YouTube"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Ver Video en YouTube
            </a>
        </div>

        <h3 className="text-2xl font-serif font-semibold text-brand-green-dark">Nuestras Recetas Favoritas</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-xl">Tofu Revuelto</h4>
            <p>Una alternativa fantástica a los huevos revueltos. Simplemente desmenuza un bloque de tofu firme y saltéalo con tus verduras favoritas, cúrcuma (para el color), sal negra (kala namak, para el sabor a huevo) y levadura nutricional.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl">Avena Cremosa</h4>
            <p>Cocina avena con leche vegetal (almendra, soja o avena) y añade tus toppings preferidos: bayas frescas, plátano en rodajas, nueces, semillas de chía y un chorrito de sirope de arce.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl">Batido Verde Energizante</h4>
            <p>Mezcla en la batidora un puñado de espinacas, medio plátano congelado, media taza de mango congelado, una cucharada de proteína en polvo vegana y leche de almendras. ¡Nutrición instantánea!</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'meal-prep',
    title: 'Meal Prep Vegano para Principiantes',
    shortDescription: 'Ahorra tiempo y come sano durante la semana con nuestra guía de preparación de comidas.',
    imageUrl: 'https://images.unsplash.com/photo-1594313220364-d62831d338a8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          La preparación de comidas (meal prep) es una herramienta clave para mantener una dieta vegana saludable y sin estrés. Dedicar unas horas el fin de semana puede ahorrarte mucho tiempo y esfuerzo durante los días de semana ocupados.
        </p>
        <h3 className="text-2xl font-serif font-semibold text-brand-green-dark">Pasos para un Meal Prep Exitoso</h3>
        <ol className="list-decimal list-inside space-y-3 pl-4">
          <li><strong>Planifica tus comidas:</strong> Decide qué desayunarás, almorzarás y cenarás durante la semana. No tiene por qué ser diferente cada día.</li>
          <li><strong>Crea una lista de compras:</strong> Basado en tu plan, haz una lista de todos los ingredientes que necesitas.</li>
          <li><strong>Prepara los componentes básicos:</strong> Cocina una tanda grande de granos (arroz integral, quinoa), asa una bandeja de verduras variadas (brócoli, pimientos, batatas) y prepara una fuente de proteínas (lentejas cocidas, tofu al horno).</li>
          <li><strong>Monta tus comidas:</strong> Almacena los componentes en recipientes herméticos. Puedes montar ensaladas en frascos, crear boles de granos o simplemente tener todo listo para mezclar y calentar.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'vegan-cheese',
    title: 'Los Mejores Quesos Veganos',
    shortDescription: 'Explora el delicioso mundo de los quesos a base de plantas, tanto comprados como caseros.',
    imageUrl: 'https://images.unsplash.com/photo-1618585165934-587b1a8d0537?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          ¡Sí, puedes disfrutar de un queso delicioso con una dieta vegana! El mercado de quesos veganos ha explotado en los últimos años, ofreciendo opciones que se derriten, se estiran y tienen un sabor increíble.
        </p>
        <h3 className="text-2xl font-serif font-semibold text-brand-green-dark">Opciones Populares</h3>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li><strong>A base de anacardos:</strong> Estos quesos suelen ser cremosos y ricos, perfectos para untar o para crear salsas de queso.</li>
          <li><strong>A base de aceite de coco:</strong> Muchas marcas usan aceite de coco para crear quesos que se derriten bien, ideales para pizza o sándwiches a la parrilla.</li>
          <li><strong>A base de tofu:</strong> El tofu puede usarse para crear alternativas a quesos blandos como el ricotta o el queso feta.</li>
        </ul>
        <h3 className="text-2xl font-serif font-semibold text-brand-green-dark">Receta Rápida: "Parmesano" Vegano</h3>
        <p>Tritura en un procesador de alimentos 1 taza de anacardos crudos, 4 cucharadas de levadura nutricional, 1/2 cucharadita de ajo en polvo y 1/2 cucharadita de sal. ¡Listo! Espolvoréalo sobre pasta, ensaladas o palomitas de maíz.</p>
      </div>
    ),
  },
  {
    id: 'vegan-desserts',
    title: 'Postres Veganos que No Creerás que lo Son',
    shortDescription: 'Satisface tu lado dulce con estas recetas de postres decadentes y 100% vegetales.',
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Ser vegano no significa renunciar a los postres. De hecho, muchos postres veganos son tan ricos y decadentes como sus contrapartes tradicionales. ¡Aquí tienes algunas ideas para demostrarlo!
        </p>
        <h3 className="text-2xl font-serif font-semibold text-brand-green-dark">Recetas para Probar</h3>
        <div className="space-y-4">
            <div>
                <h4 className="font-bold text-xl">Mousse de Chocolate y Aguacate</h4>
                <p>Mezcla en una batidora un aguacate maduro, 1/4 de taza de cacao en polvo, 1/4 de taza de sirope de arce y un chorrito de leche vegetal hasta que esté suave y cremoso. ¡Nadie adivinará el ingrediente secreto!</p>
            </div>
            <div>
                <h4 className="font-bold text-xl">Brownies de Frijoles Negros</h4>
                <p>Sí, has leído bien. Los frijoles negros crean una base increíblemente densa y chocolatosa para los brownies. Simplemente mezcla una lata de frijoles negros (enjuagados), cacao en polvo, avena, edulcorante y un poco de aceite.</p>
            </div>
            <div>
                <h4 className="font-bold text-xl">"Nice Cream" de Plátano</h4>
                <p>El postre vegano más fácil. Congela plátanos maduros en rodajas y luego mézclalos en un procesador de alimentos o batidora de alta potencia hasta que tengan la consistencia de un helado suave. Puedes añadir cacao, bayas o mantequilla de cacahuete.</p>
            </div>
        </div>
      </div>
    ),
  },
  {
    id: 'ebook-guide',
    title: 'Guía de Inicio a la Comida Vegana (E-book)',
    shortDescription: 'Tu guía esencial para empezar una dieta vegana.',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          ¡Bienvenido a tu aventura vegana! Adoptar una dieta basada en plantas es un viaje emocionante y gratificante para tu salud, el planeta y los animales. Esta guía está diseñada para darte las herramientas y la confianza para empezar.
        </p>
        <h3 className="text-2xl font-serif font-semibold text-brand-green-dark">¿Qué Comen los Veganos?</h3>
        <p>Lejos de ser restrictiva, una dieta vegana es abundante y diversa. Se centra en:</p>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li><strong>Frutas y Verduras:</strong> La base de cualquier dieta saludable. ¡Come el arcoíris!</li>
          <li><strong>Legumbres:</strong> Frijoles, lentejas, garbanzos y guisantes. Son fantásticas fuentes de proteína y fibra.</li>
          <li><strong>Granos Enteros:</strong> Avena, quinoa, arroz integral, pan y pasta integrales. Proporcionan energía sostenida.</li>
          <li><strong>Nueces y Semillas:</strong> Almendras, nueces, chía, lino, etc. Llenas de grasas saludables, proteínas y micronutrientes.</li>
          <li><strong>Proteínas Vegetales:</strong> Tofu, tempeh, seitan y edamame son opciones versátiles y nutritivas.</li>
        </ul>
        <h3 className="text-2xl font-serif font-semibold text-brand-green-dark">Nutrientes Clave a Considerar</h3>
         <p>Una dieta vegana bien planificada puede proporcionar todos los nutrientes que necesitas. Presta especial atención a:</p>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li><strong>Vitamina B12:</strong> Esencial para la función nerviosa. Se recomienda un suplemento o alimentos fortificados (leches vegetales, levadura nutricional).</li>
          <li><strong>Hierro:</strong> Se encuentra en lentejas, espinacas y tofu. Combínalo con vitamina C (cítricos, pimientos) para mejorar su absorción.</li>
          <li><strong>Calcio:</strong> Abundante en verduras de hoja verde (col rizada), tofu fortificado, y leches vegetales enriquecidas.</li>
          <li><strong>Omega-3:</strong> Incorpora semillas de chía, lino molido y nueces en tu dieta diaria.</li>
        </ul>
         <h3 className="text-2xl font-serif font-semibold text-brand-green-dark">Consejos para Empezar</h3>
        <ol className="list-decimal list-inside space-y-3 pl-4">
          <li><strong>Ve a tu propio ritmo:</strong> No tienes que cambiar todo de la noche a la mañana. Prueba con un "Lunes sin carne" o veganiza una comida al día.</li>
          <li><strong>Encuentra tus sustitutos favoritos:</strong> Experimenta con diferentes leches vegetales, quesos veganos y alternativas a la carne para encontrar las que más te gusten.</li>
          <li><strong>¡Diviértete en la cocina!:</strong> Descubre nuevos blogs de recetas y prueba platos de diferentes culturas que son naturalmente veganos.</li>
          <li><strong>Lee las etiquetas:</strong> Te sorprenderá cuántos productos son "accidentalmente veganos". Busca alérgenos como leche y huevos.</li>
        </ol>
      </div>
    ),
  }
];