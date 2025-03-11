
import React from 'react';
import { Link } from 'react-router-dom';
import { Watch, Instagram, Twitter, Facebook, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-watch-dark text-white pt-16 pb-8">
      <div className="watch-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Watch className="h-6 w-6" />
              <span className="font-bold text-xl tracking-tight">CHRONOS</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Crafting timepieces that blend elegance with precision, celebrating the art of watchmaking since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=luxury" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Luxury Watches
                </Link>
              </li>
              <li>
                <Link to="/products?category=smart" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Smart Watches
                </Link>
              </li>
              <li>
                <Link to="/products?category=casual" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Casual Watches
                </Link>
              </li>
              <li>
                <Link to="/products?category=sport" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sport Watches
                </Link>
              </li>
              <li>
                <Link to="/products?sort=new" className="text-gray-400 hover:text-white transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/order-tracking" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Order Tracking
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Warranty Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">support@chronos.example.com</span>
              </li>
              <li className="text-gray-400 text-sm">
                1234 Timekeeper Ave.<br />
                Watchville, CA 90210<br />
                United States
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CHRONOS. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
