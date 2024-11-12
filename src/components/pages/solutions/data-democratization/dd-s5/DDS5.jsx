import React from 'react';
import './dd-s5.css';

const DDS5 = () => {
  return (
    <section className="dds5__section">
      <div className="dds5__contain">
        <div className="dds5__show-only__desktop-tablet">
          <div className="dds5__spacer__160"></div>
        </div>
        <div className="dds5__base-grid">
          <div id="dds5__heading">
            <div className="dds5__text__display-eyebrow dds5__text__gradient-purple">
              Discover the benefits
            </div>
            <div className="dds5__spacer__16"></div>
            <h2 className="dds5__text__display-medium">
              Data democratization empowers every decision to be data-driven
            </h2>
          </div>
        </div>
        <div className="dds5__spacer__88"></div>
        <div className="dds5__base-grid dds5__gutter-large">
          <div id="dds5__div-1">
            <img src="dds5__time.svg" />
            <div className="dds5__spacer__32"></div>
            <h3 className="dds5__text__body-large dds5__text__medium-weight">
              Faster decision making across your org
            </h3>
            <div className="dds5__spacer__12"></div>
            <p>
              Every team has the data they need when they need it - without the
              usual bottleneck of fielding every one-off data request.
            </p>
          </div>
          <div id="dds5__div-2">
            <img src="dds5__check.svg" />
            <div className="dds5__spacer__32"></div>
            <h3 className="dds5__text__body-large dds5__text__medium-weight">
              Remove data silos while maintaining data quality
            </h3>
            <div className="dds5__spacer__12"></div>
            <p>
              Data integrity is as important as data access. As citizen
              integrators centralize data, IT can act as a quality assurance
              filter to ensure decisions are based on accurate data.
            </p>
          </div>
        </div>
      </div>
      <div className="dds5__show-only__mobile">
        <div className="dds5__spacer__80"></div>
      </div>
      <div className="dds5__show-only__desktop-tablet">
        <div className="dds5__spacer__160"></div>
      </div>
    </section>
  );
};

export default DDS5;
