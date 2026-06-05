import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { SidePanel } from './components/SidePanel';
import { FloatingContact } from './components/FloatingContact';

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activePanel, setActivePanel] = React.useState<string | null>(null);
  const [activeFilter, setActiveFilter] = React.useState<string>('all');
  const [tier3Open, setTier3Open] = React.useState(false);
  const [targetMilestone, setTargetMilestone] = React.useState<string | null>(null);

  const handleOpenPanel = (id: string) => {
    setActivePanel(id);
  };

  const handleClosePanel = () => {
    setActivePanel(null);
  };

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <main>
        <Hero onOpenPanel={handleOpenPanel} />
        
        <WorkSection 
          onOpenPanel={handleOpenPanel} 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter}
          tier3Open={tier3Open}
          setTier3Open={setTier3Open}
          onNavigateToMilestone={(id) => setTargetMilestone(id)}
        />
        
        <AboutSection 
          onOpenPanel={handleOpenPanel} 
          targetMilestone={targetMilestone}
          clearTargetMilestone={() => setTargetMilestone(null)}
        />
        
        <ContactSection />
      </main>

      <SidePanel activePanel={activePanel} onClose={handleClosePanel} />
      <FloatingContact />
    </>
  );
}
