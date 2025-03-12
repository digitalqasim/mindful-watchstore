
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search, X } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { products } from '@/lib/data';
import ProductGrid from '@/components/products/ProductGrid';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { WatchCategory, WatchStyle, Product } from '@/lib/types';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 40000]); // Max price in our dataset
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<WatchCategory[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<WatchStyle | null>(null);

  // Get all unique brands
  const allBrands = Array.from(new Set(products.map(product => product.brand)));
  
  // Get initial filters from URL
  useEffect(() => {
    const category = searchParams.get('category') as WatchCategory | null;
    const brand = searchParams.get('brand');
    const style = searchParams.get('style') as WatchStyle | null;
    const query = searchParams.get('q') || '';
    
    if (category) {
      setSelectedCategories([category]);
    }
    
    if (brand) {
      setSelectedBrands([brand]);
    }
    
    if (style) {
      setSelectedStyle(style);
    }
    
    setSearchQuery(query);
  }, [searchParams]);
  
  // Apply filters when they change
  useEffect(() => {
    let filtered = [...products];
    
    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Apply style filter
    if (selectedStyle) {
      filtered = filtered.filter(product => product.style === selectedStyle);
    }
    
    // Apply price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategories, selectedBrands, selectedStyle, priceRange]);
  
  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with search query
    const newParams = new URLSearchParams(searchParams);
    if (searchQuery) {
      newParams.set('q', searchQuery);
    } else {
      newParams.delete('q');
    }
    setSearchParams(newParams);
  };
  
  // Handle category toggle
  const toggleCategory = (category: WatchCategory) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  // Handle brand toggle
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) {
        return prev.filter(b => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };
  
  // Handle style selection
  const handleStyleChange = (style: WatchStyle) => {
    setSelectedStyle(prev => prev === style ? null : style);
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedStyle(null);
    setPriceRange([0, 40000]);
    setSearchParams(new URLSearchParams());
  };
  
  return (
    <>
      <Navbar cartItemCount={0} />
      
      <main className="min-h-screen pb-20">
        <div className="bg-watch-muted py-10">
          <div className="watch-container">
            <h1 className="text-4xl font-bold mb-2 watch-heading">Luxury Timepieces</h1>
            <p className="text-gray-600 max-w-3xl">
              Discover our curated collection of exceptional watches, ranging from timeless classics to cutting-edge innovations.
            </p>
          </div>
        </div>
        
        <div className="watch-container py-8">
          {/* Mobile filter button + Search bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <form onSubmit={handleSearch} className="relative">
                <Input 
                  type="text"
                  placeholder="Search watches..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      const newParams = new URLSearchParams(searchParams);
                      newParams.delete('q');
                      setSearchParams(newParams);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </button>
                )}
              </form>
            </div>
            
            <div className="flex items-center gap-3 md:w-auto">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 ml-auto">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filter Watches</SheetTitle>
                    <SheetDescription>
                      Refine your selection with the following options.
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="py-6 space-y-6">
                    {/* Price Range */}
                    <div>
                      <h3 className="font-medium mb-3">Price Range</h3>
                      <div className="mb-6">
                        <Slider 
                          defaultValue={[0, 40000]} 
                          min={0} 
                          max={40000}
                          step={100}
                          value={priceRange}
                          onValueChange={setPriceRange}
                        />
                        <div className="flex justify-between mt-2 text-sm text-gray-500">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Categories */}
                    <div>
                      <h3 className="font-medium mb-3">Categories</h3>
                      <div className="space-y-2">
                        {(['luxury', 'smart', 'casual', 'sport'] as WatchCategory[]).map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`category-${category}`} 
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => toggleCategory(category)}
                            />
                            <label 
                              htmlFor={`category-${category}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Brands */}
                    <div>
                      <h3 className="font-medium mb-3">Brands</h3>
                      <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                        {allBrands.map((brand) => (
                          <div key={brand} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`brand-${brand}`} 
                              checked={selectedBrands.includes(brand)}
                              onCheckedChange={() => toggleBrand(brand)}
                            />
                            <label 
                              htmlFor={`brand-${brand}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Styles */}
                    <div>
                      <h3 className="font-medium mb-3">Style</h3>
                      <RadioGroup 
                        value={selectedStyle || ''} 
                        onValueChange={(value) => handleStyleChange(value as WatchStyle)}
                      >
                        {(['classic', 'modern', 'minimalist', 'statement'] as WatchStyle[]).map((style) => (
                          <div key={style} className="flex items-center space-x-2">
                            <RadioGroupItem value={style} id={`style-${style}`} />
                            <Label htmlFor={`style-${style}`} className="capitalize">{style}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    {/* Clear Filters Button */}
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={clearFilters}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
              
              {/* Active filter count badge */}
              {(selectedCategories.length > 0 || selectedBrands.length > 0 || selectedStyle || searchQuery) && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm"
                >
                  <X className="h-3 w-3" />
                  Clear filters
                </Button>
              )}
            </div>
          </div>
          
          {/* Filter pills (desktop) */}
          <div className="mb-6 hidden md:flex flex-wrap gap-2">
            {selectedCategories.map(category => (
              <div key={category} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <span className="capitalize">{category}</span>
                <button onClick={() => toggleCategory(category)}>
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            {selectedBrands.map(brand => (
              <div key={brand} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <span>{brand}</span>
                <button onClick={() => toggleBrand(brand)}>
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            {selectedStyle && (
              <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <span className="capitalize">{selectedStyle}</span>
                <button onClick={() => setSelectedStyle(null)}>
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {searchQuery && (
              <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <span>"{searchQuery}"</span>
                <button onClick={() => {
                  setSearchQuery('');
                  const newParams = new URLSearchParams(searchParams);
                  newParams.delete('q');
                  setSearchParams(newParams);
                }}>
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
          
          {/* Results count */}
          <div className="mb-8 text-sm text-gray-500">
            Showing {filteredProducts.length} out of {products.length} watches
          </div>
          
          {/* Product grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Shop;
