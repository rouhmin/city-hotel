import { MapPin, MapPinned, Navigation, Compass, Building, Landmark, ExternalLink, Sparkles } from 'lucide-react';
import { hotelInfo } from '../data/hotelInfo';

export default function LocationSection() {
  return (
    <section id="localisation" className="py-20 lg:py-28 bg-[#FAF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A15B]/15 text-[#9B7735] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Situation Géographique</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] mb-4">
            Où Nous Trouver
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#555555]">
            Un emplacement central et pratique au cœur économique de Toamasina (Tamatave).
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left: Info Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#C6A15B]/25 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C6A15B]/15 text-[#9B7735] flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#171717] mb-2">
                City Hôtel Toamasina
              </h3>
              
              <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#C6A15B]/20 mb-2">
                <p className="font-semibold text-sm text-[#171717]">
                  {hotelInfo.address}
                </p>
                <p className="text-xs text-[#777777] mt-1">
                  Tamatave 501, Madagascar
                </p>
              </div>

              <div className="px-4 py-2 mb-6 flex items-center gap-1.5">
                <MapPinned className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                <p className="text-[11px] text-[#999999] font-mono">
                  Plus Code : {hotelInfo.plusCode}
                </p>
              </div>

              {/* Repères Clés */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9B7735] mb-3">
                Points de repère immédiats :
              </h4>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs text-[#444444]">
                  <Landmark className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span><strong>Face directe :</strong> Banque BOA Toamasina</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#444444]">
                  <Building className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span><strong>Proximité :</strong> Bazar Kely & Avenue de l'Indépendance</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#444444]">
                  <Compass className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span><strong>Quartier :</strong> Centre-ville de Toamasina, Cité des Douanes</span>
                </div>
              </div>
            </div>

            <a
              href={hotelInfo.contacts.googleMapsDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-2xl bg-[#171717] text-[#D8BD7A] hover:bg-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer border border-[#C6A15B]/30"
            >
              <Navigation className="w-4 h-4 text-[#C6A15B]" />
              <span>Ouvrir dans Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#C6A15B]/25 shadow-xl min-h-[380px] flex flex-col">
            <div className="relative w-full flex-1 min-h-[350px]">
              <iframe
                title="Localisation City Hôtel Toamasina"
                src={`https://maps.google.com/maps?q=${hotelInfo.coordinates.lat},${hotelInfo.coordinates.lng}&z=17&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-4 bg-[#FAF8F2] border-t border-[#C6A15B]/20 flex items-center justify-between text-xs text-[#666666]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                {hotelInfo.address}
              </span>
              <a 
                href={hotelInfo.contacts.googleMapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9B7735] hover:underline font-semibold"
              >
                Calculer l'itinéraire →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
