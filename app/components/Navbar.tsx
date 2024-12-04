'use client';
import logoImage from '@/public/images/logo-image.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MenuOverlay from './MenuOverlay';
import Navlink from './Navlink';

const navLinks = [
  {
    title: 'About',
    path: '#about',
    hoverTextColor: 'hover:text-pink-500',
  },
  {
    title: 'Projects',
    path: '#projects',
    hoverTextColor: 'hover:text-pink-500',
  },
  {
    title: 'Stats',
    path: '#stats',
    hoverTextColor: 'hover:text-pink-500',
  },
  {
    title: 'Blog',
    path: 'https://dev.to/kazvee',
    hoverTextColor: 'hover:text-pink-500',
  },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed mx-auto border-b border-[#482B56] top-0 left-0 right-0 z-10 bg-[#170E1B] bg-opacity-100" role="navigation">
      <div className="flex items-center justify-between mx-auto px-4 py-2">
        <Link href="/" onClick={handleLogoClick} className="px-2 py-4">
          <Image
            src={logoImage}
            alt="Return to Home - Logo of a woman and a laptop displaying code"
            width={60}
            height={60}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              aria-expanded={navbarOpen}
              aria-label="Open mobile navigation menu"
              className="flex items-center px-3 py-2 border rounded border-purple-500 hover:border-pink-500">
              <span>🟰</span>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label="Close mobile navigation menu"
              className="flex items-center px-3 py-2 border rounded border-purple-500 hover:border-pink-500">
              <span>✖️</span>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:px-2 md:py:2 md:flex-row md:space-x-8 mt-10 mr-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink
                  href={link.path}
                  title={link.title}
                  hoverTextColor={link.hoverTextColor}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} role="menu" closeOverlay={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;