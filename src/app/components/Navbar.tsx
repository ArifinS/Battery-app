'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './navbar.css';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  {
    name: 'Solutions',
    href: '/solutions',
    dropdown: [
      { name: 'Battery Storage', href: '/solutions/battery_storage' },
      { name: 'Solar Integration', href: '/solutions/solar_integration' },
      { name: 'EV Charging', href: '/solutions/ev_charging' },
    ],
  },
  { name: 'Brand', href: '/brand' },
];

const MenuItem = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleMobileDropdown = (name: string) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="navbar w-full shadow-md">
      <div className="relative flex justify-between items-center px-4 sm:px-6 w-full h-16">
        {/* Logo on the left */}
        <div className="text-xl font-bold">
          <Link href="/">EShElL</Link>
        </div>

        {/* Menu Items - Absolutely Centered */}
        <ul className="hidden sm:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`navbar-item relative ${item.dropdown ? 'has-dropdown' : ''}`}
              onMouseEnter={() => !isMobileMenuOpen && item.dropdown && setOpenDropdown(item.name)}
              onMouseLeave={() => !isMobileMenuOpen && item.dropdown && setOpenDropdown(null)}
            >
              <Link href={item.href} className="navbar-link">
                {item.name}
              </Link>

              {item.dropdown && (
                <div
                  className="dropdown-menu absolute left-0 mt-2 bg-white shadow-lg flex-col"
                  style={{
                    display: openDropdown === item.name ? 'flex' : 'none',
                  }}
                >
                  {item.dropdown.map((drop) => (
                    <Link
                      key={drop.name}
                      href={drop.href}
                      className="dropdown-link px-4 py-2 hover:bg-gray-100"
                    >
                      {drop.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger on the right */}
        <div className="sm:hidden">
          <button
            className="hamburger flex flex-col justify-center items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-black mb-1" />
            <span className="w-6 h-0.5 bg-black mb-1" />
            <span className="w-6 h-0.5 bg-black" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white flex flex-col shadow-lg sm:hidden">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`p-4 border-b ${item.dropdown ? 'has-dropdown' : ''}`}
                onClick={() => {
                  if (item.dropdown) {
                    handleMobileDropdown(item.name);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                <Link href={item.href}>{item.name}</Link>

                {item.dropdown && mobileDropdown === item.name && (
                  <div className="flex flex-col mt-2 pl-4">
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.name}
                        href={drop.href}
                        className="py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default MenuItem;
