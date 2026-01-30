import { Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Más de 1,000 personas transformadas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Pierde Peso Sin
              <span className="text-emerald-600"> Pasar Hambre</span> Ni Comer
              <span className="text-emerald-600"> Lo Mismo</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              90 recetas deliciosas y saludables que transformarán tu cuerpo en solo 30 días
            </p>

            <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8 border-2 border-emerald-200">
              <div className="flex items-end justify-center gap-3 mb-4">
                <span className="text-gray-400 line-through text-2xl">$47.00</span>
                <span className="text-5xl md:text-6xl font-black text-emerald-600">$5.90</span>
              </div>
              <div className="bg-red-500 text-white text-sm font-bold py-2 px-4 rounded-lg inline-block mb-4">
                ¡92% DE DESCUENTO HOY!
              </div>
              <p className="text-sm text-gray-500">Oferta especial de lanzamiento</p>
            </div>

            <button
              onClick={onCTAClick}
              className="w-full md:w-auto bg-gradient-to-r from-red-500 to-red-600 text-white text-xl font-bold py-5 px-12 rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl mb-4"
            >
              ¡QUIERO TRANSFORMAR MI CUERPO!
            </button>

            <p className="text-sm text-gray-500 flex items-center justify-center md:justify-start gap-2">
              <span className="text-emerald-500">✓</span>
              Acceso inmediato después del pago
            </p>
          </div>

          <div className="relative animate-slide-up">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-emerald-200">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sistema de Transformación 3x30 Ebook"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-red-500 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-xl transform rotate-12">
                <div className="text-center">
                  <div className="text-2xl font-black">92%</div>
                  <div className="text-xs font-bold">OFF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
