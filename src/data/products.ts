
import { Product, Category } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Hyaluronic Acid Serum",
    brand: "COSRX",
    price: 28.99,
    discount: 15,
    rating: 4.8,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "A hydrating serum that delivers deep moisture to the skin. Contains 4 types of hyaluronic acid to plump skin and reduce fine lines.",
    category: "skincare",
    isNew: true,
    stock: 25,
    ingredients: ["Water", "Butylene Glycol", "Glycerin", "Sodium Hyaluronate", "Panthenol", "Allantoin"],
    howToUse: "Apply 2-3 drops to clean skin. Gently pat into skin until fully absorbed. Use morning and night."
  },
  {
    id: 2,
    name: "Snail Mucin Power Essence",
    brand: "COSRX",
    price: 25.00,
    discount: 0,
    rating: 4.9,
    reviews: 3450,
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Formulated with 96% Snail Secretion Filtrate, this essence repairs damaged skin, improves skin vitality, and moisturizes.",
    category: "skincare",
    isNew: false,
    stock: 42,
    ingredients: ["Snail Secretion Filtrate", "Betaine", "Butylene Glycol", "1,2-Hexanediol", "Sodium Polyacrylate"],
    howToUse: "After cleansing and toning, apply an appropriate amount and pat gently until absorbed."
  },
  {
    id: 3,
    name: "Water Sleeping Mask",
    brand: "Laneige",
    price: 29.00,
    discount: 0,
    rating: 4.7,
    reviews: 1890,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "An overnight mask that deeply hydrates and revitalizes skin while you sleep. Wake up to smoother, more radiant skin.",
    category: "masks",
    isNew: false,
    stock: 18,
    ingredients: ["Water", "Butylene Glycol", "Cyclopentasiloxane", "Glycerin", "Cyclohexasiloxane"],
    howToUse: "Apply as the final step of your evening skincare routine. Rinse off in the morning."
  },
  {
    id: 4,
    name: "Lip Sleeping Mask",
    brand: "Laneige",
    price: 22.00,
    discount: 10,
    rating: 4.9,
    reviews: 2670,
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "A leave-on lip mask that soothes and moisturizes for smoother, more supple lips overnight.",
    category: "skincare",
    isNew: false,
    stock: 31,
    ingredients: ["Diisostearyl Malate", "Hydrogenated Polyisobutene", "Phytosteryl/Isostearyl/Cetyl/Stearyl/Behenyl Dimer Dilinoleate"],
    howToUse: "Apply generously to lips before bedtime."
  },
  {
    id: 5,
    name: "Waterproof Cushion Foundation",
    brand: "Etude House",
    price: 26.99,
    discount: 0,
    rating: 4.5,
    reviews: 865,
    image: "https://images.unsplash.com/photo-1631730358267-3bb7e9f0dc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1631730358267-3bb7e9f0dc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "A lightweight cushion foundation that provides medium to full coverage with a natural dewy finish.",
    category: "makeup",
    isNew: false,
    stock: 24,
    ingredients: ["Water", "Cyclopentasiloxane", "Zinc Oxide", "Ethylhexyl Methoxycinnamate"],
    howToUse: "Press the puff gently onto the cushion and apply onto face. Build coverage as needed."
  },
  {
    id: 6,
    name: "Pimple Patch Set",
    brand: "COSRX",
    price: 14.99,
    discount: 0,
    rating: 4.8,
    reviews: 3210,
    image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631730358267-3bb7e9f0dc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Hydrocolloid patches that help reduce inflammation and speed up healing of pimples overnight.",
    category: "skincare",
    isNew: true,
    stock: 78,
    ingredients: ["Cellulose gum", "Styrene Isoprene Styrene Block Copolymer", "Polyisobutylene"],
    howToUse: "Apply patch directly onto clean, dry skin over the blemish. Leave on for at least 6 hours."
  },
  {
    id: 7,
    name: "Aloe Vera Soothing Gel",
    brand: "Nature Republic",
    price: 10.99,
    discount: 20,
    rating: 4.7,
    reviews: 2940,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Multi-use gel with 92% aloe vera extract to soothe, hydrate, and cool the skin. Can be used on face, body, and hair.",
    category: "skincare",
    isNew: false,
    stock: 120,
    ingredients: ["Aloe Barbadensis Leaf Extract", "Glycerin", "Carbomer", "Propylene Glycol"],
    howToUse: "Apply a generous amount to face, body, or hair as needed."
  },
  {
    id: 8,
    name: "Honey Ceramide Full Moisture Cream",
    brand: "COSRX",
    price: 30.00,
    discount: 0,
    rating: 4.6,
    reviews: 1345,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Rich moisturizing cream with honey extract and ceramides to strengthen the skin barrier and lock in moisture.",
    category: "skincare",
    isNew: false,
    stock: 45,
    ingredients: ["Honey Extract", "Ceramide NP", "Butylene Glycol", "Glycerin", "Beeswax"],
    howToUse: "Apply to face and neck after serums. Can be used day and night."
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Skincare",
    path: "/products/skincare",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: 42
  },
  {
    id: 2,
    name: "Makeup",
    path: "/products/makeup",
    image: "https://images.unsplash.com/photo-1631730358267-3bb7e9f0dc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: 28
  },
  {
    id: 3,
    name: "Masks",
    path: "/products/masks",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: 15
  },
  {
    id: 4,
    name: "Sets",
    path: "/products/sets",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    count: 10
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: number, limit = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};

export const getNewArrivals = (limit = 4): Product[] => {
  return products
    .filter(product => product.isNew)
    .slice(0, limit);
};

export const getBestsellers = (limit = 4): Product[] => {
  return [...products]
    .sort((a, b) => b.rating * b.reviews - a.rating * a.reviews)
    .slice(0, limit);
};

export const getDiscountedProducts = (limit = 4): Product[] => {
  return products
    .filter(product => product.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, limit);
};
