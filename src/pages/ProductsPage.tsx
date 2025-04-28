import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory, products } from '../data/products';
import { Product } from '../types';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Filter, X } from 'lucide-react';

const ProductsPage = () => {
  const { category } = useParams<{ category: string }>();

  // State for filters and product listing
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract unique brands from products list
  const allBrands = [...new Set(products.map(product => product.brand))];

  // Handle filters and search
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      let filtered = category ? getProductsByCategory(category) : products;

      // Apply search filter
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(term) ||
          product.brand.toLowerCase().includes(term)
        );
      }

      // Apply price range filter
      filtered = filtered.filter(product => {
        const finalPrice = product.discount > 0
          ? product.price * (1 - product.discount / 100)
          : product.price;
        return finalPrice >= priceRange[0] && finalPrice <= priceRange[1];
      });

      // Apply brand filter
      if (selectedBrands.length > 0) {
        filtered = filtered.filter(product => selectedBrands.includes(product.brand));
      }

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 500);
  }, [category, searchTerm, priceRange, selectedBrands]);

  // Handle brand checkbox selection
  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange([0, 50]);
    setSelectedBrands([]);
  };

  // Toggle mobile filter sidebar
  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-light py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-dark mb-8">
          {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products'}
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Section */}
          <div className="md:w-64 space-y-6">
            {/* Mobile Filter Button */}
            <div className="md:hidden flex justify-between items-center mb-4">
              <div className="relative w-full mr-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <button
                onClick={toggleMobileFilter}
                className="flex items-center p-2 rounded-lg border bg-white"
              >
                <Filter size={20} />
              </button>
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:block bg-white p-6 rounded-lg shadow-sm sticky top-24 space-y-6">
              {/* Search */}
              <div>
                <h3 className="font-medium mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple pr-10"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider
                  defaultValue={[0, 50]}
                  max={50}
                  step={1}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value)}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="font-medium mb-4">Brands</h3>
                <div className="space-y-2">
                  {allBrands.map(brand => (
                    <div key={brand} className="flex items-center">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleBrandChange(brand)}
                      />
                      <label
                        htmlFor={`brand-${brand}`}
                        className="text-sm ml-2 cursor-pointer"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={clearFilters}
                className="w-full py-2 bg-gray-light rounded-lg hover:bg-gray-200 text-sm"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products List Section */}
          <div className="flex-1">
            {/* Show loading skeleton while fetching */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow animate-pulse">
                    <div className="h-64 bg-gray-200 rounded-t-xl"></div>
                    <div className="p-4 space-y-2">
                      <div className="h-5 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* Filtered Products Count and Sort */}
                <div className="flex justify-between items-center mb-6">
                  <p>Showing {filteredProducts.length} products</p>
                  <select className="border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-purple">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Best Rating</option>
                  </select>
                </div>

                {/* No Products Found */}
                {filteredProducts.length === 0 ? (
                  <div className="bg-white rounded-lg p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">No products found</h3>
                    <p className="text-gray mb-4">Try adjusting your search or filters.</p>
                    <button onClick={clearFilters} className="btn-primary">
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Mobile Filter Sidebar */}
        {isMobileFilterOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="w-4/5 bg-white h-full p-6 overflow-y-auto">
              {/* Mobile Sidebar Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button onClick={toggleMobileFilter}>
                  <X size={24} />
                </button>
              </div>

              {/* Filters in Mobile Sidebar */}
              {/* ...Price Range and Brands same as desktop... */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;