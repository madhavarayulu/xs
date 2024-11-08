import React from 'react';
import './ts3.css';

const TS3 = () => {
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
                className="ts3__link-block-7 ts3__w-inline-block ts3__w--current"
              >
                <div>Quickstart</div>
              </a>
              <a
                href="#ts3__dbtcore"
                className="ts3__link-block-7 ts3__w-inline-block"
              >
                <div>DBT Core</div>
              </a>
              <a
                href="#ts3__dbtcloud"
                className="ts3__link-block-7 ts3__w-inline-block"
              >
                <div>DBT Cloud</div>
              </a>
              <a
                href="#ts3__dbtcloud"
                className="ts3__link-block-7 ts3__w-inline-block"
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
              <div className="ts3__div-block-524"></div>
              <div className="ts3__div-block-526"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="ts3__section"></div>

      <div id="ts3__dbtcloud" className="ts3__section"></div>
    </div>
  );
};

export default TS3;
