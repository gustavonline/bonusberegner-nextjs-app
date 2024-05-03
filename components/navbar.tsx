"use client";

import React, { useState, useRef } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const closeTimeoutId = useRef<number | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMobileDropdownOpen(false); // Close the mobile dropdown when hamburger menu is closed
    }
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const showDropdown = () => {
    if (closeTimeoutId.current !== null) {
      clearTimeout(closeTimeoutId.current);
      closeTimeoutId.current = null;
    }
    setIsDropdownOpen(true);
  };

  const hideDropdown = () => {
    closeTimeoutId.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // 300 milliseconds delay before closing the dropdown
  };

  return (
    <div className="w-full flex items-center justify-center">
      <nav className="w-full z-20 top-0 px-4 py-2">
        <div className="h-20 w-full mx-auto flex justify-between items-center p-4 bg-lightgrey rounded-lg">
          <div className="flex items-center">
            <div className="md:hidden">
              <button onClick={toggleMenu} className="mr-4 focus:outline-none">
                <img src={isOpen ? "/close.svg" : "/burger-menu.svg"} className="w-6 h-6" alt="Menu Icon" />
              </button>
              <div className={`absolute left-4 z-60 mt-2 w-42 px-4 bg-white shadow rounded-lg ${isOpen ? "block" : "hidden"}`}>
                <a href="/bookmakers" className="block px-4 py-2 text-sm text-black hover:text-bonusred">Bookmakers</a>
                <button onClick={toggleMobileDropdown} className="block w-full text-left px-4 py-2 text-sm text-black hover:text-bonusred">
                  Bliv klogere på
                  <img src={isMobileDropdownOpen ? "/up-arrow.svg" : "/down-arrow.svg"} className="inline ml-2 w-4 h-4" alt="Arrow Icon" />
                </button>
                <div className={`${isMobileDropdownOpen ? "block" : "hidden"}`}>
                  <a href="/bliv-klogere-paa" className="block px-4 py-2 text-sm text-black hover:text-bonusred">Option 1</a>
                  <a href="/bliv-klogere-paa" className="block px-4 py-2 text-sm text-black hover:text-bonusred">Option 2</a>
                  <a href="/bliv-klogere-paa" className="block px-4 py-2 text-sm text-black hover:text-bonusred">Option 3</a>
                </div>
              </div>
            </div>
            <a href="https://bonusberegner.dk/" className="flex items-center gap-4 justify-center">
              <img src="/bb-logo.svg" className="h-12 hover:opacity-50 transition-opacity" alt="bonusberegner Logo" />
            </a>
          </div>
          <div className="hidden md:flex gap-4 relative">
            <a href="/boookmakers" className="text-sm underline text-black hover:text-bonusred">Bookmakers</a>
            <div className="relative">
              <button
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className="text-sm underline text-black flex items-center hover:text-bonusred">
                Bliv klogere på <img src="/down-arrow.svg" className="ml-1 w-4 h-4" alt="Down Arrow" />
              </button>
              <div
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className={`absolute left-0 z-60 mt-2 w-48 bg-white shadow-lg rounded-lg ${isDropdownOpen ? "block" : "hidden"}`}>
                <a href="/bliv-klogere-paa" className="block px-4 py-2 text-sm text-black hover:text-bonusred">Option 1</a>
                <a href="/bliv-klogere-paa" className="block px-4 py-2 text-sm text-black hover:text-bonusred">Option 2</a>
                <a href="/bliv-klogere-paa" className="block px-4 py-2 text-sm text-black hover:text-bonusred">Option 3</a>
              </div>
            </div>
          </div>
          <button className="relative overflow-hidden bg-white button-move-glow text-bonusred font-medium rounded-lg transition-all before:absolute before:inset-0 before:bg-bonusred before:z-0 before:h-full before:w-0 before:transition-width before:duration-500 hover:before:w-full hover:text-white px-4 py-1 text-sm h-12 w-32">
            <span className="relative z-10">Sammenlign bonusser</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
