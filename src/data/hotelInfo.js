export const hotelInfo = {
  name: "City Hôtel",
  city: "Toamasina",
  country: "Madagascar",
  slogan: "Votre confort, notre priorité.",
  tagline: "Plus qu'un séjour... une expérience d'exception au cœur de Toamasina.",
  address: "Rue Guynemer (Angle Av. de l'Indépendance), Toamasina",
  fullAddress: "Rue Guynemer, Toamasina 501, Madagascar",
  plusCode: "RCW5+5R9, Toamasina",
  coordinates: {
    lat: -18.1545625,
    lng: 49.4095625,
  },
  landmarks: "Au cœur de Toamasina, Rue Guynemer, face à la Banque BOA Toamasina, à deux pas de l'Avenue de l'Indépendance et du Bazar Kely.",
  
  contacts: {
    phoneOrange: "+261 32 11 073 18",
    phoneTelma: "+261 38 30 209 50",
    phoneOrangeClean: "+261321107318",
    phoneTelmaClean: "+261383020950",
    whatsapp: "+261 32 11 073 18",
    whatsappNumber: "261321107318",
    email: "cityhotel501@gmail.com",
    facebookName: "City Hôtel",
    facebookUrl: "https://web.facebook.com/profile.php?id=61590650725522",
    googleMapsQuery: "City hotel Toamasina",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=City+hotel+Toamasina",
    googleMapsDirectUrl: "https://www.google.com/maps/search/?api=1&query=City+hotel+Toamasina",
  },

  schedule: {
    checkIn: "À partir de 12h00",
    checkOut: "Avant 12h00",
    reception: "7j / 7 — Accueil continu",
  },

  depositPolicy: "Un acompte est demandé pour garantir et valider définitivement votre réservation.",

  extraBeds: {
    single: "10 000 Ar",
    double: "20 000 Ar",
    singlePrice: 10000,
    doublePrice: 20000,
  },

  priceRange: {
    min: "55 000 Ar",
    max: "185 000 Ar",
  }
};

export const getWhatsAppLink = (message = "") => {
  const defaultMsg = "Bonjour City Hôtel, je souhaiterais avoir des informations concernant une réservation.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${hotelInfo.contacts.whatsappNumber}?text=${text}`;
};
