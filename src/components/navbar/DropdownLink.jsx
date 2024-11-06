import React from 'react';
import { Link } from 'react-router-dom';

const DropdownLink = ({ to, icon, label, onClick }) => (
  <Link to={to} className="nested-dropdown-links-container" onClick={onClick}>
    <img src={icon} alt={label} />
    <div>{label}</div>
  </Link>
);

export default DropdownLink;
