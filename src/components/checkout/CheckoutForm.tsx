
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '@/lib/data';
import { CartItem, ShippingAddress } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface CheckoutFormProps {
  cartItems: CartItem[];
  cartTotal: number;
}

const CheckoutForm = ({ cartItems, cartTotal }: CheckoutFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<ShippingAddress>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would process the order here
    
    // For now, let's simulate order creation and redirect to tracking
    const mockOrderId = 'ORD-' + Math.floor(Math.random() * 1000000);
    navigate(`/order-tracking?orderId=${mockOrderId}`);
  };
  
  const isFormComplete = Object.values(formData).every(value => value.trim() !== '');
  
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Shipping information */}
      <div className="md:col-span-2 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-6 watch-heading">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-watch-accent/50"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-watch-accent/50"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-1">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-watch-accent/50"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-1">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-watch-accent/50"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium mb-1">
                  State/Province
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-watch-accent/50"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium mb-1">
                  ZIP/Postal Code
                </label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-watch-accent/50"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-1">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-watch-accent/50"
                >
                  <option value="">Select Country</option>
                  <option value="USA">United States</option>
                  <option value="CAN">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AUS">Australia</option>
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-watch-accent/50"
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-watch text-white hover:bg-watch/90"
                disabled={!isFormComplete || cartItems.length === 0}
              >
                Complete Order
              </Button>
            </div>
          </form>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-sm font-medium mb-2">Note:</h3>
          <p className="text-sm text-gray-600">
            This is a demo checkout. No actual payment will be processed.
            In a real application, Stripe or another payment gateway would be integrated here.
          </p>
        </div>
      </div>
      
      {/* Order summary */}
      <div>
        <h2 className="text-xl font-semibold mb-6 watch-heading">Order Summary</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          {cartItems.map((item) => (
            <div key={item.product.id} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
              <div>
                <p className="font-medium">{item.product.name}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <p className="font-medium">{formatPrice(item.product.price * item.quantity)}</p>
            </div>
          ))}
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span>{formatPrice(15)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>Total</span>
              <span>{formatPrice(cartTotal + 15)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
