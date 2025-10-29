import React from 'react';
import type { ClusterPageData } from '../types';

export const clusterPages: ClusterPageData[] = [
  {
    id: 'top-10-meals',
    title: 'Top 10 Comidas Veganas Rápidas para el Día a Día',
    shortDescription: 'Descubre recetas deliciosas y fáciles que puedes preparar en menos de 30 minutos.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop',
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">Adoptar una dieta vegana no significa pasar horas en la cocina. La clave está en tener a mano recetas versátiles y rápidas que te solucionen cualquier comida. Aquí tienes 10 ideas para inspirarte y demostrar que comer a base de plantas es delicioso, rápido y fácil.</p>
        
        <ol className="list-decimal list-inside space-y-6">
          <li><strong>Tacos de Lentejas:</strong> Sofríe cebolla y ajo, añade lentejas cocidas y tu sazón para tacos favorito. Sirve en tortillas de maíz con palta, cilantro y limón. ¡Listos en 15 minutos!</li>
          <li><strong>Pasta al Pesto de Palta:</strong> Mientras se cuece tu pasta, licúa una palta, un diente de ajo, un puñado de albahaca, jugo de limón y un chorrito de aceite de oliva. Mezcla todo y disfruta de una pasta cremosa al instante.</li>
          <li><strong>Sándwich de "Ensalada de Huevo" de Garbanzos:</strong> Muele garbanzos cocidos con un tenedor. Mézclalos con mayonesa vegana, mostaza, apio picado y una pizca de sal negra (kala namak) para el sabor a huevo. Sírvelo en pan de molde.</li>
          <li><strong>Salteado de Tofu y Vegetales:</strong> Corta un bloque de tofu firme en cubos y dóralo en un wok o sartén. Añade tus vegetales favoritos (brócoli, pimiento, zanahoria) y una salsa a base de soya, jengibre y ajo. Sírvelo con arroz.</li>
          <li><strong>Curry de Garbanzos y Espinacas:</strong> Sofríe cebolla, ajo y jengibre. Añade una lata de tomates triturados, leche de coco, garbanzos y curry en polvo. Cocina por 10 minutos y al final agrega un puñado de espinacas hasta que se ablanden.</li>
          <li><strong>Bowl de Quinoa Mediterráneo:</strong> Combina quinoa cocida con pepino, tomates cherry, aceitunas negras, y garbanzos. Aliña con aceite de oliva, limón y orégano.</li>
          <li><strong>Hamburguesas de Frijoles Negros:</strong> Procesa una lata de frijoles negros con avena, cebolla en polvo, ajo en polvo y comino. Forma las hamburguesas y cocínalas en una sartén por ambos lados.</li>
          <li><strong>Pizza Rápida en Pan Pita:</strong> Usa un pan pita como base. Cúbrelo con salsa de tomate, queso vegano y tus toppings preferidos. Llévalo al horno o a la freidora de aire hasta que el queso se derrita.</li>
          <li><strong>Batido Verde Energético:</strong> Licúa espinacas, plátano congelado, leche vegetal, una cucharada de mantequilla de maní y semillas de chía. Un desayuno o snack completo en 2 minutos.</li>
          <li><strong>Avena Trasnochada (Overnight Oats):</strong> En un frasco, mezcla avena, leche vegetal, semillas de chía y tu endulzante favorito. Déjalo en el refrigerador durante la noche. Por la mañana, solo tienes que añadir fruta fresca y disfrutar.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'vegan-substitutes',
    title: 'Guía de Sustitutos Veganos para Productos Tradicionales',
    shortDescription: 'Aprende a reemplazar lácteos, huevos y carne con alternativas vegetales fáciles de encontrar.',
    imageUrl: 'https://images.unsplash.com/photo-1622504381489-f3a6a3b2b1b1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">Hacer la transición al veganismo es mucho más fácil cuando sabes cómo reemplazar los ingredientes de origen animal en tus recetas favoritas. ¡Hoy en día existen alternativas deliciosas para casi todo!</p>
        
        <div>
          <h3 className="text-2xl font-serif font-semibold text-brand-green-dark mb-3">Sustitutos para Lácteos</h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Leche:</strong> Encontrarás leches de soya, almendras, avena, coco o arroz. La de avena es ideal para el café por su cremosidad, mientras que la de almendras es más ligera.</li>
            <li><strong>Queso:</strong> Hay quesos a base de frutos secos (como anacardos), aceite de coco o soya. Son perfectos para derretir en pizzas, para sándwiches o para tablas de picoteo.</li>
            <li><strong>Yogur y Crema:</strong> Busca yogures de soya, coco o almendras. Para cocinar, la crema de coco es un reemplazo excelente de la crema de leche.</li>
            <li><strong>Mantequilla:</strong> Existen margarinas y mantequillas veganas hechas a base de aceites vegetales que funcionan perfectamente para untar y hornear.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-semibold text-brand-green-dark mb-3">Sustitutos para Huevos</h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Para hornear (como aglutinante):</strong> Un "huevo de linaza" (1 cda. de linaza molida + 3 cdas. de agua, reposado 5 min) o puré de plátano son excelentes.</li>
            <li><strong>Para revueltos:</strong> El tofu firme desmenuzado y salteado con cúrcuma y sal negra (kala namak) es la alternativa clásica y deliciosa al huevo revuelto.</li>
            <li><strong>Mayonesa:</strong> Las mayonesas veganas (a base de soya o garbanzos) son indistinguibles de la tradicional.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-serif font-semibold text-brand-green-dark mb-3">Sustitutos para Carne</h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Carne Molida:</strong> Las lentejas, los champiñones picados o la soya texturizada son bases perfectas para boloñesas, lasañas o rellenos de empanadas.</li>
            <li><strong>Pollo:</strong> El seitán (gluten de trigo) tiene una textura fibrosa muy similar. El jackfruit (yaca) desmenuzado es ideal para preparaciones tipo "mechada".</li>
            <li><strong>Hamburguesas y Salchichas:</strong> El mercado ofrece una variedad increíble de hamburguesas y embutidos a base de legumbres, champiñones o proteínas vegetales.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'health-benefits',
    title: 'Beneficios para la Salud y el Medio Ambiente',
    shortDescription: 'Entiende cómo una dieta basada en plantas puede mejorar tu bienestar y reducir tu impacto ecológico.',
    imageUrl: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop',
    content: (
       <div className="space-y-6">
        <p className="text-lg leading-relaxed">Adoptar un estilo de vida vegano es una de las decisiones más poderosas que puedes tomar para tu salud personal y la salud del planeta. Los beneficios son profundos y están respaldados por una creciente cantidad de evidencia científica.</p>
        
        <div>
          <h3 className="text-2xl font-serif font-semibold text-brand-green-dark mb-3">Beneficios para tu Salud</h3>
          <p className="mb-4">Una dieta vegana bien planificada está asociada con un menor riesgo de desarrollar enfermedades crónicas. Al centrarse en frutas, verduras, granos integrales y legumbres, naturalmente consumes más fibra, vitaminas y antioxidantes, y menos grasas saturadas y colesterol.</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Salud Cardiovascular:</strong> Se ha demostrado que las dietas basadas en plantas reducen la presión arterial y los niveles de colesterol, disminuyendo significativamente el riesgo de enfermedades cardíacas.</li>
            <li><strong>Prevención de Diabetes Tipo 2:</strong> Ayudan a mejorar la sensibilidad a la insulina y a mantener un peso corporal saludable, factores clave en la prevención y manejo de la diabetes.</li>
            <li><strong>Menor Riesgo de Ciertos Cánceres:</strong> El alto consumo de fibra y fitonutrientes de los vegetales se ha vinculado a una menor incidencia de cánceres, especialmente el colorrectal.</li>
            <li><strong>Peso Saludable:</strong> Las dietas veganas tienden a ser menos densas en calorías, lo que facilita el mantenimiento de un índice de masa corporal (IMC) saludable.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-semibold text-brand-green-dark mb-3">Beneficios para el Planeta</h3>
          <p className="mb-4">Tu elección en el plato tiene un impacto global. La industria ganadera es uno de los mayores contribuyentes a los problemas ambientales más urgentes de nuestro tiempo.</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Reducción de la Huella de Carbono:</strong> La producción de carne y lácteos genera enormes cantidades de gases de efecto invernadero. Un estudio de la Universidad de Oxford concluyó que eliminar estos productos de tu dieta puede reducir tu huella de carbono alimentaria hasta en un 73%.</li>
            <li><strong>Ahorro de Agua:</strong> Se necesita una cantidad de agua exponencialmente mayor para producir un kilo de carne que un kilo de vegetales o granos.</li>
            <li><strong>Protección de la Tierra y los Océanos:</strong> La ganadería es la principal causa de deforestación en el mundo, especialmente en el Amazonas. Además, la sobrepesca y la acuicultura están devastando los ecosistemas marinos.</li>
          </ul>
        </div>
      </div>
    ),
  },
   {
    id: 'chilean-community',
    title: 'Comunidad y Experiencias Veganas en Chile',
    shortDescription: 'Conecta con la vibrante escena vegana de Chile: eventos, restaurantes y grupos.',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop',
    content: (
       <div className="space-y-6">
        <p className="text-lg leading-relaxed">¡Ser vegano en Chile es más fácil y entretenido que nunca! Existe una comunidad creciente y solidaria, llena de eventos, ferias y restaurantes que hacen de este viaje una experiencia social y deliciosa.</p>
        
        <div>
          <h3 className="text-2xl font-serif font-semibold text-brand-green-dark mb-3">Encuentra tu Tribu</h3>
          <p className="mb-4">Conectar con otras personas que comparten tus valores es fundamental. Busca grupos en redes sociales como "Veganos y Vegetarianos en Chile" donde podrás encontrar consejos, recetas y apoyo. Estos espacios son ideales para resolver dudas y sentirte acompañado.</p>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-semibold text-brand-green-dark mb-3">Ferias y Eventos Veganos</h3>
          <p className="mb-4">Mantente atento a las ferias veganas que se organizan regularmente en ciudades como Santiago, Valparaíso y Concepción. Eventos como la "Feria Vegourmet" son una oportunidad fantástica para descubrir nuevos emprendimientos, probar productos deliciosos y conocer a los productores locales. ¡Son el panorama perfecto para un fin de semana!</p>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-semibold text-brand-green-dark mb-3">Gastronomía Vegana en Chile</h3>
          <p className="mb-4">La oferta de restaurantes veganos ha explotado. Desde comida rápida y sándwiches gourmet hasta alta cocina, hay opciones para todos los gustos y bolsillos. Barrios como Lastarria y Providencia en Santiago son polos gastronómicos con múltiples alternativas. No dudes en usar aplicaciones como "HappyCow" para encontrar lugares veganos cerca de ti, donde sea que estés en Chile.</p>
        </div>
      </div>
    ),
  },
];