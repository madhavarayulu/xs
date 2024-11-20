import React from 'react';
import './connectors.css';
import { Helmet } from 'react-helmet';
import CoS1 from './co-s1/CoS1';
import CoS2 from './co-s2/CoS2';

const Connectors = () => {
  return (
    <main>
      <Helmet>
        <title>Connector Directory | Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>
      <CoS1 />
      <CoS2 />
    </main>
  );
};

export default Connectors;
