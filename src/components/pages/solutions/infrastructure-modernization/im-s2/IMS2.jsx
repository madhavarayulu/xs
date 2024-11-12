import React from 'react';
import './im-s2.css';

const IMS2 = () => {
  return (
    <section className="ims2__section">
      <div className="ims2__spacer__88"></div>
      <div className="ims2__contain">
        <div className="ims2__base-grid__6-col-mobile">
          <div id="ims2__div-1" className="ims2__text__center">
            <div className="ims2__text__display-eyebrow ims2__text__gradient-purple">
              Trusted by thousands of data-driven companies
            </div>
          </div>
        </div>
        <div className="ims2__show-only__desktop-tablet">
          <div className="ims2__spacer__80"></div>
        </div>
        <div className="ims2__show-only__mobile">
          <div className="ims2__spacer__40"></div>
        </div>
        <div className="ims2__logos__4-cols">
          <img src="ims2__autozone.svg" id="ims2__image-1" />
          <img src="ims2__condenast.svg" id="ims2__image-2" />
          <img src="ims2__hermes.svg" id="ims2__image-3" />
          <img src="ims2__docusign.svg" id="ims2__image-4" />
          <img src="ims2__peloton.svg" id="ims2__image-5" />
          <img src="ims2__guardian.svg" id="ims2__image-6" />
          <img src="ims2__jetblue.svg" id="ims2__image-7" />
          <img src="ims2__dialpad.svg" id="ims2__image-8" />
        </div>
      </div>
      ;
      <div className="ims2__show-only__desktop-tablet">
        <div className="ims2__spacer__160"></div>
      </div>
      <div className="ims2__show-only__mobile">
        <div className="ims2__spacer__80"></div>
      </div>
    </section>
  );
};

export default IMS2;
