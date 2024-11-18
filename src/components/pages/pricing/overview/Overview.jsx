import React from 'react';
import './overview.css';
import { Helmet } from 'react-helmet';
import OS1 from './o-s1/OS1';
import OS2 from './o-s2/OS2';
import PricingPage from './o-s3/PricingPage';

const Overview = () => {
  return (
    <main>
      <Helmet>
        <title>Pricing | Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>

      <OS1 />
      <OS2 />
      <PricingPage />
    </main>
  );
};

export default Overview;
