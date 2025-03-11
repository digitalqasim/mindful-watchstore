
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Watch, Menu, X, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  cartItemCount: number;
}

const Navbar = ({ cartItemCount = 0 }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Shop' },
    { href: '/order-tracking', label: 'Track Order' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'backdrop-blur-lg bg-white/80 dark:bg-black/80 shadow-sm border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      )}
    >
      <div className="watch-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 font-bold text-xl text-watch dark:text-white"
        >
          <Watch className="h-6 w-6" />
          <span className="tracking-tight">CHRONOS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-watch-accent',
                location.pathname === link.href
                  ? 'text-watch-accent'
                  : 'text-watch dark:text-gray-300'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <button
            className="rounded-full p-2 text-watch dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            to="/cart"
            className="rounded-full p-2 text-watch dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-watch-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-fade-in">
                {cartItemCount}
              </span>
            )}
          </Link>

          <button
            className="rounded-full p-2 text-watch dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:flex"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </button>

          {/* Mobile menu button */}
          <button
            className="p-2 text-watch dark:text-gray-300 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div
          className={cn(
            'fixed inset-0 z-40 bg-white dark:bg-black transition-transform duration-300 ease-in-out transform pt-16',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'font-medium transition-colors hover:text-watch-accent',
                  location.pathname === link.href
                    ? 'text-watch-accent'
                    : 'text-watch dark:text-gray-300'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
