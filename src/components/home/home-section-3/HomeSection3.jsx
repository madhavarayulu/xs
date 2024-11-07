import React from 'react';
import './home-section-3.css';
import { Link } from 'react-router-dom';

function HomeSection3() {
  return (
    <section className="home__section__3">
      <div className="home__s3__contain">
        <div className="home__s3__content-block">
          <h2 className="home__s3__text-display-small home__s3__text-white">
            Xemsoft&apos;s{' '}
            <span className="home__s3__text-citron-60">
              Modern Data Stack Event Series
            </span>{' '}
            is back
          </h2>
          <p className="home__s3__text-para">
            Learn from expert speakers, connect with a diverse data community
            and gather new insights to tackle your most pressing challenges in
            breaking down data silos.
          </p>
          <Link to="" className="home__s3__w-button">
            Learn more
          </Link>
        </div>
      </div>

      <div className="show-desktop-tablet-only">
        <div className="spacer__88"></div>
      </div>
    </section>
  );
}

export default HomeSection3;
