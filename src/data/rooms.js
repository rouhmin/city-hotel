export const rooms = [
  {
    id: "standard",
    name: "Chambre Standard",
    category: "Standard",
    tagline: "Élégante, lumineuse & reposante",
    priceStartingAt: "55 000 Ar",
    priceRange: "55 000 Ar — 70 000 Ar",
    period: "par nuit",
    capacity: "1 à 2 personnes",
    bedType: "1 grand lit double (King Size)",
    view: "Vue sur le Boulevard de l'OUA",
    size: "22 m²",
    images: [
      "/images/chambres/room-standard-desk.jpeg",
      "/images/chambres/room-bed-detail.jpeg",
      "/images/chambres/room-standard-sun.jpeg",
      "/images/galerie/bathroom-italian-shower.jpeg"
    ],
    features: [
      "Climatisation individuelle performante",
      "Télévision écran plat avec chaînes Canal+ & Netflix",
      "Wi-Fi gratuit illimité haut débit",
      "Salle de bain privative avec eau chaude",
      "Table de travail & rangements",
      "Ménage quotidien soigné"
    ],
    shortDesc: "Parfaite pour les voyageurs seuls, couples et séjours professionnels recherchant un confort absolu et un cadre calme au centre-ville.",
    popular: false,
    extraBedsAllowed: true,
  },
  {
    id: "standard-frigo",
    name: "Chambre Standard Confort + Frigo",
    category: "Standard Confort",
    tagline: "Espace généreux avec mini-réfrigérateur & salon",
    priceStartingAt: "80 000 Ar",
    priceRange: "80 000 Ar — 90 000 Ar",
    period: "par nuit",
    capacity: "2 à 3 personnes",
    bedType: "1 grand lit double + canapé salon",
    view: "Grande baie vitrée & Vue dégagée Boulevard",
    size: "28 m²",
    images: [
      "/images/chambres/room-deluxe-main.jpeg",
      "/images/chambres/room-spacious-sofa.jpeg",
      "/images/chambres/room-comfort-balcony.jpeg",
      "/images/chambres/room-balcony-view.jpeg"
    ],
    features: [
      "Réfrigérateur privatif dans la chambre",
      "Climatisation & TV Canal+ HD & Netflix",
      "Espace salon avec canapé confortable",
      "Wi-Fi haut débit & Eau chaude 24h/24",
      "Grande baie vitrée lumineuse",
      "Possibilité d'ajouter lit supplémentaire"
    ],
    shortDesc: "Une chambre spacieuse dotée d'un réfrigérateur pour vos boissons fraîches et d'un espace détente pour vous ressourcer en toute tranquillité.",
    popular: true,
    badge: "Le plus demandé",
    extraBedsAllowed: true,
  },
  {
    id: "familiale",
    name: "Chambre Familiale Privative",
    category: "Famille",
    tagline: "Le confort chaleureux pour parents & enfants",
    priceStartingAt: "185 000 Ar",
    priceRange: "185 000 Ar",
    period: "par nuit",
    capacity: "4 à 6 personnes",
    bedType: "1 grand lit double + Lit superposé en bois massif",
    view: "Vue Boulevard & cour calme",
    size: "35 m²",
    images: [
      "/images/chambres/room-family-bunk.jpeg",
      "/images/chambres/room-family-bed.jpeg",
      "/images/chambres/room-spacious-sofa.jpeg",
      "/images/galerie/bathroom-italian-shower.jpeg"
    ],
    features: [
      "1 lit double King Size + 1 lit superposé double/simple",
      "Climatisation & TV Canal+ avec Netflix",
      "Wi-Fi gratuit pour toute la famille",
      "Salle de bain privative avec eau chaude",
      "Lits d'appoint disponibles (+10 000 Ar / +20 000 Ar)",
      "Espace canapé salon spacieux"
    ],
    shortDesc: "Conçue pour accueillir les familles dans un cadre chaleureux et sécurisé, avec lits superposés en bois noble et flexibilité d'appoint.",
    popular: true,
    badge: "Idéal Famille",
    extraBedsAllowed: true,
  },
  {
    id: "studio-cuisine",
    name: "Chambre Studio avec Cuisine & Balcon",
    category: "Studio Suite",
    tagline: "Autonomie complète, kitchenette équipée & grand balcon",
    priceStartingAt: "120 000 Ar",
    priceRange: "120 000 Ar — 185 000 Ar",
    period: "par nuit",
    capacity: "2 à 3 personnes",
    bedType: "1 lit 2 places + coin repas",
    view: "Balcon privatif avec vue panoramique Toamasina",
    size: "38 m²",
    images: [
      "/images/galerie/studio-kitchen.jpeg",
      "/images/chambres/room-comfort-balcony.jpeg",
      "/images/chambres/room-deluxe-main.jpeg",
      "/images/galerie/bathroom-italian-shower.jpeg"
    ],
    features: [
      "Cuisine complète équipée : réfrigérateur, évier, plaques",
      "Balcon privatif avec vue panoramique (selon chambre)",
      "Coin salle à manger & vaisselle",
      "Climatisation, Canal+, Netflix, Wi-Fi & Eau chaude",
      "Grande autonomie pour séjours courts ou moyens",
      "Variantes disponibles au 1er, 2e, 3e et 4e étage"
    ],
    shortDesc: "La solution parfaite pour les séjours prolongés et les voyageurs aimant préparer leurs repas dans une atmosphère comme chez soi.",
    popular: false,
    badge: "Cuisine Équipée",
    extraBedsAllowed: true,
  }
];

export const extraBedsInfo = [
  {
    type: "Lit supplémentaire 1 place",
    price: "10 000 Ar / nuit",
    desc: "Idéal pour un enfant ou un accompagnant.",
    tag: "1 Place"
  },
  {
    type: "Lit supplémentaire 2 places",
    price: "20 000 Ar / nuit",
    desc: "Parfait pour agrandir la capacité de couchage.",
    tag: "2 Places"
  }
];
