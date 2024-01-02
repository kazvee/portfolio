import React from 'react';
import Navlink from './Navlink';

interface MenuOverlayProps {
  links: { path: string; title: string; hoverTextColor: string }[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Navlink
            href={link.path}
            title={link.title}
            hoverTextColor={link.hoverTextColor}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
