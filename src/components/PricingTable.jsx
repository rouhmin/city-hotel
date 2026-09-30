import { useState } from 'react';
import { Sparkles, Check, CheckCircle2, Eye, MessageCircle, Layers } from 'lucide-react';
import { pricingGrid } from '../data/pricingGrid';
import { getWhatsAppLink } from '../data/hotelInfo';

export default function PricingTable({ onOpenBookingModal }) {
  const [activeFloor, setActiveFloor] = useState(0); // 0 is 4th floor
  const [showTarifModal, setShowTarifModal] = useState(false);

  return (
    <section id="tarifs" className="py-20 lg:py-28 bg-[#FAF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A15B]/15 text-[#9B7735] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Transparence & Clarté</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] mb-4">
            Grille Tarifaire Officielle
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#555555]">
            Consultez nos tarifs par nuit selon le type de chambre, l'étage et les équipements souhaités.
          </p>
        </div>

        {/* All-inclusive highlight banner */}
        <div className="bg-[#171717] text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-xl border border-[#C6A15B]/30 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C6A15B]/20 text-[#D8BD7A] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#D8BD7A]">
                  Inclus systématiquement dans chaque chambre
                </h4>
                <p className="text-xs sm:text-sm text-white/80">
                  Climatisation • Télévision avec Canal+ & Netflix • Eau Chaude 24h/24 • Wi-Fi Gratuit
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
              <button
                onClick={() => setShowTarifModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#D8BD7A] border border-[#C6A15B]/40 text-xs font-semibold backdrop-blur-sm transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Voir le document tarifaire</span>
              </button>

              {onOpenBookingModal && (
                <button
                  onClick={onOpenBookingModal}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] text-[#171717] text-xs font-bold transition-all cursor-pointer shadow-md hover:brightness-105 active:scale-95"
                >
                  <span>Réserver un séjour</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Floor Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {pricingGrid.map((item, idx) => (
            <button
              key={item.floorCode}
              onClick={() => setActiveFloor(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeFloor === idx
                  ? 'bg-[#171717] text-[#D8BD7A] shadow-md border border-[#C6A15B]'
                  : 'bg-white text-[#555555] hover:text-[#171717] border border-[#C6A15B]/20 hover:border-[#C6A15B]/50'
              }`}
            >
              <Layers className="w-4 h-4 text-[#C6A15B]" />
              <span>{item.floor}</span>
            </button>
          ))}
        </div>

        {/* Current Floor Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {pricingGrid[activeFloor].rooms.map((room) => {
            const waText = `Bonjour City Hôtel, je souhaite réserver la chambre ${room.num} (${room.type} à ${room.price} au ${pricingGrid[activeFloor].floor}).`;
            return (
              <div
                key={room.num}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#C6A15B]/25 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-[#FAF8F2] border-2 border-[#C6A15B] flex items-center justify-center font-serif text-lg font-bold text-[#171717]">
                      {room.num}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9B7735] bg-[#C6A15B]/10 px-3 py-1 rounded-full">
                      {pricingGrid[activeFloor].floor}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#171717] mb-1">
                    {room.type}
                  </h3>
                  <p className="text-xs text-[#777777] mb-4">
                    {room.specs}
                  </p>

                  <div className="py-3 px-4 rounded-2xl bg-[#FAF8F2] border border-[#C6A15B]/20 mb-6 flex items-baseline justify-between">
                    <span className="text-xs text-[#555555] uppercase font-semibold">Tarif</span>
                    <div>
                      <span className="font-serif text-2xl font-bold text-[#9B7735]">
                        {room.price}
                      </span>
                      <span className="text-xs text-[#777777] ml-1">/ nuit</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {room.amenities.map((amenity, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-xs text-[#444444]">
                        <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#FAF8F2] flex gap-2">
                  <a
                    href={getWhatsAppLink(waText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] text-[#171717] font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 shadow-sm text-center flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Réserver Ch. {room.num}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on variance & condition */}
        <div className="max-w-2xl mx-auto text-center text-xs text-[#777777] space-y-1">
          <p>
            * Les tarifs sont exprimés en Ariary (Ar) par nuitée et peuvent varier selon les saisons et disponibilités.
          </p>
          <p>
            Un acompte est demandé afin de garantir définitivement toute réservation.
          </p>
        </div>

      </div>

      {/* Official Tarif Document Lightbox Modal */}
      {showTarifModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowTarifModal(false)}
        >
          <div 
            className="bg-white rounded-3xl p-4 sm:p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative border-2 border-[#C6A15B]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#FAF8F2]">
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#171717]">
                  Document Tarifaire Officiel de City Hôtel
                </h3>
                <p className="text-xs text-[#777777]">
                  Tableau des chambres 101 à 403 affiché à la réception
                </p>
              </div>
              <button
                onClick={() => setShowTarifModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-[#171717] font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <img
                src="/images/tarif.jpeg"
                alt="Grille officielle des tarifs City Hôtel"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => setShowTarifModal(false)}
                className="px-6 py-2.5 rounded-full bg-[#171717] text-[#D8BD7A] text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
              >
                Fermer l'aperçu
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
