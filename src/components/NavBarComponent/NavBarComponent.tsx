import React, { useState } from 'react';
import LLamaPhoto from '../..//assets/images/LLAMA_WITHOUT_BG.png';
// import LLamaPhotoWhiteBackground from '../..//assets/images/Llama.png';

import loginIcon from '../..//assets/images/log-in.svg';
import userLoggedInIcon from '../..//assets/images/user logged in.svg';
import { LinkListNavbar } from './LinkListNavbar';

export const NavBarComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleIsLoggedIn = () => {
    console.log(isLoggedIn);
    setIsLoggedIn(isLoggedIn => !isLoggedIn);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-lightPurple to-darkGrey fixed top-0 left-0 w-full z-50 h-20">
      <div className="flex justify-between items-center h-full px-4">
        <div className="flex items-center">
          <img
            src={LLamaPhoto}
            className="ml-2 cursor-pointer"
            width="75"
            height="85"
            alt="Llama"
            onClick={handleToggleMenu}
          />
          <div className="hidden md:flex">
            <LinkListNavbar />
          </div>
        </div>
        <div className="flex items-left"></div>
        <button
          onClick={handleIsLoggedIn}
          style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}
        >
          <div className="flex items-center">
            <img
              src={!isLoggedIn ? loginIcon : userLoggedInIcon}
              className="mr-3"
              width="25"
              height="25"
              alt="Login"
            />
          </div>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-white to-darkGrey  transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex flex-col items-start ml-2 mt-2">
          <img
            src={LLamaPhoto}
            className="ml-2 cursor-pointer"
            width="75"
            height="85"
            alt="Llama"
            onClick={handleToggleMenu}
          />
          <LinkListNavbar isMenuOpen={isMenuOpen} />
        </div>
      </div>

      {/* Overlay for closing the menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={handleToggleMenu}
        ></div>
      )}
    </nav>
  );
};
