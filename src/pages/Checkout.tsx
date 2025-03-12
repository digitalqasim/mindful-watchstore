
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import CartSummary from '@/components/cart/CartSummary';
import { products, calculateCartTotal } from '@/lib/data';
import { CartItem as CartItemType } from '@/lib/types';

const Checkout = () => {
  // For demo purposes, we'll use the same cart items as in the Cart page
  const cartItems: CartItemType[] = [
    { product: products[0], quantity: 1 },
    { product: products[3], quantity: 2 }
  ];
  
  const subtotal = calculateCartTotal(cartItems);
  const tax = subtotal * 0.08; // Example tax rate of 8%
  const shipping = 15; // Fixed shipping cost
  
  return (
    <>
      <Navbar cartItemCount={3} />
      
      <main className="py-10 min-h-screen">
        <div className="watch-container">
          <Link to="/cart" className="inline-flex items-center text-gray-600 hover:text-watch mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to cart
          </Link>
          
          <h1 className="text-3xl font-bold mb-8 watch-heading">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <CheckoutForm 
                  cartItems={cartItems}
                  cartTotal={subtotal}
                />
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map(item => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.product.name}</h3>
                        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <CartSummary 
                  items={cartItems}
                  subtotal={subtotal}
                  shipping={shipping}
                  tax={tax}
                  showPaymentButton={false}
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-medium mb-3">Payment Method</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Payment processing will be implemented in a future update.
                </p>
                <div className="flex gap-2">
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Checkout;
