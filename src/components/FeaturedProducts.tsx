import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

// Props type for FeaturedProducts component
type FeaturedProductsProps = {
  title: string;
  products: Product[];
};

const FeaturedProducts = ({ title, products }: FeaturedProductsProps) => {
  const [startIndex, setStartIndex] = useState(0); // Track starting index of visible products
  const displayCount = 4; // Number of products to show at once

  // Scroll to previous products
  const handlePrev = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };

  // Scroll to next products
  const handleNext = () => {
    setStartIndex(prev => Math.min(products.length - displayCount, prev + 1));
  };

  // Get the currently visible products based on the index
  const visibleProducts = products.slice(startIndex, startIndex + displayCount);

  // Check if scrolling left/right is possible
  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex < products.length - displayCount;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-kbeauty-gray-dark">{title}</h2>

          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border ${
                canScrollLeft
                  ? 'border-kbeauty-purple text-kbeauty-purple hover:bg-kbeauty-purple hover:text-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              } transition-colors`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border ${
                canScrollRight
                  ? 'border-kbeauty-purple text-kbeauty-purple hover:bg-kbeauty-purple hover:text-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              } transition-colors`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
