import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Qué incluye exactamente el ebook?',
      answer: 'El ebook incluye 90 recetas completas divididas en 30 desayunos, 30 almuerzos y 30 cenas. Cada receta tiene instrucciones paso a paso, lista de ingredientes, información nutricional y tips para maximizar tus resultados.',
    },
    {
      question: '¿Las recetas son difíciles de preparar?',
      answer: 'Para nada. Todas las recetas están diseñadas para ser simples y rápidas de preparar, tomando entre 10-30 minutos. Utilizamos ingredientes comunes que puedes encontrar en cualquier supermercado.',
    },
    {
      question: '¿Necesito ingredientes caros o exóticos?',
      answer: 'No. Todas las recetas utilizan ingredientes económicos y accesibles que puedes encontrar en cualquier supermercado local. El sistema está diseñado para ser práctico y económico.',
    },
    {
      question: '¿Cuánto peso puedo perder en 30 días?',
      answer: 'Los resultados varían según tu situación inicial, pero nuestros usuarios reportan pérdidas de 3-7 kg en el primer mes siguiendo el sistema correctamente. Lo más importante es que la pérdida es sostenible y saludable.',
    },
    {
      question: '¿Puedo adaptar las recetas si tengo restricciones alimentarias?',
      answer: 'Sí. Muchas recetas incluyen sugerencias de sustituciones para vegetarianos, veganos o personas con intolerancias comunes. Además, aprenderás principios que te permitirán adaptar las recetas a tus necesidades.',
    },
    {
      question: '¿Cómo recibo el ebook después de la compra?',
      answer: 'Inmediatamente después de completar tu pago, recibirás un email con el enlace de descarga del ebook en formato PDF. Puedes leerlo en tu celular, tablet o computadora.',
    },
    {
      question: '¿Hay alguna garantía?',
      answer: 'Sí. Tienes 7 días completos para probar el sistema. Si no estás satisfecho por cualquier razón, te devolvemos el 100% de tu dinero sin preguntas. Asumes cero riesgo.',
    },
    {
      question: '¿Por qué el precio es tan bajo?',
      answer: 'Este es un precio especial de lanzamiento para conseguir testimonios y casos de éxito. Queremos que la mayor cantidad de personas pueda acceder al sistema. El precio subirá a $47 pronto.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas saber antes de empezar tu transformación
          </p>
        </div>

        <div className="space-y-4 mb-24">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-emerald-300 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-bold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
