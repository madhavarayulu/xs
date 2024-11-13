import React from 'react';
import './im-s5.css';

const IMS5 = () => {
  return (
    <section className="ims5__section">
      <div className="ims5__show-only__desktop-tablet">
        <div className="ims5__spacer__160"></div>
      </div>
      <div className="ims5__show-only__mobile">
        <div className="ims5__spacer__88"></div>
      </div>
      <div className="ims5__contain">
        <div className="ims5__base-grid">
          <div id="ims5__div-1">
            <div className="ims5__text__display-eyebrow ims5__text__gradient-purple">
              explore the capabilities
            </div>
            <div className="ims5__spacer__16"></div>
            <h2 className="ims5__text__display-medium">
              Xemsoft handles the biggest workloads
              <br />
            </h2>
            <div className="ims5__spacer__32"></div>
            <p className="ims5__text__body-large">
              Xemsoft&apos;s data movement platform loads data to your cloud
              destinations with hundres of prebuilt connectors that
              automatically respond to API and schema changes, ensuring your
              data never stops moving in the cloud.
            </p>
            <div className="ims5__show-only__mobile">
              <div className="ims5__spacer__40"></div>
            </div>
          </div>
          <div id="ims5__div-2" className="ims5__marketing__-links-flex">
            <ul role="list" className="ims5__checkmark-list">
              <li className="ims5__checkmark-list__item ims5__blue">
                <a href="" className="ims5__text__body-large">
                  Fully managed solution
                </a>
              </li>
              <li className="ims5__checkmark-list__item ims5__blue">
                <a href="" className="ims5__text__body-large">
                  Historical data sync
                </a>
              </li>
              <li className="ims5__checkmark-list__item ims5__blue">
                <a href="" className="ims5__text__body-large">
                  Customizable sync items
                </a>
              </li>
              <li className="ims5__checkmark-list__item ims5__blue">
                <a href="" className="ims5__text__body-large">
                  Automatic schema drift
                </a>
              </li>
              <li className="ims5__checkmark-list__item ims5__blue">
                <a href="" className="ims5__text__body-large">
                  Managed API changes
                </a>
              </li>
            </ul>
            <ul role="list" className="ims5__checkmark-list">
              <li className="ims5__checkmark-list__item ims5__blue">
                <a href="" className="ims5__text__body-large">
                  Idempotent pipelines
                </a>
              </li>
              <li className="ims5__checkmark-list__item ims5__blue">
                <a href="" className="ims5__text__body-large">
                  Log-based replication
                </a>
              </li>
              <li className="ims5__checkmark-list__item ims5__blue">
                <a href="" className="ims5__text__body-large">
                  Advanced security
                </a>
              </li>
              <li className="ims5__checkmark-list__item ims5__blue">
                <a href="" className="ims5__text__body-large">
                  Professional Services support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ims5__show-only__desktop-tablet">
          <div className="ims5__spacer__100"></div>
          <img src="ims5__image.svg" className="ims5__image-21" />
        </div>
      </div>
      <div className="ims5__show-only__mobile">
        <div className="ims5__spacer__88"></div>
      </div>
      <div className="ims5__show-only__desktop-tablet">
        <div className="ims5__spacer__160"></div>
      </div>
    </section>
  );
};

export default IMS5;
