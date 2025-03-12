
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Check, Truck, Clock, Calendar, MapPin, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { sampleOrder, formatPrice } from '@/lib/data';
import { Order, OrderStatus } from '@/lib/types';

const OrderTracking = () => {
  const [order, setOrder] = useState<Order | null>(sampleOrder);
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  
  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call to get the order
    if (orderNumber.trim() === sampleOrder.id) {
      setOrder(sampleOrder);
    } else {
      setOrder(null);
    }
  };
  
  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'processing':
        return <Clock className="h-5 w-5" />;
      case 'shipped':
        return <Truck className="h-5 w-5" />;
      case 'delivered':
        return <Check className="h-5 w-5" />;
      case 'cancelled':
        return <Package className="h-5 w-5" />;
    }
  };
  
  const getStatusTimeline = (status: OrderStatus) => {
    const steps = [
      { key: 'processing', label: 'Processing' },
      { key: 'shipped', label: 'Shipped' },
      { key: 'delivered', label: 'Delivered' }
    ];
    
    let activeIndex = steps.findIndex(step => step.key === status);
    if (status === 'cancelled') activeIndex = -1;
    
    return (
      <div className="relative pt-2">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.key} className="flex flex-col items-center">
              <div className={`rounded-full border-2 w-8 h-8 flex items-center justify-center ${
                index <= activeIndex ? 'border-watch-accent bg-watch-accent text-white' : 'border-gray-300 bg-white'
              }`}>
                {index === 0 && <Clock className="h-4 w-4" />}
                {index === 1 && <Truck className="h-4 w-4" />}
                {index === 2 && <Check className="h-4 w-4" />}
              </div>
              <span className="text-xs mt-1 font-medium">{step.label}</span>
            </div>
          ))}
        </div>
        <div className="absolute top-6 left-0 w-full">
          <div className="h-0.5 bg-gray-200 w-full">
            <div 
              className="h-0.5 bg-watch-accent" 
              style={{ width: status === 'processing' ? '0%' : status === 'shipped' ? '50%' : status === 'delivered' ? '100%' : '0%' }}
            ></div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <>
      <Navbar cartItemCount={0} />
      
      <main className="py-10 min-h-screen">
        <div className="watch-container">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-watch mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to home
          </Link>
          
          <h1 className="text-3xl font-bold mb-8 watch-heading">Track Your Order</h1>
          
          {!order ? (
            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <form onSubmit={handleTrack}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="orderNumber" className="block text-sm font-medium mb-1">
                        Order Number
                      </label>
                      <Input
                        id="orderNumber"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        placeholder="e.g. ORD-123456"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Hint: Use "ORD-123456" for the demo
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Track Order
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                <div className="p-6 border-b">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                        <span className={`text-xs uppercase font-semibold py-1 px-2 rounded-sm ${
                          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">
                        Placed on {order.createdAt.toLocaleDateString()}
                      </p>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      Need Help?
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 border-b">
                  {getStatusTimeline(order.status)}
                </div>
                
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Shipping Information */}
                  <div>
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-watch-accent" />
                      Shipping Address
                    </h3>
                    <div className="text-gray-600">
                      <p className="font-medium">{order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
                      <p>{order.shippingAddress.address}</p>
                      <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                      <p>{order.shippingAddress.country}</p>
                      <p className="mt-2">{order.shippingAddress.phone}</p>
                    </div>
                  </div>
                  
                  {/* Delivery Information */}
                  <div>
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Truck className="h-4 w-4 text-watch-accent" />
                      Delivery Information
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      {order.trackingNumber && (
                        <div>
                          <p className="text-sm text-gray-500">Tracking Number</p>
                          <p className="font-medium">{order.trackingNumber}</p>
                        </div>
                      )}
                      
                      {order.estimatedDelivery && (
                        <div>
                          <p className="text-sm text-gray-500">Estimated Delivery</p>
                          <p className="font-medium flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {order.estimatedDelivery.toLocaleDateString()}
                          </p>
                        </div>
                      )}
                      
                      <div>
                        <p className="text-sm text-gray-500">Shipping Method</p>
                        <p>Standard Shipping (Free)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-t bg-gray-50">
                  <h3 className="font-medium mb-4">Order Items</h3>
                  
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.product.id} className="flex gap-4 items-center">
                        <div className="w-16 h-16 bg-white rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={item.product.images[0]} 
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{item.product.name}</h4>
                          <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{formatPrice(item.product.price)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <p className="text-gray-600">Subtotal</p>
                      <p>{formatPrice(order.total)}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="text-gray-600">Shipping</p>
                      <p>Free</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="text-gray-600">Tax</p>
                      <p>{formatPrice(order.total * 0.08)}</p>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                      <p>Total</p>
                      <p>{formatPrice(order.total + (order.total * 0.08))}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button asChild variant="outline">
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default OrderTracking;
