import { Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="text-center md:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Acceso inmediato al sistema completo</span>
            </div>

            {/* TÍTULO SOLICITADO */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tighter">
              Pierde peso <span className="text-emerald-600">Sin Pasar Hambre</span> <br className="hidden md:block" />
              ni Dejar de <span className="text-emerald-600">Comer Rico</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Descubre las 90 recetas del sistema <strong>Reinicia tu Cuerpo</strong> y transforma tu salud en los próximos 30 días.
            </p>

            <div className="space-y-4">
              {[
                "Plan paso a paso de 30 días",
                "90 recetas deliciosas y fáciles",
                "Guía para comer fuera sin culpa",
                "Bonos exclusivos incluidos hoy"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center md:justify-start text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CONTENEDOR CON LA IMAGEN */}
          <div className="relative animate-slide-up">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-3xl blur-2xl opacity-20"></div>

            <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-3 border-2 border-emerald-100 transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/img-princ.png"
                alt="Comida saludable y deliciosa"
                className="w-full h-auto object-cover rounded-[2rem] shadow-sm"
              />

              {/* Badge flotante de confianza - Visible en Celular y PC */}
              <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-white text-emerald-900 font-bold px-3 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-2xl border border-emerald-50 flex items-center z-20">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[
                      "/avatar-1.png",
                      "/avatar-2.png",
                      "/avatar-3.jpg"
                    ].map((imgSrc, i) => (
                      <img
                        key={i}
                        src={imgSrc}
                        alt={`Alumno ${i + 1}`}
                        className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover bg-emerald-200"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] md:text-sm whitespace-nowrap">+1K Alumnos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  );
}