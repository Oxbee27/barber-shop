
export const barberData = {
  hero: "/barber-hero.jpg",
  interior: "/barber-interior.jpg",
  beard: "/beard-sculpt.jpg",
  master: "/master-barber.jpg",
  fadeStyle: "/fade-style.jpg",
};

export const SERVICES = [
  {
    id: "oxbee-signature-cut",
    name: "The OXBEE Signature Haircut",
    category: "cuts",
    price: 75,
    duration: "45 mins",
    image: "/haircut1.jpg",

    description:
      "Precision clipper sculpting, razor-sharp hairline edge-up, custom taper fade, finished with cooling tea-tree wash and botanical scalp oil.",

    highlights: [
      "Bespoke Consultation",
      "Botanical Scalp Wash",
      "Razor Sharp Edge-Up",
      "Matte Sheen Finish",
    ],

    popular: true,
    tag: "Client Favorite",
  },

  {
    id: "skin-taper-fade",
    name: "Executive Taper & Foil Drop Fade",
    category: "cuts",
    price: 85,
    duration: "50 mins",
    image: "/haircut2.jpg",

    description:
      "Seamless low, mid, or high fade down to skin with foil shaver precision, 360 wave enhancement or textured crown sculpting.",

    highlights: [
      "Micro-Foil Shaver Finish",
      "Wave / Texture Sculpting",
      "Bevel Blade Outlining",
      "Hot Towel Scalp Reset",
    ],

    popular: false,
    tag: "Precision Fit",
  },

  {
    id: "royal-beard-sculpt",
    name: "Royal Beard Sculpt & Hot Towel",
    category: "beard",
    price: 60,
    duration: "40 mins",
    image: "/haircut3.jpg",

    description:
      "Freehand beard architecture, sharp cheekline razor detailing, double eucalyptus steam towels, and organic shea & cedarwood oil massage.",

    highlights: [
      "Eucalyptus Steam Infusion",
      "Straight Razor Cheek Geometry",
      "Length Balancing",
      "Organic Shea Butter & Balm",
    ],

    popular: true,
    tag: "Signature Ritual",
  },

  {
    id: "the-monarch-experience",
    name: "The Monarch Full VIP Package",
    category: "vip",
    price: 165,
    duration: "90 mins",
    image: "/haircut4.jpg",

    description:
      "Our flagship complete grooming immersion. Signature haircut, full beard sculpt, volcanic mud pore cleanse, and relaxing neck & shoulder massage.",

    highlights: [
      "Haircut & Beard Sculpt",
      "Volcanic Clay Facial Mask",
      "3-Stage Essential Oil Towels",
      "Artisan Refreshment & VIP Suite",
    ],

    popular: true,
    tag: "Ultimate Luxury",
  },

  {
    id: "straight-razor-shave",
    name: "Traditional Hot Lather Shave",
    category: "beard",
    price: 65,
    duration: "45 mins",
    image: "/haircut5.jpg",

    description:
      "Old-world Japanese straight razor shave with warm badger-hair brush lather, pre-shave sandalwood balm, and witch hazel tonic.",

    highlights: [
      "Pre-Shave Sandalwood Oil",
      "Badger Brush Warm Lather",
      "Double Pass Blade Technique",
      "Cold Towel Pore Close",
    ],

    popular: false,
    tag: "Classic Art",
  },

  {
    id: "gray-blending-camo",
    name: "Stealth Gray Blending & Beard Tint",
    category: "cuts",
    price: 70,
    duration: "35 mins",
    image: "/haircut6.jpg",

    description:
      "Subtle, ammonia-free natural tone restoration and crisp beard density enhancement without looking artificial.",

    highlights: [
      "10-Min Fast Application",
      "Zero Brass Fade-out",
      "Natural Matte Luster",
      "Scalp Barrier Treatment",
    ],

    popular: false,
    tag: "Natural Youth",
  },

  {
    id: "scalp-therapy-detox",
    name: "Charcoal & Peppermint Scalp Detox",
    category: "rituals",
    price: 55,
    duration: "30 mins",
    image: "/haircut7.jpg",

    description:
      "Deep follicle clarifying scrub with active charcoal micro-beads, high-frequency ozone comb, and invigorating peppermint mask.",

    highlights: [
      "Active Charcoal Exfoliation",
      "High-Frequency Comb Stimulation",
      "Peppermint Cooling Mask",
      "Tension Release Massage",
    ],

    popular: false,
    tag: "Revitalization",
  },

  {
    id: "father-and-son-bond",
    name: "Heritage Duo (Father & Son)",
    category: "vip",
    price: 130,
    duration: "75 mins",
    image: "/haircut8.jpg",

    description:
      "Two simultaneous or consecutive bespoke haircut sessions with artisan refreshments in our private gentleman lounge.",

    highlights: [
      "Side-by-Side Booking Available",
      "Custom Styling for Both",
      "Complimentary Beverages",
      "VIP Suite Access",
    ],

    popular: false,
    tag: "Generational",
  },
];


