import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isConnectWallet, setIsConnectWallet] = useState(false);
  const toggleMenu = () => {
    // console.log(isMenuVisible);
    setIsMenuVisible(!isMenuVisible);
    setIsConnectWallet(false);
    // console.log(isMenuVisible);
  };
  const toggleConnectWallet = () => {
    setIsMenuVisible(false);
    setIsConnectWallet(!isConnectWallet);
  };

  return (
    <div className=" mx-16 mt-4">
      <nav className="border-gray-200">
        <div className=" mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="flex items-center justify-center self-center text-lg font-semibold whitespace-nowrap">
            <p>Fhenix&nbsp;</p>
            <span className="">
               battles
            </span>
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col md:flex-row flex items-center justify-center md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                
                  <ConnectButton />
            
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
