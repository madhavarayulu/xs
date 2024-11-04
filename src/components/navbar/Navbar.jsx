import React, { useEffect, useState } from 'react';
import './navbar.css';
import {
  FaBars,
  FaXmark,
  FaAngleDown,
  FaAngleUp,
  FaPlay,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    product: false,
    solutions: false,
    pricing: false,
    resources: false,
  });
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Reset dropdowns when closing the menu
      document.body.classList.remove('nav-open');
      setDropdowns({
        product: false,
        solutions: false,
        pricing: false,
        resources: false,
      });
      setActiveDropdown(null);
    } else {
      document.body.classList.add('nav-open');
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu && dropdowns[menu]) {
      // If the clicked dropdown is already active and open, close it
      setDropdowns((prev) => ({
        ...prev,
        [menu]: false,
      }));
      setActiveDropdown(null);
    } else {
      // Open the clicked dropdown and close any others
      setDropdowns((prev) => ({
        product: false,
        solutions: false,
        pricing: false,
        resources: false,
        [menu]: true, // Open the clicked menu
      }));
      setActiveDropdown(menu); // Set this dropdown as active
    }
  };

  // const toggleDropdown = (menu) => {
  //   setDropdowns((prev) => ({
  //     ...prev,
  //     [menu]: !prev[menu],
  //   }));
  //   setActiveDropdown(menu);
  // };

  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(null);
    }
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.nav-overlay') && isMenuOpen) {
      document.body.classList.remove('nav-open');
      setIsMenuOpen(false);
      setDropdowns({
        product: false,
        solutions: false,
        pricing: false,
        resources: false,
      });
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="nav-container">
        <nav className="nav-content-wrapper">
          <div className="nav-align">
            {/* Logo and brand name */}
            <div className="nav-brand">
              <Link to="/">
                <img className="nav-logo-name" src="fivetran-logo+name.svg" />
                {/* <img className="nav-logo" src="fivetran-logo.svg" /> */}
              </Link>
            </div>

            {/* Hamburger Menu Icon */}
            {/* <div className="menu-button-wrapper" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="menu-button menu-close" />
              ) : (
                <FaBars className="menu-button menu-open" />
              )}
            </div> */}

            {/* Fullscreen Menu - visible only when isMenuOpen is true */}
            <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}>
              <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-menu-1">
                  {/* Dropdown Menu Items */}
                  <div
                    className={`menu-item ${
                      dropdowns.product || activeDropdown === 'product'
                        ? 'dropdown-active'
                        : ''
                    }`}
                    onClick={() => toggleDropdown('product')}
                    onMouseEnter={() => handleMouseEnter('product')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="dropdown">
                      <div className="menu-item-label">Product</div>
                      {dropdowns.product ? (
                        <FaAngleUp className="menu-item-arrow" />
                      ) : (
                        <FaAngleDown className="menu-item-arrow" />
                      )}
                    </div>
                    <nav
                      className={`dropdown-overlay ${
                        dropdowns.product || activeDropdown === 'product'
                          ? 'active'
                          : ''
                      }`}
                    >
                      <div className="product-dropdown">
                        <div className="nested-dropdown-menu-container">
                          <div className="nested-dropdown-heading">
                            Platform
                          </div>
                          <Link
                            to="/data-movement"
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__data-movement.svg" />
                            <div>Data movement</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__transformations.svg" />
                            <div>Transformations</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__security.svg" />
                            <div>Security</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__governance.svg" />
                            <div>Governance</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__extensibility-and-management.svg" />
                            <div>Extensibility and management</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__deployment-options.svg" />
                            <div>Deployment options</div>
                          </Link>
                        </div>

                        <div className="nested-dropdown-menu-container">
                          <div className="nested-dropdown-heading">Sources</div>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__saas-replication.svg" />
                            <div>Saas replication</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__database-replication.svg" />
                            <div>Database replication</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__sap-replication.svg" />
                            <div>SAP replication</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__streaming-replication.svg" />
                            <div>Streaming replication</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__file-replication.svg" />
                            <div>File replication</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__custom-connectors.svg" />
                            <div>Custom connectors</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__destination-to-destination.svg" />
                            <div>Destination to destination</div>
                          </Link>
                          <div>
                            <div className="nested-dropdown-heading">
                              Destinations
                            </div>
                          </div>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="product__data-lakes.svg" />
                            <div>Data lakes</div>
                          </Link>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <div
                    className={`menu-item ${
                      dropdowns.solutions || activeDropdown === 'solutions'
                        ? 'dropdown-active'
                        : ''
                    }`}
                    onClick={() => toggleDropdown('solutions')}
                    onMouseEnter={() => handleMouseEnter('solutions')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="dropdown">
                      <div className="menu-item-label">Solutions</div>
                      {dropdowns.solutions ? (
                        <FaAngleUp className="menu-item-arrow" />
                      ) : (
                        <FaAngleDown className="menu-item-arrow" />
                      )}
                    </div>

                    <nav
                      className={`dropdown-overlay ${
                        dropdowns.solutions || activeDropdown === 'solutions'
                          ? 'active'
                          : ''
                      }`}
                    >
                      <div className="solutions-dropdown">
                        <div className="nested-dropdown-menu-container">
                          <div className="nested-dropdown-heading">
                            For Operations
                          </div>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__data-democratization.svg" />
                            <div>Data democratization</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__infrastructure-modernization.svg" />
                            <div>Infrastructure modernization</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__embedded.svg" />
                            <div>Embedded</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__data-readiness-for-ai.svg" />
                            <div>Data readiness for AI</div>
                          </Link>
                          <div>
                            <div className="nested-dropdown-heading">
                              For Analytics
                            </div>
                          </div>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__marketing.svg" />
                            <div>Marketing</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__finance.svg" />
                            <div>Finance</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__sales-and-support.svg" />
                            <div>Sales and support</div>
                          </Link>
                        </div>

                        <div className="nested-dropdown-menu-container">
                          <div className="nested-dropdown-heading">
                            For Industry
                          </div>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__retail+cpg.svg" />
                            <div>Retail + CPG</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__financial-services.svg" />
                            <div>Financial services</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__manufacturing.svg" />
                            <div>Manufacturing</div>
                          </Link>

                          <div>
                            <div className="nested-dropdown-heading">
                              For Teams
                            </div>
                          </div>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__data-science.svg" />
                            <div>Data science</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__data-engineering.svg" />
                            <div>Data engineering</div>
                          </Link>
                        </div>

                        <div className="nested-dropdown-menu-container">
                          <div className="nested-dropdown-heading">
                            Partner Technology
                          </div>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__amazon-web-services.svg" />
                            <div>Amazon Web Services</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__databricks.svg" />
                            <div>Databricks</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__google-bigquery.svg" />
                            <div>Google BigQuery</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__microsoft-azure.svg" />
                            <div>Microsoft Azure</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="solutions__snowflake.svg" />
                            <div>Snowflake</div>
                          </Link>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <div className="menu-item">Connectors</div>

                  <div
                    className={`menu-item ${
                      dropdowns.pricing || activeDropdown === 'pricing'
                        ? 'dropdown-active'
                        : ''
                    }`}
                    onClick={() => toggleDropdown('pricing')}
                    onMouseEnter={() => handleMouseEnter('pricing')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="dropdown">
                      <div className="menu-item-label">Pricing</div>
                      {dropdowns.pricing ? (
                        <FaAngleUp className="menu-item-arrow" />
                      ) : (
                        <FaAngleDown className="menu-item-arrow" />
                      )}
                    </div>

                    <nav
                      className={`dropdown-overlay ${
                        dropdowns.pricing || activeDropdown === 'pricing'
                          ? 'active'
                          : ''
                      }`}
                    >
                      <div className="pricing-dropdown">
                        <div className="nested-dropdown-menu-container">
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="pricing__overview.svg" />
                            <div>Overview</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="pricing__free-plan.svg" />
                            <div>Free plan</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="pricing__all-features.svg" />
                            <div>All features</div>
                          </Link>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <div
                    className={`menu-item ${
                      dropdowns.resources || activeDropdown === 'resources'
                        ? 'dropdown-active'
                        : ''
                    }`}
                    onClick={() => toggleDropdown('resources')}
                    onMouseEnter={() => handleMouseEnter('resources')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="dropdown">
                      <div className="menu-item-label">Resources</div>
                      {dropdowns.resources ? (
                        <FaAngleUp className="menu-item-arrow" />
                      ) : (
                        <FaAngleDown className="menu-item-arrow" />
                      )}
                    </div>

                    <nav
                      className={`dropdown-overlay ${
                        dropdowns.resources || activeDropdown === 'resources'
                          ? 'active'
                          : ''
                      }`}
                    >
                      <div className="resources-dropdown">
                        <div className="nested-dropdown-menu-container">
                          <div className="nested-dropdown-heading">
                            Education
                          </div>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__blog.svg" />
                            <div>Blog</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__case-studies.svg" />
                            <div>Case studies</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__resource-center.svg" />
                            <div>Resource center</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__documentation.svg" />
                            <div>Documentation</div>
                          </Link>
                          <div>
                            <div className="nested-dropdown-heading">
                              Connect
                            </div>
                          </div>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__events.svg" />
                            <div>Events</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__news.svg" />
                            <div>News</div>
                          </Link>
                        </div>

                        <div className="nested-dropdown-menu-container">
                          <div className="nested-dropdown-heading">Support</div>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__professional-services.svg" />
                            <div>Professional Services</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__partners.svg" />
                            <div>Partners</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__changelog.svg" />
                            <div>Changelog</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__status.svg" />
                            <div>Status</div>
                          </Link>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__support-portal.svg" />
                            <div>Support portal</div>
                          </Link>
                          <div>
                            <div className="nested-dropdown-heading">
                              Developers
                            </div>
                          </div>
                          <Link
                            to=""
                            className="nested-dropdown-links-container"
                          >
                            <img src="resources__full-api-reference.svg" />
                            <div>Full API Reference</div>
                          </Link>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>

                {/* <div className="nav-menu-2">
                  <Link to="" className="menu-item-button">
                    Hear from Our CEO
                    <FaPlay />
                  </Link>
                </div> */}

                <div className="nav-menu-2">
                  <Link to="" className="menu-item-button">
                    Hear from Our CEO
                    <FaPlay />
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="menu-button-wrapper" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="menu-button menu-close" />
            ) : (
              <FaBars className="menu-button menu-open" />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
