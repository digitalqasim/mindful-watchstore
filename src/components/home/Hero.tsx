
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedImage from '@/components/ui/AnimatedImage';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Precision in Every Moment",
      subtitle: "Experience timeless craftsmanship with our luxury collection",
      image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
      link: "/products?category=luxury"
    },
    {
      title: "Smart Time Management",
      subtitle: "Connect your life with the latest in wearable technology",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
      link: "/products?category=smart"
    },
    {
      title: "Adventure Awaits",
      subtitle: "Durable watches designed for your active lifestyle",
      image: "https://images.unsplash.com/photo-1548171916-c8fd5d86d137?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
      link: "/products?category=sport"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background images with transition */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
          <AnimatedImage 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="watch-container">
          <div className="max-w-2xl space-y-6">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  currentSlide === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 watch-heading">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex space-x-4">
                  <Button asChild className="bg-white text-watch hover:bg-white/90 transition-all duration-300 rounded-md">
                    <Link to={slide.link}>
                      Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 rounded-md">
                    <Link to="/products">
                      Browse All
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-12 h-1 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
