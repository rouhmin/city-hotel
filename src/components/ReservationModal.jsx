import { useState } from 'react';
import { X, Phone, Sparkles, Send } from 'lucide-react';
import { hotelInfo, getWhatsAppLink } from '../data/hotelInfo';
import { rooms } from '../data/rooms';

export default function ReservationModal({ isOpen, onClose, initialRoom = null }) {
  const [selectedRoom, setSelectedRoom] = useState(initialRoom?.name || rooms[0]?.name || '');
  const [prevInitialRoom, setPrevInitialRoom] = useState(initialRoom);
  const [checkInDate, setCheckInDate] = useState('');
  const [nights, setNights] = useState('1');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [extraBed, setExtraBed] = useState('none');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [specialNote, setSpecialNote] = useState('');

  if (initialRoom !== prevInitialRoom) {
    setPrevInitialRoom(initialRoom);
    setSelectedRoom(initialRoom ? initialRoom.name : rooms[0]?.name || '');
  }

  if (!isOpen) return null;

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    let msg = `Bonjour City Hôtel, je souhaite effectuer une réservation :\n`;
    if (clientName) msg += `• Nom du client : ${clientName}\n`;
    if (clientPhone) msg += `• Contact : ${clientPhone}\n`;
    msg += `• Chambre choisie : ${selectedRoom}\n`;
    if (checkInDate) msg += `• Date d'arrivée : ${checkInDate}\n`;
    msg += `• Nombre de nuits : ${nights}\n`;
    msg += `• Voyageurs : ${adults} adulte(s) ${Number(children) > 0 ? `, ${children} enfant(s)` : ''}\n`;
    if (extraBed === '1') msg += `• Lit d'appoint : 1 place (10 000 Ar / nuit)\n`;
    if (extraBed === '2') msg += `• Lit d'appoint : 2 places (20 000 Ar / nuit)\n`;
    if (specialNote) msg += `• Remarques : ${specialNote}\n`;
    msg += `Merci de me confirmer la disponibilité et les modalités pour l'acompte.`;

    window.open(getWhatsAppLink(msg), '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-[#FAF8F2] rounded-3xl p-6 sm:p-8 max-w-2xl w-full my-8 relative border-2 border-[#C6A15B]/40 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white border border-[#C6A15B]/30 hover:bg-gray-100 flex items-center justify-center text-[#171717] transition-colors cursor-pointer"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C6A15B]/15 text-[#9B7735] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Demande Directe</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717]">
            Réservation à City Hôtel
          </h3>
          <p className="text-xs text-[#666666] mt-1">
            Complétez ces quelques détails pour transmettre votre demande directement par WhatsApp ou appel.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          
          {/* Room Selection */}
          <div>
            <label className="block text-xs font-bold text-[#171717] mb-1">
              Hébergement souhaité *
            </label>
            <select
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full bg-white border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
            >
              {rooms.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name} — {r.priceStartingAt} / nuit ({r.category})
                </option>
              ))}
              <option value="Autre demande / Plusieurs chambres">Autre demande / Plusieurs chambres</option>
            </select>
          </div>

          {/* Dates & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#171717] mb-1">
                Date d'arrivée souhaitée *
              </label>
              <input
                type="date"
                required
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full bg-white border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#171717] mb-1">
                Nombre de nuits *
              </label>
              <select
                value={nights}
                onChange={(e) => setNights(e.target.value)}
                className="w-full bg-white border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 21, 30].map((n) => (
                  <option key={n} value={n}>{n} nuit{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Guests & Extra Bed */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#171717] mb-1">
                Adultes
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full bg-white border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
              >
                {[1, 2, 3, 4, 5, 6].map((a) => (
                  <option key={a} value={a}>{a} adulte{a > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#171717] mb-1">
                Enfants
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full bg-white border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
              >
                {[0, 1, 2, 3, 4].map((c) => (
                  <option key={c} value={c}>{c} enfant{c > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#171717] mb-1">
                Lit d'appoint
              </label>
              <select
                value={extraBed}
                onChange={(e) => setExtraBed(e.target.value)}
                className="w-full bg-white border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
              >
                <option value="none">Aucun</option>
                <option value="1">1 place (+10 000 Ar)</option>
                <option value="2">2 places (+20 000 Ar)</option>
              </select>
            </div>
          </div>

          {/* Client Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#171717] mb-1">
                Votre nom *
              </label>
              <input
                type="text"
                required
                placeholder="Votre nom complet"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-white border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#171717] mb-1">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                placeholder="+261 3..."
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full bg-white border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs font-bold text-[#171717] mb-1">
              Remarques / Demandes particulières (optionnel)
            </label>
            <textarea
              rows="2"
              placeholder="Ex: Arrivée prévue à 14h, préférence pour étage élevé avec balcon..."
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              className="w-full bg-white border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
            ></textarea>
          </div>

          {/* Notice on deposit */}
          <div className="p-3 bg-[#FAF8F2] border border-[#C6A15B]/30 rounded-xl text-[11px] text-[#666666] flex items-start gap-2">
            <span className="text-[#C6A15B] font-bold">ℹ</span>
            <span>
              <strong>Note de réservation :</strong> Un acompte est demandé pour bloquer définitivement votre chambre. Arrivée à 12h00 / Départ avant 12h00.
            </span>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] text-[#171717] hover:brightness-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Valider & Transmettre sur WhatsApp</span>
            </button>
          </div>

          {/* Quick Call Alternative */}
          <div className="pt-2 text-center">
            <p className="text-[11px] text-[#777777] mb-2">Ou contactez directement notre réception :</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${hotelInfo.contacts.phoneOrangeClean}`}
                className="text-xs font-semibold text-[#171717] hover:text-[#C6A15B] flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>{hotelInfo.contacts.phoneOrange} (Orange)</span>
              </a>
              <span className="text-gray-300">•</span>
              <a
                href={`tel:${hotelInfo.contacts.phoneTelmaClean}`}
                className="text-xs font-semibold text-[#171717] hover:text-[#C6A15B] flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>{hotelInfo.contacts.phoneTelma} (Telma)</span>
              </a>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
