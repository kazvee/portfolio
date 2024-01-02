import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';
import logoImage from '@/public/images/logo-image.png';

const navLinks = [
  {
    title: 'About',
    path: '#about',
    hoverTextColor: 'hover:text-purple-500',
  },
  {
    title: 'Projects',
    path: '#projects',
    hoverTextColor: 'hover:text-pink-500',
  },
  {
    title: 'Contact',
    path: '#contact',
    hoverTextColor: 'hover:text-red-500',
  },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed mx-auto border border-[#482B56] top-0 left-0 right-0 z-6 bg-[#170E1B] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-12">
        <Link href="/" className="container mx-auto px-2 py-4">
          <Image
            src={logoImage}
            alt="logo of woman and a laptop displaying code on the screen"
            width={60}
            height={60}
          />
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:px-2 md:py:2 md:flex-row md:space-x-8 mt-10">
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
    </nav>
  );
};

export default Navbar;
