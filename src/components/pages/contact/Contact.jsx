import React from 'react';
import './contact.css';
import { Helmet } from 'react-helmet';
import CS1 from './cs1/CS1';
import CS2 from './cs2/CS2';

const Contact = () => {
  return (
    <main>
      <Helmet>
        <title>Contact | Xemsoft</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>
      <CS1 />
      <CS2 />
    </main>
  );
};

export default Contact;
