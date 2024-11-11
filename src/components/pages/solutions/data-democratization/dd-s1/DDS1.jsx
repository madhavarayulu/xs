import React from 'react';
import './dd-s1.css';
import Lottie from 'react-lottie-player';
import animationData from './sol-demo.json';

const DDS1 = () => {
  return (
    <section className="dds1__section">
      <div className="dds1__show-only__desktop-tablet">
        <div className="dds1__spacer__160"></div>
      </div>
      <div className="dds1__show-only__mobile">
        <div className="dds1__spacer__80"></div>
      </div>
      <div className="dds1__contain">
        <div className="dds1__base-grid dds1__vertical__40">
          <div id="dds1__div-1">
            <div className="dds1__text__display-eyebrow dds1__text__gradient-purple">
              xemsoft for data democratization
            </div>
            <div className="dds1__spacer__16"></div>
            <h1 className="dds1__text__display-large">
              Democratize data and empower more data-driven decisions
            </h1>
            <div className="dds1__spacer__60"></div>
            <p id="dds1__div-1-p" className="dds1__text__body-large">
              Your IT team can&apos;t do it all - and they shouldn&apos;t have
              to. Make data accessible to teams across your organization without
              compromising on compliance.
              <br />
            </p>
            <div className="dds1__spacer-36"></div>
            <div className="dds1__show-only__mobile">
              <div className="dds1__spacer__4"></div>
            </div>
            <div id="dds1__div-1-btn" className="dds1__button__list">
              <a
                id="dds1__div-1-btn1"
                href=""
                className="dds1__button__outline dds1__small dds1__w-button"
              >
                Get started for free
              </a>
              <a href="" className="dds1__button__arrow dds1__blue-60">
                Book a live demo
              </a>
            </div>
          </div>
          <div id="dds1__div-2" className="dds1__show-only__desktop-tablet">
            <Lottie loop animationData={animationData} play />
          </div>
        </div>
      </div>
      <div className="dds1__show-only__desktop-tablet">
        <div className="dds1__spacer__160"></div>
      </div>
      <div className="dds1__show-only__mobile">
        <div className="dds1__spacer__80"></div>
      </div>
    </section>
  );
};

export default DDS1;
