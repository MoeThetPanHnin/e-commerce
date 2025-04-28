
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Product } from '../types';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart(product);
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="product-card block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-card-img transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-kbeauty-purple text-white px-2 py-1 text-xs rounded">
            NEW
          </div>
        )}
        
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-kbeauty-red text-white px-2 py-1 text-xs rounded">
            {product.discount}% OFF
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2 bg-white bg-opacity-90 transition-opacity duration-300"
             style={{ opacity: isHovered ? 1 : 0 }}>
          <button 
            className="p-2 rounded-full bg-kbeauty-pink text-kbeauty-gray-dark hover:bg-opacity-80 transition-colors"
            title="Add to wishlist"
          >
            <Heart size={18} />
          </button>
          
          <button 
            className="p-2 rounded-full bg-kbeauty-purple text-white hover:bg-kbeauty-purple-dark transition-colors"
            title="Add to cart"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-kbeauty-gray-dark">{product.name}</h3>
          <div className="text-sm font-semibold">
            {product.discount > 0 ? (
              <div className="flex flex-col items-end">
                <span className="text-kbeauty-red">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                <span className="text-kbeauty-gray line-through text-xs">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-kbeauty-gray-dark">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
        <p className="text-sm text-kbeauty-gray truncate">{product.brand}</p>
        <div className="mt-2 flex items-center">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="ml-1 text-xs text-kbeauty-gray">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
