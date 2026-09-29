import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar, MapPin } from 'lucide-react';
import { hotelInfo, getWhatsAppLink } from '../data/hotelInfo';

export default function Navbar({ onOpenBookingModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "#hero" },
    { label: "L'Hôtel", href: "#about" },
    { label: "Chambres", href: "#chambres" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Équipements", href: "#equipements" },
    { label: "Galerie", href: "#galerie" },
    { label: "Localisation", href: "#localisation" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top micro-bar for quick contact info */}
      <div className="bg-[#171717] text-[#D8BD7A] text-xs py-2 px-4 border-b border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              25 Boulevard de l'OUA, Toamasina (face Total)
            </span>
            <span className="hidden md:inline-block text-[#C6A15B]/50">|</span>
            <span className="hidden md:flex items-center gap-1 text-[#C6A15B]">
              Arrivée : 12h00 • Départ : avant 12h00
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href={`tel:${hotelInfo.contacts.phoneOrangeClean}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Appeler Orange"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{hotelInfo.contacts.phoneOrange}</span>
            </a>
            <span className="text-[#C6A15B]/50">|</span>
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:brightness-110 font-semibold transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#C6A15B]/20 py-2.5' 
            : 'bg-white/90 backdrop-blur-sm border-b border-[#C6A15B]/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-[#C6A15B] p-0.5 shadow-sm group-hover:scale-105 transition-transform bg-white">
              <img 
                src="/images/logo.jpeg" 
                alt="Logo City Hôtel" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-[#171717]">
                  CITY HÔTEL
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
              </div>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9B7735] font-semibold">
                Toamasina • Madagascar
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-[#171717]/85 hover:text-[#9B7735] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C6A15B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] text-[#171717] hover:brightness-105 active:scale-95 shadow-md shadow-[#C6A15B]/20 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#171717]" />
              <span>Réserver</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#171717] hover:text-[#C6A15B] rounded-lg focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-[#171717]" />
            ) : (
              <Menu className="w-7 h-7 text-[#171717]" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F2] border-t border-[#C6A15B]/20 px-6 py-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium text-[#171717] hover:text-[#C6A15B] py-1 border-b border-[#C6A15B]/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] text-[#171717] font-bold text-center shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Demande de Réservation</span>
                </button>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-center shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuter sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
