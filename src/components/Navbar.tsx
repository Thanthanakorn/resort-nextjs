'use client';

import Link from 'next/link';
import { useState } from 'react';
import NoSSR from './NoSSR';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'ห้องพัก', href: '/rooms' },
    { name: 'เกี่ยวกับเรา', href: '/about' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">บ</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-800">บ้านเกื้อบ่อกุ้ง รีสอร์ต</h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 btn-transition"
            >
              จองเลย
            </Link>
          </div>

          {/* Mobile menu button */}
          <NoSSR fallback={
            <div className="md:hidden flex items-center">
              <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          }>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </NoSSR>
        </div>

        {/* Mobile Navigation */}
        <NoSSR>
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="bg-green-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  จองเลย
                </Link>
              </div>
            </div>
          )}
        </NoSSR>
      </div>
    </nav>
  );
};

export default Navbar;