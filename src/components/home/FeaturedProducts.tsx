
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import { featuredProducts } from '@/lib/data';

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-watch-muted">
      <div className="watch-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2 watch-heading">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our hand-picked selection of exceptional timepieces, each chosen for their remarkable craftsmanship and design.
            </p>
          </div>
          <Button variant="link" asChild className="text-watch flex items-center no-underline hover:text-watch-accent">
            <Link to="/shop">
              View All Products <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
