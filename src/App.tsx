
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page components
import Index from './pages/Index';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';

// Main App component
const App: React.FC = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          {/* Navigation bar visible on all pages */}
          <Navbar />

          {/* Main content area that grows to fill the screen */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:category" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              {/* Catch-all route for 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer visible on all pages */}
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;