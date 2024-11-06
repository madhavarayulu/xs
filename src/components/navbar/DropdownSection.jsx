import React from 'react';

const DropdownSection = ({ title, children }) => (
  <div className="nested-dropdown-menu-container">
    {title && <div className="nested-dropdown-heading">{title}</div>}
    {children}
  </div>
);

export default DropdownSection;
