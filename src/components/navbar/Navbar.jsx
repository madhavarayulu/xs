import React, { useEffect, useState, useRef } from 'react';
import { FaBars, FaXmark, FaPlay } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import NavMenuItem from './NavMenuItem';
import DropdownSection from './DropdownSection';
import DropdownLink from './DropdownLink';
import navData from './navData';
import './navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    document.body.classList.toggle('nav-open', !isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setActiveDropdown(null);
  };

  const handleDropdownClick = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(null);
    }
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.classList.remove('nav-open');
    }
  };

  /* Add JavaScript to handle dynamic positioning */
  const handleDropdownPosition = () => {
    const dropdowns = document.querySelectorAll('.dropdown-overlay.active');

    dropdowns.forEach((dropdown) => {
      const rect = dropdown.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // Reset classes
      dropdown.classList.remove('align-right', 'align-left');

      // If dropdown extends beyond right edge
      if (rect.right > viewportWidth) {
        dropdown.classList.add('align-right');
      }

      // If dropdown extends beyond left edge
      if (rect.left < 0) {
        dropdown.classList.add('align-left');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleDropdownPosition);
    return () => window.removeEventListener('resize', handleDropdownPosition);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        if (!event.target.closest('.nav-overlay') && isMenuOpen) {
          setIsMenuOpen(false);
          document.body.classList.remove('nav-open');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const renderDropdownContent = (menuKey, menuData) => (
    <nav
      className={`dropdown-overlay ${
        activeDropdown === menuKey ? 'active' : ''
      }`}
    >
      <div className={`${menuKey}-dropdown`}>
        {menuData.sections.map((section, idx) => (
          <DropdownSection key={idx} title={section.title}>
            {section.links.map((link, linkIdx) => (
              <DropdownLink
                key={linkIdx}
                to={link.to}
                icon={link.icon}
                label={link.label}
                onClick={handleLinkClick}
              />
            ))}
          </DropdownSection>
        ))}
      </div>
    </nav>
  );

  return (
    <header>
      <div className="nav-container">
        <nav className="nav-content-wrapper">
          <div className="nav-align">
            <div className="nav-brand">
              <Link to="/">
                {/* <img
                  className="nav-logo-name"
                  src="fivetran-logo+name.svg"
                  alt="Fivetran"
                /> */}
                <div className="nav-logo">X</div>
                <div className="nav-logo-name">Xemsoft</div>
              </Link>
            </div>

            <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}>
              <nav
                className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
                ref={dropdownRef}
              >
                <div className="nav-menu-1">
                  {Object.entries(navData).map(([key, data]) => (
                    <NavMenuItem
                      key={key}
                      label={data.label}
                      isActive={activeDropdown === key}
                      onClick={() => handleDropdownClick(key)}
                      onMouseEnter={() => handleMouseEnter(key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {renderDropdownContent(key, data)}
                    </NavMenuItem>
                  ))}

                  <div className="menu-item">
                    <NavLink to="/connectors" onClick={handleLinkClick}>Connectors</NavLink>
                  </div>
                </div>

                <div className="nav-menu-2">
                  <Link to="" className="menu-item-button">
                    Hear from Our CEO
                    <FaPlay />
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          <div className="menu-button-wrapper" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="menu-button menu-close" />
            ) : (
              <FaBars className="menu-button menu-open" />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
