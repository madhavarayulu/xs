import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';

function Footer() {
  return (
    <section className="section">
      <div className="spacer__56"></div>

      <div className="w-layout-grid footer">
        <div className="footer__contain">
          <div className="footer__grid">
            <div className="footer__col">
              <div className="footer__links-wrapper">
                <div className="footer__header">Product</div>
                <Link to="" className="footer__link">
                  Data movement
                </Link>
                <Link to="" className="footer__link">
                  Transformations
                </Link>
                <Link to="" className="footer__link">
                  Security
                </Link>
                <Link to="" className="footer__link">
                  Governance
                </Link>
                <Link to="" className="footer__link">
                  Extensibility{' '}
                  <span className="newline__desktop-tablet">management</span>
                </Link>
                <Link to="" className="footer__link">
                  Connectors
                </Link>
                <Link to="" className="footer__link">
                  Deployment options
                </Link>
              </div>
            </div>
            <div className="footer__col">
              <div className="footer__links-wrapper">
                <div className="footer__header">Pricing</div>
                <Link to="" className="footer__link">
                  Plans
                </Link>
                <Link to="" className="footer__link">
                  All features
                </Link>
                <Link to="" className="footer__link">
                  Free Plan
                </Link>
                <Link to="" className="footer__link">
                  Y Combinator{' '}
                  <span className="newline__desktop-tablet">promotions</span>
                </Link>
              </div>
            </div>
            <div className="footer__col">
              <div className="footer__links-wrapper">
                <div className="footer__header">Resources</div>
                <Link to="" className="footer__link">
                  Blog
                </Link>
                <Link to="" className="footer__link">
                  Documentation
                </Link>
                <Link to="" className="footer__link">
                  Case studies
                </Link>
                <Link to="" className="footer__link">
                  Events
                </Link>
                <Link to="" className="footer__link">
                  Resource center
                </Link>
                <Link to="" className="footer__link">
                  Services
                </Link>
                <Link to="" className="footer__link">
                  Learn
                </Link>
                <Link to="" className="footer__link">
                  Status
                </Link>
                <Link to="" className="footer__link">
                  Support portal
                </Link>
              </div>
            </div>
            <div className="footer__col">
              <div className="footer__links-wrapper">
                <div className="footer__header">Company</div>
                <Link to="" className="footer__link">
                  About Xemsoft
                </Link>
                <Link to="" className="footer__link">
                  Culture
                </Link>
                <Link to="" className="footer__link">
                  Careers
                </Link>
                <Link to="" className="footer__link">
                  News
                </Link>
                <Link to="/contact" className="footer__link">
                  Contact us
                </Link>
                <Link to="" className="footer__link">
                  Legal
                </Link>
                <Link to="" className="footer__link">
                  Privacy policy
                </Link>
                <Link to="" className="footer__link">
                  Cookie settings
                </Link>
                <Link to="" className="footer__link">
                  Terms of service
                </Link>
                <Link to="" className="footer__link">
                  Cookie list
                </Link>
              </div>
            </div>
            <div className="footer__col footer__slider__container">
              <div className="footer__links-wrapper slider__wrap">
                <div className="footer__header">From the blog</div>
                <div className="footer__slider footer__w-slider">
                  <div className="footer__w-slider-mask">
                    <div className="footer__w-slide" aria-label="1 of 3">
                      <div className="w-dyn-list">
                        <div className="w-dyn-items">
                          <div className="w-dyn-item">
                            <div className="footer__slide-content-wrapper">
                              <div className="footer__blog-image-wrap">
                                <img
                                  src="footer__carousel__image__1.png"
                                  className="footer__slide-image"
                                />
                              </div>

                              <div className="vertical__8">
                                <div className="text__body-small">
                                  How to replicate databases while ensuring
                                  enterprise security
                                </div>
                                <Link to="" className="button__arrow footer">
                                  Read more
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="footer__w-slide" aria-label="2 of 3">
                      <div className="w-dyn-list">
                        <div className="w-dyn-items">
                          <div className="w-dyn-item">
                            <div className="footer__slide-content-wrapper">
                              <div className="footer__blog-image-wrap">
                                <img
                                  src="footer__carousel__image__2.png"
                                  className="footer__slide-image"
                                />
                              </div>
                              <div className="vertical__8">
                                <div className="footer__text">
                                  Xemsoft Product Update: October 2024
                                </div>
                                <Link
                                  to=""
                                  className="button__arrow footer"
                                ></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="footer__w-slide" aria-label="3 of 3">
                      <div className="w-dyn-list">
                        <div className="w-dyn-items">
                          <div className="w-dyn-item">
                            <div className="footer__slide-content-wrapper">
                              <div className="footer__blog-image-wrap">
                                <img
                                  src="footer__carousel__image__3.png"
                                  className="footer__slide-image"
                                />
                              </div>
                              <div className="vertical__8">
                                <div className="footer__text">
                                  Data governance is a top priority for AI
                                  success
                                </div>
                                <Link to="" className="button__arrow footer">
                                  Read more
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-slider-aria-label"></div>
                  </div>

                  <div className="footer__slide-nav footer__w-slider-nav footer__w-slider-nav-invert footer__w-round">
                    <div
                      className="footer__w-slider-dot footer__w-active"
                      tabIndex="0"
                    ></div>
                    <div className="footer__w-slider-dot" tabIndex="-1"></div>
                    <div className="footer__w-slider-dot" tabIndex="-1"></div>
                  </div>
                </div>
              </div>

              <div className="footer__links-wrapper">
                <div className="footer__header">Follow us</div>
                <div className="footer__social-links-grid">
                  <Link
                    to=""
                    className="footer__social-link-wrapper footer__w-inline-block"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to=""
                    className="footer__social-link-wrapper footer__w-inline-block"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    to=""
                    className="footer__social-link-wrapper footer__w-inline-block"
                  >
                    <FaYoutube />
                  </Link>
                </div>
              </div>

              <div className="text__body-small">
                &copy;{' '}
                <span className="footer__copyright">
                  {new Date().getFullYear()}
                </span>{' '}
                Xemsoft Inc.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer__56"></div>
    </section>
  );
}

export default Footer;
