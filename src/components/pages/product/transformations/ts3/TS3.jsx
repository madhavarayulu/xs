import React from 'react';
import './ts3.css';

const TS3 = () => {
  return (
    <div className="ts3__position-relative">
      <div className="ts3__section ts3__sticky-nav">
        <div className="ts3__show-only__desktop-tablet">
          <div className="ts3__spacer__32"></div>
        </div>

        <div className="ts3__show-only__mobile">
          <div className="ts3__spacer__24"></div>
        </div>

        <div className="ts3__contain">
          <div className="ts3__base-grid">
            <div id="ts3__text-contain-1">
              <h2 className="ts3__text__display-xsmall">
                From pre-built to custom data models, Xemsoft&apos;s got you
                covered!
              </h2>
              <div className="ts3__show-only__mobile">
                <div className="ts3__spacer__24"></div>
              </div>
            </div>

            <div id="ts3__text-contain-2" className="ts3__button__list-copy-2">
              <a
                href="#ts3__quickstart"
                className="ts3__link-block-7 ts3__w-inline-block ts3__w--current"
              >
                <div>Quickstart</div>
              </a>
              <a
                href="#ts3__dbtcore"
                className="ts3__link-block-7 ts3__w-inline-block"
              >
                <div>DBT Core</div>
              </a>
              <a
                href="#ts3__dbtcloud"
                className="ts3__link-block-7 ts3__w-inline-block"
              >
                <div>DBT Cloud</div>
              </a>
              <a
                href="#ts3__dbtcloud"
                className="ts3__link-block-7 ts3__w-inline-block"
              >
                <div>Coalesce</div>
              </a>
            </div>
          </div>

          <div className="ts3__show-only__mobile">
            <div className="ts3__spacer__24"></div>
          </div>
        </div>

        <div className="ts3__show-only__desktop-tablet">
          <div className="ts3__spacer__32"></div>
        </div>

        <div className="ts3__hr__line"></div>
        <div className="ts3__bg__white"></div>
      </div>

      <div id="ts3__quickstart" className="ts3__section"></div>

      <div id="ts3__dbtcore" className="ts3__section"></div>

      <div className="ts3__section"></div>

      <div id="ts3__dbtcloud" className="ts3__section"></div>
    </div>
  );
};

export default TS3;
