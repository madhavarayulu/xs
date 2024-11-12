import React from 'react';
import './dd-s3.css';

const DDS3 = () => {
  return (
    <section className="dds3__section">
      <div className="dds3__show-only__desktop-tablet">
        <div className="dds3__spacer__160"></div>
      </div>
      <div className="dds3__show-only__mobile">
        <div className="dds3__spacer__80"></div>
      </div>
      <div className="dds3__contain">
        <div className="dds3__base-grid__6-col-mobile">
          <div id="dds3__heading" className="dds3__text__center">
            <div className="dds3__text__display-eyebrow dds3__text__gradient-purple">
              Trusted by thousands of data-driven companies
            </div>
          </div>
        </div>
        <div className="dds3__show-only__desktop-tablet">
          <div className="dds3__spacer__80"></div>
        </div>
        <div className="dds3__show-only__mobile">
          <div className="dds3__spacer__40"></div>
        </div>
        <div className="dds3__logos__4-cols">
          <img src="dds3__asos.svg" id="dds3__asos" />
          <img src="dds3__newrelic.svg" id="dds3__newrelic" />
          <img src="dds3__penguin-random-house.svg" id="dds3__prh" />
          <img src="dds3__blend.svg" id="dds3__blend" />
          <img src="dds3__logitech.svg" id="dds3__logitech" />
          <img src="dds3__nandos.svg" id="dds3__nandos" />
          <img src="dds3__autodesk.svg" id="dds3__autodesk" />
          <img src="dds3__saks-fifth-avenue.svg" id="dds3-sfa" />
        </div>
      </div>
      <div className="dds3__show-only__desktop-tablet">
        <div className="dds3__spacer__160"></div>
      </div>
      <div className="dds3__show-only__mobile">
        <div className="dds3__spacer__80"></div>
      </div>
      <div className="dds3__bg__grey-05"></div>
    </section>
  );
};

export default DDS3;
