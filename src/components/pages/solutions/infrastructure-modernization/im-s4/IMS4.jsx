import React from 'react';
import './im-s4.css';

const IMS4 = () => {
  return (
    <div className="ims4__section">
      <div className="ims4__show-only__desktop-tablet">
        <div className="ims4__spacer__120"></div>
      </div>
      <div className="ims4__show-only__mobile">
        <div className="ims4__spacer__88"></div>
      </div>
      <div className="ims4__contain">
        <div className="ims4__base-grid">
          <div id="ims4__div-1">
            <h2 className="ims4__text__display-medium">
              The hidden cost of the status quo
            </h2>
            <div className="ims4__spacer__32"></div>
            <p className="ims4__text__body-large">
              The DIY approach to building data pipelines saps critical
              development resources that could be allocated to core business
              functions.
            </p>
          </div>
          <div id="ims4__div-2">
            <div className="ims4__show-only__mobie">
              <div className="ims4__spacer__32"></div>
            </div>
            <a
              href=""
              className="ims4__button__outline ims4__small ims4__w-button"
            >
              Get the report
            </a>
          </div>
        </div>
        <div className="ims4__spacer__88"></div>
        <div className="ims4__base-grid ims4__gutter-large">
          <div id="ims4__div-3">
            <div className="ims4__marketing__big-num-flex">
              <div className="ims4__text__large-number">44</div>
              <div className="ims4__text__large-number-units">%</div>
            </div>
            <div className="ims4__spacer__16"></div>
            <div className="ims4__b89__content-line"></div>
            <div className="ims4__spacer__16"></div>
            <div className="ims4__text__caption">
              Data engineering time wasted building and rebuilding pipelines
            </div>
          </div>

          <div id="ims4__div-4">
            <div className="ims4__marketing__big-num-flex">
              <div className="ims4__text__large-number">76</div>
              <div className="ims4__text__large-number-units">%</div>
            </div>
            <div className="ims4__spacer__16"></div>
            <div className="ims4__b89__content-line"></div>
            <div className="ims4__spacer__16"></div>
            <div className="ims4__text__caption">
              Data engineers who report it takes days or a week to prepare data
              for decisions
            </div>
          </div>

          <div id="ims4__div-5">
            <div className="ims4__marketing__big-num-flex">
              <div className="ims4__text__large-number">85</div>
              <div className="ims4__text__large-number-units">%</div>
            </div>
            <div className="ims4__spacer__16"></div>
            <div className="ims4__b89__content-line"></div>
            <div className="ims4__spacer__16"></div>
            <div className="ims4__text__caption">
              Companies that lost money because of old or error-prone data
            </div>
          </div>
        </div>
      </div>
      <div className="ims4__show-only__desktop-tablet">
        <div className="ims4__spacer__160"></div>
      </div>
      <div className="ims4__show-only__mobile">
        <div className="ims4__spacer__80"></div>
      </div>
      <div className="ims4__bg__blue-05"></div>
    </div>
  );
};

export default IMS4;
