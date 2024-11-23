import React, { useState, useEffect } from 'react';
import './job-detail.css';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import openPositionsData from '../openPositionsData';
import JobDescription from './JobDescription';

const TabButton = ({ current, href, children }) => (
  <a
    className={`jd__tabs__menu-tab jd__w-inline-block ${
      current ? 'jd__w-current' : ''
    }`}
    href={href}
  >
    {children}
  </a>
);

const JobHeader = ({ job, location }) => (
  <div className="jd__div-block-92">
    <div className="jd__vertical__40">
      <h1 className="jd__text__display-large">{job.title}</h1>
      <div className="jd__location-text">{location.name}</div>
    </div>
    <div className="jd__spacer__40"></div>
    <div className="jd__vertical__20">
      <a href="#apply" className="jd__button__outline jd__small jd__w-button">
        Apply now
      </a>
      <Link to="/careers#jobs" className="jd__link">
        View all open roles
      </Link>
    </div>
  </div>
);

const JobContent = ({ job, activeTab }) => (
  <div className="jd__tabs__content">
    <div
      className={`jd__tabs__pane ${
        activeTab === 'about' ? 'jd__w-tab-active' : ''
      }`}
    >
      <div className="jd__spacer__64"></div>
      <div className="jd__vertical__64">
        <JobDescription description={job.description} />
        <a href="#apply" className="jd__button__outline jd__small jd__w-button">
          Apply now
        </a>
      </div>
    </div>

    <div
      className={`jd__tabs__pane ${
        activeTab === 'apply' ? 'jd__w-tab-active' : ''
      }`}
    >
      <div className="jd__vertical__64">
        <div id="grnhse__app" />
      </div>
    </div>
  </div>
);

const JobDetail = () => {
  const { jobId, locationId } = useParams();
  const [activeTab, setActiveTab] = useState('about');
  const [job, setJob] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const foundJob = openPositionsData
      .flatMap((department) => department.jobs)
      .find((job) => job.id === jobId);

    if (foundJob) {
      setJob(foundJob);
      setLocation(foundJob.locations.find((loc) => loc.id === locationId));
    }
  }, [jobId, locationId]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'about' || hash === 'apply') {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (!job || !location) {
    return (
      <div className="jd__error">
        <div className="jd__error-text">Job or Location not found</div>
      </div>
    );
  }

  return (
    <main className="jd__main">
      <Helmet>
        <title>{`${job.title} at ${location.name}`}</title>
        <meta
          name="description"
          content={`Join our team as ${job.title} in ${location.name}`}
        />
      </Helmet>

      {/* Mobile Header */}
      <div className="jd__show-only__mobile">
        <div className="jd__section">
          <div className="jd__spacer__48"></div>
          <div className="jd__contain">
            <div className="jd__base-grid">
              <div className="jd__div-block-91">
                <JobHeader job={job} location={location} />
              </div>
            </div>
          </div>
          <div className="jd__spacer__48"></div>
          <div className="jd__bg">
            <img src="/jd__pattern.svg" className="jd__bg__image" alt="" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="jd__section jd__overflow-visible">
        <div className="jd__show-only__desktop-tablet">
          <div className="jd__spacer__64"></div>
        </div>
        <div className="jd__contain">
          <div className="jd__base-grid">
            {/* Desktop Header */}
            <div className="jd__show-only__desktop-tablet jd__div-block-91">
              <JobHeader job={job} location={location} />
            </div>

            {/* Content Area */}
            <div id="jd__div-5">
              <div className="jd__spacer__48"></div>

              <div className="jd__tabs">
                <div className="jd__tabs__menu">
                  <TabButton current={activeTab === 'about'} href="#about">
                    About the role
                  </TabButton>
                  <TabButton current={activeTab === 'apply'} href="#apply">
                    Application
                  </TabButton>
                </div>
                <JobContent job={job} activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
        <div className="jd__show-only__desktop-tablet">
          <div className="jd__spacer__64"></div>
        </div>
      </section>
    </main>
  );
};

export default JobDetail;
