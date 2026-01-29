import { Shield, RotateCcw, Lock } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-emerald-400">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mb-6">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Garantía de Satisfacción
              <span className="text-emerald-600"> 7 Días</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tu inversión está 100% protegida. Sin riesgos, sin preguntas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">7 Días de Prueba</h3>
              <p className="text-gray-600 text-sm">
                Una semana completa para probar el sistema sin compromiso
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">100% Reembolso</h3>
              <p className="text-gray-600 text-sm">
                Si no estás satisfecho, te devolvemos todo tu dinero
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sin Preguntas</h3>
              <p className="text-gray-600 text-sm">
                No necesitas dar explicaciones. Tu satisfacción es lo primero
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white text-center">
            <p className="text-xl md:text-2xl font-bold mb-4">
              ¡Pruébalo Sin Riesgo Durante 7 Días!
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Si después de usar el sistema no ves resultados o simplemente no te gusta,
              envíanos un email y te devolvemos tu dinero. Es así de simple.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              "La única forma de que pierdas es NO intentándolo"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
