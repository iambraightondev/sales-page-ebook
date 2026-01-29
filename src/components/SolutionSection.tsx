import { Coffee, UtensilsCrossed, Moon } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Sistema de Transformación
            <span className="text-emerald-600"> 3x30</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            90 recetas organizadas estratégicamente para que nunca te aburras y siempre tengas opciones deliciosas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl border-2 border-amber-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
              <Coffee className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              30 Desayunos
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Empieza cada mañana con energía y sabor. Desde smoothies nutritivos hasta desayunos completos que te mantendrán satisfecho hasta el almuerzo.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Opciones dulces y saladas</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Preparación en 10-15 minutos</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Alto en proteínas y fibra</span>
              </li>
            </ul>
          </div>

          <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-xl border-2 border-emerald-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
              <UtensilsCrossed className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              30 Almuerzos
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Comidas completas y balanceadas que te darán la energía que necesitas sin la pesadez. Perfectas para llevártelas al trabajo o disfrutar en casa.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Platos completos y nutritivos</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Fáciles de preparar y transportar</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Balance perfecto de macros</span>
              </li>
            </ul>
          </div>

          <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl border-2 border-indigo-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
              <Moon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              30 Cenas
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Termina tu día con cenas ligeras pero satisfactorias que no arruinarán tu progreso. Duerme bien sabiendo que estás alimentando tu transformación.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Ligeras pero satisfactorias</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Favorecen el descanso nocturno</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Máxima quema de grasa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
          <p className="text-2xl font-bold text-gray-900 mb-2">
            = <span className="text-emerald-600">90 Recetas Únicas</span>
          </p>
          <p className="text-lg text-gray-600">
            Suficientes para 30 días completos sin repetir ni una sola vez
          </p>
        </div>
      </div>
    </section>
  );
}
