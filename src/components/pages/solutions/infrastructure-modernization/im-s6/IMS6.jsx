import React from 'react';
import './im-s6.css';

const IMS6 = () => {
  return (
    <section className="ims6__section">
      <div className="ims6__show-only__desktop-tablet">
        <div className="ims6__spacer__160"></div>
      </div>
      <div className="ims6__contain">
        <div className="ims6__base-grid">
          <div id="ims6__div-1">
            <h2 className="ims6__text__display-medium">
              No matter the source or replication type, we support it
            </h2>
            <div className="ims6__spacer__32"></div>
            <p id="ims6__p-1" className="ims6__text__body-large">
              Xemsoft replicates data efficiently with low latency, so your
              teams always have access to the freshest data.
            </p>
            <div className="ims6__show-only__mobile">
              <div className="ims6__spacer__98"></div>
            </div>
          </div>
          <div id="ims6__div-2" className="ims6__vertical__88">
            <div
              id="ims6__div-3"
              className="ims6__bullets__with-line ims6__left-padding__44"
            >
              <div className="ims6__vertical__4">
                <h3 id="ims6__h3" className="ims6__text__display-small">
                  Database CDC replication
                </h3>
                <div>
                  Optimized database migration to handle your largest data
                  volume with flexible connection options.
                </div>
              </div>
              <div className="ims6__bullets__line ims6__purple ims6__left-margin"></div>
            </div>
            <div
              id="ims6__div-3"
              className="ims6__bullets__with-line ims6__left-padding__44"
            >
              <div className="ims6__vertical__4">
                <h3 id="ims6__h3" className="ims6__text__display-small">
                  File replication
                </h3>
                <div>
                  Unlock the insights hidden in disparate files like CSVs in
                  Google Sheets or semi-structured files such as JSON or Avro
                  types.
                </div>
              </div>
              <div className="ims6__bullets__line ims6__purple ims6__left-margin"></div>
            </div>
            <div
              id="ims6__div-3"
              className="ims6__bullets__with-line ims6__left-padding__44"
            >
              <div className="ims6__vertical__4">
                <h3 id="ims6__h3" className="ims6__text__display-small">
                  SaaS replication
                </h3>
                <div>
                  Centralize all the data from across the tens to hundreds of
                  applications your organization uses to generate insights.
                </div>
              </div>
              <div className="ims6__bullets__line ims6__purple ims6__left-margin"></div>
            </div>
            <div
              id="ims6__div-3"
              className="ims6__bullets__with-line ims6__left-padding__44"
            >
              <div className="ims6__vertical__4">
                <h3 id="ims6__h3" className="ims6__text__display-small">
                  SAP replication
                </h3>
                <div>
                  Replicate your SAP data to various cloud destinations with
                  minimal source impact.
                </div>
              </div>
              <div className="ims6__bullets__line ims6__purple ims6__left-margin"></div>
            </div>
          </div>
        </div>
        <div className="ims6__show-only__mobile">
          <div className="ims6__spacer__80"></div>
        </div>
        <div className="ims6__show-only__desktop-tablet">
          <div className="ims6__spacer__160"></div>
        </div>
      </div>
    </section>
  );
};

export default IMS6;
