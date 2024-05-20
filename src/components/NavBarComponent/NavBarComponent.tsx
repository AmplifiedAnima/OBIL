import React from 'react';
import LLamaPhoto from '../..//assets/images/LLAMA_WITHOUT_BG.png';
// import { Link } from 'react-router-dom';
import loginIcon from '../..//assets/images/log-in.svg'

export const NavBarComponent = () => {
  return (
    <nav className="bg-gradient-to-r from-lightPurple to-darkGrey fixed top-0 left-0 w-full z-50 h-20">
      <div className="flex justify-between items-center h-full px-4">
        <div className="flex items-center">
          <img src={LLamaPhoto} className="ml-2 " width="75" height="85" alt="Llama"></img>
        </div>
        <div className="flex items-center">
          <img src={loginIcon} className="mr-3" width="25" height="25" alt="Login"></img>
        </div>
      </div>
    </nav>
  );
};
