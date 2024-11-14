import React from 'react';
import './overview.css';
import { Helmet } from 'react-helmet';
import OS1 from './o-s1/OS1';

const Overview = () => {
  return (
    <main>
      <Helmet>
        <title>Pricing | Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>

      <OS1 />
    </main>
  );
};

export default Overview;
