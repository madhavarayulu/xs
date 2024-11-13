import React from 'react';
import './im-s6.css';

const IMS6 = () => {
  return (
    <section className="ims6__section">
      <div className="ims6__show-only__desktop-tablet">
        <div className="ims6__spacer__160"></div>
      </div>
      <div className="ims6__contain">
        <div className="ims6__base-grid"></div>
        <div className="ims6__show-only__mobile">
          <div className="ims6__spacer__80"></div>
        </div>
        <div className="ims6__show-only__desktop-tablet">
          <div className="ims6__spacer__160"></div>
        </div>
      </div>
    </section>
  );
};

export default IMS6;
