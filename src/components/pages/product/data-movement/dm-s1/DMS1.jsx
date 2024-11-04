import React from 'react';
import './dm-s1.css';

function DMS1() {
  return (
    <section className="dms1-section">
      <div className="dms1__show-only__desktop-tablet">
        <div className="dms1__spacer__160"></div>
      </div>

      <div className="dms1__show-only__mobile">
        <div className="dms1__spacer__80"></div>
      </div>

      <div className="dms1__contain">
        <div className="dms1__base-grid dms1__vertical__40">
          <div id="dms1__grid-content" className="dms1__div-block-108">
            <div className="dms1__heading">Data Movement</div>
            <div className="dms1__spacer__16"></div>
            <h1 className="dms1__text">
              Real-time, efficient data replication from any source to your
              destinations
            </h1>
          </div>
        </div>
        <div className="dms1__spacer__60"></div>
        <div className="dms1__base-grid dms1__vertical__40">
          <div id="dms1__sub-text-content" className="dms1__div-block-108">
            <p id="" className="">
              Automatically extract and load data from 500+ sources with
              Fivetran&apos;s automated data movement platform.
              <br />
            </p>
            <div className="dms1__spacer-36"></div>
            <div className="dms1__show-only__mobile">
              <div className="dms1__spacer__4"></div>
            </div>
            <div id="" className="dms1__button__list">
              <a href="" id="" className="dms1__button__outline">
                Get started for free
              </a>
              <a href="" className="dms1__button__arrow" style={{}}>
                Book a live demo
              </a>
            </div>
          </div>
        </div>
        <div className="dms1__show-only__desktop-tablet">
          <div className="dms1__spacer__100"></div>
        </div>
        <div className="dms1__show-only__mobile">
          <div className="dms1__spacer__80"></div>
        </div>
        <div>
          <div className="dms1__show-only__desktop-tablet">
            <img src="dms1-image.png" className="dms1__image" alt="" />
          </div>
        </div>
      </div>

      <div className="dms1__show-only__desktop-tablet">
        <div className="dms1__spacer__160"></div>
      </div>

      <div className="dms1__show-only__mobile">
        <div className="dms1__spacer__80"></div>
      </div>

      <div className="dms1__bg__grey-05"></div>
    </section>
  );
}

export default DMS1;
