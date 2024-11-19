import React from 'react';
import './cs2.css';

const CS2 = () => {
  const logos = [
    'cs2__blend.svg',
    'cs2__asos.svg',
    'cs2__intercom.svg',
    'cs2__daydream.svg',
    'cs2__square.svg',
    'cs2__lufthansa.svg',
    'cs2__docusign.svg',
    'cs2__pitneybowes.svg',
  ];

  const numberOfSections = 4;

  return (
    <section className="cs2__section">
      <div className="cs2__spacer__80"></div>
      <div className="cs2__vertical__120">
        <div className="cs2__contain">
          <div className="cs2__text__white">
            <div className="cs2__vertical__40">
              <div className="cs2__base-grid">
                <div
                  id="cs2__div-1"
                  className="cs2__vertical__20 cs2__text__center"
                >
                  <h2 className="cs2__text__display-large">Start for free</h2>
                  <p className="cs2__text__body-large">
                    Join the thousands of companies using Xemsoft to centralize
                    and transform their data.
                  </p>
                </div>
              </div>
              <div className="cs2__base-grid">
                <div id="cs2__div-2" className="cs2__c2 cs2__w-form">
                  <form id="cs2__form" method="get" className="cs2__c2__form">
                    <input
                      className="cs2__input cs2__w-input"
                      maxLength="256"
                      name="Email"
                      placeholder="Enter email for a 14-day free trail"
                      type="email"
                      id="cs2__email"
                      required
                    />
                    <input
                      type="submit"
                      className="cs2__button__gradient-purple cs2__w-button"
                      value="Sign up"
                    />
                  </form>
                  <div className="cs2__w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="cs2__w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs2__base-grid">
                <div id="cs2__div-3" className="cs2__text__center">
                  <a href="" className="cs2__button__arrow cs2__text__blue-10">
                    Get demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs2__c3">
          {Array.from({ length: numberOfSections }, (_, sectionIndex) => (
            <div key={`section-${sectionIndex}`} className="cs2__c3__logos">
              {logos.map((logo, logoIndex) => (
                <div
                  key={`${sectionIndex}-${logoIndex}`}
                  className="cs2__c3__logo"
                >
                  <img
                    src={logo}
                    alt={`Logo ${logoIndex + 1}`}
                    className="cs2__c3__logo-image"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="cs2__bg__grey-90"></div>
      <div className="cs2__spacer__80"></div>
    </section>
  );
};

export default CS2;
