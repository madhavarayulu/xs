import React from 'react';
import './infrastructure-modernization.css';
import { Helmet } from 'react-helmet';
import IMS1 from './im-s1/IMS1';
import IMS2 from './im-s2/IMS2';
import IMS3 from './im-s3/IMS3';
import IMS4 from './im-s4/IMS4';
import IMS5 from './im-s5/IMS5';
import IMS6 from './im-s6/IMS6';

const InfrastructureModernization = () => {
  return (
    <main>
      <Helmet>
        <title>Infrastructure Modernization | Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>

      <IMS1 />
      <IMS2 />
      <IMS3 />
      <IMS4 />
      <IMS5 />
      <IMS6 />
    </main>
  );
};

export default InfrastructureModernization;
