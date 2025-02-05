'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Activities', href: '/activities' },
    { label: 'Packages', href: '/packages' },
    { label: 'Blog', href: '/blog' },
    { label: 'Book a Trip', href: '/book-a-trip', isButton: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-black">trip</span>
              <span className="text-orange-500">lanza</span>
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isButton ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
