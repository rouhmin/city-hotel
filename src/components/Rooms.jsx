import { Sparkles, BedDouble } from 'lucide-react';
import RoomCard from './RoomCard';
import { rooms } from '../data/rooms';

export default function Rooms({ onSelectRoom }) {
  return (
    <section id="chambres" className="py-20 lg:py-28 bg-[#F3EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A15B]/15 text-[#9B7735] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Sélection d'Hébergements</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] mb-4">
            Nos Chambres & Suites
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#555555]">
            Des espaces confortables et soignés adaptés aux voyageurs seuls, couples, familles ou professionnels à Toamasina.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onSelectRoom={onSelectRoom}
            />
          ))}
        </div>

        {/* Extra Beds Banner — Explicitly requested in cahier de charges */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#C6A15B]/30 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C6A15B]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C6A15B]/15 text-[#9B7735] flex items-center justify-center shrink-0">
                <BedDouble className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#171717] mb-1">
                  Lits supplémentaires disponibles sur demande
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] max-w-xl">
                  Vous voyagez en famille ou à plusieurs ? Nous pouvons ajouter des couchages d'appoint pour votre confort.
                </p>
              </div>
            </div>

            {/* Badges of prices */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="bg-[#FAF8F2] border border-[#C6A15B]/30 rounded-2xl px-4 py-2.5 text-center">
                <span className="block text-[11px] text-[#777777] uppercase font-semibold">Lit 1 place</span>
                <span className="font-serif text-base font-bold text-[#9B7735]">10 000 Ar</span>
                <span className="text-[10px] text-[#888888] block">/ nuit</span>
              </div>

              <div className="bg-[#FAF8F2] border border-[#C6A15B]/30 rounded-2xl px-4 py-2.5 text-center">
                <span className="block text-[11px] text-[#777777] uppercase font-semibold">Lit 2 places</span>
                <span className="font-serif text-base font-bold text-[#9B7735]">20 000 Ar</span>
                <span className="text-[10px] text-[#888888] block">/ nuit</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
