import React from 'react';
import './o-s1.css';

const OS1 = () => {
  return (
    <section className="os1__section">
      <div className="os1__spacer__80"></div>
      <div className="os1__contain">
        <div className="os1__base-grid">
          <div id="os1__div-1">
            <p className="os1__text__display-eyebrow">
              Xemsoft pricing
              <br />
            </p>
            <div className="os1__spacer__12"></div>
            <div className="os1__w-optimization">
              <div className="os1__w-optimization">
                <h1 className="os1__text__display-large">
                  Only pay for what{' '}
                  <span className="os1__newline__desktop-tablet">you use</span>
                </h1>
              </div>
              <div className="os1__w-optimization" data-wf-hidden-variation>
                <h1 className="os1__text__display-large">
                  Only pay for what{' '}
                  <span className="os1__newline__desktop-tablet">you use</span>
                </h1>
              </div>
            </div>
            <div className="os1__spacer__32"></div>
            <a
              href=""
              id="os1__btn"
              className="os1__button__outline os1__small os1__w-button"
            >
              Start for free
            </a>
            <div className="os1__show-only__mobile">
              <div className="os1__spacer__80"></div>
            </div>
          </div>
          <div id="os1__div-2" className="os1__vertical__40">
            <div
              id="os1__div-3"
              className="os1__bullets__with-line os1__left-padding__44"
            >
              <div className="os1__vertical__4">
                <div className="os1__text__body-large os1__text__medium-weight">
                  Pay only for changed data
                </div>
                <p className="os1__text__body-medium">
                  Only pay for monthly active rows (MAR), which are rows
                  inserted, updated or deleted by our connectors &mdash; not
                  total rows. Each MAR is only counted once per month, no matter
                  how many changes.
                  <br />
                </p>
              </div>
              <div className="os1__bullets__line os1__purple os1__hero-section"></div>
            </div>

            <div
              id="os1__div-3"
              className="os1__bullets__with-line os1__left-padding__44"
            >
              <div className="os1__vertical__4">
                <div className="os1__text__body-large os1__text__medium-weight">
                  As volumes increase, unit costs decrease
                </div>
                <div className="os1__w-optimization">
                  <div className="os1__w-optimization">
                    <p className="os1__text__body-medium">
                      The more unique data you sync, the less the unit cost
                      &mdash; your cost per row declines automatically.
                    </p>
                  </div>
                  <div className="os1__w-optimization" data-wf-hidden-variation>
                    <p className="os1__text__body-medium">
                      The more unique data you sync, the less the unit cost
                      &mdash; your cost per row declines automatically.
                    </p>
                  </div>
                </div>
              </div>
              <div className="os1__bullets__line os1__purple os1__hero-section"></div>
            </div>

            <div
              id="os1__div-3"
              className="os1__bullets__with-line os1__left-padding__44"
            >
              <div className="os1__vertical__4">
                <div className="os1__text__body-large os1__text__medium-weight">
                  Use Xemsoft for free, forever
                </div>
                <p className="os1__text__body-medium">
                  For low data volumes, you can use Xemsoft at no cost on our{' '}
                  <a href="">Free Plan</a>.
                  <br />
                </p>
              </div>
              <div className="os1__bullets__line os1__purple os1__hero-section"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="os1__spacer__80"></div>
      <div className="os1__bg__grey-05"></div>
    </section>
  );
};

export default OS1;
