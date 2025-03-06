"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Activities", href: "/coming-soon" },
    { label: "Packages", href: "/coming-soon" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#fff] z-50 shadow-md w-full">
      <div className="px-4 container mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:h-20 h-16">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center">
              <Image
                alt="triplanza-logo"
                src="/logo.png"
                className="w-28 md:w-48"
                width={200}
                height={200}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors text-lg ${
                  pathname === item.href
                    ? "text-[#222831] font-semibold"
                    : "text-[#808080] hover:text-orange-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex flex-1 justify-end">
            <button className="rounded-lg bg-[#FF7F00] px-4 py-2 text-white">
              Book a Trip
            </button>
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
          className={`md:hidden flex flex-col bg-white w-full py-4 space-y-4 absolute left-0 top-16 shadow-md transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block text-center transition-colors px-4 ${
                pathname === item.href
                  ? "text-[#222831] font-semibold"
                  : "text-gray-600 hover:text-orange-500"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Book a Trip Button in Mobile View */}
          <div className="text-center">
            <button className="rounded-lg bg-[#FF7F00] px-6 py-2 text-white">
              Book a Trip
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
