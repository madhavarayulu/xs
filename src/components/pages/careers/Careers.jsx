import React from 'react';
import './careers.css';
import { Helmet } from 'react-helmet';
import JobListings from './jobs/JobListings';

const Careers = () => {
  return (
    <main>
      <Helmet>
        <title>Careers | Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>
      <JobListings />
    </main>
  );
};

export default Careers;
