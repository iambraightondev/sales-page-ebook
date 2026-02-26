import { Gift, Zap } from 'lucide-react';

export default function BonusesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Gift className="w-5 h-5" />
              BONOS EXCLUSIVOS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recibe 2 Bonos Especiales al Comprar Hoy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Valorados en $24, estos bonos complementan perfectamente tu sistema de transformación
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* BONO #1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-emerald-200 hover:border-emerald-500 transition">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4">
                <div className="flex items-center gap-2 text-white">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-bold">BONO #1 — TOTALMENTE GRATIS</span>
                </div>
              </div>

              <div className="p-8">
                {/* CONTENEDOR DE IMAGEN MOCKUP BONO 1 */}
                <div className="relative aspect-square max-w-xs mx-auto mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src="/mockup-snacks.png"
                    alt="Bono 30 Snacks Saludables"
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  Snacks Saludables
                </h3>

                <p className="text-gray-700 text-center mb-6 italic">
                  "Satisface tus antojos sin derribar tu progreso"
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Opciones para todo momento del día
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    100% naturales y sin azúcar refinada
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Listos en menos de 5 minutos
                  </li>
                </ul>

                <div className="bg-emerald-50 rounded-lg p-3 text-center">
                  <p className="text-emerald-700 font-bold">Valor Real: $12.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* BONO #2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-emerald-200 hover:border-emerald-500 transition">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4">
                <div className="flex items-center gap-2 text-white">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-bold">BONO #2 — TOTALMENTE GRATIS</span>
                </div>
              </div>

              <div className="p-8">
                {/* CONTENEDOR DE IMAGEN MOCKUP BONO 2 */}
                <div className="relative aspect-square max-w-xs mx-auto mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src="/mockup-ensaladas.png"
                    alt="Bono 30 Ensaladas Gourmet"
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  Ensaladas Gourmet
                </h3>

                <p className="text-gray-700 text-center mb-6 italic">
                  "El acompañamiento perfecto para quemar grasa"
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Combinaciones gourmet deliciosas
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Aderezos fit hechos en casa
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Ingredientes económicos de temporada
                  </li>
                </ul>

                <div className="bg-emerald-50 rounded-lg p-3 text-center">
                  <p className="text-emerald-700 font-bold">Valor Real: $12.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center p-8 bg-gradient-to-b from-white to-red-50 border-2 border-red-400 rounded-2xl shadow-xl relative overflow-hidden">
          {/* Etiqueta de "OFERTA" en la esquina (Opcional) */}
          <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Regalo Exclusivo
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-600 text-lg font-medium">
              Valor total de los bonos:
              <span className="ml-2 text-gray-400 line-through decoration-red-500 decoration-2">
                $24.00 USD
              </span>
            </p>

            <div className="bg-yellow-300 px-6 py-2 rounded-full transform -rotate-1 shadow-sm border border-yellow-400">
              <p className="text-3xl md:text-4xl font-black text-red-600 uppercase tracking-tighter">
                ¡Hoy es GRATIS!
              </p>
            </div>

            <p className="mt-4 text-gray-800 text-lg leading-tight">
              Incluido con tu acceso único de <br />
              <span className="text-3xl font-black text-emerald-600">$3.97 USD</span>
            </p>

            <p className="text-xs text-gray-500 mt-2 italic">
              * Oferta válida solo por tiempo limitado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}