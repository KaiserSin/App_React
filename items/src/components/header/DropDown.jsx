/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React, { useState, useEffect } from 'react';


function DropDown({ categoryDropDown, categories }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-toggle')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  const NavBar = () => (
    <nav
      className={`w-dropdown-list ${isOpen ? 'w--open' : ''}`}
      id="w-dropdown-list-0"
      aria-labelledby="w-dropdown-toggle-0"
    >
      {categories.map((item, index) => (
        <a key={index} href="#" className="w-dropdown-link" tabIndex="0">
          {item}
        </a>
      ))}
    </nav>
  );

  return (
    <div data-delay data-hover="false" className="dropdown w-dropdown">
      <div
        className={`dropdown-toggle w-dropdown-toggle ${isOpen ? 'w--open' : ''}`}
        id="w-dropdown-toggle-0"
        aria-controls="w-dropdown-list-0"
        aria-haspopup="menu"
        aria-expanded="false"
        role="button"
        tabIndex="0"
        onClick={handleClick}
      >
        <div className="w-icon-dropdown-toggle" aria-hidden="true"></div>
        <div>{categoryDropDown}</div>
      </div>
      <NavBar/>
    </div>
  );
}

export default DropDown;
