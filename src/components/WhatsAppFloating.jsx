import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '../data/hotelInfo';

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = "Bonjour City Hôtel, je souhaiterais avoir des informations concernant une réservation.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white text-[#171717] px-4 py-2.5 rounded-2xl shadow-2xl border border-[#25D366]/40 text-xs flex items-center gap-2 max-w-xs animate-bounce-slow">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span className="font-medium">
            Besoin d'aide ? Écrivez-nous sur WhatsApp !
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5 ml-1 cursor-pointer"
            aria-label="Fermer l'infobulle"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppLink(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Contacter City Hôtel sur WhatsApp"
      >
        {/* Pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 group-hover:opacity-75 blur-sm animate-pulse" />
        <MessageCircle className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
}
