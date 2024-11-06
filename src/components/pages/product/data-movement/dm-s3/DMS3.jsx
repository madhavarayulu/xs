import React from 'react';
import './dm-s3.css';

function DMS3() {
  return (
    <div className="dms3__section">
      <div className="dms3__show-only__desktop-tablet">
        <div className="dms3__spacer__160"></div>
      </div>

      <div className="dms3__show-only__mobile">
        <div className="dms3__spacer__80"></div>
      </div>

      <div className="dms3__contain">
        <div className="dms3__base-grid">
          <div id="dms3__heading-text-container">
            <h2 className="dms3__text">
              Data movement for every business need
            </h2>
            <div className="dms3__spacer__32"></div>
            <p className="dms3__text__body-large">
              Data is the lifeblood of any company. At Xemsoft, we ensure your
              data is there when you need it.
            </p>
          </div>
        </div>

        <div className="dms3__show-only__desktop-tablet">
          <div className="dms3__spacer__88"></div>
        </div>

        <div className="dms3__show-only__mobile">
          <div className="dms3__spacer__88"></div>
        </div>

        <div className="dms3__base-grid dms3__gutter-large">
          <div id="dms3__grid-left">
            <h2 className="dms3__text__display-small">Analytics</h2>
            <div className="dms3__spacer__32"></div>
            <p className="dms3__text__body-large">
              Drive your business with richer, faster analytic insights for your
              marketing, finance, sales and other departments.
            </p>
            <div className="dms3__spacer__60"></div>
            <ul role="list" className="dms3__checkmark-list">
              <li className="dms3__checkmark-list__item">
                <p>
                  Support for every data source with{' '}
                  <a href="">500+ fully managed connectors</a>
                </p>
              </li>
              <li className="dms3__checkmark-list__item">
                <p>
                  Speed time to insights with automated,{' '}
                  <a href="">fully-integrated transformations</a>
                </p>
              </li>
              <li className="dms3__checkmark-list__item">
                <p>
                  Empower all teams to <a href="">access data in minutes </a>
                  with no code
                </p>
              </li>
            </ul>
          </div>
          <div id="dms3__grid-right">
            <h2 className="dms3__text__display-small">Operational</h2>
            <div className="dms3__spacer__32"></div>
            <p className="dms3__text__body-large">
              Improve your business operations with high-volume data movement
              across your company and systems.
            </p>
            <div className="dms3__spacer__60"></div>
            <ul role="list" className="dms3__checkmark-list">
              <li className="dms3__checkmark-list__item">
                <p>
                  <a href="">Low-impact data movement</a> that doesn&apos;t slow
                  down your source systems
                </p>
              </li>
              <li className="dms3__checkmark-list__item">
                <p>
                  One minute or less sync frequencies and{' '}
                  <a href="">support for streaming use cases</a>
                </p>
              </li>
              <li className="dms3__checkmark-list__item">
                <p>
                  <a href="">Total transparency and security</a> into your data
                  movement across every system
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dms3__show-only__desktop-tablet">
        <div className="dms3__spacer__160"></div>
      </div>

      <div className="dms3__show-only__mobile">
        <div className="dms3__spacer__80"></div>
      </div>
    </div>
  );
}

export default DMS3;
