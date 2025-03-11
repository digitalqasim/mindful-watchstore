
import React from 'react';
import ProductCard from './ProductCard';
import { Product, CartItem } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (item: CartItem) => void;
}

const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-xl font-medium mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
