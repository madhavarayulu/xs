import React from 'react';
import './home-section-2.css';

function HomeSection2() {
  return (
    <section className="home__section__2">
      <div className="home__s2__contain">
        <div className="home__s2__text__center-mobile">
          <h2 className="home__s2__text__display-small">
            Trusted by data-driven companies
          </h2>
        </div>
        <div className="spacer__48"></div>
        <div className="home__s2__image__container">
          <img
            src="home__s2-morgan-stanley.svg"
            className="home__s2__image__container-image"
          />
          <img
            src="home__s2-cemex.svg"
            className="home__s2__image__container-image"
          />
          <img
            src="home__s2-vw.svg"
            className="home__s2__image__container-image"
          />
          <img
            src="home__s2-openai.svg"
            className="home__s2__image__container-image"
          />
          <img
            src="home__s2-salesforce.svg"
            className="home__s2__image__container-image"
          />
          <img
            src="home__s2-condenast.svg"
            className="home__s2__image__container-image"
          />
          <img
            src="home__s2-chrobinson.svg"
            className="home__s2__image__container-image"
          />
        </div>
      </div>

      <div className="show-desktop-tablet-only">
        <div className="spacer__88"></div>
      </div>
    </section>
  );
}

export default HomeSection2;
