import React from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const NavMenuItem = ({
  label,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  return (
    <div
      className={`menu-item ${isActive ? 'dropdown-active' : ''}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="dropdown">
        <div className="menu-item-label">{label}</div>
        {children && (
          <span className="mobile-arrows-only">
            {isActive ? (
              <FaAngleUp className="menu-item-arrow" />
            ) : (
              <FaAngleDown className="menu-item-arrow" />
            )}
          </span>
        )}
      </div>
      {children}
    </div>
  );
};

export default NavMenuItem;
