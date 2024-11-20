import React from 'react';
import './co-s1.css';
import './cardsData';
import { cardsData } from './cardsData';

const CoS1 = () => {
  return (
    <section id="cos1__app" className="cos1__section">
      <div className="cos1__show-only__desktop-tablet">
        <div className="cos1__spacer__160"></div>
      </div>
      <div className="cos1__show-only__mobile">
        <div className="cos1__spacer__80"></div>
      </div>
      <div className="cos1__contain">
        <div className="cos1__base-grid cos1__vertical__40">
          <div id="cos1__div-1">
            <h1 className="cos1__text__display-large">
              Connectors for every data source
            </h1>
            <div className="cos1__spacer__60"></div>
            <div className="cos1__connector-filters">
              <form
                id="cos1__wf-form-search"
                name="cos1__wf-form-search"
                method="get"
                className="cos1__connector-filters__form"
              >
                <input
                  maxLength="256"
                  name="cos1__search-2"
                  placeholder="Search connectors"
                  type="text"
                  id="cos1__search-2"
                  className="cos1__connector-filter__input cos1__input-1 cos1__w-input"
                />
                <div
                  className="cos1__connector-filter__dropdown cos1__w-dropdown"
                  id="cos1__div-2"
                >
                  <div
                    className="cos1__searchfilter__toggle cos1__w-dropdown-toggle"
                    id="cos1__w-dropdown-toggle-4"
                  >
                    <div className="cos1__w-icon-dropdown-toggle"></div>
                    <div className="cos1__searchfilter__label">
                      <div className="cos1__text__caption">
                        Filter connectors
                      </div>
                    </div>
                  </div>
                  <nav
                    className="cos1__searchfilter__list cos1__connectors-filter cos1__w-dropdown-list"
                    id="cos1__w-dropdown-list-4"
                  ></nav>
                </div>
              </form>
            </div>
          </div>
          <div id="cos1__div-3" className="cos1__show-only__desktop-tablet">
            <ul className="cos1__checkmark-list">
              <li className="cos1__checkmark-list__item cos1__gradient">
                <span className="cos1__text__body-large">
                  Add any connector, free for 14 days, every time
                </span>
              </li>
              <li className="cos1__checkmark-list__item cos1__gradient">
                <span className="cos1__text__body-large">
                  Easy implementation in just a few clicks
                </span>
              </li>
              <li className="cos1__checkmark-list__item cos1__gradient">
                <span className="cos1__text__body-large">
                  Fully managed data replication
                </span>
              </li>
              <li className="cos1__checkmark-list__item cos1__gradient">
                <span className="cos1__text__body-large">
                  Complete end-to-end automation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cos1__show-only__desktop-tablet">
        <div className="cos1__spacer__60"></div>
      </div>
      <div className="cos1__show-only__mobile">
        <div className="cos1__spacer__40"></div>
      </div>
      <div className="cos1__contain">
        <div>
          <div className="cos1__filter-wrap">
            <div className="cos1__connector-toggles">
              <a href="" className="cos1__connector-toggle _1 disabled">
                Featured connectors
              </a>
              <a href="" className="cos1__connector-toggle _2">
                All connectors (&apos;<span>644</span>&apos;)
              </a>
            </div>
          </div>
          <div className="cos1__show-desktop-tablet-only">
            <div className="cos1__spacer__40"></div>
          </div>
          <div className="cos1__show-mobile-only">
            <div className="cos1__spacer__40"></div>
          </div>
        </div>
        <div className="cos1__base-grid cos1__vertical__20">
          {cardsData.map((card) => (
            <div
              key={card.id}
              id="cos1__grid-div-1"
              className="cos1__hover-card cos1__no-shadow"
            >
              <div id="cos1__grid-div-2" className="cos1__hover-card__inner">
                <a
                  href=""
                  className="cos1__hover-card__link-cover cos1__w-inline-block"
                ></a>
                <div className="cos1__div-block-171">
                  <div className="cos1__div-block-172">
                    <img
                      src={card.imageUrl}
                      className="cos1__connector-list__image"
                    />
                    <div className="cos1__spacer__20"></div>
                    <h3 className="cos1__text__display-xsmall">{card.title}</h3>
                    <div className="cos1__spacer__20"></div>
                    <p className="cos1__hover-card__summary">{card.summary}</p>
                    <div className="cos1__spacer__20"></div>
                  </div>
                  <div className="cos1__hover-card__pills">
                    <div className="cos1__hover-card__pill">Lite</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div id='cos1__grid-div-1' className='cos1__hover-card cos1__no-shadow'>
            <div id='cos1__grid-div-2' className='cos1__hover-card__inner'>
              <a href='' className='cos1__hover-card__link-cover cos1__w-inline-block'></a>
              <div className='cos1__div-block-171'>
                <div className='cos1__div-block-172'>
                  <img src='15five.svg' className='cos1__connector-list__image' />
                  <div className='cos1__spacer__20'></div>
                  <h3 className='cos1__text__display-xsmall'>15Five</h3>
                  <div className='cos1__spacer__20'></div>
                  <p className='cos1__hover-card__summary'>Xemsoft&apos;s 15Five connector is a fully managed data integration. Our ELT connector extracts a deep level of data from the source, replicates and loads that data in your centralized data warehouse or data lake, represented in an easy-to-navigate schema, where analysts can easily access and query it alongside the rest of your organization&apos;s critical information.</p>
                  <div className='cos1__spacer__20'></div>
                </div>
                <div className='cos1__hover-card__pills'>
                  <div className='cos1__hover-card__pill'></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="cos1__text__center">
          <div className="cos1__spacer__60"></div>
          <div className="cos1__text__center">
            <a
              href=""
              className="cos1__button__outline cos1__small cos1__w-button"
            >
              Show more
            </a>
          </div>
        </div>
      </div>
      <div className="cos1__bg__grey-05"></div>
    </section>
  );
};

export default CoS1;
