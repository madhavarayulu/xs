import React from 'react';
import './job-listings.css';
import { MoveRight } from 'lucide-react';
import openPositionsData from './openPositionsData';
import { Link } from 'react-router-dom';

// Utility function to create URL-friendly slugs
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

const JobLocation = ({ job, location }) => (
  <div>
    <Link
      to={`/jobs/${slugify(job.title)}/location/${slugify(location.name)}`}
      className="jobs__location jobs__w-inline-block"
    >
      <div>{location.name}</div>
      <div className="jobs__w-embed">
        <MoveRight />
      </div>
    </Link>
  </div>
);

const JobTitle = ({ job }) => (
  <div className="jobs__vertical__16">
    <div className="jobs__title">
      <div className="jobs__text__display-small">{job.title}</div>
    </div>
    {job.locations.map((location) => (
      <JobLocation key={location.id} job={job} location={location} />
    ))}
  </div>
);

const Department = ({ name, jobs }) => (
  <div className="jobs__w-layout-grid jobs__department">
    <div className="jobs__vertical__20">
      <div className="jobs__text__display-eyebrow jobs__text__gradient-purple">
        {name}
      </div>
      <div className="jobs__vertical__40">
        {jobs.map((job) => (
          <JobTitle key={job.id} job={job} />
        ))}
      </div>
    </div>
  </div>
);

const JobListings = () => {
  return (
    <section id="jobs" className="jobs__section">
      <div className="jobs__show-only__mobile">
        <div className="jobs__spacer__80"></div>
      </div>
      <div className="jobs__show-only__desktop-tablet">
        <div className="jobs__spacer__120"></div>
      </div>
      <div className="jobs__contain">
        <div className="jobs__vertical__48">
          <h2 className="jobs__text__display-large">
            We&apos;re better together
          </h2>
          <div id="jobs__app" className="jobs__vertical__48">
            <div id="jobs__div-1" className="jobs">
              {openPositionsData.map((department, index) => (
                <Department
                  key={index}
                  name={department.name}
                  jobs={department.jobs}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="jobs__show-only__mobile">
        <div className="jobs__spacer__80"></div>
      </div>
      <div className="jobs__show-only__desktop-tablet">
        <div className="jobs__spacer__80"></div>
      </div>
      <div className="jobs__bg__grey-05"></div>
    </section>
  );
};

export default JobListings;
