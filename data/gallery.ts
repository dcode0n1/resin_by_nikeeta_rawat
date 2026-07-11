export interface GalleryItem {
  id: string;
  title: string;
  category: "wedding" | "jewellery" | "frames" | "furniture" | "memorial" | "decor";
  image: string;
  description: string;
  materials: string[];
  dimensions: string;
  year: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Eternal Union Garland Block",
    category: "wedding",
    /*
      PHOTO DIRECTION:
      A close-up shot of a 10-inch faceted resin hexagon block containing red wedding roses, 
      baby's breath, and gold flakes, catching morning light. Placed on a dark marble surface.
    */
    image: "/images/raw-staging/artwork-02.jpg",
    description: "A monumental 10-inch faceted resin hexagon block preserving a bride's red wedding roses, baby's breath, and gold flakes.",
    materials: ["Preserved Roses", "Baby's Breath", "24k Gold Flakes", "High-index Casting Resin"],
    dimensions: "10\" x 10\" x 3\"",
    year: "2025"
  },
  {
    id: "g2",
    title: "Wildflower Botanical Pendant",
    category: "jewellery",
    /*
      PHOTO DIRECTION:
      A macro shot of a delicate teardrop-shaped gold pendant containing tiny marigold petals, 
      lying on a raw dark charcoal slate slab. Sidelit.
    */
    image: "/images/raw-staging/artwork-05.jpg",
    description: "Delicate micro-pressed golden marigolds and miniature ferns encapsulated in an 18k gold-plated teardrop bezel.",
    materials: ["Marigold Petals", "Fern Leaves", "18k Gold Plated Brass", "UV Resin"],
    dimensions: "1.5\" x 1\"",
    year: "2025"
  },
  {
    id: "g3",
    title: "Vows and Petals Floating Panel",
    category: "frames",
    /*
      PHOTO DIRECTION:
      A brass double-glass hanging frame showing a wedding invitation card surrounded by 
      pressed garland petals and leaves. Hanging on a dark, textured wall.
    */
    image: "/images/raw-staging/artwork-06.jpg",
    description: "A premium double-glass brass hanging frame preserving the wedding card surrounded by a custom layout of dried garland flowers.",
    materials: ["Wedding Invitation", "Garland Petals", "Brass Frame", "Glass"],
    dimensions: "A3 (11.7\" x 16.5\")",
    year: "2026"
  },
  {
    id: "g4",
    title: "Walnut & Turquoise River Table",
    category: "furniture",
    /*
      PHOTO DIRECTION:
      A coffee-table height shot of live-edge walnut wood slabs joined by a deep 
      semi-translucent turquoise resin river. Set on a dark gray rug in a modern lounge.
    */
    image: "/images/raw-staging/artwork-08.jpg",
    description: "A statement coffee table featuring live-edge seasoned walnut slabs divided by a deep semi-translucent turquoise resin river flow.",
    materials: ["Teak Wood Slabs", "Tinted Turquoise Resin", "Matte Black Steel Legs"],
    dimensions: "36\" x 24\" x 18\"",
    year: "2025"
  },
  {
    id: "g5",
    title: "Aura Sphere Memorial",
    category: "memorial",
    /*
      PHOTO DIRECTION:
      A 4-inch resin sphere containing funeral red roses and a silver band, resting 
      on a lighted wooden base. The warm glow lights up the sphere in a dark, quiet study.
    */
    image: "/images/raw-staging/artwork-11.jpg",
    description: "A serene 4-inch resin sphere containing pressed roses from a memorial service, a silver ring, and soft gold highlights.",
    materials: ["Farewell Roses", "Silver Ring Keepsake", "Lucent Resin", "Teak Wood Light Base"],
    dimensions: "4\" Diameter",
    year: "2026"
  },
  {
    id: "g6",
    title: "Lagoon Shoreline Wall Clock",
    category: "decor",
    /*
      PHOTO DIRECTION:
      A 14-inch circular wall clock with ocean waves made of resin on a wooden backing, 
      hanging on a clean concrete wall with minimal brass clock hands.
    */
    image: "/images/raw-staging/artwork-15.jpg",
    description: "A luxurious 14-inch circular wall clock featuring a wood backing with multi-layered resin waves depicting realistic ocean foam.",
    materials: ["MDF Board", "Resin Ocean Waves", "Silent Brass Quartz Mechanism"],
    dimensions: "14\" Diameter",
    year: "2025"
  },
  {
    id: "g7",
    title: "Crimson & Sage Bouquet Square",
    category: "wedding",
    /*
      PHOTO DIRECTION:
      A heavy 9-inch square block showing the full dimensional depth of a bridal bouquet 
      with crimson roses and silver-dollar eucalyptus, set against a dark velvet background.
    */
    image: "/images/raw-staging/artwork-18.jpg",
    description: "A heavy 9-inch square block capturing the full depth of a bridal bouquet, featuring deep crimson roses and eucalyptus leaves.",
    materials: ["Bridal Bouquet Flowers", "Eucalyptus", "UV-Stabilized Resin"],
    dimensions: "9\" x 9\" x 3\"",
    year: "2026"
  },
  {
    id: "g8",
    title: "Petal Drop Resin Jhumkas",
    category: "jewellery",
    /*
      PHOTO DIRECTION:
      Macro shot of traditional silver filigree jhumkas with resin drops holding red rose petals. 
      Hanging from an elegant brass jewelry stand on a dark wood surface.
    */
    image: "/images/raw-staging/artwork-21.jpg",
    description: "Elegant, lightweight traditional jhumkas containing micro rose petals suspended in crystal resin droplets.",
    materials: ["Rose Petals", "Silver Filigree", "Hypoallergenic Ear Hooks"],
    dimensions: "2\" Drop",
    year: "2025"
  },
  {
    id: "g9",
    title: "Herbarium Shadow Box",
    category: "frames",
    /*
      PHOTO DIRECTION:
      A dark wood shadow box frame containing pressed garden flowers arranged in a clean, 
      symmetric gallery grid. Styled on a dark bookshelf next to a brass candle holder.
    */
    image: "/images/raw-staging/artwork-24.jpg",
    description: "A premium solid wood shadow box displaying preserved multi-colored flowers in a structured grid arrangement.",
    materials: ["Pressed Garden Flowers", "Handcrafted Wooden Box", "Glass Panel"],
    dimensions: "12\" x 16\"",
    year: "2025"
  }
];
