export const business = {
  name: "Shivshakti Hardware",
  localName: "Sarpanch Saheb Ka Dukaan",
  proprietor: "Ankit Singh",
  tagline: "Building Materials • Hardware • Plumbing • Paints",
  address: {
    line1: "Bhakura Bhithi",
    postOffice: "Bhithi Sahabuddi",
    district: "Saran",
    state: "Bihar",
    country: "India",
  },
  contact: {
    phone: "+919939397667",
    whatsapp: "919939397667",
    email: "info@shivshaktihardware.example",
    hours: "Mon – Sat, 8:00 AM – 8:00 PM",
  },
  social: {
    facebook: "#",
    instagram: "#",
  },
  mapsQuery: "Bhakura Bhithi, Bhithi Sahabuddi, Saran, Bihar",
};

export const fullAddress = `${business.address.line1}, Post Office ${business.address.postOffice}, ${business.address.district}, ${business.address.state}, ${business.address.country}`;
