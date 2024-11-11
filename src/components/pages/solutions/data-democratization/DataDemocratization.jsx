import React from 'react';
import './data-democratization.css';
import { Helmet } from 'react-helmet';
import DDS1 from './dd-s1/DDS1';
import DDS2 from './dd-s2/DDS2';
import DDS3 from './dd-s3/DDS3';

const DataDemocratization = () => {
  return (
    <main>
      <Helmet>
        <title>Data Democratization | Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>

      <DDS1 />
      <DDS2 />
      <DDS3 />
    </main>
  );
};

export default DataDemocratization;
