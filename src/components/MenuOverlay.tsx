import React from 'react';
import Navlink from './Navlink';

interface MenuOverlayProps {
  links: { path: string; title: string; hoverTextColor: string }[];
  closeOverlay: () => void;
  role?: string;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({
  links,
  closeOverlay,
  role,
}) => {
  return (
    <div
      role={role}
      className="flex flex-col py-4 items-center"
      aria-labelledby="menu-title"
    >
      <h2 id="menu-title" className="sr-only">
        Navigation Menu
      </h2>
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index} onClick={closeOverlay}>
            <Navlink
              href={link.path}
              title={link.title}
              hoverTextColor={link.hoverTextColor}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
