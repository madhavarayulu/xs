import React, { useState } from 'react';

// Pricing plan data
const PRICING_PLANS = [
  {
    title: 'Free',
    description: 'For individuals automating ELT for small volumes of data.',
    buttonText: 'Start for free',
    features: [
      'Access Standard Plan features, free up to 500,000 monthly active rows (MAR)',
      'Commitment free: No credit card required',
    ],
  },
  {
    title: 'Starter',
    description: 'Achieve modern ELT for your application & file sources.',
    buttonText: 'Start for free',
    features: [
      '10 users',
      '1-hour syncs',
      '200+ fully-managed connectors for applications and sources',
      'Automatic schema migrations',
      'Integration for dbt Core',
    ],
  },
  {
    title: 'Standard',
    description:
      'Centralize product and transactional data from your databases.',
    buttonText: 'Start for free',
    features: [
      'Everything in our Starter plan, plus:',
      'Unlimited users',
      '15-min syncs',
      'Database connectors',
      "Access to Fivetran's REST API",
    ],
  },
  {
    title: 'Enterprise',
    description:
      'Empower everyone with fast, secure, reliable data from all of your sources.',
    buttonText: 'Start for free',
    features: [
      'Everything in Standard, plus:',
      '5-minute syncs',
      'Advanced security and data residency options',
      'Priority support',
    ],
  },
];

// Individual pricing card component
const PricingCard = ({ plan }) => (
  <div className="os3__pricing-card">
    <div className="os3__padding__20px-16px">
      <div>
        <div>
          <h3 className="os3__text__display-small">{plan.title}</h3>
          <p className="os3__text__body-small">{plan.description}</p>
        </div>
        <div className="os3__spacer__24"></div>
        <div className="os3__vertical__4">
          <a
            id="os3__pricing-button-standard-select"
            href=""
            className="os3__button__pricing-new os3__w-button"
          >
            {plan.buttonText}
          </a>
        </div>
        <div className="os3__spacer__40"></div>
        <ul role="list" className="os3__pricing__checklist os3__vertical__12">
          {plan.features.map((feature, index) => (
            <li key={index} className="os3__pricing__checklist-item">
              <div className="os3__w-layout-grid os3__list__item-wrapper-2">
                <img
                  src="/src/assets/check-black.svg"
                  className="os3__list__item-icon"
                  alt="checkmark"
                />
                <div className="os3__text__body-small">
                  {feature}
                  {feature.includes('governance') ||
                  feature.includes('security') ||
                  feature.includes('support') ? (
                    <span className="os3__info-icon"></span>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="os3__spacer__40"></div>
        <a href="" className="os3__button__arrow os3__blue-60">
          Learn more
        </a>
      </div>
    </div>
  </div>
);

// Main pricing slider component
const PricingSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === PRICING_PLANS.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? PRICING_PLANS.length - 1 : prev - 1
    );
  };

  return (
    <div className="os3__price-slider os3__w-slider">
      <div
        className="os3__price-slide__mask os3__w-slider-mask"
        id="os3__w-slider-mask-0"
      >
        <div className="os3__price-slider__slide os3__w-slide">
          <div className="os3__border__solid os3__hover-bg__gradient">
            {/* Pricing card */}
            <PricingCard plan={PRICING_PLANS[currentSlide]} />
          </div>
        </div>
      </div>
      {/* Navigation buttons */}
      <div className="os3__div-block-94">
        {/* Current slide indicator */}
        <div className="os3__text__display-eyebrow">
          {currentSlide + 1}/{PRICING_PLANS.length}
        </div>
      </div>
      <div className="os3__left-arrow os3__w-slider-arrow-left">
        <img
          src="/src/assets/arrow-left.svg"
          className="os3__arrow-image"
          onClick={prevSlide}
        />
      </div>
      <div className="os3__right-arrow os3__w-slider-arrow-right">
        <img
          src="/src/assets/arrow-right.svg"
          className="os3__arrow-image"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default PricingSlider;
