export interface JournalPost {
  id: string;
  title: string;
  slug: string;
  category: "Flower Preservation" | "Wedding Inspiration" | "Behind the Scenes" | "Care Guides" | "Studio Stories";
  excerpt: string;
  content: string; // Markdown or simple HTML
  readTime: string;
  date: string;
  coverImage: string;
}

export const journalPosts: JournalPost[] = [
  {
    id: "jp1",
    title: "The Art of Slow Drying: How We Prep Your Wedding Garlands",
    slug: "art-of-slow-drying",
    category: "Flower Preservation",
    excerpt: "Behind the scenes of our moisture extraction process that prevents flowers from rotting and ensures vibrant colors under resin.",
    readTime: "5 min read",
    date: "June 15, 2026",
    /*
      PHOTO DIRECTION:
      Behind-the-scenes shot of silica gel crystals being sifted gently by hand between the 
      petals of a red rose in a studio workshop. Focus on hand action and textures of the flowers.
    */
    coverImage: "/images/raw-staging/artwork-30.jpg",
    content: `
      <p>When wedding flowers arrive at our studio, they are filled with life, moisture, and fragile beauty. The immediate reaction of many is to put them in resin right away. However, casting fresh flowers directly into resin is a recipe for disaster: the moisture triggers decay, turning the petals brown and moldy inside the cured block within days.</p>
      
      <h3>Step 1: The Inspection and Selection</h3>
      <p>We examine every single petal. We select only the blooms that are in prime condition, removing bruised outer layers. Every flower represents a memory, so we treat even the smallest bud with absolute care.</p>
      
      <h3>Step 2: Silica Gel Encapsulation</h3>
      <p>To preserve the three-dimensional structure of flowers (especially roses, lilies, and marigolds), we use a specialized conservation-grade silica gel. We carefully sift the gel between the petals, supporting them so they don't flatten under the weight of the powder.</p>
      
      <h3>Step 3: Patience is the Key</h3>
      <p>The drying process takes anywhere from 7 to 14 days depending on the moisture content and thickness of the flower. Only when the flowers are completely dry—feeling like delicate parchment paper—are they ready for their resin bath.</p>
    `
  },
  {
    id: "jp2",
    title: "Caring for Your Resin Heirloom: 3 Rules to Remember",
    slug: "caring-for-resin-heirlooms",
    category: "Care Guides",
    excerpt: "Discover how to maintain the crystal-clear clarity of your customized resin artwork for decades.",
    readTime: "3 min read",
    date: "May 28, 2026",
    /*
      PHOTO DIRECTION:
      A hand using a soft dark microfiber cloth to clean fingerprints off a glossy, 
      shiny resin block resting on a walnut table. The block catches side lighting.
    */
    coverImage: "/images/raw-staging/artwork-34.jpg",
    content: `
      <p>Resin is a highly durable material, but like fine art or luxury furniture, it requires proper care to preserve its pristine, glass-like shine for years to come. Here are the three primary guidelines to protect your investment.</p>
      
      <h3>1. Shield from Direct UV Rays</h3>
      <p>We use premium, museum-grade UV-resistant resin in our studio. However, continuous, direct exposure to solar radiation over years can still cause minor yellowing. Position your blocks, frames, and furniture in spaces that receive indirect light rather than directly under harsh afternoon sunbeams.</p>
      
      <h3>2. Avoid Harsh Chemical Solvents</h3>
      <p>Cleaners containing alcohol, bleach, ammonia, or abrasives will strip the glossy finish of the resin, leaving it looking cloudy. Use only a soft micro-fiber cloth dampened with clean water or mild dish soap to wipe away dust and fingerprints.</p>
      
      <h3>3. Keep Away from Intense Heat</h3>
      <p>While our household resin is heat-resistant up to 90°C (perfect for mugs and warm plates), extreme temperatures (like hot pans directly from a stove, or setting a heavy block right on top of a heater radiator) can temporarily soften the resin, leading to indentations.</p>
    `
  },
  {
    id: "jp3",
    title: "A Groom's Gift: Preserving a Farewell Rose",
    slug: "grooms-gift-farewell-rose",
    category: "Studio Stories",
    excerpt: "The emotional story behind a memorial sphere created to honor a grandfather's silent blessing on a wedding day.",
    readTime: "6 min read",
    date: "April 12, 2026",
    /*
      PHOTO DIRECTION:
      A single red rose preserved inside a crystal clear resin sphere with a gold leaf 
      swirl wrapping around its stem, resting on a polished wooden base on a study desk.
    */
    coverImage: "/images/raw-staging/artwork-40.jpg",
    content: `
      <p>Last month, we received a single red rose in a plastic tube from a client named Aarav. It arrived slightly wilted, but Aarav's note explained its profound meaning. His grandfather had passed away just two days before Aarav's wedding. Aarav had placed this rose on his grandfather's empty chair during the vows, carrying it with him through the reception.</p>
      
      <p>He wanted us to preserve it in a sphere so it would sit on his desk—a daily reminder of his grandfather's spiritual presence and the love that surrounded their union.</p>
      
      <h3>Crafting the Tribute</h3>
      <p>We dried the single rose with intense focus. To symbolize grandfatherly guidance, we suspended it in a clear 4-inch sphere with a subtle swirl of gold leaf that wrapped around the stem like a warm, protective light. Aarav's grandfather's favorite fountain pen clip was also cast gently at the bottom of the base.</p>
      
      <p>When Aarav collected the finished piece, there were tears in the studio. It was a beautiful reminder that our work isn't just about chemical curation—it is about honoring legacies.</p>
    `
  }
];
