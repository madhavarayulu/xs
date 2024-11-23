import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/Footer';

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
