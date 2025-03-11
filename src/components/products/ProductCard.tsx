
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product, CartItem } from '@/lib/types';
import { formatPrice } from '@/lib/data';
import AnimatedImage from '@/components/ui/AnimatedImage';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (item: CartItem) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onAddToCart) {
      onAddToCart({
        product,
        quantity: 1
      });
    }
  };
  
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  return (
    <Link 
      to={`/products/${product.id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-white hover-lift transition-all duration-300">
        {/* Badge for new or special items */}
        {product.isNew && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-watch-accent text-white text-xs uppercase font-semibold py-1 px-2 rounded-sm">
              New
            </span>
          </div>
        )}
        
        {/* Product image */}
        <div className="relative aspect-square overflow-hidden">
          <AnimatedImage
            src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Hover actions */}
          <div className={cn(
            "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent",
            "transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <div className="flex justify-between items-center">
              <button
                onClick={handleAddToCart}
                className="bg-white text-watch p-2 rounded-full hover:bg-watch-accent hover:text-white transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
              
              <button
                onClick={handleToggleFavorite}
                className={cn(
                  "p-2 rounded-full transition-colors",
                  isFavorite 
                    ? "bg-watch-accent/20 text-watch-accent" 
                    : "bg-white text-watch hover:bg-watch-accent hover:text-white"
                )}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Product info */}
        <div className="p-4">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</div>
          <h3 className="font-medium text-lg mb-1 text-watch-dark">{product.name}</h3>
          <div className="flex justify-between items-center">
            <span className="font-semibold">{formatPrice(product.price)}</span>
            
            {/* Star rating */}
            {product.rating && (
              <div className="flex items-center">
                <div className="flex text-watch-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
