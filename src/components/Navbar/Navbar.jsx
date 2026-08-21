import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo">
          Ruchita<span>.</span>
        </a>

        {/* Desktop Menu */}
        <ul className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((item, index) => (
            <li key={index} className="navbar__item">
              <a
                href={item.link}
                className="navbar__link"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="navbar__toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;