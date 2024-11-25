import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import './job-form.css';

const FormField = ({ type, name, placeholder, value, onChange, error }) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleChange = (e) => {
    onChange(e);
    setIsFilled(e.target.value !== '');
  };

  return (
    <div className="jf__form-field">
      <fieldset
        className={`jf__fieldset ${isFilled ? 'filled' : ''} ${
          error ? 'error' : ''
        }`}
        data-placeholder={placeholder}
      >
        <legend>{placeholder}</legend>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      </fieldset>
      {error && (
        <span className="jf__error" id={`${name}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

const JobForm = ({ job, location }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: job ? job.title : '',
    jobLocation: location ? location.name : '',
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: 'File size should be less than 5MB',
        }));
        setFile(null);
        return;
      }
      if (
        ![
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ].includes(selectedFile.type)
      ) {
        setErrors((prev) => ({
          ...prev,
          file: 'Please upload PDF or Word documents only',
        }));
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setErrors((prev) => ({ ...prev, file: '' }));
    }
  };

  const handleFileKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!file) {
      newErrors.file = 'Resume/CV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const formDataToSend = new FormData();
        formDataToSend.append('firstName', formData.firstName);
        formDataToSend.append('lastName', formData.lastName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('jobTitle', formData.jobTitle);
        formDataToSend.append('jobLocation', formData.jobLocation);
        formDataToSend.append('resume', file);

        const response = await fetch(`${BASE_URL}/api/job-application`, {
          method: 'POST',
          body: formDataToSend,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to submit application');
        }

        setSubmitStatus({
          type: 'success',
          message:
            'Application submitted successfully! Check your email for confirmation.',
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          jobTitle: '',
          jobLocation: '',
        });
        setFile(null);
        setErrors({});
      } catch (error) {
        setSubmitStatus({
          type: 'error',
          message:
            error.message || 'Failed to submit application. Please try again.',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="jf__application--container">
      <div className="jf__application--header">
        <div className="jf__application--header--text">
          <div className="jf__application--header--title">
            <h2 className="jf__section-header jf__font-primary">
              Apply for this job
            </h2>
          </div>
          <div className="jf__application--header--required">
            <div className="jf__application--header--required--asterisk">
              <p className="jf__body jf__body__secondary">*</p>
            </div>
            <p className="jf__body jf__body__secondary">
              indicates a required field
            </p>
          </div>
        </div>
      </div>

      {submitStatus && (
        <div className={`jf__status-message ${submitStatus.type}`} role="alert">
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="jf__form" noValidate>
        <div className="jf__form-row">
          <FormField
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          />

          <FormField
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          />
        </div>

        <FormField
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
        />

        <FormField
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleInputChange}
          error={errors.phone}
        />

        <input
          type="hidden"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleInputChange}
        />

        <input
          type="hidden"
          name="jobLocation"
          value={formData.jobLocation}
          onChange={handleInputChange}
        />

        <div className="jf__form-field">
          <div className="jf__file-upload">
            <input
              type="file"
              id="resume-upload"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              aria-required="true"
              aria-invalid={errors.file ? 'true' : 'false'}
              aria-describedby="file-hint"
              tabIndex="0"
            />
            <label
              htmlFor="resume-upload"
              className="jf__file-label"
              onKeyDown={handleFileKeyDown}
              role="button"
              tabIndex="-1"
            >
              <Upload className="jf__upload-icon" aria-hidden="true" />
              <span>{file ? file.name : 'Upload Resume/CV *'}</span>
            </label>
            {errors.file && (
              <span className="jf__error" role="alert">
                {errors.file}
              </span>
            )}
            <p className="jf__file-hint" id="file-hint">
              Maximum file size: 5MB. Accepted formats: PDF, DOC, DOCX
            </p>
          </div>
        </div>

        {errors.submit && (
          <div className="jf__error-message">{errors.submit}</div>
        )}

        <div className="jf__form-submit">
          <button
            type="submit"
            className="jf__submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
