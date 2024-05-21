import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LinkListNavbarProps {
  isMenuOpen?: boolean;
}

export const LinkListNavbar: React.FC<LinkListNavbarProps> = ({ isMenuOpen }) => {
  const location = useLocation();

  const linkStyles = (path: string) =>
    `pl-4 font-bold ${
      location.pathname === path ? 'text-darkPurple ' : 'text-darkGrey'
    } ${isMenuOpen ? 'block py-2' : 'inline-block'}`;

  return (
    <ul className={`flex ${isMenuOpen ? 'flex-col space-y-2' : 'space-x-2'}`}>
      <Link to="/" className={linkStyles('/')}>
        <li className="hover:text-lightPurple">Content</li>
      </Link>
      <Link to="/about-creator" className={linkStyles('/about-creator')}>
        <li className="hover:text-lightPurple">Creator</li>
      </Link>
      <Link to="/contact-me" className={linkStyles('/contact-me')}>
        <li className="hover:text-lightPurple">Contact</li>
      </Link>
    </ul>
  );
};
