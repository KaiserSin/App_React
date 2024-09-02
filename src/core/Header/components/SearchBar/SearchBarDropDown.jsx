/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClickAwayListener from "@/shared/components/ClickAwayListener/ClickAwayListener";

function SearchBarDropDown({ label, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="search-bar-dropdown">
      <button
        className={`search-bar-dropdown__toggle`}
        onClick={() => {
          setIsOpen((prev) => prev);
        }}
      >
        <div>{label}</div>
      </button>
      {isOpen && (
        <>
          <ul className={`search-bar-dropdown-list`}>
            {items?.map((item) => (
              <li key={item} className="search-bar-dropdown-list__item">
                <Link to="/" className="search-bar-dropdown__link">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ClickAwayListener
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </>
      )}
    </div>
  );
}

export default SearchBarDropDown;
