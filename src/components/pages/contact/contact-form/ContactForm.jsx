import React, { useState, useCallback } from 'react';
import { MailCheck, Loader2 } from 'lucide-react';
import { countryPhoneCodes } from './countryPhoneCodes';
import './contact-form.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91-IND',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const validateForm = useCallback(() => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone number validation (optional)
    const phoneRegex = /^[0-9]{10}$/;
    if (formData.phoneNumber.trim()) {
      if (!phoneRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Phone number must be 10 digits';
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Reset submit status when user modifies form
    if (submitStatus.error) {
      setSubmitStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: null,
      });
    }
  };

  const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous submit status
    setSubmitStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null,
    });

    // Validate form
    if (!validateForm()) {
      setSubmitStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: null,
      });
      return;
    }

    try {
      // Prepare submission data
      const submissionData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        fullPhoneNumber: formData.phoneNumber
          ? `${formData.countryCode.split('-')[0]}${formData.phoneNumber}`
          : '',
      };

      console.log('Submission URL:', `${BASE_URL}/api/contact`);
      console.log('Submission Data:', submissionData);

      // Send form data to backend
      const response = await fetch(`${BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
        credentials: 'include',
      });

      // Parse the response once
      const responseData = await response.json();

      // Log raw response for debugging
      console.log('Response Status:', response.status);
      console.log('Response Data:', responseData);

      if (!response.ok) {
        // Handle non-200 responses
        throw new Error(responseData.message || 'Submission failed');
      }

      // Success
      setSubmitStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        countryCode: '+91-IND',
        phoneNumber: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);

      setSubmitStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: error.message || 'Something went wrong. Please try again.',
      });
    }
  };

  // Reset form and error state
  const handleTryAgain = () => {
    setSubmitStatus({
      isSubmitting: false,
      isSubmitted: false,
      error: null,
    });
  };

  // Submission success view
  if (submitStatus.isSubmitted) {
    return (
      <div className="success-wrapper">
        <div className="form-submission-success">
          <h1>Thanks for reaching out!</h1>
          <p>Your message has been successfully sent.</p>
          <p>We&apos;ll get back to you shortly.</p>
          <MailCheck className="success-icon" size={48} color="green" />
        </div>
      </div>
    );
  }

  // Error view
  if (submitStatus.error) {
    return (
      <div className="error-wrapper">
        <div className="form-submission-error">
          <h2>Oops! Something went wrong</h2>
          <p>{submitStatus.error}</p>
          <button onClick={handleTryAgain} className="try-again-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <h1>Let&apos;s talk about your project</h1>
      <p>
        We have made it easy for clients to reach us and get their solutions
        weaved
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className={`form-input ${errors.name ? 'error' : ''}`}
            id="name"
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            disabled={submitStatus.isSubmitting}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            className={`form-input ${errors.email ? 'error' : ''}`}
            id="email"
            type="email"
            name="email"
            placeholder="E-Mail Address *"
            value={formData.email}
            onChange={handleChange}
            disabled={submitStatus.isSubmitting}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="phone-input-container">
          <select
            className="form-input country-selector"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            disabled={submitStatus.isSubmitting}
          >
            {countryPhoneCodes.map((country) => (
              <option
                key={country.iso}
                value={`${country.phoneCode}-${country.iso}`}
              >
                {country.iso} ({country.phoneCode}) - {country.countryName}
              </option>
            ))}
          </select>
          <input
            className={`form-input ${errors.phoneNumber ? 'error' : ''}`}
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled={submitStatus.isSubmitting}
          />
          {errors.phoneNumber && (
            <span className="error-message">{errors.phoneNumber}</span>
          )}
        </div>

        <div className="form-group">
          <input
            className={`form-input ${errors.subject ? 'error' : ''}`}
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject *"
            value={formData.subject}
            onChange={handleChange}
            disabled={submitStatus.isSubmitting}
          />
          {errors.subject && (
            <span className="error-message">{errors.subject}</span>
          )}
        </div>

        <div className="form-group">
          <textarea
            className={`form-input ${errors.message ? 'error' : ''}`}
            placeholder="Message *"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={submitStatus.isSubmitting}
          ></textarea>
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={submitStatus.isSubmitting}
        >
          {submitStatus.isSubmitting ? (
            <>
              <Loader2 className="animate-spin" />
              Sending...
            </>
          ) : (
            'Get a free consultation'
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
