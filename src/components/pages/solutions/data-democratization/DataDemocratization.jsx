import React from 'react';
import './data-democratization.css';
import { Helmet } from 'react-helmet';
import DDS1 from './dd-s1/DDS1';
import DDS2 from './dd-s2/DDS2';
import DDS3 from './dd-s3/DDS3';
import DDS4 from './dd-s4/DDS4';
import DDS5 from './dd-s5/DDS5';
import DDS6 from './dd-s6/DDS6';

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
      <DDS4 />
      <DDS5 />
      <DDS6 />
    </main>
  );
};

export default DataDemocratization;
