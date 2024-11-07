import React from 'react';
import './ts2.css';

const TS2 = () => {
  return (
    <div className="ts2__section">
      <div className="ts2__show-only__desktop-tablet">
        <div className="ts2__spacer__120"></div>
      </div>

      <div className="ts2__show-only__mobile">
        <div className="ts2__spacer__60"></div>
      </div>

      <div className="ts2__contain">
        <div className="ts2__text__center">
          <h2 className="ts2__text__display-large">
            Turn data into insights faster with Xemsoft
          </h2>
        </div>

        <div className="ts2__show-desktop-tablet-only">
          <div className="ts2__spacer__60"></div>
        </div>

        <div className="ts2__show-mobile-only">
          <div className="ts2__spacer__40"></div>
        </div>

        <div className="ts2__base-grid">
          <div id="ts2__grid-div-1" className="ts2__div-block-520">
            <div className="ts2__text__eyebrow ts2__text__blue-60">01</div>
            <div>
              <h3 className="ts2__text__display-xsmall">
                Unified ELT ecosystem that operates seamlessly&nbsp;&nbsp;&nbsp;
              </h3>
              <div className="ts2__spacer__24"></div>
              <p>
                Automated end-to-end ELT eliminates switching between multiple
                third-party orchestration tools, allowing users to manage the
                entire ELT process in the Xemsoft platform.
              </p>
            </div>
          </div>

          <div id="ts2__grid-div-2" className="ts2__div-block-520">
            <div className="ts2__text__eyebrow ts2__text__blue-60">02</div>
            <div>
              <h3 className="ts2__text__display-xsmall">
                Real-time insights enabled by decreased data latency
              </h3>
              <div className="ts2__spacer__24"></div>
              <p>
                Model runs are triggered after the completion of Xemsoft
                connector syncs, enabling real-time insights that run when data
                is updated.&nbsp;
              </p>
            </div>
          </div>

          <div id="ts2__grid-div-3" className="ts2__div-block-520">
            <div className="ts2__text__eyebrow ts2__text__blue-60">03</div>
            <div>
              <h3 className="ts2__text__display-xsmall">
                Take your transformations to the next level
              </h3>
              <div className="ts2__spacer__24"></div>
              <p>
                Xemsoft Quickstart data models turn raw application data into
                analytics-ready tables with the click of a button. Our robust
                library of dbt data models instantly lays the groundwork without
                writing any code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TS2;
