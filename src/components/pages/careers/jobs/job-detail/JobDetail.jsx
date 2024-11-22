import React from 'react';
import './job-detail.css';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import openPositionsData from '../openPositionsData';

const JobDetail = () => {
  const { jobId, locationId } = useParams();

  // Find the job by jobId
  const job = openPositionsData
    .flatMap((department) => department.jobs)
    .find((job) => job.id === jobId);

  // Find the location by locationId
  const location = job?.locations.find((loc) => loc.id === locationId);

  if (!job || !location) {
    return <div>Job or Location not found</div>;
  }

  return (
    <main>
      <Helmet>
        <title>{job.title}</title>
        <link rel="icon" type="image/svg+xml" href="" />
      </Helmet>
      <div className="jd__main">
        <div className="jd__show-only__mobile">
          <div className="jd__section">
            <div className="jd__spacer__48"></div>
            <div className="jd__contain">
              <div className="jd__base-grid">
                <div id="jd__div-1" className="jd__div-block-91">
                  <div className="jd__div-block-92">
                    <div className="jd__vertical__12">
                      <h1 id="jd__h1" className="jd__text__display-large">
                        {job.title}
                      </h1>
                      <div id="jd__location">{location.name}</div>
                    </div>
                    <div className="jd__spacer__40"></div>
                    <div className="jd__vertical__20">
                      <a
                        id="jd__a"
                        className="jd__button__outline jd__small jd__w-button"
                      >
                        Apply now
                      </a>
                      <Link id="jd__a" to="/careers">
                        View all open roles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="jd__spacer__48"></div>
            <div className="jd__bg">
              <img src="/jd__pattern.svg" className="jd__bg__image" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobDetail;
