
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { products, calculateCartTotal } from '@/lib/data';
import { CartItem as CartItemType } from '@/lib/types';

const Cart = () => {
  // For demo purposes, we'll start with 2 items in the cart
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    { product: products[0], quantity: 1 },
    { product: products[3], quantity: 2 }
  ]);
  
  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.product.id === itemId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };
  
  const handleRemoveItem = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== itemId));
  };
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = calculateCartTotal(cartItems);
  
  return (
    <>
      <Navbar cartItemCount={totalItems} />
      
      <main className="py-10 min-h-screen">
        <div className="watch-container">
          <h1 className="text-3xl font-bold mb-2 watch-heading">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <div className="py-20 text-center">
              <div className="inline-flex justify-center items-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                <ShoppingBag className="h-10 w-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild>
                <Link to="/shop">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-medium">Items ({totalItems})</h2>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/shop">Continue Shopping</Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="divide-y">
                    {cartItems.map(item => (
                      <CartItem
                        key={item.product.id}
                        item={item}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemove={handleRemoveItem}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <CartSummary 
                  subtotal={subtotal}
                  shipping={0} // Free shipping
                  tax={subtotal * 0.08} // Example tax rate of 8%
                />
                
                <Button className="w-full mt-4 gap-2" size="lg" asChild>
                  <Link to="/checkout">
                    Proceed to Checkout <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                
                <div className="mt-8 space-y-2">
                  <h3 className="font-medium">We Accept</h3>
                  <div className="flex gap-2">
                    {/* Payment method icons */}
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Cart;
