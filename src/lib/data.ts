
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
    rating: 4.9,
    brand: 'Rolex'
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
    rating: 4.8,
    brand: 'Apple'
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
    rating: 4.7,
    brand: 'Omega'
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
    rating: 4.6,
    brand: 'Daniel Wellington'
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
    rating: 4.9,
    brand: 'Patek Philippe'
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
    rating: 4.5,
    brand: 'Tag Heuer'
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
    rating: 4.8,
    brand: 'Jaeger-LeCoultre'
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
    rating: 4.7,
    brand: 'Tudor'
  },
  {
    id: '9',
    name: 'Pilot Chronograph',
    description: 'Inspired by aviation heritage, this pilot watch combines vintage aesthetics with modern functionality.',
    price: 999.99,
    images: [
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1622179454012-070a036b7275?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'luxury',
    style: 'classic',
    features: [
      'Flyback chronograph',
      'GMT function',
      'Oversized crown',
      'Vintage-style leather strap',
      'Luminous dial'
    ],
    specifications: {
      'Case Material': 'Brushed Stainless Steel',
      'Case Diameter': '45mm',
      'Band Material': 'Calfskin Leather',
      'Movement': 'Swiss Automatic Chronograph',
      'Water Resistance': '100m'
    },
    inStock: true,
    rating: 4.6,
    brand: 'IWC'
  },
  {
    id: '10',
    name: 'Fitness Tracker Pro',
    description: 'The ultimate fitness companion with comprehensive health tracking features and long battery life.',
    price: 149.99,
    images: [
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'smart',
    style: 'modern',
    features: [
      'Heart rate monitor',
      'Blood oxygen tracking',
      'Sleep analysis',
      'Built-in GPS',
      '14-day battery life'
    ],
    specifications: {
      'Display': 'LCD',
      'Size': '1.3 inch',
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': 'Up to 14 days',
      'Water Resistance': '50m'
    },
    inStock: true,
    isNew: true,
    rating: 4.3,
    brand: 'Fitbit'
  },
  {
    id: '11',
    name: 'Classic Dress',
    description: 'An elegant dress watch with a refined design, perfect for formal occasions and business attire.',
    price: 349.99,
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'casual',
    style: 'classic',
    features: [
      'Sunray dial finish',
      'Date window',
      'Applied indices',
      'Slim profile',
      'Dress watch design'
    ],
    specifications: {
      'Case Material': 'Stainless Steel',
      'Case Diameter': '40mm',
      'Band Material': 'Leather',
      'Movement': 'Japanese Quartz',
      'Water Resistance': '30m'
    },
    inStock: true,
    rating: 4.4,
    brand: 'Tissot'
  },
  {
    id: '12',
    name: 'Tourbillon Masterpiece',
    description: 'A horological masterpiece featuring a tourbillon complication, showcasing exceptional watchmaking artistry.',
    price: 25999.99,
    images: [
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1639269740806-1d88a356bee1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'luxury',
    style: 'statement',
    features: [
      'Tourbillon complication',
      'Hand-engraved movement',
      'Power reserve indicator',
      'Exhibition case back',
      'Limited production'
    ],
    specifications: {
      'Case Material': '18K Rose Gold',
      'Case Diameter': '41mm',
      'Band Material': 'Alligator Leather',
      'Movement': 'Manual-winding Tourbillon',
      'Water Resistance': '30m'
    },
    inStock: true,
    rating: 5.0,
    brand: 'Vacheron Constantin'
  },
  {
    id: '13',
    name: 'Tactical Field',
    description: 'A rugged field watch designed for outdoor adventures with military-inspired styling and excellent durability.',
    price: 299.99,
    images: [
      'https://images.unsplash.com/photo-1614540979714-6bf01624e531?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1609607285694-e283bd2ea9a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'sport',
    style: 'modern',
    features: [
      'Military-inspired design',
      'Tritium illumination',
      'Scratch-resistant sapphire',
      'CORDURA fabric strap',
      '24-hour time markers'
    ],
    specifications: {
      'Case Material': 'Matte Stainless Steel',
      'Case Diameter': '42mm',
      'Band Material': 'Cordura Nylon',
      'Movement': 'Swiss Quartz',
      'Water Resistance': '200m'
    },
    inStock: true,
    rating: 4.5,
    brand: 'Hamilton'
  },
  {
    id: '14',
    name: 'Smart Watch 5',
    description: 'The latest generation smartwatch with a vibrant display, comprehensive health features, and seamless connectivity.',
    price: 429.99,
    images: [
      'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600086827875-a63b01f1335c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'smart',
    style: 'modern',
    features: [
      'Always-on Retina display',
      'ECG and heart rate monitor',
      'Fall detection',
      'GPS and cellular connectivity',
      'App ecosystem'
    ],
    specifications: {
      'Display': 'LTPO OLED Retina',
      'Size': '45mm',
      'Connectivity': 'WiFi, Bluetooth 5.0, Cellular',
      'Battery Life': 'Up to 18 hours',
      'Water Resistance': '50m'
    },
    inStock: true,
    isNew: true,
    rating: 4.7,
    brand: 'Samsung'
  },
  {
    id: '15',
    name: 'Skeleton Automatic',
    description: 'A fascinating timepiece with a skeleton dial that reveals the intricate mechanical movement inside.',
    price: 699.99,
    images: [
      'https://images.unsplash.com/photo-1615655395428-6e3a9b6259b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1624808883970-ca2f1a1353d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'luxury',
    style: 'statement',
    features: [
      'Skeleton dial design',
      'Exhibition case back',
      'Hand-wound movement',
      'Genuine leather strap',
      'Limited production'
    ],
    specifications: {
      'Case Material': 'Stainless Steel',
      'Case Diameter': '43mm',
      'Band Material': 'Leather',
      'Movement': 'Mechanical Hand-wound',
      'Water Resistance': '30m'
    },
    inStock: true,
    rating: 4.6,
    brand: 'Oris'
  },
  {
    id: '16',
    name: 'Retro Digital',
    description: 'A nostalgic throwback to classic digital watches with modern reliability and enhanced functionality.',
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1629426958003-35a6776462db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1629426958236-ac5cd9c874ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'casual',
    style: 'statement',
    features: [
      'Retro digital display',
      'Chronograph function',
      'EL backlight',
      'Daily alarm',
      'Metal bracelet'
    ],
    specifications: {
      'Case Material': 'Resin with Metal Accents',
      'Case Diameter': '38mm',
      'Band Material': 'Stainless Steel',
      'Movement': 'Digital Quartz',
      'Water Resistance': '50m'
    },
    inStock: true,
    rating: 4.2,
    brand: 'Casio'
  },
  {
    id: '17',
    name: 'Solar Powered Eco',
    description: 'An environmentally friendly watch powered by light with a perpetual calendar and energy-saving features.',
    price: 299.99,
    images: [
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'casual',
    style: 'modern',
    features: [
      'Solar powered',
      'Perpetual calendar',
      'Eco-friendly materials',
      'Power reserve indicator',
      'Light-powered rechargeable battery'
    ],
    specifications: {
      'Case Material': 'Super Titanium™',
      'Case Diameter': '42mm',
      'Band Material': 'Super Titanium™',
      'Movement': 'Eco-Drive Solar',
      'Water Resistance': '100m'
    },
    inStock: true,
    rating: 4.5,
    brand: 'Citizen'
  },
  {
    id: '18',
    name: 'Grand Complication',
    description: 'A masterpiece of watchmaking featuring multiple complications including a perpetual calendar and minute repeater.',
    price: 38999.99,
    images: [
      'https://images.unsplash.com/photo-1639042198624-0cec71f8e254?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1652379350563-8d1e9bd5d3c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'luxury',
    style: 'classic',
    features: [
      'Perpetual calendar',
      'Minute repeater',
      'Split-seconds chronograph',
      'Moonphase display',
      'Power reserve indicator'
    ],
    specifications: {
      'Case Material': 'Platinum',
      'Case Diameter': '44mm',
      'Band Material': 'Hand-stitched Alligator Leather',
      'Movement': 'Manual-winding Grand Complication',
      'Water Resistance': '30m'
    },
    inStock: true,
    rating: 5.0,
    brand: 'Audemars Piguet'
  },
  {
    id: '19',
    name: 'Dive Master 500',
    description: 'A professional dive watch built to withstand extreme depths with exceptional water resistance and visibility.',
    price: 1299.99,
    images: [
      'https://images.unsplash.com/photo-1553837851-341a0f2168b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1541480353068-311758931a70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'sport',
    style: 'statement',
    features: [
      'Automatic helium escape valve',
      'Ceramic unidirectional bezel',
      'Super-LumiNova markers',
      'Screw-down crown and caseback',
      'Professional dive extension'
    ],
    specifications: {
      'Case Material': 'Stainless Steel',
      'Case Diameter': '46mm',
      'Band Material': 'Stainless Steel Bracelet',
      'Movement': 'Swiss Automatic',
      'Water Resistance': '500m'
    },
    inStock: true,
    rating: 4.8,
    brand: 'Longines'
  },
  {
    id: '20',
    name: 'Racing Chronograph',
    description: 'Inspired by motorsport, this precision chronograph features a tachymeter and high-performance design.',
    price: 2999.99,
    images: [
      'https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1555368288-a0d6018f2a32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    category: 'sport',
    style: 'modern',
    features: [
      'Automatic chronograph',
      'Tachymeter bezel',
      'Racing-inspired dial',
      'Exhibition caseback',
      'Date display'
    ],
    specifications: {
      'Case Material': 'Stainless Steel',
      'Case Diameter': '44mm',
      'Band Material': 'Perforated Leather',
      'Movement': 'Automatic Chronograph',
      'Water Resistance': '100m'
    },
    inStock: true,
    rating: 4.7,
    brand: 'TAG Heuer'
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
