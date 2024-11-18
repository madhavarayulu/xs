import React from 'react';
import './o-s2.css';

const OS2 = () => {
  return (
    <section className="os2__position-relative">
      <div className="os2__contain">
        <div className="os2__spacer__20"></div>
        <div className="os2__show-only__mobile">
          <div className="os2__spacer__12"></div>
        </div>
        <div className="os2__pricing__anchor-links-wrapper">
          <div className="os2__text__medium-weight">
            <a href="#plans-cards" id="os2__a-1" className="os2__text__white">
              Find a plan
            </a>
          </div>
          <div className="os2__show-only__desktop-tablet">
            <div className="os2__text__medium-weight">
              <a href="#calculate-section" className="os2__text__white">
                How we calculate price
              </a>
            </div>
          </div>
          <div className="os2__text__medium-weight">
            <a href="#video" className="os2__text__white">
              Pricing explainer video
            </a>
          </div>
          <div className="os2__text__medium-weight">
            <a href="#pricing-details" className="os2__text__white">
              Pricing details
            </a>
          </div>
          <div className="os2__text__medium-weight">
            <a href="#faq" className="os2__text__white">
              FAQ
            </a>
          </div>
        </div>
        <div className="os2__show-only__mobile">
          <div className="os2__spacer__12"></div>
        </div>
        <div className="os2__spacer__20"></div>
      </div>
      <div className="os2__bg__blue-60"></div>
    </section>
  );
};

export default OS2;
