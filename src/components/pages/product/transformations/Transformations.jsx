import React from 'react';
import './transformations.css';
import { Helmet } from 'react-helmet';
import TS1 from './ts1/TS1';
import TS2 from './ts2/TS2';
import TS3 from './ts3/TS3';

const Transformations = () => {
  return (
    <main>
      <Helmet>
        <title>Transformations | Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>

      <TS1 />
      <TS2 />
      <TS3 />
    </main>
  );
};

export default Transformations;
