import { ShoppingCart } from 'lucide-react';

interface StickyButtonProps {
  show: boolean;
  onClick: () => void;
}

export default function StickyButton({ show, onClick }: StickyButtonProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gradient-to-r from-red-500 to-red-600 shadow-2xl border-t-4 border-red-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white text-center sm:text-left">
              <p className="font-bold text-lg">Sistema de Transformación 3x30</p>
              <p className="text-sm opacity-90">
                <span className="line-through">$47</span> → Solo $5.90 (92% OFF)
              </p>
            </div>
            <button
              onClick={onClick}
              className="w-full sm:w-auto bg-white text-red-600 font-bold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              ¡COMPRAR AHORA!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
