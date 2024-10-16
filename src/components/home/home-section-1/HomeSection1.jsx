import React, { useEffect, useState } from 'react';
import './home-section-1.css';
import { Link } from 'react-router-dom';

function HomeSection1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      desktopSrc: 'home__carousel__image__1__desktop.png',
      mobileSrc: 'home__carousel__image__1__mobile.webp',
      description: (
        <>
          Autodesk achieves{' '}
          <span className="text__blue-60-2">governed data access</span> for
          13,000+ employees and 60 data teams.
        </>
      ),
    },
    {
      desktopSrc: 'home__carousel__image__2__desktop.webp',
      mobileSrc: 'home__carousel__image__2__mobile.webp',
      description: (
        <>
          Pitney Bowes{' '}
          <span className="text__blue-60-2">moves to the cloud</span> to track
          800M+ parcels in real time.
        </>
      ),
    },
    {
      desktopSrc: 'home__carousel__image__3__desktop.webp',
      mobileSrc: 'home__carousel__image__3__mobile.png',
      description: (
        <>
          National Australia Bank powers{' '}
          <span className="text__blue-60-2">GenAI,</span> cuts costs by 50% and
          boosts machine learning performance by 30%.
        </>
      ),
    },
    {
      desktopSrc: 'home__carousel__image__4__desktop.png',
      mobileSrc: 'home__carousel__image__4__mobile.webp',
      description: (
        <>
          Jetblue achieves{' '}
          <span className="text__blue-60-2">
            real-time database replication
          </span>{' '}
          for terabytes of data with Fivetran.
        </>
      ),
    },
  ];

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
  };

  return (
    <section className="section">
      <div>
        <div className="spacer__40"></div>
      </div>

      <div className="contain">
        <div className="banner">
          <div className="banner__tag">Product launch</div>
          <Link to="" className="button__arrow">
            Announcing Fivetran&apos;s Hybrid deployment option - securely move
            all of your data with one platform
          </Link>
          <div className="show-only__desktop">
            <img
              src="home-section-1-banner-icon.svg"
              className="banner__icon"
            />
          </div>
          <Link to="" className="banner__link-overlay w-inline-block"></Link>
        </div>

        <div className="spacer__40"></div>

        <div className="base-grid">
          <div className="grid-section-1">
            <h1 className="mulish-text__display-xxlarge">
              Moving data.
              <br />
              Powering <span className="text__blue-60-2">innovation.</span>
            </h1>
            <div className="spacer__24"></div>
            <p>
              From start-ups to global enterprises, the Fivetran data movement
              platform unlocks innovation by accelerating insights, optimizing
              operations and powering data-driven decisions.
            </p>
            <div className="spacer__24"></div>
            <div className="div-block-411">
              <Link to="" className="button__primary small w-button">
                Get started for free
              </Link>
              <Link to="" className="button__outline small w-button">
                View interactive demo
                <br />
              </Link>
            </div>
            <div className="show-mobile-only">
              <div className="spacer__40"></div>
            </div>
          </div>

          {/* <div className="grid-section-2">
            <div className="slider-6 w-slider">
              <div className="w-slider-mask">
                <div className="w-slide" aria-label="1 of 4">
                  <div>
                    <div className="show-desktop-tablet-only">
                      <img
                        src="home__carousel__image__1__desktop.png"
                        className="home-carousel-image"
                      />
                    </div>
                    <div className="show-mobile-only">
                      <img
                        src="home__carousel__image__1__mobile.webp"
                        className="home-carousel-image"
                      />
                      <div className="spacer__20"></div>
                      <p className="text__display-xsmall">
                        Autodesk achieves{' '}
                        <span className="text__blue-60-2">
                          governed data access
                        </span>{' '}
                        for 13,000+ employees and 60 data teams.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-slide" aria-label="2 of 4">
                  <div>
                    <div className="show-desktop-tablet-only">
                      <img
                        src="home__image__2__desktop.webp"
                        className="home-carousel-image"
                      />
                    </div>
                    <div className="show-mobile-only">
                      <img
                        src="home__image__2__mobile.webp"
                        className="home-carousel-image"
                      />
                      <div className="spacer__20"></div>
                      <p className="text__display-xsmall">
                        Pitney Bowes{' '}
                        <span className="text__blue-60-2">
                          moves to the cloud
                        </span>{' '}
                        to track 800M+ parcels in real time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-slide" aria-label="3 of 4">
                  <div>
                    <div className="show-desktop-tablet-only">
                      <img
                        src="home__image__3__desktop.webp"
                        className="home-carousel-image"
                      />
                    </div>
                    <div className="show-mobile-only">
                      <img
                        src="home__image__3__mobile.png"
                        className="home-carousel-image"
                      />
                      <div className="spacer__20"></div>
                      <p className="text__display-xsmall">
                        National Australia Bank powers{' '}
                        <span className="text__blue-60-2">GenAI,</span> cuts
                        costs by 50% and boosts machine learning performance by
                        30%.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-slide" aria-label="4 of 4">
                  <div>
                    <div className="show-desktop-tablet-only">
                      <img
                        src="home__image__4__desktop.png"
                        className="home-carousel-image"
                      />
                    </div>
                    <div className="show-mobile-only">
                      <img
                        src="home__image__4__mobile.webp"
                        className="home-carousel-image"
                      />
                      <div className="spacer__20"></div>
                      <p className="text__display-xsmall">
                        Jetblue achieves{' '}
                        <span className="text__blue-60-2">
                          real-time database replication
                        </span>{' '}
                        for terabytes of data with Fivetran.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-slider-aria-label">Slide 1 of 4.</div>
              </div>

              <div
                className="w-slider-arrow-left"
                role="button"
                tabIndex="0"
                aria-controls="w-slider-mask-0"
                aria-label="previous slide"
              ></div>

              <div
                className="w-slider-arrow-right"
                role="button"
                tabIndex="0"
                aria-controls="w-slider-mask-0"
                aria-label="next slide"
              ></div>

              <div className="slide-nav-2 w-slider-nav w-slider-nav-invert">
                <div
                  className="w-slider-dot w-active"
                  aria-label="Show slide 1 of 4"
                  role="button"
                  tabIndex="0"
                ></div>
                <div
                  className="w-slider-dot"
                  aria-label="Show slide 2 of 4"
                  role="button"
                  tabIndex="-1"
                ></div>
                <div
                  className="w-slider-dot"
                  aria-label="Show slide 3 of 4"
                  role="button"
                  tabIndex="-1"
                ></div>
                <div
                  className="w-slider-dot"
                  aria-label="Show slide 4 of 4"
                  role="button"
                  tabIndex="-1"
                ></div>
              </div>
            </div>
          </div> */}

          <div className="grid-section-2">
            <div className="slider-6 w-slider">
              <div className="w-slider-mask">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`w-slide ${
                      index === currentSlide ? 'active' : ''
                    }`}
                    aria-label={`${index + 1} of ${slides.length}`}
                  >
                    <div>
                      <div className="show-desktop-tablet-only">
                        <img
                          src={slide.desktopSrc}
                          className="home-carousel-image"
                          alt={`Slide ${index + 1}`}
                        />
                      </div>
                      <div className="show-mobile-only">
                        <img
                          src={slide.mobileSrc}
                          className="home-carousel-image"
                          alt={`Slide ${index + 1}`}
                        />
                        <div className="spacer__20"></div>
                        <p className="text__display-xsmall">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="w-slider-arrow-left"
                role="button"
                tabIndex="0"
                aria-controls="w-slider-mask-0"
                aria-label="previous slide"
              ></div>

              <div
                className="w-slider-arrow-right"
                role="button"
                tabIndex="0"
                aria-controls="w-slider-mask-0"
                aria-label="next slide"
              ></div>

              {/* <div
                className="w-slider-arrow-left"
                onClick={() =>
                  setCurrentSlide(
                    (currentSlide - 1 + slides.length) % slides.length
                  )
                }
              ></div>
              <div
                className="w-slider-arrow-right"
                onClick={() =>
                  setCurrentSlide((currentSlide + 1) % slides.length)
                }
              ></div> */}

              <div className="slide-nav-2 w-slider-nav w-slider-nav-invert">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-slider-dot ${
                      index === currentSlide ? 'w-active' : ''
                    }`}
                    aria-label={`Show slide ${index + 1} of ${slides.length}`}
                    role="button"
                    tabIndex="0"
                    onClick={() => handleDotClick(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="show-desktop-tablet-only">
        <div className="spacer__44"></div>
      </div>

      <div className="show-mobile-only">
        <div className="spacer__60"></div>
      </div>
    </section>
  );
}

export default HomeSection1;
