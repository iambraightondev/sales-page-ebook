import { Award, CheckCircle } from 'lucide-react';

export default function EbookMockupSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LADO DE LA IMAGEN (MOCKUP) */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Efecto de resplandor al fondo (opcional pero se ve muy bien) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              {/* CONTENEDOR DE LA IMAGEN */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                <img 
                  src="/mockup-reiniciatucuerpo.png"
                  alt="Mockup del Sistema de Transformación 3x30" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* LADO DEL TEXTO */}
          <div className="order-1 md:order-2">
            <div className="mb-6">
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                SISTEMA COMPLETO 90 RECETAS
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Reinicia tu Cuerpo: Sistema de 30 Días
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              90 recetas deliciosas y saludables diseñadas estratégicamente para que quemes grasa durante 30 días sin repetir un solo plato.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">30 Desayunos Nutritivos</p>
                  <p className="text-gray-600 text-sm">Energía completa para comenzar tu día</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">30 Almuerzos Satisfacientes</p>
                  <p className="text-gray-600 text-sm">Nutrición completa a mitad del día</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">30 Cenas Deliciosas</p>
                  <p className="text-gray-600 text-sm">Cierra cada día con sabor sin culpa</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Información Nutritiva Completa</p>
                  <p className="text-gray-700 text-sm">Cada receta incluye calorías, proteína, carbohidratos y grasas</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}