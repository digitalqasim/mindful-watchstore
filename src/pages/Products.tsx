
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import { Button } from '@/components/ui/button';
import { Search, X, Filter, ChevronDown } from 'lucide-react';
import { WatchCategory, WatchStyle, Product, CartItem } from '@/lib/types';
import { products } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();
  
  // Filters
  const [category, setCategory] = useState<WatchCategory | ''>('');
  const [style, setStyle] = useState<WatchStyle | ''>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Cart state (this would be global in a real app)
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Handle URL params on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category') as WatchCategory;
    const styleParam = searchParams.get('style') as WatchStyle;
    const searchParam = searchParams.get('search') || '';
    const sortParam = searchParams.get('sort') || 'featured';
    
    if (categoryParam) setCategory(categoryParam);
    if (styleParam) setStyle(styleParam);
    if (searchParam) setSearchTerm(searchParam);
    if (sortParam) setSortBy(sortParam);
  }, [searchParams]);
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (category) params.set('category', category);
    if (style) params.set('style', style);
    if (searchTerm) params.set('search', searchTerm);
    if (sortBy !== 'featured') params.set('sort', sortBy);
    
    setSearchParams(params);
  }, [category, style, searchTerm, sortBy, setSearchParams]);
  
  // Filter and sort products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (category && product.category !== category) return false;
    
    // Style filter
    if (style && product.style !== style) return false;
    
    // Price range filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    // Search term filter
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'new':
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return a.isFeatured ? -1 : b.isFeatured ? 1 : 0;
    }
  });
  
  const handleAddToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.product.id === item.product.id);
      
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map(i => 
          i.product.id === item.product.id 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        );
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
    
    toast({
      title: 'Added to cart',
      description: `${item.product.name} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  const handleResetFilters = () => {
    setCategory('');
    setStyle('');
    setSearchTerm('');
    setPriceRange([0, 2000]);
    setSortBy('featured');
  };
  
  const categoryOptions: { value: WatchCategory | ''; label: string }[] = [
    { value: '', label: 'All Categories' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'smart', label: 'Smart' },
    { value: 'casual', label: 'Casual' },
    { value: 'sport', label: 'Sport' },
  ];
  
  const styleOptions: { value: WatchStyle | ''; label: string }[] = [
    { value: '', label: 'All Styles' },
    { value: 'classic', label: 'Classic' },
    { value: 'modern', label: 'Modern' },
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'statement', label: 'Statement' },
  ];
  
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'new', label: 'New Arrivals' },
    { value: 'rating', label: 'Top Rated' },
  ];
  
  return (
    <>
      <Navbar cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <main className="pt-20 pb-16">
        <div className="watch-container">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pt-4">
            <div>
              <h1 className="text-3xl font-bold mb-2 watch-heading">All Watches</h1>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>
            
            {/* Sort Dropdown */}
            <div className="mt-4 md:mt-0 flex items-center">
              <label htmlFor="sort-by" className="mr-2 text-sm">
                Sort by:
              </label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-watch-accent/50"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Filters and Products */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters (Mobile) */}
            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                className="w-full flex items-center justify-between"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span className="flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {isFilterOpen && (
                <div className="mt-4 p-4 border border-gray-200 rounded-md">
                  {/* Search */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Search</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search watches..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-watch-accent/50"
                      />
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      {searchTerm && (
                        <button
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          onClick={() => setSearchTerm('')}
                          aria-label="Clear search"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* Category */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Category</h3>
                    <div className="space-y-2">
                      {categoryOptions.map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            id={`category-${option.value}`}
                            name="category"
                            checked={category === option.value}
                            onChange={() => setCategory(option.value)}
                            className="mr-2"
                          />
                          <label htmlFor={`category-${option.value}`} className="text-sm">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Style */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Style</h3>
                    <div className="space-y-2">
                      {styleOptions.map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            id={`style-${option.value}`}
                            name="style"
                            checked={style === option.value}
                            onChange={() => setStyle(option.value)}
                            className="mr-2"
                          />
                          <label htmlFor={`style-${option.value}`} className="text-sm">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Reset */}
                  <Button
                    variant="outline"
                    className="w-full mt-2"
                    onClick={handleResetFilters}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
            
            {/* Filters (Desktop) */}
            <aside className="hidden lg:block lg:w-64 space-y-8">
              {/* Search */}
              <div>
                <h3 className="font-medium mb-2">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search watches..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-watch-accent/50"
                  />
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  {searchTerm && (
                    <button
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setSearchTerm('')}
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              
              {/* Category */}
              <div>
                <h3 className="font-medium mb-2">Category</h3>
                <div className="space-y-2">
                  {categoryOptions.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${option.value}`}
                        name="category"
                        checked={category === option.value}
                        onChange={() => setCategory(option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${option.value}`} className="text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Style */}
              <div>
                <h3 className="font-medium mb-2">Style</h3>
                <div className="space-y-2">
                  {styleOptions.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={`style-${option.value}`}
                        name="style"
                        checked={style === option.value}
                        onChange={() => setStyle(option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={`style-${option.value}`} className="text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Reset */}
              <Button
                variant="outline"
                className="w-full"
                onClick={handleResetFilters}
              >
                Reset Filters
              </Button>
            </aside>
            
            {/* Products */}
            <div className="flex-1">
              <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Products;
