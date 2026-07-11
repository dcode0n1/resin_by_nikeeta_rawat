export interface CollectionFAQ {
  question: string;
  answer: string;
}

export interface CollectionItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  story: string;
  whyPreserve: string;
  startingPrice: string;
  timeline: string;
  materials: string[];
  options: string[];
  faqs: CollectionFAQ[];
}

export const collections: CollectionItem[] = [
  {
    id: "wedding-preservation",
    slug: "wedding-preservation",
    name: "Wedding Preservation",
    tagline: "Your Wedding Florals, Preserved in Timeless Art",
    /* 
      PHOTO DIRECTION:
      A dramatic, close-up photograph of a bride's wedding garland cast in a solid, faceted 
      crystal-clear resin hexagon block, catching warm morning light. The background should be 
      a dark marble surface, creating a gallery-like atmosphere. Show real flower details (roses/jasmine).
    */
    heroImage: "/images/raw-staging/artwork-01.jpg",
    story: "Your wedding day is a tapestry of fleeting moments. The garland you wore, the bouquet you held—they hold the silent promises of a lifetime. We handcraft these delicate blossoms into glass-like resin artwork, sealing their vibrant beauty and your deepest emotions forever.",
    whyPreserve: "Flowers decay, but memories shouldn't. Wedding garland and bouquet preservation allows you to keep the exact blooms from your special day as a functional, heirloom-quality sculpture in your home, rather than letting them dry out and crumble in a box.",
    startingPrice: "₹8,500",
    timeline: "8 - 12 Weeks (Requires meticulous drying and multi-layer curing)",
    materials: ["Your dried wedding garlands/bouquets", "Sindoor & Mangalsutra (optional inserts)", "Wedding invitation or wedding photo details", "Premium UV-resistant clear resin", "Gold/Silver leaf flakes"],
    options: ["10-inch Faceted Hexagon Block", "9-inch Deep Square Block", "Heart-Shaped Keepsake Block", "Set of matching flower-petal coasters"],
    faqs: [
      {
        question: "When should I send my wedding flowers?",
        answer: "The fresher, the better. Ideally, we should receive your flowers within 2 to 4 days after the ceremony. Keep them in water until shipping or drop-off."
      },
      {
        question: "Will the flowers change color during the process?",
        answer: "Some color shift is natural when drying. Red roses may turn a deeper burgundy, and white flowers can take on a warm cream or light yellow tone. This adds a beautiful vintage, organic quality to the final artwork."
      },
      {
        question: "Can you incorporate other wedding elements?",
        answer: "Absolutely. We frequently cast small elements like wedding invitations, pieces of the groom's sherwani/bride's lehenga, mangalsutra, sindoor, or wedding photographs alongside the flowers."
      }
    ]
  },
  {
    id: "jewellery",
    slug: "jewellery",
    name: "Jewellery Collection",
    tagline: "Wear Your Memories Close to Your Heart",
    /* 
      PHOTO DIRECTION:
      A detailed macro shot of a delicate botanical resin pendant and jhumkas lying on a raw piece of 
      dark charcoal slate. Soft sidelight highlights the micro rose petals and gold foil flakes inside the resin.
    */
    heroImage: "/images/raw-staging/artwork-12.jpg",
    story: "Intimate pieces designed to be worn. Each pendant, bracelet, and ring contains micro-elements of your flowers, hair, or precious keepsakes, suspended in crystal clarity and framed in premium silver or gold plating.",
    whyPreserve: "Wearable preservation transforms sentimental flowers into personal talismans. It allows you to carry the essence of a wedding, a milestone, or a loved one with you every day, blending fine craftsmanship with emotional depth.",
    startingPrice: "₹1,800",
    timeline: "4 - 6 Weeks",
    materials: ["Micro-pressed flower petals", "Delicate gold/silver foil accents", "Premium anti-tarnish sterling silver or 18k gold-plated bezels", "Optical-grade resin"],
    options: ["Teardrop Botanical Pendant", "Adjustable Resin Blossom Ring", "Floating Petal Cuff Bracelet", "Traditional Resin Jhumkas"],
    faqs: [
      {
        question: "How many flowers do you need for jewelry?",
        answer: "We only need a few loose petals. You can ship them in a simple paper envelope. Even pre-dried or old flowers work beautifully."
      },
      {
        question: "How do I care for my resin jewelry?",
        answer: "Avoid exposing it to perfume, direct sunlight for extended periods, or harsh cleaning chemicals. Clean gently with a soft microfiber cloth."
      }
    ]
  },
  {
    id: "frames",
    slug: "frames",
    name: "Floral Frames",
    tagline: "A Canvas of Nature and Emotion on Your Walls",
    /* 
      PHOTO DIRECTION:
      An editorial photo showing a brass double-glass frame with pressed white roses and green ferns 
      hanging on a dark, textured plaster wall with elegant shadow casting. Soft natural window light.
    */
    heroImage: "/images/raw-staging/artwork-26.jpg",
    story: "A blend of traditional botanical pressing and modern resin casting. These wall-hanging panels capture the flat layout of your wedding bouquet or ceremonial arrangements, arranged as a custom fine-art composition.",
    whyPreserve: "If you want a flat, gallery-like display that feels like a painting, pressed floral frames are the ultimate choice. They highlight the intricate, skeletal details of petals and leaves pressed flat and encapsulated under a crystal coat.",
    startingPrice: "₹6,500",
    timeline: "6 - 8 Weeks",
    materials: ["Fully pressed flowers and foliage", "Bespoke wooden or brass frames", "High-clarity UV-stabilized resin layers", "Art-glass backing"],
    options: ["Double-glass Brass Hanging Frame (A4/A3)", "Solid Teakwood Shadow Box Frame", "Floating Resin Wall Panel"],
    faqs: [
      {
        question: "What is the difference between blocks and frames?",
        answer: "Blocks are 3D cast pieces preserving the full shape of the flower (usually 2-3 inches deep). Frames use pressed, flat flowers that are thin and display like a 2D painting."
      },
      {
        question: "How long do the colors in pressed frames last?",
        answer: "We treat pressed flowers with UV-absorbers to minimize fading, but minor fading over years is normal. We recommend hanging them away from direct, harsh sunlight to maximize color longevity."
      }
    ]
  },
  {
    id: "memorial",
    slug: "memorial",
    name: "Memorial Collection",
    tagline: "Honoring Legacies, Preserving Love",
    /* 
      PHOTO DIRECTION:
      A respectful, warm photograph of a clear resin sphere containing memorial service flowers and a silver ring, 
      sitting on a softly lit wooden base. The sphere emits a gentle, reassuring glow in a dimly lit, quiet study.
    */
    heroImage: "/images/raw-staging/artwork-33.jpg",
    story: "An artwork built on deep reverence. We craft quiet, respectful memorial pieces using flowers from farewell services, hair locks, pet fur, or personal keepsakes, providing comfort through a tangible connection to those who have passed.",
    whyPreserve: "During times of loss, having a beautiful, permanent tribute offers immense comfort. Rather than letting goodbye flowers wilt away, preserving them creates an heirloom of love and remembrance that stays with your family forever.",
    startingPrice: "₹4,500",
    timeline: "6 - 8 Weeks",
    materials: ["Farewell ceremony flowers", "Hair locks or pet fur (optional)", "Photographs or small letters", "Eco-friendly, ultra-clear resin", "Velvet-bottom surface protection"],
    options: ["Eternal Flame Memorial Sculpture", "Round Sphere Keepsake on Wooden Light Base", "Memory Box Tray with integrated photo slot"],
    faqs: [
      {
        question: "Can you include a photo or writing?",
        answer: "Yes, we can seal photos, handwritten notes, or small tokens like rings, keys, or dog tags inside the memorial piece."
      },
      {
        question: "How are ashes handled?",
        answer: "Currently, we only incorporate hair, pet fur, dried flowers, and small personal belongings. If you wish to include ashes in the future, please consult with us directly so we can ensure the utmost care and respect during handling."
      }
    ]
  },
  {
    id: "home-decor",
    slug: "home-decor",
    name: "Home Decor",
    tagline: "Functional Art for Sophisticated Living",
    /* 
      PHOTO DIRECTION:
      A luxury resin serving tray with dried flowers and gold leaf flakes, complete with polished brass handles. 
      Styled on a modern raw concrete console table with a ceramic vase and dry twigs in the background.
    */
    heroImage: "/images/raw-staging/artwork-45.jpg",
    story: "Where functionality meets gallery-grade aesthetics. From serving trays embedded with gold leaf and florals to statement wall clocks that mirror ocean shores, our home decor pieces bring organic luxury into your daily routines.",
    whyPreserve: "Why settle for standard home accessories when you can own bespoke functional art? These pieces are designed to be conversational focal points, elevators of your living room, dining room, or vanity with handcrafted luxury.",
    startingPrice: "₹3,500",
    timeline: "4 - 6 Weeks",
    materials: ["Selected botanical accents", "Gold/Copper leaf foils", "Premium acrylic and wood bases", "Heat-resistant top-coat resin", "Polished brass handles"],
    options: ["Luxury Hexagonal Serving Tray", "Bespoke Ocean Wave Wall Clock", "Set of 6 Geode Coasters with stand", "Ring Holder cone with gold flakes"],
    faqs: [
      {
        question: "Are the serving trays heat-resistant?",
        answer: "Yes, we apply a high-grade, heat-resistant top coat that protects the tray surface from warm cups or plates up to 90°C. However, avoid placing hot cookware directly from the stove onto the resin."
      },
      {
        question: "Can I choose my own color theme?",
        answer: "Absolutely. During our consultation, we will map out a custom color palette (e.g., deep emerald and gold, oceanic turquoise, or muted champagne) to match your home's interior design."
      }
    ]
  },
  {
    id: "furniture",
    slug: "furniture",
    name: "Bespoke Furniture",
    tagline: "High-End Statement Installations",
    /* 
      PHOTO DIRECTION:
      A wide-angle, premium shot of a live-edge walnut dining table with a semi-translucent turquoise resin river 
      flowing through the center. The table is set in a luxury contemporary dining room with minimalist seating.
    */
    heroImage: "/images/raw-staging/artwork-51.jpg",
    story: "Majestic statement pieces that anchor a room. We pair raw slabs of premium seasoned woods like Walnut, Teak, and Maple with deep, crystalline resin flows to create river tables, coffee tables, and desks that represent the pinnacle of organic design.",
    whyPreserve: "Resin furniture is the ultimate marriage of nature's irregularity and human craftsmanship. Each table is entirely unique, utilizing natural wood grains, knots, and custom resin pigments to create a permanent masterpiece that lasts generations.",
    startingPrice: "₹45,000",
    timeline: "12 - 16 Weeks (Requires wood seasoning, precise alignment, and heavy polishing)",
    materials: ["Live-edge seasoned wood (Walnut, Teak, Acacia)", "Industrial-grade casting resin", "Bespoke powder-coated steel or brass legs", "Food-safe oil & wax wood finish"],
    options: ["Live-Edge Resin River Coffee Table", "Luxury Dining Table (6-8 Seater)", "Executive Office Desk", "Resin-infused Wood Wall Art Panel"],
    faqs: [
      {
        question: "How scratch-resistant is the table surface?",
        answer: "We use a highly durable commercial-grade resin that resists scratches from daily items. Like any high-end wooden furniture, it should be treated with care, and coasters should be used. Minor scratches can be polished out over time."
      },
      {
        question: "Can I select the specific wood slab?",
        answer: "Yes. We source several wood slabs matching your desired dimensions and show you photos/videos so you can select the exact piece of wood that will define your table."
      }
    ]
  },
  {
    id: "corporate-gifts",
    slug: "corporate-gifts",
    name: "Corporate Gifts & Awards",
    tagline: "Commemorate Milestones with Prestigious Art",
    /* 
      PHOTO DIRECTION:
      An arrangement of geometric clear resin awards with embedded brushed brass plates, standing on 
      a dark walnut executive desk with clean architectural lighting highlighting the crisp edges.
    */
    heroImage: "/images/raw-staging/artwork-60.jpg",
    story: "Move away from generic trophies. We design custom awards, employee gifts, and branding installations that incorporate raw textures, metals, and clear resins, representing your corporate values with luxury craftsmanship.",
    whyPreserve: "Outstanding achievements deserve outstanding recognition. Custom resin awards stand out on executive desks, communicating premium quality, stability, and artistic innovation that reflects your brand's prestige.",
    startingPrice: "₹2,500 (Minimum order quantities apply)",
    timeline: "6 - 10 Weeks (Depending on quantity)",
    materials: ["Eco-resin with custom tinting", "Embedded metal plates / logos", "Polished wooden bases", "Laser engraving details"],
    options: ["Custom geometric brand awards", "Encapsulated product replica blocks", "Executive paperweights & desk organizers"],
    faqs: [
      {
        question: "Is there a minimum order quantity (MOQ) for corporate gifts?",
        answer: "For fully bespoke designs, our standard MOQ is 10 units. However, for large-scale desktop items or custom trophies, we can accommodate smaller quantities. Please contact us for a direct quote."
      },
      {
        question: "Can you embed our actual product inside the resin?",
        answer: "Yes, provided the product material does not react with resin. Metals, plastics, and dried organic matter cast perfectly. We will conduct test casts to guarantee success."
      }
    ]
  },
  {
    id: "name-plates",
    slug: "name-plates",
    name: "Bespoke Name Plates",
    tagline: "An Elegant Welcome to Your Sanctuary",
    /* 
      PHOTO DIRECTION:
      A close-up of a live-edge teakwood nameplate coated in high-gloss clear resin, with embedded 
      dried baby's breath flowers, gold leaf, and custom brass lettering spelling out a family name.
    */
    heroImage: "/images/raw-staging/artwork-61.jpg",
    story: "Your threshold deserves a statement of identity. We design custom family, home, and office name plates that merge natural wood, dried flowers, gold leaf, and floating metal lettering, sealed under a brilliant gloss coat.",
    whyPreserve: "A name plate is the first detail visitors see. A handcrafted resin name plate instantly signals attention to detail, luxury, and warmth, establishing a beautiful entryway for your home or office.",
    startingPrice: "₹4,200",
    timeline: "4 - 6 Weeks",
    materials: ["Premium Teak or Oak wood backings", "Cast botanicals or gold dust", "High-visibility 3D acrylic or brass lettering", "Weatherproof outdoor-grade resin coating"],
    options: ["Minimalist Wood & Clear Resin Nameplate", "Floral Botanical Archway Nameplate", "Modern Backlit LED Resin Nameplate"],
    faqs: [
      {
        question: "Are the name plates weatherproof?",
        answer: "Yes, we apply an extra layer of marine-grade UV-resistant resin. However, for maximum lifespan, we recommend installing them under a porch or semi-shaded entryway away from direct rain and prolonged direct afternoon sun."
      },
      {
        question: "How do I mount the name plate?",
        answer: "All name plates come with pre-installed heavy-duty keyhole slots on the back or elegant brass studs for mounting. Screws and wall plugs are included."
      }
    ]
  }
];
