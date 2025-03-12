
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem } from '@/lib/types';
import { formatPrice } from '@/lib/data';

interface CartSummaryProps {
  items?: CartItem[];
  subtotal: number;
  shipping: number;
  tax?: number;
  showPaymentButton?: boolean;
}

const CartSummary = ({ 
  items = [], 
  subtotal, 
  shipping, 
  tax = 0, 
  showPaymentButton = true 
}: CartSummaryProps) => {
  const total = subtotal + shipping + tax;
  
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
          <span>{shipping > 0 ? formatPrice(shipping) : 'Free'}</span>
        </div>
        {tax > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Tax</span>
            <span>{formatPrice(tax)}</span>
          </div>
        )}
      </div>
      
      <div className="flex justify-between font-semibold text-lg mb-6">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
      
      {showPaymentButton && (
        <Button 
          asChild
          className="w-full bg-watch text-white hover:bg-watch/90"
          disabled={items.length === 0}
        >
          <Link to={items.length > 0 ? "/checkout" : "#"}>
            Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        Taxes will be calculated at checkout
      </div>
    </div>
  );
};

export default CartSummary;
