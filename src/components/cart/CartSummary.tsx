
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem } from '@/lib/types';
import { formatPrice, calculateCartTotal } from '@/lib/data';

interface CartSummaryProps {
  items: CartItem[];
}

const CartSummary = ({ items }: CartSummaryProps) => {
  const subtotal = calculateCartTotal(items);
  const shipping = items.length > 0 ? 15 : 0;
  const total = subtotal + shipping;
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-3 border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Shipping</span>
          <span>{items.length > 0 ? formatPrice(shipping) : 'Free'}</span>
        </div>
      </div>
      
      <div className="flex justify-between font-semibold text-lg mb-6">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
      
      <Button 
        asChild
        className="w-full bg-watch text-white hover:bg-watch/90"
        disabled={items.length === 0}
      >
        <Link to={items.length > 0 ? "/checkout" : "#"}>
          Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        Taxes will be calculated at checkout
      </div>
    </div>
  );
};

export default CartSummary;