export const ADD_ONS = [
  {
    id: "add-scalp-massage",
    name: "10-Min Acupressure Scalp Massage",
    price: 20,
  },

  {
    id: "add-collagen-eye",
    name: "24K Gold Collagen Eye Patches",
    price: 18,
  },

  {
    id: "add-nose-ear-wax",
    name: "Precision Nose & Ear Grooming",
    price: 15,
  },

  {
    id: "add-beard-tint",
    name: "Beard Contour Tint & Density Polish",
    price: 25,
  },
];


export const BARBERS = [
  {
    id: "babatunde-balogun",
    name: "Babatunde Balogun",
    title: "Founder & Master Director",
    experience: "16 Years Experience",
    speciality: "Precision Shears & Executive Hair Architecture",
    avatar: barberData.master,
    rating: 4.99,
    reviewsCount: 486,
    bio:
      "Renowned hair director known for razor-sharp geometric hairlines, flawless drop fades, and bespoke executive styling for discerning gentlemen.",
    availabilityToday: "Today at 3:30 PM & 5:00 PM",
  },

  {
    id: "emeka-okonkwo",
    name: "Emeka Okonkwo",
    title: "Senior Beard Architect",
    experience: "12 Years Experience",
    speciality: "Beard Sculpting & Straight Razor Artistry",
    avatar: barberData.beard,
    rating: 4.97,
    reviewsCount: 352,
    bio:
      "Specialist in sculpted beard gradients, jawline definition, razor symmetry, and hot towel essential oil infusions.",
    availabilityToday: "Today at 4:15 PM & 6:30 PM",
  },

  {
    id: "tobi-adeleke",
    name: "Tobi Adeleke",
    title: "Fade & Wave Texture Specialist",
    experience: "9 Years Experience",
    speciality: "360 Waves, Burst Fades & Clean Edge-Ups",
    avatar: barberData.fadeStyle,
    rating: 4.98,
    reviewsCount: 318,
    bio:
      "Master of seamless skin gradients, 360 wave definition, precision tapers, and contemporary sharp finishes.",
    availabilityToday: "Today at 2:00 PM & 7:15 PM",
  },
];


export const LOOKBOOK_ITEMS = [
  {
    id: "lb-1",
    title: "Executive Skin Taper & Crisp Line-Up",
    category: "Precision Fade",
    barber: "Babatunde Balogun",
    description:
      "Razor-sharp front geometry with smooth low skin taper and natural crown texture.",
    image: barberData.hero,
    tag: "Signature",
  },

  {
    id: "lb-2",
    title: "Imperial Beard Sculpt & Razor Line",
    category: "Beard Art",
    barber: "Emeka Okonkwo",
    description:
      "Sculpted density along jawline with zero-gap razor cheek transition and organic shea oil sheen.",
    image: barberData.beard,
    tag: "Client Favorite",
  },

  {
    id: "lb-3",
    title: "360 Wave Low Drop Fade & Taper",
    category: "Wave & Texture",
    barber: "Tobi Adeleke",
    description:
      "Deep defined wave flow with seamless drop fade around ears and sharp temple framing.",
    image: barberData.fadeStyle,
    tag: "Trending",
  },

  {
    id: "lb-4",
    title: "The Lounge & Private Grooming Suite",
    category: "Atmosphere",
    barber: "OXBEE Barber Shop",
    description:
      "Bespoke leather barber chairs, dark charcoal architectural walls, brushed brass trims, and VIP refreshments.",
    image: barberData.interior,
    tag: "Shop",
  },
];




export const RITUAL_STEPS = [
  {
    step: "01",
    title: "Bespoke Consultation",
    description:
      "Face shape analysis, hair growth vortex mapping, and personal aesthetic alignment over artisan espresso or refreshments.",
  },

  {
    step: "02",
    title: "Eucalyptus Steam Infusion",
    description:
      "Triple-folded hot linen towel saturated with Tasmanian eucalyptus and peppermint to soften hair shafts and open pores.",
  },

  {
    step: "03",
    title: "Precision Craftsmanship",
    description:
      "Hand-honed shears and micro-calibrated clippers creating millimeter-perfect geometry and razor-sharp outlines.",
  },

  {
    step: "04",
    title: "Ice Tonic & Botanical Finish",
    description:
      "Chilled witch hazel pore-sealing press followed by lightweight botanical oils and clean matte finish styling.",
  },
];





export const TESTIMONIALS = [
  {
    quote:
      "OXBEE isn't just a haircut; it's a sanctuary of precision. The edge-up and fade work from Babatunde and the team is the cleanest I've ever experienced.",
    author: "Femi Adeleke",
    role: "Managing Director, Tech Ventures",
    service: "The Monarch VIP Package",
    rating: 5,
  },

  {
    quote:
      "The beard sculpting with Emeka is surgical perfection. The hot towel steam ritual and razor cheekline keep my profile razor-sharp for board meetings.",
    author: "Dr. Chidi Nwosu",
    role: "Surgeon & Executive",
    service: "Royal Beard Sculpt",
    rating: 5,
  },

  {
    quote:
      "The dark charcoal atmosphere, cold drinks, and zero rush make OXBEE the definitive luxury grooming experience.",
    author: "Kolawole Davies",
    role: "Creative Director",
    service: "The OXBEE Signature Cut",
    rating: 5,
  },
];

