
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PillarPage from './pages/PillarPage';
import ClusterPage from './pages/ClusterPage';
import { clusterPages } from './data/content';
import type { ClusterPageData } from './types';

const App: React.FC = () => {
  const [currentPageId, setCurrentPageId] = useState<string | null>(null);

  const navigateToCluster = (pageId: string) => {
    setCurrentPageId(pageId);
    window.scrollTo(0, 0);
  };

  const navigateToPillar = () => {
    setCurrentPageId(null);
    window.scrollTo(0, 0);
  };

  const currentClusterData = clusterPages.find(p => p.id === currentPageId);

  return (
    <div className="bg-white min-h-screen font-sans text-brand-text">
      <Header onHomeClick={navigateToPillar} />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {currentClusterData ? (
          <ClusterPage data={currentClusterData} onBack={navigateToPillar} />
        ) : (
          <PillarPage onNavigate={navigateToCluster} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
