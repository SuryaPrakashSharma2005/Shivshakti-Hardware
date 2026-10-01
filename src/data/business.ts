export const business = {
  name: "Shivshakti Hardware",
  localName: "Sarpanch Saheb Ka Dukaan",
  proprietor: "Ankit Singh",
  tagline: "Building Materials • Hardware • Plumbing • Paints",
  address: {
    line1: "Bhakura Bhithi",
    road: "Khaira - Sattarghat Rd",
    postOffice: "Bhithi Shahabuddin",
    district: "Saran",
    state: "Bihar",
    pincode: "841411",
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
  mapsQuery: "Shiv Shakti Hardware, Khaira - Sattarghat Rd, Bhithi Shahabuddin, Bihar 841411",
  mapsCoordinates: { lat: 26.0004887, lng: 84.7910107 },
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir//Shiv+Shakti+hardware,+2Q2R%2B5CJ,+Khaira+-+Sattarghat+Rd,+Bhithi+Shahabuddin,+Bihar+841411/@21.2612185,81.6460043,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3992c9d094949085:0xc08fc20abc26bf77!2m2!1d84.7910107!2d26.0004887?hl=en-IN&entry=ttu",
};

export const fullAddress = `${business.address.line1}, ${business.address.road}, Post Office ${business.address.postOffice}, ${business.address.district}, ${business.address.state} ${business.address.pincode}, ${business.address.country}`;
