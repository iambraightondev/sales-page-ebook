import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import EbookMockupSection from './components/EbookMockupSection';
import BonusesSection from './components/BonusesSection';
import FAQSection from './components/FAQSection';
import GuaranteeSection from './components/GuaranteeSection';
import StickyButton from './components/StickyButton';

function App() {
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open('https://pay.hotmart.com/M104165239G?off=4vlh46ij&checkoutMode=10', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onCTAClick={handleCTAClick} />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <EbookMockupSection />
      <BonusesSection />
      <PricingSection onCTAClick={handleCTAClick} />
      <GuaranteeSection />
      <FAQSection />

      <StickyButton show={showStickyButton} onClick={handleCTAClick} />
    </div>
  );
}

export default App;
