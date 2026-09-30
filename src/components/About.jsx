import { MapPin, Clock, ShieldCheck, Sparkles, Building2, UtensilsCrossed } from 'lucide-react';
import { hotelInfo, getWhatsAppLink } from '../data/hotelInfo';

export default function About({ onOpenBookingModal }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F2] relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#C6A15B]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#C6A15B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A15B]/15 text-[#9B7735] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>À Propos De Nous</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] mb-4">
            Bienvenue à City Hôtel
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] mx-auto rounded-full mb-6" />
          <p className="font-serif italic text-lg sm:text-xl text-[#9B7735]">
            « {hotelInfo.slogan} »
          </p>
        </div>

        {/* Two Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with Facade & Highlights */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Exterior Building Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/hotel-facade.jpeg"
                  alt="Bâtiment City Hôtel Toamasina"
                  className="w-full h-[440px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                
                {/* Floating caption on image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-[#D8BD7A]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#D8BD7A]">
                      Bâtiment 4 Étages
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">
                    25 Boulevard de l'OUA, Toamasina
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    Face directe : Station TOTAL Gare Manguier • Proximité Bazar kely & Mairie
                  </p>
                </div>
              </div>

              {/* Overlapping Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-5 rounded-2xl shadow-xl border border-[#C6A15B]/30 max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#FAF8F2] border border-[#C6A15B] flex items-center justify-center shrink-0">
                    <img 
                      src="/images/logo.jpeg" 
                      alt="Logo badge" 
                      className="w-8 h-8 rounded-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="block font-serif text-sm font-bold text-[#171717]">
                      City Hôtel
                    </span>
                    <span className="text-[11px] text-[#9B7735] font-semibold">
                      Cadre haut de gamme
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[#FAF8F2] text-[11px] text-[#555555]">
                  ✦ Votre confort, notre priorité constante à Tamatave.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Story & Commitments */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4 text-base text-[#444444] leading-relaxed">
              <p className="text-lg font-medium text-[#171717]">
                City Hôtel vous accueille au 25 Boulevard de l'OUA à Toamasina, face directe à la Station TOTAL Gare Manguier et à proximité de Bazar kely & de l'Hôtel de Ville (Mairie).
              </p>
              
              <p>
                Un établissement pensé pour vous offrir <strong className="text-[#171717]">confort, tranquillité et praticité</strong>, que ce soit pour un séjour en famille, en couple ou professionnel. Notre équipe veille chaque jour à rendre votre passage à Tamatave des plus agréables.
              </p>

              <p>
                Réparti sur 4 étages avec ascenseur et escaliers soignés, City Hôtel propose une gamme complète d'hébergements : de la chambre standard économique et confortable jusqu'aux spacieuses chambres familiales et studios dotés de cuisines privatives toutes équipées.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-white border border-[#C6A15B]/20 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/15 flex items-center justify-center shrink-0 text-[#9B7735]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#171717]">Emplacement Privilégié</h4>
                  <p className="text-xs text-[#666666] mt-0.5">Accès immédiat à pied aux banques, commerces et administrations.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#C6A15B]/20 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/15 flex items-center justify-center shrink-0 text-[#9B7735]">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#171717]">Studios avec Cuisine</h4>
                  <p className="text-xs text-[#666666] mt-0.5">Cuisinez en toute autonomie comme à la maison pendant votre séjour.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#C6A15B]/20 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/15 flex items-center justify-center shrink-0 text-[#9B7735]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#171717]">Horaires Clairs</h4>
                  <p className="text-xs text-[#666666] mt-0.5">Arrivée dès 12h00 • Départ avant 12h00 • Réception attentive.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#C6A15B]/20 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/15 flex items-center justify-center shrink-0 text-[#9B7735]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#171717]">Réservation Simple</h4>
                  <p className="text-xs text-[#666666] mt-0.5">Acompte demandé à la confirmation • WhatsApp et appel direct.</p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBookingModal}
                className="px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] text-[#171717] hover:brightness-105 active:scale-95 shadow-md shadow-[#C6A15B]/25 transition-all cursor-pointer"
              >
                Faire une demande de séjour
              </button>

              <a
                href={getWhatsAppLink("Bonjour City Hôtel, je souhaite en savoir plus sur votre établissement.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#9B7735] hover:text-[#C6A15B] underline underline-offset-4"
              >
                Nous contacter sur WhatsApp →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
