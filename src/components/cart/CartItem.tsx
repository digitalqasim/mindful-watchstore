
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '@/lib/types';
import { formatPrice } from '@/lib/data';
import AnimatedImage from '@/components/ui/AnimatedImage';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) => {
  const { product, quantity } = item;
  
  const handleIncrement = () => {
    onUpdateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(product.id, quantity - 1);
    }
  };
  
  const handleRemove = () => {
    onRemoveItem(product.id);
  };
  
  return (
    <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200">
      {/* Product image */}
      <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0 rounded-md overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <AnimatedImage 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      {/* Product info */}
      <div className="flex-1 sm:ml-6 flex flex-col sm:flex-row justify-between">
        <div>
          <Link 
            to={`/products/${product.id}`}
            className="font-medium text-watch-dark hover:text-watch-accent transition-colors"
          >
            {product.name}
          </Link>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          
          {/* Mobile quantity controls */}
          <div className="flex items-center justify-between sm:hidden mt-2">
            <div className="flex items-center border border-gray-200 rounded-md">
              <button 
                onClick={handleDecrement}
                disabled={quantity <= 1}
                className="p-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-2 py-1 min-w-[2rem] text-center">{quantity}</span>
              <button 
                onClick={handleIncrement}
                className="p-1 hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <p className="font-semibold">{formatPrice(product.price * quantity)}</p>
          </div>
        </div>
        
        {/* Desktop quantity controls and price */}
        <div className="hidden sm:flex items-center space-x-8 mt-2">
          <div className="flex items-center border border-gray-200 rounded-md">
            <button 
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className="p-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-2 py-1 min-w-[2rem] text-center">{quantity}</span>
            <button 
              onClick={handleIncrement}
              className="p-1 hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <p className="font-semibold">{formatPrice(product.price * quantity)}</p>
          
          <button 
            onClick={handleRemove}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
        
        {/* Mobile remove button */}
        <button 
          onClick={handleRemove}
          className="sm:hidden text-gray-400 hover:text-gray-600 transition-colors mt-4 self-start"
          aria-label="Remove item"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
