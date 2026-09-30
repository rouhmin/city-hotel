import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';
import { hotelInfo, getWhatsAppLink } from '../data/hotelInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Accueil", href: "#hero" },
    { label: "L'Hôtel", href: "#about" },
    { label: "Nos Chambres", href: "#chambres" },
    { label: "Grille Tarifaire", href: "#tarifs" },
    { label: "Équipements", href: "#equipements" },
    { label: "Galerie Photos", href: "#galerie" },
    { label: "Localisation", href: "#localisation" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0f0f10] text-white pt-16 pb-12 border-t border-[#C6A15B]/30 relative overflow-hidden">
      
      {/* Decorative top gold gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C6A15B] p-0.5 bg-white shrink-0">
                <img 
                  src="/images/logo.jpeg" 
                  alt="City Hôtel Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  CITY HÔTEL
                </span>
                <p className="text-[11px] uppercase tracking-widest text-[#D8BD7A] font-semibold">
                  Toamasina • Madagascar
                </p>
              </div>
            </div>

            <p className="font-serif italic text-base text-[#D8BD7A]">
              « {hotelInfo.slogan} »
            </p>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Un cadre soigné, reposant et sécurisé en plein centre de Tamatave. 
              Chambres équipées, studios avec cuisine et suites familiales pour tous vos séjours.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 flex items-center justify-center transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={hotelInfo.contacts.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600/20 hover:bg-[#1877F2] text-blue-400 hover:text-white border border-blue-500/30 flex items-center justify-center transition-all"
                title="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D8BD7A]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/75 hover:text-[#D8BD7A] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#C6A15B] text-[10px]">✦</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D8BD7A]">
              Coordonnées
            </h4>
            
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>25 Boulevard de l'OUA, Toamasina (face Station TOTAL Gare Manguier)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href={`tel:${hotelInfo.contacts.phoneOrangeClean}`} className="hover:text-[#D8BD7A]">
                  {hotelInfo.contacts.phoneOrange} (Orange)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href={`tel:${hotelInfo.contacts.phoneTelmaClean}`} className="hover:text-[#D8BD7A]">
                  {hotelInfo.contacts.phoneTelma} (Yas / Telma)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href={`mailto:${hotelInfo.contacts.email}`} className="hover:text-[#D8BD7A]">
                  {hotelInfo.contacts.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] text-[#D8BD7A] bg-white/5 border border-[#C6A15B]/30 px-3 py-1.5 rounded-xl">
                Arrivée 12h00 • Départ avant 12h00
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col items-center gap-4 text-xs text-white/60">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © 2026 City Hôtel — Tous droits réservés. Site vitrine officiel.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#D8BD7A] hover:text-white transition-colors cursor-pointer group"
            >
              <span>Retour en haut</span>
              <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#C6A15B] group-hover:text-[#171717] flex items-center justify-center transition-colors">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          <p className="text-[11px] text-white/40 pt-2 border-t border-white/5 w-full text-center">
            © created by rouhmin
          </p>
        </div>

      </div>
    </footer>
  );
}
