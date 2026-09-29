import { motion } from 'framer-motion';
import { MessageCircle, Bed, Sparkles, ChevronDown, CheckCircle2, MapPin, Award } from 'lucide-react';
import { hotelInfo, getWhatsAppLink } from '../data/hotelInfo';

export default function Hero({ onOpenBookingModal }) {
  const scrollToRooms = () => {
    const el = document.getElementById('chambres');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/chambres/room-deluxe-main.jpeg"
          alt="Chambre de luxe City Hôtel Toamasina"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
        />
        {/* Layered dark gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90" />
        
        {/* Subtle decorative gold glowing mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6A15B]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white flex flex-col items-center">
        
        {/* Top Gold Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#C6A15B]/40 text-[#D8BD7A] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-lg shadow-black/30"
        >
          <Sparkles className="w-4 h-4 text-[#C6A15B]" />
          <span>Hôtel de Confort & Élégance • Toamasina</span>
        </motion.div>

        {/* Main Hotel Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight"
        >
          CITY HÔTEL
        </motion.h1>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-serif text-xl sm:text-3xl text-[#D8BD7A] italic font-light mb-6 tracking-wide"
        >
          « {hotelInfo.slogan} »
        </motion.p>

        {/* Descriptive Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-base sm:text-lg text-white/85 font-light leading-relaxed mb-10"
        >
          Situé au cœur de Toamasina, face à la station Total et à deux pas de la mairie. 
          Un établissement pensé pour vous offrir tranquillité, propreté et grand confort, 
          adapté aux séjours en famille, en couple ou professionnels.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
        >
          {/* Primary CTA */}
          <button
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] text-[#171717] hover:brightness-110 active:scale-95 shadow-xl shadow-[#C6A15B]/30 hover:shadow-[#C6A15B]/50 transition-all cursor-pointer"
          >
            <span>RÉSERVER / CONTACTER</span>
          </button>

          {/* WhatsApp Direct CTA */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full font-semibold text-base bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Direct</span>
          </a>

          {/* Secondary CTA */}
          <button
            onClick={scrollToRooms}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-base bg-black/40 hover:bg-black/60 text-white border border-[#C6A15B]/60 hover:border-[#C6A15B] backdrop-blur-md transition-all cursor-pointer"
          >
            <Bed className="w-5 h-5 text-[#C6A15B]" />
            <span>Découvrir nos chambres</span>
          </button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-white/90">
            <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
            <span>Clim & Canal+</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-white/90">
            <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
            <span>Wi-Fi & Eau Chaude</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-white/90">
            <Award className="w-4 h-4 text-[#C6A15B] shrink-0" />
            <span>Dès 55 000 Ar / nuit</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-white/90">
            <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0" />
            <span>Centre-ville Tamatave</span>
          </div>
        </motion.div>

        {/* Bottom scroll arrow */}
        <div className="mt-12 animate-bounce cursor-pointer text-[#C6A15B]" onClick={scrollToRooms}>
          <ChevronDown className="w-7 h-7 mx-auto" />
        </div>
      </div>
    </section>
  );
}
