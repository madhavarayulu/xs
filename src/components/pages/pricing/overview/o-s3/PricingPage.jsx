import React from 'react';
import './o-s3.css';
import PricingHeader from './PricingHeader';
import PricingCard from './PricingCard';
import FeatureBox from './FeatureBox';
import { pricingPlans, featureBoxes } from './pricingData';
import PricingSlider from './PricingSlider';

const PricingPage = () => {
  return (
    <section id="plans-cards" className="os3__section">
      <div className="os3__spacer__80"></div>
      <div className="os3__contain">
        <div className="os3__base-grid">
          <PricingHeader />
        </div>
        <div className="os3__spacer__80"></div>

        <div className="os3__show-only__desktop__tablet">
          <div className="os3__base-grid">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
            <div id="os3__div-4" className="os3__gradient-line"></div>
          </div>

          <div className="os3__spacer__60"></div>
          <div className="os3__base-grid">
            {featureBoxes.map((box, index) => (
              <FeatureBox key={index} {...box} />
            ))}
          </div>

          {/* YC Promotions section */}
          <div className="os3__spacer__60"></div>
          <div className="os3__div-block-151">
            <div className="os3__bg__grey-05"></div>
            <div className="os3__div-block-152">
              <div className="os3__text__medium-weight">
                Xemsoft Y Combinator Promotions
              </div>
              <div>
                Are you a YC startup? You may be eligible to use Xemsoft for
                free.
              </div>
            </div>
            <a href="" className="os3__button__arrow os3__blue-60">
              Learn more
            </a>
          </div>
        </div>

        <div id="os3__div-7" className="os3__show-only__mobile">
          <div className="os3__base-grid">
            <div id="os3__div-8" className="os3__text__display-eyebrow">
              Explore plans
            </div>
          </div>
          <div className="os3__spacer__20"></div>
          <PricingSlider />
        </div>
      </div>
      <div className="os3__spacer__88"></div>
    </section>
  );
};

export default PricingPage;
