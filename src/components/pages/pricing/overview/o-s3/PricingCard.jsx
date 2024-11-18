import React from 'react';

const PricingCard = ({ plan }) => {
  return (
    <div id="os3__div-2" className="os3__border__solid os3__hover-bg__gradient">
      <div className="os3__pricing-card">
        <div className="os3__padding__20px-16px">
          <div>
            {plan.badge && (
              <div className={plan.badge === 'Free' ? 'os3__opacity__0' : ''}>
                <div className="os3__vertical__10">
                  <div
                    id="os3__div-3"
                    className="os3__pricing__plans-pill-wrapper"
                  >
                    <div>{plan.badge}</div>
                  </div>
                </div>
                <div className="os3__spacer__10"></div>
              </div>
            )}
            <div>
              <h3 className="os3__text__display-small">{plan.name}</h3>
              <p className="os3__text__body-small">{plan.description}</p>
            </div>
            <div className="os3__spacer__24"></div>
            <div className="os3__vertical__4">
              <a
                id="pricing-button-standard-select"
                className="os3__button__pricing-new os3__w-button"
              >
                Start for free
              </a>
            </div>
            <div className="os3__spacer__40"></div>
            <ul
              role="list"
              className="os3__pricing__checklist os3__vertical__12"
            >
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
    </div>
  );
};

export default PricingCard;
