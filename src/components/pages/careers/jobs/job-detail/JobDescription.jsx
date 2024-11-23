import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import openPositionsData from '../openPositionsData';
import './job-description.css'

// Utility function to convert HTML content to valid JSX
const createMarkup = (htmlContent) => {
  return { __html: htmlContent };
};

// Content generator function
const generateJobDescription = (content) => {
  return `
    <div>
      ${content}
    </div>
  `;
};

const JobDescription = () => {
  const { jobId } = useParams();
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobDescription = async () => {
      try {
        setLoading(true);
        setError(null);

        // Find the job in openPositionsData
        const job = openPositionsData
          .flatMap((dept) => dept.jobs)
          .find((job) => job.id === jobId);

        if (!job) {
          throw new Error('Job not found');
        }

        let descriptionContent;

        // Handle HTML file descriptions
        if (
          typeof job.description === 'string' &&
          job.description.endsWith('.html')
        ) {
          const response = await fetch(job.description);
          if (!response.ok) {
            throw new Error(
              `Failed to load job description: ${response.statusText}`
            );
          }
          descriptionContent = await response.text();
        }
        // Handle dynamic descriptions
        else if (typeof job.description === 'object') {
          descriptionContent = generateJobDescription(job.description);
        }
        // Handle pre-generated string descriptions
        else {
          descriptionContent = job.description;
        }

        setDescription(descriptionContent);
      } catch (err) {
        console.error('Error loading job description:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadJobDescription();
  }, [jobId]);

  if (loading) {
    return (
      <div className="jd__loading">
        <div className="jd__loading-spinner"></div>
        <p>Loading job description...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="jd__error">
        <p>Error loading job description: {error}</p>
        <button
          className="jd__button__outline jd__small"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="jd__description-container">
      <div dangerouslySetInnerHTML={createMarkup(description)} />
    </div>
  );
};

export default JobDescription;
