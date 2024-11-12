import React from 'react';
import './infrastructure-modernization.css';
import { Helmet } from 'react-helmet';
import IMS1 from './im-s1/IMS1';
import IMS2 from './im-s2/IMS2';

const InfrastructureModernization = () => {
  return (
    <main>
      <Helmet>
        <title>Infrastructure Modernization | Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>

      <IMS1 />
      <IMS2 />
    </main>
  );
};

export default InfrastructureModernization;
