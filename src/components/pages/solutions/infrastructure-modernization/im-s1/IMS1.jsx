import React from 'react';
import './im-s1.css';
import Lottie from 'react-lottie-player';
import animationData from './ims1-animation.json';

const IMS1 = () => {
  return (
    <section className="ims1__section">
      <div className="ims1__show-only__desktop-tablet">
        <div className="ims1__spacer__160"></div>
      </div>
      <div className="ims1__show-only__mobile">
        <div className="ims1__spacer__80"></div>
      </div>
      <div className="ims1__contain">
        <div className="ims1__base-grid ims1__vertical__40">
          <div id="ims1__div-1">
            <div className="ims1__text__display-eyebrow ims1__text__gradient-purple">
              xemsoft for infrastructure modernization
            </div>
            <div className="ims1__spacer__16"></div>
            <h1 className="ims1__text__display-large">
              The automated data movement platform for infrastructure
              modernization
            </h1>
            <div className="ims1__spacer__60"></div>
            <p id="ims1__p" className="ims1__text__body-large">
              Modernize your infrastructure, migrate to the cloud and centralize
              all of your data to accelerate your business.
              <br />
            </p>
            <div className="ims1__spacer-36"></div>
            <div className="ims1__show-only__mobile">
              <div className="ims1__spacer_-4"></div>
            </div>
            <div id="ims1__div-button" className="ims1__button__list">
              <a
                href=""
                id="ims1__div-button-1"
                className="ims1__button__outline ims1__small ims1__w-button"
              >
                Get started for free
              </a>
              <a href="" className="ims1__button__arrow ims1__blue-60">
                Book a live demo
              </a>
            </div>
          </div>
          <div id="ims1__div-2" className="ims1__show-only__desktop-tablet">
            <Lottie loop animationData={animationData} play />
          </div>
        </div>
      </div>
      <div className="ims1__show-only__desktop-tablet">
        <div className="ims1__spacer__160"></div>
      </div>
      <div className="ims1__show-only__mobile">
        <div className="ims1__spacer__80"></div>
      </div>
    </section>
  );
};

export default IMS1;
