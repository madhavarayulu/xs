import React from 'react';

const FeatureBox = ({ title, description, features, buttonText }) => {
  return (
    <div id="os3__div-5" className="os3__pricing__feature-box">
      <div id="os3__div-6" className="os3__vertical__10">
        <h3 className="os3__text__display-small">{title}</h3>
        <p className="os3__text__body-medium">{description}</p>
      </div>
      <div id="os3__div-6" className="os3__base-grid">
        <ul
          role="list"
          id="os3__ul"
          className="os3__pricing__checklist os3__vertical__12"
        >
          {features.map((feature, index) => (
            <li key={index} className="os3__pricing__checklist-item">
              <div className="os3__w-layout-grid os3__list__item-wrapper-2">
                <img
                  src="./src/assets/check-black.svg"
                  className="os3__list__item-icon"
                  alt="checkmark"
                />
                <div className="os3__text__body-small">{feature}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="os3__pricing__feature-box-buttons">
        <div className="os3__button__list">
          <a
            id="os3__pricing-button-business-critical"
            className="os3__button__outline os3__small os3__bc os3__button"
            href=""
          >
            {buttonText}
          </a>
        </div>
      </div>
      <div className="os3__bg__blue-05"></div>
    </div>
  );
};

export default FeatureBox;
