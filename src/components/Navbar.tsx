
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart } = useCart();
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  const categories = [
    { name: 'Skincare', path: '/products/skincare' },
    { name: 'Makeup', path: '/products/makeup' },
    { name: 'Masks', path: '/products/masks' },
    { name: 'Sets', path: '/products/sets' },
  ];

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold text-kbeauty-purple">
            K-BEAUTY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {categories.map(category => (
              <Link 
                key={category.name}
                to={category.path}
                className="text-kbeauty-gray-dark hover:text-kbeauty-purple transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Toggle */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-kbeauty-gray-dark hover:text-kbeauty-purple transition-colors"
            >
              <Search size={20} />
            </button>
            
            {/* User Account */}
            <Link to="/account" className="text-kbeauty-gray-dark hover:text-kbeauty-purple transition-colors">
              <User size={20} />
            </Link>
            
            {/* Cart */}
            <Link to="/cart" className="text-kbeauty-gray-dark hover:text-kbeauty-purple transition-colors relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-kbeauty-red text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </Badge>
              )}
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-kbeauty-gray-dark hover:text-kbeauty-purple transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pt-3 pb-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-kbeauty-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-kbeauty-purple"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-kbeauty-gray-dark">
                <Search size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.name}>
                  <Link 
                    to={category.path}
                    className="block py-2 text-kbeauty-gray-dark hover:text-kbeauty-purple transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
