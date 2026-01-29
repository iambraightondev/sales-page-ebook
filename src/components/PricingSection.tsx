import { Check, X, Zap } from 'lucide-react';

interface PricingSectionProps {
  onCTAClick: () => void;
}

export default function PricingSection({ onCTAClick }: PricingSectionProps) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Oferta Especial de Lanzamiento
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Esta es una oportunidad única. El precio subirá a $47 muy pronto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-3xl p-8 border-2 border-gray-700 relative">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                Precio Regular
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 mt-4">Sin Descuento</h3>

            <div className="mb-8">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-black text-gray-400">$47</span>
                <span className="text-gray-500 mb-2">USD</span>
              </div>
              <p className="text-gray-400">Precio que pagarías normalmente</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Sin descuento especial</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Precio puede seguir subiendo</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Oferta no disponible</span>
              </div>
            </div>

            <button
              disabled
              className="w-full bg-gray-700 text-gray-500 text-lg font-bold py-4 px-8 rounded-xl cursor-not-allowed"
            >
              NO DISPONIBLE
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 border-4 border-yellow-400 relative transform md:scale-105 shadow-2xl">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <div className="bg-red-500 text-white px-6 py-3 rounded-full text-sm font-bold animate-pulse flex items-center gap-2">
                <Zap className="w-4 h-4" />
                OFERTA LIMITADA
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 mt-4">¡Precio de Lanzamiento!</h3>

            <div className="mb-8">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-2xl text-white line-through opacity-70">$47</span>
                <span className="text-6xl font-black text-white">$3.90</span>
              </div>
              <div className="bg-yellow-400 text-gray-900 inline-block px-4 py-2 rounded-lg font-bold text-lg mb-2">
                ¡AHORRA $43.10! (92% OFF)
              </div>
              <p className="text-white text-sm opacity-90">Oferta válida solo hoy</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">90 recetas completas (3x30)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Sistema de transformación 30 días</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Acceso instantáneo y vitalicio</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Garantía de satisfacción 7 días</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Soporte incluido</span>
              </div>
            </div>

            <button
              onClick={onCTAClick}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white text-xl font-bold py-5 px-8 rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl mb-4"
            >
              ¡SÍ, QUIERO MI DESCUENTO!
            </button>

            <div className="flex items-center justify-center gap-4 text-sm text-white">
              <span className="flex items-center gap-1">
                <span>🔒</span> Pago 100% Seguro
              </span>
              <span className="flex items-center gap-1">
                <span>⚡</span> Acceso Inmediato
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-red-400 font-bold text-lg mb-4 animate-pulse">
            ⚠️ ATENCIÓN: Esta oferta puede expirar en cualquier momento
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Una vez alcancemos nuestro límite de copias con descuento, el precio volverá a $47.
            No pierdas esta oportunidad única de obtener el sistema completo por menos del precio de un café.
          </p>
        </div>
      </div>
    </section>
  );
}
