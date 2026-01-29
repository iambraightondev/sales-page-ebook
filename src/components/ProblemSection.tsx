import { X, Frown, TrendingDown } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Por Qué Las Dietas Tradicionales
            <span className="text-red-500"> Siempre Fallan?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La respuesta es más simple de lo que piensas...
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100 transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <X className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Comida Aburrida
            </h3>
            <p className="text-gray-600 text-center">
              Comer pechuga de pollo y brócoli todos los días te hace abandonar en menos de una semana
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100 transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Frown className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Pasas Hambre
            </h3>
            <p className="text-gray-600 text-center">
              Las porciones pequeñas y restrictivas te dejan con hambre todo el día y sin energía
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100 transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TrendingDown className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Cero Variedad
            </h3>
            <p className="text-gray-600 text-center">
              Repetir las mismas 5 recetas durante meses destruye tu motivación y te hace renunciar
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            ¡Pero Hay Una Solución Mejor!
          </h3>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Imagina tener <strong>90 recetas diferentes</strong> para disfrutar cada día sin repetir,
            sin aburrirte y sin pasar hambre mientras pierdes peso de forma natural
          </p>
        </div>
      </div>
    </section>
  );
}
