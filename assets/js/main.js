/**
 * Thiranex Task 1 — HTML5 Semantic Structure & Accessibility
 * Main JavaScript File for Sathya M's Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (!contactForm) return;

  // Form Fields & Error Display Elements
  const fields = {
    name: {
      input: document.getElementById('full-name'),
      error: document.getElementById('name-error'),
      validate: (val) => val.trim() !== '',
      errorMessage: 'Please enter your full name.'
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error'),
      validate: (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(val.trim());
      },
      errorMessage: 'Please enter a valid email address (e.g. name@example.com).'
    },
    subject: {
      input: document.getElementById('subject'),
      error: document.getElementById('subject-error'),
      validate: (val) => val.trim() !== '',
      errorMessage: 'Please enter a subject for your message.'
    },
    message: {
      input: document.getElementById('message'),
      error: document.getElementById('message-error'),
      validate: (val) => val.trim().length >= 10,
      errorMessage: 'Message must be at least 10 characters long.'
    }
  };

  // Clear specific field error
  function clearFieldError(fieldKey) {
    const field = fields[fieldKey];
    if (field && field.input) {
      field.input.removeAttribute('aria-invalid');
      if (field.error) {
        field.error.textContent = '';
        field.error.style.display = 'none';
      }
    }
  }

  // Set field error
  function setFieldError(fieldKey, message) {
    const field = fields[fieldKey];
    if (field && field.input) {
      field.input.setAttribute('aria-invalid', 'true');
      if (field.error) {
        field.error.textContent = message;
        field.error.style.display = 'block';
      }
    }
  }

  // Real-time validation clearing on input
  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    if (field.input) {
      field.input.addEventListener('input', () => {
        if (field.input.getAttribute('aria-invalid') === 'true') {
          if (field.validate(field.input.value)) {
            clearFieldError(key);
          }
        }
      });
    }
  });

  // Handle Form Submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    let firstInvalidInput = null;

    // Reset status box
    formStatus.className = 'form-status';
    formStatus.textContent = '';

    // Validate all fields
    Object.keys(fields).forEach((key) => {
      const field = fields[key];
      const value = field.input ? field.input.value : '';

      if (!field.validate(value)) {
        isValid = false;
        setFieldError(key, field.errorMessage);
        if (!firstInvalidInput) {
          firstInvalidInput = field.input;
        }
      } else {
        clearFieldError(key);
      }
    });

    if (!isValid) {
      // Accessible Error Messaging
      formStatus.className = 'form-status status-error';
      formStatus.textContent = 'Submission failed. Please correct the highlighted errors in the form above.';
      
      // Move focus for screen reader notification
      formStatus.focus();
      return;
    }

    // Accessible Success Messaging (Frontend Only Notice)
    formStatus.className = 'form-status status-success';
    formStatus.textContent = 'Thank you for reaching out! Your message was validated successfully. (Note: This is a frontend evaluation project; no backend email service is connected.)';

    // Reset Form Controls
    contactForm.reset();

    // Focus status region so screen reader announces success message
    formStatus.focus();
  });
});
