
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { products, formatPrice } from '@/lib/data';
import { Product } from '@/lib/types';
import AnimatedImage from '@/components/ui/AnimatedImage';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Find the product by ID
  const product: Product | undefined = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <>
        <Navbar cartItemCount={0} />
        <div className="watch-container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the product you were looking for.</p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} x${quantity} has been added to your cart.`,
    });
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  return (
    <>
      <Navbar cartItemCount={0} />
      
      <main className="py-10">
        <div className="watch-container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link to="/" className="text-gray-500 hover:text-watch">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/shop" className="text-gray-500 hover:text-watch">Shop</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
          
          {/* Back button (mobile) */}
          <Link to="/shop" className="inline-flex items-center text-gray-600 hover:text-watch mb-4 md:hidden">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to shop
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <AnimatedImage 
                  src={product.images[activeImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                        activeImageIndex === index ? 'border-watch' : 'border-transparent'
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Details */}
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-semibold">{formatPrice(product.price)}</span>
                      {product.isNew && (
                        <span className="bg-watch-accent text-white text-xs uppercase font-semibold py-1 px-2 rounded-sm">
                          New
                        </span>
                      )}
                    </div>
                    
                    {/* Brand and Rating */}
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-gray-600">{product.brand}</span>
                      {product.rating && (
                        <div className="flex items-center">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className="w-4 h-4 fill-current" 
                                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Wishlist and Share buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full" onClick={() => toast({ description: "Added to wishlist" })}>
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full" onClick={() => toast({ description: "Link copied to clipboard" })}>
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                {/* Category and Style */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="text-sm">
                    <span className="text-gray-500">Category:</span>
                    <span className="ml-2 capitalize">{product.category}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Style:</span>
                    <span className="ml-2 capitalize">{product.style}</span>
                  </div>
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="mb-8">
                <div className="flex gap-4 mb-4">
                  <select
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  
                  <Button 
                    className="flex-1 gap-2 text-base" 
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500">
                  {product.inStock ? "In stock, ready to ship" : "This item is currently out of stock"}
                </p>
              </div>
              
              {/* Product Info Tabs */}
              <Tabs defaultValue="features">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                </TabsList>
                
                <TabsContent value="features" className="pt-4">
                  <ul className="list-disc pl-5 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="specifications" className="pt-4">
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="grid grid-cols-2 border-b pb-2">
                        <span className="text-gray-500">{key}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="shipping" className="pt-4">
                  <div className="space-y-3 text-gray-600">
                    <p>Free standard shipping on all orders.</p>
                    <p>Estimated delivery time: 3-5 business days.</p>
                    <p>Express shipping available at checkout for an additional fee.</p>
                    <p>International shipping available to select countries.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ProductDetail;
