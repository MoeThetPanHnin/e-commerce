
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kbeauty-gray-dark">
              Discover the Secret of Korean Beauty
            </h1>
            <p className="text-gray-dark text-lg md:text-xl">
              Explore our curated collection of premium Korean skincare and makeup products for a radiant, glass-like complexion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                Shop Now
              </Link>
              <Link to="/products/bestsellers" className="btn-secondary">
                Bestsellers
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white p-4 rounded-2xl shadow-lg animate-float">
              <img 
                src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Korean Beauty Products" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-kbeauty-pink p-3 rounded-lg shadow-md hidden md:block">
              <p className="text-sm font-medium">★★★★★ <span className="font-normal">1200+ Reviews</span></p>
            </div>
            <div className="absolute -top-4 -right-4 bg-kbeauty-purple-light p-3 rounded-lg shadow-md hidden md:block">
              <p className="text-sm font-medium">Free shipping <span className="font-normal">on orders over $50</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
