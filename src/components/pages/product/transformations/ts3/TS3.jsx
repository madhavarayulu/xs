import React, { useState } from 'react';
import './ts3.css';

const TS3 = () => {
  const [activeTab, setActiveTab] = useState('quickstart');
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const onTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="ts3__position-relative">
      <div className="ts3__section ts3__sticky-nav">
        <div className="ts3__show-only__desktop-tablet">
          <div className="ts3__spacer__32"></div>
        </div>

        <div className="ts3__show-only__mobile">
          <div className="ts3__spacer__24"></div>
        </div>

        <div className="ts3__contain">
          <div className="ts3__base-grid">
            <div id="ts3__text-contain-1">
              <h2 className="ts3__text__display-xsmall">
                From pre-built to custom data models, Xemsoft&apos;s got you
                covered!
              </h2>
              <div className="ts3__show-only__mobile">
                <div className="ts3__spacer__24"></div>
              </div>
            </div>

            <div id="ts3__text-contain-2" className="ts3__button__list-copy-2">
              <a
                href="#ts3__quickstart"
                className={`ts3__link-block-7 ts3__w-inline-block ${
                  activeTab === 'quickstart' ? 'ts3__w--current' : ''
                }`}
                onClick={() => handleTabClick('quickstart')}
              >
                <div>Quickstart</div>
              </a>
              <a
                href="#ts3__dbtcore"
                className={`ts3__link-block-7 ts3__w-inline-block ${
                  activeTab === 'dbtcore' ? 'ts3__w--current' : ''
                }`}
                onClick={() => handleTabClick('dbtcore')}
              >
                <div>DBT Core</div>
              </a>
              <a
                href="#ts3__dbtcloud"
                className={`ts3__link-block-7 ts3__w-inline-block ${
                  activeTab === 'dbtcloud' ? 'ts3__w--current' : ''
                }`}
                onClick={() => handleTabClick('dbtcloud')}
              >
                <div>DBT Cloud</div>
              </a>
              <a
                href="#ts3__dbtcloud"
                className={`ts3__link-block-7 ts3__w-inline-block ${
                  activeTab === 'coalesce' ? 'ts3__w--current' : ''
                }`}
                onClick={() => handleTabClick('coalesce')}
              >
                <div>Coalesce</div>
              </a>
            </div>
          </div>

          <div className="ts3__show-only__mobile">
            <div className="ts3__spacer__24"></div>
          </div>
        </div>

        <div className="ts3__show-only__desktop-tablet">
          <div className="ts3__spacer__32"></div>
        </div>

        <div className="ts3__hr__line"></div>
        <div className="ts3__bg__white"></div>
      </div>

      <div id="ts3__quickstart" className="ts3__section">
        <div className="ts3__show-only__desktop-tablet">
          <div className="ts3__spacer__120"></div>
        </div>
        <div className="ts3__show-only__mobile">
          <div className="ts3__spacer__60"></div>
        </div>
        <div className="ts3__contain">
          <div className="ts3__text-block-39">
            <img src="ts3__diamond.svg" alt="" />
            <div>Quickstart</div>
          </div>
          <div className="ts3__show-only__desktop-tablet">
            <div className="ts3__spacer__80"></div>
          </div>
          <div className="ts3__show-only__mobile">
            <div className="ts3__spacer__40"></div>
          </div>
          <div className="ts3__base-grid">
            <div id="ts3__quickstart-grid-1">
              <h2 className="ts3__text__display-large">
                Plug-and-play with Quickstart data models
              </h2>
              <div className="ts3__spacer__16"></div>
              <p>
                For data teams looking to quickly get started Xemsoft Quickstart
                data models immediately turn your raw data into the
                production-ready tables that drive insights. With just a few
                clicks, you can transform your data without writing any SQL,
                using third-party tools or building out a dbt project.
              </p>
              <div className="ts3__spacer__16"></div>
              <a href="" className="ts3__button__arrow ts3__blue-60">
                View Quickstart data models docs
              </a>
            </div>
            <div id="ts3__quickstart-grid-2" className="ts3__video-autoplay">
              <div className="ts3__w-background-video ts3__video-autoplay__video">
                <video
                  style={{
                    backgroundImage: 'url(ts3__quickstart-video-poster.jpg)',
                  }}
                ></video>
              </div>
              <div className="ts3__video-autoplay__button-wrap">
                <a
                  href=""
                  className="ts3__video-autoplay__button ts3__w-inline-block ts3__w-lightbox"
                >
                  <img
                    src="ts3__play-arrow.svg"
                    className="ts3__video-autoplay-play-arrow"
                  />
                  <div>Watch the full demo video</div>
                </a>
              </div>
            </div>
          </div>
          <div className="ts3__show-only__desktop-tablet">
            <div className="ts3__spacer__120"></div>
          </div>
          <div className="ts3__show-only__mobile">
            <div className="ts3__spacer__60"></div>
          </div>
          <div className="ts3__base-grid ts3__vertical__32">
            <div id="ts3__quickstart-grid-3" className="ts3__div-block-523">
              <div className="ts3__div-block-524">
                <img
                  src="ts3__quickstart-vida-bg.png"
                  className="ts3__image-140"
                />
                <img
                  src="ts3__quickstart-vida.png"
                  className="ts3__image-141"
                />
              </div>
              <div className="ts3__div-block-522">
                <blockquote className="ts3__block-quote-2">
                  <span className="ts3__text__display-small">
                    &quot;Having accesss to pipeline creation and monitoring
                    (with altering) all in one place with Xemsoft is helpful,
                    making issue resolution very simple.&quot;
                  </span>
                </blockquote>
                <div className="ts3__spacer__16"></div>
                <div className="ts3__text__body-large">
                  Trenton Huey, Vida Health
                </div>
                <div className="ts3__spacer__16"></div>
                <a href="" className="ts3__button__arrow">
                  Read more
                </a>
              </div>
            </div>
            <div id="ts3__quickstart-grid-4" className="ts3__div-block-521">
              <div>
                <blockquote className="ts3__block-quote-2">
                  <span className="ts3__text__display-small">
                    &quot;The Quickstart data model gives us a way to ingest,
                    land and model data with less overhead than ever
                    before.&quot;
                  </span>
                </blockquote>
                <div className="ts3__spacer__16"></div>
                <div className="ts3__text__body-large">
                  Jake Hannan, Sigma Computing
                </div>
                <div className="ts3__spacer__12"></div>
                <a href="" className="ts3__button__arrow ts3__white">
                  Read more
                </a>
                <div className="ts3__show-mobile-only">
                  <div className="ts3__spacer__60"></div>
                </div>
              </div>
              <div>
                <img
                  src="ts3__quickstart-sigma.png"
                  className="ts3__image-142"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ts3__show-only__desktop-tablet">
          <div className="ts3__spacer__120"></div>
        </div>
        <div className="ts3__show-only__mobile">
          <div className="ts3__spacer__60"></div>
        </div>
        <div className="ts3__bg__dune-025"></div>
      </div>

      <div id="ts3__dbtcore" className="ts3__section">
        <div className="ts3__show-only__desktop-tablet">
          <div className="ts3__spacer__120"></div>
        </div>
        <div className="ts3__show-only__mobile">
          <div className="ts3__spacer__60"></div>
        </div>
        <div className="ts3__contain">
          <div className="ts3__text-block-39">
            <img src="ts3__diamond.svg" />
            <div>DBT Core</div>
          </div>
          <div className="ts3__show-only__desktop-tablet">
            <div className="ts3__spacer__80"></div>
          </div>
          <div className="ts3__show-only__mobile">
            <div className="ts3__spacer__40"></div>
          </div>
          <div className="ts3__base-grid">
            <div id="ts3__dbt-grid-1">
              <h2 className="ts3__text__display-large">
                Unify workflows with Xemsoft-hosted dbt core
              </h2>
              <div className="ts3__spacer__16"></div>
              <p>
                For data teams looking for customization and advanced
                capabilities, you can get the best of both worlds. Model data in
                your preferred environment using your dbt project - all while
                orchestratng and managing model runs seamlessly in Xemsoft. No
                complex logic or third-party tools needed.
              </p>
              <div className="ts3__spacer__16"></div>
              <a href="" className="ts3__button__arrow ts3__blue-60">
                View debt Core docs
              </a>
            </div>
            <div id="ts3__dbt-grid-2" className="ts3__video-autoplay">
              <div className="ts3__video-autoplay__video ts3__w-background-video ts3__w-background-video-atom">
                <video
                  style={{ backgroundImage: 'url(ts3__dbt-video-poster.jpg)' }}
                ></video>
              </div>
              <div className="ts3__video-autoplay__button-wrap">
                <a
                  href=""
                  className="ts3__video-autoplay__button ts3__w-inline-block ts3__w-lightbox"
                >
                  <img
                    src="ts3__play-arrow.svg"
                    className="ts3__video-autoplay__play__arrow"
                  />
                  <div>Watch the full demo video</div>
                </a>
              </div>
            </div>
          </div>
          <div className="ts3__show-only__desktop-tablet">
            <div className="ts3__spacer__120"></div>
          </div>
          <div className="ts3__show-only__mobile">
            <div className="ts3__spacer__60"></div>
          </div>
          <div className="ts3__base-grid ts3__vertical__32">
            <div id="ts3__dbt-grid-3" className="ts3__div-block-525">
              <div>
                <blockquote className="ts3__block-quote-2">
                  <span className="ts3__text__display-small">
                    &quot;By integrating Xemsoft and dbt, Xemsoft becomes not
                    only the ELT tool but also the orchestration tool, which is
                    great for reliability, scalability and dev time.&quot;
                  </span>
                </blockquote>
                <div className="ts3__spacer__16"></div>
                <div className="ts3__text__body-large">
                  Tom Gilbertson, SpotOn
                </div>
                <div className="ts3__spacer__12"></div>
                <a href="" className="ts3__button__arrow ts3__white">
                  Read more
                </a>
                <div className="ts3__show-mobile-only">
                  <div className="ts3__spacer__60"></div>
                </div>
              </div>
              <div>
                <img src="ts3__spoton.png" className="ts3__image-142" />
              </div>
            </div>
            <div id="ts3__dbt-grid-4" className="ts3__div-block-523">
              <div className="ts3__div-block-524">
                <img
                  src="ts3__snowflake-transformations.png"
                  className="ts3__image-140"
                />
                <img src="ts3__snowflake.png" className="ts3__image-141" />
              </div>
              <div className="ts3__div-block-526">
                <blockquote className="ts3__block-quote-2">
                  <span className="ts3__text__display-small">
                    &quot;Xemsoft&apos;s data models automatically clean up our
                    raw data sources and output them into one model. We
                    immediately get a clean and normalized reporting set.&quot;
                  </span>
                </blockquote>
                <div className="ts3__spacer__16"></div>
                <div className="ts3__text__body-large">
                  Carl-Johan Wehtje, BI & Analytics, Snowflake
                </div>
                <div className="ts3__spacer__16"></div>
                <a href="" className="ts3__button__arrow">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ts3__show-only__desktop-tablet">
          <div className="ts3__spacer__120"></div>
        </div>
        <div className="ts3__show-only__mobile">
          <div className="ts3__spacer__60"></div>
        </div>
        <div className="ts3__bg__blue-05"></div>
      </div>

      <div className="ts3__section">
        <div className="ts3__show-only__desktop-tablet">
          <div className="ts3__spacer__120"></div>
        </div>
        <div className="ts3__show-only__mobile">
          <div className="ts3__spacer__60"></div>
        </div>
        <div className="ts3__contain">
          <div className="ts3__text__white">
            <h2 className="ts3__text__display-medium">
              Experience the benefits of fully-managed transformations
            </h2>
          </div>
          <div className="ts3__spacer__60"></div>
          <div className="ts3__transformation-tabs">
            <div
              id="ts3__transformation-tabs-images-div"
              className="ts3__transformation-tabs__images"
            >
              <img
                src="ts3__transformation-pattern.svg"
                className="ts3__transformation-tabs__bg-image"
              />
              <img
                src="ts3__transformation-image-1.svg"
                id="ts3__tab1__image"
                className={`ts3__transformation-tabs__image ${
                  selectedTab === 'tab1' ? 'ts3__open' : ''
                }`}
              />
              <img
                src="ts3__transformation-image-2.svg"
                id="ts3__tab2__image"
                className={`ts3__transformation-tabs__image ${
                  selectedTab === 'tab2' ? 'ts3__open' : ''
                }`}
              />
              <img
                src="ts3__transformation-image-3.svg"
                id="ts3__tab3__image"
                className={`ts3__transformation-tabs__image ${
                  selectedTab === 'tab3' ? 'ts3__open' : ''
                }`}
              />
              <img
                src="ts3__transformation-image-4.svg"
                id="ts3__tab4__image"
                className={`ts3__transformation-tabs__image ${
                  selectedTab === 'tab4' ? 'ts3__open' : ''
                }`}
              />
            </div>
            <div className="ts3__transformation-tabs__tabs">
              <div
                id="ts3__tab1"
                className={`ts3__transformation-tabs__tab ${
                  selectedTab === 'tab1' ? 'ts3__open' : ''
                }`}
                onClick={() => onTabSelect('tab1')}
              >
                <div
                  className={`ts3__transformation-tabs__tab-title ${
                    selectedTab === 'tab1' ? 'ts3__open' : ''
                  }`}
                >
                  <h3 className="ts3__text__body-large ts3__text__medium-weight">
                    Integrated scheduling&nbsp;
                  </h3>
                </div>
                <div
                  className={`ts3__transformation-tabs__tab-content ${
                    selectedTab === 'tab1' ? 'ts3__open' : ''
                  }`}
                >
                  <div className="ts3__show-only__tablet-mobile">
                    <div className="ts3__spacer__16"></div>
                  </div>
                  <p className="ts3__text__display-small">
                    Automatically trigger model runs following the completion of
                    Xemsoft connector syncs in your warehouse.
                  </p>
                </div>
              </div>
              <div
                id="ts3__tab2"
                className={`ts3__transformation-tabs__tab ${
                  selectedTab === 'tab2' ? 'ts3__open' : ''
                }`}
                onClick={() => onTabSelect('tab2')}
              >
                <div
                  className={`ts3__transformation-tabs__tab-title ${
                    selectedTab === 'tab2' ? 'ts3__open' : ''
                  }`}
                >
                  <h3 className="ts3__text__body-large ts3__text__medium-weight">
                    Alerts & notifications
                  </h3>
                </div>
                <div
                  className={`ts3__transformation-tabs__tab-content ${
                    selectedTab === 'tab2' ? 'ts3__open' : ''
                  }`}
                >
                  <div className="ts3__show-only__tablet-mobile">
                    <div className="ts3__spacer__16"></div>
                  </div>
                  <p className="ts3__text__display-small">
                    Centralize and manage connector and transformation alerts in
                    Xemsoft for straightforward troubleshooting.
                  </p>
                </div>
              </div>
              <div
                id="ts3__tab3"
                className={`ts3__transformation-tabs__tab ${
                  selectedTab === 'tab3' ? 'ts3__open' : ''
                }`}
                onClick={() => onTabSelect('tab3')}
              >
                <div
                  className={`ts3__transformation-tabs__tab-title ${
                    selectedTab === 'tab3' ? 'ts3__open' : ''
                  }`}
                >
                  <h3 className="ts3__text__body-large ts3__text__medium-weight">
                    Transformations logs
                  </h3>
                </div>
                <div
                  className={`ts3__transformation-tabs__tab-content ${
                    selectedTab === 'tab3' ? 'ts3__open' : ''
                  }`}
                >
                  <div className="ts3__show-only__tablet-mobile">
                    <div className="ts3__spacer__16"></div>
                  </div>
                  <p className="ts3__text__display-small">
                    Centralize your transformation run logs in Xemsoft to ensure
                    easier monitoring and issue resolution.
                  </p>
                </div>
              </div>
              <div
                id="ts3__tab4"
                className={`ts3__transformation-tabs__tab ${
                  selectedTab === 'tab4' ? 'ts3__open' : ''
                }`}
                onClick={() => onTabSelect('tab4')}
              >
                <div
                  className={`ts3__transformation-tabs__tab-title ${
                    selectedTab === 'tab4' ? 'ts3__open' : ''
                  }`}
                >
                  <h3 className="ts3__text__body-large ts3__text__medium-weight">
                    Xemsoft data models
                  </h3>
                </div>
                <div
                  className={`ts3__transformation-tabs__tab-content ${
                    selectedTab === 'tab4' ? 'ts3__open' : ''
                  }`}
                >
                  <div className="ts3__show-only__tablet-mobile">
                    <div className="ts3__spacer__16"></div>
                  </div>
                  <p className="ts3__text__display-small">
                    Leverage Xemsoft&apos;s dbt Core-compatible, pre-built data
                    models to quickly access clean data without the complexity
                    of manual table joints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ts3__show-only__desktop-tablet">
          <div className="ts3__spacer__120"></div>
        </div>
        <div className="ts3__show-only__mobile">
          <div className="ts3__spacer__60"></div>
        </div>
        <div className="ts3__bg__blue-100"></div>
      </div>

      <div id="ts3__dbtcloud" className="ts3__section">
        <div className="ts3__contain">
          <div className="ts3__show-only__desktop-tablet">
            <div className="ts3__spacer__120"></div>
          </div>
          <div className="ts3__show-only__mobile">
            <div className="ts3__spacer__60"></div>
          </div>
          <div className="ts3__base-grid">
            <div id="ts3__dbtcloud-div-1">
              <h2 className="ts3__text__display-large">
                Even more orchestration options
              </h2>
              <div className="ts3__show-only__mobie">
                <div className="ts3__spacer__24"></div>
              </div>
            </div>
            <div id="ts3__dbtcloud-div-2" className="ts3__div-block-518">
              <div className="ts3__text__white">
                <img src="ts3__dbt.svg" />
                <div className="ts3__spacer__16"></div>
                <h3 className="ts3__text__display-medium">dbt Cloud</h3>
              </div>
              <div className="ts3__text__white">
                <p>
                  With Xemsoft&apos;s robust integration with dbt Cloud, users
                  can orchestrate and troubleshoot their entire data pipeline
                  directly from the Xemsoft UI.
                </p>
                <div className="ts3__spacer__16"></div>
                <a href="" className="ts3__button__arrow ts3__white">
                  Learn more
                </a>
              </div>
            </div>
            <div id="ts3__dbtcloud-div-3" className="ts3__show-only__mobile">
              <div className="ts3__spacer__24"></div>
            </div>
            <div id="ts3__dbtcloud-div-4" className="ts3__div-block-519">
              <div>
                <img src="ts3__coalesce.svg" />
                <div className="ts3__spacer__16"></div>
                <h3 className="ts3__text__display-medium">Coalesce</h3>
              </div>
              <div>
                <p>
                  Empower both business and technical users to effortlessly
                  perform transformations with an intuitive and low-code
                  interface by leveraging Xemsoft&apos;s Coalesce
                  integration.&nbsp;
                </p>
                <div className="ts3__spacer-16"></div>
                <a href="" className="ts3__button__arrow">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ts3__show-only__desktop-tablet"></div>
        <div className="ts3__show-only__mobile"></div>
      </div>
    </div>
  );
};

export default TS3;
