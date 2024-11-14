import React, { useEffect } from 'react';
import './dm-s4.css';

function DMS4() {
  useEffect(() => {
    const cards = document.querySelectorAll('.dms4__hover-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 1,
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="dms4__section">
      <div className="dms4__show-only__desktop-tablet">
        <div className="dms4__spacer__160"></div>
      </div>

      <div className="dms4__show-only__mobile">
        <div className="dms4__spacer__80"></div>
      </div>

      <div className="dms4__contain">
        <div className="dms4__base-grid">
          <div id="dms4__heading-container">
            <h2 className="dms4__text">Data movement for every source</h2>
            <div className="dms4__spacer__32"></div>
            <p className="dms4__text__body-large">
              Centralize all your sources with out-of-the box connectors.
            </p>
          </div>
        </div>

        <div className="dms4__show-only__desktop-tablet">
          <div className="dms4__spacer__88"></div>
        </div>

        <div className="dms4__show-only__mobile">
          <div className="dms4__spacer__88"></div>
        </div>

        <div className="dms4__base-grid dms4__vertical__20">
          <div id="dms4__image-container" className="dms4__hover-card">
            <div id="" className="dms4__hover-card__inner">
              <a href="" className="dms4__hover-card__link-cover"></a>
              <div>
                <div className="dms4__spacer__20"></div>
                <h3 className="dms4__text__display-xsmall">SaaS replication</h3>
                <div className="dms4__spacer__20"></div>
                <p>
                  Effortlessly centralize data from SaaS sources so your team
                  can deliver better insights, faster.
                </p>
                <div className="dms4__spacer-36"></div>
              </div>
              <div>
                <a href="" className="dms4__button__arrow">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <div id="dms4__image-container" className="dms4__hover-card">
            <div id="" className="dms4__hover-card__inner">
              <a href="" className="dms4__hover-card__link-cover"></a>
              <div>
                <div className="dms4__spacer__20"></div>
                <h3 className="dms4__text__display-xsmall">
                  Database replication
                </h3>
                <div className="dms4__spacer__20"></div>
                <p>
                  Move the largest volumes of data with low impact and low
                  latency..
                </p>
                <div className="dms4__spacer-36"></div>
              </div>
              <div>
                <a href="" className="dms4__button__arrow">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <div id="dms4__image-container" className="dms4__hover-card">
            <div id="" className="dms4__hover-card__inner">
              <a href="" className="dms4__hover-card__link-cover"></a>
              <div>
                <div className="dms4__spacer__20"></div>
                <h3 className="dms4__text__display-xsmall">
                  SAP data replication
                </h3>
                <div className="dms4__spacer__20"></div>
                <p>
                  Unlock your SAP ERP data with low-impact, high-volume data
                  replication to centralize SAP data into your cloud
                  destinations for real-time access and analytics.
                </p>
                <div className="dms4__spacer-36"></div>
              </div>
              <div>
                <a href="" className="dms4__button__arrow">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <div id="dms4__image-container" className="dms4__hover-card">
            <div id="" className="dms4__hover-card__inner">
              <a href="" className="dms4__hover-card__link-cover"></a>
              <div>
                <div className="dms4__spacer__20"></div>
                <h3 className="dms4__text__display-xsmall">
                  Streaming replication
                </h3>
                <div className="dms4__spacer__20"></div>
                <p>
                  Xemsoft loads event-based data to your destination, allowing
                  users to gain insights on their data faster.
                </p>
                <div className="dms4__spacer-36"></div>
              </div>
              <div>
                <a href="" className="dms4__button__arrow">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <div id="dms4__image-container" className="dms4__hover-card">
            <div id="" className="dms4__hover-card__inner">
              <a href="" className="dms4__hover-card__link-cover"></a>
              <div>
                <div className="dms4__spacer__20"></div>
                <h3 className="dms4__text__display-xsmall">File replication</h3>
                <div className="dms4__spacer__20"></div>
                <p>
                  Easily centralize structured and semi-structured data from
                  files to deliver better insights, faster.
                </p>
                <div className="dms4__spacer-36"></div>
              </div>
              <div>
                <a href="" className="dms4__button__arrow">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <div id="dms4__image-container" className="dms4__hover-card">
            <div id="" className="dms4__hover-card__inner">
              <a href="" className="dms4__hover-card__link-cover"></a>
              <div>
                <div className="dms4__spacer__20"></div>
                <h3 className="dms4__text__display-xsmall">
                  Custom connectors
                </h3>
                <div className="dms4__spacer__20"></div>
                <p>
                  No pre-built connector for your data source? No problem. Move
                  data from any source with Fivetran&apos;s custom, extensible
                  connectors.
                </p>
                <div className="dms4__spacer-36"></div>
              </div>
              <div>
                <a href="" className="dms4__button__arrow">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <div id="dms4__image-container" className="dms4__hover-card">
            <div id="" className="dms4__hover-card__inner">
              <a href="" className="dms4__hover-card__link-cover"></a>
              <div>
                <div className="dms4__spacer__20"></div>
                <h3 className="dms4__text__display-xsmall">
                  Destination to destination
                </h3>
                <div className="dms4__spacer__20"></div>
                <p>
                  Easily migrate from one destination to another with
                  Xemsoft&apos;s destination-to-destination movement.
                </p>
                <div className="dms4__spacer-36"></div>
              </div>
              <div>
                <a href="" className="dms4__button__arrow">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dms4__show-only__desktop-tablet">
        <div className="dms4__spacer__160"></div>
      </div>

      <div className="dms4__show-only__mobile">
        <div className="dms4__spacer__80"></div>
      </div>

      <div className="dms4__bg__grey-05"></div>
    </div>
  );
}

export default DMS4;
