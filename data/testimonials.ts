export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  quotation: string;
  service: string;
  image: string;
  fullStory: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    clientName: "Meera & Rohan Sen",
    location: "Mumbai",
    quotation: "Walking past our wedding garland block in the hallway brings back the exact fragrance, music, and joy of that day. It is the most precious piece of art in our house.",
    service: "Wedding Garland Preservation Block",
    /*
      PHOTO DIRECTION:
      A candid, warm-toned portrait of a laughing bride (Meera) and groom (Rohan) in traditional 
      Indian wedding attire, framed as a close-up profile. Natural sunlight.
    */
    image: "/images/raw-staging/artwork-20.jpg",
    fullStory: "Meera sent us her wedding garlands just two days after their traditional ceremony in Mumbai. The roses were deep scarlet and the jasmine buds were opening. We preserved the main blooms inside a 10-inch faceted hexagon, adding a few flakes of gold to match her wedding lehenga's embroidery. The result is a stunning, clear crystal prism that sits on their entry console, catching the light every morning."
  },
  {
    id: "t2",
    clientName: "Dr. Ananya Nair",
    location: "Bangalore",
    quotation: "I wanted a way to keep my late mother's garden flowers with me. The resin jhumkas and the small botanical sphere are so beautiful and carry her spirit in such a delicate way.",
    service: "Memorial Keepsakes & Wearable Art",
    /*
      PHOTO DIRECTION:
      A warm, natural portrait of a woman in her mid-30s (Ananya) standing in front of a green 
      sunlit garden glass greenhouse. Muted natural color grading.
    */
    image: "/images/raw-staging/artwork-22.jpg",
    fullStory: "Ananya lost her mother, who was an avid gardener in Bangalore. She harvested several small daisies and forget-me-nots from her mother's greenhouse. We pressed some petals for a pair of sterling silver jhumkas and cast the remaining small buds inside a round sphere, resting on a lighted wooden base. Ananya now has a personal, beautiful memorial that brings warmth instead of sorrow."
  },
  {
    id: "t3",
    clientName: "Vikram Malhotra",
    location: "New Delhi",
    quotation: "The river dining table is a masterclass in organic luxury. Every guest who walks into our home is completely mesmerized by the wood grain and deep turquoise water flow.",
    service: "Live-Edge Resin River Dining Table",
    /*
      PHOTO DIRECTION:
      A portrait of a male designer (Vikram) in his 40s in a contemporary, minimalist loft interior 
      with exposed concrete walls and warm wood accents. Strong vertical lines.
    */
    image: "/images/raw-staging/artwork-25.jpg",
    fullStory: "Vikram, an interior designer based in Delhi, commissioned a custom 8-seater dining table. We sourced a premium live-edge teak wood slab and spent weeks matching the resin color to an ocean-depth turquoise hue Vikram desired. The wood was seasoned to perfection, sanded through 10 grits, and finished with organic oils. It stands as a structural centerpiece in his modern penthouse."
  }
];
