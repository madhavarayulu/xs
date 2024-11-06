import React from 'react';
import './data-movement.css';
import { Helmet } from 'react-helmet';
import DMS1 from './dm-s1/DMS1';
import DMS2 from './dm-s2/DMS2';
import DMS3 from './dm-s3/DMS3';
import DMS4 from './dm-s4/DMS4';

function DataMovement() {
  return (
    <main>
      <Helmet>
        <title>Data Movement | Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>

      <DMS1 />
      <DMS2 />
      <DMS3 />
      <DMS4 />
    </main>
  );
}

export default DataMovement;
