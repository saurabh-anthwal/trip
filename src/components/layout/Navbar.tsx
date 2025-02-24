"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Activities", href: "/activities" },
    { label: "Packages", href: "/packages" },
    { label: "Blog", href: "/blog" },
    { label: "Book a Trip", href: "/book-a-trip", isButton: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md w-full">
      <div className="px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              alt="triplanza-logo"
              src="/logo.png"
              className="w-28 md:w-48"
              width={200}
              height={200}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isButton ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:bg-orange-500 text-gray-600 hover:text-white px-6 py-2 rounded-full transition-colors"
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
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col bg-white w-full py-4 space-y-4 absolute left-0 top-20 shadow-md transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-center text-gray-600 hover:text-orange-500 transition-colors px-4"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
