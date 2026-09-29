import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  Sparkles, 
  CheckCircle,
  ExternalLink 
} from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';
import { hotelInfo, getWhatsAppLink } from '../data/hotelInfo';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dates: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build direct WhatsApp message
    let text = `Bonjour City Hôtel, nouveau message de ${formData.name || 'un client'} :\n`;
    if (formData.phone) text += `• Téléphone : ${formData.phone}\n`;
    if (formData.email) text += `• Email : ${formData.email}\n`;
    if (formData.dates) text += `• Période souhaitée : ${formData.dates}\n`;
    text += `• Message : ${formData.message}\n`;

    window.open(getWhatsAppLink(text), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F3EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A15B]/15 text-[#9B7735] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>À Votre Écoute</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] mb-4">
            Contactez City Hôtel
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#555555]">
            Notre équipe se tient à votre entière disposition pour répondre à toutes vos questions et préparer votre venue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#C6A15B]/25 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C6A15B]/15 text-[#9B7735] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-base font-bold text-[#171717] mb-1">
                  Téléphone Direct (2 Lignes)
                </h4>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#777777]">Ligne Orange :</span>
                    <a 
                      href={`tel:${hotelInfo.contacts.phoneOrangeClean}`}
                      className="text-xs font-bold text-[#171717] hover:text-[#C6A15B]"
                    >
                      {hotelInfo.contacts.phoneOrange}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#777777]">Ligne Yas / Telma :</span>
                    <a 
                      href={`tel:${hotelInfo.contacts.phoneTelmaClean}`}
                      className="text-xs font-bold text-[#171717] hover:text-[#C6A15B]"
                    >
                      {hotelInfo.contacts.phoneTelma}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#25D366]/40 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-base font-bold text-[#171717] mb-1">
                  WhatsApp Officiel
                </h4>
                <p className="text-xs text-[#666666] mb-2">
                  Discutez en direct avec nous pour une réponse rapide : {hotelInfo.contacts.whatsapp}
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
                >
                  <span>Démarrer une conversation WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#C6A15B]/25 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C6A15B]/15 text-[#9B7735] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-base font-bold text-[#171717] mb-1">
                  Courrier Électronique
                </h4>
                <a 
                  href={`mailto:${hotelInfo.contacts.email}`}
                  className="text-xs font-semibold text-[#171717] hover:text-[#C6A15B] break-all"
                >
                  {hotelInfo.contacts.email}
                </a>
                <p className="text-[11px] text-[#777777] mt-1">
                  Idéal pour les demandes de devis et missions d'entreprises
                </p>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="bg-white rounded-3xl p-6 border border-blue-500/30 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-600 flex items-center justify-center shrink-0">
                <FacebookIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-base font-bold text-[#171717] mb-1">
                  Page Facebook Officielle
                </h4>
                <p className="text-xs text-[#666666] mb-2">
                  Suivez nos actualités et envoyez-nous un message Messenger.
                </p>
                <a
                  href={hotelInfo.contacts.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
                >
                  <span>Voir la page City Hôtel sur Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Horaires Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#C6A15B]/25 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C6A15B]/15 text-[#9B7735] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#171717] mb-1">
                  Horaires Pratiques
                </h4>
                <p className="text-xs text-[#666666]">
                  • Check-in (Arrivée) : <strong>À partir de 12h00</strong><br />
                  • Check-out (Départ) : <strong>Avant 12h00</strong><br />
                  • Réception ouverte 7j / 7
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact & Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-[#C6A15B]/30 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-[#171717] mb-2">
              Envoyer un Message Rapide
            </h3>
            <p className="text-xs text-[#666666] mb-6">
              Remplissez ce formulaire pour nous transmettre votre demande immédiatement par WhatsApp ou email.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <h4 className="font-bold text-green-800 text-sm">Message transmis !</h4>
                <p className="text-xs text-green-700 mt-1">
                  Votre demande a été préparée. Notre équipe à Toamasina vous répond dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-green-800 underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#171717] mb-1">
                    Votre nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF8F2] border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: +261 32 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F2] border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Adresse email (optionnel)
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F2] border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#171717] mb-1">
                    Dates prévues de séjour
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Du 12 au 15 octobre (3 nuits)"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    className="w-full bg-[#FAF8F2] border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#171717] mb-1">
                    Votre message ou question *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Précisez votre demande (type de chambre souhaitée, lit supplémentaire, heure d'arrivée...)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F2] border border-[#C6A15B]/30 rounded-xl px-4 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-[#C6A15B]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] text-[#171717] hover:brightness-105 active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma demande directe</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
