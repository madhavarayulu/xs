import React from 'react';
import './dm-s2.css';

function DMS2() {
  return (
    <div className="dms2-section">
      <div className="dms2-contain">
        <div className="dms2__base-grid__6-col-mobile">
          <div id="dms2__text-container" className="dms2__text__center">
            <div className="dms2__text">
              Trusted by thousands of data-driven companies
            </div>
          </div>
        </div>
        <div className="dms2__show-only__desktop-tablet">
          <div className="dms2__spacer__80"></div>
        </div>
        <div className="dms2__show-only__mobile">
          <div className="dms2__spacer__40"></div>
        </div>
        <div className="dms2__logos__4-cols">
          <img src="dms2__autozone.svg" id="" />
          <img src="dms2__condenast.svg" id="" />
          <img src="dms2__hermes.svg" id="" />
          <img src="dms2__docusign.svg" id="" />
          <img src="dms2__geico.svg" id="" />
          <img src="dms2__guardian.svg" id="" />
          <img src="dms2__jetblue.svg" id="" />
          <img src="dms2__zoom.svg" id="" />
        </div>
      </div>

      <div className="dms2__show-only__desktop-tablet">
        <div className="dms2__spacer__160"></div>
      </div>

      <div className="dms2__show-only__mobile">
        <div className="dms2__spacer__80"></div>
      </div>

      <div className="dms2__bg__grey-05"></div>
    </div>
  );
}

export default DMS2;
