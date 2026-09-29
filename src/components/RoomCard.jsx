import { useState } from 'react';
import { Bed, Users, Check, ChevronLeft, ChevronRight, MessageCircle, Calendar } from 'lucide-react';
import { getWhatsAppLink } from '../data/hotelInfo';

export default function RoomCard({ room, onSelectRoom }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const whatsAppBookingUrl = getWhatsAppLink(
    `Bonjour City Hôtel, je souhaite réserver la ${room.name} (${room.priceStartingAt}). Merci de m'indiquer les disponibilités.`
  );

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#C6A15B]/25 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group">
      
      {/* Image Carousel / Viewer */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-black/5">
        <img
          src={room.images[currentImgIndex]}
          alt={room.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          <span className="px-3 py-1 rounded-full bg-[#171717]/85 backdrop-blur-md text-[#D8BD7A] text-xs font-bold border border-[#C6A15B]/40">
            {room.category}
          </span>
          {room.badge && (
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#D8BD7A] to-[#C6A15B] text-[#171717] text-xs font-bold shadow-md">
              {room.badge}
            </span>
          )}
        </div>

        {/* Image Navigation Arrows */}
        {room.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {room.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    currentImgIndex === idx ? 'w-5 bg-[#C6A15B]' : 'bg-white/60'
                  }`}
                  aria-label={`Aller à la photo ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Room Title & Price */}
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#171717]">
              {room.name}
            </h3>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xs text-[#777777] uppercase tracking-wider font-semibold">À partir de</span>
            <span className="font-serif text-2xl font-bold text-[#9B7735]">{room.priceStartingAt}</span>
            <span className="text-xs text-[#777777]">/ nuit</span>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 gap-2 text-xs text-[#555555] bg-[#FAF8F2] p-3 rounded-xl border border-[#C6A15B]/15 mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span>{room.capacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span className="truncate">{room.bedType}</span>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-4">
            {room.shortDesc}
          </p>

          {/* Included Amenities List */}
          <div className="space-y-1.5 mb-6">
            {room.features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#333333]">
                <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#FAF8F2] flex flex-col sm:flex-row items-center gap-2.5">
          <button
            onClick={() => onSelectRoom(room)}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] text-[#171717] hover:brightness-105 active:scale-95 shadow-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Réserver</span>
          </button>

          <a
            href={whatsAppBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#1e7e34] hover:text-white border border-[#25D366]/30 flex items-center justify-center gap-2 transition-all text-xs font-semibold"
            title="Réserver directement sur WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
