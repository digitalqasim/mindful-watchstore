
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: WatchCategory;
  style: WatchStyle;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  rating?: number;
}

export type WatchCategory = 'luxury' | 'smart' | 'casual' | 'sport';
export type WatchStyle = 'classic' | 'modern' | 'minimalist' | 'statement';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
  shippingAddress: ShippingAddress;
  trackingNumber?: string;
  estimatedDelivery?: Date;
}

export type OrderStatus = 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}
