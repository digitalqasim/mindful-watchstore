
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'video' | 'auto';
}

const AnimatedImage = ({
  src,
  alt,
  fallback = 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  className,
  aspectRatio = 'auto',
  ...props
}: AnimatedImageProps) => {
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(src);
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    const handleLoad = () => {
      setLoading(false);
    };
    
    const handleError = () => {
      setLoading(false);
      setImageSrc(fallback);
    };
    
    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    
    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src, fallback]);
  
  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    video: 'aspect-video',
    auto: 'aspect-auto',
  };
  
  return (
    <div className={cn(
      'overflow-hidden relative',
      aspectRatioClasses[aspectRatio],
      className
    )}>
      {loading && (
        <div className="absolute inset-0 image-loading" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          'object-cover w-full h-full transition-opacity duration-300',
          loading ? 'opacity-0' : 'opacity-100 animate-fade-in'
        )}
        {...props}
      />
    </div>
  );
};

export default AnimatedImage;
