import { 
  Wifi, 
  Snowflake, 
  Tv, 
  Flame, 
  Sparkles, 
  MapPin, 
  Coffee, 
  BedDouble, 
  Compass, 
  Award, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { services, reasonsWhy } from '../data/services';

const iconMap = {
  Wifi,
  Snowflake,
  Tv,
  Flame,
  Sparkles,
  MapPin,
  Coffee,
  BedDouble,
  Compass,
  Award,
  Users,
  ShieldCheck
};

export default function Services() {
  return (
    <section id="equipements" className="py-20 lg:py-28 bg-[#F3EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A15B]/15 text-[#9B7735] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Nos Équipements</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] mb-4">
            Tout le Confort Dont Vous Avez Besoin
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#555555]">
            Chaque détail a été pensé pour faire de votre séjour à Toamasina un moment de repos absolu et sans contrainte.
          </p>
        </div>

        {/* Services Grid with Luxury Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#C6A15B]/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF8F2] border border-[#C6A15B]/40 group-hover:border-[#C6A15B] group-hover:bg-[#C6A15B]/10 flex items-center justify-center text-[#9B7735] mb-5 transition-colors">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9B7735] bg-[#C6A15B]/10 px-2.5 py-1 rounded-full mb-2 inline-block">
                    {item.highlight}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-[#171717] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* "Pourquoi City Hôtel ?" Section */}
        <div className="mt-12 pt-16 border-t border-[#C6A15B]/25">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9B7735]">
              Vos Avantages
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717] mt-1 mb-3">
              Pourquoi Choisir City Hôtel ?
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              Une adresse de confiance reconnue à Toamasina pour la qualité de son accueil et son emplacement privilégié.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasonsWhy.map((reason, idx) => {
              const IconComp = iconMap[reason.iconName] || Award;
              return (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#C6A15B]/25 shadow-sm flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#171717] text-[#D8BD7A] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#171717] mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
