import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import EbookMockupSection from './components/EbookMockupSection';
import BonusesSection from './components/BonusesSection';
import CountdownTimer from './components/CountdownTimer';
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
    window.open('https://pay.hotmart.com/A103991603A?checkoutMode=10', '_blank');
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

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¡Transforma Tu Cuerpo en 30 Días!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Haz clic en el botón para acceder al checkout seguro y comenzar tu transformación hoy mismo.
          </p>

          <div className="mb-8 flex justify-center">
            <CountdownTimer />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-emerald-500">
            <p className="text-sm text-gray-500 mb-4">
              El enlace de checkout aparecerá aquí
            </p>
            <button
              onClick={handleCTAClick}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white text-xl font-bold py-6 px-12 rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              COMPRAR AHORA POR $3.90
            </button>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <span className="text-emerald-500">🔒</span> Pago Seguro
              </span>
              <span className="flex items-center gap-1">
                <span className="text-emerald-500">✓</span> Acceso Inmediato
              </span>
              <span className="flex items-center gap-1">
                <span className="text-emerald-500">💯</span> Garantía 7 días
              </span>
            </div>
          </div>
        </div>
      </section>

      <StickyButton show={showStickyButton} onClick={handleCTAClick} />
    </div>
  );
}

export default App;
