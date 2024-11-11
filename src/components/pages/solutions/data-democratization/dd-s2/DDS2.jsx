import React, { useState } from 'react';
import './dd-s2.css';

const DDS2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="dds2__section">
      <div className="dds2__contain">
        <div className="dds2__c8">
          <div
            className="dds2__c8__trigger dds2__bg-blue"
            onClick={handleToggle}
          >
            <h3 id="dds2__div-h3" className="dds2__text__display-small">
              What is data democratization and why does it matter?
            </h3>
            <div id="dds2__arrow-contain" className="dds2__c8__toggle">
              <img
                src="dds2__arrow.svg"
                className={`dds2__c8__toggle-icon ${
                  isExpanded ? 'dds2__rotate-icon' : ''
                }`}
              />
            </div>
          </div>
          <div
            className={`dds2__c8__content dds2__bg-blue ${
              isExpanded ? 'dds2__expanded' : ''
            }`}
          >
            <div className="dds2__c8__rte">
              <p className="dds2__text__body-large">
                &zwj;When every department - think Marketing, Finance, Sales and
                more - at your company relies on data to get their work done,
                your central IT team can become a bottleneck for data requests.
                Data democratization is the solution to this problem.
              </p>
              <div className="dds2__spacer__24"></div>
              <p className="dds2__text__body-large">
                Alleviate data engineering bottlenecks by empowering teams to
                integrate and centralize their own data without compromising
                data protection.
              </p>
              <div className="dds2__spacer__24"></div>
              <p className="dds2__text__body-large">
                Xemsoft&apos;s data movement platform comes complete with all
                the tools and features to automate compliance, protect sensitive
                data and control access.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dds2__spacer__88"></div>;
    </section>
  );
};

export default DDS2;
