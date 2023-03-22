const Validator = require('validator');

module.exports = function validateResumeInput(data) {
  let errors = {};

  // data.text = validTitle(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 0, max: 50 })) {
    errors.text = 'Title must be between 0 and 50 characters';
  }

  if (Validator.isEmpty(data.file)) {
    errors.text = 'Resume file is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};