
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedImage from '@/components/ui/AnimatedImage';

const Index = () => {
  return (
    <>
      <Navbar cartItemCount={0} />
      
      <main>
        <Hero />
        
        {/* Featured Products Section */}
        <FeaturedProducts />
        
        {/* Categories Showcase */}
        <section className="py-20">
          <div className="watch-container">
            <h2 className="text-3xl font-bold mb-2 text-center watch-heading">Our Collections</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Explore our diverse range of timepieces crafted for every lifestyle and occasion.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-lg group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="Luxury Watches"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <span className="text-watch-accent text-sm font-medium uppercase tracking-wider">Collection</span>
                  <h3 className="text-white text-2xl font-semibold mb-2">Luxury Watches</h3>
                  <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    <Link to="/shop?category=luxury">
                      Explore <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="relative overflow-hidden rounded-lg group hover-lift">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                  <AnimatedImage
                    src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Smart Watches"
                    className="w-full h-[152px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <h3 className="text-white text-xl font-semibold mb-1">Smart Watches</h3>
                    <Button asChild variant="link" className="px-0 text-white hover:text-watch-accent">
                      <Link to="/shop?category=smart">
                        View Collection <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="relative overflow-hidden rounded-lg group hover-lift">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                    <AnimatedImage
                      src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Casual Watches"
                      className="w-full h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-3 z-20">
                      <h3 className="text-white text-base font-semibold mb-1">Casual</h3>
                      <Link 
                        to="/shop?category=casual"
                        className="text-white/80 text-sm hover:text-watch-accent transition-colors"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-lg group hover-lift">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                    <AnimatedImage
                      src="https://images.unsplash.com/photo-1548171916-c8fd5d86d137?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Sport Watches"
                      className="w-full h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-3 z-20">
                      <h3 className="text-white text-base font-semibold mb-1">Sport</h3>
                      <Link 
                        to="/shop?category=sport"
                        className="text-white/80 text-sm hover:text-watch-accent transition-colors"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Order Tracking Section */}
        <section className="py-16 bg-watch-muted">
          <div className="watch-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 watch-heading">Track Your Order</h2>
              <p className="text-gray-600 mb-8">
                Check the status of your order quickly and easily with our order tracking system.
              </p>
              <Button asChild size="lg">
                <Link to="/order-tracking">
                  Track My Order
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-watch text-white">
          <div className="watch-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 watch-heading">Join Our Community</h2>
              <p className="text-white/80 mb-6">
                Subscribe to receive updates on new collections, special offers, and watchmaking insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-watch-accent/50" 
                />
                <Button className="bg-watch-accent text-white hover:bg-watch-accent/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
