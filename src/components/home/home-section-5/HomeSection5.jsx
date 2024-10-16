import React, { useState } from 'react';
import './home-section-5.css';
import { Link } from 'react-router-dom';

function HomeSection5() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="home__s5__section">
      <div className="show-desktop-tablet-only">
        <div className="spacer__88"></div>
      </div>

      <div className="home__s5__contain">
        <div className="home__s5__header">
          <div className="home__s5__header__s1">
            <h2 className="home__s5__text-display-large">
              Deployment models for every business and security need
            </h2>
            <div className="home__s5__hide">
              <div className="spacer__24"></div>
              <Link to="" className="home__s5__button-arrow">
                Explore our deployment models
              </Link>
            </div>
          </div>
          <div className="home__s5__header__s2">
            <p>
              Fivetran moves data across the business, regardless of where it
              lives — on premises, the cloud or a bit of both. We offer
              multiple deployment models to meet the needs of every business,
              from stringent security requirements to maintaining that on-prem
              database even after partial cloud migration.
            </p>
          </div>
        </div>

        <div className="spacer__60"></div>

        <div className="home__s5__side-tabs">
          <div className="home__s5__side-tabs-menu">
            <Link
              to=""
              className={`home__s5__side-tabs-tab ${
                activeTab === 0 ? 'current' : ''
              }`}
              onClick={() => handleTabClick(0)}
            >
              <div className="home__s5__side-tabs-tab-icon">
                <img src="home__s5__cloud.svg" className="home__s5__icon" />
              </div>
              <div>Cloud</div>
            </Link>
            <Link
              to=""
              className={`home__s5__side-tabs-tab ${
                activeTab === 1 ? 'current' : ''
              }`}
              onClick={() => handleTabClick(1)}
            >
              <div className="home__s5__side-tabs-tab-icon">
                <img src="home__s5__hybrid.svg" className="home__s5__icon" />
              </div>
              <div>Hybrid</div>
            </Link>
            <Link
              to=""
              className={`home__s5__side-tabs-tab ${
                activeTab === 2 ? 'current' : ''
              }`}
              onClick={() => handleTabClick(2)}
            >
              <div className="home__s5__side-tabs-tab-icon">
                <img src="home__s5__onprem.svg" className="home__s5__icon" />
              </div>
              <div>On-prem</div>
            </Link>
          </div>

          <div className="home__s5__side-tabs-panes">
            {activeTab === 0 && (
              <div className="home__s5__side-tabs-pane active-tab">
                <div>
                  <img
                    src="home__s5__pane-1.svg"
                    className="home__s5__pane-image show-desktop-tablet-only"
                  />
                  <img
                    src="home__s5__pane-1-mobile.svg"
                    className="home__s5__pane-image show-mobile-only"
                  />
                  <div className="spacer__30"></div>
                  <div className="home__s5__pane-text">
                    <strong>SaaS deployment:</strong> Fully-managed platform in
                    Fivetran&apos;s secure cloud environment
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="home__s5__side-tabs-pane active-tab">
                <div>
                  <img
                    src="home__s5__pane-2.svg"
                    className="home__s5__pane-image show-desktop-tablet-only"
                  />
                  <img
                    src="home__s5__pane-2-mobile.svg"
                    className="home__s5__pane-image show-mobile-only"
                  />
                  <div className="spacer__30"></div>
                  <div className="home__s5__pane-text">
                    <strong>Hybrid:</strong> Utilize Fivetran&apos;s cloud-based
                    control plane while running select pipelines in your secure
                    environment
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="home__s5__side-tabs-pane active-tab">
                <div>
                  <img
                    src="home__s5__pane-3.svg"
                    className="home__s5__pane-image show-desktop-tablet-only"
                  />
                  <img
                    src="home__s5__pane-3-mobile.svg"
                    className="home__s5__pane-image show-mobile-only"
                  />
                  <div className="spacer__30"></div>
                  <div className="home__s5__pane-text">
                    <strong>Self-hosted:</strong> High-volume replication in
                    your local environment
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="show-desktop-tablet-only">
        <div className="spacer__88"></div>
      </div>

      <div className="show-mobile-only">
        <div className="spacer__60"></div>
      </div>
    </section>
  );
}

export default HomeSection5;
