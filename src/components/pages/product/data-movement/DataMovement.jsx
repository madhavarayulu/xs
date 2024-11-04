import React from 'react';
import './data-movement.css';
import { Helmet } from 'react-helmet';
import DMS1 from './dm-s1/DMS1';

function DataMovement() {
  return (
    <main>
      <Helmet>
        <title>Data Movement - Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>

      <DMS1 />
    </main>
  );
}

export default DataMovement;
