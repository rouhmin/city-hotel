import { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  ExternalLink, 
  Clock, 
  CreditCard, 
  Send,
  Sparkles,
  CalendarCheck
} from 'lucide-react';
import { hotelInfo, getWhatsAppLink } from '../data/hotelInfo';

export default function ReservationCTA({ onOpenBookingModal }) {
  // Quick WhatsApp message generator state
  const [roomType, setRoomType] = useState('Chambre Standard');
  const [checkInDate, setCheckInDate] = useState('');
  const [nights, setNights] = useState('1');
  const [guests, setGuests] = useState('2');
  const [extraBed, setExtraBed] = useState('none');

  const handleCustomWhatsApp = (e) => {
    e.preventDefault();
    let text = `Bonjour City Hôtel, je souhaite effectuer une demande de réservation :\n`;
    text += `• Type d'hébergement : ${roomType}\n`;
    if (checkInDate) text += `• Date d'arrivée souhaitée : ${checkInDate}\n`;
    text += `• Durée du séjour : ${nights} nuit(s)\n`;
    text += `• Nombre de personnes : ${guests}\n`;
    if (extraBed === '1') text += `• Option lit supplémentaire : 1 place (10 000 Ar)\n`;
    if (extraBed === '2') text += `• Option lit supplémentaire : 2 places (20 000 Ar)\n`;
    text += `Merci de m'indiquer la disponibilité et les modalités pour l'acompte.`;

    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <section id="reservation" className="py-20 lg:py-28 bg-[#171717] text-white relative overflow-hidden">
      {/* Background Gold Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A15B]/20 text-[#D8BD7A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#C6A15B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Demande Directe</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Vous Souhaitez Séjourner Chez Nous ?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-white/80">
            Contactez-nous directement pour connaître les disponibilités en temps réel et valider votre séjour simplement.
          </p>
        </div>

        {/* 3 Main Direct Channels (WhatsApp, Messenger, Téléphone) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          
          {/* WhatsApp Channel */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-[#25D366]/40 hover:border-[#25D366] transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                WhatsApp
              </h3>
              <p className="text-xs text-white/70 mb-6">
                Le moyen le plus rapide et préféré de nos clients. Échangez en direct avec notre équipe 7j/7.
              </p>
            </div>
            
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Écrire sur WhatsApp</span>
            </a>
          </div>

          {/* Messenger Facebook Channel */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-blue-500/40 hover:border-blue-400 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <ExternalLink className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Messenger / Facebook
              </h3>
              <p className="text-xs text-white/70 mb-6">
                Page Facebook officielle City Hôtel. Envoyez-nous un message privé directement.
              </p>
            </div>

            <a
              href={hotelInfo.contacts.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Page Facebook</span>
            </a>
          </div>

          {/* Appel Téléphonique Direct */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-[#C6A15B]/40 hover:border-[#C6A15B] transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#C6A15B]/20 text-[#D8BD7A] flex items-center justify-center mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Appel Direct
              </h3>
              <p className="text-xs text-white/70 mb-6">
                Contactez immédiatement notre réception sur nos deux lignes téléphoniques dédiées.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={`tel:${hotelInfo.contacts.phoneOrangeClean}`}
                className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#D8BD7A] border border-[#C6A15B]/40 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{hotelInfo.contacts.phoneOrange} (Orange)</span>
              </a>

              <a
                href={`tel:${hotelInfo.contacts.phoneTelmaClean}`}
                className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#D8BD7A] border border-[#C6A15B]/40 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{hotelInfo.contacts.phoneTelma} (Yas / Telma)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Interactive Custom Quote / Fast WhatsApp Generator */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C6A15B]/30 shadow-2xl mb-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#D8BD7A] mb-1">
              Personnaliser votre message de réservation
            </h3>
            <p className="text-xs text-white/70">
              Remplissez les détails ci-dessous pour générer un message complet en 1 clic vers notre WhatsApp officiel.
            </p>
          </div>

          <form onSubmit={handleCustomWhatsApp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div>
              <label className="block text-xs font-semibold text-[#D8BD7A] mb-1.5">
                Type de chambre
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full bg-[#242426] border border-[#C6A15B]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C6A15B]"
              >
                <option value="Chambre Standard (dès 55 000 Ar)">Chambre Standard (dès 55 000 Ar)</option>
                <option value="Chambre Standard + Frigo & Vue (dès 80 000 Ar)">Chambre Standard + Frigo & Vue (dès 80 000 Ar)</option>
                <option value="Chambre Familiale (185 000 Ar)">Chambre Familiale (185 000 Ar)</option>
                <option value="Studio avec Cuisine & Balcon">Studio avec Cuisine & Balcon (dès 150 000 Ar)</option>
                <option value="Studio avec Cuisine sans Balcon">Studio avec Cuisine sans Balcon (120 000 Ar)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D8BD7A] mb-1.5">
                Date d'arrivée souhaitée
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full bg-[#242426] border border-[#C6A15B]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C6A15B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D8BD7A] mb-1.5">
                Nombre de nuits
              </label>
              <select
                value={nights}
                onChange={(e) => setNights(e.target.value)}
                className="w-full bg-[#242426] border border-[#C6A15B]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C6A15B]"
              >
                {[1, 2, 3, 4, 5, 6, 7, 10, 14, 21, 30].map((n) => (
                  <option key={n} value={n}>{n} nuit{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D8BD7A] mb-1.5">
                Nombre de personnes
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#242426] border border-[#C6A15B]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C6A15B]"
              >
                <option value="1 personne">1 voyageur</option>
                <option value="2 personnes">2 personnes (couple / amis)</option>
                <option value="3 personnes">3 personnes</option>
                <option value="4 personnes ou plus (Famille)">4 personnes ou plus (Famille)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D8BD7A] mb-1.5">
                Lit supplémentaire d'appoint
              </label>
              <select
                value={extraBed}
                onChange={(e) => setExtraBed(e.target.value)}
                className="w-full bg-[#242426] border border-[#C6A15B]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C6A15B]"
              >
                <option value="none">Aucun lit d'appoint</option>
                <option value="1">Lit 1 place (+10 000 Ar)</option>
                <option value="2">Lit 2 places (+20 000 Ar)</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] text-[#171717] hover:brightness-105 active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer sur WhatsApp</span>
              </button>
            </div>

          </form>

          {onOpenBookingModal && (
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D8BD7A] hover:text-white underline underline-offset-4 cursor-pointer transition-colors"
              >
                <CalendarCheck className="w-4 h-4 text-[#C6A15B]" />
                <span>Vous préférez notre formulaire de réservation interactif ? Cliquez ici</span>
              </button>
            </div>
          )}
        </div>

        {/* Deposit Policy and Check-in / Check-out Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Card Acompte */}
          <div className="bg-white/5 border border-[#C6A15B]/30 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 text-[#D8BD7A] flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white mb-1">
                Acompte de Réservation
              </h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Un acompte est demandé pour valider votre réservation et bloquer définitivement votre chambre avant votre arrivée.
              </p>
            </div>
          </div>

          {/* Card Horaires */}
          <div className="bg-white/5 border border-[#C6A15B]/30 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 text-[#D8BD7A] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white mb-1">
                Horaires d'Arrivée & Départ
              </h4>
              <p className="text-xs text-white/70 leading-relaxed">
                • <strong className="text-white">Arrivée client :</strong> à partir de 12h00<br />
                • <strong className="text-white">Départ :</strong> avant 12h00
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
