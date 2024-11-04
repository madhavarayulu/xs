import React from 'react';
import './home-section-12.css';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function HomeSection12() {
  return (
    <section className="section">
      <div className="bg__blue-05"></div>

      <div className="contain">
        <div className="show-desktop-tablet-only">
          <div className="spacer__88"></div>
        </div>

        <div className="show-mobile-only">
          <div className="spacer__60"></div>
        </div>

        <div className="text__center">
          <div>
            <h2 className="text__display-xlarge">
              Let&apos;s get you moving data
            </h2>
          </div>

          <div className="spacer__32"></div>

          <div className="bottom-cta__buttons">
            <Link
              to=""
              className="s12__button__primary s12__small s12__w-button"
            >
              Get started for free
            </Link>
            <Link
              to=""
              className="s12__button__outline s12__small s12__w-button"
            >
              Book a live deomo
            </Link>
          </div>
        </div>

        {/* <div className="show-mobile-only">
          <div className="spacer__60"></div>
        </div> */}

        {/* <div className="show-desktop-tablet-only">
          <div className="spacer__88"></div>
        </div> */}
      </div>

      <div className="s12__animation-wrapper">
        <div className="s12__animation-container">
          <DotLottieReact
            className="s12__animation-object"
            src="home-s12-space-grid.json"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection12;