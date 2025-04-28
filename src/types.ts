
export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  description?: string;
  category: string;
  isNew?: boolean;
  stock?: number;
  ingredients?: string[];
  howToUse?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Category = {
  id: number;
  name: string;
  path: string;
  image: string;
  count: number;
};
