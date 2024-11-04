import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;