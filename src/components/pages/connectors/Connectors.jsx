import React from 'react';
import './connectors.css';
import { Helmet } from 'react-helmet';
import CoS1 from './co-s1/CoS1';

const Connectors = () => {
  return (
    <main>
      <Helmet>
        <title>Connector Directory | Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>
      <CoS1 />
    </main>
  );
};

export default Connectors;
