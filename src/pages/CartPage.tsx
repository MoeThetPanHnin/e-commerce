import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Trash2, MinusCircle, PlusCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // If cart is empty, show empty cart message
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-kbeauty-gray-light py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-sm p-8 max-w-lg mx-auto">
            <div className="text-kbeauty-gray-dark mb-4 flex justify-center">
              <ShoppingCart size={50} />
            </div>
            <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
            <p className="text-kbeauty-gray mb-8">
              Looks like you haven't added any products yet.
            </p>
            <Link to="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // If cart has items, show cart details
  return (
    <div className="min-h-screen bg-kbeauty-gray-light py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm mb-4">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-medium">
                  Cart Items ({cart.reduce((total, item) => total + item.quantity, 0)})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-kbeauty-red hover:text-opacity-80 transition-colors flex items-center gap-1 text-sm"
                >
                  <Trash2 size={16} />
                  Clear Cart
                </button>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-100">
                {cart.map(item => (
                  <div key={item.product.id} className="p-6 flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="sm:w-24 sm:h-24 flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between mb-2">
                        <Link
                          to={`/product/${item.product.id}`}
                          className="text-kbeauty-gray-dark font-medium hover:text-kbeauty-purple transition-colors"
                        >
                          {item.product.name}
                        </Link>

                        {/* Product Price */}
                        <div className="text-right">
                          {item.product.discount > 0 ? (
                            <>
                              <span className="font-semibold text-kbeauty-red">
                                ${((item.product.price * (1 - item.product.discount / 100)) * item.quantity).toFixed(2)}
                              </span>
                              <span className="text-kbeauty-gray text-sm line-through ml-2">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </span>
                            </>
                          ) : (
                            <span className="font-semibold">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-kbeauty-gray mb-4">{item.product.brand}</p>

                      {/* Quantity and Remove Controls */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="hover:text-kbeauty-purple transition-colors"
                          >
                            <MinusCircle size={20} />
                          </button>
                          <span className="mx-3 w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="hover:text-kbeauty-purple transition-colors"
                          >
                            <PlusCircle size={20} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-kbeauty-gray hover:text-kbeauty-red transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping Link */}
            <div className="flex justify-between">
              <Link
                to="/products"
                className="flex items-center text-kbeauty-gray-dark hover:text-kbeauty-purple transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm sticky top-24">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-medium">Order Summary</h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>

                {/* Total Amount */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  className="w-full py-3 btn-primary flex items-center justify-center mt-4"
                  onClick={() => setIsCheckingOut(true)}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? 'Processing...' : (
                    <>
                      Proceed to Checkout
                      <ArrowRight size={18} className="ml-2" />
                    </>
                  )}
                </button>

                <p className="text-xs text-kbeauty-gray text-center mt-4">
                  Shipping, taxes, and discounts are calculated at checkout.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;