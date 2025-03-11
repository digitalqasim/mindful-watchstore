
import { Product, CartItem, Order } from './types';

// Mock products data
export const products: Product[] = [
  {
    id: '1',
    name: 'Chronograph Classic',
    description: 'A timeless chronograph with a sophisticated design and premium materials. This watch features a genuine leather strap and a stainless steel case.',
    price: 1299.99,
    images: [
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1619134778706-7015bea9c475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'luxury',
    style: 'classic',
    features: [
      'Swiss movement',
      'Sapphire crystal',
      'Genuine leather strap',
      'Water resistant to 50m',
      '5-year warranty'
    ],
    specifications: {
      'Case Material': 'Stainless Steel',
      'Case Diameter': '42mm',
      'Band Material': 'Genuine Leather',
      'Movement': 'Swiss Automatic',
      'Water Resistance': '50m'
    },
    inStock: true,
    isFeatured: true,
    rating: 4.9
  },
  {
    id: '2',
    name: 'SmartTime Pro',
    description: 'The ultimate smartwatch with advanced health monitoring and seamless connectivity. Track your fitness, receive notifications, and more.',
    price: 399.99,
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'smart',
    style: 'modern',
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Sleep analysis',
      'Notification alerts',
      '7-day battery life'
    ],
    specifications: {
      'Display': 'AMOLED',
      'Size': '44mm',
      'Connectivity': 'Bluetooth 5.0, Wi-Fi',
      'Battery Life': 'Up to 7 days',
      'Water Resistance': '30m'
    },
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.8
  },
  {
    id: '3',
    name: 'Diver Professional',
    description: 'Engineered for underwater adventures, this professional diver watch offers exceptional durability and reliability at extreme depths.',
    price: 849.99,
    images: [
      'https://images.unsplash.com/photo-1548171916-c8fd5d86d137?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'sport',
    style: 'statement',
    features: [
      'Water resistant to 300m',
      'Helium escape valve',
      'Scratch-resistant sapphire crystal',
      'Super-LumiNova hands and markers',
      'Unidirectional rotating bezel'
    ],
    specifications: {
      'Case Material': 'Stainless Steel',
      'Case Diameter': '45mm',
      'Band Material': 'Stainless Steel',
      'Movement': 'Swiss Automatic',
      'Water Resistance': '300m'
    },
    inStock: true,
    rating: 4.7
  },
  {
    id: '4',
    name: 'Minimalist Essence',
    description: 'A beautifully simple timepiece with a clean dial and slim profile. Perfect for those who appreciate understated elegance.',
    price: 249.99,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'casual',
    style: 'minimalist',
    features: [
      'Ultra-thin case design',
      'Japanese quartz movement',
      'Mesh stainless steel strap',
      'Hardened mineral crystal',
      '2-year warranty'
    ],
    specifications: {
      'Case Material': 'Stainless Steel',
      'Case Diameter': '38mm',
      'Band Material': 'Mesh Stainless Steel',
      'Movement': 'Japanese Quartz',
      'Water Resistance': '30m'
    },
    inStock: true,
    isFeatured: true,
    rating: 4.6
  },
  {
    id: '5',
    name: 'Heritage Automatic',
    description: 'A celebration of traditional watchmaking with a visible mechanical movement. Crafted for connoisseurs who appreciate the art of horology.',
    price: 1899.99,
    images: [
      'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'luxury',
    style: 'classic',
    features: [
      'Exhibition case back',
      'In-house mechanical movement',
      'Hand-finished details',
      'Alligator leather strap',
      'Limited edition numbering'
    ],
    specifications: {
      'Case Material': 'Polished Stainless Steel',
      'Case Diameter': '40mm',
      'Band Material': 'Alligator Leather',
      'Movement': 'In-house Mechanical',
      'Water Resistance': '30m'
    },
    inStock: true,
    rating: 4.9
  },
  {
    id: '6',
    name: 'Carbon Sport',
    description: 'A lightweight, high-performance watch designed for athletes and active individuals, featuring advanced timing functions.',
    price: 499.99,
    images: [
      'https://images.unsplash.com/photo-1615733863695-88c9a50a2788?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1623998021669-c69e7e9ab1f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'sport',
    style: 'modern',
    features: [
      'Carbon fiber case',
      'Chronograph function',
      'Tachymeter scale',
      'Silicone strap',
      'Shock resistant'
    ],
    specifications: {
      'Case Material': 'Carbon Fiber Composite',
      'Case Diameter': '44mm',
      'Band Material': 'Silicone',
      'Movement': 'Quartz Chronograph',
      'Water Resistance': '100m'
    },
    inStock: true,
    isNew: true,
    rating: 4.5
  },
  {
    id: '7',
    name: 'Lunar Phase',
    description: 'A sophisticated timepiece featuring a moon phase complication and elegant design, perfect for formal occasions.',
    price: 1599.99,
    images: [
      'https://images.unsplash.com/photo-1619134778706-7015bea9c475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'luxury',
    style: 'classic',
    features: [
      'Moon phase complication',
      'Date display',
      'Rose gold accents',
      'Crocodile-embossed leather strap',
      'Domed sapphire crystal'
    ],
    specifications: {
      'Case Material': 'Stainless Steel with Rose Gold PVD',
      'Case Diameter': '42mm',
      'Band Material': 'Crocodile-Embossed Leather',
      'Movement': 'Swiss Automatic',
      'Water Resistance': '30m'
    },
    inStock: true,
    rating: 4.8
  },
  {
    id: '8',
    name: 'Adventure GMT',
    description: 'A rugged timepiece designed for travelers and explorers, featuring a GMT function to track multiple time zones.',
    price: 899.99,
    images: [
      'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1587925338746-d2f63dd4f082?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'sport',
    style: 'statement',
    features: [
      'GMT function',
      'Bi-directional rotating bezel',
      'Anti-magnetic case',
      'Super-LumiNova hands and markers',
      'Integrated rubber strap'
    ],
    specifications: {
      'Case Material': 'Titanium',
      'Case Diameter': '43mm',
      'Band Material': 'Rubber',
      'Movement': 'Automatic with GMT',
      'Water Resistance': '200m'
    },
    inStock: true,
    rating: 4.7
  }
];

// Get featured products
export const featuredProducts = products.filter(product => product.isFeatured);

// Get new products
export const newProducts = products.filter(product => product.isNew);

// Empty cart to start with
export const initialCart: CartItem[] = [];

// Sample order for tracking demo
export const sampleOrder: Order = {
  id: 'ORD-123456',
  items: [
    {
      product: products[0],
      quantity: 1
    }
  ],
  total: products[0].price,
  status: 'shipped',
  createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
  shippingAddress: {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Watch St',
    city: 'Timeville',
    state: 'CA',
    zipCode: '90210',
    country: 'USA',
    phone: '(555) 123-4567'
  },
  trackingNumber: 'TRK-789012',
  estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // 2 days from now
};

// Helper functions
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price);
};

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
};
