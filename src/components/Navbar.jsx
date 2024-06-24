import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleNav = () => {
    setIsClicked(!isClicked);
  };

  const handleResize = () => {
    setIsMobile(window.innerHeight <= 768);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="primary-nav">
      {isMobile && (
        <button className="nav-toggle" onClick={toggleNav}>
          <FaBars />
          {console.log(isClicked)}
        </button>
      )}

      <div className={`nav ${isClicked ? 'clicked' : ''}`}>
        <NavLink to="/" onClick={() => setIsClicked(false)}>
          home
        </NavLink>
        <NavLink to="/events" onClick={() => setIsClicked(false)}>
          events
        </NavLink>
        <NavLink to="/about" onClick={() => setIsClicked(false)}>
          about
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsClicked(false)}>
          contact
        </NavLink>
        <NavLink to="/support" onClick={() => setIsClicked(false)}>
          support
        </NavLink>
      </div>
    </nav>
  );
};
