
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../types';
import { useToast } from '@/hooks/use-toast';

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();
  
  // Load cart from localStorage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem('kbeauty-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kbeauty-cart', JSON.stringify(cart));
  }, [cart]);
  
  const addToCart = (product: Product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
  };
  
  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
      variant: "default",
    });
  };
  
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };
  
  const clearCart = () => {
    setCart([]);
    
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
      variant: "default",
    });
  };
  
  const cartTotal = cart.reduce(
    (total, item) => {
      const price = item.product.discount > 0 
        ? item.product.price * (1 - item.product.discount / 100) 
        : item.product.price;
      return total + price * item.quantity;
    }, 
    0
  );
  
  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        cartTotal 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
