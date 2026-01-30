import { CheckCircle2 } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: '90 Opciones Diferentes',
      description: 'Nunca más te aburrirás comiendo lo mismo. Variedad infinita para mantener tu motivación al 100%',
    },
    {
      title: 'Fácil y Rápido de Preparar',
      description: 'Recetas simples con ingredientes comunes. No necesitas ser chef ni invertir horas en la cocina',
    },
    {
      title: 'Sistema Comprobado',
      description: 'Más de 1,000 personas han transformado su cuerpo siguiendo estas mismas recetas',
    },
    {
      title: 'Ingredientes Económicos',
      description: 'No necesitas gastar una fortuna en comida cara. Todo con ingredientes accesibles y económicos',
    },
    {
      title: 'Resultados Visibles en 7 Días',
      description: 'Notarás cambios en tu energía y tu ropa te quedará más suelta desde la primera semana',
    },
    {
      title: 'Acceso Instantáneo Digital',
      description: 'Descarga el ebook inmediatamente. Empieza hoy mismo tu transformación',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué Hace Especial Este Sistema?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para transformar tu cuerpo en 30 días
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-1 md:p-1 shadow-2xl overflow-hidden">
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[calc(1.5rem-4px)] text-center text-white border border-white/10">

            {/* Icono Flotante o Emoji */}
            <div className="mb-6 flex justify-center gap-4 items-center">
              <span className="text-4xl animate-bounce">☕</span>
              <span className="text-2xl font-light opacity-50">&gt;</span>
              <span className="text-5xl font-bold text-yellow-400">🚀</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              ¿Invertirías <span className="underline decoration-yellow-400">un café</span> <br className="hidden md:block" /> en cambiar tu vida?
            </h3>

            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl font-medium text-emerald-100">
                Mientras un café se termina en 10 minutos, <br />
                este sistema te servirá <span className="text-white font-bold italic text-2xl md:text-3xl block mt-2">PARA SIEMPRE.</span>
              </p>

              {/* Badge de Precio Comparativo */}
              <div className="inline-flex flex-col md:flex-row items-center justify-center bg-black/20 rounded-2xl px-6 py-4 border border-white/20 gap-4">
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest opacity-70">Valor Real</p>
                  <p className="text-2xl line-through text-red-300 font-bold">$47.00 USD</p>
                </div>

                <div className="hidden md:block h-10 w-px bg-white/20"></div>

                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-yellow-400 font-bold">Inversión Hoy</p>
                  <p className="text-4xl font-black text-white">$5.90 USD</p>
                </div>
              </div>

              <p className="text-sm opacity-80 italic">
                * Literalmente menos de lo que cuesta un Latte en Starbucks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
