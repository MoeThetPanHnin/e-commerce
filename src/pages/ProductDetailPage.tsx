import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById, getRelatedProducts } from '../data/products';
import { Star, MinusCircle, PlusCircle, ShoppingCart, Heart, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import ProductCard from '../components/ProductCard';
import { Product } from '@/types';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Product and related data
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  // UI state
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch product and related products on mount
  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);

    setTimeout(() => {
      if (id) {
        const productData = getProductById(Number(id));
        if (productData) {
          setProduct(productData);
          setSelectedImage(productData.images[0]);

          const related = getRelatedProducts(Number(id));
          setRelatedProducts(related);
        }
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  // Decrease product quantity
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Increase product quantity
  const increaseQuantity = () => {
    if (quantity < (product?.stock || 10)) setQuantity(quantity + 1);
  };

  // Add product to cart
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} has been added to your cart.`,
        duration: 3000,
      });
    }
  };

  // Show loading skeleton while fetching
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-light py-12">
        <div className="container mx-auto px-4 animate-pulse">
          <div className="h-5 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 space-y-4">
              <div className="h-96 bg-gray-200 rounded-xl"></div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-20 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show if product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-light py-12 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold text-gray-dark">Product Not Found</h1>
          <p className="text-gray">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-light py-8 md:py-12">
      <div className="container mx-auto px-4">

        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray mb-6">
          <Link to="/" className="hover:text-purple">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/products" className="hover:text-purple">Products</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to={`/products/${product.category}`} className="hover:text-purple capitalize">
            {product.category}
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-gray-dark">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
              <img src={selectedImage} alt={product.name} className="w-full h-96 object-contain p-4" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-lg overflow-hidden border-2 ${
                    selectedImage === image ? 'border-purple' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`Product ${idx}`} className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 space-y-6">
            {product.isNew && (
              <div className="bg-purple text-white px-3 py-1 text-xs rounded-full w-fit">
                NEW
              </div>
            )}
            <h1 className="text-3xl font-semibold text-gray-dark">{product.name}</h1>
            <p className="text-gray">{product.brand}</p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                ))}
              </div>
              <span className="text-gray">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              {product.discount > 0 ? (
                <>
                  <span className="text-2xl font-bold text-red">
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  <span className="line-through text-gray">
                    ${product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-dark">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-gray-dark">{product.description}</p>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={decreaseQuantity}
                className="text-gray-dark hover:text-purple"
                disabled={quantity <= 1}
              >
                <MinusCircle size={24} />
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="text-gray-dark hover:text-purple"
                disabled={quantity >= (product.stock || 10)}
              >
                <PlusCircle size={24} />
              </button>
              <span className="text-sm text-gray">{product.stock} available</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Heart size={20} /> Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Tabs for extra info */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
          <Tabs defaultValue="details">
            <TabsList className="border-b mb-6">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
            </TabsList>

            {/* Tab Contents */}
            <TabsContent value="details" className="text-gray-dark">
              <p>{product.description}</p>
            </TabsContent>

            <TabsContent value="ingredients" className="text-gray-dark">
              <ul className="list-disc ml-6">
                {product.ingredients.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="how-to-use" className="text-gray-dark">
              <p>{product.howToUse}</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-dark mb-6">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
