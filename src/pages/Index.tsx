
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoryCard from '../components/CategoryCard';
import Newsletter from '../components/Newsletter';
import { categories, getBestsellers, getNewArrivals, getDiscountedProducts } from '../data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [discounted, setDiscounted] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading delay
    setTimeout(() => {
      setBestsellers(getBestsellers());
      setNewArrivals(getNewArrivals());
      setDiscounted(getDiscountedProducts());
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-kbeauty-gray-dark text-center mb-10">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard 
                key={category.id}
                title={category.name}
                image={category.image}
                path={category.path}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Tabs */}
      <section className="py-16 bg-kbeauty-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-kbeauty-gray-dark text-center mb-10">
            Featured Products
          </h2>
          
          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-pulse flex flex-col items-center">
                <div className="w-48 h-8 bg-gray-200 rounded mb-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
                      <div className="bg-gray-200 h-64 w-full"></div>
                      <div className="p-4 space-y-3">
                        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Tabs defaultValue="bestsellers">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="bestsellers" className="px-6">Bestsellers</TabsTrigger>
                  <TabsTrigger value="new" className="px-6">New Arrivals</TabsTrigger>
                  <TabsTrigger value="sale" className="px-6">On Sale</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="bestsellers">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {bestsellers.map(product => (
                    <div key={product.id} className="product-card">
                      <img src={product.image} alt={product.name} className="product-card-img" />
                      <div className="p-4">
                        <h3 className="font-medium text-kbeauty-gray-dark">{product.name}</h3>
                        <p className="text-sm text-kbeauty-gray">{product.brand}</p>
                        <div className="mt-2 flex justify-between items-center">
                          <span className="font-semibold text-kbeauty-gray-dark">
                            ${product.price.toFixed(2)}
                          </span>
                          <div className="flex text-yellow-400">
                            {'★'.repeat(Math.floor(product.rating))}
                            {'☆'.repeat(5 - Math.floor(product.rating))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="new">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {newArrivals.map(product => (
                    <div key={product.id} className="product-card">
                      <div className="relative">
                        <img src={product.image} alt={product.name} className="product-card-img" />
                        <div className="absolute top-2 left-2 bg-kbeauty-purple text-white px-2 py-1 text-xs rounded">
                          NEW
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-kbeauty-gray-dark">{product.name}</h3>
                        <p className="text-sm text-kbeauty-gray">{product.brand}</p>
                        <div className="mt-2 flex justify-between items-center">
                          <span className="font-semibold text-kbeauty-gray-dark">
                            ${product.price.toFixed(2)}
                          </span>
                          <div className="flex text-yellow-400">
                            {'★'.repeat(Math.floor(product.rating))}
                            {'☆'.repeat(5 - Math.floor(product.rating))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="sale">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {discounted.map(product => (
                    <div key={product.id} className="product-card">
                      <div className="relative">
                        <img src={product.image} alt={product.name} className="product-card-img" />
                        <div className="absolute top-2 right-2 bg-kbeauty-red text-white px-2 py-1 text-xs rounded">
                          {product.discount}% OFF
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-kbeauty-gray-dark">{product.name}</h3>
                        <p className="text-sm text-kbeauty-gray">{product.brand}</p>
                        <div className="mt-2 flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-kbeauty-red">
                              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                            </span>
                            <span className="text-kbeauty-gray text-sm line-through ml-2">
                              ${product.price.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex text-yellow-400">
                            {'★'.repeat(Math.floor(product.rating))}
                            {'☆'.repeat(5 - Math.floor(product.rating))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Index;
