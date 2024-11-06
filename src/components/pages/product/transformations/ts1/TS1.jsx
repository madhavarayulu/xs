import React from 'react';
import './ts1.css';

const TS1 = () => {
  return (
    <section className="ts1__section">
      <div className="ts1__show-only__desktop-tablet">
        <div className="ts1__spacer__80"></div>
      </div>

      <div className="ts1__show-only__mobile">
        <div className="ts1__spacer__40"></div>
      </div>

      <div className="ts1__contain">
        <div className="ts1__text__white">
          <div className="ts1__text__center">
            <h1 className="ts1__text__display-xlarge">
              Streamline your ELT workflow with{' '}
              <span className="ts1__text__citron-60 ts1__newline__desktop-tablet">
                automated data transformations
              </span>
            </h1>
            <div className="ts1__spacer__24"></div>
            <p id="ts1__p1" className="ts1__text__body-large">
              Empower your data teams with simplified data transformations
              orchestrated within{' '}
              <span className="ts1__newline__desktop">
                a single platform, regardless of the transformation tools being
                used.
              </span>
            </p>
            <div className="ts1__show-only__mobile">
              <div className="ts1__spacer__4"></div>
            </div>
            <div className="ts1__spacer__32"></div>
          </div>
        </div>

        <div className="ts1__base-grid ts1__vertical__40">
          <div
            id="ts1_btn-container"
            className="ts1__button__list ts1__center-mobile"
          >
            <a
              href=""
              className="ts1__button__blue-30 ts1__small ts1__w-button"
            >
              Get started for free
            </a>
            <a href="" className="ts1__button__arrow ts1__white">
              Book a live demo
            </a>
          </div>
        </div>

        <div className="ts1__show-only__mobile">
          <div className="ts1__spacer__40"></div>
        </div>

        <div className="ts1__show-only__desktop-tablet">
          <div className="ts1__spacer__80"></div>
        </div>

        <img
          src="ts1__desktop.png"
          className="ts1__show-only__desktop-tablet"
        />
        <img src="ts1__mobile.png" className="ts1__show-only__mobile" />

        <div className="ts1__show-only__mobile">
          <div className="ts1__spacer__40"></div>
        </div>

        <div className="ts1__show-only__desktop-tablet">
          <div className="ts1__spacer__80"></div>
        </div>

        <div className="ts1__text__center">
          <h2 className="ts1__text__display-xsmall ts1__white">
            Trusted by data-driven enterprises
          </h2>
        </div>

        <div className="ts1__spacer__32"></div>
      </div>

      <div className="ts1__c3"></div>

      <div className="ts1__show-only__desktop-tablet">
        <div className="ts1__spacer__80"></div>
      </div>

      <div className="ts1__show-only__mobile">
        <div className="ts1__spacer__60"></div>
      </div>

      <div className="ts1__bg__blue-100"></div>

      <img src="ts1__bg.svg" className="ts1__bg__image" />
    </section>
  );
};

export default TS1;
